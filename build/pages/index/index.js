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
                                    "banner"
                                ]
                            ],
                            {
                                position: "absolute",
                                top: "0px",
                                left: "0px",
                                width: "336px",
                                height: "189px",
                                objectFit: "cover"
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
                                top: "189px",
                                left: "0px",
                                width: "336px",
                                height: "291px",
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
                                    "mi"
                                ]
                            ],
                            {
                                width: "300px",
                                height: "38px",
                                textAlign: "center",
                                fontSize: "25px",
                                color: "#000000",
                                fontWeight: 800,
                                borderBottomWidth: "1px",
                                borderBottomStyle: "solid",
                                borderBottomColor: "#e0e0e0"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "mi-quit"
                                ]
                            ],
                            {
                                color: "#ea6c6c",
                                borderBottomStyle: "none"
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
                        var _reader = __webpack_require__("./src/common/reader.js");
                        function _interopRequireDefault(e) {
                            return e && e.__esModule ? e : {
                                default: e
                            };
                        }
                        var _default = exports.default = {
                            protected: {
                                hasAuto: false,
                                bgSrc: '/common/img/ui/title_top.jpg'
                            },
                            onInit () {
                                this.refresh();
                            },
                            onShow () {
                                this.refresh();
                            },
                            refresh () {
                                (0, _reader.loadAutoSave)((d)=>{
                                    this.hasAuto = !!(d && d.state);
                                });
                            },
                            ban () {},
                            start () {
                                _system.default.push({
                                    uri: 'pages/game',
                                    params: {
                                        at: 'ch1'
                                    }
                                });
                            },
                            resume () {
                                _system.default.push({
                                    uri: 'pages/game',
                                    params: {
                                        auto: '1'
                                    }
                                });
                            },
                            openChapters () {
                                _system.default.push({
                                    uri: 'pages/chapters'
                                });
                            },
                            openCg () {
                                _system.default.push({
                                    uri: 'pages/cg'
                                });
                            },
                            openSettings () {
                                _system.default.push({
                                    uri: 'pages/settings'
                                });
                            },
                            openAbout () {
                                _system.default.push({
                                    uri: 'pages/about'
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
                                        "banner"
                                    ],
                                    src: function() {
                                        return _vm_.bgSrc;
                                    },
                                    events: {
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
                                        "sheet"
                                    ]
                                }
                            }, [
                                aiot.__ce__("text", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "mi"
                                        ],
                                        events: {
                                            click: function(evt) {
                                                return _vm_.start(evt);
                                            },
                                            swipe: function(evt) {
                                                return _vm_.ban(evt);
                                            }
                                        },
                                        value: "开始阅读"
                                    }
                                }, []),
                                aiot.__ci__({
                                    __vm__: _vm_,
                                    __opts__: {
                                        shown: function() {
                                            return _vm_.hasAuto;
                                        }
                                    }
                                }, function() {
                                    return [
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "mi"
                                                ],
                                                events: {
                                                    click: function(evt) {
                                                        return _vm_.resume(evt);
                                                    },
                                                    swipe: function(evt) {
                                                        return _vm_.ban(evt);
                                                    }
                                                },
                                                value: "继续阅读"
                                            }
                                        }, [])
                                    ];
                                }),
                                aiot.__ce__("text", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "mi"
                                        ],
                                        events: {
                                            click: function(evt) {
                                                return _vm_.openChapters(evt);
                                            },
                                            swipe: function(evt) {
                                                return _vm_.ban(evt);
                                            }
                                        },
                                        value: "章节选择"
                                    }
                                }, []),
                                aiot.__ce__("text", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "mi"
                                        ],
                                        events: {
                                            click: function(evt) {
                                                return _vm_.openCg(evt);
                                            },
                                            swipe: function(evt) {
                                                return _vm_.ban(evt);
                                            }
                                        },
                                        value: "CG 鉴赏"
                                    }
                                }, []),
                                aiot.__ce__("text", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "mi"
                                        ],
                                        events: {
                                            click: function(evt) {
                                                return _vm_.openSettings(evt);
                                            },
                                            swipe: function(evt) {
                                                return _vm_.ban(evt);
                                            }
                                        },
                                        value: "设置"
                                    }
                                }, []),
                                aiot.__ce__("text", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "mi"
                                        ],
                                        events: {
                                            click: function(evt) {
                                                return _vm_.openAbout(evt);
                                            },
                                            swipe: function(evt) {
                                                return _vm_.ban(evt);
                                            }
                                        },
                                        value: "关于"
                                    }
                                }, []),
                                aiot.__ce__("text", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "mi",
                                            "mi-quit"
                                        ],
                                        events: {
                                            click: function(evt) {
                                                return _vm_.exitApp(evt);
                                            },
                                            swipe: function(evt) {
                                                return _vm_.ban(evt);
                                            }
                                        },
                                        value: "退出应用"
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
