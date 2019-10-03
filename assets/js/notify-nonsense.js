/*! NotifyNonsense v .1 .0 ISC License Copyright Nataloo */ ! function (e) {
  var n = {};

  function t(o) {
    if (n[o]) return n[o].exports;
    var r = n[o] = {
      i: o,
      l: !1,
      exports: {}
    };
    return e[o].call(r.exports, r, r.exports, t), r.l = !0, r.exports
  }
  t.m = e, t.c = n, t.d = function (e, n, o) {
    t.o(e, n) || Object.defineProperty(e, n, {
      enumerable: !0,
      get: o
    })
  }, t.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    })
  }, t.t = function (e, n) {
    if (1 & n && (e = t(e)), 8 & n) return e;
    if (4 & n && "object" == typeof e && e && e.__esModule) return e;
    var o = Object.create(null);
    if (t.r(o), Object.defineProperty(o, "default", {
        enumerable: !0,
        value: e
      }), 2 & n && "string" != typeof e)
      for (var r in e) t.d(o, r, function (n) {
        return e[n]
      }.bind(null, r));
    return o
  }, t.n = function (e) {
    var n = e && e.__esModule ? function () {
      return e.default
    } : function () {
      return e
    };
    return t.d(n, "a", n), n
  }, t.o = function (e, n) {
    return Object.prototype.hasOwnProperty.call(e, n)
  }, t.p = "", t(t.s = 0)
}([function (e, n, t) {
  t(1), e.exports = t(4)
}, function (e, n, t) {
  ! function (e) {
    "use strict";
    void 0 === e.notifyNonsense && (e.notifyNonsense = function () {
      t(2);
      var n, o, r, c, i = t(3),
        a = {},
        u = !1,
        l = function () {
          a.nnOk = document.createElement("span"), a.nnCancel = document.createElement("span"), a.nnOk.innerHTML = "Ok!", a.nnCancel.innerHTML = "Cancel", a.nnOk.setAttribute("class", "nn-action-button ok"), a.nnOk.setAttribute("data-response", "ok"), a.nnCancel.setAttribute("class", "nn-action-button cancel"), a.nnCancel.setAttribute("data-response", "cancel"), a.response = !1
        },
        s = function () {
          var e = document.querySelectorAll(".nn-alert");
          e.length > 0 && e.forEach((function (e) {
            e.addEventListener("click", f)
          }))
        },
        d = function () {
          var e = document.querySelectorAll(".nn-confirm");
          e.length > 0 && e.forEach((function (e) {
            e.addEventListener("click", f)
          }))
        },
        f = function (e) {
          e.preventDefault();
          var t = "";
          u ? t = c : (r = e.target.getAttribute("class"), t = e.target.getAttribute("data-notify-text")), void 0 === n ? m(t) : b(t), y()
        },
        p = function (e) {
          e.preventDefault();
          var n = e.target.getAttribute("data-response");
          a.response = "ok" === n, v()
        },
        y = function () {
          void 0 !== r && ("nn-alert" === r ? (document.querySelector(".cancel").classList.add("nn-hide"), document.querySelector(".nn-buttons").classList.add("nn-single")) : (document.querySelector(".cancel").classList.remove("nn-hide"), document.querySelector(".nn-buttons").classList.remove("nn-single")))
        },
        v = function () {
          n.setAttribute("class", "nn-hide")
        },
        b = function (e) {
          document.querySelector("#nn-alert-text").innerHTML = "<p>" + e + "</p>", n.classList.remove("nn-hide"), i.fadeIn(n, 1e3)
        },
        m = function (e) {
          (n = document.createElement("div")).setAttribute("id", "nn-alert");
          var t = document.createElement("div");
          t.setAttribute("id", "nn-alert-text");
          var r = document.createElement("div");
          t.innerHTML = "<p>" + e + "</p>", r.setAttribute("class", "nn-buttons"), r.appendChild(a.nnCancel), r.appendChild(a.nnOk), n.appendChild(t), n.appendChild(r), o = document.getElementById("nn-container"), i.fadeIn(document.body.insertBefore(n, o), 1e3), document.querySelectorAll(".nn-action-button").forEach((function (e) {
            e.addEventListener("click", p)
          }))
        };
      return a.init = function () {
        var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        l(), n.global ? (u = !0, r = n.type, o = document.querySelector("body"), c = n.text, e.addEventListener(n.event, f)) : (s(), d())
      }, a.getResponse = function () {
        return a.response
      }, a
    }())
  }(window)
}, function (e, n) {
  var t = {
    isMobile: function () {
      return window.innerWidth < 768
    }
  };
  e.exports = t
}, function (e, n) {
  var t = {
    fadeIn: function (e, n) {
      e.style.opacity = 0;
      var t = Date.now(),
        o = setInterval((function () {
          Date.now() - t >= n || e.style.opacity > 1 ? clearInterval(o) : e.style.opacity = parseFloat(e.style.opacity) + .01
        }))
    },
    fadeOut: function (e, n) {
      e.style.opacity = 1;
      var t = Date.now(),
        o = setInterval((function () {
          Date.now() - t >= n || e.style.opacity < 0 ? clearInterval(o) : e.style.opacity = parseFloat(e.style.opacity) - .01
        }))
    }
  };
  e.exports = t
}, function (e, n, t) {
  e.exports = t.p + "css/notify-nonsense.css"
}]);
