"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

webpackJsonp([1], { 237: function _(e, t, r) {
    "use strict";
    function n(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }function o(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" !== (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" !== typeof t ? e : t;
    }function a(e, t) {
      if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
    }Object.defineProperty(t, "__esModule", { value: !0 });var c = r(5),
        i = r.n(c),
        s = r(416),
        l = function () {
      function e(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
        }
      }return function (t, r, n) {
        return r && e(t.prototype, r), n && e(t, n), t;
      };
    }(),
        u = function (e) {
      function t() {
        return n(this, t), o(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments));
      }return a(t, e), l(t, [{ key: "render", value: function value() {
          return i.a.createElement("div", { className: "project-list row" }, i.a.createElement(s.a, { url: "https://github.com/Vvitali/TheCryptoShop", title: "TheCryptoShop", imgSrc: "https://github.com/Vvitali/TheCryptoShop/raw/master/media/main.gif", descr: "Online shop where you can buy eBay goods using Bitcoin!" }), i.a.createElement(s.a, { url: "https://github.com/Vvitali/Secret-Santa", title: "Secret-Santa", imgSrc: "https://raw.githubusercontent.com/dfarrenk/ProjectOne/master/screenshot/index.png", descr: "Application for exchanging Christmas presents anonymously" }), i.a.createElement(s.a, { url: "https://github.com/Vvitali/mealCrave", title: "mealCrave", imgSrc: "https://raw.githubusercontent.com/schapm16/mealCrave/development/media/main.jpg", descr: "Find dishes from local restaurants that have been curated and posted by users" }), i.a.createElement(s.a, null), i.a.createElement(s.a, null));
        } }]), t;
    }(c.Component);t.default = u;
  }, 416: function _(e, t, r) {
    "use strict";
    function n(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }function o(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" !== (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" !== typeof t ? e : t;
    }function a(e, t) {
      if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
    }var c = r(5),
        i = r.n(c),
        s = r(417),
        l = (r.n(s), function () {
      function e(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
        }
      }return function (t, r, n) {
        return r && e(t.prototype, r), n && e(t, n), t;
      };
    }()),
        u = function (e) {
      function t() {
        return n(this, t), o(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments));
      }return a(t, e), l(t, [{ key: "render", value: function value() {
          return i.a.createElement("div", { className: "col-sm-6 col-md-4" }, i.a.createElement("div", { className: "thumbnail" }, i.a.createElement("img", { src: this.props.imgSrc ? this.props.imgSrc : "http://via.placeholder.com/650x350", alt: "Project" }), i.a.createElement("div", { className: "caption" }, i.a.createElement("h3", null, this.props.title ? this.props.title : "Future project"), i.a.createElement("p", null, this.props.descr ? this.props.descr : "Very cool future project! " + this.props.title), i.a.createElement("p", null, i.a.createElement("a", { href: this.props.url, target: "_blank", className: "btn btn-primary", role: "button" }, "Go!")))));
        } }]), t;
    }(c.Component);t.a = u;
  }, 417: function _(e, t, r) {
    var n = r(418);"string" === typeof n && (n = [[e.i, n, ""]]);var o = {};o.transform = void 0;r(234)(n, o);n.locals && (e.exports = n.locals);
  }, 418: function _(e, t, r) {
    t = e.exports = r(233)(!0), t.push([e.i, ".btn{background-color:#d3d3d3;color:#000;border:none}", "", { version: 3, sources: ["C:/Users/logos/Documents/Project/Personal-web-site/src/Components/PortfolioItem/style.css"], names: [], mappings: "AAAC,KACC,yBAA0B,AAC1B,WAAa,AACb,WAAa,CAEb", file: "style.css", sourcesContent: [" .btn{\r\n \tbackground-color: #D3D3D3;\r\n \tcolor: black;\r\n \tborder: none;\r\n\r\n }"], sourceRoot: "" }]);
  } });
//# sourceMappingURL=1.58171f36.chunk.js.map