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
                var __webpack_modules__ = {};
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
                            height: "66px"
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
                            height: "58px",
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
                            width: "40px"
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
                            fontSize: "24px",
                            color: "#222222",
                            width: "240px",
                            lines: 1,
                            fontWeight: "bold"
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
                    var _system2 = _interopRequireDefault($app_require$1("@app-module/system.file"));
                    function _interopRequireDefault(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        };
                    }
                    var _default = exports.default = {
                        protected: {
                            rows: [],
                            count: 0
                        },
                        onInit () {
                            this.load();
                        },
                        load () {
                            _system2.default.readText({
                                uri: '/common/story/index.txt',
                                success: (d)=>{
                                    let idx = null;
                                    try {
                                        idx = JSON.parse(d.text);
                                    } catch (e) {
                                        idx = null;
                                    }
                                    if (!idx) {
                                        this.count = 0;
                                        return;
                                    }
                                    const rows = [];
                                    for(let i = 0; i < idx.chapters.length; i++){
                                        const c = idx.chapters[i];
                                        rows.push({
                                            no: (i < 9 ? '0' : '') + (i + 1),
                                            name: c.title,
                                            id: c.id
                                        });
                                    }
                                    this.rows = rows;
                                    this.count = rows.length;
                                },
                                fail: ()=>{
                                    this.count = 0;
                                }
                            });
                        },
                        pick (i) {
                            const row = this.rows[i];
                            if (!row) return;
                            _system.default.replace({
                                uri: 'pages/game',
                                params: {
                                    at: row.id
                                }
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
                                value: "章节选择"
                            }
                        }, []),
                        aiot.__ce__("text", {
                            __vm__: _vm_,
                            __opts__: {
                                classList: [
                                    "sub"
                                ],
                                value: function() {
                                    return "共 " + _vm_.count + " 章 · 上下滑动 · 点按进入";
                                }
                            }
                        }, []),
                        aiot.__ce__("list", {
                            __vm__: _vm_,
                            __opts__: {
                                id: "chap-list",
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
                        ])
                    ]);
                };
                $app_exports$['entry'] = function($app_exports$) {
                    $app_script$({}, $app_exports$, $app_require$1);
                    $app_exports$.default.template = $app_template$;
                    $app_exports$.default.style = $app_style$;
                };
            })();
        };
        return createPageHandler();
    })(global, globalThis, window, $app_exports$, $app_evaluate$);
}
