# -*- coding: utf-8 -*-
"""Compile the original Ren'Py scripts into the Vela stream format used by vm.js.

    s \t who \t text          dialogue (who empty = narration)
    b \t bg                   background id
    p \t tag \t pos \t expr   sprite (expr is one of the extracted expressions)
    h \t tag | @fg            hide sprite / CG
    g \t cg                   full screen CG
    c \t title                chapter title
    e                         end

Outputs src/common/story/index.txt + chunk-NNN.txt (128 lines per chunk).
"""
import io
import json
import os

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
os.chdir(BASE)
import re

RPR = "extracted/rpy"
OUT = os.path.join("src", "common", "story")
CHUNK_SIZE = 128

CHAPTERS = [
    ("序章 · 雨夜", "main_scene"),
    ("第一章 · 猫娘", "main_continue"),
    ("第二章 · 琉璃", "main_continue2"),
    ("支线一 · 琥珀", "subscene_1"),
    ("支线二 · 琉璃", "subscene_2"),
    ("后日谈 · 夏日", "afterstory"),
]

SCRIPTS = [
    "scripts/script.rpy",
    "scripts/script_sub_1.rpy",
    "scripts/script_sub_2.rpy",
    "scripts/script_afterstory.rpy",
]

IMAGE_RE = re.compile(r'^image\s+([A-Za-z_]\w*)\s+(.+?)\s*=\s*"([^"]+)"')
IMAGE_BLOCK_RE = re.compile(r'^image\s+([A-Za-z_]\w*)\s+(.+?)\s*:\s*$')
STRING_RE = re.compile(r'"([^"]+\.(?:png|jpg|jpeg|webp))"')
LABEL_RE = re.compile(r'^label\s+([A-Za-z_][\w.]*)\s*(?:\(.*\))?\s*:')
SCENE_RE = re.compile(r'^(scene|show|hide)\s+(.*)$')
SAY_RE = re.compile(r'^([A-Za-z_]\w*)\s+"(.*)"\s*(?:with\s+.*)?$')
NARRATE_RE = re.compile(r'^"(.*)"\s*$')
TAG_RE = re.compile(r'\{[^{}]*\}')
CG_RENAME = {"新增": "cg25"}


def load_image_map():
    mapping = {}
    lines = io.open(os.path.join(RPR, "pic.rpy"), encoding="utf-8-sig").read().splitlines()
    pending = None
    for line in lines:
        if line.startswith("image "):
            m = IMAGE_RE.match(line)
            if m:
                mapping[(m.group(1).lower(), m.group(2).strip().lower())] = m.group(3)
                pending = None
                continue
            b = IMAGE_BLOCK_RE.match(line)
            if b:
                pending = (b.group(1).lower(), b.group(2).strip().lower())
                continue
        elif pending is not None:
            s = STRING_RE.search(line)
            if s:
                mapping[pending] = s.group(1)
                pending = None
    return mapping


def asset_of(path):
    path = path.replace("\\", "/")
    base = os.path.splitext(os.path.basename(path))[0].lower()
    parts = path.split("/")
    if "/character/" in "/" + path:
        return ("sp", parts[-2].lower() + "_" + base)
    folder = parts[-2].lower() if len(parts) > 1 else ""
    if folder == "background":
        return ("bg", base)
    if folder == "cg":
        return ("cg", CG_RENAME.get(base, base))
    if folder == "scenery":
        return ("bg", "scenery_" + base)
    if folder == "memory":
        return ("bg", "memory_" + base)
    return None


def resolve(img_map, tokens):
    if not tokens:
        return None
    group = tokens[0].lower()
    rest = tokens[1:]
    if group == "black":
        return ("bg", "black")
    for cand in (rest, rest[:1]):
        key = (group, " ".join(cand).lower())
        if key in img_map:
            return asset_of(img_map[key])
    if group in ("mask", "scenery", "memory"):
        name = " ".join(rest).lower()
        plain = name.replace("rev", "").replace("blur", "")
        for (g, n), p in img_map.items():
            if g == "bg" and n == plain:
                return asset_of(p)
    return None


def clean(text):
    text = text.replace('\\"', '"').replace("\\n", "")
    text = TAG_RE.sub("", text)
    return text.strip()


def parse(path, img_map):
    """Yield ('label'|'bg'|'cg'|'sp'|'hide'|'say', payload)."""
    events = []
    state = {"bg": ("bg", "black"), "sp": {}}
    chars = {}
    for raw in io.open(path, encoding="utf-8-sig"):
        s = raw.strip()
        if not s or s.startswith("#"):
            continue
        if s.startswith("define ") and "Character(" in s:
            m = re.match(r'define\s+(\w+)\s*=\s*Character\s*\(\s*(["\'])(.*?)\2', s)
            if m:
                chars[m.group(1)] = m.group(3)
            continue
        lm = LABEL_RE.match(s)
        if lm:
            events.append(("label", lm.group(1)))
            continue
        sm = SCENE_RE.match(s)
        if sm:
            op, body = sm.group(1), sm.group(2)
            toks = []
            for w in body.split():
                if w in ("onlayer", "with", "at", "behind", "as", "zorder"):
                    break
                toks.append(w)
            pos = "c"
            if "stand_left" in body or "left_to" in body or "at left" in body:
                pos = "l"
            elif "stand_right" in body or "right_to" in body or "at right" in body:
                pos = "r"

            if op == "hide":
                if toks and toks[0] in chars:
                    state["sp"].pop(toks[0], None)
                    events.append(("hide", toks[0]))
                elif toks and toks[0] == "cg":
                    state["cg"] = ""
                    events.append(("hcg", ""))
                continue

            info = resolve(img_map, toks)
            if not info:
                continue
            kind, name = info
            blur = "blur" in body.lower()
            if kind == "sp":
                char, expr = name.split("_", 1)
                state["sp"][char] = (expr, pos)
                events.append(("sp", (char, pos, expr)))
            elif kind == "cg":
                state["cg"] = name
                events.append(("cg", name))
            else:
                if op == "scene":
                    state["sp"] = {}
                state["bg"] = (kind, name + ("_b" if blur else ""))
                events.append(("bg", state["bg"][1]))
            continue

        say = SAY_RE.match(s)
        if say:
            raw_who, text = say.group(1), clean(say.group(2))
            who = "" if raw_who in ("centered", "extend", "nvl") else chars.get(raw_who, raw_who)
            if text:
                events.append(("say", (who, text)))
            continue
        nar = NARRATE_RE.match(s)
        if nar:
            text = clean(nar.group(1))
            if text:
                events.append(("say", ("", text)))
    return events


