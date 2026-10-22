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
                                    "scroll"
                                ]
                            ],
                            {
                                position: "absolute",
                                top: "88px",
                                left: "0px",
                                width: "336px",
                                height: "330px",
                                flexDirection: "column",
                                alignItems: "center"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "sec"
                                ]
                            ],
                            {
                                width: "312px",
                                marginBottom: "8px",
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
                                borderLeftWidth: "1px",
                                flexDirection: "column",
                                alignItems: "center",
                                paddingTop: "8px",
                                paddingBottom: "4px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "st"
                                ]
                            ],
                            {
                                fontSize: "22px",
                                color: "#333333",
                                fontWeight: "bold",
                                marginBottom: "2px"
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
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                                width: "280px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "step"
                                ]
                            ],
                            {
                                width: "46px",
                                height: "46px",
                                borderRadius: "23px",
                                backgroundColor: "rgba(226, 216, 120, 0.55)",
                                alignItems: "center",
                                justifyContent: "center"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "stp"
                                ]
                            ],
                            {
                                fontSize: "26px",
                                color: "#333333",
                                fontWeight: "bold"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "val"
                                ]
                            ],
                            {
                                fontSize: "24px",
                                color: "#222222",
                                fontWeight: "bold",
                                width: "170px",
                                textAlign: "center"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "row2"
                                ]
                            ],
                            {
                                flexDirection: "row",
                                justifyContent: "space-between",
                                width: "264px",
                                marginTop: "2px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "lb"
                                ]
                            ],
                            {
                                fontSize: "16px",
                                color: "#999999"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "swrow"
                                ]
                            ],
                            {
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                                width: "280px",
                                height: "46px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "sl"
                                ]
                            ],
                            {
                                fontSize: "22px",
                                color: "#333333",
                                fontWeight: "bold"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "sw"
                                ]
                            ],
                            {
                                width: "86px",
                                height: "36px",
                                borderRadius: "18px",
                                backgroundColor: "#e2e2e6",
                                alignItems: "center",
                                justifyContent: "center"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "sw-on"
                                ]
                            ],
                            {
                                backgroundColor: "rgba(226, 216, 120, 0.9)"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "sw-wide"
                                ]
                            ],
                            {
                                width: "130px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "swt"
                                ]
                            ],
                            {
                                fontSize: "18px",
                                color: "#333333",
                                fontWeight: "bold"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "preview"
                                ]
                            ],
                            {
                                width: "280px",
                                minHeight: "62px",
                                marginTop: "4px",
                                borderRadius: "8px",
                                backgroundColor: "rgba(0, 0, 0, 0.05)",
                                borderTopColor: "#e0e0e0",
                                borderRightColor: "#e0e0e0",
                                borderBottomColor: "#e0e0e0",
                                borderLeftColor: "#e0e0e0",
                                borderStyle: "solid",
                                borderTopWidth: "1px",
                                borderRightWidth: "1px",
                                borderBottomWidth: "1px",
                                borderLeftWidth: "1px",
                                justifyContent: "center",
                                alignItems: "center",
                                paddingTop: "8px",
                                paddingRight: "8px",
                                paddingBottom: "8px",
                                paddingLeft: "8px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "pv"
                                ]
                            ],
                            {
                                color: "#333333",
                                textAlign: "center"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "gap"
                                ]
                            ],
                            {
                                height: "8px"
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
                        ]
                    ];
                    var $app_script$ = function __scriptModule__(module, exports, $app_require$1) {
                        "use strict";
                        Object.defineProperty(exports, "__esModule", {
                            value: true
                        });
                        exports.default = void 0;
                        var _system = _interopRequireDefault($app_require$1("@app-module/system.router"));
                        var _system2 = _interopRequireDefault($app_require$1("@app-module/system.brightness"));
                        var _reader = __webpack_require__("./src/common/reader.js");
                        function _interopRequireDefault(e) {
                            return e && e.__esModule ? e : {
                                default: e
                            };
                        }
                        const PRESS = [
                            'off',
                            'hide',
                            'fast'
                        ];
                        const PRESS_TEXT = {
                            off: '关',
                            hide: '隐藏界面',
                            fast: '按住快进'
                        };
                        function clamp(v, lo, hi) {
                            return Math.max(lo, Math.min(hi, v));
                        }
                        var _default = exports.default = {
                            protected: {
                                size: 20,
                                speed: 28,
                                autoMs: 0,
                                keepOn: true,
                                longpress: 'off',
                                speedText: '28ms/字',
                                autoText: '关',
                                keepText: '开',
                                pressText: '关',
                                previewStyle: 'font-size: 20px; line-height: 28px;'
                            },
                            onInit () {
                                this.lock = 0;
                                (0, _reader.loadSettings)((s)=>this.apply(s));
                            },
                            apply (s) {
                                this.size = s.size;
                                this.speed = s.speed;
                                this.autoMs = s.autoMs;
                                this.keepOn = s.keepOn;
                                this.longpress = s.longpress;
                                this.speedText = 0 === s.speed ? '瞬间' : s.speed + 'ms/字';
                                this.autoText = 0 === s.autoMs ? '关' : s.autoMs + 'ms';
                                this.keepText = s.keepOn ? '开' : '关';
                                this.pressText = PRESS_TEXT[s.longpress] || '关';
                                this.previewStyle = 'font-size: ' + s.size + 'px; line-height: ' + (s.size + 8) + 'px;';
                                try {
                                    _system2.default.setKeepScreenOn({
                                        keepScreenOn: !!s.keepOn
                                    });
                                } catch (e) {}
                            },
                            persist (patch) {
                                const s = (0, _reader.normalizeSettings)(Object.assign({
                                    size: this.size,
                                    speed: this.speed,
                                    autoMs: this.autoMs,
                                    keepOn: this.keepOn,
                                    longpress: this.longpress
                                }, patch || {}));
                                this.apply(s);
                                (0, _reader.saveSettings)(s);
                            },
                            guard () {
                                if (Date.now() - this.lock < 240) return false;
                                this.lock = Date.now();
                                return true;
                            },
                            sizeUp () {
                                if (this.guard()) this.persist({
                                    size: clamp(this.size + 2, _reader.SIZE_MIN, _reader.SIZE_MAX)
                                });
                            },
                            sizeDown () {
                                if (this.guard()) this.persist({
                                    size: clamp(this.size - 2, _reader.SIZE_MIN, _reader.SIZE_MAX)
                                });
                            },
                            speedUp () {
                                if (this.guard()) this.persist({
                                    speed: clamp(this.speed + 4, _reader.SPEED_MIN, _reader.SPEED_MAX)
                                });
                            },
                            speedDown () {
                                if (this.guard()) this.persist({
                                    speed: clamp(this.speed - 4, _reader.SPEED_MIN, _reader.SPEED_MAX)
                                });
                            },
                            autoUp () {
                                if (this.guard()) this.persist({
                                    autoMs: clamp(this.autoMs + 20, _reader.AUTO_MIN, _reader.AUTO_MAX)
                                });
                            },
                            autoDown () {
                                if (this.guard()) this.persist({
                                    autoMs: clamp(this.autoMs - 20, _reader.AUTO_MIN, _reader.AUTO_MAX)
                                });
                            },
                            toggleKeep () {
                                if (this.guard()) this.persist({
                                    keepOn: !this.keepOn
                                });
                            },
                            cyclePress () {
                                if (!this.guard()) return;
                                const at = PRESS.indexOf(this.longpress);
                                this.persist({
                                    longpress: PRESS[(at + 1) % PRESS.length]
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
                                    value: "设置"
                                }
                            }, []),
                            aiot.__ce__("scroll", {
                                __vm__: _vm_,
                                __opts__: {
                                    id: "set-scroll",
                                    classList: [
                                        "scroll"
                                    ],
                                    scrollY: function() {
                                        return true;
                                    },
                                    bounces: "true"
                                }
                            }, [
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "sec"
                                        ]
                                    }
                                }, [
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "st"
                                            ],
                                            value: "字体大小"
                                        }
                                    }, []),
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "row"
                                            ]
                                        }
                                    }, [
                                        aiot.__ce__("div", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "step"
                                                ],
                                                events: {
                                                    click: function(evt) {
                                                        return _vm_.sizeDown(evt);
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
                                                        "stp"
                                                    ],
                                                    value: "−"
                                                }
                                            }, [])
                                        ]),
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "val"
                                                ],
                                                value: function() {
                                                    return _vm_.size + " px";
                                                }
                                            }
                                        }, []),
                                        aiot.__ce__("div", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "step"
                                                ],
                                                events: {
                                                    click: function(evt) {
                                                        return _vm_.sizeUp(evt);
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
                                                        "stp"
                                                    ],
                                                    value: "＋"
                                                }
                                            }, [])
                                        ])
                                    ]),
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "row2"
                                            ]
                                        }
                                    }, [
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "lb"
                                                ],
                                                value: "小"
                                            }
                                        }, []),
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "lb"
                                                ],
                                                value: "大"
                                            }
                                        }, [])
                                    ])
                                ]),
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "sec"
                                        ]
                                    }
                                }, [
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "st"
                                            ],
                                            value: "文本播放速度"
                                        }
                                    }, []),
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "row"
                                            ]
                                        }
                                    }, [
                                        aiot.__ce__("div", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "step"
                                                ],
                                                events: {
                                                    click: function(evt) {
                                                        return _vm_.speedDown(evt);
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
                                                        "stp"
                                                    ],
                                                    value: "−"
                                                }
                                            }, [])
                                        ]),
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "val"
                                                ],
                                                value: function() {
                                                    return _vm_.speedText;
                                                }
                                            }
                                        }, []),
                                        aiot.__ce__("div", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "step"
                                                ],
                                                events: {
                                                    click: function(evt) {
                                                        return _vm_.speedUp(evt);
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
                                                        "stp"
                                                    ],
                                                    value: "＋"
                                                }
                                            }, [])
                                        ])
                                    ]),
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "row2"
                                            ]
                                        }
                                    }, [
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "lb"
                                                ],
                                                value: "快"
                                            }
                                        }, []),
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "lb"
                                                ],
                                                value: "慢"
                                            }
                                        }, [])
                                    ])
                                ]),
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "sec"
                                        ]
                                    }
                                }, [
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "st"
                                            ],
                                            value: "自动播放"
                                        }
                                    }, []),
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "row"
                                            ]
                                        }
                                    }, [
                                        aiot.__ce__("div", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "step"
                                                ],
                                                events: {
                                                    click: function(evt) {
                                                        return _vm_.autoDown(evt);
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
                                                        "stp"
                                                    ],
                                                    value: "−"
                                                }
                                            }, [])
                                        ]),
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "val"
                                                ],
                                                value: function() {
                                                    return _vm_.autoText;
                                                }
                                            }
                                        }, []),
                                        aiot.__ce__("div", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "step"
                                                ],
                                                events: {
                                                    click: function(evt) {
                                                        return _vm_.autoUp(evt);
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
                                                        "stp"
                                                    ],
                                                    value: "＋"
                                                }
                                            }, [])
                                        ])
                                    ]),
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "row2"
                                            ]
                                        }
                                    }, [
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "lb"
                                                ],
                                                value: "快"
                                            }
                                        }, []),
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "lb"
                                                ],
                                                value: "慢"
                                            }
                                        }, [])
                                    ])
                                ]),
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "sec"
                                        ]
                                    }
                                }, [
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "swrow"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.toggleKeep(evt);
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
                                                    "sl"
                                                ],
                                                value: "屏幕常亮"
                                            }
                                        }, []),
                                        aiot.__ce__("div", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: function() {
                                                    const $classValue$ = "sw " + (_vm_.keepOn ? "sw-on" : "");
                                                    if ('string' == typeof $classValue$) return $classValue$.split(' ').map((item)=>item.trim()).filter(Boolean);
                                                    return $classValue$;
                                                }
                                            }
                                        }, [
                                            aiot.__ce__("text", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "swt"
                                                    ],
                                                    value: function() {
                                                        return _vm_.keepText;
                                                    }
                                                }
                                            }, [])
                                        ])
                                    ]),
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "swrow"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.cyclePress(evt);
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
                                                    "sl"
                                                ],
                                                value: "长按画面"
                                            }
                                        }, []),
                                        aiot.__ce__("div", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "sw",
                                                    "sw-wide"
                                                ]
                                            }
                                        }, [
                                            aiot.__ce__("text", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "swt"
                                                    ],
                                                    value: function() {
                                                        return _vm_.pressText;
                                                    }
                                                }
                                            }, [])
                                        ])
                                    ])
                                ]),
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "sec"
                                        ]
                                    }
                                }, [
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "st"
                                            ],
                                            value: "预览"
                                        }
                                    }, []),
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "preview"
                                            ]
                                        }
                                    }, [
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "pv"
                                                ],
                                                style: function() {
                                                    return __webpack_require__.g.$translateStyle$(_vm_.previewStyle);
                                                },
                                                value: "世界被捂住了嘴巴。"
                                            }
                                        }, [])
                                    ])
                                ]),
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "gap"
                                        ]
                                    }
                                }, [])
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
                            ])
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
