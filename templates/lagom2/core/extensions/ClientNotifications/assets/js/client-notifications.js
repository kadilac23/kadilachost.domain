! function(t) {
    var e = {};

    function n(i) {
        if (e[i]) return e[i].exports;
        var o = e[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return t[i].call(o.exports, o, o.exports, n), o.l = !0, o.exports
    }
    n.m = t, n.c = e, n.d = function(t, e, i) {
        n.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: i
        })
    }, n.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, n.t = function(t, e) {
        if (1 & e && (t = n(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var i = Object.create(null);
        if (n.r(i), Object.defineProperty(i, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var o in t) n.d(i, o, function(e) {
                return t[e]
            }.bind(null, o));
        return i
    }, n.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return n.d(e, "a", e), e
    }, n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, n.p = "./../", n(n.s = 2)
}([, , function(t, e, n) {
    "use strict";
    n.r(e);
    n(3);
    $(document).ready((function() {
        $(".clientAlertModal").on("hide.bs.modal", (function() {
            var t, e, n, i;
            $(this).find("#checkClose").is(":checked") && (i = $(this).attr("id"), (t = $(this).data("close-days")) ? ((e = new Date).setDate(e.getDate() + t), n = "expires=" + e.toUTCString()) : n = "", document.cookie = "".concat(i, "=; ").concat(n))
        })), $(".clientAlert").on("close.bs.alert", (function() {
            var t, e, n, i;
            i = $(this).attr("id"), (t = $(this).data("close-days")) ? ((e = new Date).setDate(e.getDate() + t), n = "expires=" + e.toUTCString()) : n = "", document.cookie = "".concat(i, "=; ").concat(n)
        }));
        var t = $(".clientAlertModalOnLoad").first().data("onload-delay");
        setTimeout((function() {
            $(".clientAlertModalOnLoad").first().modal("show")
        }), t), $(".clientAlertModalOnLoad").on("hidden.bs.modal", (function() {
            for (var t = $(this).next(); !t.hasClass("clientAlertModalOnLoad") && ((t = t.next()).hasClass("clientAlertModalOnLoad") || t.hasClass("clientAlertModalOnExit")););
            var e = t.data("onload-delay");
            t.length && t.hasClass("clientAlertModalOnLoad") && setTimeout((function() {
                t.modal("show")
            }), e)
        })), $(".clientAlertModalOnExit").on("hidden.bs.modal", (function() {
            for (var t = $(this).next(); !t.hasClass("clientAlertModalOnExit") && ((t = t.next()).hasClass("clientAlertModalOnLoad") || t.hasClass("clientAlertModalOnExit")););
            t.length && t.hasClass("clientAlertModalOnExit") && t.modal("show")
        }))
    })), $.exitIntent("enable"), $(document).bind("exitintent", (function() {
        $(".clientAlertModalOnExit").first().modal("show")
    }))
}, function(t, e) {
    ! function(t) {
        function e(e) {
            0 < e.clientY || (i && clearTimeout(i), 0 >= t.exitIntent.settings.sensitivity ? t.event.trigger("exitintent") : i = setTimeout((function() {
                i = null, t.event.trigger("exitintent")
            }), t.exitIntent.settings.sensitivity))
        }

        function n() {
            i && (clearTimeout(i), i = null)
        }
        var i;
        t.exitIntent = function(i, o) {
            if (t.exitIntent.settings = t.extend(t.exitIntent.settings, o), "enable" == i) t(window).mouseleave(e), t(window).mouseenter(n);
            else {
                if ("disable" != i) throw "Invalid parameter to jQuery.exitIntent -- should be 'enable'/'disable'";
                n(), t(window).unbind("mouseleave", e), t(window).unbind("mouseenter", n)
            }
        }, t.exitIntent.settings = {
            sensitivity: 300
        }
    }(jQuery)
}]);