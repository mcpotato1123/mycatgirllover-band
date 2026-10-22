# -*- coding: utf-8 -*-
"""Build the 336x480 band assets for the fan port from the extracted PC art.

Output layout follows the reference quick-app:
  common/img/b/<id>.jpg   672x480 panorama backgrounds (the app pans them)
  common/img/w/<id>.jpg   853x480 wide CG
  common/img/t/<id>.jpg   112x63 CG thumbs
  common/img/s/<tag>/<expr>.png    single-layer sprites
  common/img/ui/*         icon / logo / title / board / headbar / locked
"""
import os

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
os.chdir(BASE)
import shutil
from PIL import Image, ImageDraw, ImageFilter
import numpy as np

SRC = "extracted"
OUT = os.path.join("src", "common", "img")
W, H = 336, 480
PAN_W = 672
WIDE_W = 853

BLUR_BG = {
    "bathroom_inside", "bathroom_light", "classroom_day", "bedroom_sunset",
    "street3_day", "supermarket", "street2", "street2grey",
}

CG_RENAME = {"新增": "cg25"}


def ensure(*parts):
    p = os.path.join(OUT, *parts)
    os.makedirs(p, exist_ok=True)
    return p


def fit_width(im, width):
    return im.resize((width, int(im.height * width / im.width + 0.5)), Image.LANCZOS)


def panorama(im):
    """1920x1080 -> 853x480 -> 672x480 window (center)."""
    im = im.convert("RGB").resize((WIDE_W, H), Image.LANCZOS)
    left = (WIDE_W - PAN_W) // 2
    return im.crop((left, 0, left + PAN_W, H))


def wide(im):
    return im.convert("RGB").resize((WIDE_W, H), Image.LANCZOS)


def thumb(im, w=112, h=63):
    im = im.convert("RGB")
    s = max(w / im.width, h / im.height)
    im = im.resize((int(im.width * s + 0.5), int(im.height * s + 0.5)), Image.LANCZOS)
    x = (im.width - w) // 2
    y = (im.height - h) // 2
    return im.crop((x, y, x + w, y + h))


def background_id(name):
    return name


def build_backgrounds():
    d = ensure("b")
    ids = []

    def put(name, im):
        pano = panorama(im)
        pano.save(os.path.join(d, name + ".jpg"), "JPEG", quality=82, optimize=True, progressive=True)
        ids.append(name)
        if name in BLUR_BG:
            bp = name + "_b"
            panorama(im.filter(ImageFilter.GaussianBlur(4))).save(
                os.path.join(d, bp + ".jpg"), "JPEG", quality=80, optimize=True)
            ids.append(bp)

    bg_dir = os.path.join(SRC, "images", "background")
    for f in sorted(os.listdir(bg_dir)):
        if f.lower().endswith(".png"):
            name = os.path.splitext(f)[0].lower()
            put(background_id(name), Image.open(os.path.join(bg_dir, f)))

    for folder, prefix in (("scenery", "scenery_"), ("memory", "memory_")):
        src = os.path.join(SRC, "images", folder)
        for f in sorted(os.listdir(src)):
            name = prefix + os.path.splitext(f)[0].lower()
            put(name, Image.open(os.path.join(src, f)))
    print("backgrounds:", len(ids))
    return ids


def build_cg():
    dw, dt = ensure("w"), ensure("t")
    ids = []
    src = os.path.join(SRC, "images", "cg")
    for f in sorted(os.listdir(src)):
        name = os.path.splitext(f)[0].lower()
        name = CG_RENAME.get(name, name)
        im = Image.open(os.path.join(src, f))
        wide(im).save(os.path.join(dw, name + ".jpg"), "JPEG", quality=84, optimize=True, progressive=True)
        thumb(im).save(os.path.join(dt, name + ".jpg"), "JPEG", quality=82, optimize=True)
        ids.append(name)
    # SD 插图也进 CG 鉴赏
    sd = os.path.join(SRC, "images", "sd")
    for f in sorted(os.listdir(sd)):
        name = "sd" + os.path.splitext(f)[0].lower()[2:]
        im = Image.open(os.path.join(sd, f))
        wide(im).save(os.path.join(dw, name + ".jpg"), "JPEG", quality=84, optimize=True, progressive=True)
        thumb(im).save(os.path.join(dt, name + ".jpg"), "JPEG", quality=82, optimize=True)
        ids.append(name)
    print("cg:", len(ids))
    return ids


def build_sprites():
    counts = {}
    for tag in ("amber", "warmmu", "aunt", "lin", "zirui"):
        src = os.path.join(SRC, "images", "character", tag)
        dst = ensure("s", tag)
        n = 0
        for f in sorted(os.listdir(src)):
            if not f.lower().endswith(".png"):
                continue
            expr = os.path.splitext(f)[0]
            im = Image.open(os.path.join(src, f)).convert("RGBA")
            bbox = im.getchannel("A").getbbox()
            if bbox:
                im = im.crop(bbox)
            scale = 400.0 / im.height
            im = im.resize((max(1, int(im.width * scale)), 400), Image.LANCZOS)
            im.save(os.path.join(dst, expr + ".png"), "PNG", optimize=True)
            n += 1
        counts[tag] = n
    print("sprites:", counts)
    return counts


def rounded_icon(im, size, radius_ratio=0.23):
    """方形原图 -> 圆角图标（带透明外边），手环桌面图标就是圆角矩形。"""
    im = im.resize((size, size), Image.LANCZOS).convert("RGBA")
    mask = Image.new("L", (size, size), 0)
    ImageDraw.Draw(mask).rounded_rectangle(
        [0, 0, size - 1, size - 1], radius=int(size * radius_ratio), fill=255)
    out = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    out.paste(im, (0, 0), mask)
    return out


