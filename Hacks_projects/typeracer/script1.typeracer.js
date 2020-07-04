var gvjs_aa = " and ",
    gvjs_ba = "#000000",
    gvjs_ca = "#808080",
    gvjs_da = "#fff",
    gvjs_ea = "#ffffff",
    gvjs_fa = "&lt;",
    gvjs_ga = "&quot;",
    gvjs_ha = ", ",
    gvjs_ia = "...",
    gvjs_ja = "0000000000000000",
    gvjs_ka = "<br>",
    gvjs_la = "April",
    gvjs_ma = "August",
    gvjs_na = "BUTTON",
    gvjs_oa = "Can't combine significant digits and minimum fraction digits",
    gvjs_pa = "DAY",
    gvjs_a = "DIV",
    gvjs_qa = "December",
    gvjs_ra = "Edge",
    gvjs_sa = "February",
    gvjs_ta = "Friday",
    gvjs_ua = "HH:mm",
    gvjs_va = "HH:mm:ss",
    gvjs_wa = "IFRAME",
    gvjs_xa = "INPUT",
    gvjs_ya = "Inconsistent use of percent/permill characters",
    gvjs_za = "January",
    gvjs_Aa = "MILLISECOND",
    gvjs_Ba = "MMM d",
    gvjs_Ca = "MONTH",
    gvjs_Da = "March",
    gvjs_Ea = "May",
    gvjs_Fa = "Monday",
    gvjs_Ga = "November",
    gvjs_Ha = "OBJECT",
    gvjs_Ia = "October",
    gvjs_Ja = "QUARTER",
    gvjs_Ka = "SCRIPT",
    gvjs_La = "SELECT",
    gvjs_Ma = "SOURCE",
    gvjs_Na = "Saturday",
    gvjs_Oa = "September",
    gvjs_Pa = "Sunday",
    gvjs_Qa = "TABLE",
    gvjs_Ra = "TBODY",
    gvjs_Sa = "TD",
    gvjs_Ta = "TEXTAREA",
    gvjs_Ua = "TR",
    gvjs_Va = "Thursday",
    gvjs_Wa = "Too many percent/permill",
    gvjs_Xa = "Tuesday",
    gvjs_Ya = "Uneven number of arguments",
    gvjs_Za = "Wednesday",
    gvjs__a = "YEAR",
    gvjs_0a = "_bar_format_old_value",
    gvjs_1a = "_default_",
    gvjs_2a = "about:invalid#zClosurez",
    gvjs_3a = "array",
    gvjs_4a = "background-color:",
    gvjs_5a = "backgroundColor",
    gvjs_6a = "black",
    gvjs_7a = "bold",
    gvjs_8a = "boolean",
    gvjs_9a = "className",
    gvjs_b = "color",
    gvjs_$a = "dash",
    gvjs_ab = "date",
    gvjs_bb = "datetime",
    gvjs_cb = "div",
    gvjs_db = "false",
    gvjs_eb = "fill",
    gvjs_fb = "fillOpacity",
    gvjs_gb = "fontName",
    gvjs_hb = "fontSize",
    gvjs_ib = "format",
    gvjs_jb = "full",
    gvjs_c = "function",
    gvjs_kb = "google.visualization.NumberFormat",
    gvjs_lb = "gradient",
    gvjs_mb = "height",
    gvjs_nb = "interval",
    gvjs_ob = "italic",
    gvjs_pb = "medium",
    gvjs_qb = "nonNegative",
    gvjs_d = "none",
    gvjs_rb = "null",
    gvjs_e = "number",
    gvjs_sb = "numberOrString",
    gvjs_tb = "object",
    gvjs_ub = "opacity",
    gvjs_vb = "pattern",
    gvjs_wb = "prefix",
    gvjs_xb = "primarydiagonalstripes",
    gvjs_yb = "ratio",
    gvjs_zb = "role",
    gvjs_Ab = "sans-serif",
    gvjs_Bb = "secondarydiagonalstripes",
    gvjs_Cb = "short",
    gvjs_Db = "solid",
    gvjs_f = "string",
    gvjs_Eb = "stroke",
    gvjs_Fb = "strokeOpacity",
    gvjs_Gb = "strokeWidth",
    gvjs_Hb = "style",
    gvjs_Ib =
    "suffix",
    gvjs_Jb = "tabindex",
    gvjs_Kb = "text/javascript",
    gvjs_Lb = "timeofday",
    gvjs_Mb = "transparent",
    gvjs_Nb = "true",
    gvjs_Ob = "type",
    gvjs_Pb = "underline",
    gvjs_Qb = "white",
    gvjs_Rb = "width",
    gvjs_Sb = "{1} 'at' {0}",
    gvjs_Tb = "{1}, {0}",
    gvjs_, gvjs_Ub = typeof Object.defineProperties == gvjs_c ? Object.defineProperty : function(a, b, c) {
        a != Array.prototype && a != Object.prototype && (a[b] = c.value)
    },
    gvjs_Vb = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this;

function gvjs_Wb(a, b) {
    if (b) {
        var c = gvjs_Vb;
        a = a.split(".");
        for (var d = 0; d < a.length - 1; d++) {
            var e = a[d];
            e in c || (c[e] = {});
            c = c[e]
        }
        a = a[a.length - 1];
        d = c[a];
        b = b(d);
        b != d && null != b && gvjs_Ub(c, a, {
            configurable: !0,
            writable: !0,
            value: b
        })
    }
}
gvjs_Wb("Array.prototype.fill", function(a) {
    return a ? a : function(a, c, d) {
        var b = this.length || 0;
        0 > c && (c = Math.max(0, b + c));
        if (null == d || d > b) d = b;
        d = Number(d);
        0 > d && (d = Math.max(0, b + d));
        for (c = Number(c || 0); c < d; c++) this[c] = a;
        return this
    }
});

function gvjs_Xb() {
    gvjs_Xb = function() {};
    gvjs_Vb.Symbol || (gvjs_Vb.Symbol = gvjs_aaa)
}
var gvjs_baa = 0;

function gvjs_aaa(a) {
    return "jscomp_symbol_" + (a || "") + gvjs_baa++
}

function gvjs_Yb() {
    gvjs_Xb();
    var a = gvjs_Vb.Symbol.iterator;
    a || (a = gvjs_Vb.Symbol.iterator = gvjs_Vb.Symbol("iterator"));
    typeof Array.prototype[a] != gvjs_c && gvjs_Ub(Array.prototype, a, {
        configurable: !0,
        writable: !0,
        value: function() {
            return gvjs_Zb(this)
        }
    });
    gvjs_Yb = function() {}
}

function gvjs_Zb(a) {
    var b = 0;
    return gvjs_caa(function() {
        return b < a.length ? {
            done: !1,
            value: a[b++]
        } : {
            done: !0
        }
    })
}

function gvjs_caa(a) {
    gvjs_Yb();
    a = {
        next: a
    };
    a[gvjs_Vb.Symbol.iterator] = function() {
        return this
    };
    return a
}

function gvjs__b(a) {
    gvjs_Yb();
    var b = a[Symbol.iterator];
    return b ? b.call(a) : gvjs_Zb(a)
}
gvjs_Wb("Promise", function(a) {
    function b(a) {
        this.K = 0;
        this.vm = void 0;
        this.BJ = [];
        var b = this.aW();
        try {
            a(b.resolve, b.reject)
        } catch (k) {
            b.reject(k)
        }
    }

    function c() {
        this.Cu = null
    }

    function d(a) {
        return a instanceof b ? a : new b(function(b) {
            b(a)
        })
    }
    if (a) return a;
    c.prototype.W5 = function(a) {
        null == this.Cu && (this.Cu = [], this.Hja());
        this.Cu.push(a)
    };
    c.prototype.Hja = function() {
        var a = this;
        this.X5(function() {
            a.ina()
        })
    };
    var e = gvjs_Vb.setTimeout;
    c.prototype.X5 = function(a) {
        e(a, 0)
    };
    c.prototype.ina = function() {
        for (; this.Cu && this.Cu.length;) {
            var a =
                this.Cu;
            this.Cu = [];
            for (var b = 0; b < a.length; ++b) {
                var c = a[b];
                delete a[b];
                try {
                    c()
                } catch (l) {
                    this.Ija(l)
                }
            }
        }
        this.Cu = null
    };
    c.prototype.Ija = function(a) {
        this.X5(function() {
            throw a;
        })
    };
    b.prototype.aW = function() {
        function a(a) {
            return function(d) {
                c || (c = !0, a.call(b, d))
            }
        }
        var b = this,
            c = !1;
        return {
            resolve: a(this.hva),
            reject: a(this.U0)
        }
    };
    b.prototype.hva = function(a) {
        if (a === this) this.U0(new TypeError("A Promise cannot resolve to itself"));
        else if (a instanceof b) this.pwa(a);
        else {
            a: switch (typeof a) {
                case gvjs_tb:
                    var c = null !=
                        a;
                    break a;
                case gvjs_c:
                    c = !0;
                    break a;
                default:
                    c = !1
            }
            c ? this.gva(a) : this.f9(a)
        }
    };
    b.prototype.gva = function(a) {
        var b = void 0;
        try {
            b = a.then
        } catch (k) {
            this.U0(k);
            return
        }
        typeof b == gvjs_c ? this.qwa(b, a) : this.f9(a)
    };
    b.prototype.U0 = function(a) {
        this.Kea(2, a)
    };
    b.prototype.f9 = function(a) {
        this.Kea(1, a)
    };
    b.prototype.Kea = function(a, b) {
        if (0 != this.K) throw Error("Cannot settle(" + a + gvjs_ha + b | "): Promise already settled in state" + this.K);
        this.K = a;
        this.vm = b;
        this.kna()
    };
    b.prototype.kna = function() {
        if (null != this.BJ) {
            for (var a = this.BJ,
                    b = 0; b < a.length; ++b) a[b].call(), a[b] = null;
            this.BJ = null
        }
    };
    var f = new c;
    b.prototype.pwa = function(a) {
        var b = this.aW();
        a.oM(b.resolve, b.reject)
    };
    b.prototype.qwa = function(a, b) {
        var c = this.aW();
        try {
            a.call(b, c.resolve, c.reject)
        } catch (l) {
            c.reject(l)
        }
    };
    b.prototype.then = function(a, c) {
        function d(a, b) {
            return typeof a == gvjs_c ? function(b) {
                try {
                    e(a(b))
                } catch (t) {
                    f(t)
                }
            } : b
        }
        var e, f, g = new b(function(a, b) {
            e = a;
            f = b
        });
        this.oM(d(a, e), d(c, f));
        return g
    };
    b.prototype["catch"] = function(a) {
        return this.then(void 0, a)
    };
    b.prototype.oM =
        function(a, b) {
            function c() {
                switch (d.K) {
                    case 1:
                        a(d.vm);
                        break;
                    case 2:
                        b(d.vm);
                        break;
                    default:
                        throw Error("Unexpected state: " + d.K);
                }
            }
            var d = this;
            null == this.BJ ? f.W5(c) : this.BJ.push(function() {
                f.W5(c)
            })
        };
    b.resolve = d;
    b.reject = function(a) {
        return new b(function(b, c) {
            c(a)
        })
    };
    b.race = function(a) {
        return new b(function(b, c) {
            for (var e = gvjs__b(a), f = e.next(); !f.done; f = e.next()) d(f.value).oM(b, c)
        })
    };
    b.all = function(a) {
        var c = gvjs__b(a),
            e = c.next();
        return e.done ? d([]) : new b(function(a, b) {
            function f(b) {
                return function(c) {
                    g[b] =
                        c;
                    h--;
                    0 == h && a(g)
                }
            }
            var g = [],
                h = 0;
            do g.push(void 0), h++, d(e.value).oM(f(g.length - 1), b), e = c.next(); while (!e.done)
        })
    };
    return b
});

function gvjs_0b(a, b) {
    gvjs_Yb();
    a instanceof String && (a += "");
    var c = 0,
        d = {
            next: function() {
                if (c < a.length) {
                    var e = c++;
                    return {
                        value: b(e, a[e]),
                        done: !1
                    }
                }
                d.next = function() {
                    return {
                        done: !0,
                        value: void 0
                    }
                };
                return d.next()
            }
        };
    d[Symbol.iterator] = function() {
        return d
    };
    return d
}
gvjs_Wb("Array.prototype.entries", function(a) {
    return a ? a : function() {
        return gvjs_0b(this, function(a, c) {
            return [a, c]
        })
    }
});
gvjs_Wb("Array.prototype.values", function(a) {
    return a ? a : function() {
        return gvjs_0b(this, function(a, c) {
            return c
        })
    }
});
var gvjs_1b = gvjs_1b || {},
    gvjs_g = this;

function gvjs_h(a) {
    return void 0 !== a
}

function gvjs_i(a) {
    return typeof a == gvjs_f
}

function gvjs_2b(a) {
    return typeof a == gvjs_8a
}

function gvjs_j(a) {
    return typeof a == gvjs_e
}

function gvjs_k(a, b, c) {
    a = a.split(".");
    c = c || gvjs_g;
    a[0] in c || !c.execScript || c.execScript("var " + a[0]);
    for (var d; a.length && (d = a.shift());) !a.length && gvjs_h(b) ? c[d] = b : c = c[d] && c[d] !== Object.prototype[d] ? c[d] : c[d] = {}
}

function gvjs_3b(a, b) {
    a = a.split(".");
    b = b || gvjs_g;
    for (var c; c = a.shift();)
        if (null != b[c]) b = b[c];
        else return null;
    return b
}

function gvjs_4b() {}

function gvjs_5b(a) {
    a.hZ = void 0;
    a.zc = function() {
        return a.hZ ? a.hZ : a.hZ = new a
    }
}

function gvjs_6b(a) {
    var b = typeof a;
    if (b == gvjs_tb)
        if (a) {
            if (a instanceof Array) return gvjs_3a;
            if (a instanceof Object) return b;
            var c = Object.prototype.toString.call(a);
            if ("[object Window]" == c) return gvjs_tb;
            if ("[object Array]" == c || typeof a.length == gvjs_e && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return gvjs_3a;
            if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return gvjs_c
        } else return gvjs_rb;
    else if (b == gvjs_c && "undefined" == typeof a.call) return gvjs_tb;
    return b
}

function gvjs_7b(a) {
    return null === a
}

function gvjs_8b(a) {
    return null != a
}

function gvjs_l(a) {
    return gvjs_6b(a) == gvjs_3a
}

function gvjs_9b(a) {
    var b = gvjs_6b(a);
    return b == gvjs_3a || b == gvjs_tb && typeof a.length == gvjs_e
}

function gvjs_$b(a) {
    return gvjs_m(a) && typeof a.getFullYear == gvjs_c
}

function gvjs_n(a) {
    return gvjs_6b(a) == gvjs_c
}

function gvjs_m(a) {
    var b = typeof a;
    return b == gvjs_tb && null != a || b == gvjs_c
}

function gvjs_ac(a) {
    return a[gvjs_bc] || (a[gvjs_bc] = ++gvjs_daa)
}
var gvjs_bc = "closure_uid_" + (1E9 * Math.random() >>> 0),
    gvjs_daa = 0;

function gvjs_eaa(a, b, c) {
    return a.call.apply(a.bind, arguments)
}

function gvjs_faa(a, b, c) {
    if (!a) throw Error();
    if (2 < arguments.length) {
        var d = Array.prototype.slice.call(arguments, 2);
        return function() {
            var c = Array.prototype.slice.call(arguments);
            Array.prototype.unshift.apply(c, d);
            return a.apply(b, c)
        }
    }
    return function() {
        return a.apply(b, arguments)
    }
}

function gvjs_o(a, b, c) {
    gvjs_o = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? gvjs_eaa : gvjs_faa;
    return gvjs_o.apply(null, arguments)
}

function gvjs_cc(a, b) {
    var c = Array.prototype.slice.call(arguments, 1);
    return function() {
        var b = c.slice();
        b.push.apply(b, arguments);
        return a.apply(this, b)
    }
}
var gvjs_dc = Date.now || function() {
    return +new Date
};

function gvjs_ec(a) {
    if (gvjs_g.execScript) gvjs_g.execScript(a, "JavaScript");
    else if (gvjs_g.eval) {
        if (null == gvjs_fc)
            if (gvjs_g.eval("var _evalTest_ = 1;"), "undefined" != typeof gvjs_g._evalTest_) {
                try {
                    delete gvjs_g._evalTest_
                } catch (d) {}
                gvjs_fc = !0
            } else gvjs_fc = !1;
        if (gvjs_fc) gvjs_g.eval(a);
        else {
            var b = gvjs_g.document,
                c = b.createElement(gvjs_Ka);
            c.type = gvjs_Kb;
            c.defer = !1;
            c.appendChild(b.createTextNode(a));
            b.body.appendChild(c);
            b.body.removeChild(c)
        }
    } else throw Error("goog.globalEval not available");
}
var gvjs_fc = null;

function gvjs_p(a, b) {
    function c() {}
    c.prototype = b.prototype;
    a.o = b.prototype;
    a.prototype = new c;
    a.prototype.constructor = a;
    a.base = function(a, c, f) {
        for (var d = Array(arguments.length - 2), e = 2; e < arguments.length; e++) d[e - 2] = arguments[e];
        return b.prototype[c].apply(a, d)
    }
};
var google = google || window.google || {};

function gvjs_gc(a) {
    this.m = a || {}
}
gvjs_gc.prototype.format = function(a, b) {
    if (a.X(b) == gvjs_e)
        for (var c = this.m.base || 0, d = 0; d < a.da(); d++) {
            var e = a.getValue(d, b);
            a.setProperty(d, b, gvjs_9a, e < c ? "google-visualization-formatters-arrow-dr" : e > c ? "google-visualization-formatters-arrow-ug" : "google-visualization-formatters-arrow-empty")
        }
};

function gvjs_hc(a) {
    this.m = a || {}
}
var gvjs_gaa = {
    red: "r",
    blue: "b",
    green: "g"
};

function gvjs_ic(a, b, c) {
    0 < b && c.push('<span class="google-charts-bar-' + (a || "w") + '" style="width:' + b + 'px;"></span>')
}
gvjs_hc.prototype.format = function(a, b) {
    if (a.X(b) == gvjs_e) {
        var c = this.m,
            d = c.min,
            e = c.max,
            f = null;
        if (null == d || null == e) f = a.wn(b), null == e && (e = f.max), null == d && (d = Math.min(0, f.min));
        d >= e && (f = f || a.wn(b), e = f.max, d = f.min);
        d == e && (0 == d ? e = 1 : 0 < d ? d = 0 : e = 0);
        f = e - d;
        var g = c.base || 0;
        g = Math.max(d, Math.min(e, g));
        var h = c.width || 100,
            k = c.showValue;
        null == k && (k = !0);
        for (var l = Math.round((g - d) / f * h), m = h - l, n = 0; n < a.da(); n++) {
            var p = a.getValue(n, b),
                q = [];
            p = Math.max(d, Math.min(e, p));
            var r = Math.ceil((p - d) / f * h);
            q.push('<span class="google-visualization-formatters-bars">');
            gvjs_ic("s", 1, q);
            var t = gvjs_jc(c.colorPositive, "b"),
                u = gvjs_jc(c.colorNegative, "r"),
                w = c.drawZeroLine ? 1 : 0;
            0 < l ? p < g ? (gvjs_ic("w", r, q), gvjs_ic(u, l - r, q), 0 < w && gvjs_ic("z", w, q), gvjs_ic("w", m, q)) : (gvjs_ic("w", l, q), 0 < w && gvjs_ic("z", w, q), gvjs_ic(t, r - l, q), gvjs_ic("w", h - r, q)) : (gvjs_ic(t, r, q), gvjs_ic("w", h - r, q));
            gvjs_ic("s", 1, q);
            p = a.getProperty(n, b, gvjs_0a);
            null == p && (p = a.Oa(n, b), a.setProperty(n, b, gvjs_0a, p));
            k && (q.push("\u00a0"), q.push(p));
            q.push("</span>\u00a0");
            a.gA(n, b, q.join(""))
        }
    }
};

function gvjs_jc(a, b) {
    a = (a || "").toLowerCase();
    return gvjs_gaa[a] || b
};

function gvjs_kc(a) {
    if (Error.captureStackTrace) Error.captureStackTrace(this, gvjs_kc);
    else {
        var b = Error().stack;
        b && (this.stack = b)
    }
    a && (this.message = String(a))
}
gvjs_p(gvjs_kc, Error);
gvjs_kc.prototype.name = "CustomError";
var gvjs_lc;

function gvjs_mc(a, b) {
    return 0 == a.lastIndexOf(b, 0)
}

function gvjs_nc(a, b) {
    var c = a.length - b.length;
    return 0 <= c && a.indexOf(b, c) == c
}

function gvjs_oc(a) {
    return /^[\s\xa0]*$/.test(a)
}

function gvjs_pc(a) {
    return !/[^0-9]/.test(a)
}

function gvjs_qc(a) {
    return a.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "")
}
var gvjs_rc = String.prototype.trim ? function(a) {
    return a.trim()
} : function(a) {
    return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
};

function gvjs_sc(a, b) {
    if (b) a = a.replace(gvjs_tc, "&amp;").replace(gvjs_uc, gvjs_fa).replace(gvjs_vc, "&gt;").replace(gvjs_wc, gvjs_ga).replace(gvjs_xc, "&#39;").replace(gvjs_yc, "&#0;");
    else {
        if (!gvjs_haa.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(gvjs_tc, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(gvjs_uc, gvjs_fa)); - 1 != a.indexOf(">") && (a = a.replace(gvjs_vc, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(gvjs_wc, gvjs_ga)); - 1 != a.indexOf("'") && (a = a.replace(gvjs_xc, "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(gvjs_yc,
            "&#0;"))
    }
    return a
}
var gvjs_tc = /&/g,
    gvjs_uc = /</g,
    gvjs_vc = />/g,
    gvjs_wc = /"/g,
    gvjs_xc = /'/g,
    gvjs_yc = /\x00/g,
    gvjs_haa = /[\x00&<>"']/;

function gvjs_zc(a) {
    return gvjs_Ac(a, "&") ? "document" in gvjs_g ? gvjs_iaa(a) : gvjs_jaa(a) : a
}

function gvjs_iaa(a) {
    var b = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"'
    };
    var c = gvjs_g.document.createElement(gvjs_cb);
    return a.replace(gvjs_kaa, function(a, e) {
        var d = b[a];
        if (d) return d;
        "#" == e.charAt(0) && (e = Number("0" + e.substr(1)), isNaN(e) || (d = String.fromCharCode(e)));
        d || (c.innerHTML = a + " ", d = c.firstChild.nodeValue.slice(0, -1));
        return b[a] = d
    })
}

function gvjs_jaa(a) {
    return a.replace(/&([^;]+);/g, function(a, c) {
        switch (c) {
            case "amp":
                return "&";
            case "lt":
                return "<";
            case "gt":
                return ">";
            case "quot":
                return '"';
            default:
                return "#" != c.charAt(0) || (c = Number("0" + c.substr(1)), isNaN(c)) ? a : String.fromCharCode(c)
        }
    })
}
var gvjs_kaa = /&([^;\s<&]+);?/g;

function gvjs_Bc(a, b) {
    a.length > b && (a = a.substring(0, b - 3) + gvjs_ia);
    return a
}

function gvjs_Ac(a, b) {
    return -1 != a.indexOf(b)
}
var gvjs_Cc = String.prototype.repeat ? function(a, b) {
    return a.repeat(b)
} : function(a, b) {
    return Array(b + 1).join(a)
};

function gvjs_Dc(a, b) {
    a = gvjs_h(void 0) ? a.toFixed(void 0) : String(a);
    var c = a.indexOf("."); - 1 == c && (c = a.length);
    return gvjs_Cc("0", Math.max(0, b - c)) + a
}

function gvjs_Ec(a) {
    return null == a ? "" : String(a)
}

function gvjs_Fc(a) {
    return Array.prototype.join.call(arguments, "")
}

function gvjs_Gc(a, b) {
    var c = 0;
    a = gvjs_rc(String(a)).split(".");
    b = gvjs_rc(String(b)).split(".");
    for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
        var f = a[e] || "",
            g = b[e] || "";
        do {
            f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
            g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
            if (0 == f[0].length && 0 == g[0].length) break;
            c = gvjs_Hc(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == g[1].length ? 0 : parseInt(g[1], 10)) || gvjs_Hc(0 == f[2].length, 0 == g[2].length) || gvjs_Hc(f[2], g[2]);
            f = f[3];
            g = g[3]
        } while (0 == c)
    }
    return c
}

function gvjs_Hc(a, b) {
    return a < b ? -1 : a > b ? 1 : 0
}

function gvjs_Ic(a) {
    for (var b = 0, c = 0; c < a.length; ++c) b = 31 * b + a.charCodeAt(c) >>> 0;
    return b
}
var gvjs_Jc = 2147483648 * Math.random() | 0;

function gvjs_Kc(a) {
    var b = Number(a);
    return 0 == b && gvjs_oc(a) ? NaN : b
}

function gvjs_Lc(a) {
    return String(a).replace(/\-([a-z])/g, function(a, c) {
        return c.toUpperCase()
    })
}

function gvjs_laa(a) {
    var b = gvjs_i(void 0) ? "undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08") : "\\s";
    return a.replace(new RegExp("(^" + (b ? "|[" + b + "]+" : "") + ")([a-z])", "g"), function(a, b, e) {
        return b + e.toUpperCase()
    })
};

