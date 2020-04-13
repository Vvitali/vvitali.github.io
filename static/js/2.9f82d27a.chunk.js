"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

webpackJsonp([2], { 235: function _(e, t, n) {
    "use strict";
    function o(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }function r(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" !== (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" !== typeof t ? e : t;
    }function a(e, t) {
      if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
    }Object.defineProperty(t, "__esModule", { value: !0 });var i = n(5),
        c = n.n(i),
        u = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
        }
      }return function (t, n, o) {
        return n && e(t.prototype, n), o && e(t, o), t;
      };
    }(),
        l = function (e) {
      function t() {
        return o(this, t), r(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments));
      }return a(t, e), u(t, [{ key: "render", value: function value() {
          return c.a.createElement("div", { className: "BioStyle" }, c.a.createElement("h1", null, "Hello!"), c.a.createElement("img", { src: "/images/ava.jpg", alt: "Vitaliy's face" }), c.a.createElement("p", null, "My name is Vitaliy Vorobyev, and I'm a Full-stack web-developer. Now, you can see my home-page where you can find my contacts, some of my projects, and just some interesting things"));
        } }]), t;
    }(i.Component);t.default = l;
  } });
//# sourceMappingURL=2.9f82d27a.chunk.js.map