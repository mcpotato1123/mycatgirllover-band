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
                                top: "88px",
                                left: "0px",
                                width: "336px",
                                height: "330px"
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
                                width: "336px",
                                height: "66px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "cols"
                                ]
                            ],
                            {
                                width: "336px",
                                height: "66px",
                                flexDirection: "row",
                                justifyContent: "center"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "th"
                                ]
                            ],
                            {
                                width: "96px",
                                height: "54px",
                                marginLeft: "5px",
                                marginRight: "5px",
                                marginTop: "8px",
                                borderRadius: "8px",
                                backgroundColor: "#ffffff",
                                objectFit: "cover",
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
                                    "viewer"
                                ]
                            ],
                            {
                                position: "absolute",
                                top: "0px",
                                left: "0px",
                                width: "336px",
                                height: "480px",
                                backgroundColor: "#000000",
                                overflow: "hidden"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "full"
                                ]
                            ],
                            {
                                position: "absolute",
                                top: "0px",
                                left: "0px",
                                height: "480px",
                                objectFit: "fill"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "vname"
                                ]
                            ],
                            {
                                position: "absolute",
                                top: "12px",
                                left: "12px",
                                fontSize: "16px",
                                color: "#ffffff",
                                backgroundColor: "rgba(0, 0, 0, 0.55)",
                                paddingLeft: "10px",
                                paddingRight: "10px",
                                paddingTop: "5px",
                                paddingBottom: "5px",
                                borderRadius: "10px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "close"
                                ]
                            ],
                            {
                                position: "absolute",
                                top: "8px",
                                left: "288px",
                                width: "40px",
                                height: "40px",
                                borderRadius: "20px",
                                backgroundColor: "rgba(0, 0, 0, 0.6)",
                                alignItems: "center",
                                justifyContent: "center"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "close-t"
                                ]
                            ],
                            {
                                fontSize: "26px",
                                color: "#ffffff"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "zone"
                                ]
                            ],
                            {
                                position: "absolute",
                                top: "60px",
                                width: "48px",
                                height: "352px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "bar"
                                ]
                            ],
                            {
                                position: "absolute",
                                top: "424px",
                                left: "0px",
                                width: "336px",
                                height: "56px",
                                backgroundColor: "rgba(0, 0, 0, 0.58)"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "track"
                                ]
                            ],
                            {
                                position: "absolute",
                                top: "16px",
                                left: "48px",
                                width: "240px",
                                height: "4px",
                                borderRadius: "2px",
                                backgroundColor: "rgba(255, 255, 255, 0.28)"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "thumb"
                                ]
                            ],
                            {
                                position: "absolute",
                                top: "0px",
                                height: "4px",
                                borderRadius: "2px",
                                backgroundColor: "#ffd166"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "cnt"
                                ]
                            ],
                            {
                                position: "absolute",
                                top: "24px",
                                left: "0px",
                                width: "336px",
                                textAlign: "center",
                                fontSize: "16px",
                                color: "#dddddd"
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
                        var _assets = __webpack_require__("./src/common/assets.js");
                        var _reader = __webpack_require__("./src/common/reader.js");
                        function _interopRequireDefault(e) {
                            return e && e.__esModule ? e : {
                                default: e
                            };
                        }
                        const VIEW_W = 336;
                        const STEP = 168;
                        const SWIPE_MIN = 36;
                        const SWIPE_MS = 800;
                        function readX(e) {
                            if (!e) return null;
                            let p = null;
                            p = e.touches && e.touches.length ? e.touches[0] : e.changedTouches && e.changedTouches.length ? e.changedTouches[0] : e;
                            if (!p) return null;
                            if ('number' == typeof p.clientX) return p.clientX;
                            if ('number' == typeof p.pageX) return p.pageX;
                            return 'number' == typeof p.x ? p.x : null;
                        }
                        function readDir(e) {
                            if (!e) return '';
                            if ('string' == typeof e.direction) return e.direction;
                            if (e.detail && 'string' == typeof e.detail.direction) return e.detail.direction;
                            return '';
                        }
                        var _default = exports.default = {
                            protected: {
                                rows: [],
                                seen: 0,
                                total: 0,
                                viewing: false,
                                viewSrc: '',
                                viewName: '',
                                counter: '',
                                panStyle: 'left: 0px; width: 853px;',
                                thumbStyle: ''
                            },
                            onInit () {
                                this.lock = 0;
                                this.seenIds = {};
                                this.pan = 0;
                                this.maxPan = 0;
                                this.wideW = 853;
                                this.touchX0 = null;
                                this.touchT = 0;
                                this.moved = false;
                                this.refresh();
                            },
                            onShow () {
                                this.refresh();
                            },
                            refresh () {
                                (0, _reader.loadSeen)((list)=>{
                                    this.seenIds = {};
                                    for(let i = 0; i < list.length; i++)this.seenIds[list[i]] = 1;
                                    this.build();
                                });
                            },
                            build () {
                                const rows = [];
                                let seen = 0;
                                for(let i = 0; i < _assets.CG.length; i++)if (this.seenIds[_assets.CG[i]]) seen += 1;
                                for(let i = 0; i < _assets.CG.length; i += 3){
                                    const row = {
                                        c0: null,
                                        c1: null,
                                        c2: null
                                    };
                                    for(let k = 0; k < 3; k++){
                                        const idx = i + k;
                                        if (idx >= _assets.CG.length) break;
                                        const on = !!this.seenIds[_assets.CG[idx]];
                                        row['c' + k] = {
                                            src: on ? (0, _assets.cgThumb)(_assets.CG[idx]) : '/common/img/ui/locked.png',
                                            idx: idx,
                                            on: on
                                        };
                                    }
                                    rows.push(row);
                                }
                                this.rows = rows;
                                this.seen = seen;
                                this.total = _assets.CG.length;
                            },
                            open (cell) {
                                if (!cell || !cell.on) return;
                                if (Date.now() - this.lock < 400) return;
                                this.lock = Date.now();
                                const id = _assets.CG[cell.idx];
                                this.viewing = true;
                                this.viewName = id;
                                this.viewSrc = (0, _assets.cgWide)(id);
                                this.wideW = _assets.CG_WIDE[id] || 853;
                                this.maxPan = Math.max(0, this.wideW - VIEW_W);
                                this.setPan(this.maxPan / 2);
                                this.counter = '左右拖动看全图';
                            },
                            setPan (v) {
                                const p = Math.max(0, Math.min(this.maxPan, Math.round(v)));
                                this.pan = p;
                                this.panStyle = 'left: -' + p + 'px; width: ' + this.wideW + 'px;';
                                const tw = this.maxPan > 0 ? Math.max(18, Math.round(240 * VIEW_W / this.wideW)) : 240;
                                const left = this.maxPan > 0 ? Math.round((240 - tw) * p / this.maxPan) : 0;
                                this.thumbStyle = 'left: ' + left + 'px; width: ' + tw + 'px;';
                                if (this.maxPan > 0) this.counter = p <= 0 ? '← 左边到头了' : p >= this.maxPan ? '右边到头了 →' : '左右拖动看全图';
                            },
                            step (dir) {
                                if (Date.now() - this.lock < 220) return;
                                this.lock = Date.now();
                                this.setPan(this.pan + dir * STEP);
                            },
                            stepLeft () {
                                this.step(-1);
                            },
                            stepRight () {
                                this.step(1);
                            },
                            closeView () {
                                this.viewing = false;
                            },
                            touchStart (e) {
                                this.touchX0 = readX(e);
                                this.touchT = Date.now();
                                this.moved = false;
                                this.panAtStart = this.pan;
                            },
                            touchMove (e) {
                                const x = readX(e);
                                if (null === x || null === this.touchX0) return;
                                const dx = x - this.touchX0;
                                if (Math.abs(dx) < 3) return;
                                this.moved = true;
                                this.setPan(this.panAtStart - dx);
                            },
                            touchEnd (e) {
                                if (this.moved) return;
                                const x = readX(e);
                                if (null === x || null === this.touchX0) return;
                                if (Date.now() - this.touchT > SWIPE_MS) return;
                                const dx = x - this.touchX0;
                                if (Math.abs(dx) < SWIPE_MIN) return;
                                this.step(dx < 0 ? 1 : -1);
                            },
                            onSwipe (e) {
                                const dir = readDir(e);
                                if ('left' === dir) this.step(1);
                                else if ('right' === dir) this.step(-1);
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
                                    value: "CG 鉴赏"
                                }
                            }, []),
                            aiot.__ce__("text", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "sub"
                                    ],
                                    value: function() {
                                        return "已解锁 " + _vm_.seen + " / " + _vm_.total + " · 点图放大 · 左右拖动看全图";
                                    }
                                }
                            }, []),
                            aiot.__ce__("list", {
                                __vm__: _vm_,
                                __opts__: {
                                    id: "cg-list",
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
                                            aiot.__ce__("div", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "cols"
                                                    ]
                                                }
                                            }, [
                                                aiot.__ce__("image", {
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        classList: [
                                                            "th"
                                                        ],
                                                        src: function() {
                                                            return $item.c0.src;
                                                        },
                                                        events: {
                                                            click: function(evt) {
                                                                return _vm_.open($item.c0, evt);
                                                            },
                                                            swipe: function(evt) {
                                                                return _vm_.ban(evt);
                                                            }
                                                        }
                                                    }
                                                }, []),
                                                aiot.__ci__({
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        shown: function() {
                                                            return $item.c1;
                                                        }
                                                    }
                                                }, function() {
                                                    return [
                                                        aiot.__ce__("image", {
                                                            __vm__: _vm_,
                                                            __opts__: {
                                                                classList: [
                                                                    "th"
                                                                ],
                                                                src: function() {
                                                                    return $item.c1.src;
                                                                },
                                                                events: {
                                                                    click: function(evt) {
                                                                        return _vm_.open($item.c1, evt);
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
                                                            return $item.c2;
                                                        }
                                                    }
                                                }, function() {
                                                    return [
                                                        aiot.__ce__("image", {
                                                            __vm__: _vm_,
                                                            __opts__: {
                                                                classList: [
                                                                    "th"
                                                                ],
                                                                src: function() {
                                                                    return $item.c2.src;
                                                                },
                                                                events: {
                                                                    click: function(evt) {
                                                                        return _vm_.open($item.c2, evt);
                                                                    },
                                                                    swipe: function(evt) {
                                                                        return _vm_.ban(evt);
                                                                    }
                                                                }
                                                            }
                                                        }, [])
                                                    ];
                                                })
                                            ])
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
                                        return _vm_.viewing;
                                    }
                                }
                            }, function() {
                                return [
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "viewer"
                                            ],
                                            events: {
                                                swipe: function(evt) {
                                                    return _vm_.onSwipe(evt);
                                                },
                                                touchstart: function(evt) {
                                                    return _vm_.touchStart(evt);
                                                },
                                                touchmove: function(evt) {
                                                    return _vm_.touchMove(evt);
                                                },
                                                touchend: function(evt) {
                                                    return _vm_.touchEnd(evt);
                                                },
                                                touchcancel: function(evt) {
                                                    return _vm_.touchEnd(evt);
                                                }
                                            }
                                        }
                                    }, [
                                        aiot.__ce__("image", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "full"
                                                ],
                                                style: function() {
                                                    return __webpack_require__.g.$translateStyle$(_vm_.panStyle);
                                                },
                                                src: function() {
                                                    return _vm_.viewSrc;
                                                }
                                            }
                                        }, []),
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "vname"
                                                ],
                                                value: function() {
                                                    return _vm_.viewName;
                                                }
                                            }
                                        }, []),
                                        aiot.__ce__("div", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "close"
                                                ],
                                                events: {
                                                    click: function(evt) {
                                                        return _vm_.closeView(evt);
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
                                                        "close-t"
                                                    ],
                                                    value: "×"
                                                }
                                            }, [])
                                        ]),
                                        aiot.__ce__("div", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "zone"
                                                ],
                                                style: {
                                                    left: "0px"
                                                },
                                                events: {
                                                    click: function(evt) {
                                                        return _vm_.stepLeft(evt);
                                                    },
                                                    swipe: function(evt) {
                                                        return _vm_.ban(evt);
                                                    }
                                                }
                                            }
                                        }, []),
                                        aiot.__ce__("div", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "zone"
                                                ],
                                                style: {
                                                    left: "288px"
                                                },
                                                events: {
                                                    click: function(evt) {
                                                        return _vm_.stepRight(evt);
                                                    },
                                                    swipe: function(evt) {
                                                        return _vm_.ban(evt);
                                                    }
                                                }
                                            }
                                        }, []),
                                        aiot.__ce__("div", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "bar"
                                                ]
                                            }
                                        }, [
                                            aiot.__ce__("div", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "track"
                                                    ]
                                                }
                                            }, [
                                                aiot.__ce__("div", {
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        classList: [
                                                            "thumb"
                                                        ],
                                                        style: function() {
                                                            return __webpack_require__.g.$translateStyle$(_vm_.thumbStyle);
                                                        }
                                                    }
                                                }, [])
                                            ]),
                                            aiot.__ce__("text", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "cnt"
                                                    ],
                                                    value: function() {
                                                        return _vm_.counter;
                                                    }
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