function gvjs_Mc(a) {
    return a[a.length - 1]
}
var gvjs_Nc = Array.prototype.indexOf ? function(a, b, c) {
        return Array.prototype.indexOf.call(a, b, c)
    } : function(a, b, c) {
        c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
        if (gvjs_i(a)) return gvjs_i(b) && 1 == b.length ? a.indexOf(b, c) : -1;
        for (; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    },
    gvjs_maa = Array.prototype.lastIndexOf ? function(a, b, c) {
        return Array.prototype.lastIndexOf.call(a, b, null == c ? a.length - 1 : c)
    } : function(a, b, c) {
        c = null == c ? a.length - 1 : c;
        0 > c && (c = Math.max(0, a.length + c));
        if (gvjs_i(a)) return gvjs_i(b) && 1 == b.length ?
            a.lastIndexOf(b, c) : -1;
        for (; 0 <= c; c--)
            if (c in a && a[c] === b) return c;
        return -1
    },
    gvjs_q = Array.prototype.forEach ? function(a, b, c) {
        Array.prototype.forEach.call(a, b, c)
    } : function(a, b, c) {
        for (var d = a.length, e = gvjs_i(a) ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
    };

function gvjs_Oc(a, b, c) {
    for (var d = gvjs_i(a) ? a.split("") : a, e = a.length - 1; 0 <= e; --e) e in d && b.call(c, d[e], e, a)
}
var gvjs_Pc = Array.prototype.filter ? function(a, b, c) {
        return Array.prototype.filter.call(a, b, c)
    } : function(a, b, c) {
        for (var d = a.length, e = [], f = 0, g = gvjs_i(a) ? a.split("") : a, h = 0; h < d; h++)
            if (h in g) {
                var k = g[h];
                b.call(c, k, h, a) && (e[f++] = k)
            }
        return e
    },
    gvjs_r = Array.prototype.map ? function(a, b, c) {
        return Array.prototype.map.call(a, b, c)
    } : function(a, b, c) {
        for (var d = a.length, e = Array(d), f = gvjs_i(a) ? a.split("") : a, g = 0; g < d; g++) g in f && (e[g] = b.call(c, f[g], g, a));
        return e
    },
    gvjs_Qc = Array.prototype.reduce ? function(a, b, c, d) {
        d && (b =
            gvjs_o(b, d));
        return Array.prototype.reduce.call(a, b, c)
    } : function(a, b, c, d) {
        var e = c;
        gvjs_q(a, function(c, g) {
            e = b.call(d, e, c, g, a)
        });
        return e
    },
    gvjs_Rc = Array.prototype.some ? function(a, b, c) {
        return Array.prototype.some.call(a, b, c)
    } : function(a, b, c) {
        for (var d = a.length, e = gvjs_i(a) ? a.split("") : a, f = 0; f < d; f++)
            if (f in e && b.call(c, e[f], f, a)) return !0;
        return !1
    },
    gvjs_Sc = Array.prototype.every ? function(a, b, c) {
        return Array.prototype.every.call(a, b, c)
    } : function(a, b, c) {
        for (var d = a.length, e = gvjs_i(a) ? a.split("") : a, f = 0; f < d; f++)
            if (f in
                e && !b.call(c, e[f], f, a)) return !1;
        return !0
    };

function gvjs_naa(a, b) {
    var c = 0;
    gvjs_q(a, function(a, e, f) {
        b.call(void 0, a, e, f) && ++c
    }, void 0);
    return c
}

function gvjs_Tc(a, b, c) {
    b = gvjs_Uc(a, b, c);
    return 0 > b ? null : gvjs_i(a) ? a.charAt(b) : a[b]
}

function gvjs_Uc(a, b, c) {
    for (var d = a.length, e = gvjs_i(a) ? a.split("") : a, f = 0; f < d; f++)
        if (f in e && b.call(c, e[f], f, a)) return f;
    return -1
}

function gvjs_Vc(a, b) {
    a: {
        for (var c = gvjs_i(a) ? a.split("") : a, d = a.length - 1; 0 <= d; d--)
            if (d in c && b.call(void 0, c[d], d, a)) {
                b = d;
                break a
            }
        b = -1
    }
    return 0 > b ? null : gvjs_i(a) ? a.charAt(b) : a[b]
}

function gvjs_Wc(a, b) {
    return 0 <= gvjs_Nc(a, b)
}

function gvjs_Xc(a) {
    return 0 == a.length
}

function gvjs_Yc(a) {
    if (!gvjs_l(a))
        for (var b = a.length - 1; 0 <= b; b--) delete a[b];
    a.length = 0
}

function gvjs_Zc(a, b) {
    gvjs_Wc(a, b) || a.push(b)
}

function gvjs__c(a, b, c) {
    gvjs_0c(a, c, 0, b)
}

function gvjs_1c(a, b) {
    b = gvjs_Nc(a, b);
    var c;
    (c = 0 <= b) && gvjs_2c(a, b);
    return c
}

function gvjs_2c(a, b) {
    Array.prototype.splice.call(a, b, 1)
}

function gvjs_oaa(a, b) {
    b = gvjs_Uc(a, b, void 0);
    0 <= b && gvjs_2c(a, b)
}

function gvjs_3c(a) {
    return Array.prototype.concat.apply([], arguments)
}

function gvjs_4c(a) {
    var b = a.length;
    if (0 < b) {
        for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
        return c
    }
    return []
}

function gvjs_5c(a, b) {
    for (var c = 1; c < arguments.length; c++) {
        var d = arguments[c];
        if (gvjs_9b(d)) {
            var e = a.length || 0,
                f = d.length || 0;
            a.length = e + f;
            for (var g = 0; g < f; g++) a[e + g] = d[g]
        } else a.push(d)
    }
}

function gvjs_0c(a, b, c, d) {
    return Array.prototype.splice.apply(a, gvjs_6c(arguments, 1))
}

function gvjs_6c(a, b, c) {
    return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
}

function gvjs_7c(a, b, c) {
    function d(a) {
        return gvjs_m(a) ? "o" + gvjs_ac(a) : (typeof a).charAt(0) + a
    }
    b = b || a;
    c = c || d;
    for (var e = {}, f = 0, g = 0; g < a.length;) {
        var h = a[g++],
            k = c(h);
        Object.prototype.hasOwnProperty.call(e, k) || (e[k] = !0, b[f++] = h)
    }
    b.length = f
}

function gvjs_8c(a, b, c) {
    return gvjs_9c(a, c || gvjs_$c, !1, b)
}

function gvjs_paa(a, b, c) {
    return gvjs_9c(a, b, !0, void 0, c)
}

function gvjs_9c(a, b, c, d, e) {
    for (var f = 0, g = a.length, h; f < g;) {
        var k = f + g >> 1;
        var l = c ? b.call(e, a[k], k, a) : b(d, a[k]);
        0 < l ? f = k + 1 : (g = k, h = !l)
    }
    return h ? f : ~f
}

function gvjs_ad(a, b) {
    a.sort(b || gvjs_$c)
}

function gvjs_bd(a, b) {
    for (var c = Array(a.length), d = 0; d < a.length; d++) c[d] = {
        index: d,
        value: a[d]
    };
    var e = b || gvjs_$c;
    gvjs_ad(c, function(a, b) {
        return e(a.value, b.value) || a.index - b.index
    });
    for (d = 0; d < a.length; d++) a[d] = c[d].value
}

function gvjs_qaa(a, b) {
    var c = gvjs_$c;
    gvjs_ad(a, function(a, e) {
        return c(b(a), b(e))
    })
}

function gvjs_cd(a) {
    gvjs_qaa(a, function(a) {
        return a.x
    })
}

function gvjs_dd(a, b) {
    if (!gvjs_9b(a) || !gvjs_9b(b) || a.length != b.length) return !1;
    for (var c = a.length, d = gvjs_raa, e = 0; e < c; e++)
        if (!d(a[e], b[e])) return !1;
    return !0
}

function gvjs_$c(a, b) {
    return a > b ? 1 : a < b ? -1 : 0
}

function gvjs_raa(a, b) {
    return a === b
}

function gvjs_saa(a, b) {
    for (var c = {}, d = 0; d < a.length; d++) {
        var e = a[d],
            f = b.call(void 0, e, d, a);
        gvjs_h(f) && (c[f] || (c[f] = [])).push(e)
    }
    return c
}

function gvjs_ed(a) {
    var b = [];
    if (0 > 1 * (a - 0)) return [];
    for (var c = 0; c < a; c += 1) b.push(c);
    return b
}

function gvjs_fd(a, b) {
    for (var c = [], d = 0; d < b; d++) c[d] = a;
    return c
}

function gvjs_gd(a) {
    for (var b = [], c = 0; c < arguments.length; c++) {
        var d = arguments[c];
        if (gvjs_l(d))
            for (var e = 0; e < d.length; e += 8192) {
                var f = gvjs_6c(d, e, e + 8192);
                f = gvjs_gd.apply(null, f);
                for (var g = 0; g < f.length; g++) b.push(f[g])
            } else b.push(d)
    }
    return b
}

function gvjs_hd(a) {
    if (!arguments.length) return [];
    for (var b = [], c = arguments[0].length, d = 1; d < arguments.length; d++) arguments[d].length < c && (c = arguments[d].length);
    for (d = 0; d < c; d++) {
        for (var e = [], f = 0; f < arguments.length; f++) e.push(arguments[f][d]);
        b.push(e)
    }
    return b
};
var gvjs_id = {
    aliceblue: "#f0f8ff",
    antiquewhite: "#faebd7",
    aqua: "#00ffff",
    aquamarine: "#7fffd4",
    azure: "#f0ffff",
    beige: "#f5f5dc",
    bisque: "#ffe4c4",
    black: gvjs_ba,
    blanchedalmond: "#ffebcd",
    blue: "#0000ff",
    blueviolet: "#8a2be2",
    brown: "#a52a2a",
    burlywood: "#deb887",
    cadetblue: "#5f9ea0",
    chartreuse: "#7fff00",
    chocolate: "#d2691e",
    coral: "#ff7f50",
    cornflowerblue: "#6495ed",
    cornsilk: "#fff8dc",
    crimson: "#dc143c",
    cyan: "#00ffff",
    darkblue: "#00008b",
    darkcyan: "#008b8b",
    darkgoldenrod: "#b8860b",
    darkgray: "#a9a9a9",
    darkgreen: "#006400",
    darkgrey: "#a9a9a9",
    darkkhaki: "#bdb76b",
    darkmagenta: "#8b008b",
    darkolivegreen: "#556b2f",
    darkorange: "#ff8c00",
    darkorchid: "#9932cc",
    darkred: "#8b0000",
    darksalmon: "#e9967a",
    darkseagreen: "#8fbc8f",
    darkslateblue: "#483d8b",
    darkslategray: "#2f4f4f",
    darkslategrey: "#2f4f4f",
    darkturquoise: "#00ced1",
    darkviolet: "#9400d3",
    deeppink: "#ff1493",
    deepskyblue: "#00bfff",
    dimgray: "#696969",
    dimgrey: "#696969",
    dodgerblue: "#1e90ff",
    firebrick: "#b22222",
    floralwhite: "#fffaf0",
    forestgreen: "#228b22",
    fuchsia: "#ff00ff",
    gainsboro: "#dcdcdc",
    ghostwhite: "#f8f8ff",
    gold: "#ffd700",
    goldenrod: "#daa520",
    gray: gvjs_ca,
    green: "#008000",
    greenyellow: "#adff2f",
    grey: gvjs_ca,
    honeydew: "#f0fff0",
    hotpink: "#ff69b4",
    indianred: "#cd5c5c",
    indigo: "#4b0082",
    ivory: "#fffff0",
    khaki: "#f0e68c",
    lavender: "#e6e6fa",
    lavenderblush: "#fff0f5",
    lawngreen: "#7cfc00",
    lemonchiffon: "#fffacd",
    lightblue: "#add8e6",
    lightcoral: "#f08080",
    lightcyan: "#e0ffff",
    lightgoldenrodyellow: "#fafad2",
    lightgray: "#d3d3d3",
    lightgreen: "#90ee90",
    lightgrey: "#d3d3d3",
    lightpink: "#ffb6c1",
    lightsalmon: "#ffa07a",
    lightseagreen: "#20b2aa",
    lightskyblue: "#87cefa",
    lightslategray: "#778899",
    lightslategrey: "#778899",
    lightsteelblue: "#b0c4de",
    lightyellow: "#ffffe0",
    lime: "#00ff00",
    limegreen: "#32cd32",
    linen: "#faf0e6",
    magenta: "#ff00ff",
    maroon: "#800000",
    mediumaquamarine: "#66cdaa",
    mediumblue: "#0000cd",
    mediumorchid: "#ba55d3",
    mediumpurple: "#9370db",
    mediumseagreen: "#3cb371",
    mediumslateblue: "#7b68ee",
    mediumspringgreen: "#00fa9a",
    mediumturquoise: "#48d1cc",
    mediumvioletred: "#c71585",
    midnightblue: "#191970",
    mintcream: "#f5fffa",
    mistyrose: "#ffe4e1",
    moccasin: "#ffe4b5",
    navajowhite: "#ffdead",
    navy: "#000080",
    oldlace: "#fdf5e6",
    olive: "#808000",
    olivedrab: "#6b8e23",
    orange: "#ffa500",
    orangered: "#ff4500",
    orchid: "#da70d6",
    palegoldenrod: "#eee8aa",
    palegreen: "#98fb98",
    paleturquoise: "#afeeee",
    palevioletred: "#db7093",
    papayawhip: "#ffefd5",
    peachpuff: "#ffdab9",
    peru: "#cd853f",
    pink: "#ffc0cb",
    plum: "#dda0dd",
    powderblue: "#b0e0e6",
    purple: "#800080",
    red: "#ff0000",
    rosybrown: "#bc8f8f",
    royalblue: "#4169e1",
    saddlebrown: "#8b4513",
    salmon: "#fa8072",
    sandybrown: "#f4a460",
    seagreen: "#2e8b57",
    seashell: "#fff5ee",
    sienna: "#a0522d",
    silver: "#c0c0c0",
    skyblue: "#87ceeb",
    slateblue: "#6a5acd",
    slategray: "#708090",
    slategrey: "#708090",
    snow: "#fffafa",
    springgreen: "#00ff7f",
    steelblue: "#4682b4",
    tan: "#d2b48c",
    teal: "#008080",
    thistle: "#d8bfd8",
    tomato: "#ff6347",
    turquoise: "#40e0d0",
    violet: "#ee82ee",
    wheat: "#f5deb3",
    white: gvjs_ea,
    whitesmoke: "#f5f5f5",
    yellow: "#ffff00",
    yellowgreen: "#9acd32"
};

function gvjs_jd(a, b, c) {
    return Math.min(Math.max(a, b), c)
}

function gvjs_kd(a, b) {
    a %= b;
    return 0 > a * b ? a + b : a
}

function gvjs_ld(a, b, c) {
    return a + c * (b - a)
}

function gvjs_md(a) {
    return gvjs_kd(a, 360)
}

function gvjs_nd(a) {
    return a * Math.PI / 180
}

function gvjs_od(a) {
    return 180 * a / Math.PI
}

function gvjs_pd(a, b) {
    return b * Math.cos(gvjs_nd(a))
}

function gvjs_qd(a, b) {
    return b * Math.sin(gvjs_nd(a))
}

function gvjs_rd(a) {
    return 0 < a ? 1 : 0 > a ? -1 : a
}

function gvjs_sd(a) {
    return gvjs_Qc(arguments, function(a, c) {
        return a + c
    }, 0)
}

function gvjs_td(a) {
    return gvjs_sd.apply(null, arguments) / arguments.length
}

function gvjs_ud(a) {
    return isFinite(a) && 0 == a % 1
};

function gvjs_vd(a) {
    var b = {};
    a = String(a);
    var c = "#" == a.charAt(0) ? a : "#" + a;
    if (gvjs_wd.test(c)) return b.ec = gvjs_xd(c), b.type = "hex", b;
    c = gvjs_yd(a);
    if (c.length) return b.ec = gvjs_zd(c), b.type = "rgb", b;
    if (gvjs_id && (c = gvjs_id[a.toLowerCase()])) return b.ec = c, b.type = "named", b;
    throw Error(a + " is not a valid color string");
}

function gvjs_Ad(a) {
    return !!(gvjs_wd.test("#" == a.charAt(0) ? a : "#" + a) || gvjs_yd(a).length || gvjs_id && gvjs_id[a.toLowerCase()])
}
var gvjs_taa = /#(.)(.)(.)/;

function gvjs_xd(a) {
    if (!gvjs_wd.test(a)) throw Error("'" + a + "' is not a valid hex color");
    4 == a.length && (a = a.replace(gvjs_taa, "#$1$1$2$2$3$3"));
    return a.toLowerCase()
}

function gvjs_Bd(a) {
    a = gvjs_xd(a);
    return [parseInt(a.substr(1, 2), 16), parseInt(a.substr(3, 2), 16), parseInt(a.substr(5, 2), 16)]
}

function gvjs_Cd(a, b, c) {
    a = Number(a);
    b = Number(b);
    c = Number(c);
    if (a != (a & 255) || b != (b & 255) || c != (c & 255)) throw Error('"(' + a + "," + b + "," + c + '") is not a valid RGB color');
    a = gvjs_Dd(a.toString(16));
    b = gvjs_Dd(b.toString(16));
    c = gvjs_Dd(c.toString(16));
    return "#" + a + b + c
}

function gvjs_zd(a) {
    return gvjs_Cd(a[0], a[1], a[2])
}

function gvjs_Ed(a, b, c) {
    a /= 255;
    b /= 255;
    c /= 255;
    var d = Math.max(a, b, c),
        e = Math.min(a, b, c),
        f = 0,
        g = 0,
        h = .5 * (d + e);
    d != e && (d == a ? f = 60 * (b - c) / (d - e) : d == b ? f = 60 * (c - a) / (d - e) + 120 : d == c && (f = 60 * (a - b) / (d - e) + 240), g = 0 < h && .5 >= h ? (d - e) / (2 * h) : (d - e) / (2 - 2 * h));
    return [Math.round(f + 360) % 360, g, h]
}

function gvjs_Fd(a, b, c) {
    0 > c ? c += 1 : 1 < c && --c;
    return 1 > 6 * c ? a + 6 * (b - a) * c : 1 > 2 * c ? b : 2 > 3 * c ? a + (b - a) * (2 / 3 - c) * 6 : a
}

function gvjs_Gd(a, b, c) {
    a /= 360;
    if (0 == b) c = b = a = 255 * c;
    else {
        var d = .5 > c ? c * (1 + b) : c + b - b * c;
        var e = 2 * c - d;
        c = 255 * gvjs_Fd(e, d, a + 1 / 3);
        b = 255 * gvjs_Fd(e, d, a);
        a = 255 * gvjs_Fd(e, d, a - 1 / 3)
    }
    return [Math.round(c), Math.round(b), Math.round(a)]
}
var gvjs_wd = /^#(?:[0-9a-f]{3}){1,2}$/i,
    gvjs_uaa = /^(?:rgb)?\((0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2})\)$/i;

function gvjs_yd(a) {
    var b = a.match(gvjs_uaa);
    if (b) {
        a = Number(b[1]);
        var c = Number(b[2]);
        b = Number(b[3]);
        if (0 <= a && 255 >= a && 0 <= c && 255 >= c && 0 <= b && 255 >= b) return [a, c, b]
    }
    return []
}

function gvjs_Dd(a) {
    return 1 == a.length ? "0" + a : a
}

function gvjs_Hd(a, b, c) {
    c = gvjs_jd(c, 0, 1);
    return [Math.round(c * a[0] + (1 - c) * b[0]), Math.round(c * a[1] + (1 - c) * b[1]), Math.round(c * a[2] + (1 - c) * b[2])]
}

function gvjs_Id(a, b) {
    return gvjs_Hd([0, 0, 0], a, b)
}

function gvjs_Jd(a, b) {
    return gvjs_Hd([255, 255, 255], a, b)
}

function gvjs_Kd(a, b) {
    for (var c = [], d = 0; d < b.length; d++) c.push({
        color: b[d],
        Rh: Math.abs(gvjs_Ld(b[d]) - gvjs_Ld(a)) + gvjs_vaa(b[d], a)
    });
    c.sort(function(a, b) {
        return b.Rh - a.Rh
    });
    return c[0].color
}

function gvjs_Ld(a) {
    return Math.round((299 * a[0] + 587 * a[1] + 114 * a[2]) / 1E3)
}

function gvjs_vaa(a, b) {
    return Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]) + Math.abs(a[2] - b[2])
};

function gvjs_Md(a, b, c, d) {
    gvjs_$b(a) && (a = a.getTime());
    gvjs_$b(b) && (b = b.getTime());
    gvjs_l(a) && (a = gvjs_Nd(a));
    gvjs_l(b) && (b = gvjs_Nd(b));
    this.rX = a;
    this.z3 = b;
    this.Kk = c;
    this.xx = d
}
gvjs_Md.prototype.contains = function(a) {
    var b = this.rX,
        c = this.z3;
    if (null == a) return null == b && null == c;
    gvjs_$b(a) ? a = a.getTime() : gvjs_l(a) && (a = gvjs_Nd(a));
    return (null == b || a >= b) && (null == c || a < c)
};
gvjs_Md.prototype.me = function() {
    return this.Kk
};
gvjs_Md.prototype.getBackgroundColor = function() {
    return this.xx
};

function gvjs_Od(a, b, c, d, e) {
    gvjs_Md.call(this, a, b, c, "");
    this.L0 = b - a;
    0 >= this.L0 && (this.L0 = 1);
    this.Ina = gvjs_Bd(gvjs_vd(d).ec);
    this.Pxa = gvjs_Bd(gvjs_vd(e).ec)
}
gvjs_p(gvjs_Od, gvjs_Md);
gvjs_Od.prototype.getBackgroundColor = function(a) {
    if (!gvjs_j(a)) return "";
    a = gvjs_Hd(this.Ina, this.Pxa, 1 - (a - this.rX) / this.L0);
    return gvjs_Cd(a[0], a[1], a[2])
};

function gvjs_Pd() {
    this.mR = []
}
gvjs_Pd.prototype.addRange = function(a, b, c, d) {
    this.mR.push(new gvjs_Md(a, b, c, d))
};
gvjs_Pd.prototype.kja = function(a, b, c, d, e) {
    this.mR.push(new gvjs_Od(a, b, c, d, e))
};
gvjs_Pd.prototype.format = function(a, b) {
    var c = a.X(b);
    if (c == gvjs_e || c == gvjs_f || c == gvjs_ab || c == gvjs_bb || c == gvjs_Lb)
        for (c = 0; c < a.da(); c++) {
            for (var d = a.getValue(c, b), e = "", f = 0; f < this.mR.length; f++) {
                var g = this.mR[f];
                if (g.contains(d)) {
                    f = g.me();
                    d = g.getBackgroundColor(d);
                    f && (e += "color:" + f + ";");
                    d && (e += gvjs_4a + d + ";");
                    break
                }
            }
            a.setProperty(c, b, gvjs_Hb, e)
        }
};

function gvjs_Nd(a) {
    return 36E5 * a[0] + 6E4 * a[1] + 1E3 * a[2] + (4 == a.length ? a[3] : 0)
};
var gvjs_waa = {
    DAa: gvjs_Aa,
    eBa: "SECOND",
    EAa: "MINUTE",
    $za: "HOUR",
    Mza: gvjs_pa,
    TBa: "WEEK",
    GAa: gvjs_Ca,
    ZAa: gvjs_Ja,
    XBa: gvjs__a
};