def main():
    img_map = load_image_map()
    all_events = []
    for rel in SCRIPTS:
        all_events.extend(parse(os.path.join(RPR, rel), img_map))

    title_of = dict((label, title) for title, label in CHAPTERS)
    ins = []          # list of (op, fields)
    chapters = []
    cur_bg = None
    cur_sp = {}
    cur_fg = ""
    pending_chapter = None

    def flush_bg():
        nonlocal cur_bg
        if cur_bg:
            ins.append(("b", cur_bg))

    for ev in all_events:
        kind, payload = ev
        if kind == "label":
            if payload in title_of:
                start_pc = len(ins)
                chapters.append({
                    "id": "ch%d" % (len(chapters) + 1),
                    "title": title_of[payload],
                    "start": start_pc,
                    "label": payload,
                })
                ins.append(("c", title_of[payload]))
                # 续章沿用当前背景；独立支线章节从黑色开始，别继承上一章的 END 图
                if len(chapters) >= 4:
                    ins.append(("b", "black"))
                elif cur_bg:
                    ins.append(("b", cur_bg))
                pending_chapter = chapters[-1]
            continue
        if kind == "bg":
            if payload != cur_bg:
                cur_bg = payload
                cur_fg = ""
                ins.append(("b", payload))
                cur_sp = {}
                pending_chapter = None
        elif kind == "cg":
            if payload != cur_fg:
                cur_fg = payload
                ins.append(("g", payload))
        elif kind == "hcg":
            if cur_fg:
                cur_fg = ""
                ins.append(("h", "@fg"))
        elif kind == "sp":
            char, pos, expr = payload
            cur_sp[char] = (expr, pos)
            ins.append(("p", (char, pos, expr)))
        elif kind == "hide":
            if payload in cur_sp:
                cur_sp.pop(payload)
                ins.append(("h", payload))
        elif kind == "say":
            who, text = payload
            if pending_chapter is not None and pending_chapter["start"] is None:
                pending_chapter["start"] = len(ins)
            ins.append(("s", (who, text)))

    ins.append(("e", None))
    if pending_chapter is not None and pending_chapter["start"] is None:
        pending_chapter["start"] = len(ins) - 1

    # fill missing chapter starts (a chapter whose first say never arrived)
    last = 0
    for ch in chapters:
        if ch["start"] is None:
            ch["start"] = last
        last = ch["start"]

    lines = []
    for op, payload in ins:
        if op == "s":
            lines.append("s\t%s\t%s" % (payload[0], payload[1].replace("\t", " ")))
        elif op == "b":
            lines.append("b\t" + payload)
        elif op == "g":
            lines.append("g\t" + payload)
        elif op == "h":
            lines.append("h\t" + payload)
        elif op == "p":
            lines.append("p\t%s\t%s\t%s" % payload)
        elif op == "c":
            lines.append("c\t" + payload)
        elif op == "e":
            lines.append("e")

    os.makedirs(OUT, exist_ok=True)
    for f in os.listdir(OUT):
        os.remove(os.path.join(OUT, f))

    chunks = []
    for start in range(0, len(lines), CHUNK_SIZE):
        part = lines[start:start + CHUNK_SIZE]
        name = "chunk-%03d.txt" % (start // CHUNK_SIZE)
        with io.open(os.path.join(OUT, name), "w", encoding="utf-8", newline="\n") as f:
            f.write("\n".join(part) + "\n")
        chunks.append({"file": "/common/story/" + name, "start": start, "count": len(part)})

    index = {
        "version": 1,
        "total": len(lines),
        "chapters": chapters,
        "chunks": chunks,
        "says": sum(1 for op, _ in ins if op == "s"),
        "bg": sum(1 for op, _ in ins if op == "b"),
        "sp": sum(1 for op, _ in ins if op == "p"),
    }
    with io.open(os.path.join(OUT, "index.txt"), "w", encoding="utf-8", newline="\n") as f:
        json.dump(index, f, ensure_ascii=False, separators=(",", ":"))

    print("instructions:", len(lines), "says:", index["says"], "chunks:", len(chunks))
    for ch in chapters:
        print("  %-4s %-6d %s" % (ch["id"], ch["start"], ch["title"]))


if __name__ == "__main__":
    main()
