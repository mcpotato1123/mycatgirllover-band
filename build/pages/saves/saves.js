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
                                top: "44px",
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
                                    "item"
                                ]
                            ],
                            {
                                width: "336px",
                                height: "62px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "card"
                                ]
                            ],
                            {
                                width: "312px",
                                height: "54px",
                                marginLeft: "12px",
                                marginTop: "8px",
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
                                flexDirection: "row",
                                alignItems: "center",
                                paddingLeft: "14px",
                                paddingRight: "14px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "no"
                                ]
                            ],
                            {
                                fontSize: "20px",
                                color: "#999999",
                                width: "30px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "nm"
                                ]
                            ],
                            {
                                fontSize: "23px",
                                color: "#222222",
                                width: "190px",
                                lines: 1,
                                fontWeight: "bold"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "tm"
                                ]
                            ],
                            {
                                fontSize: "16px",
                                color: "#999999",
                                width: "66px",
                                textAlign: "right"
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
                                    "dialog"
                                ]
                            ],
                            {
                                position: "absolute",
                                top: "150px",
                                left: "28px",
                                width: "280px",
                                height: "180px",
                                borderRadius: "16px",
                                backgroundColor: "#ffffff",
                                flexDirection: "column",
                                alignItems: "center",
                                paddingTop: "22px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "dg-t"
                                ]
                            ],
                            {
                                fontSize: "26px",
                                color: "#222222",
                                fontWeight: "bold"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "dg-sub"
                                ]
                            ],
                            {
                                fontSize: "17px",
                                color: "#999999",
                                marginTop: "8px",
                                marginBottom: "22px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "dg-row"
                                ]
                            ],
                            {
                                width: "220px",
                                flexDirection: "row",
                                justifyContent: "space-between"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "dg-btn"
                                ]
                            ],
                            {
                                width: "100px",
                                height: "44px",
                                borderRadius: "22px",
                                backgroundColor: "#f0f0f0",
                                alignItems: "center",
                                justifyContent: "center"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "dg-danger"
                                ]
                            ],
                            {
                                backgroundColor: "#ea6c6c"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "dg-bt"
                                ]
                            ],
                            {
                                fontSize: "22px",
                                color: "#333333"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "dialog"
                                ],
                                [
                                    0,
                                    "dg-danger"
                                ],
                                [
                                    0,
                                    "dg-bt"
                                ]
                            ],
                            {
                                color: "#ffffff"
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
                        var _reader = __webpack_require__("./src/common/reader.js");
                        function _interopRequireDefault(e) {
                            return e && e.__esModule ? e : {
                                default: e
                            };
                        }
                        function stamp(ts) {
                            if (!ts) return '';
                            const d = new Date(ts);
                            const hh = d.getHours();
                            const mi = d.getMinutes();
                            return d.getMonth() + 1 + '/' + d.getDate() + ' ' + (hh < 10 ? '0' : '') + hh + ':' + (mi < 10 ? '0' : '') + mi;
                        }
                        var _default = exports.default = {
                            protected: {
                                mode: 'load',
                                rows: [],
                                asking: false,
                                askSlot: 0
                            },
                            onInit () {
                                this.lock = 0;
                                this.refresh();
                            },
                            onShow () {
                                this.refresh();
                            },
                            refresh () {
                                (0, _reader.loadSaves)((list)=>{
                                    const rows = [];
                                    for(let i = 0; i < _reader.MAX_SLOTS; i++){
                                        const d = list[i];
                                        rows.push({
                                            no: String(i + 1),
                                            name: d ? d.chapterTitle || d.tail || '存档' : '空',
                                            time: d ? stamp(d.at) : '',
                                            slot: i,
                                            used: !!d
                                        });
                                    }
                                    this.rows = rows;
                                });
                            },
                            pick (i) {
                                if (Date.now() - this.lock < 400) return;
                                this.lock = Date.now();
                                const row = this.rows[i];
                                if (!row) return;
                                if (!row.used) return void _system2.default.showToast({
                                    message: '这个存档位还是空的'
                                });
                                _system.default.replace({
                                    uri: 'pages/game',
                                    params: {
                                        load: String(row.slot)
                                    }
                                });
                            },
                            askDelete (i) {
                                const row = this.rows[i];
                                if (!row || !row.used) return;
                                this.askSlot = row.slot;
                                this.asking = true;
                            },
                            cancelDelete () {
                                this.asking = false;
                            },
                            doDelete () {
                                (0, _reader.loadSaves)((list)=>{
                                    const next = list.slice();
                                    next[this.askSlot] = null;
                                    (0, _reader.saveSaves)(next, ()=>{
                                        this.asking = false;
                                        this.refresh();
                                        _system2.default.showToast({
                                            message: '已删除'
                                        });
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
                                    value: "存档"
                                }
                            }, []),
                            aiot.__ce__("text", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "sub"
                                    ],
                                    value: "点按读取 · 长按删除"
                                }
                            }, []),
                            aiot.__ce__("list", {
                                __vm__: _vm_,
                                __opts__: {
                                    id: "save-list",
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
                                                __tid__: "cid"
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
                                                    "item"
                                                ],
                                                events: {
                                                    click: function(evt) {
                                                        return _vm_.pick($idx, evt);
                                                    },
                                                    longpress: function(evt) {
                                                        return _vm_.askDelete($idx, evt);
                                                    },
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
                                                        "card"
                                                    ]
                                                }
                                            }, [
                                                aiot.__ce__("text", {
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        classList: [
                                                            "no"
                                                        ],
                                                        value: function() {
                                                            return $item.no;
                                                        }
                                                    }
                                                }, []),
                                                aiot.__ce__("text", {
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        classList: [
                                                            "nm"
                                                        ],
                                                        value: function() {
                                                            return $item.name;
                                                        }
                                                    }
                                                }, []),
                                                aiot.__ce__("text", {
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        classList: [
                                                            "tm"
                                                        ],
                                                        value: function() {
                                                            return $item.time;
                                                        }
                                                    }
                                                }, [])
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
                                        return _vm_.asking;
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
                                                    return _vm_.cancelDelete(evt);
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
                                        return _vm_.asking;
                                    }
                                }
                            }, function() {
                                return [
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "dialog"
                                            ]
                                        }
                                    }, [
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "dg-t"
                                                ],
                                                value: function() {
                                                    return "删除存档 " + (_vm_.askSlot + 1) + "？";
                                                }
                                            }
                                        }, []),
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "dg-sub"
                                                ],
                                                value: "删除后无法恢复"
                                            }
                                        }, []),
                                        aiot.__ce__("div", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "dg-row"
                                                ]
                                            }
                                        }, [
                                            aiot.__ce__("div", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "dg-btn"
                                                    ],
                                                    events: {
                                                        click: function(evt) {
                                                            return _vm_.cancelDelete(evt);
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
                                                            "dg-bt"
                                                        ],
                                                        value: "取消"
                                                    }
                                                }, [])
                                            ]),
                                            aiot.__ce__("div", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "dg-btn",
                                                        "dg-danger"
                                                    ],
                                                    events: {
                                                        click: function(evt) {
                                                            return _vm_.doDelete(evt);
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
                                                            "dg-bt"
                                                        ],
                                                        value: "删除"
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