function gvjs_Qd(a) {
    switch (a) {
        case gvjs_Aa:
            return 1;
        case "SECOND":
            return 1E3;
        case "MINUTE":
            return 6E4;
        case "HOUR":
            return 36E5;
        case gvjs_pa:
            return 864E5;
        case "WEEK":
            return 6048E5;
        case gvjs_Ca:
            return 2629746E3;
        case gvjs_Ja:
            return 7889238E3;
        case gvjs__a:
            return 31556952E3
    }
    return 0
};
var gvjs_Rd = {
        ERAS: ["BC", "AD"],
        ERANAMES: ["Before Christ", "Anno Domini"],
        NARROWMONTHS: "JFMAMJJASOND".split(""),
        STANDALONENARROWMONTHS: "JFMAMJJASOND".split(""),
        MONTHS: [gvjs_za, gvjs_sa, gvjs_Da, gvjs_la, gvjs_Ea, "June", "July", gvjs_ma, gvjs_Oa, gvjs_Ia, gvjs_Ga, gvjs_qa],
        STANDALONEMONTHS: [gvjs_za, gvjs_sa, gvjs_Da, gvjs_la, gvjs_Ea, "June", "July", gvjs_ma, gvjs_Oa, gvjs_Ia, gvjs_Ga, gvjs_qa],
        SHORTMONTHS: ["Jan", "Feb", "Mar", "Apr", gvjs_Ea, "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        STANDALONESHORTMONTHS: ["Jan", "Feb", "Mar",
            "Apr", gvjs_Ea, "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ],
        WEEKDAYS: [gvjs_Pa, gvjs_Fa, gvjs_Xa, gvjs_Za, gvjs_Va, gvjs_ta, gvjs_Na],
        STANDALONEWEEKDAYS: [gvjs_Pa, gvjs_Fa, gvjs_Xa, gvjs_Za, gvjs_Va, gvjs_ta, gvjs_Na],
        SHORTWEEKDAYS: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
        STANDALONESHORTWEEKDAYS: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
        NARROWWEEKDAYS: "SMTWTFS".split(""),
        STANDALONENARROWWEEKDAYS: "SMTWTFS".split(""),
        SHORTQUARTERS: ["Q1", "Q2", "Q3", "Q4"],
        QUARTERS: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
        AMPMS: ["AM", "PM"],
        DATEFORMATS: ["EEEE, y MMMM dd", "y MMMM d", "y MMM d", "yyyy-MM-dd"],
        TIMEFORMATS: ["HH:mm:ss v", "HH:mm:ss z", gvjs_va, gvjs_ua],
        DATETIMEFORMATS: [gvjs_Sb, gvjs_Sb, gvjs_Tb, gvjs_Tb],
        AVAILABLEFORMATS: {
            Md: "M/d",
            MMMMd: "MMMM d",
            MMMd: gvjs_Ba
        },
        FIRSTDAYOFWEEK: 0,
        WEEKENDRANGE: [5, 6],
        FIRSTWEEKCUTOFFDAY: 3
    },
    gvjs_Sd = {
        ERAS: ["BC", "AD"],
        ERANAMES: ["Before Christ", "Anno Domini"],
        NARROWMONTHS: "JFMAMJJASOND".split(""),
        STANDALONENARROWMONTHS: "JFMAMJJASOND".split(""),
        MONTHS: [gvjs_za, gvjs_sa, gvjs_Da, gvjs_la, gvjs_Ea,
            "June", "July", gvjs_ma, gvjs_Oa, gvjs_Ia, gvjs_Ga, gvjs_qa
        ],
        STANDALONEMONTHS: [gvjs_za, gvjs_sa, gvjs_Da, gvjs_la, gvjs_Ea, "June", "July", gvjs_ma, gvjs_Oa, gvjs_Ia, gvjs_Ga, gvjs_qa],
        SHORTMONTHS: ["Jan", "Feb", "Mar", "Apr", gvjs_Ea, "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        STANDALONESHORTMONTHS: ["Jan", "Feb", "Mar", "Apr", gvjs_Ea, "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        WEEKDAYS: [gvjs_Pa, gvjs_Fa, gvjs_Xa, gvjs_Za, gvjs_Va, gvjs_ta, gvjs_Na],
        STANDALONEWEEKDAYS: [gvjs_Pa, gvjs_Fa, gvjs_Xa, gvjs_Za, gvjs_Va, gvjs_ta, gvjs_Na],
        SHORTWEEKDAYS: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
        STANDALONESHORTWEEKDAYS: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
        NARROWWEEKDAYS: "SMTWTFS".split(""),
        STANDALONENARROWWEEKDAYS: "SMTWTFS".split(""),
        SHORTQUARTERS: ["Q1", "Q2", "Q3", "Q4"],
        QUARTERS: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
        AMPMS: ["AM", "PM"],
        DATEFORMATS: ["EEEE, MMMM d, y", "MMMM d, y", "MMM d, y", "M/d/yy"],
        TIMEFORMATS: ["h:mm:ss a zzzz", "h:mm:ss a z", "h:mm:ss a", "h:mm a"],
        DATETIMEFORMATS: [gvjs_Sb, gvjs_Sb, gvjs_Tb, gvjs_Tb],
        FIRSTDAYOFWEEK: 6,
        WEEKENDRANGE: [5, 6],
        FIRSTWEEKCUTOFFDAY: 5
    },
    gvjs_Td = gvjs_Sd;
gvjs_Td = gvjs_Sd;

function gvjs_Ud(a, b) {
    switch (b) {
        case 1:
            return 0 != a % 4 || 0 == a % 100 && 0 != a % 400 ? 28 : 29;
        case 5:
        case 8:
        case 10:
        case 3:
            return 30
    }
    return 31
}

function gvjs_Vd(a, b) {
    b = b || new Date(gvjs_dc());
    return a.getFullYear() == b.getFullYear()
}

function gvjs_Wd(a, b, c, d, e, f) {
    gvjs_i(a) ? (this.Lj = "y" == a ? b : 0, this.months = "m" == a ? b : 0, this.days = "d" == a ? b : 0, this.lj = "h" == a ? b : 0, this.qj = "n" == a ? b : 0, this.wj = "s" == a ? b : 0) : (this.Lj = a || 0, this.months = b || 0, this.days = c || 0, this.lj = d || 0, this.qj = e || 0, this.wj = f || 0)
}
gvjs_ = gvjs_Wd.prototype;
gvjs_.xA = function(a) {
    var b = Math.min(this.Lj, this.months, this.days, this.lj, this.qj, this.wj),
        c = Math.max(this.Lj, this.months, this.days, this.lj, this.qj, this.wj);
    if (0 > b && 0 < c) return null;
    if (!a && 0 == b && 0 == c) return "PT0S";
    c = [];
    0 > b && c.push("-");
    c.push("P");
    (this.Lj || a) && c.push(Math.abs(this.Lj) + "Y");
    (this.months || a) && c.push(Math.abs(this.months) + "M");
    (this.days || a) && c.push(Math.abs(this.days) + "D");
    if (this.lj || this.qj || this.wj || a) c.push("T"), (this.lj || a) && c.push(Math.abs(this.lj) + "H"), (this.qj || a) && c.push(Math.abs(this.qj) +
        "M"), (this.wj || a) && c.push(Math.abs(this.wj) + "S");
    return c.join("")
};
gvjs_.equals = function(a) {
    return a.Lj == this.Lj && a.months == this.months && a.days == this.days && a.lj == this.lj && a.qj == this.qj && a.wj == this.wj
};
gvjs_.clone = function() {
    return new gvjs_Wd(this.Lj, this.months, this.days, this.lj, this.qj, this.wj)
};
gvjs_.z9 = function() {
    return new gvjs_Wd(-1 * this.Lj, -1 * this.months, -1 * this.days, -1 * this.lj, -1 * this.qj, -1 * this.wj)
};
gvjs_.add = function(a) {
    this.Lj += a.Lj;
    this.months += a.months;
    this.days += a.days;
    this.lj += a.lj;
    this.qj += a.qj;
    this.wj += a.wj
};

function gvjs_Xd(a, b, c) {
    gvjs_j(a) ? (this.date = gvjs_Yd(a, b || 0, c || 1), gvjs_Zd(this, c || 1)) : gvjs_m(a) ? (this.date = gvjs_Yd(a.getFullYear(), a.getMonth(), a.getDate()), gvjs_Zd(this, a.getDate())) : (this.date = new Date(gvjs_dc()), a = this.date.getDate(), this.date.setHours(0), this.date.setMinutes(0), this.date.setSeconds(0), this.date.setMilliseconds(0), gvjs_Zd(this, a))
}

function gvjs_Yd(a, b, c) {
    b = new Date(a, b, c);
    0 <= a && 100 > a && b.setFullYear(b.getFullYear() - 1900);
    return b
}
gvjs_ = gvjs_Xd.prototype;
gvjs_.XB = gvjs_Td.FIRSTDAYOFWEEK;
gvjs_.YB = gvjs_Td.FIRSTWEEKCUTOFFDAY;
gvjs_.clone = function() {
    var a = new gvjs_Xd(this.date);
    a.XB = this.XB;
    a.YB = this.YB;
    return a
};
gvjs_.getFullYear = function() {
    return this.date.getFullYear()
};
gvjs_.getYear = function() {
    return this.getFullYear()
};
gvjs_.getMonth = function() {
    return this.date.getMonth()
};
gvjs_.getDate = function() {
    return this.date.getDate()
};
gvjs_.getTime = function() {
    return this.date.getTime()
};
gvjs_.getDay = function() {
    return this.date.getDay()
};
gvjs_.getUTCFullYear = function() {
    return this.date.getUTCFullYear()
};
gvjs_.getUTCMonth = function() {
    return this.date.getUTCMonth()
};
gvjs_.getUTCDate = function() {
    return this.date.getUTCDate()
};
gvjs_.getUTCDay = function() {
    return this.date.getDay()
};
gvjs_.getUTCHours = function() {
    return this.date.getUTCHours()
};
gvjs_.getUTCMinutes = function() {
    return this.date.getUTCMinutes()
};
gvjs_.getTimezoneOffset = function() {
    return this.date.getTimezoneOffset()
};

function gvjs__d(a) {
    a = a.getTimezoneOffset();
    if (0 == a) a = "Z";
    else {
        var b = Math.abs(a) / 60,
            c = Math.floor(b);
        b = 60 * (b - c);
        a = (0 < a ? "-" : "+") + gvjs_Dc(c, 2) + ":" + gvjs_Dc(b, 2)
    }
    return a
}
gvjs_.set = function(a) {
    this.date = new Date(a.getFullYear(), a.getMonth(), a.getDate())
};
gvjs_.setFullYear = function(a) {
    this.date.setFullYear(a)
};
gvjs_.setYear = function(a) {
    this.setFullYear(a)
};
gvjs_.setMonth = function(a) {
    this.date.setMonth(a)
};
gvjs_.setDate = function(a) {
    this.date.setDate(a)
};
gvjs_.setTime = function(a) {
    this.date.setTime(a)
};
gvjs_.setUTCFullYear = function(a) {
    this.date.setUTCFullYear(a)
};
gvjs_.setUTCMonth = function(a) {
    this.date.setUTCMonth(a)
};
gvjs_.setUTCDate = function(a) {
    this.date.setUTCDate(a)
};
gvjs_.add = function(a) {
    if (a.Lj || a.months) {
        var b = this.getMonth() + a.months + 12 * a.Lj,
            c = this.getYear() + Math.floor(b / 12);
        b %= 12;
        0 > b && (b += 12);
        var d = Math.min(gvjs_Ud(c, b), this.getDate());
        this.setDate(1);
        this.setFullYear(c);
        this.setMonth(b);
        this.setDate(d)
    }
    a.days && (b = new Date(this.getYear(), this.getMonth(), this.getDate(), 12), a = new Date(b.getTime() + 864E5 * a.days), this.setDate(1), this.setFullYear(a.getFullYear()), this.setMonth(a.getMonth()), this.setDate(a.getDate()), gvjs_Zd(this, a.getDate()))
};
gvjs_.xA = function(a, b) {
    return [this.getFullYear(), gvjs_Dc(this.getMonth() + 1, 2), gvjs_Dc(this.getDate(), 2)].join(a ? "-" : "") + (b ? gvjs__d(this) : "")
};
gvjs_.equals = function(a) {
    return !(!a || this.getYear() != a.getYear() || this.getMonth() != a.getMonth() || this.getDate() != a.getDate())
};
gvjs_.toString = function() {
    return this.xA()
};

function gvjs_Zd(a, b) {
    a.getDate() != b && (b = a.getDate() < b ? 1 : -1, a.date.setUTCHours(a.date.getUTCHours() + b))
}
gvjs_.valueOf = function() {
    return this.date.valueOf()
};

function gvjs_0d(a, b) {
    return a.getTime() - b.getTime()
}

function gvjs_1d(a, b, c, d, e, f, g) {
    this.date = gvjs_j(a) ? new Date(a, b || 0, c || 1, d || 0, e || 0, f || 0, g || 0) : new Date(a && a.getTime ? a.getTime() : gvjs_dc())
}
gvjs_p(gvjs_1d, gvjs_Xd);
gvjs_ = gvjs_1d.prototype;
gvjs_.getHours = function() {
    return this.date.getHours()
};
gvjs_.getMinutes = function() {
    return this.date.getMinutes()
};
gvjs_.getSeconds = function() {
    return this.date.getSeconds()
};
gvjs_.getMilliseconds = function() {
    return this.date.getMilliseconds()
};
gvjs_.getUTCDay = function() {
    return this.date.getUTCDay()
};
gvjs_.getUTCHours = function() {
    return this.date.getUTCHours()
};
gvjs_.getUTCMinutes = function() {
    return this.date.getUTCMinutes()
};
gvjs_.getUTCSeconds = function() {
    return this.date.getUTCSeconds()
};
gvjs_.getUTCMilliseconds = function() {
    return this.date.getUTCMilliseconds()
};
gvjs_.setHours = function(a) {
    this.date.setHours(a)
};
gvjs_.setMinutes = function(a) {
    this.date.setMinutes(a)
};
gvjs_.setSeconds = function(a) {
    this.date.setSeconds(a)
};
gvjs_.setMilliseconds = function(a) {
    this.date.setMilliseconds(a)
};
gvjs_.setUTCHours = function(a) {
    this.date.setUTCHours(a)
};
gvjs_.setUTCMinutes = function(a) {
    this.date.setUTCMinutes(a)
};
gvjs_.setUTCSeconds = function(a) {
    this.date.setUTCSeconds(a)
};
gvjs_.setUTCMilliseconds = function(a) {
    this.date.setUTCMilliseconds(a)
};
gvjs_.add = function(a) {
    gvjs_Xd.prototype.add.call(this, a);
    a.lj && this.setUTCHours(this.date.getUTCHours() + a.lj);
    a.qj && this.setUTCMinutes(this.date.getUTCMinutes() + a.qj);
    a.wj && this.setUTCSeconds(this.date.getUTCSeconds() + a.wj)
};
gvjs_.xA = function(a, b) {
    var c = gvjs_Xd.prototype.xA.call(this, a);
    return a ? c + " " + gvjs_Dc(this.getHours(), 2) + ":" + gvjs_Dc(this.getMinutes(), 2) + ":" + gvjs_Dc(this.getSeconds(), 2) + (b ? gvjs__d(this) : "") : c + "T" + gvjs_Dc(this.getHours(), 2) + gvjs_Dc(this.getMinutes(), 2) + gvjs_Dc(this.getSeconds(), 2) + (b ? gvjs__d(this) : "")
};
gvjs_.equals = function(a) {
    return this.getTime() == a.getTime()
};
gvjs_.toString = function() {
    return this.xA()
};
gvjs_.clone = function() {
    var a = new gvjs_1d(this.date);
    a.XB = this.XB;
    a.YB = this.YB;
    return a
};

function gvjs_s(a, b, c) {
    for (var d in a) b.call(c, a[d], d, a)
}

function gvjs_2d(a, b, c) {
    var d = {},
        e;
    for (e in a) d[e] = b.call(c, a[e], e, a);
    return d
}

function gvjs_3d(a, b) {
    for (var c in a)
        if (b.call(void 0, a[c], c, a)) return !0;
    return !1
}

function gvjs_4d(a, b, c) {
    for (var d in a)
        if (!b.call(c, a[d], d, a)) return !1;
    return !0
}

function gvjs_5d(a) {
    var b = 0,
        c;
    for (c in a) b++;
    return b
}

function gvjs_6d(a) {
    for (var b in a) return a[b]
}

function gvjs_7d(a) {
    var b = [],
        c = 0,
        d;
    for (d in a) b[c++] = a[d];
    return b
}

function gvjs_8d(a) {
    var b = [],
        c = 0,
        d;
    for (d in a) b[c++] = d;
    return b
}

function gvjs_9d(a, b) {
    return null !== a && b in a
}

function gvjs_$d(a, b) {
    for (var c in a)
        if (a[c] == b) return !0;
    return !1
}

function gvjs_ae(a) {
    for (var b in a) return !1;
    return !0
}

function gvjs_be(a, b) {
    b in a && delete a[b]
}

function gvjs_ce(a, b, c) {
    if (null !== a && b in a) throw Error('The object already contains the key "' + b + '"');
    a[b] = c
}

function gvjs_de(a, b, c) {
    return null !== a && b in a ? a[b] : c
}

function gvjs_ee(a, b, c) {
    return b in a ? a[b] : a[b] = c
}

function gvjs_xaa(a, b) {
    for (var c in a)
        if (!(c in b) || a[c] !== b[c]) return !1;
    for (c in b)
        if (!(c in a)) return !1;
    return !0
}

function gvjs_t(a) {
    var b = {},
        c;
    for (c in a) b[c] = a[c];
    return b
}

function gvjs_fe(a) {
    var b = gvjs_6b(a);
    if (b == gvjs_tb || b == gvjs_3a) {
        if (gvjs_n(a.clone)) return a.clone();
        b = b == gvjs_3a ? [] : {};
        for (var c in a) b[c] = gvjs_fe(a[c]);
        return b
    }
    return a
}

function gvjs_ge(a) {
    var b = {},
        c;
    for (c in a) b[a[c]] = c;
    return b
}
var gvjs_he = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

function gvjs_ie(a, b) {
    for (var c, d, e = 1; e < arguments.length; e++) {
        d = arguments[e];
        for (c in d) a[c] = d[c];
        for (var f = 0; f < gvjs_he.length; f++) c = gvjs_he[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
    }
}

function gvjs_je(a) {
    var b = arguments.length;
    if (1 == b && gvjs_l(arguments[0])) return gvjs_je.apply(null, arguments[0]);
    if (b % 2) throw Error(gvjs_Ya);
    for (var c = {}, d = 0; d < b; d += 2) c[arguments[d]] = arguments[d + 1];
    return c
}

function gvjs_ke(a) {
    var b = arguments.length;
    if (1 == b && gvjs_l(arguments[0])) return gvjs_ke.apply(null, arguments[0]);
    for (var c = {}, d = 0; d < b; d++) c[arguments[d]] = !0;
    return c
};

function gvjs_le() {}

function gvjs_me(a) {
    if (typeof a == gvjs_e) {
        var b = new gvjs_le;
        b.L2 = a;
        var c = a;
        if (0 == c) c = "Etc/GMT";
        else {
            var d = ["Etc/GMT", 0 > c ? "-" : "+"];
            c = Math.abs(c);
            d.push(Math.floor(c / 60) % 100);
            c %= 60;
            0 != c && d.push(":", gvjs_Dc(c, 2));
            c = d.join("")
        }
        b.u3 = c;
        c = a;
        0 == c ? c = "UTC" : (d = ["UTC", 0 > c ? "+" : "-"], c = Math.abs(c), d.push(Math.floor(c / 60) % 100), c %= 60, 0 != c && d.push(":", c), c = d.join(""));
        a = gvjs_ne(a);
        b.tT = [c, c];
        b.Zw = {
            tBa: a,
            b5: a
        };
        b.EA = [];
        return b
    }
    b = new gvjs_le;
    b.u3 = a.id;
    b.L2 = -a.std_offset;
    b.tT = a.names;
    b.Zw = a.names_ext;
    b.EA = a.transitions;
    return b
}

function gvjs_ne(a) {
    var b = ["GMT"];
    b.push(0 >= a ? "+" : "-");
    a = Math.abs(a);
    b.push(gvjs_Dc(Math.floor(a / 60) % 100, 2), ":", gvjs_Dc(a % 60, 2));
    return b.join("")
}
gvjs_ = gvjs_le.prototype;
gvjs_.getTimeZoneData = function() {
    return {
        id: this.u3,
        std_offset: -this.L2,
        names: gvjs_4c(this.tT),
        names_ext: gvjs_t(this.Zw),
        transitions: gvjs_4c(this.EA)
    }
};
gvjs_.getDaylightAdjustment = function(a) {
    a = Date.UTC(a.getUTCFullYear(), a.getUTCMonth(), a.getUTCDate(), a.getUTCHours(), a.getUTCMinutes()) / 36E5;
    for (var b = 0; b < this.EA.length && a >= this.EA[b];) b += 2;
    return 0 == b ? 0 : this.EA[b - 1]
};
gvjs_.getGMTString = function(a) {
    return gvjs_ne(this.getOffset(a))
};
gvjs_.getLongName = function(a) {
    return this.tT[this.isDaylightTime(a) ? 3 : 1]
};
gvjs_.getOffset = function(a) {
    return this.L2 - this.getDaylightAdjustment(a)
};
gvjs_.getRFCTimeZoneString = function(a) {
    a = -this.getOffset(a);
    var b = [0 > a ? "-" : "+"];
    a = Math.abs(a);
    b.push(gvjs_Dc(Math.floor(a / 60) % 100, 2), gvjs_Dc(a % 60, 2));
    return b.join("")
};
gvjs_.getShortName = function(a) {
    return this.tT[this.isDaylightTime(a) ? 2 : 0]
};
gvjs_.getTimeZoneId = function() {
    return this.u3
};
gvjs_.isDaylightTime = function(a) {
    return 0 < this.getDaylightAdjustment(a)
};

function gvjs_oe(a, b) {
    this.dR = [];
    this.vf = b || gvjs_Td;
    typeof a == gvjs_e ? this.TL(a) : this.Zr(a)
}
var gvjs_pe = [/^\'(?:[^\']|\'\')*(\'|$)/, /^(?:G+|y+|M+|k+|S+|E+|a+|h+|K+|H+|c+|L+|Q+|d+|m+|s+|v+|V+|w+|z+|Z+)/, /^[^\'GyMkSEahKHcLQdmsvVwzZ]+/];

function gvjs_qe(a) {
    return a.getHours ? a.getHours() : 0
}
gvjs_oe.prototype.Zr = function(a) {
    for (gvjs_yaa && (a = a.replace(/\u200f/g, "")); a;) {
        for (var b = a, c = 0; c < gvjs_pe.length; ++c) {
            var d = a.match(gvjs_pe[c]);
            if (d) {
                var e = d[0];
                a = a.substring(e.length);
                0 == c && ("''" == e ? e = "'" : (e = e.substring(1, "'" == d[1] ? e.length - 1 : e.length), e = e.replace(/\'\'/g, "'")));
                this.dR.push({
                    text: e,
                    type: c
                });
                break
            }
        }
        if (b === a) throw Error("Malformed pattern part: " + a);
    }
};
gvjs_oe.prototype.format = function(a, b) {
    if (!a) throw Error("The date to format must be non-null.");
    var c = b ? 6E4 * (a.getTimezoneOffset() - b.getOffset(a)) : 0,
        d = c ? new Date(a.getTime() + c) : a,
        e = d;
    b && d.getTimezoneOffset() != a.getTimezoneOffset() && (e = 6E4 * (d.getTimezoneOffset() - a.getTimezoneOffset()), d = new Date(d.getTime() + e), c += 0 < c ? -864E5 : 864E5, e = new Date(a.getTime() + c));
    c = [];
    for (var f = 0; f < this.dR.length; ++f) {
        var g = this.dR[f].text;
        1 == this.dR[f].type ? c.push(gvjs_zaa(this, g, a, d, e, b)) : c.push(g)
    }
    return c.join("")
};
gvjs_oe.prototype.TL = function(a) {
    if (4 > a) var b = this.vf.DATEFORMATS[a];
    else if (8 > a) b = this.vf.TIMEFORMATS[a - 4];
    else if (12 > a) b = this.vf.DATETIMEFORMATS[a - 8], b = b.replace("{1}", this.vf.DATEFORMATS[a - 8]), b = b.replace("{0}", this.vf.TIMEFORMATS[a - 8]);
    else {
        this.TL(10);
        return
    }
    this.Zr(b)
};

function gvjs_re(a, b) {
    b = String(b);
    a = a.vf || gvjs_Td;
    if (void 0 !== a.bja) {
        for (var c = [], d = 0; d < b.length; d++) {
            var e = b.charCodeAt(d);
            c.push(48 <= e && 57 >= e ? String.fromCharCode(a.bja + e - 48) : b.charAt(d))
        }
        b = c.join("")
    }
    return b
}
var gvjs_yaa = !1;

function gvjs_se(a) {
    if (!(a.getHours && a.getSeconds && a.getMinutes)) throw Error("The date to format has no time (probably a goog.date.Date). Use Date or goog.date.DateTime, or use a pattern without time fields.");
}

function gvjs_zaa(a, b, c, d, e, f) {
    var g = b.length;
    switch (b.charAt(0)) {
        case "G":
            return c = 0 < d.getFullYear() ? 1 : 0, 4 <= g ? a.vf.ERANAMES[c] : a.vf.ERAS[c];
        case "y":
            return c = d.getFullYear(), 0 > c && (c = -c), 2 == g && (c %= 100), gvjs_re(a, gvjs_Dc(c, g));
        case "M":
            a: switch (c = d.getMonth(), g) {
                case 5:
                    g = a.vf.NARROWMONTHS[c];
                    break a;
                case 4:
                    g = a.vf.MONTHS[c];
                    break a;
                case 3:
                    g = a.vf.SHORTMONTHS[c];
                    break a;
                default:
                    g = gvjs_re(a, gvjs_Dc(c + 1, g))
            }
            return g;
        case "k":
            return gvjs_se(e), c = gvjs_qe(e) || 24, gvjs_re(a, gvjs_Dc(c, g));
        case "S":
            return c = e.getTime() %
                1E3 / 1E3, gvjs_re(a, c.toFixed(Math.min(3, g)).substr(2) + (3 < g ? gvjs_Dc(0, g - 3) : ""));
        case "E":
            return c = d.getDay(), 4 <= g ? a.vf.WEEKDAYS[c] : a.vf.SHORTWEEKDAYS[c];
        case "a":
            return gvjs_se(e), g = gvjs_qe(e), a.vf.AMPMS[12 <= g && 24 > g ? 1 : 0];
        case "h":
            return gvjs_se(e), c = gvjs_qe(e) % 12 || 12, gvjs_re(a, gvjs_Dc(c, g));
        case "K":
            return gvjs_se(e), c = gvjs_qe(e) % 12, gvjs_re(a, gvjs_Dc(c, g));
        case "H":
            return gvjs_se(e), c = gvjs_qe(e), gvjs_re(a, gvjs_Dc(c, g));
        case "c":
            a: switch (c = d.getDay(), g) {
                case 5:
                    g = a.vf.STANDALONENARROWWEEKDAYS[c];
                    break a;
                case 4:
                    g = a.vf.STANDALONEWEEKDAYS[c];
                    break a;
                case 3:
                    g = a.vf.STANDALONESHORTWEEKDAYS[c];
                    break a;
                default:
                    g = gvjs_re(a, gvjs_Dc(c, 1))
            }
            return g;
        case "L":
            a: switch (c = d.getMonth(), g) {
                case 5:
                    g = a.vf.STANDALONENARROWMONTHS[c];
                    break a;
                case 4:
                    g = a.vf.STANDALONEMONTHS[c];
                    break a;
                case 3:
                    g = a.vf.STANDALONESHORTMONTHS[c];
                    break a;
                default:
                    g = gvjs_re(a, gvjs_Dc(c + 1, g))
            }
            return g;
        case "Q":
            return c = Math.floor(d.getMonth() / 3), 4 > g ? a.vf.SHORTQUARTERS[c] : a.vf.QUARTERS[c];
        case "d":
            return gvjs_re(a, gvjs_Dc(d.getDate(), g));
        case "m":
            return gvjs_se(e),
                gvjs_re(a, gvjs_Dc(e.getMinutes(), g));
        case "s":
            return gvjs_se(e), gvjs_re(a, gvjs_Dc(e.getSeconds(), g));
        case "v":
            return g = f || gvjs_me(c.getTimezoneOffset()), g.getTimeZoneId();
        case "V":
            return a = f || gvjs_me(c.getTimezoneOffset()), 2 >= g ? g = a.getTimeZoneId() : (g = a, g = g.isDaylightTime(c) ? gvjs_h(g.Zw.yha) ? g.Zw.yha : g.Zw.DST_GENERIC_LOCATION : gvjs_h(g.Zw.b5) ? g.Zw.b5 : g.Zw.STD_GENERIC_LOCATION), g;
        case "w":
            return c = e.getFullYear(), b = e.getMonth(), d = e.getDate(), e = a.vf.FIRSTWEEKCUTOFFDAY, c = new Date(c, b, d), e = gvjs_h(e) ? e :
                3, b = a.vf.FIRSTDAYOFWEEK || 0, d = ((c.getDay() + 6) % 7 - b + 7) % 7, c = c.valueOf() + 864E5 * ((e - b + 7) % 7 - d), e = (new Date((new Date(c)).getFullYear(), 0, 1)).valueOf(), gvjs_re(a, gvjs_Dc(Math.floor(Math.round((c - e) / 864E5) / 7) + 1, g));
        case "z":
            return a = f || gvjs_me(c.getTimezoneOffset()), 4 > g ? a.getShortName(c) : a.getLongName(c);
        case "Z":
            return e = f || gvjs_me(c.getTimezoneOffset()), 4 > g ? e.getRFCTimeZoneString(c) : gvjs_re(a, e.getGMTString(c));
        default:
            return ""
    }
};
var gvjs_te = {
        YEAR_FULL: "y",
        YEAR_FULL_WITH_ERA: "y G",
        YEAR_MONTH_ABBR: "MMM y",
        YEAR_MONTH_FULL: "MMMM y",
        MONTH_DAY_ABBR: gvjs_Ba,
        MONTH_DAY_FULL: "MMMM dd",
        MONTH_DAY_SHORT: "M/d",
        MONTH_DAY_MEDIUM: "MMMM d",
        MONTH_DAY_YEAR_MEDIUM: "MMM d, y",
        WEEKDAY_MONTH_DAY_MEDIUM: "EEE, MMM d",
        WEEKDAY_MONTH_DAY_YEAR_MEDIUM: "EEE, MMM d, y",
        DAY_ABBR: "d"
    },
    gvjs_ue = gvjs_te;
gvjs_ue = gvjs_te;
var gvjs_ve = {
        G4: {
            1E3: {
                other: "0K"
            },
            1E4: {
                other: "00K"
            },
            1E5: {
                other: "000K"
            },
            1E6: {
                other: "0M"
            },
            1E7: {
                other: "00M"
            },
            1E8: {
                other: "000M"
            },
            1E9: {
                other: "0B"
            },
            1E10: {
                other: "00B"
            },
            1E11: {
                other: "000B"
            },
            1E12: {
                other: "0T"
            },
            1E13: {
                other: "00T"
            },
            1E14: {
                other: "000T"
            }
        },
        pha: {
            1E3: {
                other: "0 thousand"
            },
            1E4: {
                other: "00 thousand"
            },
            1E5: {
                other: "000 thousand"
            },
            1E6: {
                other: "0 million"
            },
            1E7: {
                other: "00 million"
            },
            1E8: {
                other: "000 million"
            },
            1E9: {
                other: "0 billion"
            },
            1E10: {
                other: "00 billion"
            },
            1E11: {
                other: "000 billion"
            },
            1E12: {
                other: "0 trillion"
            },
            1E13: {
                other: "00 trillion"
            },
            1E14: {
                other: "000 trillion"
            }
        }
    },
    gvjs_we = gvjs_ve;
gvjs_we = gvjs_ve;

function gvjs_Aaa(a) {
    var b = gvjs_xe().qha,
        c = ["0"];
    a = gvjs_ye[a][0] & 7;
    if (0 < a) {
        c.push(".");
        for (var d = 0; d < a; d++) c.push("0")
    }
    return b.replace(/0.00/g, c.join(""))
}
var gvjs_ye = {
    AED: [2, "dh", "\u062f.\u0625.", "DH"],
    ALL: [0, "Lek", "Lek"],
    AUD: [2, "$", "AU$"],
    BDT: [2, "\u09f3", "Tk"],
    BGN: [2, "lev", "lev"],
    BRL: [2, "R$", "R$"],
    CAD: [2, "$", "C$"],
    CDF: [2, "FrCD", "CDF"],
    CHF: [2, "CHF", "CHF"],
    CLP: [0, "$", "CL$"],
    CNY: [2, "\u00a5", "RMB\u00a5"],
    COP: [32, "$", "COL$"],
    CRC: [0, "\u20a1", "CR\u20a1"],
    CZK: [50, "K\u010d", "K\u010d"],
    DKK: [50, "kr.", "kr."],
    DOP: [2, "RD$", "RD$"],
    EGP: [2, "\u00a3", "LE"],
    ETB: [2, "Birr", "Birr"],
    EUR: [2, "\u20ac", "\u20ac"],
    GBP: [2, "\u00a3", "GB\u00a3"],
    HKD: [2, "$", "HK$"],
    HRK: [2, "kn", "kn"],
    HUF: [34, "Ft", "Ft"],
    IDR: [0, "Rp", "Rp"],
    ILS: [34, "\u20aa", "IL\u20aa"],
    INR: [2, "\u20b9", "Rs"],
    IRR: [0, "Rial", "IRR"],
    ISK: [0, "kr", "kr"],
    JMD: [2, "$", "JA$"],
    JPY: [0, "\u00a5", "JP\u00a5"],
    KRW: [0, "\u20a9", "KR\u20a9"],
    LKR: [2, "Rs", "SLRs"],
    LTL: [2, "Lt", "Lt"],
    MNT: [0, "\u20ae", "MN\u20ae"],
    MVR: [2, "Rf", "MVR"],
    MXN: [2, "$", "Mex$"],
    MYR: [2, "RM", "RM"],
    NOK: [50, "kr", "NOkr"],
    PAB: [2, "B/.", "B/."],
    PEN: [2, "S/.", "S/."],
    PHP: [2, "\u20b1", "PHP"],
    PKR: [0, "Rs", "PKRs."],
    PLN: [50, "z\u0142", "z\u0142"],
    RON: [2, "RON", "RON"],
    RSD: [0, "din", "RSD"],
    RUB: [50,
        "\u20bd", "RUB"
    ],
    SAR: [2, "Rial", "Rial"],
    SEK: [50, "kr", "kr"],
    SGD: [2, "$", "S$"],
    THB: [2, "\u0e3f", "THB"],
    TRY: [2, "TL", "YTL"],
    TWD: [2, "NT$", "NT$"],
    TZS: [0, "TSh", "TSh"],
    UAH: [2, "\u0433\u0440\u043d.", "UAH"],
    USD: [2, "$", "US$"],
    UYU: [2, "$", "$U"],
    VND: [48, "\u20ab", "VN\u20ab"],
    YER: [0, "Rial", "Rial"],
    ZAR: [2, "R", "ZAR"]
};
var gvjs_ze = {
        DECIMAL_SEP: ".",
        GROUP_SEP: ",",
        PERCENT: "%",
        jU: "0",
        ria: "+",
        Tha: "-",
        K4: "E",
        T4: "\u2030",
        bU: "\u221e",
        gia: "NaN",
        DECIMAL_PATTERN: "#,##0.###",
        Cia: "#E0",
        eU: "#,##0%",
        qha: "\u00a4#,##0.00",
        uha: "USD"
    },
    gvjs_Ae = gvjs_ze,
    gvjs_Be = gvjs_ze;
gvjs_Be = gvjs_Ae = gvjs_ze;

function gvjs_Ce(a, b, c) {
    this.rra = b;
    this.Bla = c || 0;
    this.jQ = 40;
    this.mp = 1;
    this.ao = 0;
    this.ew = 3;
    this.tQ = this.Mt = 0;
    this.m2 = this.nga = !1;
    this.NJ = this.Uz = "";
    this.hw = "-";
    this.vD = "";
    this.cg = 1;
    this.Fz = !1;
    this.Py = [];
    this.yT = this.H7 = !1;
    this.zG = 0;
    this.eM = null;
    typeof a == gvjs_e ? this.TL(a) : this.Zr(a)
}
var gvjs_De = !1;

function gvjs_xe() {
    return gvjs_De ? gvjs_Be : gvjs_Ae
}

function gvjs_Ee(a) {
    return a.rra || gvjs_xe().uha
}
gvjs_ = gvjs_Ce.prototype;
gvjs_.setMinimumFractionDigits = function(a) {
    if (0 < this.ao && 0 < a) throw Error(gvjs_oa);
    this.Mt = a;
    return this
};
gvjs_.setMaximumFractionDigits = function(a) {
    if (308 < a) throw Error("Unsupported maximum fraction digits: " + a);
    this.ew = a;
    return this
};
gvjs_.setSignificantDigits = function(a) {
    if (0 < this.Mt && 0 <= a) throw Error(gvjs_oa);
    this.ao = a;
    return this
};
gvjs_.getSignificantDigits = function() {
    return this.ao
};
gvjs_.setShowTrailingZeros = function(a) {
    this.m2 = a;
    return this
};
gvjs_.setBaseFormatting = function(a) {
    this.eM = a;
    return this
};
gvjs_.getBaseFormatting = function() {
    return this.eM
};
gvjs_.Zr = function(a) {
    this.Ed = a.replace(/ /g, "\u00a0");
    var b = [0];
    this.Uz = gvjs_Fe(this, a, b);
    for (var c = b[0], d = -1, e = 0, f = 0, g = 0, h = -1, k = a.length, l = !0; b[0] < k && l; b[0]++) switch (a.charAt(b[0])) {
        case "#":
            0 < f ? g++ : e++;
            0 <= h && 0 > d && h++;
            break;
        case "0":
            if (0 < g) throw Error('Unexpected "0" in pattern "' + a + '"');
            f++;
            0 <= h && 0 > d && h++;
            break;
        case ",":
            0 < h && this.Py.push(h);
            h = 0;
            break;
        case ".":
            if (0 <= d) throw Error('Multiple decimal separators in pattern "' + a + '"');
            d = e + f + g;
            break;
        case "E":
            if (this.yT) throw Error('Multiple exponential symbols in pattern "' + a +
                '"');
            this.yT = !0;
            this.tQ = 0;
            b[0] + 1 < k && "+" == a.charAt(b[0] + 1) && (b[0]++, this.nga = !0);
            for (; b[0] + 1 < k && "0" == a.charAt(b[0] + 1);) b[0]++, this.tQ++;
            if (1 > e + f || 1 > this.tQ) throw Error('Malformed exponential pattern "' + a + '"');
            l = !1;
            break;
        default:
            b[0]--, l = !1
    }
    0 == f && 0 < e && 0 <= d && (f = d, 0 == f && f++, g = e - f, e = f - 1, f = 1);
    if (0 > d && 0 < g || 0 <= d && (d < e || d > e + f) || 0 == h) throw Error('Malformed pattern "' + a + '"');
    g = e + f + g;
    this.ew = 0 <= d ? g - d : 0;
    0 <= d && (this.Mt = e + f - d, 0 > this.Mt && (this.Mt = 0));
    this.mp = (0 <= d ? d : g) - e;
    this.yT && (this.jQ = e + this.mp, 0 == this.ew && 0 ==
        this.mp && (this.mp = 1));
    this.Py.push(Math.max(0, h));
    this.H7 = 0 == d || d == g;
    c = b[0] - c;
    this.NJ = gvjs_Fe(this, a, b);
    b[0] < a.length && ";" == a.charAt(b[0]) ? (b[0]++, 1 != this.cg && (this.Fz = !0), this.hw = gvjs_Fe(this, a, b), b[0] += c, this.vD = gvjs_Fe(this, a, b)) : (this.hw += this.Uz, this.vD += this.NJ)
};
gvjs_.TL = function(a) {
    switch (a) {
        case 1:
            this.Zr(gvjs_xe().DECIMAL_PATTERN);
            break;
        case 2:
            this.Zr(gvjs_xe().Cia);
            break;
        case 3:
            this.Zr(gvjs_xe().eU);
            break;
        case 4:
            this.Zr(gvjs_Aaa(gvjs_Ee(this)));
            break;
        case 5:
            gvjs_Ge(this, 1);
            break;
        case 6:
            gvjs_Ge(this, 2);
            break;
        default:
            throw Error("Unsupported pattern type.");
    }
};

function gvjs_Ge(a, b) {
    a.zG = b;
    a.Zr(gvjs_xe().DECIMAL_PATTERN);
    a.setMinimumFractionDigits(0);
    a.setMaximumFractionDigits(2);
    a.setSignificantDigits(2)
}
gvjs_.parse = function(a, b) {
    b = b || [0];
    if (0 != this.zG) throw Error("Parsing of compact numbers is unimplemented");
    a = a.replace(/ /g, "\u00a0");
    var c = a.indexOf(this.Uz, b[0]) == b[0],
        d = a.indexOf(this.hw, b[0]) == b[0];
    c && d && (this.Uz.length > this.hw.length ? d = !1 : this.Uz.length < this.hw.length && (c = !1));
    c ? b[0] += this.Uz.length : d && (b[0] += this.hw.length);
    if (a.indexOf(gvjs_xe().bU, b[0]) == b[0]) {
        b[0] += gvjs_xe().bU.length;
        var e = Infinity
    } else {
        e = a;
        var f = !1,
            g = !1,
            h = !1,
            k = -1,
            l = 1,
            m = gvjs_xe().DECIMAL_SEP,
            n = gvjs_xe().GROUP_SEP,
            p = gvjs_xe().K4;
        if (0 != this.zG) throw Error("Parsing of compact style numbers is not implemented");
        for (var q = ""; b[0] < e.length; b[0]++) {
            var r = e.charAt(b[0]),
                t = gvjs_He(r);
            if (0 <= t && 9 >= t) q += t, h = !0;
            else if (r == m.charAt(0)) {
                if (f || g) break;
                q += ".";
                f = !0
            } else if (r == n.charAt(0) && ("\u00a0" != n.charAt(0) || b[0] + 1 < e.length && 0 <= gvjs_He(e.charAt(b[0] + 1)))) {
                if (f || g) break
            } else if (r == p.charAt(0)) {
                if (g) break;
                q += "E";
                g = !0;
                k = b[0]
            } else if ("+" == r || "-" == r) {
                if (h && k != b[0] - 1) break;
                q += r
            } else if (1 == this.cg && r == gvjs_xe().PERCENT.charAt(0)) {
                if (1 != l) break;
                l = 100;
                if (h) {
                    b[0]++;
                    break
                }
            } else if (1 == this.cg && r == gvjs_xe().T4.charAt(0)) {
                if (1 != l) break;
                l = 1E3;
                if (h) {
                    b[0]++;
                    break
                }
            } else break
        }
        1 != this.cg && (l = this.cg);
        e = parseFloat(q) / l
    }
    if (c) {
        if (a.indexOf(this.NJ, b[0]) != b[0]) return NaN;
        b[0] += this.NJ.length
    } else if (d) {
        if (a.indexOf(this.vD, b[0]) != b[0]) return NaN;
        b[0] += this.vD.length
    }
    return d ? -e : e
};
gvjs_.format = function(a) {
    if (isNaN(a)) return gvjs_xe().gia;
    var b = [];
    var c = null === this.eM ? a : this.eM;
    if (0 == this.zG) c = gvjs_Ie;
    else {
        c = Math.abs(c);
        var d = gvjs_Je(this, 1 >= c ? 0 : gvjs_Ke(c)).divisorBase;
        c = gvjs_Je(this, d + gvjs_Ke(gvjs_Le(this, c / Math.pow(10, d)).faa))
    }
    a /= Math.pow(10, c.divisorBase);
    b.push(c.prefix);
    d = 0 > a || 0 == a && 0 > 1 / a;
    b.push(d ? this.hw : this.Uz);
    if (isFinite(a))
        if (a = a * (d ? -1 : 1) * this.cg, this.yT) {
            var e = a;
            if (0 == e) gvjs_Me(this, e, this.mp, b), gvjs_Ne(this, 0, b);
            else {
                a = Math.floor(Math.log(e) / Math.log(10) + 2E-15);
                var f = Math.pow(10, a);
                isFinite(f) && 0 !== f ? e /= f : (f = Math.pow(10, Math.floor(a / 2)), e = e / f / f, 1 == a % 2 && (e = 0 < a ? e / 10 : 10 * e));
                f = this.mp;
                if (1 < this.jQ && this.jQ > this.mp) {
                    for (; 0 != a % this.jQ;) e *= 10, a--;
                    f = 1
                } else 1 > this.mp ? (a++, e /= 10) : (a -= this.mp - 1, e *= Math.pow(10, this.mp - 1));
                gvjs_Me(this, e, f, b);
                gvjs_Ne(this, a, b)
            }
        } else gvjs_Me(this, a, this.mp, b);
    else b.push(gvjs_xe().bU);
    b.push(d ? this.vD : this.NJ);
    b.push(c.suffix);
    return b.join("")
};

function gvjs_Le(a, b) {
    var c = Math.pow(10, a.ew);
    a = 0 >= a.ao ? Math.round(b * c) : Math.round(gvjs_Oe(b * c, a.ao, a.ew));
    isFinite(a) ? (b = Math.floor(a / c), c = Math.floor(a - b * c)) : c = 0;
    return {
        faa: b,
        Hna: c
    }
}

function gvjs_Me(a, b, c, d) {
    if (a.Mt > a.ew) throw Error("Min value must be less than max value");
    d || (d = []);
    b = gvjs_Le(a, b);
    var e = b.faa,
        f = b.Hna,
        g = 0 == e ? 0 : gvjs_Ke(e) + 1,
        h = 0 < a.Mt || 0 < f || a.m2 && g < a.ao;
    b = a.Mt;
    h && (b = a.m2 && 0 < a.ao ? a.ao - g : a.Mt);
    var k = "";
    for (g = e; 1E20 < g;) k = "0" + k, g = Math.round(g / 10);
    k = g + k;
    var l = gvjs_xe().DECIMAL_SEP;
    g = gvjs_xe().jU.charCodeAt(0);
    var m = k.length,
        n = 0;
    if (0 < e || 0 < c) {
        for (e = m; e < c; e++) d.push(String.fromCharCode(g));
        if (2 <= a.Py.length)
            for (c = 1; c < a.Py.length; c++) n += a.Py[c];
        c = m - n;
        if (0 < c) {
            e = a.Py;
            n = m = 0;
            for (var p, q = gvjs_xe().GROUP_SEP, r = k.length, t = 0; t < r; t++)
                if (d.push(String.fromCharCode(g + 1 * Number(k.charAt(t)))), 1 < r - t)
                    if (p = e[n], t < c) {
                        var u = c - t;
                        (1 === p || 0 < p && 1 === u % p) && d.push(q)
                    } else n < e.length && (t === c ? n += 1 : p === t - c - m + 1 && (d.push(q), m += p, n += 1))
        } else {
            c = k;
            k = a.Py;
            e = gvjs_xe().GROUP_SEP;
            p = c.length;
            q = [];
            for (m = k.length - 1; 0 <= m && 0 < p; m--) {
                n = k[m];
                for (r = 0; r < n && 0 <= p - r - 1; r++) q.push(String.fromCharCode(g + 1 * Number(c.charAt(p - r - 1))));
                p -= n;
                0 < p && q.push(e)
            }
            d.push.apply(d, q.reverse())
        }
    } else h || d.push(String.fromCharCode(g));
    (a.H7 || h) && d.push(l);
    f = String(f);
    h = f.split("e+");
    2 == h.length && (f = String(gvjs_Oe(parseFloat(h[0]), a.ao, 1)), f = f.replace(".", ""), f += gvjs_Cc("0", parseInt(h[1], 10) - f.length + 1));
    a.ew + 1 > f.length && (f = "1" + gvjs_Cc("0", a.ew - f.length) + f);
    for (a = f.length;
        "0" == f.charAt(a - 1) && a > b + 1;) a--;
    for (e = 1; e < a; e++) d.push(String.fromCharCode(g + 1 * Number(f.charAt(e))))
}

function gvjs_Ne(a, b, c) {
    c.push(gvjs_xe().K4);
    0 > b ? (b = -b, c.push(gvjs_xe().Tha)) : a.nga && c.push(gvjs_xe().ria);
    b = "" + b;
    for (var d = gvjs_xe().jU, e = b.length; e < a.tQ; e++) c.push(d);
    c.push(b)
}

function gvjs_He(a) {
    a = a.charCodeAt(0);
    if (48 <= a && 58 > a) return a - 48;
    var b = gvjs_xe().jU.charCodeAt(0);
    return b <= a && a < b + 10 ? a - b : -1
}

function gvjs_Fe(a, b, c) {
    for (var d = "", e = !1, f = b.length; c[0] < f; c[0]++) {
        var g = b.charAt(c[0]);
        if ("'" == g) c[0] + 1 < f && "'" == b.charAt(c[0] + 1) ? (c[0]++, d += "'") : e = !e;
        else if (e) d += g;
        else switch (g) {
            case "#":
            case "0":
            case ",":
            case ".":
            case ";":
                return d;
            case "\u00a4":
                if (c[0] + 1 < f && "\u00a4" == b.charAt(c[0] + 1)) c[0]++, d += gvjs_Ee(a);
                else switch (a.Bla) {
                    case 0:
                        d += gvjs_ye[gvjs_Ee(a)][1];
                        break;
                    case 2:
                        g = gvjs_Ee(a);
                        var h = gvjs_ye[g];
                        d += g == h[1] ? g : g + " " + h[1];
                        break;
                    case 1:
                        d += gvjs_ye[gvjs_Ee(a)][2]
                }
                break;
            case "%":
                if (!a.Fz && 1 != a.cg) throw Error(gvjs_Wa);
                if (a.Fz && 100 != a.cg) throw Error(gvjs_ya);
                a.cg = 100;
                a.Fz = !1;
                d += gvjs_xe().PERCENT;
                break;
            case "\u2030":
                if (!a.Fz && 1 != a.cg) throw Error(gvjs_Wa);
                if (a.Fz && 1E3 != a.cg) throw Error(gvjs_ya);
                a.cg = 1E3;
                a.Fz = !1;
                d += gvjs_xe().T4;
                break;
            default:
                d += g
        }
    }
    return d
}
var gvjs_Ie = {
    prefix: "",
    suffix: "",
    divisorBase: 0
};

function gvjs_Je(a, b) {
    a = 1 == a.zG ? gvjs_we.G4 : gvjs_we.pha;
    null == a && (a = gvjs_we.G4);
    if (3 > b) return gvjs_Ie;
    b = Math.min(14, b);
    var c = a[Math.pow(10, b)];
    for (--b; !c && 3 <= b;) c = a[Math.pow(10, b)], b--;
    if (!c) return gvjs_Ie;
    a = c.other;
    return a && "0" != a ? (a = /([^0]*)(0+)(.*)/.exec(a)) ? {
        prefix: a[1],
        suffix: a[3],
        divisorBase: b + 1 - (a[2].length - 1)
    } : gvjs_Ie : gvjs_Ie
}

function gvjs_Ke(a) {
    if (!isFinite(a)) return 0 < a ? a : 0;
    for (var b = 0; 1 <= (a /= 10);) b++;
    return b
}

function gvjs_Oe(a, b, c) {
    if (!a) return a;
    b = b - gvjs_Ke(a) - 1;
    if (b < -c) return c = Math.pow(10, c), Math.round(a / c) * c;
    c = Math.pow(10, b);
    return Math.round(a * c) / c
}
gvjs_Ce.prototype.isCurrencyCodeBeforeValue = function() {
    var a = this.Ed.indexOf("\u00a4"),
        b = this.Ed.indexOf("#"),
        c = this.Ed.indexOf("0"),
        d = Number.MAX_VALUE;
    0 <= b && b < d && (d = b);
    0 <= c && c < d && (d = c);
    return a < d
};
gvjs_oe.prototype.format = gvjs_oe.prototype.format;
gvjs_oe.Format = {
    FULL_DATE: 0,
    LONG_DATE: 1,
    MEDIUM_DATE: 2,
    SHORT_DATE: 3,
    FULL_TIME: 4,
    LONG_TIME: 5,
    MEDIUM_TIME: 6,
    SHORT_TIME: 7,
    FULL_DATETIME: 8,
    LONG_DATETIME: 9,
    MEDIUM_DATETIME: 10,
    SHORT_DATETIME: 11
};
var gvjs_Pe = gvjs_ue;
gvjs_Ce.Format = {
    DECIMAL: 1,
    SCIENTIFIC: 2,
    PERCENT: 3,
    CURRENCY: 4,
    COMPACT_SHORT: 5,
    COMPACT_LONG: 6
};
gvjs_Ce.prototype.format = gvjs_Ce.prototype.format;
gvjs_Ce.prototype.setSignificantDigits = gvjs_Ce.prototype.setSignificantDigits;
gvjs_Ce.setEnforceAsciiDigits = function(a) {
    gvjs_De = a
};
gvjs_Ce.isEnforceAsciiDigits = function() {
    return gvjs_De
};
var gvjs_Qe = gvjs_Ae;
gvjs_le.createTimeZone = gvjs_me;

function gvjs_Re(a) {
    return function() {
        return a
    }
}
var gvjs_Baa = gvjs_Re(!0),
    gvjs_Se = gvjs_Re(null);

function gvjs_Te(a) {
    return a
}

function gvjs_Caa(a) {
    var b = b || 0;
    return function() {
        return a.apply(this, Array.prototype.slice.call(arguments, 0, b))
    }
}

function gvjs_Ue() {
    return function() {
        return !gvjs_7b.apply(this, arguments)
    }
};
var gvjs_Ve = "StopIteration" in gvjs_g ? gvjs_g.StopIteration : {
    message: "StopIteration",
    stack: ""
};

function gvjs_We() {}
gvjs_We.prototype.next = function() {
    throw gvjs_Ve;
};
gvjs_We.prototype.Tr = function() {
    return this
};

function gvjs_Xe(a) {
    if (a instanceof gvjs_We) return a;
    if (typeof a.Tr == gvjs_c) return a.Tr(!1);
    if (gvjs_9b(a)) {
        var b = 0,
            c = new gvjs_We;
        c.next = function() {
            for (;;) {
                if (b >= a.length) throw gvjs_Ve;
                if (b in a) return a[b++];
                b++
            }
        };
        return c
    }
    throw Error("Not implemented");
}

function gvjs_Ye(a, b, c) {
    if (gvjs_9b(a)) try {
        gvjs_q(a, b, c)
    } catch (d) {
        if (d !== gvjs_Ve) throw d;
    } else {
        a = gvjs_Xe(a);
        try {
            for (;;) b.call(c, a.next(), void 0, a)
        } catch (d) {
            if (d !== gvjs_Ve) throw d;
        }
    }
}

function gvjs_Ze(a, b, c) {
    var d = 0,
        e = a,
        f = c || 1;
    1 < arguments.length && (d = a, e = b);
    if (0 == f) throw Error("Range step argument must not be zero");
    var g = new gvjs_We;
    g.next = function() {
        if (0 < f && d >= e || 0 > f && d <= e) throw gvjs_Ve;
        var a = d;
        d += f;
        return a
    };
    return g
}

function gvjs__e(a, b, c) {
    var d = gvjs_Xe(a);
    a = new gvjs_We;
    a.next = function() {
        var a = d.next();
        return b.call(c, a, void 0, d)
    };
    return a
}

function gvjs_Daa(a, b) {
    a = gvjs_Xe(a);
    try {
        for (;;)
            if (b.call(void 0, a.next(), void 0, a)) return !0
    } catch (c) {
        if (c !== gvjs_Ve) throw c;
    }
    return !1
}

function gvjs_0e(a) {
    return gvjs_Eaa(arguments)
}

function gvjs_Eaa(a) {
    var b = gvjs_Xe(a);
    a = new gvjs_We;
    var c = null;
    a.next = function() {
        for (;;) {
            if (null == c) {
                var a = b.next();
                c = gvjs_Xe(a)
            }
            try {
                return c.next()
            } catch (e) {
                if (e !== gvjs_Ve) throw e;
                c = null
            }
        }
    };
    return a
}

function gvjs_1e(a) {
    if (gvjs_9b(a)) return gvjs_4c(a);
    a = gvjs_Xe(a);
    var b = [];
    gvjs_Ye(a, function(a) {
        b.push(a)
    });
    return b
}

function gvjs_Faa(a) {
    try {
        return gvjs_Xe(a).next()
    } catch (b) {
        if (b != gvjs_Ve) throw b;
        return null
    }
};

function gvjs_2e(a, b) {
    this.ib = {};
    this.$d = [];
    this.OA = this.Xb = 0;
    var c = arguments.length;
    if (1 < c) {
        if (c % 2) throw Error(gvjs_Ya);
        for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
    } else a && this.addAll(a)
}
gvjs_ = gvjs_2e.prototype;
gvjs_.Eb = function() {
    return this.Xb
};
gvjs_.Ha = function() {
    gvjs_3e(this);
    for (var a = [], b = 0; b < this.$d.length; b++) a.push(this.ib[this.$d[b]]);
    return a
};
gvjs_.bk = function() {
    gvjs_3e(this);
    return this.$d.concat()
};
gvjs_.Ce = function(a) {
    return gvjs_4e(this.ib, a)
};
gvjs_.CG = function(a) {
    for (var b = 0; b < this.$d.length; b++) {
        var c = this.$d[b];
        if (gvjs_4e(this.ib, c) && this.ib[c] == a) return !0
    }
    return !1
};
gvjs_.equals = function(a, b) {
    if (this === a) return !0;
    if (this.Xb != a.Eb()) return !1;
    b = b || gvjs_Gaa;
    gvjs_3e(this);
    for (var c, d = 0; c = this.$d[d]; d++)
        if (!b(this.get(c), a.get(c))) return !1;
    return !0
};

function gvjs_Gaa(a, b) {
    return a === b
}
gvjs_.isEmpty = function() {
    return 0 == this.Xb
};
gvjs_.clear = function() {
    this.ib = {};
    this.OA = this.Xb = this.$d.length = 0
};
gvjs_.remove = function(a) {
    return gvjs_4e(this.ib, a) ? (delete this.ib[a], this.Xb--, this.OA++, this.$d.length > 2 * this.Xb && gvjs_3e(this), !0) : !1
};

function gvjs_3e(a) {
    var b, c;
    if (a.Xb != a.$d.length) {
        for (b = c = 0; c < a.$d.length;) {
            var d = a.$d[c];
            gvjs_4e(a.ib, d) && (a.$d[b++] = d);
            c++
        }
        a.$d.length = b
    }
    if (a.Xb != a.$d.length) {
        var e = {};
        for (b = c = 0; c < a.$d.length;) d = a.$d[c], gvjs_4e(e, d) || (a.$d[b++] = d, e[d] = 1), c++;
        a.$d.length = b
    }
}
gvjs_.get = function(a, b) {
    return gvjs_4e(this.ib, a) ? this.ib[a] : b
};
gvjs_.set = function(a, b) {
    gvjs_4e(this.ib, a) || (this.Xb++, this.$d.push(a), this.OA++);
    this.ib[a] = b
};
gvjs_.addAll = function(a) {
    if (a instanceof gvjs_2e) {
        var b = a.bk();
        a = a.Ha()
    } else b = gvjs_8d(a), a = gvjs_7d(a);
    for (var c = 0; c < b.length; c++) this.set(b[c], a[c])
};
gvjs_.forEach = function(a, b) {
    for (var c = this.bk(), d = 0; d < c.length; d++) {
        var e = c[d],
            f = this.get(e);
        a.call(b, f, e, this)
    }
};
gvjs_.clone = function() {
    return new gvjs_2e(this)
};
gvjs_.transpose = function() {
    for (var a = new gvjs_2e, b = 0; b < this.$d.length; b++) {
        var c = this.$d[b];
        a.set(this.ib[c], c)
    }
    return a
};
gvjs_.Tr = function(a) {
    gvjs_3e(this);
    var b = 0,
        c = this.OA,
        d = this,
        e = new gvjs_We;
    e.next = function() {
        if (c != d.OA) throw Error("The map has changed since the iterator was created");
        if (b >= d.$d.length) throw gvjs_Ve;
        var e = d.$d[b++];
        return a ? e : d.ib[e]
    };
    return e
};

function gvjs_4e(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b)
};

function gvjs_5e(a) {
    return a.Eb && typeof a.Eb == gvjs_c ? a.Eb() : gvjs_9b(a) || gvjs_i(a) ? a.length : gvjs_5d(a)
}

function gvjs_6e(a) {
    if (a.Ha && typeof a.Ha == gvjs_c) return a.Ha();
    if (gvjs_i(a)) return a.split("");
    if (gvjs_9b(a)) {
        for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
        return b
    }
    return gvjs_7d(a)
}

function gvjs_7e(a) {
    if (a.bk && typeof a.bk == gvjs_c) return a.bk();
    if (!a.Ha || typeof a.Ha != gvjs_c) {
        if (gvjs_9b(a) || gvjs_i(a)) {
            var b = [];
            a = a.length;
            for (var c = 0; c < a; c++) b.push(c);
            return b
        }
        return gvjs_8d(a)
    }
}

function gvjs_8e(a, b, c) {
    if (a.forEach && typeof a.forEach == gvjs_c) a.forEach(b, c);
    else if (gvjs_9b(a) || gvjs_i(a)) gvjs_q(a, b, c);
    else
        for (var d = gvjs_7e(a), e = gvjs_6e(a), f = e.length, g = 0; g < f; g++) b.call(c, e[g], d && d[g], a)
}

function gvjs_9e(a, b, c) {
    if (typeof a.map == gvjs_c) return a.map(b, c);
    if (gvjs_9b(a) || gvjs_i(a)) return gvjs_r(a, b, c);
    var d = gvjs_7e(a),
        e = gvjs_6e(a),
        f = e.length;
    if (d) {
        var g = {};
        for (var h = 0; h < f; h++) g[d[h]] = b.call(c, e[h], d[h], a)
    } else
        for (g = [], h = 0; h < f; h++) g[h] = b.call(c, e[h], void 0, a);
    return g
}

function gvjs_$e(a, b, c) {
    if (typeof a.every == gvjs_c) return a.every(b, c);
    if (gvjs_9b(a) || gvjs_i(a)) return gvjs_Sc(a, b, c);
    for (var d = gvjs_7e(a), e = gvjs_6e(a), f = e.length, g = 0; g < f; g++)
        if (!b.call(c, e[g], d && d[g], a)) return !1;
    return !0
};

function gvjs_u(a) {
    this.ib = new gvjs_2e;
    a && this.addAll(a)
}

function gvjs_af(a) {
    var b = typeof a;
    return b == gvjs_tb && a || b == gvjs_c ? "o" + gvjs_ac(a) : b.substr(0, 1) + a
}
gvjs_ = gvjs_u.prototype;
gvjs_.Eb = function() {
    return this.ib.Eb()
};
gvjs_.add = function(a) {
    this.ib.set(gvjs_af(a), a)
};
gvjs_.addAll = function(a) {
    a = gvjs_6e(a);
    for (var b = a.length, c = 0; c < b; c++) this.add(a[c])
};
gvjs_.removeAll = function(a) {
    a = gvjs_6e(a);
    for (var b = a.length, c = 0; c < b; c++) this.remove(a[c])
};
gvjs_.remove = function(a) {
    return this.ib.remove(gvjs_af(a))
};
gvjs_.clear = function() {
    this.ib.clear()
};
gvjs_.isEmpty = function() {
    return this.ib.isEmpty()
};
gvjs_.contains = function(a) {
    return this.ib.Ce(gvjs_af(a))
};
gvjs_.LC = function(a) {
    var b = new gvjs_u;
    a = gvjs_6e(a);
    for (var c = 0; c < a.length; c++) {
        var d = a[c];
        this.contains(d) && b.add(d)
    }
    return b
};
gvjs_.Rk = function(a) {
    var b = this.clone();
    b.removeAll(a);
    return b
};
gvjs_.Ha = function() {
    return this.ib.Ha()
};
gvjs_.clone = function() {
    return new gvjs_u(this)
};
gvjs_.equals = function(a) {
    return this.Eb() == gvjs_5e(a) && this.QC(a)
};
gvjs_.QC = function(a) {
    var b = gvjs_5e(a);
    if (this.Eb() > b) return !1;
    !(a instanceof gvjs_u) && 5 < b && (a = new gvjs_u(a));
    return gvjs_$e(this, function(b) {
        var c = a;
        return c.contains && typeof c.contains == gvjs_c ? c.contains(b) : c.CG && typeof c.CG == gvjs_c ? c.CG(b) : gvjs_9b(c) || gvjs_i(c) ? gvjs_Wc(c, b) : gvjs_$d(c, b)
    })
};
gvjs_.Tr = function() {
    return this.ib.Tr(!1)
};

function gvjs_bf(a) {
    return /^\s*$/.test(a) ? !1 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))
}

function gvjs_cf(a) {
    a = String(a);
    if (gvjs_bf(a)) try {
        return eval("(" + a + ")")
    } catch (b) {}
    throw Error("Invalid JSON string: " + a);
}

function gvjs_df(a, b) {
    return (new gvjs_ef(b)).pe(a)
}

function gvjs_ef(a) {
    this.zR = a
}
gvjs_ef.prototype.pe = function(a) {
    var b = [];
    gvjs_ff(this, a, b);
    return b.join("")
};

function gvjs_ff(a, b, c) {
    if (null == b) c.push(gvjs_rb);
    else {
        if (typeof b == gvjs_tb) {
            if (gvjs_l(b)) {
                var d = b;
                b = d.length;
                c.push("[");
                for (var e = "", f = 0; f < b; f++) c.push(e), e = d[f], gvjs_ff(a, a.zR ? a.zR.call(d, String(f), e) : e, c), e = ",";
                c.push("]");
                return
            }
            if (b instanceof String || b instanceof Number || b instanceof Boolean) b = b.valueOf();
            else {
                c.push("{");
                f = "";
                for (d in b) Object.prototype.hasOwnProperty.call(b, d) && (e = b[d], typeof e != gvjs_c && (c.push(f), gvjs_gf(d, c), c.push(":"), gvjs_ff(a, a.zR ? a.zR.call(b, d, e) : e, c), f = ","));
                c.push("}");
                return
            }
        }
        switch (typeof b) {
            case gvjs_f:
                gvjs_gf(b, c);
                break;
            case gvjs_e:
                c.push(isFinite(b) && !isNaN(b) ? String(b) : gvjs_rb);
                break;
            case gvjs_8a:
                c.push(String(b));
                break;
            case gvjs_c:
                c.push(gvjs_rb);
                break;
            default:
                throw Error("Unknown type: " + typeof b);
        }
    }
}
var gvjs_hf = {
        '"': '\\"',
        "\\": "\\\\",
        "/": "\\/",
        "\b": "\\b",
        "\f": "\\f",
        "\n": "\\n",
        "\r": "\\r",
        "\t": "\\t",
        "\x0B": "\\u000b"
    },
    gvjs_Haa = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;

function gvjs_gf(a, b) {
    b.push('"', a.replace(gvjs_Haa, function(a) {
        var b = gvjs_hf[a];
        b || (b = "\\u" + (a.charCodeAt(0) | 65536).toString(16).substr(1), gvjs_hf[a] = b);
        return b
    }), '"')
};
var gvjs_if = gvjs_g.JSON && gvjs_g.JSON.parse || gvjs_cf,
    gvjs_jf = gvjs_g.JSON && gvjs_g.JSON.stringify || gvjs_df;

function gvjs_kf(a) {
    return gvjs_df(gvjs_lf(a, gvjs_mf))
}

function gvjs_nf(a) {
    gvjs_cf(a);
    return gvjs_of(a)
}

function gvjs_of(a) {
    if (gvjs_pf) return JSON.parse(a);
    a = eval("(" + a + ")");
    return gvjs_qf(a)
}

function gvjs_lf(a, b) {
    a = b(a);
    var c = gvjs_6b(a);
    if (c == gvjs_tb || c == gvjs_3a) {
        c = c == gvjs_3a ? [] : {};
        for (var d in a)
            if (!gvjs_Ac(d, "___clazz$") && a.hasOwnProperty(d)) {
                var e = gvjs_lf(a[d], b);
                gvjs_h(e) && (c[d] = e)
            }
    } else c = a;
    return c
}

function gvjs_qf(a) {
    if (gvjs_i(a)) return gvjs_Iaa(a);
    if (gvjs_l(a)) return gvjs_r(a, gvjs_qf);
    gvjs_m(a) && gvjs_s(a, function(b, c) {
        Object.prototype.hasOwnProperty.call(a, c) && (a[c] = gvjs_qf(b))
    });
    return a
}

function gvjs_Iaa(a) {
    var b = a.match(/^Date\(\s*([\d,\s]*)\)$/);
    return b ? (a = b[1].split(/,\s*/), 1 == a.length ? new Date(Number(a[0]) || 0) : new Date(Number(a[0]) || 0, Number(a[1]) || 0, Number(a[2]) || 1, Number(a[3]) || 0, Number(a[4]) || 0, Number(a[5]) || 0, Number(a[6]) || 0)) : a
}

function gvjs_mf(a) {
    gvjs_$b(a) && (a = 0 !== a.getMilliseconds() ? [a.getFullYear(), a.getMonth(), a.getDate(), a.getHours(), a.getMinutes(), a.getSeconds(), a.getMilliseconds()] : 0 !== a.getSeconds() || 0 !== a.getMinutes() || 0 !== a.getHours() ? [a.getFullYear(), a.getMonth(), a.getDate(), a.getHours(), a.getMinutes(), a.getSeconds()] : [a.getFullYear(), a.getMonth(), a.getDate()], a = "Date(" + a.join(gvjs_ha) + ")");
    return a
}
var gvjs_pf = !1;

function gvjs_v(a, b) {
    this.x = gvjs_h(a) ? a : 0;
    this.y = gvjs_h(b) ? b : 0
}
gvjs_ = gvjs_v.prototype;
gvjs_.clone = function() {
    return new gvjs_v(this.x, this.y)
};
gvjs_.equals = function(a) {
    return a instanceof gvjs_v && gvjs_rf(this, a)
};

function gvjs_rf(a, b) {
    return a == b ? !0 : a && b ? a.x == b.x && a.y == b.y : !1
}

function gvjs_sf(a, b) {
    var c = a.x - b.x;
    a = a.y - b.y;
    return Math.sqrt(c * c + a * a)
}

function gvjs_tf(a, b) {
    return new gvjs_v(a.x - b.x, a.y - b.y)
}

function gvjs_uf(a, b) {
    return new gvjs_v(a.x + b.x, a.y + b.y)
}
gvjs_.ceil = function() {
    this.x = Math.ceil(this.x);
    this.y = Math.ceil(this.y);
    return this
};
gvjs_.floor = function() {
    this.x = Math.floor(this.x);
    this.y = Math.floor(this.y);
    return this
};
gvjs_.round = function() {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    return this
};
gvjs_.translate = function(a, b) {
    a instanceof gvjs_v ? (this.x += a.x, this.y += a.y) : (this.x += Number(a), gvjs_j(b) && (this.y += b));
    return this
};
gvjs_.scale = function(a, b) {
    b = gvjs_j(b) ? b : a;
    this.x *= a;
    this.y *= b;
    return this
};

function gvjs_w(a, b, c, d) {
    this.top = a;
    this.right = b;
    this.bottom = c;
    this.left = d
}
gvjs_ = gvjs_w.prototype;
gvjs_.zb = function() {
    return this.right - this.left
};
gvjs_.getHeight = function() {
    return this.bottom - this.top
};
gvjs_.clone = function() {
    return new gvjs_w(this.top, this.right, this.bottom, this.left)
};
gvjs_.contains = function(a) {
    return this && a ? a instanceof gvjs_w ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
};
gvjs_.expand = function(a, b, c, d) {
    gvjs_m(a) ? (this.top -= a.top, this.right += a.right, this.bottom += a.bottom, this.left -= a.left) : (this.top -= a, this.right += Number(b), this.bottom += Number(c), this.left -= Number(d));
    return this
};

function gvjs_vf(a, b) {
    a.left = Math.min(a.left, b.left);
    a.top = Math.min(a.top, b.top);
    a.right = Math.max(a.right, b.right);
    a.bottom = Math.max(a.bottom, b.bottom)
}

function gvjs_wf(a, b) {
    return a.left <= b.right && b.left <= a.right && a.top <= b.bottom && b.top <= a.bottom
}
gvjs_.ceil = function() {
    this.top = Math.ceil(this.top);
    this.right = Math.ceil(this.right);
    this.bottom = Math.ceil(this.bottom);
    this.left = Math.ceil(this.left);
    return this
};
gvjs_.floor = function() {
    this.top = Math.floor(this.top);
    this.right = Math.floor(this.right);
    this.bottom = Math.floor(this.bottom);
    this.left = Math.floor(this.left);
    return this
};
gvjs_.round = function() {
    this.top = Math.round(this.top);
    this.right = Math.round(this.right);
    this.bottom = Math.round(this.bottom);
    this.left = Math.round(this.left);
    return this
};
gvjs_.translate = function(a, b) {
    a instanceof gvjs_v ? (this.left += a.x, this.right += a.x, this.top += a.y, this.bottom += a.y) : (this.left += a, this.right += a, gvjs_j(b) && (this.top += b, this.bottom += b));
    return this
};
gvjs_.scale = function(a, b) {
    b = gvjs_j(b) ? b : a;
    this.left *= a;
    this.right *= a;
    this.top *= b;
    this.bottom *= b;
    return this
};

function gvjs_x(a, b) {
    this.start = a < b ? a : b;
    this.end = a < b ? b : a
}
gvjs_x.prototype.clone = function() {
    return new gvjs_x(this.start, this.end)
};
gvjs_x.prototype.getLength = function() {
    return this.end - this.start
};

function gvjs_xf(a, b) {
    a.start = Math.min(a.start, b);
    a.end = Math.max(a.end, b)
}

function gvjs_yf(a, b) {
    return Math.max(a.start, b.start) <= Math.min(a.end, b.end)
}

function gvjs_zf(a, b) {
    return a.start <= b && a.end >= b
};
var gvjs_Jaa = {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    command: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
};

function gvjs_Af() {
    this.OS = "";
    this.Qia = gvjs_Bf
}
gvjs_Af.prototype.Gq = !0;
gvjs_Af.prototype.el = function() {
    return this.OS
};
gvjs_Af.prototype.toString = function() {
    return "Const{" + this.OS + "}"
};

function gvjs_Cf(a) {
    return a instanceof gvjs_Af && a.constructor === gvjs_Af && a.Qia === gvjs_Bf ? a.OS : "type_error:Const"
}
var gvjs_Bf = {};

function gvjs_Df(a) {
    var b = new gvjs_Af;
    b.OS = a;
    return b
}
gvjs_Df("");
var gvjs_Kaa = /<[^>]*>|&[^;]+;/g;

function gvjs_Ef(a, b) {
    return b ? a.replace(gvjs_Kaa, "") : a
}
var gvjs_Laa = /[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]/,
    gvjs_Maa = /^[^A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]*[\u0591-\u06ef\u06fa-\u07ff\u200f\ufb1d-\ufdff\ufe70-\ufefc]/,
    gvjs_Naa = /^http:\/\/.*/,
    gvjs_Oaa = /^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Arab|Hebr|Thaa|Nkoo|Tfng))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i,
    gvjs_Paa = /\s+/,
    gvjs_Qaa = /[\d\u06f0-\u06f9]/;

function gvjs_Ff(a, b) {
    var c = 0,
        d = 0,
        e = !1;
    a = gvjs_Ef(a, b).split(gvjs_Paa);
    for (b = 0; b < a.length; b++) {
        var f = a[b];
        gvjs_Maa.test(gvjs_Ef(f, void 0)) ? (c++, d++) : gvjs_Naa.test(f) ? e = !0 : gvjs_Laa.test(gvjs_Ef(f, void 0)) ? d++ : gvjs_Qaa.test(f) && (e = !0)
    }
    return 0 == d ? e ? 1 : 0 : .4 < c / d ? -1 : 1
};

function gvjs_Gf() {
    this.H0 = "";
    this.Wia = gvjs_Hf
}
gvjs_Gf.prototype.Gq = !0;
gvjs_Gf.prototype.el = function() {
    return this.H0
};
gvjs_Gf.prototype.RY = !0;
gvjs_Gf.prototype.qv = function() {
    return 1
};

function gvjs_If(a) {
    if (a instanceof gvjs_Gf && a.constructor === gvjs_Gf && a.Wia === gvjs_Hf) return a.H0;
    gvjs_6b(a);
    return "type_error:TrustedResourceUrl"
}

function gvjs_Jf(a, b) {
    a = gvjs_Raa(a, b);
    return gvjs_Kf(a)
}

function gvjs_Raa(a, b) {
    var c = gvjs_Cf(a);
    if (!gvjs_Saa.test(c)) throw Error("Invalid TrustedResourceUrl format: " + c);
    return c.replace(gvjs_Taa, function(a, e) {
        if (!Object.prototype.hasOwnProperty.call(b, e)) throw Error('Found marker, "' + e + '", in format string, "' + c + '", but no valid label mapping found in args: ' + JSON.stringify(b));
        a = b[e];
        return a instanceof gvjs_Af ? gvjs_Cf(a) : encodeURIComponent(String(a))
    })
}
var gvjs_Taa = /%{(\w+)}/g,
    gvjs_Saa = /^(?:https:)?\/\/[0-9a-z.:[\]-]+\/|^\/[^\/\\]|^about:blank(#|$)/i,
    gvjs_Hf = {};

function gvjs_Kf(a) {
    var b = new gvjs_Gf;
    b.H0 = a;
    return b
};

function gvjs_Lf() {
    this.Vz = "";
    this.zia = gvjs_Mf
}
gvjs_Lf.prototype.Gq = !0;
gvjs_Lf.prototype.el = function() {
    return this.Vz
};
gvjs_Lf.prototype.RY = !0;
gvjs_Lf.prototype.qv = function() {
    return 1
};

function gvjs_Nf(a) {
    if (a instanceof gvjs_Lf && a.constructor === gvjs_Lf && a.zia === gvjs_Mf) return a.Vz;
    gvjs_6b(a);
    return "type_error:SafeUrl"
}
var gvjs_Of = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;

function gvjs_Pf(a) {
    if (a instanceof gvjs_Lf) return a;
    a = a.Gq ? a.el() : String(a);
    gvjs_Of.test(a) || (a = gvjs_2a);
    return gvjs_Qf(a)
}
var gvjs_Mf = {};

function gvjs_Qf(a) {
    var b = new gvjs_Lf;
    b.Vz = a;
    return b
}
gvjs_Qf("about:blank");

function gvjs_Rf() {
    this.G0 = "";
    this.yia = gvjs_Sf
}
gvjs_Rf.prototype.Gq = !0;
var gvjs_Sf = {};
gvjs_Rf.prototype.el = function() {
    return this.G0
};

function gvjs_Tf(a) {
    if (a instanceof gvjs_Rf && a.constructor === gvjs_Rf && a.yia === gvjs_Sf) return a.G0;
    gvjs_6b(a);
    return "type_error:SafeStyle"
}
gvjs_Rf.prototype.Jq = function(a) {
    this.G0 = a;
    return this
};
var gvjs_Uf = (new gvjs_Rf).Jq("");

function gvjs_Vf(a) {
    var b = "",
        c;
    for (c in a) {
        if (!/^[-_a-zA-Z0-9]+$/.test(c)) throw Error("Name allows only [-_a-zA-Z0-9], got: " + c);
        var d = a[c];
        if (null != d) {
            if (d instanceof gvjs_Af) d = gvjs_Cf(d);
            else {
                d = String(d);
                var e = d.replace(gvjs_Uaa, "$1").replace(gvjs_Wf, "url");
                if (gvjs_Vaa.test(e)) {
                    for (var f = e = !0, g = 0; g < d.length; g++) {
                        var h = d.charAt(g);
                        "'" == h && f ? e = !e : '"' == h && e && (f = !f)
                    }
                    d = e && f ? gvjs_Waa(d) : "zClosurez"
                } else d = "zClosurez"
            }
            b += c + ":" + d + ";"
        }
    }
    return b ? (new gvjs_Rf).Jq(b) : gvjs_Uf
}
var gvjs_Vaa = /^[-,."'%_!# a-zA-Z0-9]+$/,
    gvjs_Wf = /\b(url\([ \t\n]*)('[ -&(-\[\]-~]*'|"[ !#-\[\]-~]*"|[!#-&*-\[\]-~]*)([ \t\n]*\))/g,
    gvjs_Uaa = /\b(hsl|hsla|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?)\([-0-9a-z.%, ]+\)/g;

function gvjs_Waa(a) {
    return a.replace(gvjs_Wf, function(a, c, d, e) {
        var b = "";
        d = d.replace(/^(['"])(.*)\1$/, function(a, c, d) {
            b = c;
            return d
        });
        a = gvjs_Pf(d).el();
        return c + b + a + b + e
    })
};

function gvjs_Xf() {
    this.F0 = "";
    this.xia = gvjs_Yf
}
gvjs_Xf.prototype.Gq = !0;
var gvjs_Yf = {};

function gvjs_Zf(a, b) {
    if (gvjs_Ac(a, "<")) throw Error("Selector does not allow '<', got: " + a);
    var c = a.replace(/('|")((?!\1)[^\r\n\f\\]|\\[\s\S])*\1/g, "");
    if (!/^[-_a-zA-Z0-9#.:* ,>+~[\]()=^$|]+$/.test(c)) throw Error("Selector allows only [-_a-zA-Z0-9#.:* ,>+~[\\]()=^$|] and strings, got: " + a);
    a: {
        for (var d = {
                "(": ")",
                "[": "]"
            }, e = [], f = 0; f < c.length; f++) {
            var g = c[f];
            if (d[g]) e.push(d[g]);
            else if (gvjs_$d(d, g) && e.pop() != g) {
                c = !1;
                break a
            }
        }
        c = 0 == e.length
    }
    if (!c) throw Error("() and [] in selector must be balanced, got: " +
        a);
    b instanceof gvjs_Rf || (b = gvjs_Vf(b));
    a = a + "{" + gvjs_Tf(b) + "}";
    return (new gvjs_Xf).Jq(a)
}

function gvjs_Xaa(a) {
    function b(a) {
        gvjs_l(a) ? gvjs_q(a, b) : c += gvjs__f(a)
    }
    var c = "";
    gvjs_q(arguments, b);
    return (new gvjs_Xf).Jq(c)
}
gvjs_Xf.prototype.el = function() {
    return this.F0
};

function gvjs__f(a) {
    if (a instanceof gvjs_Xf && a.constructor === gvjs_Xf && a.xia === gvjs_Yf) return a.F0;
    gvjs_6b(a);
    return "type_error:SafeStyleSheet"
}
gvjs_Xf.prototype.Jq = function(a) {
    this.F0 = a;
    return this
};
var gvjs_0f;
a: {
    var gvjs_1f = gvjs_g.navigator;
    if (gvjs_1f) {
        var gvjs_2f = gvjs_1f.userAgent;
        if (gvjs_2f) {
            gvjs_0f = gvjs_2f;
            break a
        }
    }
    gvjs_0f = ""
}

function gvjs_3f(a) {
    return gvjs_Ac(gvjs_0f, a)
};

function gvjs_4f() {
    return (gvjs_3f("Chrome") || gvjs_3f("CriOS")) && !gvjs_3f(gvjs_ra)
};

function gvjs_5f() {
    this.Vz = "";
    this.wia = gvjs_6f;
    this.S7 = null
}
gvjs_5f.prototype.RY = !0;
gvjs_5f.prototype.qv = function() {
    return this.S7
};
gvjs_5f.prototype.Gq = !0;
gvjs_5f.prototype.el = function() {
    return this.Vz
};

function gvjs_7f(a) {
    if (a instanceof gvjs_5f && a.constructor === gvjs_5f && a.wia === gvjs_6f) return a.Vz;
    gvjs_6b(a);
    return "type_error:SafeHtml"
}

function gvjs_8f(a) {
    if (a instanceof gvjs_5f) return a;
    var b = null;
    a.RY && (b = a.qv());
    return gvjs_9f(gvjs_sc(a.Gq ? a.el() : String(a)), b)
}

function gvjs_$f(a) {
    if (a instanceof gvjs_5f) return a;
    a = gvjs_8f(a);
    var b = gvjs_7f(a).replace(/(\r\n|\r|\n)/g, gvjs_ka);
    return gvjs_9f(b, a.qv())
}
var gvjs_ag = /^[a-zA-Z0-9-]+$/,
    gvjs_Yaa = {
        action: !0,
        cite: !0,
        data: !0,
        formaction: !0,
        href: !0,
        manifest: !0,
        poster: !0,
        src: !0
    },
    gvjs_Zaa = {
        APPLET: !0,
        BASE: !0,
        EMBED: !0,
        IFRAME: !0,
        LINK: !0,
        MATH: !0,
        META: !0,
        OBJECT: !0,
        SCRIPT: !0,
        STYLE: !0,
        SVG: !0,
        TEMPLATE: !0
    };

function gvjs_bg(a, b, c) {
    var d = String(a);
    if (!gvjs_ag.test(d)) throw Error("Invalid tag name <" + d + ">.");
    if (d.toUpperCase() in gvjs_Zaa) throw Error("Tag name <" + d + "> is not allowed for SafeHtml.");
    a = String(a);
    d = null;
    var e = "<" + a,
        f = "";
    if (b)
        for (l in b) {
            if (!gvjs_ag.test(l)) throw Error('Invalid attribute name "' + l + '".');
            var g = b[l];
            if (null != g) {
                var h = a;
                var k = l;
                if (g instanceof gvjs_Af) g = gvjs_Cf(g);
                else if (k.toLowerCase() == gvjs_Hb) {
                    if (!gvjs_m(g)) throw Error('The "style" attribute requires goog.html.SafeStyle or map of style properties, ' +
                        typeof g + " given: " + g);
                    g instanceof gvjs_Rf || (g = gvjs_Vf(g));
                    g = gvjs_Tf(g)
                } else {
                    if (/^on/i.test(k)) throw Error('Attribute "' + k + '" requires goog.string.Const value, "' + g + '" given.');
                    if (k.toLowerCase() in gvjs_Yaa)
                        if (g instanceof gvjs_Gf) g = gvjs_If(g);
                        else if (g instanceof gvjs_Lf) g = gvjs_Nf(g);
                    else if (gvjs_i(g)) g = gvjs_Pf(g).el();
                    else throw Error('Attribute "' + k + '" on tag "' + h + '" requires goog.html.SafeUrl, goog.string.Const, or string, value "' + g + '" given.');
                }
                g.Gq && (g = g.el());
                k = k + '="' + gvjs_sc(String(g)) +
                    '"';
                f += " " + k
            }
        }
    var l = e + f;
    null != c ? gvjs_l(c) || (c = [c]) : c = [];
    !0 === gvjs_Jaa[a.toLowerCase()] ? l += ">" : (c = gvjs_cg(c), l += ">" + gvjs_7f(c) + "</" + a + ">", d = c.qv());
    (b = b && b.dir) && (d = /^(ltr|rtl|auto)$/i.test(b) ? 0 : null);
    return gvjs_9f(l, d)
}

function gvjs_cg(a) {
    function b(a) {
        gvjs_l(a) ? gvjs_q(a, b) : (a = gvjs_8f(a), d += gvjs_7f(a), a = a.qv(), 0 == c ? c = a : 0 != a && c != a && (c = null))
    }
    var c = 0,
        d = "";
    gvjs_q(arguments, b);
    return gvjs_9f(d, c)
}
var gvjs_6f = {};

function gvjs_9f(a, b) {
    return (new gvjs_5f).Jq(a, b)
}
gvjs_5f.prototype.Jq = function(a, b) {
    this.Vz = a;
    this.S7 = b;
    return this
};
gvjs_9f("<!DOCTYPE html>", 0);
var gvjs_dg = gvjs_9f("", 0),
    gvjs_eg = gvjs_9f(gvjs_ka, 0);

function gvjs_fg(a) {
    gvjs_gg();
    return gvjs_9f(a, null)
}
var gvjs_gg = gvjs_4b;

function gvjs_hg() {
    return gvjs_3f("iPhone") && !gvjs_3f("iPod") && !gvjs_3f("iPad")
}

function gvjs_ig() {
    return gvjs_hg() || gvjs_3f("iPad") || gvjs_3f("iPod")
};

function gvjs_jg(a) {
    gvjs_jg[" "](a);
    return a
}
gvjs_jg[" "] = gvjs_4b;

function gvjs_kg(a, b) {
    try {
        return gvjs_jg(a[b]), !0
    } catch (c) {}
    return !1
}

function gvjs__aa(a, b) {
    var c = gvjs_0aa;
    return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a)
};
var gvjs_lg = gvjs_3f("Opera"),
    gvjs_y = gvjs_3f("Trident") || gvjs_3f("MSIE"),
    gvjs_mg = gvjs_3f(gvjs_ra),
    gvjs_1aa = gvjs_mg || gvjs_y,
    gvjs_ng = gvjs_3f("Gecko") && !(gvjs_Ac(gvjs_0f.toLowerCase(), "webkit") && !gvjs_3f(gvjs_ra)) && !(gvjs_3f("Trident") || gvjs_3f("MSIE")) && !gvjs_3f(gvjs_ra),
    gvjs_og = gvjs_Ac(gvjs_0f.toLowerCase(), "webkit") && !gvjs_3f(gvjs_ra),
    gvjs_pg = gvjs_og && gvjs_3f("Mobile"),
    gvjs_qg = gvjs_3f("Macintosh"),
    gvjs_rg = gvjs_3f("Windows"),
    gvjs_sg = gvjs_3f("Linux") || gvjs_3f("CrOS"),
    gvjs_tg = gvjs_g.navigator || null;
gvjs_tg && gvjs_Ac(gvjs_tg.appVersion || "", "X11");
gvjs_3f("Android");
gvjs_hg();
gvjs_3f("iPad");
gvjs_3f("iPod");
gvjs_ig();

function gvjs_ug() {
    var a = gvjs_g.document;
    return a ? a.documentMode : void 0
}
var gvjs_vg;
a: {
    var gvjs_wg = "",
        gvjs_xg = function() {
            var a = gvjs_0f;
            if (gvjs_ng) return /rv\:([^\);]+)(\)|;)/.exec(a);
            if (gvjs_mg) return /Edge\/([\d\.]+)/.exec(a);
            if (gvjs_y) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
            if (gvjs_og) return /WebKit\/(\S+)/.exec(a);
            if (gvjs_lg) return /(?:Version)[ \/]?(\S+)/.exec(a)
        }();gvjs_xg && (gvjs_wg = gvjs_xg ? gvjs_xg[1] : "");
    if (gvjs_y) {
        var gvjs_yg = gvjs_ug();
        if (null != gvjs_yg && gvjs_yg > parseFloat(gvjs_wg)) {
            gvjs_vg = String(gvjs_yg);
            break a
        }
    }
    gvjs_vg = gvjs_wg
}
var gvjs_zg = gvjs_vg,
    gvjs_0aa = {};

function gvjs_Ag(a) {
    return gvjs__aa(a, function() {
        return 0 <= gvjs_Gc(gvjs_zg, a)
    })
}

function gvjs_Bg(a) {
    return Number(gvjs_2aa) >= a
}
var gvjs_Cg;
var gvjs_Dg = gvjs_g.document;
gvjs_Cg = gvjs_Dg && gvjs_y ? gvjs_ug() || ("CSS1Compat" == gvjs_Dg.compatMode ? parseInt(gvjs_zg, 10) : 5) : void 0;
var gvjs_2aa = gvjs_Cg;
var gvjs_3aa = !gvjs_y || gvjs_Bg(9),
    gvjs_4aa = !gvjs_ng && !gvjs_y || gvjs_y && gvjs_Bg(9) || gvjs_ng && gvjs_Ag("1.9.1"),
    gvjs_Eg = gvjs_y && !gvjs_Ag("9"),
    gvjs_5aa = gvjs_y || gvjs_lg || gvjs_og;

function gvjs_Fg(a, b) {
    a.innerHTML = gvjs_7f(b)
};

function gvjs_Gg(a, b, c) {
    return gvjs_9f(b, c || null)
};

function gvjs_z(a, b) {
    this.width = a;
    this.height = b
}

function gvjs_Hg(a, b) {
    return a == b ? !0 : a && b ? a.width == b.width && a.height == b.height : !1
}
gvjs_ = gvjs_z.prototype;
gvjs_.clone = function() {
    return new gvjs_z(this.width, this.height)
};

function gvjs_Ig(a) {
    return Math.min(a.width, a.height)
}
gvjs_.area = function() {
    return this.width * this.height
};
gvjs_.aspectRatio = function() {
    return this.width / this.height
};
gvjs_.isEmpty = function() {
    return !this.area()
};
gvjs_.ceil = function() {
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this
};
gvjs_.floor = function() {
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this
};
gvjs_.round = function() {
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this
};
gvjs_.scale = function(a, b) {
    b = gvjs_j(b) ? b : a;
    this.width *= a;
    this.height *= b;
    return this
};

function gvjs_Jg(a) {
    return a ? new gvjs_Kg(gvjs_Lg(a)) : gvjs_lc || (gvjs_lc = new gvjs_Kg)
}

function gvjs_Mg(a, b) {
    return gvjs_i(b) ? a.getElementById(b) : b
}

function gvjs_Ng(a, b, c) {
    return gvjs_Og(document, a, b, c)
}

function gvjs_Pg(a, b) {
    var c = b || document;
    return c.querySelectorAll && c.querySelector ? c.querySelectorAll("." + a) : gvjs_Og(document, "*", a, b)
}

function gvjs_Qg(a, b) {
    var c = b || document;
    if (c.getElementsByClassName) a = c.getElementsByClassName(a)[0];
    else {
        c = document;
        var d = b || c;
        a = d.querySelectorAll && d.querySelector && a ? d.querySelector("" + (a ? "." + a : "")) : gvjs_Og(c, "*", a, b)[0] || null
    }
    return a || null
}

function gvjs_Og(a, b, c, d) {
    a = d || a;
    var e = b && "*" != b ? String(b).toUpperCase() : "";
    if (a.querySelectorAll && a.querySelector && (e || c)) return a.querySelectorAll(e + (c ? "." + c : ""));
    if (c && a.getElementsByClassName) {
        d = a.getElementsByClassName(c);
        if (e) {
            a = {};
            for (var f = b = 0, g; g = d[f]; f++) e == g.nodeName && (a[b++] = g);
            a.length = b;
            return a
        }
        return d
    }
    d = a.getElementsByTagName(e || "*");
    if (c) {
        a = {};
        for (f = b = 0; g = d[f]; f++) e = g.className, typeof e.split == gvjs_c && gvjs_Wc(e.split(/\s+/), c) && (a[b++] = g);
        a.length = b;
        return a
    }
    return d
}

function gvjs_Rg(a, b) {
    gvjs_s(b, function(b, d) {
        b && b.Gq && (b = b.el());
        d == gvjs_Hb ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : gvjs_Sg.hasOwnProperty(d) ? a.setAttribute(gvjs_Sg[d], b) : gvjs_mc(d, "aria-") || gvjs_mc(d, "data-") ? a.setAttribute(d, b) : a[d] = b
    })
}
var gvjs_Sg = {
    cellpadding: "cellPadding",
    cellspacing: "cellSpacing",
    colspan: "colSpan",
    frameborder: "frameBorder",
    height: gvjs_mb,
    maxlength: "maxLength",
    nonce: "nonce",
    role: gvjs_zb,
    rowspan: "rowSpan",
    type: gvjs_Ob,
    usemap: "useMap",
    valign: "vAlign",
    width: gvjs_Rb
};

function gvjs_Tg(a) {
    a = a.document;
    a = gvjs_Ug(a) ? a.documentElement : a.body;
    return new gvjs_z(a.clientWidth, a.clientHeight)
}

function gvjs_Vg(a) {
    var b = gvjs_Wg(a);
    a = a.parentWindow || a.defaultView;
    return gvjs_y && gvjs_Ag("10") && a.pageYOffset != b.scrollTop ? new gvjs_v(b.scrollLeft, b.scrollTop) : new gvjs_v(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
}

function gvjs_Wg(a) {
    return a.scrollingElement ? a.scrollingElement : !gvjs_og && gvjs_Ug(a) ? a.documentElement : a.body || a.documentElement
}

function gvjs_Xg(a) {
    return a ? a.parentWindow || a.defaultView : window
}

function gvjs_A(a, b, c) {
    return gvjs_Yg(document, arguments)
}

function gvjs_Yg(a, b) {
    var c = String(b[0]),
        d = b[1];
    if (!gvjs_3aa && d && (d.name || d.type)) {
        c = ["<", c];
        d.name && c.push(' name="', gvjs_sc(d.name), '"');
        if (d.type) {
            c.push(' type="', gvjs_sc(d.type), '"');
            var e = {};
            gvjs_ie(e, d);
            delete e.type;
            d = e
        }
        c.push(">");
        c = c.join("")
    }
    c = a.createElement(c);
    d && (gvjs_i(d) ? c.className = d : gvjs_l(d) ? c.className = d.join(" ") : gvjs_Rg(c, d));
    2 < b.length && gvjs_Zg(a, c, b, 2);
    return c
}

function gvjs_Zg(a, b, c, d) {
    function e(c) {
        c && b.appendChild(gvjs_i(c) ? a.createTextNode(c) : c)
    }
    for (; d < c.length; d++) {
        var f = c[d];
        gvjs_9b(f) && !gvjs__g(f) ? gvjs_q(gvjs_6aa(f) ? gvjs_4c(f) : f, e) : e(f)
    }
}

function gvjs_0g(a) {
    return document.createElement(String(a))
}

function gvjs_1g(a, b) {
    var c = a.createElement(gvjs_a);
    gvjs_y ? (gvjs_Fg(c, gvjs_cg(gvjs_eg, b)), c.removeChild(c.firstChild)) : gvjs_Fg(c, b);
    if (1 == c.childNodes.length) c = c.removeChild(c.firstChild);
    else {
        for (a = a.createDocumentFragment(); c.firstChild;) a.appendChild(c.firstChild);
        c = a
    }
    return c
}

function gvjs_Ug(a) {
    return "CSS1Compat" == a.compatMode
}

function gvjs_2g(a) {
    if (1 != a.nodeType) return !1;
    switch (a.tagName) {
        case "APPLET":
        case "AREA":
        case "BASE":
        case "BR":
        case "COL":
        case "COMMAND":
        case "EMBED":
        case "FRAME":
        case "HR":
        case "IMG":
        case gvjs_xa:
        case gvjs_wa:
        case "ISINDEX":
        case "KEYGEN":
        case "LINK":
        case "NOFRAMES":
        case "NOSCRIPT":
        case "META":
        case gvjs_Ha:
        case "PARAM":
        case gvjs_Ka:
        case gvjs_Ma:
        case "STYLE":
        case "TRACK":
        case "WBR":
            return !1
    }
    return !0
}

function gvjs_3g(a, b) {
    gvjs_Zg(gvjs_Lg(a), a, arguments, 1)
}

function gvjs_4g(a) {
    for (var b; b = a.firstChild;) a.removeChild(b)
}

function gvjs_5g(a, b) {
    b.parentNode && b.parentNode.insertBefore(a, b)
}

function gvjs_6g(a, b) {
    b.parentNode && b.parentNode.insertBefore(a, b.nextSibling)
}

function gvjs_7g(a) {
    return a && a.parentNode ? a.parentNode.removeChild(a) : null
}

function gvjs_8g(a) {
    return gvjs_4aa && void 0 != a.children ? a.children : gvjs_Pc(a.childNodes, function(a) {
        return 1 == a.nodeType
    })
}

function gvjs_9g(a) {
    return gvjs_h(a.firstElementChild) ? a.firstElementChild : gvjs_$g(a.firstChild, !0)
}

function gvjs_ah(a) {
    return gvjs_h(a.nextElementSibling) ? a.nextElementSibling : gvjs_$g(a.nextSibling, !0)
}

function gvjs_$g(a, b) {
    for (; a && 1 != a.nodeType;) a = b ? a.nextSibling : a.previousSibling;
    return a
}

function gvjs__g(a) {
    return gvjs_m(a) && 0 < a.nodeType
}

function gvjs_bh(a) {
    return gvjs_m(a) && 1 == a.nodeType
}

function gvjs_ch(a) {
    var b;
    if (gvjs_5aa && !(gvjs_y && gvjs_Ag("9") && !gvjs_Ag("10") && gvjs_g.SVGElement && a instanceof gvjs_g.SVGElement) && (b = a.parentElement)) return b;
    b = a.parentNode;
    return gvjs_bh(b) ? b : null
}

function gvjs_dh(a, b) {
    if (!a || !b) return !1;
    if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
    if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
    for (; b && a != b;) b = b.parentNode;
    return b == a
}

function gvjs_7aa(a, b) {
    if (a == b) return 0;
    if (a.compareDocumentPosition) return a.compareDocumentPosition(b) & 2 ? 1 : -1;
    if (gvjs_y && !gvjs_Bg(9)) {
        if (9 == a.nodeType) return -1;
        if (9 == b.nodeType) return 1
    }
    if ("sourceIndex" in a || a.parentNode && "sourceIndex" in a.parentNode) {
        var c = 1 == a.nodeType,
            d = 1 == b.nodeType;
        if (c && d) return a.sourceIndex - b.sourceIndex;
        var e = a.parentNode,
            f = b.parentNode;
        return e == f ? gvjs_eh(a, b) : !c && gvjs_dh(e, b) ? -1 * gvjs_fh(a, b) : !d && gvjs_dh(f, a) ? gvjs_fh(b, a) : (c ? a.sourceIndex : e.sourceIndex) - (d ? b.sourceIndex :
            f.sourceIndex)
    }
    d = gvjs_Lg(a);
    c = d.createRange();
    c.selectNode(a);
    c.collapse(!0);
    a = d.createRange();
    a.selectNode(b);
    a.collapse(!0);
    return c.compareBoundaryPoints(gvjs_g.Range.START_TO_END, a)
}

function gvjs_fh(a, b) {
    var c = a.parentNode;
    if (c == b) return -1;
    for (; b.parentNode != c;) b = b.parentNode;
    return gvjs_eh(b, a)
}

function gvjs_eh(a, b) {
    for (; b = b.previousSibling;)
        if (b == a) return -1;
    return 1
}

function gvjs_Lg(a) {
    return 9 == a.nodeType ? a : a.ownerDocument || a.document
}

function gvjs_gh(a) {
    return a.contentDocument || a.contentWindow.document
}

function gvjs_hh(a, b) {
    if ("textContent" in a) a.textContent = b;
    else if (3 == a.nodeType) a.data = String(b);
    else if (a.firstChild && 3 == a.firstChild.nodeType) {
        for (; a.lastChild != a.firstChild;) a.removeChild(a.lastChild);
        a.firstChild.data = String(b)
    } else {
        gvjs_4g(a);
        var c = gvjs_Lg(a);
        a.appendChild(c.createTextNode(String(b)))
    }
}

function gvjs_ih(a) {
    if ("outerHTML" in a) return a.outerHTML;
    var b = gvjs_Lg(a).createElement(gvjs_a);
    b.appendChild(a.cloneNode(!0));
    return b.innerHTML
}

function gvjs_8aa(a, b) {
    var c = [];
    return gvjs_jh(a, b, c, !0) ? c[0] : void 0
}

function gvjs_jh(a, b, c, d) {
    if (null != a)
        for (a = a.firstChild; a;) {
            if (b(a) && (c.push(a), d) || gvjs_jh(a, b, c, d)) return !0;
            a = a.nextSibling
        }
    return !1
}
var gvjs_9aa = {
        SCRIPT: 1,
        STYLE: 1,
        HEAD: 1,
        IFRAME: 1,
        OBJECT: 1
    },
    gvjs_kh = {
        IMG: " ",
        BR: "\n"
    };

function gvjs_lh(a) {
    return gvjs_mh(a) && gvjs_nh(a)
}

function gvjs_oh(a, b) {
    b ? a.tabIndex = 0 : (a.tabIndex = -1, a.removeAttribute("tabIndex"))
}

function gvjs_mh(a) {
    return gvjs_y && !gvjs_Ag("9") ? (a = a.getAttributeNode(gvjs_Jb), null != a && a.specified) : a.hasAttribute(gvjs_Jb)
}

function gvjs_nh(a) {
    a = a.tabIndex;
    return gvjs_j(a) && 0 <= a && 32768 > a
}

function gvjs_ph(a) {
    if (gvjs_Eg && null !== a && "innerText" in a) a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n");
    else {
        var b = [];
        gvjs_qh(a, b, !0);
        a = b.join("")
    }
    a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
    a = a.replace(/\u200B/g, "");
    gvjs_Eg || (a = a.replace(/ +/g, " "));
    " " != a && (a = a.replace(/^\s*/, ""));
    return a
}

function gvjs_rh(a) {
    var b = [];
    gvjs_qh(a, b, !1);
    return b.join("")
}

function gvjs_qh(a, b, c) {
    if (!(a.nodeName in gvjs_9aa))
        if (3 == a.nodeType) c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
        else if (a.nodeName in gvjs_kh) b.push(gvjs_kh[a.nodeName]);
    else
        for (a = a.firstChild; a;) gvjs_qh(a, b, c), a = a.nextSibling
}

function gvjs_6aa(a) {
    if (a && typeof a.length == gvjs_e) {
        if (gvjs_m(a)) return typeof a.item == gvjs_c || typeof a.item == gvjs_f;
        if (gvjs_n(a)) return typeof a.item == gvjs_c
    }
    return !1
}

function gvjs_sh(a, b, c, d) {
    a && !c && (a = a.parentNode);
    for (c = 0; a && (null == d || c <= d);) {
        if (b(a)) return a;
        a = a.parentNode;
        c++
    }
    return null
}

function gvjs_th(a) {
    try {
        return a && a.activeElement
    } catch (b) {}
    return null
}

function gvjs_Kg(a) {
    this.od = a || gvjs_g.document || document
}
gvjs_ = gvjs_Kg.prototype;
gvjs_.Da = gvjs_Jg;
gvjs_.yc = function() {
    return this.od
};
gvjs_.j = function(a) {
    return gvjs_Mg(this.od, a)
};
gvjs_.getElementsByTagName = function(a, b) {
    return (b || this.od).getElementsByTagName(String(a))
};

function gvjs_uh(a, b, c, d) {
    return gvjs_Og(a.od, b, c, d)
}
gvjs_.bt = function(a, b) {
    return gvjs_Pg(a, b || this.od)
};
gvjs_.Ld = function(a, b) {
    return gvjs_Qg(a, b || this.od)
};
gvjs_.D9 = function(a, b) {
    return gvjs_Qg(a, b || this.od)
};
gvjs_.rl = gvjs_Rg;
gvjs_.G = function(a, b, c) {
    return gvjs_Yg(this.od, arguments)
};
gvjs_.createElement = function(a) {
    return this.od.createElement(String(a))
};
gvjs_.createTextNode = function(a) {
    return this.od.createTextNode(String(a))
};
gvjs_.s7 = function(a, b, c) {
    var d = this.od;
    c = !!c;
    for (var e = d.createElement(gvjs_Qa), f = e.appendChild(d.createElement(gvjs_Ra)), g = 0; g < a; g++) {
        for (var h = d.createElement(gvjs_Ua), k = 0; k < b; k++) {
            var l = d.createElement(gvjs_Sa);
            c && gvjs_hh(l, "\u00a0");
            h.appendChild(l)
        }
        f.appendChild(h)
    }
    return e
};
gvjs_.Aq = function() {
    var a = this.od;
    return a.parentWindow || a.defaultView
};
gvjs_.cC = function(a) {
    return gvjs_th(a || this.od)
};
gvjs_.appendChild = function(a, b) {
    a.appendChild(b)
};
gvjs_.append = gvjs_3g;
gvjs_.canHaveChildren = gvjs_2g;
gvjs_.sc = gvjs_4g;
gvjs_.gZ = gvjs_5g;
gvjs_.nra = gvjs_6g;
gvjs_.removeNode = gvjs_7g;
gvjs_.We = gvjs_8g;
gvjs_.v9 = gvjs_9g;

function gvjs_$aa(a) {
    return gvjs_h(a.lastElementChild) ? a.lastElementChild : gvjs_$g(a.lastChild, !1)
}
gvjs_.B9 = gvjs_ah;
gvjs_.cp = gvjs__g;
gvjs_.mZ = gvjs_bh;
gvjs_.qO = gvjs_ch;
gvjs_.contains = gvjs_dh;
gvjs_.koa = gvjs_Lg;
gvjs_.w9 = gvjs_gh;
gvjs_.Iea = gvjs_hh;

function gvjs_aba(a, b) {
    var c = [];
    gvjs_jh(a, b, c, !1);
    return c
}
gvjs_.st = function(a) {
    var b;
    (b = "A" == a.tagName || a.tagName == gvjs_xa || a.tagName == gvjs_Ta || a.tagName == gvjs_La || a.tagName == gvjs_na ? !a.disabled && (!gvjs_mh(a) || gvjs_nh(a)) : gvjs_lh(a)) && gvjs_y ? (a = !gvjs_n(a.getBoundingClientRect) || gvjs_y && null == a.parentElement ? {
        height: a.offsetHeight,
        width: a.offsetWidth
    } : a.getBoundingClientRect(), a = null != a && 0 < a.height && 0 < a.width) : a = b;
    return a
};
gvjs_.moa = gvjs_ph;

function gvjs_vh(a, b) {
    return gvjs_sh(b, function(a) {
        return "SVG" == a.nodeName && !0
    }, !0, void 0)
}
gvjs_.l9 = gvjs_sh;

function gvjs_wh(a, b) {
    a && (a.logicalname = b)
}

function gvjs_xh(a) {
    return (a = gvjs_sh(a, function(a) {
        return null != a.logicalname
    }, !0)) ? a.logicalname : gvjs_1a
};

function gvjs_yh(a, b) {
    if (null == a || "" === a || a == gvjs_Mb || a == gvjs_d) var c = gvjs_d;
    else {
        if (gvjs_m(a)) return a.color || "";
        try {
            c = gvjs_vd(a).ec
        } catch (d) {
            if (!b) throw Error("Invalid color: " + a);
            c = a
        }
    }
    return c
}

function gvjs_zh(a) {
    if (a == gvjs_d) return gvjs_d;
    a = gvjs_Bd(a);
    a = Math.round((a[0] + a[1] + a[2]) / 3);
    return gvjs_Cd(a, a, a)
}

function gvjs_Ah(a, b) {
    var c = a.G(b.name, b.properties);
    a.rl(c, {
        style: b.style
    });
    if (null != b.content) {
        var d = gvjs_l(b.content) ? b.content : [b.content];
        gvjs_q(d, function(b) {
            gvjs_i(b) ? a.appendChild(c, a.createTextNode(b)) : (gvjs_i(b.content) && b.Qua ? (b = gvjs_fg(b.content), b = gvjs_1g(a.od, b)) : b = gvjs_Ah(a, b), a.appendChild(c, b))
        })
    }
    null != b.id && gvjs_wh(c, b.id);
    return c
};

function gvjs_Bh(a, b, c) {
    return a && a != gvjs_d ? b && b != gvjs_d ? gvjs_zd(gvjs_Hd(gvjs_Bd(a), gvjs_Bd(b), c)) : a : b
}

function gvjs_Ch(a, b) {
    if (null == b) return a;
    b = new gvjs_x(b, b);
    return a ? new gvjs_x(Math.min(a.start, b.start), Math.max(a.end, b.end)) : b
}

function gvjs_Dh(a, b, c) {
    var d = null != b ? b : a && null != c && c < a.start ? c : a ? a.start : null;
    a = null != c ? c : a && null != b && b > a.end ? b : a ? a.end : null;
    return null != d && null != a ? new gvjs_x(d, a) : null
}

function gvjs_Eh(a) {
    if (0 == a.length) return null;
    for (var b = a[0].clone(), c = 1; c < a.length; c++) gvjs_vf(b, a[c]);
    return b
}

function gvjs_Fh(a, b) {
    var c = gvjs_8c(a, b);
    if (0 <= c) return b;
    c = -(c + 1);
    if (0 == c) return a[0];
    if (c == a.length) return gvjs_Mc(a);
    var d = a[c - 1];
    a = a[c];
    return Math.abs(b - d) <= Math.abs(b - a) ? d : a
};

function gvjs_Gh(a, b, c) {
    this.Mc = a;
    this.Kk = gvjs_yh(b);
    this.xx = gvjs_yh(null != c ? c : gvjs_ea)
}
gvjs_ = gvjs_Gh.prototype;
gvjs_.getStyle = function() {
    return this.Mc
};
gvjs_.me = function() {
    return this.Kk
};
gvjs_.getBackgroundColor = function() {
    return this.xx
};
gvjs_.clone = function() {
    return new gvjs_Gh(this.Mc, this.Kk, this.xx)
};
gvjs_.ZH = function() {
    return new gvjs_Gh(this.Mc, gvjs_zh(this.Kk), gvjs_zh(this.xx))
};

function gvjs_B(a) {
    this.UB = gvjs_d;
    this.Ue = 1;
    this.Jf = gvjs_d;
    this.Ri = this.ac = 1;
    this.Fm = gvjs_Db;
    this.AK = this.Ed = this.dk = this.VD = this.UD = null;
    this.rl(a)
}
var gvjs_Hh = {
    stroke: gvjs_Qb,
    strokeOpacity: 0,
    fill: gvjs_Qb,
    fillOpacity: 0
};
gvjs_ = gvjs_B.prototype;
gvjs_.rl = function(a) {
    a = a || {};
    this.ef(a.fill);
    this.nf(a.fillOpacity);
    this.wd(a.stroke);
    this.ul(a.strokeWidth);
    gvjs_Ih(this, a.strokeOpacity);
    var b = a.V2;
    null != b && (this.Fm = b);
    b = a.rx;
    null != b && (this.UD = b);
    b = a.ry;
    null != b && (this.VD = b);
    gvjs_Jh(this, a.pattern);
    gvjs_Kh(this, a.gradient);
    this.AK = a.Lea || null;
    return this
};
gvjs_.getProperties = function() {
    var a = this.Ed;
    a && (a = {
        style: a.getStyle(),
        color: a.me(),
        Vja: a.getBackgroundColor()
    });
    return {
        fill: this.rb(),
        fillOpacity: this.Ue,
        stroke: this.Jf,
        strokeWidth: this.ac,
        strokeOpacity: this.Ri,
        V2: this.Fm,
        rx: this.UD,
        ry: this.VD,
        pattern: a,
        gradient: gvjs_fe(this.dk),
        Lea: gvjs_fe(this.AK)
    }
};
gvjs_.toJSON = function() {
    var a = this.dk;
    a && (a = {
        color1: a.mg,
        color2: a.Pf,
        opacity1: a.Kn,
        opacity2: a.Ln,
        x1: a.x1,
        y1: a.y1,
        x2: a.x2,
        y2: a.y2,
        useObjectBoundingBoxUnits: a.oo,
        sharpTransition: a.Bp
    });
    var b = this.Ed;
    b && (b = {
        style: b.getStyle(),
        color: b.me(),
        bgcolor: b.getBackgroundColor()
    });
    var c = this.AK;
    c && (c = {
        radius: c.radius,
        opacity: c.opacity,
        xOffset: c.Hga,
        yOffset: c.Pga
    });
    return gvjs_jf({
        fill: this.rb(),
        fillOpacity: this.Ue,
        stroke: this.Jf,
        strokeWidth: this.ac,
        strokeOpacity: this.Ri,
        strokeDashStyle: this.Fm,
        rx: this.UD,
        ry: this.VD,
        gradient: a,
        pattern: b,
        shadow: c
    })
};
gvjs_.clone = function() {
    return new gvjs_B(this.getProperties())
};
gvjs_.ZH = function() {
    var a = this.clone();
    a.ef(gvjs_zh(this.UB));
    a.wd(gvjs_zh(this.Jf));
    var b = this.dk;
    if (b) {
        var c = gvjs_t(b);
        c.mg = gvjs_zh(b.mg);
        c.Pf = gvjs_zh(b.Pf);
        gvjs_Kh(a, c)
    }
    this.Ed && gvjs_Jh(a, this.Ed.ZH());
    return a
};
gvjs_.ef = function(a) {
    null != a && (this.UB = gvjs_yh(a, !0));
    return this
};
gvjs_.rb = function() {
    return this.UB
};
gvjs_.nf = function(a) {
    null != a && (this.Ue = gvjs_jd(a, 0, 1));
    return this
};
gvjs_.wd = function(a, b) {
    null != a && (this.Jf = gvjs_yh(a, !0));
    this.ul(b);
    return this
};
gvjs_.E9 = function() {
    return this.Jf
};
gvjs_.ul = function(a) {
    if (null != a && (gvjs_i(a) && (a = parseFloat(a)), gvjs_j(a) && !isNaN(a))) {
        if (0 > a) throw Error("Negative strokeWidth not allowed.");
        0 <= a && (this.ac = a)
    }
    return this
};

function gvjs_Lh(a) {
    return gvjs_Mh(a) ? a.ac : 0
}

function gvjs_Ih(a, b) {
    null != b && (a.Ri = gvjs_jd(parseFloat(b), 0, 1))
}

function gvjs_Kh(a, b) {
    null == a.dk ? a.dk = gvjs_fe(b || null) : null != b && (gvjs_ie(a.dk, b), b.mg = gvjs_yh(b.mg || "", !0), b.Pf = gvjs_yh(b.Pf || "", !0), null == b.Kn && delete b.Kn, null == b.Ln && delete b.Ln, null == b.oo && delete b.oo, null == b.Bp && delete b.Bp)
}

function gvjs_Jh(a, b) {
    b && (a.Ed = b instanceof gvjs_Gh ? b.clone() : new gvjs_Gh(b.style, b.color, b.Vja))
}

function gvjs_Nh(a) {
    return 0 < a.Ue && (!gvjs_Oh(a.UB) || null != a.dk || null != a.Ed)
}

function gvjs_Mh(a) {
    return 0 < a.ac && 0 < a.Ri && !gvjs_Oh(a.Jf)
}

function gvjs_Oh(a) {
    return null == a || "" === a || a === gvjs_d || gvjs_m(a) && gvjs_Oh(a.color)
}

function gvjs_Ph(a) {
    return gvjs_Nh(a) && 1 <= a.Ue
}

function gvjs_Qh(a, b) {
    return new gvjs_B({
        stroke: gvjs_d,
        fill: a,
        fillOpacity: null != b ? b : 1
    })
}

function gvjs_Rh(a, b, c, d) {
    return new gvjs_B({
        stroke: a,
        strokeWidth: b,
        strokeOpacity: null != d ? d : 1,
        fill: null != c && c ? gvjs_da : gvjs_d
    })
}

function gvjs_Sh(a, b) {
    if (a === b) b = !0;
    else if (null == a || null == b) b = !1;
    else {
        var c;
        if (c = a.UB == b.UB && a.Ue == b.Ue && a.Jf == b.Jf && a.ac == b.ac && a.Ri == b.Ri && a.Fm == b.Fm && a.UD == b.UD && a.VD == b.VD) {
            c = a.dk;
            var d = b.dk;
            c = c === d ? !0 : null == c || null == d ? !1 : c.mg == d.mg && c.Pf == d.Pf && c.x1 == d.x1 && c.y1 == d.y1 && c.x2 == d.x2 && c.y2 == d.y2 && c.oo === d.oo && c.Bp === d.Bp
        }
        c && (a = a.Ed || null, b = b.Ed || null, c = a === b ? !0 : null == a || null == b ? !1 : a.xx == b.xx && a.Kk == b.Kk && a.Mc == b.Mc);
        b = c
    }
    return b
};

function gvjs_Th(a) {
    this.lb = gvjs_Ab;
    this.fontSize = 10;
    this.color = gvjs_6a;
    this.opacity = 1;
    this.Tb = "";
    this.ZL = 3;
    this.qf = this.jd = this.bold = !1;
    this.rl(a)
}
gvjs_ = gvjs_Th.prototype;
gvjs_.rl = function(a) {
    a = a || {};
    this.zw(a.lb);
    this.Cm(a.fontSize);
    this.setColor(a.color);
    this.setOpacity(a.opacity);
    var b = a.Tb;
    null != b && (this.Tb = b);
    b = a.ZL;
    null != b && (this.ZL = b);
    gvjs_Uh(this, a.bold);
    gvjs_Vh(this, a.jd);
    a = a.qf;
    null != a && (this.qf = a);
    return this
};
gvjs_.zw = function(a) {
    null != a && "" !== a && (this.lb = a);
    return this
};
gvjs_.Cm = function(a) {
    if (null != a && (gvjs_i(a) && (a = parseFloat(a)), gvjs_j(a))) {
        if (0 > a) throw Error("Negative fontSize not allowed.");
        0 < a && (this.fontSize = a)
    }
    return this
};
gvjs_.setColor = function(a) {
    null != a && (this.color = a);
    return this
};
gvjs_.setOpacity = function(a) {
    null != a && (this.opacity = a);
    return this
};

function gvjs_Uh(a, b) {
    null != b && (a.bold = b);
    return a
}

function gvjs_Vh(a, b) {
    null != b && (a.jd = b);
    return a
};

function gvjs_bba(a, b) {
    a = [a];
    for (var c = b.length - 1; 0 <= c; --c) a.push(typeof b[c], b[c]);
    return a.join("\x0B")
};

function gvjs_Wh(a, b, c) {
    this.kba = a || null;
    this.hc = !!b;
    this.G8 = c;
    this.ib = new gvjs_2e;
    this.ve = new gvjs_Xh("", void 0);
    this.ve.next = this.ve.Mi = this.ve
}

function gvjs_Yh(a, b) {
    (b = a.ib.get(b)) && a.hc && (b.remove(), gvjs_Zh(a, b));
    return b
}
gvjs_ = gvjs_Wh.prototype;
gvjs_.get = function(a, b) {
    return (a = gvjs_Yh(this, a)) ? a.value : b
};
gvjs_.set = function(a, b) {
    var c = gvjs_Yh(this, a);
    c ? c.value = b : (c = new gvjs_Xh(a, b), this.ib.set(a, c), gvjs_Zh(this, c))
};
gvjs_.sp = function() {
    return this.ve.next.value
};
gvjs_.shift = function() {
    return gvjs__h(this, this.ve.next)
};
gvjs_.pop = function() {
    return gvjs__h(this, this.ve.Mi)
};
gvjs_.remove = function(a) {
    return (a = this.ib.get(a)) ? (this.removeNode(a), !0) : !1
};
gvjs_.removeNode = function(a) {
    a.remove();
    this.ib.remove(a.key)
};
gvjs_.Eb = function() {
    return this.ib.Eb()
};
gvjs_.isEmpty = function() {
    return this.ib.isEmpty()
};
gvjs_.bk = function() {
    return this.map(function(a, b) {
        return b
    })
};
gvjs_.Ha = function() {
    return this.map(function(a) {
        return a
    })
};
gvjs_.contains = function(a) {
    return this.some(function(b) {
        return b == a
    })
};
gvjs_.Ce = function(a) {
    return this.ib.Ce(a)
};
gvjs_.clear = function() {
    gvjs_0h(this, 0)
};
gvjs_.forEach = function(a, b) {
    for (var c = this.ve.next; c != this.ve; c = c.next) a.call(b, c.value, c.key, this)
};
gvjs_.map = function(a, b) {
    for (var c = [], d = this.ve.next; d != this.ve; d = d.next) c.push(a.call(b, d.value, d.key, this));
    return c
};
gvjs_.some = function(a, b) {
    for (var c = this.ve.next; c != this.ve; c = c.next)
        if (a.call(b, c.value, c.key, this)) return !0;
    return !1
};
gvjs_.every = function(a, b) {
    for (var c = this.ve.next; c != this.ve; c = c.next)
        if (!a.call(b, c.value, c.key, this)) return !1;
    return !0
};

function gvjs_Zh(a, b) {
    a.hc ? (b.next = a.ve.next, b.Mi = a.ve, a.ve.next = b, b.next.Mi = b) : (b.Mi = a.ve.Mi, b.next = a.ve, a.ve.Mi = b, b.Mi.next = b);
    null != a.kba && gvjs_0h(a, a.kba)
}

function gvjs_0h(a, b) {
    for (; a.Eb() > b;) {
        var c = a.hc ? a.ve.Mi : a.ve.next;
        a.removeNode(c);
        a.G8 && a.G8(c.key, c.value)
    }
}

function gvjs__h(a, b) {
    a.ve != b && a.removeNode(b);
    return b.value
}

function gvjs_Xh(a, b) {
    this.key = a;
    this.value = b
}
gvjs_Xh.prototype.remove = function() {
    this.Mi.next = this.next;
    this.next.Mi = this.Mi;
    delete this.Mi;
    delete this.next
};

function gvjs_1h(a) {
    this.ska = Math.max(1, a || Infinity);
    this.hc = new gvjs_Wh(this.ska, !0)
}
gvjs_ = gvjs_1h.prototype;
gvjs_.clear = function() {
    this.hc.clear()
};
gvjs_.contains = function(a) {
    return this.hc.Ce(a)
};
gvjs_.get = function(a) {
    if (!this.contains(a)) throw Error('Cache does not contain key "' + a + '"');
    return this.hc.get(a)
};
gvjs_.put = function(a, b) {
    this.hc.set(a, b);
    return b
};
gvjs_.size = function() {
    return this.hc.Eb()
};

function gvjs_2h(a, b) {
    function c() {
        var a = f(gvjs_ac(d), arguments);
        return g.contains(a) ? g.get(a) : g.put(a, d.apply(this, arguments))
    }
    var d = null,
        e = {};
    gvjs_n(a) ? (d = a, e = b || {}) : gvjs_n(b) && (d = b, e = a || {});
    var f = e.eS || gvjs_bba,
        g = e.cache || new gvjs_1h(1E3);
    c.clear = function() {
        g.clear()
    };
    return c
};

function gvjs_3h(a, b) {
    if (null == a && null == b) return a === b;
    if (a === b) return !0;
    var c = gvjs_6b(a),
        d = gvjs_6b(b);
    if (c != d) return !1;
    d = gvjs_$b(a);
    var e = gvjs_$b(b);
    if (d != e) return !1;
    switch (c) {
        case gvjs_tb:
            if (d && e) return 0 == gvjs_0d(a, b);
            for (var f in a)
                if (a.hasOwnProperty(f) && (!b.hasOwnProperty(f) || !gvjs_3h(a[f], b[f]))) return !1;
            for (var g in b)
                if (b.hasOwnProperty(g) && !a.hasOwnProperty(g)) return !1;
            return !0;
        case gvjs_3a:
            if (a.length != b.length) return !1;
            for (c = 0; c < a.length; ++c)
                if (!gvjs_3h(a[c], b[c])) return !1;
            return !0;
        case gvjs_c:
            return !0;
        case gvjs_f:
        case gvjs_e:
        case gvjs_8a:
            return !1;
        default:
            throw Error("Error while comparing " + a + gvjs_aa + b + ": unexpected type of obj1 " + c);
    }
}

function gvjs_4h(a) {
    if (gvjs_$b(a)) {
        var b = new Date;
        b.setTime(a.valueOf());
        return b
    }
    var c = gvjs_6b(a);
    if (c == gvjs_tb || c == gvjs_3a) {
        if (a.clone) return a.clone();
        c = c == gvjs_3a ? [] : {};
        for (b in a) c[b] = gvjs_4h(a[b]);
        return c
    }
    return a
}

function gvjs_5h(a, b) {
    function c(a, e, f) {
        for (var d in a) a.hasOwnProperty(d) && (typeof a[d] === gvjs_tb ? c(a[d], e, f) : b.call(void 0, a[d], d, a) && f.push(a[d]));
        return f
    }
    return c(a, gvjs_2h(b), [])
}

function gvjs_cba(a, b, c) {
    gvjs_q(b, function(b) {
        gvjs_m(a) && null != a && null == a[b] && (a[b] = {});
        a = a[b]
    });
    gvjs_m(a) && gvjs_ie(a, c)
}

function gvjs_6h(a) {
    return gvjs_6b(a) != gvjs_tb || gvjs_$b(a) ? null : a
}

function gvjs_7h(a, b) {
    a = gvjs_6h(a) || {};
    if (2 == arguments.length) {
        var c = arguments[1];
        if (!gvjs_6h(c)) return a;
        for (var d in c)
            if (gvjs_l(c[d])) a[d] = gvjs_4c(c[d]);
            else if (gvjs_6h(a[d])) a[d] = gvjs_7h(a[d], c[d]);
        else if (gvjs_6h(c[d])) a[d] = gvjs_7h({}, c[d]);
        else if (null == a[d] || null != c[d]) a[d] = c[d]
    } else if (2 < arguments.length)
        for (c = 1, d = arguments.length; c < d; c++) a = gvjs_7h(a, arguments[c]);
    return a
};

function gvjs_8h(a, b, c) {
    this.mk = a || [{}];
    this.m6 = b || null;
    this.nZ = null != c ? c : !1
}
gvjs_ = gvjs_8h.prototype;
gvjs_.view = function(a) {
    a = gvjs_9h(this, a);
    return new gvjs_8h(this.mk, a, this.nZ)
};

function gvjs_9h(a, b) {
    gvjs_i(b) && (b = [b]);
    return null != a.m6 ? gvjs_$h(a.m6, b) : b
}

function gvjs_$h(a, b) {
    a = gvjs_i(a) ? [a] : a;
    var c = gvjs_i(b) ? [b] : b;
    if (0 === a.length) return c;
    if (0 === c.length) return a;
    var d = [];
    gvjs_q(a, function(a) {
        var b = gvjs_oc(a);
        gvjs_q(c, function(c) {
            var e = gvjs_oc(c);
            b || e ? b ? e || d.push(c) : d.push(a) : d.push(a + "." + c)
        })
    });
    return d
}

function gvjs_ai(a, b, c) {
    gvjs__c(a.mk, c, b)
}

function gvjs_dba(a) {
    var b = "maps";
    b = gvjs_9h(a, b);
    var c = new gvjs_u;
    gvjs_q(a.mk, function(a) {
        a = gvjs_bi(a, b);
        gvjs_m(a) && c.addAll(gvjs_8d(a))
    }, a);
    return gvjs_1e(c)
}

function gvjs_ci(a, b) {
    gvjs_s(b, function(b, d) {
        gvjs_m(b) && !gvjs_l(b) ? (a[d] = a[d] || {}, gvjs_ci(a[d], b)) : null != b && (a[d] = b)
    })
}

function gvjs_di(a) {
    var b = {};
    gvjs_Oc(a.mk, function(a) {
        gvjs_ci(b, a)
    });
    return b
}

function gvjs_bi(a, b, c, d) {
    gvjs_i(b) && (b = [b]);
    for (var e = 0; e < b.length; ++e) {
        var f = gvjs_ei(a, b[e], c, d);
        if (null != f) return f
    }
    return null
}

function gvjs_ei(a, b, c, d) {
    if (d) b = a[b];
    else a: {
        b = b.split(".");a = a || gvjs_g;
        for (d = 0; d < b.length; d++) {
            var e = b[d];
            if (null != a[e]) a = a[e];
            else {
                b = null;
                break a
            }
        }
        b = a
    }
    return null != b && gvjs_n(c) ? c(b) : b
}
gvjs_.Ha = function(a, b) {
    var c = [];
    null != b && c.push(b);
    a = gvjs_9h(this, a);
    for (b = this.mk.length - 1; 0 <= b; b--)
        for (var d = a.length - 1; 0 <= d; d--) {
            var e = gvjs_ei(this.mk[b], a[d], void 0, this.nZ);
            null != e && c.unshift(e)
        }
    return c
};

function gvjs_eba(a, b, c) {
    var d = {};
    a = a.Ha(b, c);
    gvjs_Oc(a, function(a) {
        gvjs_6b(a) == gvjs_tb && gvjs_7h(d, a)
    });
    return d
}
gvjs_.ha = function(a, b, c) {
    a = gvjs_9h(this, a);
    for (var d = 0; d < this.mk.length; d++) {
        var e = gvjs_bi(this.mk[d], a, c, this.nZ);
        if (null != e) return e
    }
    e = b;
    null != e && c && (e = c(e));
    return null != e ? e : null
};

function gvjs_fi(a, b, c, d) {
    a = gvjs_eba(a, b, c);
    d && (a = d(a));
    return a || {}
}

function gvjs_gi(a, b, c, d, e, f) {
    a = a.ha(d, e, function(a) {
        return b(a, f)
    });
    null == a && (a = b(c, f), null == a && (a = c));
    return a
}

function gvjs_hi(a, b, c, d) {
    a = a.ha(c, null, function(a) {
        return b(a, d)
    });
    return null == a ? null : a
}

function gvjs_ii(a, b, c) {
    function d(b, c, e) {
        function f() {
            var f = b.type;
            f == gvjs_tb ? (f = b.properties, g = gvjs_ii(a.view(c), f, e)) : g = d(f, c || b.name, e || b.fu)
        }
        var g = null;
        gvjs_l(b) ? gvjs_Tc(b, function(a) {
            g = d(a, c, e);
            return null != g
        }) : gvjs_6h(b) ? f() : gvjs_i(b) ? g = d(gvjs_fba[b], c, e) : gvjs_n(b) && (g = b.call(a, c, e));
        return g
    }
    var e = null;
    gvjs_s(b, function(a, b) {
        a = d(a, a.name, c && c[b]);
        null != a && (null == e && (e = {}), e[b] = a)
    });
    return e
}

function gvjs_gba(a, b) {
    b && (a = b(a));
    return gvjs_6h(a)
}

function gvjs_ji(a, b, c, d) {
    return gvjs_gi(a, gvjs_gba, {}, b, c, d)
}

function gvjs_ki(a, b) {
    a = null == a || gvjs_m(a) ? null : String(a);
    return b ? gvjs_$d(b, a) ? a : null : a
}

function gvjs_C(a, b, c, d) {
    return gvjs_gi(a, gvjs_ki, "", b, c, d)
}
gvjs_.Zb = function(a, b) {
    return gvjs_hi(this, gvjs_ki, a, b)
};

function gvjs_li(a, b, c, d) {
    return gvjs_C(a, b, d, c)
}
gvjs_.Iq = gvjs_8h.prototype.Zb;

function gvjs_mi(a, b) {
    if (null == a) return null;
    gvjs_i(a) && (a = [a]);
    return gvjs_l(a) ? gvjs_r(a, function(a) {
        return gvjs_ki(a, b)
    }) : null
}
gvjs_.EC = function(a, b) {
    return gvjs_hi(this, gvjs_mi, a, b)
};

function gvjs_ni(a) {
    if (null == a) return null;
    if (typeof a == gvjs_8a) return a;
    a = String(a);
    return "1" == a || a.toLowerCase() == gvjs_Nb ? !0 : "0" == a || a.toLowerCase() == gvjs_db ? !1 : null
}

function gvjs_D(a, b, c) {
    return gvjs_gi(a, gvjs_ni, !1, b, c)
}
gvjs_.Hq = function(a) {
    return gvjs_hi(this, gvjs_ni, a)
};

function gvjs_oi(a) {
    if (null == a) return null;
    if (typeof a === gvjs_e) return a;
    a = gvjs_Kc(String(a));
    return isNaN(a) ? null : a
}

function gvjs_E(a, b, c) {
    return gvjs_gi(a, gvjs_oi, 0, b, c)
}
gvjs_.Pa = function(a) {
    return gvjs_hi(this, gvjs_oi, a)
};

function gvjs_pi(a) {
    return null != a ? typeof a === gvjs_e || typeof a === gvjs_f || typeof a === gvjs_8a ? a : null : null
}

function gvjs_qi(a, b, c) {
    return gvjs_gi(a, gvjs_pi, 0, b, c)
}
gvjs_.nt = function(a) {
    return gvjs_hi(this, gvjs_pi, a)
};

function gvjs_ri(a) {
    return null != a ? gvjs_l(a) ? gvjs_r(a, gvjs_oi) : null : null
}
gvjs_.nP = function(a) {
    return gvjs_hi(this, gvjs_ri, a)
};

function gvjs_si(a) {
    a = gvjs_oi(a);
    return null != a && 0 <= a ? a : null
}

function gvjs_ti(a, b, c) {
    return gvjs_gi(a, gvjs_si, 0, b, c)
}
gvjs_.DC = function(a) {
    return gvjs_hi(this, gvjs_si, a)
};

function gvjs_ui(a) {
    a = gvjs_si(a);
    return null != a ? gvjs_jd(a, 0, 1) : null
}

function gvjs_vi(a, b, c) {
    return gvjs_gi(a, gvjs_ui, 0, b, c)
}
gvjs_.$qa = function(a) {
    return gvjs_hi(this, gvjs_ui, a)
};

function gvjs_wi(a, b) {
    if (null == a) return null;
    if ("" === a) return gvjs_d;
    if (gvjs_m(a)) return a;
    a = gvjs_ki(a);
    if (gvjs_l(b) && gvjs_Wc(b, a)) return a;
    try {
        return gvjs_yh(a)
    } catch (c) {
        return null
    }
}

function gvjs_xi(a, b, c, d) {
    return gvjs_gi(a, gvjs_wi, gvjs_d, b, c, d)
}
gvjs_.dz = function(a, b) {
    return gvjs_hi(this, gvjs_wi, a, b)
};

function gvjs_yi(a, b) {
    b = null != b ? b : 1;
    var c = gvjs_oi(a);
    null == c && (a = gvjs_ki(a), null != a && gvjs_nc(a, "%") && (c = b * parseFloat(a) / 100));
    null != c && (c = 0 === b ? 0 : b * gvjs_jd(c / b, 0, 1));
    return c
}
gvjs_.fm = function(a, b) {
    return gvjs_hi(this, gvjs_yi, a, b)
};
var gvjs_hba = {
    format: {
        name: gvjs_ib,
        type: "arrayOfString"
    },
    interval: {
        name: gvjs_nb,
        type: "arrayOfNumber"
    }
};

function gvjs_zi(a, b) {
    var c = [],
        d = [];
    a = a.Ha(b);
    a = gvjs_ii(new gvjs_8h(a), gvjs_hba) || {};
    a.format = a.format || c;
    a.interval = a.interval || d;
    return a
}
var gvjs_iba = {
    fill: {
        name: gvjs_eb,
        type: gvjs_b
    },
    fillOpacity: {
        name: gvjs_fb,
        type: gvjs_yb
    },
    stroke: {
        name: gvjs_Eb,
        type: gvjs_b
    },
    strokeOpacity: {
        name: gvjs_Fb,
        type: gvjs_yb
    },
    strokeWidth: {
        name: gvjs_Gb,
        type: gvjs_qb
    },
    V2: {
        name: "strokeDashStyle",
        type: ["arrayOfNumber", {
            type: gvjs_f,
            fu: {
                Lia: gvjs_Db,
                Jza: gvjs_$a
            }
        }]
    },
    rx: {
        name: "rx",
        type: gvjs_e
    },
    ry: {
        name: "ry",
        type: gvjs_e
    },
    gradient: {
        name: gvjs_lb,
        type: gvjs_tb,
        properties: {
            mg: {
                name: "color1",
                type: gvjs_b
            },
            Pf: {
                name: "color2",
                type: gvjs_b
            },
            Kn: {
                name: "opacity1",
                type: gvjs_yb
            },
            Ln: {
                name: "opacity2",
                type: gvjs_yb
            },
            x1: {
                name: "x1",
                type: gvjs_sb
            },
            y1: {
                name: "y1",
                type: gvjs_sb
            },
            x2: {
                name: "x2",
                type: gvjs_sb
            },
            y2: {
                name: "y2",
                type: gvjs_sb
            },
            Bp: {
                name: "sharpTransition",
                type: gvjs_8a
            },
            oo: {
                name: "useObjectBoundingBoxUnits",
                type: gvjs_8a
            }
        }
    },
    Lea: {
        name: "shadow",
        type: gvjs_tb,
        properties: {
            radius: {
                name: "radius",
                type: gvjs_e
            },
            opacity: {
                name: gvjs_ub,
                type: gvjs_yb
            },
            Hga: {
                name: "xOffset",
                type: gvjs_e
            },
            Pga: {
                name: "yOffset",
                type: gvjs_e
            }
        }
    },
    pattern: {
        name: gvjs_vb,
        type: gvjs_tb,
        properties: {
            color: {
                name: gvjs_b,
                type: gvjs_b
            },
            backgroundColor: {
                name: gvjs_5a,
                type: gvjs_b
            },
            style: {
                name: gvjs_Hb,
                type: {
                    type: gvjs_f,
                    fu: {
                        XAa: gvjs_xb,
                        fBa: gvjs_Bb
                    }
                }
            }
        }
    }
};

function gvjs_Ai(a, b, c) {
    var d = null,
        e = null;
    c instanceof gvjs_B ? d = c : gvjs_m(c) ? d = new gvjs_B(c) : e = c;
    a = a.Ha(b, e);
    a = gvjs_r(a, function(a) {
        gvjs_i(a) && (a = {
            fill: gvjs_wi(a)
        });
        return a
    });
    a = gvjs_ii(new gvjs_8h(a), gvjs_iba);
    d = d || new gvjs_B;
    d.rl(a);
    gvjs_Nh(d) || (d.ef(gvjs_Hh.fill), d.nf(gvjs_Hh.fillOpacity));
    gvjs_Mh(d) || (d.wd(gvjs_Hh.stroke), gvjs_Ih(d, gvjs_Hh.strokeOpacity));
    return d
}
var gvjs_jba = {
    color: {
        name: gvjs_b,
        type: gvjs_b
    },
    opacity: {
        name: gvjs_ub,
        type: gvjs_yb
    },
    Tb: {
        name: "auraColor",
        type: gvjs_b
    },
    ZL: {
        name: "auraWidth",
        type: gvjs_qb
    },
    lb: {
        name: gvjs_gb,
        type: gvjs_f
    },
    fontSize: {
        name: gvjs_hb,
        type: gvjs_qb
    },
    bold: {
        name: gvjs_7a,
        type: gvjs_8a
    },
    jd: {
        name: gvjs_ob,
        type: gvjs_8a
    },
    qf: {
        name: gvjs_Pb,
        type: gvjs_8a
    }
};

function gvjs_Bi(a, b, c, d) {
    a = a.Ha(b);
    d = gvjs_ii(new gvjs_8h(a), gvjs_jba, {
        color: d,
        Tb: d
    });
    c = new gvjs_Th(c || {});
    c.rl(d);
    return c
}
var gvjs_fba = {
    string: gvjs_8h.prototype.Zb,
    number: gvjs_8h.prototype.Pa,
    "boolean": gvjs_8h.prototype.Hq,
    numberOrString: [gvjs_e, gvjs_f],
    primitive: gvjs_8h.prototype.nt,
    ratio: gvjs_8h.prototype.$qa,
    nonNegative: gvjs_8h.prototype.DC,
    absOrPercentage: gvjs_8h.prototype.fm,
    arrayOfNumber: gvjs_8h.prototype.nP,
    arrayOfString: gvjs_8h.prototype.EC,
    color: gvjs_8h.prototype.dz
};

function gvjs_Ci() {}
gvjs_Ci.prototype.xc = function(a) {
    return this.YN(a)
};

function gvjs_Di(a) {
    this.init(a)
}
gvjs_p(gvjs_Di, gvjs_Ci);
gvjs_Di.prototype.init = function(a) {
    a = new gvjs_8h([a || {}, {
        formatType: gvjs_Cb,
        valueType: gvjs_bb
    }]);
    this.Ed = a.ha(gvjs_vb);
    this.rd = null;
    this.Fna = a.Iq("formatType", gvjs_kba);
    this.Fya = a.Iq("valueType", gvjs_Ei);
    this.Rka = gvjs_D(a, "clearMinutes", !1);
    this.Efa = null;
    a = a.Pa("timeZone");
    null != a && (this.Efa = gvjs_le.createTimeZone(60 * -a))
};
var gvjs_Fi = gvjs_oe.Format,
    gvjs_kba = {
        Sza: gvjs_jb,
        rAa: "long",
        xAa: gvjs_pb,
        SHORT: gvjs_Cb
    },
    gvjs_Ei = {
        sha: gvjs_ab,
        tha: gvjs_bb,
        DBa: "time"
    };

function gvjs_lba(a, b) {
    switch (a) {
        case gvjs_ab:
            switch (b) {
                case gvjs_jb:
                    return gvjs_oe.Format.FULL_DATE;
                case "long":
                    return gvjs_oe.Format.LONG_DATE;
                case gvjs_pb:
                    return gvjs_oe.Format.MEDIUM_DATE;
                case gvjs_Cb:
                    return gvjs_oe.Format.SHORT_DATE
            }
        case gvjs_bb:
            switch (b) {
                case gvjs_jb:
                    return gvjs_oe.Format.FULL_DATETIME;
                case "long":
                    return gvjs_oe.Format.LONG_DATETIME;
                case gvjs_pb:
                    return gvjs_oe.Format.MEDIUM_DATETIME;
                case gvjs_Cb:
                    return gvjs_oe.Format.SHORT_DATETIME
            }
        case "time":
            switch (b) {
                case gvjs_jb:
                    return gvjs_oe.Format.FULL_TIME;
                case "long":
                    return gvjs_oe.Format.LONG_TIME;
                case gvjs_pb:
                    return gvjs_oe.Format.MEDIUM_TIME;
                case gvjs_Cb:
                    return gvjs_oe.Format.SHORT_TIME
            }
        default:
            return gvjs_oe.Format.FULL_DATETIME
    }
}
gvjs_Di.prototype.Dm = function(a) {
    switch (a) {
        case gvjs__a:
            a = gvjs_Pe.YEAR_FULL;
            break;
        case gvjs_Ja:
            a = "Q yyyy";
            break;
        case gvjs_Ca:
            a = gvjs_Pe.YEAR_MONTH_ABBR;
            break;
        case gvjs_pa:
            a = gvjs_oe.Format.SHORT_DATE;
            break;
        default:
            a = gvjs_oe.Format.SHORT_DATETIME
    }
    this.init({
        pattern: a,
        timeZone: 0
    })
};
gvjs_Di.prototype.format = function(a, b) {
    var c = gvjs_ki(a.X(b), gvjs_Ei);
    if (c == gvjs_ab || c == gvjs_bb) {
        c = this.YM(c);
        for (var d = a.da(), e = 0; e < d; e++) {
            var f = a.getValue(e, b);
            f = gvjs_Gi(this, c, f);
            a.gA(e, b, f)
        }
    }
};
gvjs_Di.prototype.YN = function(a) {
    this.rd || (this.rd = this.YM(this.Fya));
    return gvjs_Gi(this, this.rd, a)
};
gvjs_Di.prototype.YM = function(a) {
    var b = this.Ed;
    null != b || (b = gvjs_lba(a, this.Fna));
    return new gvjs_oe(b)
};

function gvjs_Gi(a, b, c) {
    if (null === c) return "";
    var d = a.Efa;
    null == d && (d = gvjs_le.createTimeZone(c.getTimezoneOffset()));
    c = new Date(c.getTime());
    a.Rka && c.setMinutes(0);
    return b.format(c, d)
};

function gvjs_Hi(a) {
    var b = new gvjs_8h([a || {}, {
        decimalSymbol: gvjs_Ii,
        groupingSymbol: gvjs_Ji,
        fractionDigits: 2,
        significantDigits: null,
        negativeParens: !1,
        prefix: "",
        suffix: "",
        scaleFactor: 1
    }]);
    this.yy = gvjs_ti(b, "fractionDigits");
    a && gvjs_j(a.fractionDigits) && isNaN(a.fractionDigits) && (this.yy = NaN);
    this.ao = b.DC("significantDigits");
    this.Rla = gvjs_C(b, "decimalSymbol");
    this.gY = gvjs_C(b, "groupingSymbol");
    this.ida = gvjs_C(b, gvjs_wb);
    this.rfa = gvjs_C(b, gvjs_Ib);
    this.Xba = b.dz("negativeColor");
    this.Yba = gvjs_D(b, "negativeParens");
    (this.Ed = b.Zb(gvjs_vb)) && this.Ed.toLowerCase() in gvjs_Ki && (this.Ed = gvjs_Ki[this.Ed.toLowerCase()]);
    this.kK = gvjs_E(b, "scaleFactor");
    if (0 >= this.kK) throw Error("Scale factor must be a positive number.");
}
gvjs_p(gvjs_Hi, gvjs_Ci);
var gvjs_Ki = {
        decimal: gvjs_Ce.Format.DECIMAL,
        scientific: gvjs_Ce.Format.SCIENTIFIC,
        percent: gvjs_Ce.Format.PERCENT,
        currency: gvjs_Ce.Format.CURRENCY,
        "short": gvjs_Ce.Format.COMPACT_SHORT,
        "long": gvjs_Ce.Format.COMPACT_LONG
    },
    gvjs_Li = !1,
    gvjs_Ii = gvjs_Qe.DECIMAL_SEP,
    gvjs_Ji = gvjs_Qe.GROUP_SEP,
    gvjs_Mi = gvjs_Qe.DECIMAL_PATTERN;
gvjs_Hi.prototype.format = function(a, b) {
    if (a.X(b) == gvjs_e)
        for (var c = 0; c < a.da(); c++) {
            var d = a.getValue(c, b);
            if (null != d) {
                var e = this.xc(d);
                a.gA(c, b, e);
                !gvjs_oc(gvjs_Ec(this.Xba)) && 0 > d && a.setProperty(c, b, gvjs_Hb, "color:" + this.Xba + ";")
            }
        }
};
gvjs_Hi.prototype.YN = function(a) {
    var b = a / this.kK;
    if (null === this.Ed) {
        if (isNaN(this.yy)) return String(a);
        this.Yba && (b = Math.abs(b));
        var c = b;
        0 == this.yy && (c = Math.round(c));
        b = [];
        0 > c && (c = -c, b.push("-"));
        var d = Math.pow(10, this.yy),
            e = Math.round(c * d);
        c = String(Math.floor(e / d));
        d = String(e % d);
        if (3 < c.length && this.gY)
            for (e = c.length % 3, 0 < e && (b.push(c.substring(0, e), this.gY), c = c.substring(e)); 3 < c.length;) b.push(c.substring(0, 3), this.gY), c = c.substring(3);
        b.push(c);
        0 < this.yy && (b.push(this.Rla), d.length < this.yy && (d = gvjs_ja +
            d), b.push(d.substring(d.length - this.yy)));
        b = b.join("");
        b = this.ida + b + this.rfa;
        this.Yba && 0 > a && (b = "(" + b + ")")
    } else c = new gvjs_Ce(this.Ed), a = gvjs_Ce.isEnforceAsciiDigits(), gvjs_Ce.setEnforceAsciiDigits(!gvjs_Li), null != this.ao && c.setSignificantDigits(this.ao), b = c.format(b), b = this.ida + b + this.rfa, gvjs_Ce.setEnforceAsciiDigits(a);
    return b
};

function gvjs_Ni(a) {
    this.Ed = a || ""
}

function gvjs_mba(a, b, c, d, e, f, g) {
    return 0 < f && "\\" == g[f - 1] ? d : b.Oa(a, c[parseInt(e, 10)])
}
gvjs_Ni.prototype.format = function(a, b, c, d) {
    var e = b[0];
    null != c && gvjs_6b(c) == gvjs_e && (e = c);
    c = d || null;
    for (d = 0; d < a.da(); d++) {
        var f = this.Ed.replace(/{(\d+)}/g, gvjs_cc(gvjs_mba, d, a, b));
        f = f.replace(/\\(.)/g, "$1");
        c ? a.setProperty(d, e, c, f) : a.gA(d, e, f)
    }
};
gvjs_k(gvjs_kb, gvjs_Hi, void 0);
gvjs_Hi.prototype.format = gvjs_Hi.prototype.format;
gvjs_Hi.prototype.formatValue = gvjs_Hi.prototype.xc;
gvjs_k("google.visualization.NumberFormat.useNativeCharactersIfAvailable", function(a) {
    gvjs_Li = a
}, void 0);
gvjs_k("google.visualization.NumberFormat.DECIMAL_SEP", gvjs_Ii, void 0);
gvjs_k("google.visualization.NumberFormat.GROUP_SEP", gvjs_Ji, void 0);
gvjs_k("google.visualization.NumberFormat.DECIMAL_PATTERN", gvjs_Mi, void 0);
gvjs_k("google.visualization.ColorFormat", gvjs_Pd, void 0);
gvjs_Pd.prototype.format = gvjs_Pd.prototype.format;
gvjs_Pd.prototype.addRange = gvjs_Pd.prototype.addRange;
gvjs_Pd.prototype.addGradientRange = gvjs_Pd.prototype.kja;
gvjs_k("google.visualization.BarFormat", gvjs_hc, void 0);
gvjs_hc.prototype.format = gvjs_hc.prototype.format;
gvjs_k("google.visualization.ArrowFormat", gvjs_gc, void 0);
gvjs_gc.prototype.format = gvjs_gc.prototype.format;
gvjs_k("google.visualization.PatternFormat", gvjs_Ni, void 0);
gvjs_Ni.prototype.format = gvjs_Ni.prototype.format;
gvjs_k("google.visualization.DateFormat", gvjs_Di, void 0);
gvjs_Di.prototype.format = gvjs_Di.prototype.format;
gvjs_Di.prototype.formatValue = gvjs_Di.prototype.xc;
gvjs_k(gvjs_kb, gvjs_Hi, void 0);
gvjs_Hi.prototype.format = gvjs_Hi.prototype.format;
gvjs_k("google.visualization.TableColorFormat", gvjs_Pd, void 0);
gvjs_k("google.visualization.TableBarFormat", gvjs_hc, void 0);
gvjs_hc.prototype.format = gvjs_hc.prototype.format;
gvjs_k("google.visualization.TableArrowFormat", gvjs_gc, void 0);
gvjs_gc.prototype.format = gvjs_gc.prototype.format;
gvjs_k("google.visualization.TablePatternFormat", gvjs_Ni, void 0);
gvjs_Ni.prototype.format = gvjs_Ni.prototype.format;
gvjs_k("google.visualization.TableDateFormat", gvjs_Di, void 0);