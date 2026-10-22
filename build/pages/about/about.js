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
                                backgroundColor: "#f5f5f7",
                                position: "relative"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "headbar"
                                ]
                            ],
                            {
                                position: "absolute",
                                top: "0px",
                                left: "0px",
                                width: "336px",
                                height: "72px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "title"
                                ]
                            ],
                            {
                                position: "absolute",
                                top: "10px",
                                left: "0px",
                                width: "336px",
                                textAlign: "center",
                                fontSize: "30px",
                                color: "#f2f2f4",
                                fontWeight: "bold"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "sub"
                                ]
                            ],
                            {
                                position: "absolute",
                                top: "42px",
                                left: "0px",
                                width: "336px",
                                textAlign: "center",
                                fontSize: "14px",
                                color: "#d6d6da"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "lst"
                                ]
                            ],
                            {
                                position: "absolute",
                                top: "80px",
                                left: "12px",
                                width: "312px",
                                height: "330px",
                                borderRadius: "12px",
                                backgroundColor: "rgba(255, 255, 255, 0.92)",
                                borderTopColor: "#e0e0e0",
                                borderRightColor: "#e0e0e0",
                                borderBottomColor: "#e0e0e0",
                                borderLeftColor: "#e0e0e0",
                                borderStyle: "solid",
                                borderTopWidth: "1px",
                                borderRightWidth: "1px",
                                borderBottomWidth: "1px",
                                borderLeftWidth: "1px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "row"
                                ]
                            ],
                            {
                                width: "308px",
                                height: "20px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "cell"
                                ]
                            ],
                            {
                                width: "292px",
                                marginLeft: "10px",
                                fontSize: "15px",
                                lineHeight: "20px",
                                color: "#333333",
                                lines: 1
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "back"
                                ]
                            ],
                            {
                                position: "absolute",
                                top: "428px",
                                left: "50px",
                                width: "236px",
                                height: "44px",
                                borderRadius: "22px",
                                backgroundColor: "#ffffff",
                                borderTopColor: "#e0e0e0",
                                borderRightColor: "#e0e0e0",
                                borderBottomColor: "#e0e0e0",
                                borderLeftColor: "#e0e0e0",
                                borderStyle: "solid",
                                borderTopWidth: "1px",
                                borderRightWidth: "1px",
                                borderBottomWidth: "1px",
                                borderLeftWidth: "1px",
                                alignItems: "center",
                                justifyContent: "center"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "btn-t"
                                ]
                            ],
                            {
                                fontSize: "24px",
                                color: "#333333",
                                fontWeight: "bold"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "scrim"
                                ]
                            ],
                            {
                                position: "absolute",
                                top: "0px",
                                left: "0px",
                                width: "336px",
                                height: "480px",
                                backgroundColor: "rgba(0, 0, 0, 0.42)"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "sheet"
                                ]
                            ],
                            {
                                position: "absolute",
                                top: "84px",
                                left: "20px",
                                width: "296px",
                                height: "312px",
                                borderRadius: "16px",
                                backgroundColor: "#ffffff",
                                flexDirection: "column",
                                alignItems: "center",
                                paddingTop: "16px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "sheet-t"
                                ]
                            ],
                            {
                                fontSize: "28px",
                                color: "#333333",
                                fontWeight: "bold"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "sheet-sub"
                                ]
                            ],
                            {
                                fontSize: "16px",
                                color: "#999999",
                                marginTop: "6px",
                                marginBottom: "14px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "sbtn"
                                ]
                            ],
                            {
                                width: "250px",
                                height: "44px",
                                backgroundColor: "rgba(226, 216, 120, 0.27)",
                                alignItems: "center",
                                justifyContent: "center",
                                marginBottom: "8px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "sbtn-main"
                                ]
                            ],
                            {
                                backgroundColor: "rgba(226, 216, 120, 0.66)"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "sbtn-quit"
                                ]
                            ],
                            {
                                backgroundColor: "#f2f2f4"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "sbtn-t"
                                ]
                            ],
                            {
                                fontSize: "22px",
                                color: "#111111",
                                fontWeight: 800
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
                        var _assets = __webpack_require__("./src/common/assets.js");
                        var _reader = __webpack_require__("./src/common/reader.js");
                        function _interopRequireDefault(e) {
                            return e && e.__esModule ? e : {
                                default: e
                            };
                        }
                        const APP_VERSION = '1.0';
                        const MAXU = 38;
                        const BREAK_AFTER = '，。！？；：、）」』…—';
                        const TAPS_TO_OPEN = 7;
                        const BODY = 'font-size: 15px; line-height: 20px; color: #4a4a4a;';
                        const HEAD = 'font-size: 17px; line-height: 20px; color: #1a1a1a; font-weight: bold;';
                        const GAP = 'font-size: 6px; line-height: 20px; color: #ffffff;';
                        function unit(ch) {
                            return ch.codePointAt(0) < 128 ? 1 : 2;
                        }
                        function wrap(text) {
                            const out = [];
                            const paras = String(text).split('\n');
                            for(let i = 0; i < paras.length; i++){
                                const para = paras[i];
                                if ('' === para) {
                                    out.push('');
                                    continue;
                                }
                                const toks = [];
                                let word = '';
                                for (const ch of para){
                                    if (ch.codePointAt(0) < 128 && /[A-Za-z0-9'’._-]/.test(ch)) {
                                        word += ch;
                                        continue;
                                    }
                                    if (word) {
                                        toks.push(word);
                                        word = '';
                                    }
                                    toks.push(ch);
                                }
                                if (word) toks.push(word);
                                let line = '';
                                let w = 0;
                                for(let k = 0; k < toks.length; k++){
                                    const tk = toks[k];
                                    let tw = 0;
                                    for (const c of tk)tw += unit(c);
                                    const punct = 1 === tk.length && BREAK_AFTER.indexOf(tk) >= 0;
                                    if (line && w + tw > MAXU && !punct) {
                                        out.push(line.replace(/ +$/, ''));
                                        line = tk;
                                        w = tw;
                                    } else {
                                        line += tk;
                                        w += tw;
                                    }
                                }
                                if (line) out.push(line);
                            }
                            return out;
                        }
                        const ABOUT = [
                            [
                                '故事',
                                '雨夜，子睿在路边听见一声猫叫。一个月前母亲「消失」的那天，他捡回了一只黑猫。\n\n某天醒来，黑猫变成了一个自称要报恩的猫娘，还非要他给取个名字。从那天起，冷清的家里多了一个人，也多了一堆麻烦。'
                            ],
                            [
                                '原作',
                                '《我的猫娘恋人》\nMy Cat Girl Lover'
                            ],
                            [
                                '移植',
                                '小米手环 9 Pro（336×480）的 Vela 快应用，参照 galgod-band 的引擎与界面结构重写。'
                            ],
                            [
                                '素材',
                                '剧本、立绘、背景、CG 均由 PC 版 Ren\'Py 原包解包；主界面背景、标题与图标取自原作标题画面。'
                            ],
                            [
                                '操作',
                                '点屏幕：下一句／立即显示整句\n下滑：菜单　右滑：回退一句\n长按：按「设置」里的选项'
                            ],
                            [
                                '解锁',
                                '连点标题「关于」7 下，会弹出解锁面板：可一次点亮全部 CG、标记通关或清空记录。'
                            ],
                            [
                                '声明',
                                '非官方同人移植，仅供个人学习交流，请勿用于商业用途。原作版权归原作者所有。'
                            ]
                        ];
                        var _default = exports.default = {
                            protected: {
                                rows: [],
                                verText: '',
                                panel: false,
                                taps: 0,
                                tapAt: 0,
                                lockUntil: 0,
                                openAt: 0,
                                seenCount: 0,
                                total: 0,
                                clearedText: '否'
                            },
                            onInit () {
                                this.verText = 'v' + APP_VERSION + ' · 手环移植版';
                                this.buildRows();
                                this.refreshState();
                            },
                            onShow () {
                                this.refreshState();
                            },
                            buildRows () {
                                const rows = [
                                    {
                                        t: ' ',
                                        s: GAP
                                    }
                                ];
                                for(let i = 0; i < ABOUT.length; i++){
                                    if (i > 0) rows.push({
                                        t: ' ',
                                        s: GAP
                                    });
                                    rows.push({
                                        t: ABOUT[i][0],
                                        s: HEAD
                                    });
                                    const lines = wrap(ABOUT[i][1]);
                                    for(let k = 0; k < lines.length; k++)rows.push({
                                        t: lines[k],
                                        s: BODY
                                    });
                                }
                                rows.push({
                                    t: ' ',
                                    s: GAP
                                });
                                rows.push({
                                    t: ' ',
                                    s: GAP
                                });
                                this.rows = rows;
                            },
                            refreshState () {
                                this.total = _assets.CG.length;
                                (0, _reader.loadSeen)((list)=>{
                                    this.seenCount = list.length;
                                });
                                (0, _reader.loadCleared)((ok)=>{
                                    this.clearedText = ok ? '是' : '否';
                                });
                            },
                            titleTap () {
                                const now = Date.now();
                                if (now < this.lockUntil) return;
                                if (now - this.tapAt > 1500) this.taps = 0;
                                this.tapAt = now;
                                this.taps += 1;
                                const left = TAPS_TO_OPEN - this.taps;
                                if (left <= 0) {
                                    this.taps = 0;
                                    this.openPanel();
                                } else if (3 === left) _system2.default.showToast({
                                    message: '再点 3 下'
                                });
                            },
                            openPanel () {
                                this.lockUntil = Date.now() + 900;
                                this.openAt = Date.now();
                                this.refreshState();
                                this.panel = true;
                            },
                            closePanel () {
                                if (Date.now() - this.openAt < 400) return;
                                this.panel = false;
                                this.taps = 0;
                                this.lockUntil = Date.now() + 500;
                            },
                            onBackPress () {
                                if (this.panel) {
                                    this.panel = false;
                                    this.taps = 0;
                                    this.lockUntil = Date.now() + 500;
                                    return true;
                                }
                                if (Date.now() - this.tapAt < 1500) return true;
                                _system.default.back();
                                return true;
                            },
                            unlockCg () {
                                (0, _reader.saveSeen)(_assets.CG.slice(), ()=>{
                                    this.refreshState();
                                    _system2.default.showToast({
                                        message: '已解锁全部 ' + _assets.CG.length + ' 张 CG'
                                    });
                                });
                            },
                            markClearedNow () {
                                (0, _reader.markCleared)(()=>{
                                    this.refreshState();
                                    _system2.default.showToast({
                                        message: '已标记通关'
                                    });
                                });
                            },
                            resetCg () {
                                (0, _reader.saveSeen)([], ()=>{
                                    this.refreshState();
                                    _system2.default.showToast({
                                        message: 'CG 记录已清空'
                                    });
                                });
                            },
                            ban () {},
                            back () {
                                _system.default.back();
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
                                    swipe: function(evt) {
                                        return _vm_.ban(evt);
                                    }
                                }
                            }
                        }, [
                            aiot.__ce__("image", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "headbar"
                                    ],
                                    src: "/common/img/ui/headbar.png"
                                }
                            }, []),
                            aiot.__ce__("text", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "title"
                                    ],
                                    events: {
                                        click: function(evt) {
                                            return _vm_.titleTap(evt);
                                        }
                                    },
                                    value: "关于"
                                }
                            }, []),
                            aiot.__ce__("text", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "sub"
                                    ],
                                    value: function() {
                                        return _vm_.verText;
                                    }
                                }
                            }, []),
                            aiot.__ce__("list", {
                                __vm__: _vm_,
                                __opts__: {
                                    id: "about-list",
                                    classList: [
                                        "lst"
                                    ],
                                    bounces: "true",
                                    events: {
                                        swipe: function(evt) {
                                            return _vm_.ban(evt);
                                        }
                                    }
                                }
                            }, [
                                aiot.__cf__({
                                    __vm__: _vm_,
                                    __opts__: {
                                        exp: function() {
                                            return {
                                                __list__: _vm_.rows,
                                                __tid__: "rid"
                                            };
                                        },
                                        key: "$idx",
                                        value: "$item"
                                    }
                                }, function($idx, $item) {
                                    return [
                                        aiot.__ce__("list-item", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "row"
                                                ],
                                                events: {
                                                    swipe: function(evt) {
                                                        return _vm_.ban(evt);
                                                    }
                                                }
                                            }
                                        }, [
                                            aiot.__ce__("text", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "cell"
                                                    ],
                                                    style: function() {
                                                        return __webpack_require__.g.$translateStyle$($item.s);
                                                    },
                                                    value: function() {
                                                        return $item.t;
                                                    }
                                                }
                                            }, [])
                                        ])
                                    ];
                                })
                            ]),
                            aiot.__ce__("div", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "back"
                                    ],
                                    events: {
                                        click: function(evt) {
                                            return _vm_.back(evt);
                                        },
                                        swipe: function(evt) {
                                            return _vm_.ban(evt);
                                        }
                                    }
                                }
                            }, [
                                aiot.__ce__("text", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "btn-t"
                                        ],
                                        value: "返回"
                                    }
                                }, [])
                            ]),
                            aiot.__ci__({
                                __vm__: _vm_,
                                __opts__: {
                                    shown: function() {
                                        return _vm_.panel;
                                    }
                                }
                            }, function() {
                                return [
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "scrim"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.closePanel(evt);
                                                },
                                                swipe: function(evt) {
                                                    return _vm_.ban(evt);
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
                                        return _vm_.panel;
                                    }
                                }
                            }, function() {
                                return [
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "sheet"
                                            ]
                                        }
                                    }, [
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "sheet-t"
                                                ],
                                                value: "解 锁"
                                            }
                                        }, []),
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "sheet-sub"
                                                ],
                                                value: function() {
                                                    return "CG " + _vm_.seenCount + " / " + _vm_.total + "　通关 " + _vm_.clearedText;
                                                }
                                            }
                                        }, []),
                                        aiot.__ce__("div", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "sbtn",
                                                    "sbtn-main"
                                                ],
                                                events: {
                                                    click: function(evt) {
                                                        return _vm_.unlockCg(evt);
                                                    },
                                                    swipe: function(evt) {
                                                        return _vm_.ban(evt);
                                                    }
                                                }
                                            }
                                        }, [
                                            aiot.__ce__("text", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "sbtn-t"
                                                    ],
                                                    value: "解锁全部 CG"
                                                }
                                            }, [])
                                        ]),
                                        aiot.__ce__("div", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "sbtn"
                                                ],
                                                events: {
                                                    click: function(evt) {
                                                        return _vm_.markClearedNow(evt);
                                                    },
                                                    swipe: function(evt) {
                                                        return _vm_.ban(evt);
                                                    }
                                                }
                                            }
                                        }, [
                                            aiot.__ce__("text", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "sbtn-t"
                                                    ],
                                                    value: "标记已通关"
                                                }
                                            }, [])
                                        ]),
                                        aiot.__ce__("div", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "sbtn"
                                                ],
                                                events: {
                                                    click: function(evt) {
                                                        return _vm_.resetCg(evt);
                                                    },
                                                    swipe: function(evt) {
                                                        return _vm_.ban(evt);
                                                    }
                                                }
                                            }
                                        }, [
                                            aiot.__ce__("text", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "sbtn-t"
                                                    ],
                                                    value: "清空 CG 记录"
                                                }
                                            }, [])
                                        ]),
                                        aiot.__ce__("div", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "sbtn",
                                                    "sbtn-quit"
                                                ],
                                                events: {
                                                    click: function(evt) {
                                                        return _vm_.closePanel(evt);
                                                    },
                                                    swipe: function(evt) {
                                                        return _vm_.ban(evt);
                                                    }
                                                }
                                            }
                                        }, [
                                            aiot.__ce__("text", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "sbtn-t"
                                                    ],
                                                    value: "关闭"
                                                }
                                            }, [])
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
