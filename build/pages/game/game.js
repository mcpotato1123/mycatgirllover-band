export default function(global, globalThis, window, $app_exports$, $app_evaluate$) {
    var org_app_require = $app_require$;
    (function(global, globalThis, window, $app_exports$, $app_evaluate$) {
        var setTimeout = global.setTimeout;
        var setInterval = global.setInterval;
        var clearTimeout = global.clearTimeout;
        var clearInterval = global.clearInterval;
        var $app_require$1 = global.$app_require$ || org_app_require;
        var createPageHandler = function() {
            return (()=>{
                var __webpack_modules__ = {
                    "./src/common/assets.js" (__unused_rspack_module, exports) {
                        "use strict";
                        Object.defineProperty(exports, "__esModule", {
                            value: true
                        });
                        exports.SPRITES = exports.CG_WIDE = exports.CG = exports.BG = void 0;
                        exports.bgPath = bgPath;
                        exports.cgPath = cgPath;
                        exports.cgThumb = cgThumb;
                        exports.cgWide = cgWide;
                        exports.hasSprite = hasSprite;
                        exports.spritePath = spritePath;
                        const BG = exports.BG = [
                            "black",
                            "street2grey_b",
                            "street2_b",
                            "street2",
                            "bedroom_light",
                            "scenery_rainstorm",
                            "bedroom_day",
                            "door_day",
                            "classroom_day",
                            "scenery_outer",
                            "classroom_day_b",
                            "school_day",
                            "street_day",
                            "shop",
                            "shopout_sunset",
                            "scenery_door307",
                            "white",
                            "bedroom_sunset",
                            "bedroom_sunset_b",
                            "scenery_stars",
                            "bathroom_inside_b",
                            "nexhos",
                            "street3_day",
                            "street3_day_b",
                            "door_night",
                            "scenery_door305",
                            "scenery_qingkong",
                            "scenery_sunset",
                            "bedroom2",
                            "memory_memory1",
                            "memory_memory2",
                            "memory_memory2_1",
                            "memory_memory3",
                            "scenery_shexiangkuang",
                            "memory_memory4",
                            "door_sunset",
                            "end",
                            "supermarket",
                            "bathroom_light_b",
                            "supermarket_b",
                            "station"
                        ];
                        const CG = exports.CG = [
                            "cg01",
                            "cg01_1",
                            "cg02_1",
                            "cg02",
                            "cg21_1",
                            "cg08",
                            "cg08_1",
                            "cg08_2",
                            "cg11",
                            "cg11_1",
                            "cg12",
                            "cg12_1",
                            "cg12_2",
                            "cg14",
                            "cg25",
                            "cg16",
                            "cg16_1",
                            "cg18",
                            "cg19",
                            "cg21",
                            "cg21_2",
                            "cg22",
                            "cg24",
                            "cg23",
                            "cg23_1"
                        ];
                        const SPRITES = exports.SPRITES = {
                            amber: [
                                "ah.png",
                                "angry.png",
                                "contempt.png",
                                "cry.png",
                                "dame.png",
                                "expressionless.png",
                                "glad.png",
                                "happy.png",
                                "harakuro.png",
                                "normal.png",
                                "petrifaction.png",
                                "sad.png",
                                "smilecry.png",
                                "yandere.png",
                                "yandereangry.png"
                            ],
                            aunt: [
                                "happy.png",
                                "hurry.png",
                                "normal.png",
                                "sad.png",
                                "verysad.png"
                            ],
                            lin: [
                                "embarrassed.png",
                                "happy.png",
                                "sad.png",
                                "superised.png"
                            ],
                            warmmu: [
                                "ah.png",
                                "angry.png",
                                "contempt.png",
                                "cry.png",
                                "dame.png",
                                "glad.png",
                                "happy.png",
                                "harakuro.png",
                                "normal.png",
                                "petrifaction.png",
                                "sad.png",
                                "smilecry.png",
                                "yandere.png",
                                "yandereangry.png"
                            ],
                            zirui: [
                                "angry.png",
                                "happy.png",
                                "normal.png",
                                "sad.png",
                                "shy.png"
                            ]
                        };
                        const CG_WIDE = exports.CG_WIDE = {
                            cg01: 853,
                            cg01_1: 853,
                            cg02_1: 853,
                            cg02: 853,
                            cg21_1: 853,
                            cg08: 853,
                            cg08_1: 853,
                            cg08_2: 853,
                            cg11: 853,
                            cg11_1: 853,
                            cg12: 853,
                            cg12_1: 853,
                            cg12_2: 853,
                            cg14: 853,
                            cg25: 853,
                            cg16: 853,
                            cg16_1: 853,
                            cg18: 853,
                            cg19: 853,
                            cg21: 853,
                            cg21_2: 853,
                            cg22: 853,
                            cg24: 853,
                            cg23: 853,
                            cg23_1: 853
                        };
                        function bgPath(id) {
                            return '/common/img/b/' + id + '.jpg';
                        }
                        function cgPath(id) {
                            return '/common/img/w/' + id + '.jpg';
                        }
                        function cgThumb(id) {
                            return '/common/img/t/' + id + '.jpg';
                        }
                        function cgWide(id) {
                            return '/common/img/w/' + id + '.jpg';
                        }
                        function spritePath(tag, file) {
                            return '/common/img/s/' + tag + '/' + file;
                        }
                        function hasSprite(tag, file) {
                            return !!(SPRITES[tag] && SPRITES[tag].indexOf(file) >= 0);
                        }
                    },
                    "./src/common/reader.js" (__unused_rspack_module, exports) {
                        "use strict";
                        Object.defineProperty(exports, "__esModule", {
                            value: true
                        });
                        exports.TEXT_TOP = exports.TEXT_PAD = exports.TEXT_BOX_W = exports.TEXT_BOX_H = exports.SPEED_MIN = exports.SPEED_MAX = exports.SIZE_MIN = exports.SIZE_MAX = exports.PANEL_TOP = exports.PANEL_H = exports.NAME_TOP = exports.MAX_SLOTS = exports.MAX_LINES = exports.DEFAULT_SETTINGS = exports.AUTO_MIN = exports.AUTO_MAX = void 0;
                        exports.autoDelay = autoDelay;
                        exports.layout = layout;
                        exports.loadAutoSave = loadAutoSave;
                        exports.loadCleared = loadCleared;
                        exports.loadSaves = loadSaves;
                        exports.loadSeen = loadSeen;
                        exports.loadSettings = loadSettings;
                        exports.markCleared = markCleared;
                        exports.normalizeSettings = normalizeSettings;
                        exports.paginateText = paginateText;
                        exports.readJSON = readJSON;
                        exports.saveAutoSave = saveAutoSave;
                        exports.saveSaves = saveSaves;
                        exports.saveSeen = saveSeen;
                        exports.saveSettings = saveSettings;
                        exports.wrapText = wrapText;
                        exports.writeJSON = writeJSON;
                        var _system = _interopRequireDefault($app_require$1("@app-module/system.storage"));
                        function _interopRequireDefault(e) {
                            return e && e.__esModule ? e : {
                                default: e
                            };
                        }
                        const SIZE_MIN = exports.SIZE_MIN = 14;
                        const SIZE_MAX = exports.SIZE_MAX = 30;
                        const SPEED_MIN = exports.SPEED_MIN = 0;
                        const SPEED_MAX = exports.SPEED_MAX = 120;
                        const AUTO_MIN = exports.AUTO_MIN = 0;
                        const AUTO_MAX = exports.AUTO_MAX = 200;
                        const MAX_SLOTS = exports.MAX_SLOTS = 6;
                        const DEFAULT_SETTINGS = exports.DEFAULT_SETTINGS = {
                            size: 20,
                            speed: 28,
                            autoMs: 0,
                            fast: false,
                            keepOn: true,
                            longpress: 'off'
                        };
                        const PANEL_TOP = exports.PANEL_TOP = 330;
                        const PANEL_H = exports.PANEL_H = 150;
                        const NAME_TOP = exports.NAME_TOP = 292;
                        const TEXT_TOP = exports.TEXT_TOP = 338;
                        const TEXT_BOX_W = exports.TEXT_BOX_W = 316;
                        const TEXT_PAD = exports.TEXT_PAD = 6;
                        const TEXT_BOX_H = exports.TEXT_BOX_H = 144;
                        const MAX_LINES = exports.MAX_LINES = 6;
                        function layout(settings) {
                            const size = clampInt(settings.size, SIZE_MIN, SIZE_MAX, DEFAULT_SETTINGS.size);
                            const lineH = size + 4;
                            return {
                                size: size,
                                lineH: lineH,
                                cpl: Math.max(4, Math.floor((TEXT_BOX_W - TEXT_PAD) / size)),
                                lpp: Math.max(1, Math.min(MAX_LINES, Math.floor(TEXT_BOX_H / lineH)))
                            };
                        }
                        function clampInt(v, lo, hi, dflt) {
                            const n = Math.round(Number(v));
                            if (!isFinite(n)) return dflt;
                            return Math.max(lo, Math.min(hi, n));
                        }
                        function normalizeSettings(raw) {
                            const s = Object.assign({}, DEFAULT_SETTINGS, raw || {});
                            s.size = clampInt(s.size, SIZE_MIN, SIZE_MAX, DEFAULT_SETTINGS.size);
                            s.speed = clampInt(s.speed, SPEED_MIN, SPEED_MAX, DEFAULT_SETTINGS.speed);
                            s.autoMs = clampInt(s.autoMs, AUTO_MIN, AUTO_MAX, DEFAULT_SETTINGS.autoMs);
                            s.fast = false;
                            s.keepOn = void 0 === s.keepOn || null === s.keepOn ? DEFAULT_SETTINGS.keepOn : !!s.keepOn;
                            if (true === s.longpress) s.longpress = 'hide';
                            else if (false === s.longpress) s.longpress = 'off';
                            else if ('hide' !== s.longpress && 'fast' !== s.longpress && 'off' !== s.longpress) s.longpress = DEFAULT_SETTINGS.longpress;
                            delete s.auto;
                            delete s.autoSpeed;
                            return s;
                        }
                        function autoDelay(text, autoMs) {
                            const n = String(text || '').replace(/\s/g, '').length;
                            return Math.max(1200, Math.min(12000, Math.round(700 + n * autoMs)));
                        }
                        const BREAK_AFTER = '，。！？；：、）」』…—';
                        function wrapText(text, cpl) {
                            const lines = [];
                            const raws = String(text || '').split('\n');
                            for(let i = 0; i < raws.length; i++){
                                let s = raws[i];
                                if ('' === s) {
                                    lines.push('');
                                    continue;
                                }
                                while(s.length > cpl){
                                    let cut = cpl;
                                    const lo = Math.max(2, cpl - 8);
                                    for(let k = cpl; k > lo; k--)if (BREAK_AFTER.indexOf(s.charAt(k - 1)) >= 0) {
                                        cut = k;
                                        break;
                                    }
                                    lines.push(s.slice(0, cut));
                                    s = s.slice(cut);
                                }
                                lines.push(s);
                            }
                            return lines.length ? lines : [
                                ''
                            ];
                        }
                        function paginateText(text, cpl, lpp) {
                            const lines = wrapText(text, cpl);
                            if (!lines.length) return [
                                [
                                    ''
                                ]
                            ];
                            if (lines.length <= lpp) return [
                                lines
                            ];
                            const pages = Math.ceil(lines.length / lpp);
                            const per = Math.ceil(lines.length / pages);
                            const out = [];
                            for(let i = 0; i < lines.length; i += per){
                                const chunk = lines.slice(i, i + per);
                                const last = out.length ? out[out.length - 1] : null;
                                if (last && last.length + chunk.length <= lpp) out[out.length - 1] = last.concat(chunk);
                                else out.push(chunk);
                            }
                            return out;
                        }
                        function readJSON(key, fallback, done) {
                            _system.default.get({
                                key: key,
                                default: '',
                                success: (v)=>{
                                    if (!v) return done(fallback);
                                    try {
                                        done(JSON.parse(v));
                                    } catch (e) {
                                        done(fallback);
                                    }
                                },
                                fail: ()=>done(fallback)
                            });
                        }
                        function writeJSON(key, value, done) {
                            _system.default.set({
                                key: key,
                                value: JSON.stringify(value),
                                success: ()=>{
                                    if (done) done(true);
                                },
                                fail: ()=>{
                                    if (done) done(false);
                                }
                            });
                        }
                        function loadSettings(done) {
                            readJSON('settings', null, (v)=>done(normalizeSettings(v)));
                        }
                        function saveSettings(s, done) {
                            const t = Object.assign({}, s);
                            delete t.fast;
                            writeJSON('settings', t, done);
                        }
                        function loadSaves(done) {
                            readJSON('saves', [], (v)=>done(Array.isArray(v) ? v : []));
                        }
                        function saveSaves(list, done) {
                            writeJSON('saves', list, done);
                        }
                        function loadAutoSave(done) {
                            readJSON('autoSave', null, done);
                        }
                        function saveAutoSave(data, done) {
                            writeJSON('autoSave', data, done);
                        }
                        function loadSeen(done) {
                            readJSON('cgSeen', [], (v)=>done(Array.isArray(v) ? v : []));
                        }
                        function saveSeen(list, done) {
                            writeJSON('cgSeen', list, done);
                        }
                        function loadCleared(done) {
                            readJSON('cleared', null, (v)=>done(!!(v && v.ok)));
                        }
                        function markCleared(done) {
                            writeJSON('cleared', {
                                ok: 1,
                                at: Date.now()
                            }, done);
                        }
                    },
                    "./src/common/vm.js" (__unused_rspack_module, exports) {
                        "use strict";
                        Object.defineProperty(exports, "__esModule", {
                            value: true
                        });
                        exports.CHUNK = void 0;
                        exports.blankState = blankState;
                        exports.createReader = createReader;
                        exports.slotChars = slotChars;
                        const CHUNK = exports.CHUNK = 128;
                        function blankState() {
                            return {
                                pc: 0,
                                bg: 'black',
                                fg: '',
                                chars: {},
                                name: '常夏',
                                date: '',
                                chapterTitle: '',
                                chapterId: '',
                                vars: {}
                            };
                        }
                        function createReader(readText) {
                            const reader = {
                                index: null,
                                cache: {},
                                pending: {},
                                order: [],
                                state: blankState(),
                                frame: null,
                                init (done) {
                                    readText('/common/story/index.txt', (err, text)=>{
                                        if (err) return done(err);
                                        try {
                                            reader.index = JSON.parse(text);
                                        } catch (e) {
                                            return done('index.json 解析失败');
                                        }
                                        done(null, reader.index);
                                    });
                                },
                                chapter (id) {
                                    const list = reader.index.chapters;
                                    for(let i = 0; i < list.length; i++)if (list[i].id === id) return list[i];
                                    return list[0];
                                },
                                chunkOf (pc) {
                                    const list = reader.index.chunks;
                                    let lo = 0;
                                    let hi = list.length - 1;
                                    while(lo < hi){
                                        const mid = lo + hi + 1 >> 1;
                                        if (list[mid].start <= pc) lo = mid;
                                        else hi = mid - 1;
                                    }
                                    return list[lo];
                                },
                                loadChunk (chunk, done) {
                                    const hit = reader.cache[chunk.start];
                                    if (hit) return done(null, hit);
                                    if (reader.pending[chunk.start]) return void reader.pending[chunk.start].push(done);
                                    reader.pending[chunk.start] = [
                                        done
                                    ];
                                    const path = '/' === chunk.file.charAt(0) ? chunk.file : '/common/story/' + chunk.file;
                                    readText(path, (err, text)=>{
                                        const wait = reader.pending[chunk.start] || [];
                                        delete reader.pending[chunk.start];
                                        if (err) {
                                            for(let i = 0; i < wait.length; i++)wait[i](err);
                                            return;
                                        }
                                        const nodes = [];
                                        const lines = String(text).split('\n');
                                        for(let i = 0; i < lines.length; i++)if (lines[i]) nodes.push(lines[i].split('\t'));
                                        if (nodes.length !== chunk.count) {
                                            for(let i = 0; i < wait.length; i++)wait[i]('分块长度不符 ' + chunk.file);
                                            return;
                                        }
                                        reader.cache[chunk.start] = nodes;
                                        reader.order.push(chunk.start);
                                        if (reader.order.length > 4) delete reader.cache[reader.order.shift()];
                                        for(let i = 0; i < wait.length; i++)wait[i](null, nodes);
                                    });
                                },
                                start (chapterId, done) {
                                    reader.state = blankState();
                                    const ch = reader.chapter(chapterId);
                                    reader.state.pc = ch.start;
                                    reader.state.chapterId = ch.id;
                                    reader.state.chapterTitle = ch.title;
                                    reader.frame = null;
                                    reader.step(done);
                                },
                                resume (snapshot, done) {
                                    reader.state = Object.assign(blankState(), snapshot.state || {});
                                    reader.state.vars = snapshot.vars || {};
                                    reader.frame = null;
                                    reader.step(done);
                                },
                                step (done) {
                                    const s = reader.state;
                                    const chunk = reader.chunkOf(s.pc);
                                    reader.loadChunk(chunk, (err, nodes)=>{
                                        if (err) return done(err);
                                        for(;;){
                                            if (s.pc < chunk.start || s.pc >= chunk.start + chunk.count) return reader.step(done);
                                            const ins = nodes[s.pc - chunk.start];
                                            if (!ins) return done('节点越界 ' + s.pc);
                                            const op = ins[0];
                                            if ('s' === op) {
                                                reader.frame = {
                                                    kind: 'say',
                                                    who: '@' === ins[1] ? s.name : ins[1],
                                                    text: ins[2]
                                                };
                                                return done(null, reader.frame);
                                            }
                                            if ('m' === op) {
                                                const parts = ins[1].split('\x1f');
                                                const options = [];
                                                for(let i = 0; i < parts.length; i += 2)options.push({
                                                    text: parts[i],
                                                    target: Number(parts[i + 1])
                                                });
                                                reader.frame = {
                                                    kind: 'menu',
                                                    options: options
                                                };
                                                return done(null, reader.frame);
                                            }
                                            if ('e' === op) {
                                                reader.frame = {
                                                    kind: 'end'
                                                };
                                                return done(null, reader.frame);
                                            }
                                            if ('b' === op) {
                                                s.bg = ins[1];
                                                s.fg = '';
                                            } else if ('g' === op) s.fg = ins[1];
                                            else if ('p' === op) {
                                                const prev = s.chars[ins[1]] || {};
                                                s.chars[ins[1]] = {
                                                    tag: ins[1],
                                                    pos: ins[2] || prev.pos || 'c',
                                                    eye: ins[3] || prev.eye || 'normal',
                                                    brow: ins[4] || prev.brow || 'normal',
                                                    mouth: ins[5] || prev.mouth || 'speak',
                                                    extra: ins[6] || ''
                                                };
                                            } else if ('h' === op) if ('@fg' === ins[1]) s.fg = '';
                                            else delete s.chars[ins[1]];
                                            else if ('n' === op) s.name = ins[1];
                                            else if ('d' === op) s.date = ins[1];
                                            else if ('c' === op) s.chapterTitle = ins[1];
                                            else if ('v' === op) {
                                                const cur = Number(s.vars[ins[1]] || 0);
                                                s.vars[ins[1]] = '+' === ins[2].charAt(0) ? cur + Number(ins[2].slice(1)) : Number(ins[2]);
                                            } else if ('q' === op) {
                                                const a = Number(s.vars[ins[1]] || 0);
                                                const b = Number(s.vars[ins[2]] || 0);
                                                if (!(a > b)) {
                                                    s.pc = Number(ins[3]);
                                                    continue;
                                                }
                                            } else if ('j' === op) {
                                                s.pc = Number(ins[1]);
                                                continue;
                                            }
                                            s.pc += 1;
                                        }
                                    });
                                },
                                next (done) {
                                    reader.state.pc += 1;
                                    reader.step(done);
                                },
                                prefetch (pc) {
                                    const list = reader.index.chunks;
                                    for(let i = 0; i < list.length; i++)if (list[i].start === reader.chunkOf(pc).start) {
                                        const next = list[i + 1];
                                        if (next && !reader.cache[next.start]) reader.loadChunk(next, ()=>{});
                                        return;
                                    }
                                },
                                choose (index, done) {
                                    const opt = reader.frame && reader.frame.options[index];
                                    if (!opt) return done('选项越界');
                                    reader.state.pc = opt.target;
                                    reader.step(done);
                                },
                                snapshot () {
                                    const s = reader.state;
                                    return {
                                        state: JSON.parse(JSON.stringify(s)),
                                        vars: Object.assign({}, s.vars),
                                        chapterTitle: s.chapterTitle,
                                        date: s.date,
                                        tail: reader.frame && reader.frame.text ? reader.frame.text.slice(0, 34) : '',
                                        at: Date.now()
                                    };
                                }
                            };
                            return reader;
                        }
                        function slotChars(chars) {
                            const slots = {
                                l: null,
                                c: null,
                                r: null
                            };
                            const keys = Object.keys(chars || {});
                            for(let i = 0; i < keys.length; i++){
                                const ch = chars[keys[i]];
                                let slot = ch.pos || 'c';
                                slot = 'cl' === slot || 'fl' === slot || 'l2' === slot || 'l' === slot ? 'l' : 'cr' === slot || 'r2' === slot || 'r' === slot ? 'r' : 'c';
                                slots[slot] = ch;
                            }
                            return slots;
                        }
                    }
                };
                var __webpack_module_cache__ = {};
                function __webpack_require__(moduleId) {
                    var cachedModule = __webpack_module_cache__[moduleId];
                    if (void 0 !== cachedModule) return cachedModule.exports;
                    var module = __webpack_module_cache__[moduleId] = {
                        exports: {}
                    };
                    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
                    return module.exports;
                }
                (()=>{
                    __webpack_require__.g = (()=>{
                        if ('object' == typeof globalThis) return globalThis;
                        try {
                            return this || new Function('return this')();
                        } catch (e) {
                            if ('object' == typeof window) return window;
                        }
                    })();
                })();
                (()=>{
                    __webpack_require__.rv = ()=>"1.7.12";
                })();
                (()=>{
                    __webpack_require__.ruid = "bundler=rspack@1.7.12";
                })();
                var __webpack_exports__ = {};
                (()=>{
                    var $app_style$ = [
                        [
                            [
                                [
                                    0,
                                    "page"
                                ]
                            ],
                            {
                                width: "336px",
                                height: "480px",
                                backgroundColor: "#07080c",
                                position: "relative",
                                overflow: "hidden"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "bgclip"
                                ]
                            ],
                            {
                                position: "absolute",
                                top: "0px",
                                left: "0px",
                                width: "336px",
                                height: "480px",
                                overflow: "hidden"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "bgwide"
                                ]
                            ],
                            {
                                position: "absolute",
                                top: "0px",
                                left: "0px",
                                width: "672px",
                                height: "480px",
                                objectFit: "fill"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "solid"
                                ]
                            ],
                            {
                                position: "absolute",
                                top: "0px",
                                left: "0px",
                                width: "336px",
                                height: "480px",
                                backgroundColor: "#ffffff"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "cgclip"
                                ]
                            ],
                            {
                                position: "absolute",
                                top: "0px",
                                left: "0px",
                                width: "336px",
                                height: "480px",
                                overflow: "hidden"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "cgwide"
                                ]
                            ],
                            {
                                position: "absolute",
                                top: "0px",
                                left: "0px",
                                width: "853px",
                                height: "480px",
                                objectFit: "fill"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "sp"
                                ]
                            ],
                            {
                                position: "absolute",
                                objectFit: "contain"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "hud"
                                ]
                            ],
                            {
                                position: "absolute",
                                top: "10px",
                                left: "12px",
                                height: "28px",
                                paddingLeft: "12px",
                                paddingRight: "12px",
                                borderRadius: "14px",
                                backgroundColor: "rgba(0, 0, 0, 0.42)",
                                flexDirection: "row",
                                alignItems: "center"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "hud-t"
                                ]
                            ],
                            {
                                fontSize: "15px",
                                color: "#ffffff"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "hud-d"
                                ]
                            ],
                            {
                                fontSize: "12px",
                                color: "#e6e6ea",
                                marginLeft: "8px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "board"
                                ]
                            ],
                            {
                                position: "absolute",
                                top: "300px",
                                left: "0px",
                                width: "336px",
                                height: "180px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "name"
                                ]
                            ],
                            {
                                position: "absolute",
                                top: "300px",
                                left: "18px",
                                fontSize: "24px",
                                color: "#ffffff",
                                fontWeight: "bold",
                                backgroundColor: "rgba(14, 16, 24, 0.62)",
                                paddingLeft: "12px",
                                paddingRight: "12px",
                                paddingTop: "3px",
                                paddingBottom: "3px",
                                borderRadius: "14px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "ln"
                                ]
                            ],
                            {
                                position: "absolute",
                                left: "18px",
                                width: "300px",
                                color: "#ffffff",
                                fontSize: "20px",
                                lineHeight: "24px",
                                lines: 1
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "more"
                                ]
                            ],
                            {
                                position: "absolute",
                                top: "454px",
                                left: "306px",
                                fontSize: "16px",
                                color: "#ffd166"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "badge"
                                ]
                            ],
                            {
                                position: "absolute",
                                top: "46px",
                                left: "14px",
                                width: "308px",
                                fontSize: "13px",
                                lineHeight: "18px",
                                color: "#ea6c6c",
                                lines: 3
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "choices"
                                ]
                            ],
                            {
                                position: "absolute",
                                top: "186px",
                                left: "18px",
                                width: "300px",
                                flexDirection: "column"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "choice"
                                ]
                            ],
                            {
                                width: "300px",
                                minHeight: "52px",
                                marginBottom: "10px",
                                paddingTop: "10px",
                                paddingRight: "10px",
                                paddingBottom: "10px",
                                paddingLeft: "10px",
                                borderRadius: "14px",
                                backgroundColor: "rgba(255, 255, 255, 0.94)",
                                color: "#111111",
                                fontSize: "24px",
                                lineHeight: "32px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "ending"
                                ]
                            ],
                            {
                                position: "absolute",
                                top: "0px",
                                left: "0px",
                                width: "336px",
                                height: "480px",
                                backgroundColor: "#f5f5f7",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "end-title"
                                ]
                            ],
                            {
                                fontSize: "34px",
                                color: "#333333",
                                textAlign: "center",
                                width: "280px",
                                lineHeight: "44px",
                                fontWeight: "bold"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "end-tip"
                                ]
                            ],
                            {
                                fontSize: "20px",
                                color: "#999999",
                                marginTop: "26px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "menu"
                                ]
                            ],
                            {
                                position: "absolute",
                                top: "0px",
                                left: "0px",
                                width: "336px",
                                height: "480px",
                                backgroundColor: "#f5f5f7",
                                flexDirection: "column",
                                alignItems: "center",
                                paddingTop: "8px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "menu-title"
                                ]
                            ],
                            {
                                fontSize: "32px",
                                color: "#333333",
                                fontWeight: "bold"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "menu-sub"
                                ]
                            ],
                            {
                                fontSize: "15px",
                                color: "#888888",
                                marginTop: "2px",
                                marginBottom: "8px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "mbtn"
                                ]
                            ],
                            {
                                width: "290px",
                                height: "40px",
                                backgroundColor: "rgba(226, 216, 120, 0.27)",
                                alignItems: "center",
                                justifyContent: "center",
                                marginBottom: "6px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "mbtn-main"
                                ]
                            ],
                            {
                                backgroundColor: "rgba(226, 216, 120, 0.6)"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "mbtn-quit"
                                ]
                            ],
                            {
                                backgroundColor: "rgba(234, 108, 108, 0.16)"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "mbtn-t"
                                ]
                            ],
                            {
                                fontSize: "24px",
                                color: "#000000",
                                fontWeight: 800
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "mrow"
                                ]
                            ],
                            {
                                width: "290px",
                                flexDirection: "row",
                                justifyContent: "space-between"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "mbtn-half"
                                ]
                            ],
                            {
                                width: "142px"
                            }
                        ]
                    ];
                    var $app_script$ = function __scriptModule__(module, exports, $app_require$1) {
                        "use strict";
                        Object.defineProperty(exports, "__esModule", {
                            value: true
                        });
                        exports.default = void 0;
                        var _system = _interopRequireDefault($app_require$1("@app-module/system.router"));
                        var _system2 = _interopRequireDefault($app_require$1("@app-module/system.prompt"));
                        var _system3 = _interopRequireDefault($app_require$1("@app-module/system.file"));
                        var _system4 = _interopRequireDefault($app_require$1("@app-module/system.brightness"));
                        var _assets = __webpack_require__("./src/common/assets.js");
                        var _reader = __webpack_require__("./src/common/reader.js");
                        var _vm = __webpack_require__("./src/common/vm.js");
                        function _interopRequireDefault(e) {
                            return e && e.__esModule ? e : {
                                default: e
                            };
                        }
                        const SLOT_LEFT = {
                            l: 10,
                            c: 96,
                            r: 182
                        };
                        const BG_W = 672;
                        const BG_STEP = 4;
                        const BG_TICK = 100;
                        const HOLD_MS = 450;
                        const SWIPE_MIN = 36;
                        const SWIPE_MS = 800;
                        const AUTO_DEFAULT = 90;
                        const TOP = 100;
                        function readNum(e, name) {
                            if (!e) return null;
                            let p = null;
                            p = e.touches && e.touches.length ? e.touches[0] : e.changedTouches && e.changedTouches.length ? e.changedTouches[0] : e;
                            if (!p) return null;
                            const v = void 0 !== p[name] ? p[name] : 'clientY' === name ? p.pageY : p.pageX;
                            return 'number' == typeof v ? v : null;
                        }
                        function readDir(e) {
                            if (!e) return '';
                            if ('string' == typeof e.direction) return e.direction;
                            if (e.detail && 'string' == typeof e.detail.direction) return e.detail.direction;
                            return '';
                        }
                        var _default = exports.default = {
                            protected: {
                                at: '',
                                load: '',
                                auto: '',
                                chapterTitle: '——',
                                dateText: '',
                                progress: '0%',
                                bgSrc: '',
                                bgStyle: 'left: 0px;',
                                showBlack: true,
                                spL: '',
                                spLf: '',
                                spLb: '',
                                spLStyle: '',
                                spLfStyle: '',
                                spLbStyle: '',
                                spCStyle: '',
                                spRStyle: '',
                                spC: '',
                                spCf: '',
                                spCb: '',
                                spCfStyle: '',
                                spCbStyle: '',
                                spR: '',
                                spRf: '',
                                spRb: '',
                                spRfStyle: '',
                                spRbStyle: '',
                                cgSrc: '',
                                cgStyle: 'left: 0px;',
                                speaker: '',
                                l0: '',
                                l1: '',
                                l2: '',
                                l3: '',
                                l4: '',
                                l5: '',
                                s0: '',
                                s1: '',
                                s2: '',
                                s3: '',
                                s4: '',
                                s5: '',
                                canTap: false,
                                choices: [],
                                menu: false,
                                endText: '',
                                badge: '',
                                autoOn: false,
                                fastOn: false,
                                autoLabel: '自动 关',
                                fastLabel: '快进 关',
                                uiHidden: false
                            },
                            onInit () {
                                this.reader = (0, _vm.createReader)((path, cb)=>{
                                    _system3.default.readText({
                                        uri: path,
                                        success: (d)=>cb(null, d.text),
                                        fail: (d, code)=>cb('读取失败 ' + path + ' (' + code + ')')
                                    });
                                });
                                this.settings = _reader.DEFAULT_SETTINGS;
                                this.frame = null;
                                this.pages = [
                                    [
                                        ''
                                    ]
                                ];
                                this.pageIdx = 0;
                                this.pageText = '';
                                this.rawText = '';
                                this.typing = 0;
                                this.typingToken = 0;
                                this.typingAt = 0;
                                this.timer = null;
                                this.autoTimer = null;
                                this.bgTimer = null;
                                this.bgOffset = 0;
                                this.bgDir = 1;
                                this.cgTimer = null;
                                this.cgOffset = 0;
                                this.cgDir = 1;
                                this.advanceCount = 0;
                                this.hist = [];
                                this.seen = {};
                                this.touchY0 = 0;
                                this.touchX0 = 0;
                                this.touchT0 = 0;
                                this.holdTimer = null;
                                this.holdFast = false;
                                this.saveTimer = null;
                                this.lockTap = 0;
                                (0, _reader.loadSeen)((list)=>{
                                    this.seenList = list.slice();
                                    for(let i = 0; i < this.seenList.length; i++)this.seen[this.seenList[i]] = 1;
                                });
                                (0, _reader.loadSettings)((s)=>{
                                    this.settings = s;
                                    this.autoOn = s.autoMs > 0;
                                    this.fastOn = !!s.fast;
                                    this.applyFont();
                                    this.applyKeepOn();
                                    this.boot();
                                });
                            },
                            onShow () {
                                (0, _reader.loadSettings)((s)=>{
                                    this.settings = s;
                                    this.autoOn = s.autoMs > 0;
                                    this.fastOn = !!s.fast;
                                    this.applyFont();
                                    this.applyKeepOn();
                                });
                            },
                            onBackPress () {
                                if (this.menu) this.closeMenu();
                                else this.openMenu();
                                return true;
                            },
                            onHide () {
                                this.stopAll();
                            },
                            onDestroy () {
                                this.stopAll();
                            },
                            stopAll () {
                                if (this.timer) {
                                    clearTimeout(this.timer);
                                    this.timer = null;
                                }
                                if (this.autoTimer) {
                                    clearTimeout(this.autoTimer);
                                    this.autoTimer = null;
                                }
                                if (this.bgTimer) {
                                    clearInterval(this.bgTimer);
                                    this.bgTimer = null;
                                }
                                if (this.cgTimer) {
                                    clearInterval(this.cgTimer);
                                    this.cgTimer = null;
                                }
                                if (this.holdTimer) {
                                    clearTimeout(this.holdTimer);
                                    this.holdTimer = null;
                                }
                                this.typingToken++;
                            },
                            boot () {
                                this.reader.init((err)=>{
                                    if (err) {
                                        this.badge = String(err);
                                        return;
                                    }
                                    if ('1' === this.auto) return void (0, _reader.loadAutoSave)((d)=>{
                                        if (!d || !d.state) return void this.startAt('ch1');
                                        this.restore(d);
                                    });
                                    if ('' !== this.load) return void (0, _reader.loadSaves)((list)=>{
                                        const slot = Number(this.load);
                                        const data = list[slot];
                                        if (!data) return void this.startAt('ch1');
                                        this.restore(data);
                                    });
                                    this.startAt('' !== this.at ? String(this.at) : 'ch1');
                                });
                            },
                            startAt (chapterId) {
                                this.hist = [];
                                this.reader.start(chapterId, (err, frame)=>{
                                    if (err) {
                                        this.badge = String(err);
                                        return;
                                    }
                                    this.onFrame(frame);
                                    this.writeAuto();
                                });
                            },
                            restore (data) {
                                this.hist = [];
                                this.reader.resume(data, (err, frame)=>{
                                    if (err) {
                                        this.badge = String(err);
                                        return;
                                    }
                                    this.reader.state.vars = data.vars || {};
                                    this.onFrame(frame);
                                    this.writeAuto();
                                });
                            },
                            layoutOf () {
                                return (0, _reader.layout)(this.settings);
                            },
                            applyFont () {
                                const L = this.layoutOf();
                                for(let i = 0; i < 6; i++)this['s' + i] = 'top: ' + (338 + i * L.lineH) + 'px; font-size: ' + L.size + 'px; line-height: ' + L.lineH + 'px;';
                                if (this.rawText) this.reflow();
                            },
                            reflow () {
                                const L = this.layoutOf();
                                this.pages = (0, _reader.paginateText)(this.rawText, L.cpl, L.lpp);
                                this.pageIdx = 0;
                                this.pageText = (this.pages[0] || [
                                    ''
                                ]).join('\n');
                                this.typingToken++;
                                this.renderTyping(this.pageText.length);
                            },
                            onFrame (frame) {
                                if (!frame) return;
                                if ('menu' === frame.kind) return void this.showMenu(frame);
                                if ('end' === frame.kind) {
                                    this.choices = [];
                                    this.endText = '本章 · 完';
                                    this.stopAll();
                                    this.writeAuto();
                                    return;
                                }
                                this.endText = '';
                                this.choices = [];
                                this.frame = frame;
                                this.applyStage();
                                this.speaker = frame.who || '';
                                this.rawText = frame.text || '';
                                const L = this.layoutOf();
                                this.pages = (0, _reader.paginateText)(this.rawText, L.cpl, L.lpp);
                                this.pageIdx = 0;
                                this.playPage();
                                this.updateHud();
                                this.pushHist();
                                this.reader.prefetch(this.reader.state.pc + 1);
                                this.advanceCount++;
                                if (this.advanceCount % 8 === 0) this.writeAuto();
                            },
                            applyStage () {
                                const s = this.reader.state;
                                const nextBg = s.bg && 'black' !== s.bg ? (0, _assets.bgPath)(s.bg) : '';
                                if (nextBg !== this.bgSrc) {
                                    this.bgOffset = 0;
                                    this.bgDir = 1;
                                    this.bgStyle = 'left: 0px;';
                                }
                                this.bgSrc = nextBg;
                                this.showBlack = !this.bgSrc;
                                if (this.bgSrc) this.startPan();
                                const nextCg = s.fg ? (0, _assets.cgPath)(s.fg) : '';
                                if (nextCg !== this.cgSrc) {
                                    this.cgOffset = 0;
                                    this.cgDir = 1;
                                    this.cgStyle = 'left: 0px;';
                                }
                                this.cgSrc = nextCg;
                                if (this.cgSrc) this.startCgPan();
                                else this.stopCgPan();
                                if (s.fg) this.markSeen(s.fg);
                                const slots = (0, _vm.slotChars)(s.chars);
                                const cast = (slots.l ? 1 : 0) + (slots.c ? 1 : 0) + (slots.r ? 1 : 0);
                                const order = [];
                                if (slots.l) order.push('L');
                                if (slots.c) order.push('C');
                                if (slots.r) order.push('R');
                                this.paintSlot('L', slots.l, cast, order.indexOf('L'));
                                this.paintSlot('C', slots.c, cast, order.indexOf('C'));
                                this.paintSlot('R', slots.r, cast, order.indexOf('R'));
                            },
                            startPan () {
                                if (this.bgTimer) return;
                                const STEP = 4;
                                const TICK = 100;
                                this.bgTimer = setInterval(()=>{
                                    let off = this.bgOffset + this.bgDir * STEP;
                                    if (off <= -336) {
                                        off = -336;
                                        this.bgDir = 1;
                                    }
                                    if (off >= 0) {
                                        off = 0;
                                        this.bgDir = -1;
                                    }
                                    this.bgOffset = off;
                                    this.bgStyle = 'left: ' + off + 'px;';
                                }, TICK);
                            },
                            stopPan () {
                                if (this.bgTimer) {
                                    clearInterval(this.bgTimer);
                                    this.bgTimer = null;
                                }
                            },
                            startCgPan () {
                                if (this.cgTimer) return;
                                const STEP = 3;
                                const TICK = 100;
                                const MAX = 517;
                                this.cgTimer = setInterval(()=>{
                                    let off = this.cgOffset + this.cgDir * STEP;
                                    if (off <= -MAX) {
                                        off = -MAX;
                                        this.cgDir = 1;
                                    }
                                    if (off >= 0) {
                                        off = 0;
                                        this.cgDir = -1;
                                    }
                                    this.cgOffset = off;
                                    this.cgStyle = 'left: ' + off + 'px;';
                                }, TICK);
                            },
                            stopCgPan () {
                                if (this.cgTimer) {
                                    clearInterval(this.cgTimer);
                                    this.cgTimer = null;
                                }
                            },
                            paintSlot (slot, ch, cast, slotIndex) {
                                const pre = 'sp' + slot;
                                if (!ch) {
                                    this[pre] = '';
                                    this[pre + 'f'] = '';
                                    this[pre + 'b'] = '';
                                    return;
                                }
                                const tag = ch.tag;
                                const sizes = {
                                    1: [
                                        240,
                                        470,
                                        10
                                    ],
                                    2: [
                                        196,
                                        392,
                                        78
                                    ],
                                    3: [
                                        136,
                                        272,
                                        168
                                    ]
                                };
                                const spec = sizes[Math.min(3, Math.max(1, cast))] || sizes[3];
                                const w = spec[0];
                                const h = spec[1];
                                const top = spec[2];
                                let left = 0;
                                left = cast <= 1 ? Math.round((336 - w) / 2) : 2 === cast ? 0 === slotIndex ? 0 : 336 - w : 0 === slotIndex ? 2 : 1 === slotIndex ? Math.round((336 - w) / 2) : 336 - w - 2;
                                this[pre + 'Style'] = 'left: ' + left + 'px; top: ' + top + 'px; width: ' + w + 'px; height: ' + h + 'px;';
                                const expr = (ch.eye || 'normal') + '.png';
                                if ((0, _assets.hasSprite)(tag, expr)) this[pre] = (0, _assets.spritePath)(tag, expr);
                                else if ((0, _assets.hasSprite)(tag, 'normal.png')) this[pre] = (0, _assets.spritePath)(tag, 'normal.png');
                                else {
                                    const list = _assets.SPRITES[tag] || [];
                                    this[pre] = list.length ? (0, _assets.spritePath)(tag, list[0]) : '';
                                }
                                this[pre + 'f'] = '';
                                this[pre + 'b'] = '';
                            },
                            showMenu (frame) {
                                this.choices = [];
                                this.frame = frame;
                                this.options = frame.options;
                                const items = [];
                                for(let i = 0; i < frame.options.length; i++)items.push({
                                    x: frame.options[i].text
                                });
                                this.choices = items;
                                this.stopTyping();
                            },
                            pickChoice (idx) {
                                if (!this.choices.length) return;
                                this.choices = [];
                                this.reader.choose(idx, (err, frame)=>{
                                    if (err) {
                                        this.badge = String(err);
                                        return;
                                    }
                                    this.onFrame(frame);
                                });
                            },
                            playPage () {
                                this.clearAuto();
                                this.pageText = (this.pages[this.pageIdx] || [
                                    ''
                                ]).join('\n');
                                this.typing = 0;
                                this.renderTyping(0);
                                const speed = this.settings.fast ? 0 : this.settings.speed;
                                if (!speed) return void this.finishTyping();
                                this.typingToken++;
                                this.typingAt = Date.now();
                                this.tickTyping(this.typingToken);
                            },
                            tickTyping (token) {
                                if (token !== this.typingToken) return;
                                const speed = this.settings.fast ? 0 : this.settings.speed;
                                if (!speed) return void this.finishTyping();
                                const full = this.pageText.length;
                                const n = Math.max(this.typing + 1, Math.floor((Date.now() - this.typingAt) / speed) + 1);
                                if (n >= full) {
                                    this.typing = full;
                                    this.renderTyping(full);
                                    this.finishTyping();
                                    return;
                                }
                                this.typing = n;
                                this.renderTyping(n);
                                this.timer = setTimeout(()=>this.tickTyping(token), 50);
                            },
                            renderTyping (n) {
                                const full = this.pageText || '';
                                const seg = (n >= full.length ? full : full.slice(0, n)).split('\n');
                                this.l0 = seg[0] || '';
                                this.l1 = seg[1] || '';
                                this.l2 = seg[2] || '';
                                this.l3 = seg[3] || '';
                                this.l4 = seg[4] || '';
                                this.l5 = seg[5] || '';
                                this.canTap = n >= full.length;
                            },
                            finishTyping () {
                                this.typingToken++;
                                if (this.timer) {
                                    clearTimeout(this.timer);
                                    this.timer = null;
                                }
                                this.typing = (this.pageText || '').length;
                                this.renderTyping(this.typing);
                                this.scheduleAuto();
                            },
                            stopTyping () {
                                this.typingToken++;
                                if (this.timer) {
                                    clearTimeout(this.timer);
                                    this.timer = null;
                                }
                                this.canTap = true;
                            },
                            scheduleAuto () {
                                this.clearAuto();
                                if (this.choices.length || this.endText || this.menu) return;
                                if (this.settings.fast) {
                                    this.autoTimer = setTimeout(()=>{
                                        this.autoTimer = null;
                                        this.advance();
                                    }, 220);
                                    return;
                                }
                                if (!this.settings.autoMs) return;
                                const wait = (0, _reader.autoDelay)(this.pageText, this.settings.autoMs);
                                this.autoTimer = setTimeout(()=>{
                                    this.autoTimer = null;
                                    this.advance();
                                }, wait);
                            },
                            clearAuto () {
                                if (this.autoTimer) {
                                    clearTimeout(this.autoTimer);
                                    this.autoTimer = null;
                                }
                            },
                            advance () {
                                if (this.menu) return;
                                if (this.choices.length) return;
                                if (this.endText) return void _system.default.replace({
                                    uri: 'pages/index'
                                });
                                if (this.typing < (this.pageText || '').length) return void this.finishTyping();
                                if (this.pageIdx < this.pages.length - 1) {
                                    this.pageIdx++;
                                    this.playPage();
                                    return;
                                }
                                this.reader.next((err, frame)=>{
                                    if (err) {
                                        this.badge = String(err);
                                        return;
                                    }
                                    this.onFrame(frame);
                                });
                            },
                            onTap () {
                                if (Date.now() - (this.lockTap || 0) < 400) return;
                                this.lockTap = Date.now();
                                if (this.menu) return void this.closeMenu();
                                if (this.choices.length) return;
                                if (this.endText) return void _system.default.replace({
                                    uri: 'pages/index'
                                });
                                this.advance();
                            },
                            onTouchStart (e) {
                                this.touchY0 = readNum(e, 'clientY') || 0;
                                this.touchX0 = readNum(e, 'clientX') || 0;
                                this.touchT0 = Date.now();
                                if ('fast' !== this.settings.longpress) return;
                                this.holdFast = false;
                                this.holdTimer = setTimeout(()=>{
                                    this.holdFast = true;
                                    this.settings = Object.assign({}, this.settings, {
                                        fast: true
                                    });
                                    this.advance();
                                }, HOLD_MS);
                            },
                            onTouchEnd (e) {
                                if (this.holdTimer) {
                                    clearTimeout(this.holdTimer);
                                    this.holdTimer = null;
                                }
                                if (this.holdFast) {
                                    this.holdFast = false;
                                    this.settings = Object.assign({}, this.settings, {
                                        fast: false
                                    });
                                    this.scheduleAuto();
                                    this.lockTap = Date.now();
                                    return;
                                }
                                if (!this.touchT0 || Date.now() - this.touchT0 > SWIPE_MS) return;
                                const y1 = readNum(e, 'clientY');
                                const x1 = readNum(e, 'clientX');
                                if (null === y1) return;
                                const dy = y1 - this.touchY0;
                                const dx = null === x1 ? 0 : x1 - this.touchX0;
                                if (dy >= SWIPE_MIN && dy >= Math.abs(dx) && !this.choices.length) {
                                    this.lockTap = Date.now();
                                    this.openMenu();
                                } else if (dx >= SWIPE_MIN && dx > Math.abs(dy)) {
                                    this.lockTap = Date.now();
                                    this.rewind();
                                }
                            },
                            onSwipe (e) {
                                if (this.menu || this.choices.length) return;
                                if ('down' === readDir(e)) this.openMenu();
                            },
                            onLongPress () {
                                const mode = this.settings.longpress;
                                if ('hide' === mode) this.uiHidden = !this.uiHidden;
                            },
                            openMenu () {
                                this.menu = true;
                                this.clearAuto();
                                this.stopTyping();
                                this.finishTyping();
                            },
                            closeMenu () {
                                this.menu = false;
                                this.scheduleAuto();
                            },
                            saveSlot () {
                                const list = this.saves || [];
                                (0, _reader.loadSaves)((saved)=>{
                                    const data = this.reader.snapshot();
                                    const next = saved.slice();
                                    let slot = 0;
                                    for(; slot < _reader.MAX_SLOTS && next[slot]; slot++);
                                    if (slot >= _reader.MAX_SLOTS) slot = _reader.MAX_SLOTS - 1;
                                    next[slot] = data;
                                    next[slot].slot = slot;
                                    (0, _reader.saveSaves)(next, ()=>{
                                        this.saves = next;
                                        _system2.default.showToast({
                                            message: '已保存到 ' + (slot + 1) + ' 号存档'
                                        });
                                    });
                                });
                            },
                            goSaves () {
                                _system.default.push({
                                    uri: 'pages/saves',
                                    params: {
                                        from: 'game'
                                    }
                                });
                            },
                            goChapters () {
                                _system.default.push({
                                    uri: 'pages/chapters',
                                    params: {
                                        from: 'game'
                                    }
                                });
                            },
                            goCg () {
                                _system.default.push({
                                    uri: 'pages/cg'
                                });
                            },
                            goSettings () {
                                _system.default.push({
                                    uri: 'pages/settings'
                                });
                            },
                            goHome () {
                                _system.default.replace({
                                    uri: 'pages/index'
                                });
                            },
                            exitApp () {
                                try {
                                    this.$app.exit();
                                } catch (e) {
                                    _system.default.replace({
                                        uri: 'pages/index'
                                    });
                                }
                            },
                            toggleAuto () {
                                const s = Object.assign({}, this.settings);
                                s.autoMs = s.autoMs > 0 ? 0 : AUTO_DEFAULT;
                                if (s.autoMs > 0) s.fast = false;
                                this.settings = s;
                                this.autoOn = s.autoMs > 0;
                                this.fastOn = false;
                                this.autoLabel = s.autoMs > 0 ? '自动 开' : '自动 关';
                                this.fastLabel = '快进 关';
                                (0, _reader.saveSettings)(s);
                                this.scheduleAuto();
                                this.menu = false;
                            },
                            toggleFast () {
                                const s = Object.assign({}, this.settings);
                                s.fast = !s.fast;
                                if (s.fast) s.autoMs = 0;
                                this.settings = s;
                                this.fastOn = s.fast;
                                this.autoOn = s.autoMs > 0;
                                this.fastLabel = s.fast ? '快进 开' : '快进 关';
                                this.autoLabel = s.autoMs > 0 ? '自动 开' : '自动 关';
                                this.menu = false;
                                this.advance();
                            },
                            rewind () {
                                this.menu = false;
                                if (this.hist.length < 2) return void _system2.default.showToast({
                                    message: '已经是最早的一句了'
                                });
                                this.hist.pop();
                                const prev = this.hist.pop();
                                this.hist.push(prev);
                                this.menu = false;
                                this.reader.resume(prev, (err, frame)=>{
                                    if (err) {
                                        this.badge = String(err);
                                        return;
                                    }
                                    this.onFrame(frame);
                                });
                            },
                            pushHist () {
                                try {
                                    this.hist.push(this.reader.snapshot());
                                    if (this.hist.length > 60) this.hist.shift();
                                } catch (e) {}
                            },
                            writeAuto () {
                                const data = this.reader.snapshot();
                                if (!data) return;
                                (0, _reader.saveAutoSave)(data);
                            },
                            markSeen (id) {
                                const idx = _assets.CG.indexOf(id);
                                if (idx < 0 || this.seen[id]) return;
                                this.seen[id] = 1;
                                this.seenList.push(id);
                                if (this.seenTimer) clearTimeout(this.seenTimer);
                                this.seenTimer = setTimeout(()=>(0, _reader.saveSeen)(this.seenList), 500);
                            },
                            updateHud () {
                                const s = this.reader.state;
                                this.chapterTitle = s.chapterTitle || '——';
                                this.dateText = s.date || '';
                                const list = this.reader.index.chapters;
                                let i = 0;
                                for(; i < list.length; i++){
                                    const next = list[i + 1];
                                    const end = next ? next.start : this.reader.index.total;
                                    if (s.pc >= list[i].start && s.pc < end) break;
                                }
                                const ch = list[Math.min(i, list.length - 1)];
                                const nextCh = list[i + 1];
                                const span = Math.max(1, (nextCh ? nextCh.start : this.reader.index.total) - ch.start);
                                this.progress = Math.min(99, Math.round((s.pc - ch.start) * 100 / span)) + '%';
                            },
                            applyKeepOn () {
                                try {
                                    _system4.default.setKeepScreenOn({
                                        keepScreenOn: !!this.settings.keepOn
                                    });
                                } catch (e) {}
                            }
                        };
                        const moduleOwn = exports.default || module.exports;
                        const accessors = [
                            'public',
                            'protected',
                            'private'
                        ];
                        if (moduleOwn.data && accessors.some(function(acc) {
                            return moduleOwn[acc];
                        })) throw new Error('页面VM对象中的属性data不可与"' + accessors.join(',') + '"同时存在，请使用private替换data名称');
                        if (!moduleOwn.data) {
                            moduleOwn.data = {};
                            moduleOwn._descriptor = {};
                            accessors.forEach(function(acc) {
                                const accType = typeof moduleOwn[acc];
                                if ('object' === accType) {
                                    moduleOwn.data = Object.assign(moduleOwn.data, moduleOwn[acc]);
                                    for(const name in moduleOwn[acc])moduleOwn._descriptor[name] = {
                                        access: acc
                                    };
                                } else if ('function' === accType) console.warn('页面VM对象中的属性' + acc + '的值不能是函数，请使用对象');
                            });
                        }
                    };
                    var $app_template$ = function(vm) {
                        const _vm_ = vm || this;
                        return aiot.__ce__("div", {
                            __vm__: _vm_,
                            __opts__: {
                                classList: [
                                    "page"
                                ],
                                events: {
                                    click: function(evt) {
                                        return _vm_.onTap(evt);
                                    },
                                    longpress: function(evt) {
                                        return _vm_.onLongPress(evt);
                                    },
                                    touchstart: function(evt) {
                                        return _vm_.onTouchStart(evt);
                                    },
                                    touchend: function(evt) {
                                        return _vm_.onTouchEnd(evt);
                                    },
                                    touchcancel: function(evt) {
                                        return _vm_.onTouchEnd(evt);
                                    },
                                    swipe: function(evt) {
                                        return _vm_.onSwipe(evt);
                                    }
                                }
                            }
                        }, [
                            aiot.__ce__("div", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "bgclip"
                                    ],
                                    events: {
                                        swipe: function(evt) {
                                            return _vm_.onSwipe(evt);
                                        }
                                    }
                                }
                            }, [
                                aiot.__ci__({
                                    __vm__: _vm_,
                                    __opts__: {
                                        shown: function() {
                                            return _vm_.bgSrc;
                                        }
                                    }
                                }, function() {
                                    return [
                                        aiot.__ce__("image", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "bgwide"
                                                ],
                                                style: function() {
                                                    return __webpack_require__.g.$translateStyle$(_vm_.bgStyle);
                                                },
                                                src: function() {
                                                    return _vm_.bgSrc;
                                                },
                                                events: {
                                                    swipe: function(evt) {
                                                        return _vm_.onSwipe(evt);
                                                    }
                                                }
                                            }
                                        }, [])
                                    ];
                                })
                            ]),
                            aiot.__ci__({
                                __vm__: _vm_,
                                __opts__: {
                                    shown: function() {
                                        return _vm_.showBlack;
                                    }
                                }
                            }, function() {
                                return [
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "solid"
                                            ]
                                        }
                                    }, [])
                                ];
                            }),
                            aiot.__ci__({
                                __vm__: _vm_,
                                __opts__: {
                                    shown: function() {
                                        return _vm_.spL;
                                    }
                                }
                            }, function() {
                                return [
                                    aiot.__ce__("image", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "sp"
                                            ],
                                            style: function() {
                                                return __webpack_require__.g.$translateStyle$(_vm_.spLStyle);
                                            },
                                            src: function() {
                                                return _vm_.spL;
                                            },
                                            events: {
                                                swipe: function(evt) {
                                                    return _vm_.onSwipe(evt);
                                                }
                                            }
                                        }
                                    }, [])
                                ];
                            }),
                            aiot.__ci__({
                                __vm__: _vm_,
                                __opts__: {
                                    shown: function() {
                                        return _vm_.spLf;
                                    }
                                }
                            }, function() {
                                return [
                                    aiot.__ce__("image", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "sp"
                                            ],
                                            style: function() {
                                                return __webpack_require__.g.$translateStyle$(_vm_.spLfStyle);
                                            },
                                            src: function() {
                                                return _vm_.spLf;
                                            },
                                            events: {
                                                swipe: function(evt) {
                                                    return _vm_.onSwipe(evt);
                                                }
                                            }
                                        }
                                    }, [])
                                ];
                            }),
                            aiot.__ci__({
                                __vm__: _vm_,
                                __opts__: {
                                    shown: function() {
                                        return _vm_.spLb;
                                    }
                                }
                            }, function() {
                                return [
                                    aiot.__ce__("image", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "sp"
                                            ],
                                            style: function() {
                                                return __webpack_require__.g.$translateStyle$(_vm_.spLbStyle);
                                            },
                                            src: function() {
                                                return _vm_.spLb;
                                            },
                                            events: {
                                                swipe: function(evt) {
                                                    return _vm_.onSwipe(evt);
                                                }
                                            }
                                        }
                                    }, [])
                                ];
                            }),
                            aiot.__ci__({
                                __vm__: _vm_,
                                __opts__: {
                                    shown: function() {
                                        return _vm_.spC;
                                    }
                                }
                            }, function() {
                                return [
                                    aiot.__ce__("image", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "sp"
                                            ],
                                            style: function() {
                                                return __webpack_require__.g.$translateStyle$(_vm_.spCStyle);
                                            },
                                            src: function() {
                                                return _vm_.spC;
                                            },
                                            events: {
                                                swipe: function(evt) {
                                                    return _vm_.onSwipe(evt);
                                                }
                                            }
                                        }
                                    }, [])
                                ];
                            }),
                            aiot.__ci__({
                                __vm__: _vm_,
                                __opts__: {
                                    shown: function() {
                                        return _vm_.spCf;
                                    }
                                }
                            }, function() {
                                return [
                                    aiot.__ce__("image", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "sp"
                                            ],
                                            style: function() {
                                                return __webpack_require__.g.$translateStyle$(_vm_.spCfStyle);
                                            },
                                            src: function() {
                                                return _vm_.spCf;
                                            },
                                            events: {
                                                swipe: function(evt) {
                                                    return _vm_.onSwipe(evt);
                                                }
                                            }
                                        }
                                    }, [])
                                ];
                            }),
                            aiot.__ci__({
                                __vm__: _vm_,
                                __opts__: {
                                    shown: function() {
                                        return _vm_.spCb;
                                    }
                                }
                            }, function() {
                                return [
                                    aiot.__ce__("image", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "sp"
                                            ],
                                            style: function() {
                                                return __webpack_require__.g.$translateStyle$(_vm_.spCbStyle);
                                            },
                                            src: function() {
                                                return _vm_.spCb;
                                            },
                                            events: {
                                                swipe: function(evt) {
                                                    return _vm_.onSwipe(evt);
                                                }
                                            }
                                        }
                                    }, [])
                                ];
                            }),
                            aiot.__ci__({
                                __vm__: _vm_,
                                __opts__: {
                                    shown: function() {
                                        return _vm_.spR;
                                    }
                                }
                            }, function() {
                                return [
                                    aiot.__ce__("image", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "sp"
                                            ],
                                            style: function() {
                                                return __webpack_require__.g.$translateStyle$(_vm_.spRStyle);
                                            },
                                            src: function() {
                                                return _vm_.spR;
                                            },
                                            events: {
                                                swipe: function(evt) {
                                                    return _vm_.onSwipe(evt);
                                                }
                                            }
                                        }
                                    }, [])
                                ];
                            }),
                            aiot.__ci__({
                                __vm__: _vm_,
                                __opts__: {
                                    shown: function() {
                                        return _vm_.spRf;
                                    }
                                }
                            }, function() {
                                return [
                                    aiot.__ce__("image", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "sp"
                                            ],
                                            style: function() {
                                                return __webpack_require__.g.$translateStyle$(_vm_.spRfStyle);
                                            },
                                            src: function() {
                                                return _vm_.spRf;
                                            },
                                            events: {
                                                swipe: function(evt) {
                                                    return _vm_.onSwipe(evt);
                                                }
                                            }
                                        }
                                    }, [])
                                ];
                            }),
                            aiot.__ci__({
                                __vm__: _vm_,
                                __opts__: {
                                    shown: function() {
                                        return _vm_.spRb;
                                    }
                                }
                            }, function() {
                                return [
                                    aiot.__ce__("image", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "sp"
                                            ],
                                            style: function() {
                                                return __webpack_require__.g.$translateStyle$(_vm_.spRbStyle);
                                            },
                                            src: function() {
                                                return _vm_.spRb;
                                            },
                                            events: {
                                                swipe: function(evt) {
                                                    return _vm_.onSwipe(evt);
                                                }
                                            }
                                        }
                                    }, [])
                                ];
                            }),
                            aiot.__ci__({
                                __vm__: _vm_,
                                __opts__: {
                                    shown: function() {
                                        return _vm_.cgSrc;
                                    }
                                }
                            }, function() {
                                return [
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "cgclip"
                                            ]
                                        }
                                    }, [
                                        aiot.__ce__("image", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "cgwide"
                                                ],
                                                style: function() {
                                                    return __webpack_require__.g.$translateStyle$(_vm_.cgStyle);
                                                },
                                                src: function() {
                                                    return _vm_.cgSrc;
                                                },
                                                events: {
                                                    swipe: function(evt) {
                                                        return _vm_.onSwipe(evt);
                                                    }
                                                }
                                            }
                                        }, [])
                                    ])
                                ];
                            }),
                            aiot.__ci__({
                                __vm__: _vm_,
                                __opts__: {
                                    shown: function() {
                                        return !_vm_.uiHidden && !_vm_.menu && !_vm_.endText;
                                    }
                                }
                            }, function() {
                                return [
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "hud"
                                            ]
                                        }
                                    }, [
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "hud-t"
                                                ],
                                                value: function() {
                                                    return _vm_.chapterTitle;
                                                }
                                            }
                                        }, []),
                                        aiot.__ci__({
                                            __vm__: _vm_,
                                            __opts__: {
                                                shown: function() {
                                                    return _vm_.dateText;
                                                }
                                            }
                                        }, function() {
                                            return [
                                                aiot.__ce__("text", {
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        classList: [
                                                            "hud-d"
                                                        ],
                                                        value: function() {
                                                            return _vm_.dateText;
                                                        }
                                                    }
                                                }, [])
                                            ];
                                        })
                                    ])
                                ];
                            }),
                            aiot.__ci__({
                                __vm__: _vm_,
                                __opts__: {
                                    shown: function() {
                                        return !_vm_.uiHidden && !_vm_.menu && !_vm_.endText && !_vm_.choices.length;
                                    }
                                }
                            }, function() {
                                return [
                                    aiot.__ce__("image", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "board"
                                            ],
                                            src: "/common/img/ui/board.png",
                                            events: {
                                                swipe: function(evt) {
                                                    return _vm_.onSwipe(evt);
                                                }
                                            }
                                        }
                                    }, [])
                                ];
                            }),
                            aiot.__ci__({
                                __vm__: _vm_,
                                __opts__: {
                                    shown: function() {
                                        return !_vm_.uiHidden && !_vm_.menu && !_vm_.endText && !_vm_.choices.length && _vm_.speaker;
                                    }
                                }
                            }, function() {
                                return [
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "name"
                                            ],
                                            events: {
                                                swipe: function(evt) {
                                                    return _vm_.onSwipe(evt);
                                                }
                                            },
                                            value: function() {
                                                return _vm_.speaker;
                                            }
                                        }
                                    }, [])
                                ];
                            }),
                            aiot.__ci__({
                                __vm__: _vm_,
                                __opts__: {
                                    shown: function() {
                                        return !_vm_.uiHidden && !_vm_.menu && !_vm_.endText && !_vm_.choices.length;
                                    }
                                }
                            }, function() {
                                return [
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "ln"
                                            ],
                                            style: function() {
                                                return __webpack_require__.g.$translateStyle$(_vm_.s0);
                                            },
                                            value: function() {
                                                return _vm_.l0;
                                            }
                                        }
                                    }, [])
                                ];
                            }),
                            aiot.__ci__({
                                __vm__: _vm_,
                                __opts__: {
                                    shown: function() {
                                        return !_vm_.uiHidden && !_vm_.menu && !_vm_.endText && !_vm_.choices.length;
                                    }
                                }
                            }, function() {
                                return [
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "ln"
                                            ],
                                            style: function() {
                                                return __webpack_require__.g.$translateStyle$(_vm_.s1);
                                            },
                                            value: function() {
                                                return _vm_.l1;
                                            }
                                        }
                                    }, [])
                                ];
                            }),
                            aiot.__ci__({
                                __vm__: _vm_,
                                __opts__: {
                                    shown: function() {
                                        return !_vm_.uiHidden && !_vm_.menu && !_vm_.endText && !_vm_.choices.length;
                                    }
                                }
                            }, function() {
                                return [
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "ln"
                                            ],
                                            style: function() {
                                                return __webpack_require__.g.$translateStyle$(_vm_.s2);
                                            },
                                            value: function() {
                                                return _vm_.l2;
                                            }
                                        }
                                    }, [])
                                ];
                            }),
                            aiot.__ci__({
                                __vm__: _vm_,
                                __opts__: {
                                    shown: function() {
                                        return !_vm_.uiHidden && !_vm_.menu && !_vm_.endText && !_vm_.choices.length;
                                    }
                                }
                            }, function() {
                                return [
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "ln"
                                            ],
                                            style: function() {
                                                return __webpack_require__.g.$translateStyle$(_vm_.s3);
                                            },
                                            value: function() {
                                                return _vm_.l3;
                                            }
                                        }
                                    }, [])
                                ];
                            }),
                            aiot.__ci__({
                                __vm__: _vm_,
                                __opts__: {
                                    shown: function() {
                                        return !_vm_.uiHidden && !_vm_.menu && !_vm_.endText && !_vm_.choices.length;
                                    }
                                }
                            }, function() {
                                return [
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "ln"
                                            ],
                                            style: function() {
                                                return __webpack_require__.g.$translateStyle$(_vm_.s4);
                                            },
                                            value: function() {
                                                return _vm_.l4;
                                            }
                                        }
                                    }, [])
                                ];
                            }),
                            aiot.__ci__({
                                __vm__: _vm_,
                                __opts__: {
                                    shown: function() {
                                        return !_vm_.uiHidden && !_vm_.menu && !_vm_.endText && !_vm_.choices.length;
                                    }
                                }
                            }, function() {
                                return [
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "ln"
                                            ],
                                            style: function() {
                                                return __webpack_require__.g.$translateStyle$(_vm_.s5);
                                            },
                                            value: function() {
                                                return _vm_.l5;
                                            }
                                        }
                                    }, [])
                                ];
                            }),
                            aiot.__ci__({
                                __vm__: _vm_,
                                __opts__: {
                                    shown: function() {
                                        return !_vm_.uiHidden && !_vm_.menu && !_vm_.endText && !_vm_.choices.length && _vm_.canTap;
                                    }
                                }
                            }, function() {
                                return [
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "more"
                                            ],
                                            value: "▼"
                                        }
                                    }, [])
                                ];
                            }),
                            aiot.__ci__({
                                __vm__: _vm_,
                                __opts__: {
                                    shown: function() {
                                        return !_vm_.menu && !_vm_.endText && _vm_.choices.length;
                                    }
                                }
                            }, function() {
                                return [
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "choices"
                                            ]
                                        }
                                    }, [
                                        aiot.__cf__({
                                            __vm__: _vm_,
                                            __opts__: {
                                                exp: function() {
                                                    return {
                                                        __list__: _vm_.choices,
                                                        __tid__: "cid"
                                                    };
                                                },
                                                key: "$idx",
                                                value: "$item"
                                            }
                                        }, function($idx, $item) {
                                            return [
                                                aiot.__ce__("text", {
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        classList: [
                                                            "choice"
                                                        ],
                                                        events: {
                                                            click: function(evt) {
                                                                return _vm_.pickChoice($idx, evt);
                                                            },
                                                            swipe: function(evt) {
                                                                return _vm_.onSwipe(evt);
                                                            }
                                                        },
                                                        value: function() {
                                                            return $item.x;
                                                        }
                                                    }
                                                }, [])
                                            ];
                                        })
                                    ])
                                ];
                            }),
                            aiot.__ci__({
                                __vm__: _vm_,
                                __opts__: {
                                    shown: function() {
                                        return _vm_.badge;
                                    }
                                }
                            }, function() {
                                return [
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "badge"
                                            ],
                                            value: function() {
                                                return _vm_.badge;
                                            }
                                        }
                                    }, [])
                                ];
                            }),
                            aiot.__ci__({
                                __vm__: _vm_,
                                __opts__: {
                                    shown: function() {
                                        return _vm_.endText;
                                    }
                                }
                            }, function() {
                                return [
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "ending"
                                            ]
                                        }
                                    }, [
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "end-title"
                                                ],
                                                value: function() {
                                                    return _vm_.endText;
                                                }
                                            }
                                        }, []),
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "end-tip"
                                                ],
                                                value: "点击返回主页"
                                            }
                                        }, [])
                                    ])
                                ];
                            }),
                            aiot.__ci__({
                                __vm__: _vm_,
                                __opts__: {
                                    shown: function() {
                                        return _vm_.menu;
                                    }
                                }
                            }, function() {
                                return [
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "menu"
                                            ]
                                        }
                                    }, [
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "menu-title"
                                                ],
                                                value: "菜单"
                                            }
                                        }, []),
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "menu-sub"
                                                ],
                                                value: function() {
                                                    return _vm_.chapterTitle + " · " + _vm_.progress;
                                                }
                                            }
                                        }, []),
                                        aiot.__ce__("div", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "mbtn",
                                                    "mbtn-main"
                                                ],
                                                events: {
                                                    click: function(evt) {
                                                        return _vm_.closeMenu(evt);
                                                    }
                                                }
                                            }
                                        }, [
                                            aiot.__ce__("text", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "mbtn-t"
                                                    ],
                                                    value: "继续阅读"
                                                }
                                            }, [])
                                        ]),
                                        aiot.__ce__("div", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "mbtn"
                                                ],
                                                events: {
                                                    click: function(evt) {
                                                        return _vm_.saveSlot(evt);
                                                    }
                                                }
                                            }
                                        }, [
                                            aiot.__ce__("text", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "mbtn-t"
                                                    ],
                                                    value: "保存进度"
                                                }
                                            }, [])
                                        ]),
                                        aiot.__ce__("div", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "mbtn"
                                                ],
                                                events: {
                                                    click: function(evt) {
                                                        return _vm_.goSaves(evt);
                                                    }
                                                }
                                            }
                                        }, [
                                            aiot.__ce__("text", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "mbtn-t"
                                                    ],
                                                    value: "读取存档"
                                                }
                                            }, [])
                                        ]),
                                        aiot.__ce__("div", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "mrow"
                                                ]
                                            }
                                        }, [
                                            aiot.__ce__("div", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "mbtn",
                                                        "mbtn-half"
                                                    ],
                                                    events: {
                                                        click: function(evt) {
                                                            return _vm_.toggleAuto(evt);
                                                        }
                                                    }
                                                }
                                            }, [
                                                aiot.__ce__("text", {
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        classList: [
                                                            "mbtn-t"
                                                        ],
                                                        value: function() {
                                                            return _vm_.autoLabel;
                                                        }
                                                    }
                                                }, [])
                                            ]),
                                            aiot.__ce__("div", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "mbtn",
                                                        "mbtn-half"
                                                    ],
                                                    events: {
                                                        click: function(evt) {
                                                            return _vm_.toggleFast(evt);
                                                        }
                                                    }
                                                }
                                            }, [
                                                aiot.__ce__("text", {
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        classList: [
                                                            "mbtn-t"
                                                        ],
                                                        value: function() {
                                                            return _vm_.fastLabel;
                                                        }
                                                    }
                                                }, [])
                                            ])
                                        ]),
                                        aiot.__ce__("div", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "mrow"
                                                ]
                                            }
                                        }, [
                                            aiot.__ce__("div", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "mbtn",
                                                        "mbtn-half"
                                                    ],
                                                    events: {
                                                        click: function(evt) {
                                                            return _vm_.rewind(evt);
                                                        }
                                                    }
                                                }
                                            }, [
                                                aiot.__ce__("text", {
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        classList: [
                                                            "mbtn-t"
                                                        ],
                                                        value: "回退一句"
                                                    }
                                                }, [])
                                            ]),
                                            aiot.__ce__("div", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "mbtn",
                                                        "mbtn-half"
                                                    ],
                                                    events: {
                                                        click: function(evt) {
                                                            return _vm_.goChapters(evt);
                                                        }
                                                    }
                                                }
                                            }, [
                                                aiot.__ce__("text", {
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        classList: [
                                                            "mbtn-t"
                                                        ],
                                                        value: "章节"
                                                    }
                                                }, [])
                                            ])
                                        ]),
                                        aiot.__ce__("div", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "mrow"
                                                ]
                                            }
                                        }, [
                                            aiot.__ce__("div", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "mbtn",
                                                        "mbtn-half"
                                                    ],
                                                    events: {
                                                        click: function(evt) {
                                                            return _vm_.goCg(evt);
                                                        }
                                                    }
                                                }
                                            }, [
                                                aiot.__ce__("text", {
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        classList: [
                                                            "mbtn-t"
                                                        ],
                                                        value: "CG 鉴赏"
                                                    }
                                                }, [])
                                            ]),
                                            aiot.__ce__("div", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "mbtn",
                                                        "mbtn-half"
                                                    ],
                                                    events: {
                                                        click: function(evt) {
                                                            return _vm_.goSettings(evt);
                                                        }
                                                    }
                                                }
                                            }, [
                                                aiot.__ce__("text", {
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        classList: [
                                                            "mbtn-t"
                                                        ],
                                                        value: "设置"
                                                    }
                                                }, [])
                                            ])
                                        ]),
                                        aiot.__ce__("div", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "mrow"
                                                ]
                                            }
                                        }, [
                                            aiot.__ce__("div", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "mbtn",
                                                        "mbtn-half",
                                                        "mbtn-quit"
                                                    ],
                                                    events: {
                                                        click: function(evt) {
                                                            return _vm_.goHome(evt);
                                                        }
                                                    }
                                                }
                                            }, [
                                                aiot.__ce__("text", {
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        classList: [
                                                            "mbtn-t"
                                                        ],
                                                        value: "返回主页"
                                                    }
                                                }, [])
                                            ]),
                                            aiot.__ce__("div", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "mbtn",
                                                        "mbtn-half",
                                                        "mbtn-quit"
                                                    ],
                                                    events: {
                                                        click: function(evt) {
                                                            return _vm_.exitApp(evt);
                                                        }
                                                    }
                                                }
                                            }, [
                                                aiot.__ce__("text", {
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        classList: [
                                                            "mbtn-t"
                                                        ],
                                                        value: "退出应用"
                                                    }
                                                }, [])
                                            ])
                                        ])
                                    ])
                                ];
                            })
                        ]);
                    };
                    $app_exports$['entry'] = function($app_exports$) {
                        $app_script$({}, $app_exports$, $app_require$1);
                        $app_exports$.default.template = $app_template$;
                        $app_exports$.default.style = $app_style$;
                    };
                })();
            })();
        };
        return createPageHandler();
    })(global, globalThis, window, $app_exports$, $app_evaluate$);
}