def build_ui():
    d = ensure("ui")
    icon = Image.open(os.path.join(SRC, "gui", "window_icon.png")).convert("RGBA")
    rounded_icon(icon, 192).save(os.path.join(d, "icon.png"))
    rounded_icon(icon, 120).save(os.path.join(d, "icon_small.png"))

    logo = Image.open(os.path.join(SRC, "gui", "overlay", "logo.png")).convert("RGBA")
    logo = fit_width(logo, 160)
    logo.save(os.path.join(d, "logo.png"))

    # title screen: rebuild the original 1920x1080 title composition, then portrait crop
    canvas = Image.new("RGBA", (1920, 1080), (0, 0, 0, 255))
    bg = Image.open(os.path.join(SRC, "gui", "overlay", "main_menu_background.png")).convert("RGBA")
    bg = bg.resize((int(bg.width * 0.575), int(bg.height * 0.575)), Image.LANCZOS)
    canvas.alpha_composite(bg, (0, 0))
    role = Image.open(os.path.join(SRC, "gui", "overlay", "main_menu_role_cat.png")).convert("RGBA")
    role = role.resize((int(role.width * 0.43), int(role.height * 0.43)), Image.LANCZOS)
    canvas.alpha_composite(role, (0, 160))
    front = Image.open(os.path.join(SRC, "gui", "overlay", "main_menu_front.png")).convert("RGBA")
    front = front.resize((int(front.width * 0.575), int(front.height * 0.575)), Image.LANCZOS)
    canvas.alpha_composite(front, (0, -200))

    # 标题页：上半部分是一张 16:9 的「长图」——完整复刻原作主界面
    # （背景 + 人物 + 前景 + 右上角艺术字），下半部分留给浅色菜单板
    title = canvas.copy()
    logo_full = Image.open(os.path.join(SRC, "gui", "overlay", "logo.png")).convert("RGBA")
    title.alpha_composite(logo_full, (1330, 122))
    band_h = int(round(W * 1080 / 1920.0))          # 336 -> 189
    banner = title.convert("RGB").resize((W, band_h), Image.LANCZOS)
    banner.save(os.path.join(d, "title_top.jpg"), "JPEG", quality=90, optimize=True, progressive=True)
    print("title banner %dx%d" % banner.size)

    # 竖屏取景：按人物透明度密度自动挑 756px 宽的窗口，保证两位女主都在画面里
    cw = int(1080 * W / H)  # 756
    alpha = Image.new("L", (1920, 1080), 0)
    alpha.paste(role.getchannel("A"), (0, 160))
    cols = np.asarray(alpha, dtype=np.float64).sum(axis=0)
    csum = np.concatenate([[0.0], np.cumsum(cols)])
    window = csum[cw:] - csum[:-cw]
    left = int(np.argmax(window))
    left = max(0, min(1920 - cw, left))
    print("title crop left =", left)
    crop = canvas.crop((left, 0, left + cw, 1080)).convert("RGB").resize((W, H), Image.LANCZOS)
    crop.save(os.path.join(d, "title_bg.jpg"), "JPEG", quality=88, optimize=True, progressive=True)

    # 封面完整版（给模拟器/预览用）：底部压暗，方便压菜单文字
    cover = crop.convert("RGBA")
    shade = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    sp = shade.load()
    for y in range(260, H):
        a = int(150 * ((y - 260) / (H - 260)) ** 1.3)
        for x in range(W):
            sp[x, y] = (6, 8, 14, a)
    cover = Image.alpha_composite(cover, shade)
    cover.convert("RGB").save(os.path.join(d, "title_bg_menu.jpg"), "JPEG", quality=86, optimize=True)

    # dialogue board: vertical gradient, transparent at the top
    board = Image.new("RGBA", (W, 180), (0, 0, 0, 0))
    px = board.load()
    for y in range(180):
        t = y / 179.0
        a = int(8 + 218 * (t ** 0.55))
        for x in range(W):
            px[x, y] = (12, 16, 26, min(235, a))
    board.save(os.path.join(d, "board.png"))

    # head bar for list pages
    head = Image.new("RGBA", (W, 72), (0, 0, 0, 0))
    hp = head.load()
    for y in range(72):
        a = int(238 - 120 * (y / 71.0))
        for x in range(W):
            hp[x, y] = (26, 30, 40, a)
    head.save(os.path.join(d, "headbar.png"))

    # locked thumbnail
    lock = Image.new("RGBA", (112, 63), (238, 238, 242, 255))
    dr = ImageDraw.Draw(lock)
    dr.rounded_rectangle([36, 20, 76, 46], 4, outline=(176, 176, 184, 255), width=3)
    dr.arc([42, 10, 70, 34], 180, 360, fill=(176, 176, 184, 255), width=3)
    lock.save(os.path.join(d, "locked.png"))
    print("ui done")


if __name__ == "__main__":
    bgs = build_backgrounds()
    cgs = build_cg()
    sprites = build_sprites()
    build_ui()
    total = sum(os.path.getsize(os.path.join(r, f)) for r, _, fs in os.walk(OUT) for f in fs)
    print("total %.2f MB" % (total / 1048576.0))
    import json
    with open(os.path.join("tools", "asset_index.json"), "w", encoding="utf-8") as f:
        json.dump({"bg": bgs, "cg": cgs, "sprites": sprites}, f, ensure_ascii=False)
