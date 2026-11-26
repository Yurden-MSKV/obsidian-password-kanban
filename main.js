var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  try {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  } catch (e) {
    throw mod = 0, e;
  }
};

// node_modules/sortablejs/Sortable.min.js
var require_Sortable_min = __commonJS({
  "node_modules/sortablejs/Sortable.min.js"(exports2, module2) {
    !(function(t2, e) {
      "object" == typeof exports2 && "undefined" != typeof module2 ? module2.exports = e() : "function" == typeof define && define.amd ? define(e) : (t2 = t2 || self).Sortable = e();
    })(exports2, function() {
      "use strict";
      function o(t3, e2) {
        (null == e2 || e2 > t3.length) && (e2 = t3.length);
        for (var n2 = 0, o2 = Array(e2); n2 < e2; n2++) o2[n2] = t3[n2];
        return o2;
      }
      function i(t3, e2, n2) {
        return (e2 = (function(t4) {
          t4 = (function(t5, e3) {
            if ("object" != typeof t5 || !t5) return t5;
            var n3 = t5[Symbol.toPrimitive];
            if (void 0 === n3) return ("string" === e3 ? String : Number)(t5);
            e3 = n3.call(t5, e3 || "default");
            if ("object" != typeof e3) return e3;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          })(t4, "string");
          return "symbol" == typeof t4 ? t4 : t4 + "";
        })(e2)) in t3 ? Object.defineProperty(t3, e2, { value: n2, enumerable: true, configurable: true, writable: true }) : t3[e2] = n2, t3;
      }
      function a() {
        return (a = Object.assign ? Object.assign.bind() : function(t3) {
          for (var e2 = 1; e2 < arguments.length; e2++) {
            var n2, o2 = arguments[e2];
            for (n2 in o2) !{}.hasOwnProperty.call(o2, n2) || (t3[n2] = o2[n2]);
          }
          return t3;
        }).apply(null, arguments);
      }
      function r(e2, t3) {
        var n2, o2 = Object.keys(e2);
        return Object.getOwnPropertySymbols && (n2 = Object.getOwnPropertySymbols(e2), t3 && (n2 = n2.filter(function(t4) {
          return Object.getOwnPropertyDescriptor(e2, t4).enumerable;
        })), o2.push.apply(o2, n2)), o2;
      }
      function I(e2) {
        for (var t3 = 1; t3 < arguments.length; t3++) {
          var n2 = null != arguments[t3] ? arguments[t3] : {};
          t3 % 2 ? r(Object(n2), true).forEach(function(t4) {
            i(e2, t4, n2[t4]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : r(Object(n2)).forEach(function(t4) {
            Object.defineProperty(e2, t4, Object.getOwnPropertyDescriptor(n2, t4));
          });
        }
        return e2;
      }
      function l(t3, e2) {
        if (null == t3) return {};
        var n2, o2 = (function(t4, e3) {
          if (null == t4) return {};
          var n3, o3 = {};
          for (n3 in t4) if ({}.hasOwnProperty.call(t4, n3)) {
            if (-1 !== e3.indexOf(n3)) continue;
            o3[n3] = t4[n3];
          }
          return o3;
        })(t3, e2);
        if (Object.getOwnPropertySymbols) for (var i2 = Object.getOwnPropertySymbols(t3), r2 = 0; r2 < i2.length; r2++) n2 = i2[r2], -1 === e2.indexOf(n2) && {}.propertyIsEnumerable.call(t3, n2) && (o2[n2] = t3[n2]);
        return o2;
      }
      function e(t3) {
        return (function(t4) {
          if (Array.isArray(t4)) return o(t4);
        })(t3) || (function(t4) {
          if ("undefined" != typeof Symbol && null != t4[Symbol.iterator] || null != t4["@@iterator"]) return Array.from(t4);
        })(t3) || (function(t4, e2) {
          if (t4) {
            if ("string" == typeof t4) return o(t4, e2);
            var n2 = {}.toString.call(t4).slice(8, -1);
            return "Map" === (n2 = "Object" === n2 && t4.constructor ? t4.constructor.name : n2) || "Set" === n2 ? Array.from(t4) : "Arguments" === n2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2) ? o(t4, e2) : void 0;
          }
        })(t3) || (function() {
          throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        })();
      }
      function s(t3) {
        return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
          return typeof t4;
        } : function(t4) {
          return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
        })(t3);
      }
      function t2(t3) {
        if ("undefined" != typeof window && window.navigator) return !!navigator.userAgent.match(t3);
      }
      var y = t2(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), w = t2(/Edge/i), c = t2(/firefox/i), u = t2(/safari/i) && !t2(/chrome/i) && !t2(/android/i), d = t2(/iP(ad|od|hone)/i), n = t2(/chrome/i) && t2(/android/i), h = { capture: false, passive: false };
      function f(t3, e2, n2) {
        t3.addEventListener(e2, n2, !y && h);
      }
      function p(t3, e2, n2) {
        t3.removeEventListener(e2, n2, !y && h);
      }
      function g(t3, e2) {
        if (e2 && (">" === e2[0] && (e2 = e2.substring(1)), t3)) try {
          if (t3.matches) return t3.matches(e2);
          if (t3.msMatchesSelector) return t3.msMatchesSelector(e2);
          if (t3.webkitMatchesSelector) return t3.webkitMatchesSelector(e2);
        } catch (t4) {
          return;
        }
      }
      function m(t3) {
        return t3.host && t3 !== document && t3.host.nodeType && t3.host !== t3 ? t3.host : t3.parentNode;
      }
      function P(t3, e2, n2, o2) {
        if (t3) {
          n2 = n2 || document;
          do {
            if (null != e2 && (">" !== e2[0] || t3.parentNode === n2) && g(t3, e2) || o2 && t3 === n2) return t3;
          } while (t3 !== n2 && (t3 = m(t3)));
        }
        return null;
      }
      var v, b = /\s+/g;
      function k(t3, e2, n2) {
        var o2;
        t3 && e2 && (t3.classList ? t3.classList[n2 ? "add" : "remove"](e2) : (o2 = (" " + t3.className + " ").replace(b, " ").replace(" " + e2 + " ", " "), t3.className = (o2 + (n2 ? " " + e2 : "")).replace(b, " ")));
      }
      function R(t3, e2, n2) {
        var o2 = t3 && t3.style;
        if (o2) {
          if (void 0 === n2) return document.defaultView && document.defaultView.getComputedStyle ? n2 = document.defaultView.getComputedStyle(t3, "") : t3.currentStyle && (n2 = t3.currentStyle), void 0 === e2 ? n2 : n2[e2];
          o2[e2 = !(e2 in o2 || -1 !== e2.indexOf("webkit")) ? "-webkit-" + e2 : e2] = n2 + ("string" == typeof n2 ? "" : "px");
        }
      }
      function D(t3, e2) {
        var n2 = "";
        if ("string" == typeof t3) n2 = t3;
        else do {
          var o2 = R(t3, "transform");
        } while (o2 && "none" !== o2 && (n2 = o2 + " " + n2), !e2 && (t3 = t3.parentNode));
        var i2 = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
        return i2 && new i2(n2);
      }
      function E(t3, e2, n2) {
        if (t3) {
          var o2 = t3.getElementsByTagName(e2), i2 = 0, r2 = o2.length;
          if (n2) for (; i2 < r2; i2++) n2(o2[i2], i2);
          return o2;
        }
        return [];
      }
      function O() {
        var t3 = document.scrollingElement;
        return t3 || document.documentElement;
      }
      function X(t3, e2, n2, o2, i2) {
        if (t3.getBoundingClientRect || t3 === window) {
          var r2, a2, l2, s2, c2, u2, d2 = t3 !== window && t3.parentNode && t3 !== O() ? (a2 = (r2 = t3.getBoundingClientRect()).top, l2 = r2.left, s2 = r2.bottom, c2 = r2.right, u2 = r2.height, r2.width) : (l2 = a2 = 0, s2 = window.innerHeight, c2 = window.innerWidth, u2 = window.innerHeight, window.innerWidth);
          if ((e2 || n2) && t3 !== window && (i2 = i2 || t3.parentNode, !y)) do {
            if (i2 && i2.getBoundingClientRect && ("none" !== R(i2, "transform") || n2 && "static" !== R(i2, "position"))) {
              var h2 = i2.getBoundingClientRect();
              a2 -= h2.top + parseInt(R(i2, "border-top-width")), l2 -= h2.left + parseInt(R(i2, "border-left-width")), s2 = a2 + r2.height, c2 = l2 + r2.width;
              break;
            }
          } while (i2 = i2.parentNode);
          return o2 && t3 !== window && (o2 = (e2 = D(i2 || t3)) && e2.a, t3 = e2 && e2.d, e2 && (s2 = (a2 /= t3) + (u2 /= t3), c2 = (l2 /= o2) + (d2 /= o2))), { top: a2, left: l2, bottom: s2, right: c2, width: d2, height: u2 };
        }
      }
      function Y(t3, e2, n2) {
        for (var o2 = M(t3, true), i2 = X(t3)[e2]; o2; ) {
          var r2 = X(o2)[n2];
          if (!("top" === n2 || "left" === n2 ? r2 <= i2 : i2 <= r2)) return o2;
          if (o2 === O()) break;
          o2 = M(o2, false);
        }
        return false;
      }
      function B(t3, e2, n2, o2) {
        for (var i2 = 0, r2 = 0, a2 = t3.children; r2 < a2.length; ) {
          if ("none" !== a2[r2].style.display && a2[r2] !== Ht.ghost && (o2 || a2[r2] !== Ht.dragged) && P(a2[r2], n2.draggable, t3, false)) {
            if (i2 === e2) return a2[r2];
            i2++;
          }
          r2++;
        }
        return null;
      }
      function F(t3, e2) {
        for (var n2 = t3.lastElementChild; n2 && (n2 === Ht.ghost || "none" === R(n2, "display") || e2 && !g(n2, e2)); ) n2 = n2.previousElementSibling;
        return n2 || null;
      }
      function j(t3, e2) {
        var n2 = 0;
        if (!t3 || !t3.parentNode) return -1;
        for (; t3 = t3.previousElementSibling; ) "TEMPLATE" === t3.nodeName.toUpperCase() || t3 === Ht.clone || e2 && !g(t3, e2) || n2++;
        return n2;
      }
      function S(t3) {
        var e2 = 0, n2 = 0, o2 = O();
        if (t3) do {
          var i2 = D(t3), r2 = i2.a, i2 = i2.d;
        } while (e2 += t3.scrollLeft * r2, n2 += t3.scrollTop * i2, t3 !== o2 && (t3 = t3.parentNode));
        return [e2, n2];
      }
      function M(t3, e2) {
        if (!t3 || !t3.getBoundingClientRect) return O();
        var n2 = t3, o2 = false;
        do {
          if (n2.clientWidth < n2.scrollWidth || n2.clientHeight < n2.scrollHeight) {
            var i2 = R(n2);
            if (n2.clientWidth < n2.scrollWidth && ("auto" == i2.overflowX || "scroll" == i2.overflowX) || n2.clientHeight < n2.scrollHeight && ("auto" == i2.overflowY || "scroll" == i2.overflowY)) {
              if (!n2.getBoundingClientRect || n2 === document.body) return O();
              if (o2 || e2) return n2;
              o2 = true;
            }
          }
        } while (n2 = n2.parentNode);
        return O();
      }
      function _(t3, e2) {
        return Math.round(t3.top) === Math.round(e2.top) && Math.round(t3.left) === Math.round(e2.left) && Math.round(t3.height) === Math.round(e2.height) && Math.round(t3.width) === Math.round(e2.width);
      }
      function C(e2, n2) {
        return function() {
          var t3;
          v || (1 === (t3 = arguments).length ? e2.call(this, t3[0]) : e2.apply(this, t3), v = setTimeout(function() {
            v = void 0;
          }, n2));
        };
      }
      function H(t3, e2, n2) {
        t3.scrollLeft += e2, t3.scrollTop += n2;
      }
      function T(t3) {
        var e2 = window.Polymer, n2 = window.jQuery || window.Zepto;
        return e2 && e2.dom ? e2.dom(t3).cloneNode(true) : n2 ? n2(t3).clone(true)[0] : t3.cloneNode(true);
      }
      function x(t3, e2) {
        R(t3, "position", "absolute"), R(t3, "top", e2.top), R(t3, "left", e2.left), R(t3, "width", e2.width), R(t3, "height", e2.height);
      }
      function A(t3) {
        R(t3, "position", ""), R(t3, "top", ""), R(t3, "left", ""), R(t3, "width", ""), R(t3, "height", "");
      }
      function L(n2, o2, i2) {
        var r2 = {};
        return Array.from(n2.children).forEach(function(t3) {
          var e2;
          P(t3, o2.draggable, n2, false) && !t3.animated && t3 !== i2 && (e2 = X(t3), r2.left = Math.min(null !== (t3 = r2.left) && void 0 !== t3 ? t3 : 1 / 0, e2.left), r2.top = Math.min(null !== (t3 = r2.top) && void 0 !== t3 ? t3 : 1 / 0, e2.top), r2.right = Math.max(null !== (t3 = r2.right) && void 0 !== t3 ? t3 : -1 / 0, e2.right), r2.bottom = Math.max(null !== (t3 = r2.bottom) && void 0 !== t3 ? t3 : -1 / 0, e2.bottom));
        }), r2.width = r2.right - r2.left, r2.height = r2.bottom - r2.top, r2.x = r2.left, r2.y = r2.top, r2;
      }
      var K = "Sortable" + (/* @__PURE__ */ new Date()).getTime();
      function N() {
        var e2, o2 = [];
        return { captureAnimationState: function() {
          o2 = [], this.options.animation && [].slice.call(this.el.children).forEach(function(t3) {
            var e3, n2;
            "none" !== R(t3, "display") && t3 !== Ht.ghost && (o2.push({ target: t3, rect: X(t3) }), e3 = I({}, o2[o2.length - 1].rect), !t3.thisAnimationDuration || (n2 = D(t3, true)) && (e3.top -= n2.f, e3.left -= n2.e), t3.fromRect = e3);
          });
        }, addAnimationState: function(t3) {
          o2.push(t3);
        }, removeAnimationState: function(t3) {
          o2.splice((function(t4, e3) {
            for (var n2 in t4) if (t4.hasOwnProperty(n2)) {
              for (var o3 in e3) if (e3.hasOwnProperty(o3) && e3[o3] === t4[n2][o3]) return Number(n2);
            }
            return -1;
          })(o2, { target: t3 }), 1);
        }, animateAll: function(t3) {
          var c2 = this;
          if (!this.options.animation) return clearTimeout(e2), void ("function" == typeof t3 && t3());
          var u2 = false, d2 = 0;
          o2.forEach(function(t4) {
            var e3 = 0, n2 = t4.target, o3 = n2.fromRect, i2 = X(n2), r2 = n2.prevFromRect, a2 = n2.prevToRect, l2 = t4.rect, s2 = D(n2, true);
            s2 && (i2.top -= s2.f, i2.left -= s2.e), n2.toRect = i2, n2.thisAnimationDuration && _(r2, i2) && !_(o3, i2) && (l2.top - i2.top) / (l2.left - i2.left) == (o3.top - i2.top) / (o3.left - i2.left) && (t4 = l2, s2 = r2, r2 = a2, a2 = c2.options, e3 = Math.sqrt(Math.pow(s2.top - t4.top, 2) + Math.pow(s2.left - t4.left, 2)) / Math.sqrt(Math.pow(s2.top - r2.top, 2) + Math.pow(s2.left - r2.left, 2)) * a2.animation), _(i2, o3) || (n2.prevFromRect = o3, n2.prevToRect = i2, e3 = e3 || c2.options.animation, c2.animate(n2, l2, i2, e3)), e3 && (u2 = true, d2 = Math.max(d2, e3), clearTimeout(n2.animationResetTimer), n2.animationResetTimer = setTimeout(function() {
              n2.animationTime = 0, n2.prevFromRect = null, n2.fromRect = null, n2.prevToRect = null, n2.thisAnimationDuration = null;
            }, e3), n2.thisAnimationDuration = e3);
          }), clearTimeout(e2), u2 ? e2 = setTimeout(function() {
            "function" == typeof t3 && t3();
          }, d2) : "function" == typeof t3 && t3(), o2 = [];
        }, animate: function(t3, e3, n2, o3) {
          var i2, r2;
          o3 && (R(t3, "transition", ""), R(t3, "transform", ""), i2 = (r2 = D(this.el)) && r2.a, r2 = r2 && r2.d, i2 = (e3.left - n2.left) / (i2 || 1), r2 = (e3.top - n2.top) / (r2 || 1), t3.animatingX = !!i2, t3.animatingY = !!r2, R(t3, "transform", "translate3d(" + i2 + "px," + r2 + "px,0)"), this.forRepaintDummy = t3.offsetWidth, R(t3, "transition", "transform " + o3 + "ms" + (this.options.easing ? " " + this.options.easing : "")), R(t3, "transform", "translate3d(0,0,0)"), "number" == typeof t3.animated && clearTimeout(t3.animated), t3.animated = setTimeout(function() {
            R(t3, "transition", ""), R(t3, "transform", ""), t3.animated = false, t3.animatingX = false, t3.animatingY = false;
          }, o3));
        } };
      }
      var W = [], z = { initializeByDefault: true }, G = { mount: function(e2) {
        for (var t3 in z) !z.hasOwnProperty(t3) || t3 in e2 || (e2[t3] = z[t3]);
        W.forEach(function(t4) {
          if (t4.pluginName === e2.pluginName) throw "Sortable: Cannot mount plugin ".concat(e2.pluginName, " more than once");
        }), W.push(e2);
      }, pluginEvent: function(e2, n2, o2) {
        var t3 = this;
        this.eventCanceled = false, o2.cancel = function() {
          t3.eventCanceled = true;
        };
        var i2 = e2 + "Global";
        W.forEach(function(t4) {
          n2[t4.pluginName] && (n2[t4.pluginName][i2] && n2[t4.pluginName][i2](I({ sortable: n2 }, o2)), n2.options[t4.pluginName] && n2[t4.pluginName][e2] && n2[t4.pluginName][e2](I({ sortable: n2 }, o2)));
        });
      }, initializePlugins: function(n2, o2, i2, t3) {
        for (var e2 in W.forEach(function(t4) {
          var e3 = t4.pluginName;
          (n2.options[e3] || t4.initializeByDefault) && ((t4 = new t4(n2, o2, n2.options)).sortable = n2, t4.options = n2.options, n2[e3] = t4, a(i2, t4.defaults));
        }), n2.options) {
          var r2;
          n2.options.hasOwnProperty(e2) && (void 0 !== (r2 = this.modifyOption(n2, e2, n2.options[e2])) && (n2.options[e2] = r2));
        }
      }, getEventProperties: function(e2, n2) {
        var o2 = {};
        return W.forEach(function(t3) {
          "function" == typeof t3.eventProperties && a(o2, t3.eventProperties.call(n2[t3.pluginName], e2));
        }), o2;
      }, modifyOption: function(e2, n2, o2) {
        var i2;
        return W.forEach(function(t3) {
          e2[t3.pluginName] && t3.optionListeners && "function" == typeof t3.optionListeners[n2] && (i2 = t3.optionListeners[n2].call(e2[t3.pluginName], o2));
        }), i2;
      } };
      function U(t3) {
        var e2 = t3.sortable, n2 = t3.rootEl, o2 = t3.name, i2 = t3.targetEl, r2 = t3.cloneEl, a2 = t3.toEl, l2 = t3.fromEl, s2 = t3.oldIndex, c2 = t3.newIndex, u2 = t3.oldDraggableIndex, d2 = t3.newDraggableIndex, h2 = t3.originalEvent, f2 = t3.putSortable, p2 = t3.extraEventProperties;
        if (e2 = e2 || n2 && n2[K]) {
          var g2, m2 = e2.options, t3 = "on" + o2.charAt(0).toUpperCase() + o2.substr(1);
          !window.CustomEvent || y || w ? (g2 = document.createEvent("Event")).initEvent(o2, true, true) : g2 = new CustomEvent(o2, { bubbles: true, cancelable: true }), g2.to = a2 || n2, g2.from = l2 || n2, g2.item = i2 || n2, g2.clone = r2, g2.oldIndex = s2, g2.newIndex = c2, g2.oldDraggableIndex = u2, g2.newDraggableIndex = d2, g2.originalEvent = h2, g2.pullMode = f2 ? f2.lastPutMode : void 0;
          var v2, b2 = I(I({}, p2), G.getEventProperties(o2, e2));
          for (v2 in b2) g2[v2] = b2[v2];
          n2 && n2.dispatchEvent(g2), m2[t3] && m2[t3].call(e2, g2);
        }
      }
      function q(t3, e2) {
        var n2 = (o2 = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}).evt, o2 = l(o2, V);
        G.pluginEvent.bind(Ht)(t3, e2, I({ dragEl: $, parentEl: Q, ghostEl: J, rootEl: tt, nextEl: et, lastDownEl: nt, cloneEl: ot, cloneHidden: it, dragStarted: vt, putSortable: ut, activeSortable: Ht.active, originalEvent: n2, oldIndex: rt, oldDraggableIndex: lt, newIndex: at, newDraggableIndex: st, hideGhostForTarget: Yt, unhideGhostForTarget: Bt, cloneNowHidden: function() {
          it = true;
        }, cloneNowShown: function() {
          it = false;
        }, dispatchSortableEvent: function(t4) {
          Z({ sortable: e2, name: t4, originalEvent: n2 });
        } }, o2));
      }
      var V = ["evt"];
      function Z(t3) {
        U(I({ putSortable: ut, cloneEl: ot, targetEl: $, rootEl: tt, oldIndex: rt, oldDraggableIndex: lt, newIndex: at, newDraggableIndex: st }, t3));
      }
      var $, Q, J, tt, et, nt, ot, it, rt, at, lt, st, ct, ut, dt, ht, ft, pt, gt, mt, vt, bt, yt, wt, Dt, Et = false, St = false, _t = [], Ct = false, Tt = false, xt = [], Ot = false, Mt = [], At = "undefined" != typeof document, Nt = d, It = w || y ? "cssFloat" : "float", Pt = At && !n && !d && "draggable" in document.createElement("div"), kt = (function() {
        if (At) {
          if (y) return false;
          var t3 = document.createElement("x");
          return t3.style.cssText = "pointer-events:auto", "auto" === t3.style.pointerEvents;
        }
      })(), Rt = function(t3, e2) {
        var n2 = R(t3), o2 = parseInt(n2.width) - parseInt(n2.paddingLeft) - parseInt(n2.paddingRight) - parseInt(n2.borderLeftWidth) - parseInt(n2.borderRightWidth), i2 = B(t3, 0, e2), r2 = B(t3, 1, e2), a2 = i2 && R(i2), l2 = r2 && R(r2), s2 = a2 && parseInt(a2.marginLeft) + parseInt(a2.marginRight) + X(i2).width, t3 = l2 && parseInt(l2.marginLeft) + parseInt(l2.marginRight) + X(r2).width;
        if ("flex" === n2.display) return "column" === n2.flexDirection || "column-reverse" === n2.flexDirection ? "vertical" : "horizontal";
        if ("grid" === n2.display) return n2.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
        if (i2 && a2.float && "none" !== a2.float) {
          e2 = "left" === a2.float ? "left" : "right";
          return !r2 || "both" !== l2.clear && l2.clear !== e2 ? "horizontal" : "vertical";
        }
        return i2 && ("block" === a2.display || "flex" === a2.display || "table" === a2.display || "grid" === a2.display || o2 <= s2 && "none" === n2[It] || r2 && "none" === n2[It] && o2 < s2 + t3) ? "vertical" : "horizontal";
      }, Xt = function(t3) {
        function l2(r2, a2) {
          return function(t4, e3, n3, o2) {
            var i2 = t4.options.group.name && e3.options.group.name && t4.options.group.name === e3.options.group.name;
            if (null == r2 && (a2 || i2)) return true;
            if (null == r2 || false === r2) return false;
            if (a2 && "clone" === r2) return r2;
            if ("function" == typeof r2) return l2(r2(t4, e3, n3, o2), a2)(t4, e3, n3, o2);
            e3 = (a2 ? t4 : e3).options.group.name;
            return true === r2 || "string" == typeof r2 && r2 === e3 || r2.join && -1 < r2.indexOf(e3);
          };
        }
        var e2 = {}, n2 = t3.group;
        n2 && "object" == s(n2) || (n2 = { name: n2 }), e2.name = n2.name, e2.checkPull = l2(n2.pull, true), e2.checkPut = l2(n2.put), e2.revertClone = n2.revertClone, t3.group = e2;
      }, Yt = function() {
        !kt && J && R(J, "display", "none");
      }, Bt = function() {
        !kt && J && R(J, "display", "");
      };
      At && !n && document.addEventListener("click", function(t3) {
        if (St) return t3.preventDefault(), t3.stopPropagation && t3.stopPropagation(), t3.stopImmediatePropagation && t3.stopImmediatePropagation(), St = false;
      }, true);
      function Ft(t3) {
        if ($) {
          t3 = t3.touches ? t3.touches[0] : t3;
          var e2 = (i2 = t3.clientX, r2 = t3.clientY, _t.some(function(t4) {
            var e3 = t4[K].options.emptyInsertThreshold;
            if (e3 && !F(t4)) {
              var n3 = X(t4), o3 = i2 >= n3.left - e3 && i2 <= n3.right + e3, e3 = r2 >= n3.top - e3 && r2 <= n3.bottom + e3;
              return o3 && e3 ? a2 = t4 : void 0;
            }
          }), a2);
          if (e2) {
            var n2, o2 = {};
            for (n2 in t3) t3.hasOwnProperty(n2) && (o2[n2] = t3[n2]);
            o2.target = o2.rootEl = e2, o2.preventDefault = void 0, o2.stopPropagation = void 0, e2[K]._onDragOver(o2);
          }
        }
        var i2, r2, a2;
      }
      function jt(t3) {
        $ && $.parentNode[K]._isOutsideThisEl(t3.target);
      }
      function Ht(t3, e2) {
        if (!t3 || !t3.nodeType || 1 !== t3.nodeType) throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(t3));
        this.el = t3, this.options = e2 = a({}, e2), t3[K] = this;
        var n2, o2, i2 = { group: null, sort: true, disabled: false, store: null, handle: null, draggable: /^[uo]l$/i.test(t3.nodeName) ? ">li" : ">*", swapThreshold: 1, invertSwap: false, invertedSwapThreshold: null, removeCloneOnHide: true, direction: function() {
          return Rt(t3, this.options);
        }, ghostClass: "sortable-ghost", chosenClass: "sortable-chosen", dragClass: "sortable-drag", ignore: "a, img", filter: null, preventOnFilter: true, animation: 0, easing: null, setData: function(t4, e3) {
          t4.setData("Text", e3.textContent);
        }, dropBubble: false, dragoverBubble: false, dataIdAttr: "data-id", delay: 0, delayOnTouchOnly: false, touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1, forceFallback: false, fallbackClass: "sortable-fallback", fallbackOnBody: false, fallbackTolerance: 0, fallbackOffset: { x: 0, y: 0 }, supportPointer: false !== Ht.supportPointer && "PointerEvent" in window && (!u || d), emptyInsertThreshold: 5 };
        for (n2 in G.initializePlugins(this, t3, i2), i2) n2 in e2 || (e2[n2] = i2[n2]);
        for (o2 in Xt(e2), this) "_" === o2.charAt(0) && "function" == typeof this[o2] && (this[o2] = this[o2].bind(this));
        this.nativeDraggable = !e2.forceFallback && Pt, this.nativeDraggable && (this.options.touchStartThreshold = 1), e2.supportPointer ? f(t3, "pointerdown", this._onTapStart) : (f(t3, "mousedown", this._onTapStart), f(t3, "touchstart", this._onTapStart)), this.nativeDraggable && (f(t3, "dragover", this), f(t3, "dragenter", this)), _t.push(this.el), e2.store && e2.store.get && this.sort(e2.store.get(this) || []), a(this, N());
      }
      function Lt(t3, e2, n2, o2, i2, r2, a2, l2) {
        var s2, c2, u2 = t3[K], d2 = u2.options.onMove;
        return !window.CustomEvent || y || w ? (s2 = document.createEvent("Event")).initEvent("move", true, true) : s2 = new CustomEvent("move", { bubbles: true, cancelable: true }), s2.to = e2, s2.from = t3, s2.dragged = n2, s2.draggedRect = o2, s2.related = i2 || e2, s2.relatedRect = r2 || X(e2), s2.willInsertAfter = l2, s2.originalEvent = a2, t3.dispatchEvent(s2), c2 = d2 ? d2.call(u2, s2, a2) : c2;
      }
      function Kt(t3) {
        t3.draggable = false;
      }
      function Wt() {
        Ot = false;
      }
      function zt(t3) {
        return setTimeout(t3, 0);
      }
      function Gt(t3) {
        return clearTimeout(t3);
      }
      Ht.prototype = { constructor: Ht, _isOutsideThisEl: function(t3) {
        this.el.contains(t3) || t3 === this.el || (bt = null);
      }, _getDirection: function(t3, e2) {
        return "function" == typeof this.options.direction ? this.options.direction.call(this, t3, e2, $) : this.options.direction;
      }, _onTapStart: function(e2) {
        if (e2.cancelable) {
          var n2 = this, o2 = this.el, t3 = this.options, i2 = t3.preventOnFilter, r2 = e2.type, a2 = e2.touches && e2.touches[0] || e2.pointerType && "touch" === e2.pointerType && e2, l2 = (a2 || e2).target, s2 = e2.target.shadowRoot && (e2.path && e2.path[0] || e2.composedPath && e2.composedPath()[0]) || l2, c2 = t3.filter;
          if (!(function(t4) {
            Mt.length = 0;
            var e3 = t4.getElementsByTagName("input"), n3 = e3.length;
            for (; n3--; ) {
              var o3 = e3[n3];
              o3.checked && Mt.push(o3);
            }
          })(o2), !$ && !(/mousedown|pointerdown/.test(r2) && 0 !== e2.button || t3.disabled) && !s2.isContentEditable && (this.nativeDraggable || !u || !l2 || "SELECT" !== l2.tagName.toUpperCase()) && !((l2 = P(l2, t3.draggable, o2, false)) && l2.animated || nt === l2)) {
            if (rt = j(l2), lt = j(l2, t3.draggable), "function" == typeof c2) {
              if (c2.call(this, e2, l2, this)) return Z({ sortable: n2, rootEl: s2, name: "filter", targetEl: l2, toEl: o2, fromEl: o2 }), q("filter", n2, { evt: e2 }), void (i2 && e2.preventDefault());
            } else if (c2 = c2 && c2.split(",").some(function(t4) {
              if (t4 = P(s2, t4.trim(), o2, false)) return Z({ sortable: n2, rootEl: t4, name: "filter", targetEl: l2, fromEl: o2, toEl: o2 }), q("filter", n2, { evt: e2 }), true;
            })) return void (i2 && e2.preventDefault());
            t3.handle && !P(s2, t3.handle, o2, false) || this._prepareDragStart(e2, a2, l2);
          }
        }
      }, _prepareDragStart: function(t3, e2, n2) {
        var o2, i2 = this, r2 = i2.el, a2 = i2.options, l2 = r2.ownerDocument;
        n2 && !$ && n2.parentNode === r2 && (o2 = X(n2), tt = r2, Q = ($ = n2).parentNode, et = $.nextSibling, nt = n2, ct = a2.group, dt = { target: Ht.dragged = $, clientX: (e2 || t3).clientX, clientY: (e2 || t3).clientY }, gt = dt.clientX - o2.left, mt = dt.clientY - o2.top, this._lastX = (e2 || t3).clientX, this._lastY = (e2 || t3).clientY, $.style["will-change"] = "all", o2 = function() {
          q("delayEnded", i2, { evt: t3 }), Ht.eventCanceled ? i2._onDrop() : (i2._disableDelayedDragEvents(), !c && i2.nativeDraggable && ($.draggable = true), i2._triggerDragStart(t3, e2), Z({ sortable: i2, name: "choose", originalEvent: t3 }), k($, a2.chosenClass, true));
        }, a2.ignore.split(",").forEach(function(t4) {
          E($, t4.trim(), Kt);
        }), f(l2, "dragover", Ft), f(l2, "mousemove", Ft), f(l2, "touchmove", Ft), a2.supportPointer ? (f(l2, "pointerup", i2._onDrop), this.nativeDraggable || f(l2, "pointercancel", i2._onDrop)) : (f(l2, "mouseup", i2._onDrop), f(l2, "touchend", i2._onDrop), f(l2, "touchcancel", i2._onDrop)), c && this.nativeDraggable && (this.options.touchStartThreshold = 4, $.draggable = true), q("delayStart", this, { evt: t3 }), !a2.delay || a2.delayOnTouchOnly && !e2 || this.nativeDraggable && (w || y) ? o2() : Ht.eventCanceled ? this._onDrop() : (a2.supportPointer ? (f(l2, "pointerup", i2._disableDelayedDrag), f(l2, "pointercancel", i2._disableDelayedDrag)) : (f(l2, "mouseup", i2._disableDelayedDrag), f(l2, "touchend", i2._disableDelayedDrag), f(l2, "touchcancel", i2._disableDelayedDrag)), f(l2, "mousemove", i2._delayedDragTouchMoveHandler), f(l2, "touchmove", i2._delayedDragTouchMoveHandler), a2.supportPointer && f(l2, "pointermove", i2._delayedDragTouchMoveHandler), i2._dragStartTimer = setTimeout(o2, a2.delay)));
      }, _delayedDragTouchMoveHandler: function(t3) {
        t3 = t3.touches ? t3.touches[0] : t3;
        Math.max(Math.abs(t3.clientX - this._lastX), Math.abs(t3.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag();
      }, _disableDelayedDrag: function() {
        $ && Kt($), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
      }, _disableDelayedDragEvents: function() {
        var t3 = this.el.ownerDocument;
        p(t3, "mouseup", this._disableDelayedDrag), p(t3, "touchend", this._disableDelayedDrag), p(t3, "touchcancel", this._disableDelayedDrag), p(t3, "pointerup", this._disableDelayedDrag), p(t3, "pointercancel", this._disableDelayedDrag), p(t3, "mousemove", this._delayedDragTouchMoveHandler), p(t3, "touchmove", this._delayedDragTouchMoveHandler), p(t3, "pointermove", this._delayedDragTouchMoveHandler);
      }, _triggerDragStart: function(t3, e2) {
        e2 = e2 || "touch" == t3.pointerType && t3, !this.nativeDraggable || e2 ? this.options.supportPointer ? f(document, "pointermove", this._onTouchMove) : f(document, e2 ? "touchmove" : "mousemove", this._onTouchMove) : (f($, "dragend", this), f(tt, "dragstart", this._onDragStart));
        try {
          document.selection ? zt(function() {
            document.selection.empty();
          }) : window.getSelection().removeAllRanges();
        } catch (t4) {
        }
      }, _dragStarted: function(t3, e2) {
        var n2;
        Et = false, tt && $ ? (q("dragStarted", this, { evt: e2 }), this.nativeDraggable && f(document, "dragover", jt), n2 = this.options, t3 || k($, n2.dragClass, false), k($, n2.ghostClass, true), Ht.active = this, t3 && this._appendGhost(), Z({ sortable: this, name: "start", originalEvent: e2 })) : this._nulling();
      }, _emulateDragOver: function() {
        if (ht) {
          this._lastX = ht.clientX, this._lastY = ht.clientY, Yt();
          for (var t3 = document.elementFromPoint(ht.clientX, ht.clientY), e2 = t3; t3 && t3.shadowRoot && (t3 = t3.shadowRoot.elementFromPoint(ht.clientX, ht.clientY)) !== e2; ) e2 = t3;
          if ($.parentNode[K]._isOutsideThisEl(t3), e2) do {
            if (e2[K]) {
              if (e2[K]._onDragOver({ clientX: ht.clientX, clientY: ht.clientY, target: t3, rootEl: e2 }) && !this.options.dragoverBubble) break;
            }
          } while (e2 = m(t3 = e2));
          Bt();
        }
      }, _onTouchMove: function(t3) {
        if (dt) {
          var e2 = this.options, n2 = e2.fallbackTolerance, o2 = e2.fallbackOffset, i2 = t3.touches ? t3.touches[0] : t3, r2 = J && D(J, true), a2 = J && r2 && r2.a, l2 = J && r2 && r2.d, e2 = Nt && Dt && S(Dt), a2 = (i2.clientX - dt.clientX + o2.x) / (a2 || 1) + (e2 ? e2[0] - xt[0] : 0) / (a2 || 1), l2 = (i2.clientY - dt.clientY + o2.y) / (l2 || 1) + (e2 ? e2[1] - xt[1] : 0) / (l2 || 1);
          if (!Ht.active && !Et) {
            if (n2 && Math.max(Math.abs(i2.clientX - this._lastX), Math.abs(i2.clientY - this._lastY)) < n2) return;
            this._onDragStart(t3, true);
          }
          J && (r2 ? (r2.e += a2 - (ft || 0), r2.f += l2 - (pt || 0)) : r2 = { a: 1, b: 0, c: 0, d: 1, e: a2, f: l2 }, r2 = "matrix(".concat(r2.a, ",").concat(r2.b, ",").concat(r2.c, ",").concat(r2.d, ",").concat(r2.e, ",").concat(r2.f, ")"), R(J, "webkitTransform", r2), R(J, "mozTransform", r2), R(J, "msTransform", r2), R(J, "transform", r2), ft = a2, pt = l2, ht = i2), t3.cancelable && t3.preventDefault();
        }
      }, _appendGhost: function() {
        if (!J) {
          var t3 = this.options.fallbackOnBody ? document.body : tt, e2 = X($, true, Nt, true, t3), n2 = this.options;
          if (Nt) {
            for (Dt = t3; "static" === R(Dt, "position") && "none" === R(Dt, "transform") && Dt !== document; ) Dt = Dt.parentNode;
            Dt !== document.body && Dt !== document.documentElement ? (Dt === document && (Dt = O()), e2.top += Dt.scrollTop, e2.left += Dt.scrollLeft) : Dt = O(), xt = S(Dt);
          }
          k(J = $.cloneNode(true), n2.ghostClass, false), k(J, n2.fallbackClass, true), k(J, n2.dragClass, true), R(J, "transition", ""), R(J, "transform", ""), R(J, "box-sizing", "border-box"), R(J, "margin", 0), R(J, "top", e2.top), R(J, "left", e2.left), R(J, "width", e2.width), R(J, "height", e2.height), R(J, "opacity", "0.8"), R(J, "position", Nt ? "absolute" : "fixed"), R(J, "zIndex", "100000"), R(J, "pointerEvents", "none"), Ht.ghost = J, t3.appendChild(J), R(J, "transform-origin", gt / parseInt(J.style.width) * 100 + "% " + mt / parseInt(J.style.height) * 100 + "%");
        }
      }, _onDragStart: function(t3, e2) {
        var n2 = this, o2 = t3.dataTransfer, i2 = n2.options;
        q("dragStart", this, { evt: t3 }), Ht.eventCanceled ? this._onDrop() : (q("setupClone", this), Ht.eventCanceled || ((ot = T($)).removeAttribute("id"), ot.draggable = false, ot.style["will-change"] = "", this._hideClone(), k(ot, this.options.chosenClass, false), Ht.clone = ot), n2.cloneId = zt(function() {
          q("clone", n2), Ht.eventCanceled || (n2.options.removeCloneOnHide || tt.insertBefore(ot, $), n2._hideClone(), Z({ sortable: n2, name: "clone" }));
        }), e2 || k($, i2.dragClass, true), e2 ? (St = true, n2._loopId = setInterval(n2._emulateDragOver, 50)) : (p(document, "mouseup", n2._onDrop), p(document, "touchend", n2._onDrop), p(document, "touchcancel", n2._onDrop), o2 && (o2.effectAllowed = "move", i2.setData && i2.setData.call(n2, o2, $)), f(document, "drop", n2), R($, "transform", "translateZ(0)")), Et = true, n2._dragStartId = zt(n2._dragStarted.bind(n2, e2, t3)), f(document, "selectstart", n2), vt = true, window.getSelection().removeAllRanges(), u && R(document.body, "user-select", "none"));
      }, _onDragOver: function(n2) {
        var o2, i2, r2, t3, e2, a2 = this.el, l2 = n2.target, s2 = this.options, c2 = s2.group, u2 = Ht.active, d2 = ct === c2, h2 = s2.sort, f2 = ut || u2, p2 = this, g2 = false;
        if (!Ot) {
          if (void 0 !== n2.preventDefault && n2.cancelable && n2.preventDefault(), l2 = P(l2, s2.draggable, a2, true), O2("dragOver"), Ht.eventCanceled) return g2;
          if ($.contains(n2.target) || l2.animated && l2.animatingX && l2.animatingY || p2._ignoreWhileAnimating === l2) return A2(false);
          if (St = false, u2 && !s2.disabled && (d2 ? h2 || (i2 = Q !== tt) : ut === this || (this.lastPutMode = ct.checkPull(this, u2, $, n2)) && c2.checkPut(this, u2, $, n2))) {
            if (r2 = "vertical" === this._getDirection(n2, l2), o2 = X($), O2("dragOverValid"), Ht.eventCanceled) return g2;
            if (i2) return Q = tt, M2(), this._hideClone(), O2("revert"), Ht.eventCanceled || (et ? tt.insertBefore($, et) : tt.appendChild($)), A2(true);
            var m2 = F(a2, s2.draggable);
            if (m2 && (S2 = n2, c2 = r2, x2 = X(F((E2 = this).el, E2.options.draggable)), E2 = L(E2.el, E2.options, J), !(c2 ? S2.clientX > E2.right + 10 || S2.clientY > x2.bottom && S2.clientX > x2.left : S2.clientY > E2.bottom + 10 || S2.clientX > x2.right && S2.clientY > x2.top) || m2.animated)) {
              if (m2 && (t3 = n2, e2 = r2, C2 = X(B((_2 = this).el, 0, _2.options, true)), _2 = L(_2.el, _2.options, J), e2 ? t3.clientX < _2.left - 10 || t3.clientY < C2.top && t3.clientX < C2.right : t3.clientY < _2.top - 10 || t3.clientY < C2.bottom && t3.clientX < C2.left)) {
                var v2 = B(a2, 0, s2, true);
                if (v2 === $) return A2(false);
                if (D2 = X(l2 = v2), false !== Lt(tt, a2, $, o2, l2, D2, n2, false)) return M2(), a2.insertBefore($, v2), Q = a2, N2(), A2(true);
              } else if (l2.parentNode === a2) {
                var b2, y2, w2, D2 = X(l2), E2 = $.parentNode !== a2, S2 = (S2 = $.animated && $.toRect || o2, x2 = l2.animated && l2.toRect || D2, _2 = (e2 = r2) ? S2.left : S2.top, t3 = e2 ? S2.right : S2.bottom, C2 = e2 ? S2.width : S2.height, v2 = e2 ? x2.left : x2.top, S2 = e2 ? x2.right : x2.bottom, x2 = e2 ? x2.width : x2.height, !(_2 === v2 || t3 === S2 || _2 + C2 / 2 === v2 + x2 / 2)), _2 = r2 ? "top" : "left", C2 = Y(l2, "top", "top") || Y($, "top", "top"), v2 = C2 ? C2.scrollTop : void 0;
                if (bt !== l2 && (y2 = D2[_2], Ct = false, Tt = !S2 && s2.invertSwap || E2), 0 !== (b2 = (function(t4, e3, n3, o3, i3, r3, a3, l3) {
                  var s3 = o3 ? t4.clientY : t4.clientX, c3 = o3 ? n3.height : n3.width, t4 = o3 ? n3.top : n3.left, o3 = o3 ? n3.bottom : n3.right, n3 = false;
                  if (!a3) {
                    if (l3 && wt < c3 * i3) {
                      if (Ct = !Ct && (1 === yt ? t4 + c3 * r3 / 2 < s3 : s3 < o3 - c3 * r3 / 2) ? true : Ct) n3 = true;
                      else if (1 === yt ? s3 < t4 + wt : o3 - wt < s3) return -yt;
                    } else if (t4 + c3 * (1 - i3) / 2 < s3 && s3 < o3 - c3 * (1 - i3) / 2) return (function(t5) {
                      return j($) < j(t5) ? 1 : -1;
                    })(e3);
                  }
                  if ((n3 = n3 || a3) && (s3 < t4 + c3 * r3 / 2 || o3 - c3 * r3 / 2 < s3)) return t4 + c3 / 2 < s3 ? 1 : -1;
                  return 0;
                })(n2, l2, D2, r2, S2 ? 1 : s2.swapThreshold, null == s2.invertedSwapThreshold ? s2.swapThreshold : s2.invertedSwapThreshold, Tt, bt === l2))) for (var T2 = j($); (w2 = Q.children[T2 -= b2]) && ("none" === R(w2, "display") || w2 === J); ) ;
                if (0 === b2 || w2 === l2) return A2(false);
                yt = b2;
                var x2 = (bt = l2).nextElementSibling, E2 = false, S2 = Lt(tt, a2, $, o2, l2, D2, n2, E2 = 1 === b2);
                if (false !== S2) return 1 !== S2 && -1 !== S2 || (E2 = 1 === S2), Ot = true, setTimeout(Wt, 30), M2(), E2 && !x2 ? a2.appendChild($) : l2.parentNode.insertBefore($, E2 ? x2 : l2), C2 && H(C2, 0, v2 - C2.scrollTop), Q = $.parentNode, void 0 === y2 || Tt || (wt = Math.abs(y2 - X(l2)[_2])), N2(), A2(true);
              }
            } else {
              if (m2 === $) return A2(false);
              if ((l2 = m2 && a2 === n2.target ? m2 : l2) && (D2 = X(l2)), false !== Lt(tt, a2, $, o2, l2, D2, n2, !!l2)) return M2(), m2 && m2.nextSibling ? a2.insertBefore($, m2.nextSibling) : a2.appendChild($), Q = a2, N2(), A2(true);
            }
            if (a2.contains($)) return A2(false);
          }
          return false;
        }
        function O2(t4, e3) {
          q(t4, p2, I({ evt: n2, isOwner: d2, axis: r2 ? "vertical" : "horizontal", revert: i2, dragRect: o2, targetRect: D2, canSort: h2, fromSortable: f2, target: l2, completed: A2, onMove: function(t5, e4) {
            return Lt(tt, a2, $, o2, t5, X(t5), n2, e4);
          }, changed: N2 }, e3));
        }
        function M2() {
          O2("dragOverAnimationCapture"), p2.captureAnimationState(), p2 !== f2 && f2.captureAnimationState();
        }
        function A2(t4) {
          return O2("dragOverCompleted", { insertion: t4 }), t4 && (d2 ? u2._hideClone() : u2._showClone(p2), p2 !== f2 && (k($, (ut || u2).options.ghostClass, false), k($, s2.ghostClass, true)), ut !== p2 && p2 !== Ht.active ? ut = p2 : p2 === Ht.active && ut && (ut = null), f2 === p2 && (p2._ignoreWhileAnimating = l2), p2.animateAll(function() {
            O2("dragOverAnimationComplete"), p2._ignoreWhileAnimating = null;
          }), p2 !== f2 && (f2.animateAll(), f2._ignoreWhileAnimating = null)), (l2 === $ && !$.animated || l2 === a2 && !l2.animated) && (bt = null), s2.dragoverBubble || n2.rootEl || l2 === document || ($.parentNode[K]._isOutsideThisEl(n2.target), t4 || Ft(n2)), !s2.dragoverBubble && n2.stopPropagation && n2.stopPropagation(), g2 = true;
        }
        function N2() {
          at = j($), st = j($, s2.draggable), Z({ sortable: p2, name: "change", toEl: a2, newIndex: at, newDraggableIndex: st, originalEvent: n2 });
        }
      }, _ignoreWhileAnimating: null, _offMoveEvents: function() {
        p(document, "mousemove", this._onTouchMove), p(document, "touchmove", this._onTouchMove), p(document, "pointermove", this._onTouchMove), p(document, "dragover", Ft), p(document, "mousemove", Ft), p(document, "touchmove", Ft);
      }, _offUpEvents: function() {
        var t3 = this.el.ownerDocument;
        p(t3, "mouseup", this._onDrop), p(t3, "touchend", this._onDrop), p(t3, "pointerup", this._onDrop), p(t3, "pointercancel", this._onDrop), p(t3, "touchcancel", this._onDrop), p(document, "selectstart", this);
      }, _onDrop: function(t3) {
        var e2 = this.el, n2 = this.options;
        at = j($), st = j($, n2.draggable), q("drop", this, { evt: t3 }), Q = $ && $.parentNode, at = j($), st = j($, n2.draggable), Ht.eventCanceled || (Ct = Tt = Et = false, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), Gt(this.cloneId), Gt(this._dragStartId), this.nativeDraggable && (p(document, "drop", this), p(e2, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), u && R(document.body, "user-select", ""), R($, "transform", ""), t3 && (vt && (t3.cancelable && t3.preventDefault(), n2.dropBubble || t3.stopPropagation()), J && J.parentNode && J.parentNode.removeChild(J), (tt === Q || ut && "clone" !== ut.lastPutMode) && ot && ot.parentNode && ot.parentNode.removeChild(ot), $ && (this.nativeDraggable && p($, "dragend", this), Kt($), $.style["will-change"] = "", vt && !Et && k($, (ut || this).options.ghostClass, false), k($, this.options.chosenClass, false), Z({ sortable: this, name: "unchoose", toEl: Q, newIndex: null, newDraggableIndex: null, originalEvent: t3 }), tt !== Q ? (0 <= at && (Z({ rootEl: Q, name: "add", toEl: Q, fromEl: tt, originalEvent: t3 }), Z({ sortable: this, name: "remove", toEl: Q, originalEvent: t3 }), Z({ rootEl: Q, name: "sort", toEl: Q, fromEl: tt, originalEvent: t3 }), Z({ sortable: this, name: "sort", toEl: Q, originalEvent: t3 })), ut && ut.save()) : at !== rt && 0 <= at && (Z({ sortable: this, name: "update", toEl: Q, originalEvent: t3 }), Z({ sortable: this, name: "sort", toEl: Q, originalEvent: t3 })), Ht.active && (null != at && -1 !== at || (at = rt, st = lt), Z({ sortable: this, name: "end", toEl: Q, originalEvent: t3 }), this.save())))), this._nulling();
      }, _nulling: function() {
        q("nulling", this), tt = $ = Q = J = et = ot = nt = it = dt = ht = vt = at = st = rt = lt = bt = yt = ut = ct = Ht.dragged = Ht.ghost = Ht.clone = Ht.active = null;
        var e2 = this.el;
        Mt.forEach(function(t3) {
          e2.contains(t3) && (t3.checked = true);
        }), Mt.length = ft = pt = 0;
      }, handleEvent: function(t3) {
        switch (t3.type) {
          case "drop":
          case "dragend":
            this._onDrop(t3);
            break;
          case "dragenter":
          case "dragover":
            $ && (this._onDragOver(t3), (function(t4) {
              t4.dataTransfer && (t4.dataTransfer.dropEffect = "move");
              t4.cancelable && t4.preventDefault();
            })(t3));
            break;
          case "selectstart":
            t3.preventDefault();
        }
      }, toArray: function() {
        for (var t3, e2 = [], n2 = this.el.children, o2 = 0, i2 = n2.length, r2 = this.options; o2 < i2; o2++) P(t3 = n2[o2], r2.draggable, this.el, false) && e2.push(t3.getAttribute(r2.dataIdAttr) || (function(t4) {
          var e3 = t4.tagName + t4.className + t4.src + t4.href + t4.textContent, n3 = e3.length, o3 = 0;
          for (; n3--; ) o3 += e3.charCodeAt(n3);
          return o3.toString(36);
        })(t3));
        return e2;
      }, sort: function(t3, e2) {
        var n2 = {}, o2 = this.el;
        this.toArray().forEach(function(t4, e3) {
          e3 = o2.children[e3];
          P(e3, this.options.draggable, o2, false) && (n2[t4] = e3);
        }, this), e2 && this.captureAnimationState(), t3.forEach(function(t4) {
          n2[t4] && (o2.removeChild(n2[t4]), o2.appendChild(n2[t4]));
        }), e2 && this.animateAll();
      }, save: function() {
        var t3 = this.options.store;
        t3 && t3.set && t3.set(this);
      }, closest: function(t3, e2) {
        return P(t3, e2 || this.options.draggable, this.el, false);
      }, option: function(t3, e2) {
        var n2 = this.options;
        if (void 0 === e2) return n2[t3];
        var o2 = G.modifyOption(this, t3, e2);
        n2[t3] = void 0 !== o2 ? o2 : e2, "group" === t3 && Xt(n2);
      }, destroy: function() {
        q("destroy", this);
        var t3 = this.el;
        t3[K] = null, p(t3, "mousedown", this._onTapStart), p(t3, "touchstart", this._onTapStart), p(t3, "pointerdown", this._onTapStart), this.nativeDraggable && (p(t3, "dragover", this), p(t3, "dragenter", this)), Array.prototype.forEach.call(t3.querySelectorAll("[draggable]"), function(t4) {
          t4.removeAttribute("draggable");
        }), this._onDrop(), this._disableDelayedDragEvents(), _t.splice(_t.indexOf(this.el), 1), this.el = t3 = null;
      }, _hideClone: function() {
        it || (q("hideClone", this), Ht.eventCanceled || (R(ot, "display", "none"), this.options.removeCloneOnHide && ot.parentNode && ot.parentNode.removeChild(ot), it = true));
      }, _showClone: function(t3) {
        "clone" === t3.lastPutMode ? it && (q("showClone", this), Ht.eventCanceled || ($.parentNode != tt || this.options.group.revertClone ? et ? tt.insertBefore(ot, et) : tt.appendChild(ot) : tt.insertBefore(ot, $), this.options.group.revertClone && this.animate($, ot), R(ot, "display", ""), it = false)) : this._hideClone();
      } }, At && f(document, "touchmove", function(t3) {
        (Ht.active || Et) && t3.cancelable && t3.preventDefault();
      }), Ht.utils = { on: f, off: p, css: R, find: E, is: function(t3, e2) {
        return !!P(t3, e2, t3, false);
      }, extend: function(t3, e2) {
        if (t3 && e2) for (var n2 in e2) e2.hasOwnProperty(n2) && (t3[n2] = e2[n2]);
        return t3;
      }, throttle: C, closest: P, toggleClass: k, clone: T, index: j, nextTick: zt, cancelNextTick: Gt, detectDirection: Rt, getChild: B, expando: K }, Ht.get = function(t3) {
        return t3[K];
      }, Ht.mount = function() {
        for (var t3 = arguments.length, e2 = new Array(t3), n2 = 0; n2 < t3; n2++) e2[n2] = arguments[n2];
        (e2 = e2[0].constructor === Array ? e2[0] : e2).forEach(function(t4) {
          if (!t4.prototype || !t4.prototype.constructor) throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(t4));
          t4.utils && (Ht.utils = I(I({}, Ht.utils), t4.utils)), G.mount(t4);
        });
      }, Ht.create = function(t3, e2) {
        return new Ht(t3, e2);
      };
      var Ut, qt, Vt, Zt, $t, Qt, Jt = [], te = !(Ht.version = "1.15.7");
      function ee() {
        Jt.forEach(function(t3) {
          clearInterval(t3.pid);
        }), Jt = [];
      }
      function ne() {
        clearInterval(Qt);
      }
      var oe, ie = C(function(n2, t3, e2, o2) {
        if (t3.scroll) {
          var i2, r2 = (n2.touches ? n2.touches[0] : n2).clientX, a2 = (n2.touches ? n2.touches[0] : n2).clientY, l2 = t3.scrollSensitivity, s2 = t3.scrollSpeed, c2 = O(), u2 = false;
          qt !== e2 && (qt = e2, ee(), Ut = t3.scroll, i2 = t3.scrollFn, true === Ut && (Ut = M(e2, true)));
          var d2 = 0, h2 = Ut;
          do {
            var f2 = h2, p2 = X(f2), g2 = p2.top, m2 = p2.bottom, v2 = p2.left, b2 = p2.right, y2 = p2.width, w2 = p2.height, D2 = void 0, E2 = void 0, S2 = f2.scrollWidth, _2 = f2.scrollHeight, C2 = R(f2), T2 = f2.scrollLeft, p2 = f2.scrollTop, E2 = f2 === c2 ? (D2 = y2 < S2 && ("auto" === C2.overflowX || "scroll" === C2.overflowX || "visible" === C2.overflowX), w2 < _2 && ("auto" === C2.overflowY || "scroll" === C2.overflowY || "visible" === C2.overflowY)) : (D2 = y2 < S2 && ("auto" === C2.overflowX || "scroll" === C2.overflowX), w2 < _2 && ("auto" === C2.overflowY || "scroll" === C2.overflowY)), T2 = D2 && (Math.abs(b2 - r2) <= l2 && T2 + y2 < S2) - (Math.abs(v2 - r2) <= l2 && !!T2), p2 = E2 && (Math.abs(m2 - a2) <= l2 && p2 + w2 < _2) - (Math.abs(g2 - a2) <= l2 && !!p2);
            if (!Jt[d2]) for (var x2 = 0; x2 <= d2; x2++) Jt[x2] || (Jt[x2] = {});
            Jt[d2].vx == T2 && Jt[d2].vy == p2 && Jt[d2].el === f2 || (Jt[d2].el = f2, Jt[d2].vx = T2, Jt[d2].vy = p2, clearInterval(Jt[d2].pid), 0 == T2 && 0 == p2 || (u2 = true, Jt[d2].pid = setInterval(function() {
              o2 && 0 === this.layer && Ht.active._onTouchMove($t);
              var t4 = Jt[this.layer].vy ? Jt[this.layer].vy * s2 : 0, e3 = Jt[this.layer].vx ? Jt[this.layer].vx * s2 : 0;
              "function" == typeof i2 && "continue" !== i2.call(Ht.dragged.parentNode[K], e3, t4, n2, $t, Jt[this.layer].el) || H(Jt[this.layer].el, e3, t4);
            }.bind({ layer: d2 }), 24))), d2++;
          } while (t3.bubbleScroll && h2 !== c2 && (h2 = M(h2, false)));
          te = u2;
        }
      }, 30), n = function(t3) {
        var e2 = t3.originalEvent, n2 = t3.putSortable, o2 = t3.dragEl, i2 = t3.activeSortable, r2 = t3.dispatchSortableEvent, a2 = t3.hideGhostForTarget, t3 = t3.unhideGhostForTarget;
        e2 && (i2 = n2 || i2, a2(), e2 = e2.changedTouches && e2.changedTouches.length ? e2.changedTouches[0] : e2, e2 = document.elementFromPoint(e2.clientX, e2.clientY), t3(), i2 && !i2.el.contains(e2) && (r2("spill"), this.onSpill({ dragEl: o2, putSortable: n2 })));
      };
      function re() {
      }
      function ae() {
      }
      re.prototype = { startIndex: null, dragStart: function(t3) {
        t3 = t3.oldDraggableIndex;
        this.startIndex = t3;
      }, onSpill: function(t3) {
        var e2 = t3.dragEl, n2 = t3.putSortable;
        this.sortable.captureAnimationState(), n2 && n2.captureAnimationState();
        t3 = B(this.sortable.el, this.startIndex, this.options);
        t3 ? this.sortable.el.insertBefore(e2, t3) : this.sortable.el.appendChild(e2), this.sortable.animateAll(), n2 && n2.animateAll();
      }, drop: n }, a(re, { pluginName: "revertOnSpill" }), ae.prototype = { onSpill: function(t3) {
        var e2 = t3.dragEl, t3 = t3.putSortable || this.sortable;
        t3.captureAnimationState(), e2.parentNode && e2.parentNode.removeChild(e2), t3.animateAll();
      }, drop: n }, a(ae, { pluginName: "removeOnSpill" });
      var le, se, ce, ue, de, he = [], fe = [], pe = false, ge = false, me = false;
      function ve(n2, o2) {
        fe.forEach(function(t3, e2) {
          e2 = o2.children[t3.sortableIndex + (n2 ? Number(e2) : 0)];
          e2 ? o2.insertBefore(t3, e2) : o2.appendChild(t3);
        });
      }
      function be() {
        he.forEach(function(t3) {
          t3 !== ce && t3.parentNode && t3.parentNode.removeChild(t3);
        });
      }
      return Ht.mount(new function() {
        function t3() {
          for (var t4 in this.defaults = { scroll: true, forceAutoScrollFallback: false, scrollSensitivity: 30, scrollSpeed: 10, bubbleScroll: true }, this) "_" === t4.charAt(0) && "function" == typeof this[t4] && (this[t4] = this[t4].bind(this));
        }
        return t3.prototype = { dragStarted: function(t4) {
          t4 = t4.originalEvent;
          this.sortable.nativeDraggable ? f(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? f(document, "pointermove", this._handleFallbackAutoScroll) : t4.touches ? f(document, "touchmove", this._handleFallbackAutoScroll) : f(document, "mousemove", this._handleFallbackAutoScroll);
        }, dragOverCompleted: function(t4) {
          t4 = t4.originalEvent;
          this.options.dragOverBubble || t4.rootEl || this._handleAutoScroll(t4);
        }, drop: function() {
          this.sortable.nativeDraggable ? p(document, "dragover", this._handleAutoScroll) : (p(document, "pointermove", this._handleFallbackAutoScroll), p(document, "touchmove", this._handleFallbackAutoScroll), p(document, "mousemove", this._handleFallbackAutoScroll)), ne(), ee(), clearTimeout(v), v = void 0;
        }, nulling: function() {
          $t = qt = Ut = te = Qt = Vt = Zt = null, Jt.length = 0;
        }, _handleFallbackAutoScroll: function(t4) {
          this._handleAutoScroll(t4, true);
        }, _handleAutoScroll: function(e2, n2) {
          var o2, i2 = this, r2 = (e2.touches ? e2.touches[0] : e2).clientX, a2 = (e2.touches ? e2.touches[0] : e2).clientY, t4 = document.elementFromPoint(r2, a2);
          $t = e2, n2 || this.options.forceAutoScrollFallback || w || y || u ? (ie(e2, this.options, t4, n2), o2 = M(t4, true), !te || Qt && r2 === Vt && a2 === Zt || (Qt && ne(), Qt = setInterval(function() {
            var t5 = M(document.elementFromPoint(r2, a2), true);
            t5 !== o2 && (o2 = t5, ee()), ie(e2, i2.options, t5, n2);
          }, 10), Vt = r2, Zt = a2)) : this.options.bubbleScroll && M(t4, true) !== O() ? ie(e2, this.options, M(t4, false), false) : ee();
        } }, a(t3, { pluginName: "scroll", initializeByDefault: true });
      }()), Ht.mount(ae, re), Ht.mount(new function() {
        function t3() {
          this.defaults = { swapClass: "sortable-swap-highlight" };
        }
        return t3.prototype = { dragStart: function(t4) {
          t4 = t4.dragEl;
          oe = t4;
        }, dragOverValid: function(t4) {
          var e2 = t4.completed, n2 = t4.target, o2 = t4.onMove, i2 = t4.activeSortable, r2 = t4.changed, a2 = t4.cancel;
          i2.options.swap && (t4 = this.sortable.el, i2 = this.options, n2 && n2 !== t4 && (t4 = oe, oe = false !== o2(n2) ? (k(n2, i2.swapClass, true), n2) : null, t4 && t4 !== oe && k(t4, i2.swapClass, false)), r2(), e2(true), a2());
        }, drop: function(t4) {
          var e2, n2, o2 = t4.activeSortable, i2 = t4.putSortable, r2 = t4.dragEl, a2 = i2 || this.sortable, l2 = this.options;
          oe && k(oe, l2.swapClass, false), oe && (l2.swap || i2 && i2.options.swap) && r2 !== oe && (a2.captureAnimationState(), a2 !== o2 && o2.captureAnimationState(), n2 = oe, t4 = (e2 = r2).parentNode, l2 = n2.parentNode, t4 && l2 && !t4.isEqualNode(n2) && !l2.isEqualNode(e2) && (i2 = j(e2), r2 = j(n2), t4.isEqualNode(l2) && i2 < r2 && r2++, t4.insertBefore(n2, t4.children[i2]), l2.insertBefore(e2, l2.children[r2])), a2.animateAll(), a2 !== o2 && o2.animateAll());
        }, nulling: function() {
          oe = null;
        } }, a(t3, { pluginName: "swap", eventProperties: function() {
          return { swapItem: oe };
        } });
      }()), Ht.mount(new function() {
        function t3(o2) {
          for (var t4 in this) "_" === t4.charAt(0) && "function" == typeof this[t4] && (this[t4] = this[t4].bind(this));
          o2.options.avoidImplicitDeselect || (o2.options.supportPointer ? f(document, "pointerup", this._deselectMultiDrag) : (f(document, "mouseup", this._deselectMultiDrag), f(document, "touchend", this._deselectMultiDrag))), f(document, "keydown", this._checkKeyDown), f(document, "keyup", this._checkKeyUp), this.defaults = { selectedClass: "sortable-selected", multiDragKey: null, avoidImplicitDeselect: false, setData: function(t5, e2) {
            var n2 = "";
            he.length && se === o2 ? he.forEach(function(t6, e3) {
              n2 += (e3 ? ", " : "") + t6.textContent;
            }) : n2 = e2.textContent, t5.setData("Text", n2);
          } };
        }
        return t3.prototype = { multiDragKeyDown: false, isMultiDrag: false, delayStartGlobal: function(t4) {
          t4 = t4.dragEl;
          ce = t4;
        }, delayEnded: function() {
          this.isMultiDrag = ~he.indexOf(ce);
        }, setupClone: function(t4) {
          var e2 = t4.sortable, t4 = t4.cancel;
          if (this.isMultiDrag) {
            for (var n2 = 0; n2 < he.length; n2++) fe.push(T(he[n2])), fe[n2].sortableIndex = he[n2].sortableIndex, fe[n2].draggable = false, fe[n2].style["will-change"] = "", k(fe[n2], this.options.selectedClass, false), he[n2] === ce && k(fe[n2], this.options.chosenClass, false);
            e2._hideClone(), t4();
          }
        }, clone: function(t4) {
          var e2 = t4.sortable, n2 = t4.rootEl, o2 = t4.dispatchSortableEvent, t4 = t4.cancel;
          this.isMultiDrag && (this.options.removeCloneOnHide || he.length && se === e2 && (ve(true, n2), o2("clone"), t4()));
        }, showClone: function(t4) {
          var e2 = t4.cloneNowShown, n2 = t4.rootEl, t4 = t4.cancel;
          this.isMultiDrag && (ve(false, n2), fe.forEach(function(t5) {
            R(t5, "display", "");
          }), e2(), de = false, t4());
        }, hideClone: function(t4) {
          var e2 = this, n2 = (t4.sortable, t4.cloneNowHidden), t4 = t4.cancel;
          this.isMultiDrag && (fe.forEach(function(t5) {
            R(t5, "display", "none"), e2.options.removeCloneOnHide && t5.parentNode && t5.parentNode.removeChild(t5);
          }), n2(), de = true, t4());
        }, dragStartGlobal: function(t4) {
          t4.sortable;
          !this.isMultiDrag && se && se.multiDrag._deselectMultiDrag(), he.forEach(function(t5) {
            t5.sortableIndex = j(t5);
          }), he = he.sort(function(t5, e2) {
            return t5.sortableIndex - e2.sortableIndex;
          }), me = true;
        }, dragStarted: function(t4) {
          var e2, n2 = this, t4 = t4.sortable;
          this.isMultiDrag && (this.options.sort && (t4.captureAnimationState(), this.options.animation && (he.forEach(function(t5) {
            t5 !== ce && R(t5, "position", "absolute");
          }), e2 = X(ce, false, true, true), he.forEach(function(t5) {
            t5 !== ce && x(t5, e2);
          }), pe = ge = true)), t4.animateAll(function() {
            pe = ge = false, n2.options.animation && he.forEach(function(t5) {
              A(t5);
            }), n2.options.sort && be();
          }));
        }, dragOver: function(t4) {
          var e2 = t4.target, n2 = t4.completed, t4 = t4.cancel;
          ge && ~he.indexOf(e2) && (n2(false), t4());
        }, revert: function(t4) {
          var n2, o2, e2 = t4.fromSortable, i2 = t4.rootEl, r2 = t4.sortable, a2 = t4.dragRect;
          1 < he.length && (he.forEach(function(t5) {
            r2.addAnimationState({ target: t5, rect: ge ? X(t5) : a2 }), A(t5), t5.fromRect = a2, e2.removeAnimationState(t5);
          }), ge = false, n2 = !this.options.removeCloneOnHide, o2 = i2, he.forEach(function(t5, e3) {
            e3 = o2.children[t5.sortableIndex + (n2 ? Number(e3) : 0)];
            e3 ? o2.insertBefore(t5, e3) : o2.appendChild(t5);
          }));
        }, dragOverCompleted: function(t4) {
          var e2, n2 = t4.sortable, o2 = t4.isOwner, i2 = t4.insertion, r2 = t4.activeSortable, a2 = t4.parentEl, l2 = t4.putSortable, t4 = this.options;
          i2 && (o2 && r2._hideClone(), pe = false, t4.animation && 1 < he.length && (ge || !o2 && !r2.options.sort && !l2) && (e2 = X(ce, false, true, true), he.forEach(function(t5) {
            t5 !== ce && (x(t5, e2), a2.appendChild(t5));
          }), ge = true), o2 || (ge || be(), 1 < he.length ? (o2 = de, r2._showClone(n2), r2.options.animation && !de && o2 && fe.forEach(function(t5) {
            r2.addAnimationState({ target: t5, rect: ue }), t5.fromRect = ue, t5.thisAnimationDuration = null;
          })) : r2._showClone(n2)));
        }, dragOverAnimationCapture: function(t4) {
          var e2 = t4.dragRect, n2 = t4.isOwner, t4 = t4.activeSortable;
          he.forEach(function(t5) {
            t5.thisAnimationDuration = null;
          }), t4.options.animation && !n2 && t4.multiDrag.isMultiDrag && (ue = a({}, e2), e2 = D(ce, true), ue.top -= e2.f, ue.left -= e2.e);
        }, dragOverAnimationComplete: function() {
          ge && (ge = false, be());
        }, drop: function(t4) {
          var o2, i2, r2, a2, n2, e2, l2, s2 = t4.originalEvent, c2 = t4.rootEl, u2 = t4.parentEl, d2 = t4.sortable, h2 = t4.dispatchSortableEvent, f2 = t4.oldIndex, t4 = t4.putSortable, p2 = t4 || this.sortable;
          s2 && (o2 = this.options, i2 = u2.children, me || (o2.multiDragKey && !this.multiDragKeyDown && this._deselectMultiDrag(), k(ce, o2.selectedClass, !~he.indexOf(ce)), ~he.indexOf(ce) ? (he.splice(he.indexOf(ce), 1), le = null, U({ sortable: d2, rootEl: c2, name: "deselect", targetEl: ce, originalEvent: s2 })) : (he.push(ce), U({ sortable: d2, rootEl: c2, name: "select", targetEl: ce, originalEvent: s2 }), s2.shiftKey && le && d2.el.contains(le) ? (r2 = j(le), a2 = j(ce), ~r2 && ~a2 && r2 !== a2 && (function() {
            for (var e3, t5 = r2 < a2 ? (e3 = r2, a2) : (e3 = a2, r2 + 1), n3 = o2.filter; e3 < t5; e3++) ~he.indexOf(i2[e3]) || P(i2[e3], o2.draggable, u2, false) && (n3 && ("function" == typeof n3 ? n3.call(d2, s2, i2[e3], d2) : n3.split(",").some(function(t6) {
              return P(i2[e3], t6.trim(), u2, false);
            })) || (k(i2[e3], o2.selectedClass, true), he.push(i2[e3]), U({ sortable: d2, rootEl: c2, name: "select", targetEl: i2[e3], originalEvent: s2 })));
          })()) : le = ce, se = p2)), me && this.isMultiDrag && (ge = false, (u2[K].options.sort || u2 !== c2) && 1 < he.length && (n2 = X(ce), e2 = j(ce, ":not(." + this.options.selectedClass + ")"), !pe && o2.animation && (ce.thisAnimationDuration = null), p2.captureAnimationState(), pe || (o2.animation && (ce.fromRect = n2, he.forEach(function(t5) {
            var e3;
            t5.thisAnimationDuration = null, t5 !== ce && (e3 = ge ? X(t5) : n2, t5.fromRect = e3, p2.addAnimationState({ target: t5, rect: e3 }));
          })), be(), he.forEach(function(t5) {
            i2[e2] ? u2.insertBefore(t5, i2[e2]) : u2.appendChild(t5), e2++;
          }), f2 === j(ce) && (l2 = false, he.forEach(function(t5) {
            t5.sortableIndex !== j(t5) && (l2 = true);
          }), l2 && (h2("update"), h2("sort")))), he.forEach(function(t5) {
            A(t5);
          }), p2.animateAll()), se = p2), (c2 === u2 || t4 && "clone" !== t4.lastPutMode) && fe.forEach(function(t5) {
            t5.parentNode && t5.parentNode.removeChild(t5);
          }));
        }, nullingGlobal: function() {
          this.isMultiDrag = me = false, fe.length = 0;
        }, destroyGlobal: function() {
          this._deselectMultiDrag(), p(document, "pointerup", this._deselectMultiDrag), p(document, "mouseup", this._deselectMultiDrag), p(document, "touchend", this._deselectMultiDrag), p(document, "keydown", this._checkKeyDown), p(document, "keyup", this._checkKeyUp);
        }, _deselectMultiDrag: function(t4) {
          if (!(void 0 !== me && me || se !== this.sortable || t4 && P(t4.target, this.options.draggable, this.sortable.el, false) || t4 && 0 !== t4.button)) for (; he.length; ) {
            var e2 = he[0];
            k(e2, this.options.selectedClass, false), he.shift(), U({ sortable: this.sortable, rootEl: this.sortable.el, name: "deselect", targetEl: e2, originalEvent: t4 });
          }
        }, _checkKeyDown: function(t4) {
          t4.key === this.options.multiDragKey && (this.multiDragKeyDown = true);
        }, _checkKeyUp: function(t4) {
          t4.key === this.options.multiDragKey && (this.multiDragKeyDown = false);
        } }, a(t3, { pluginName: "multiDrag", utils: { select: function(t4) {
          var e2 = t4.parentNode[K];
          e2 && e2.options.multiDrag && !~he.indexOf(t4) && (se && se !== e2 && (se.multiDrag._deselectMultiDrag(), se = e2), k(t4, e2.options.selectedClass, true), he.push(t4));
        }, deselect: function(t4) {
          var e2 = t4.parentNode[K], n2 = he.indexOf(t4);
          e2 && e2.options.multiDrag && ~n2 && (k(t4, e2.options.selectedClass, false), he.splice(n2, 1));
        } }, eventProperties: function() {
          var n2 = this, o2 = [], i2 = [];
          return he.forEach(function(t4) {
            var e2;
            o2.push({ multiDragElement: t4, index: t4.sortableIndex }), e2 = ge && t4 !== ce ? -1 : ge ? j(t4, ":not(." + n2.options.selectedClass + ")") : j(t4), i2.push({ multiDragElement: t4, index: e2 });
          }), { items: e(he), clones: [].concat(fe), oldIndicies: o2, newIndicies: i2 };
        }, optionListeners: { multiDragKey: function(t4) {
          return "ctrl" === (t4 = t4.toLowerCase()) ? t4 = "Control" : 1 < t4.length && (t4 = t4.charAt(0).toUpperCase() + t4.substr(1)), t4;
        } } });
      }()), Ht;
    });
  }
});

// src/main.js
var { Plugin, Modal, ItemView, Notice, setIcon, getLanguage } = require("obsidian");
var Sortable = require_Sortable_min();
var DB_PATH = ".password-kanban.enc";
var CONFLICT_DIR = ".password-kanban-conflicts";
var VIEW_TYPE = "password-kanban-view";
var KDF_ITERATIONS = 6e5;
var AUTO_LOCK_MS = 5 * 60 * 1e3;
var CLIPBOARD_CLEAR_MS = 2 * 60 * 1e3;
var encoder = new TextEncoder();
var decoder = new TextDecoder();
var UI_LANGUAGE = (getLanguage?.() || "ru").toLowerCase().startsWith("en") ? "en" : "ru";
function t(ru, en, values = {}) {
  const text = UI_LANGUAGE === "en" ? en : ru;
  return text.replace(/\{(\w+)\}/g, (match, key) => values[key] ?? match);
}
function makeEl(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== void 0) node.textContent = text;
  return node;
}
function makeButton(parent, label, onClick, className = "") {
  const button = makeEl("button", className, label);
  button.type = "button";
  button.addEventListener("click", (event) => {
    event.stopPropagation();
    onClick(event);
  });
  parent.appendChild(button);
  return button;
}
function makeIconButton(parent, icon, label, onClick, className = "") {
  const button = makeEl("button", `clickable-icon ${className}`);
  button.type = "button";
  button.setAttribute("aria-label", label);
  button.title = label;
  setIcon(button, icon);
  button.addEventListener("click", (event) => {
    event.stopPropagation();
    onClick(event);
  });
  parent.appendChild(button);
  return button;
}
function bytesToBase64(bytes) {
  let binary = "";
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary);
}
function base64ToBytes(value) {
  const binary = atob(value);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  return bytes;
}
function randomBytes(length) {
  const bytes = new Uint8Array(length);
  crypto.getRandomValues(bytes);
  return bytes;
}
async function deriveKey(password, salt, iterations) {
  const material = await crypto.subtle.importKey(
    "raw",
    encoder.encode(password),
    "PBKDF2",
    false,
    ["deriveKey"]
  );
  return crypto.subtle.deriveKey(
    { name: "PBKDF2", hash: "SHA-256", salt, iterations },
    material,
    { name: "AES-GCM", length: 256 },
    false,
    ["encrypt", "decrypt"]
  );
}
async function fingerprint(value) {
  const digest = await crypto.subtle.digest("SHA-256", encoder.encode(value));
  return bytesToBase64(new Uint8Array(digest));
}
function newDatabase() {
  return {
    formatVersion: 1,
    categories: [
      { id: crypto.randomUUID(), name: t("\u0424\u0438\u043D\u0430\u043D\u0441\u044B", "Finance") },
      { id: crypto.randomUUID(), name: t("\u0420\u0430\u0431\u043E\u0442\u0430", "Work") },
      { id: crypto.randomUUID(), name: t("\u041F\u043E\u043A\u0443\u043F\u043A\u0438", "Shopping") },
      { id: crypto.randomUUID(), name: t("\u041F\u0440\u043E\u0447\u0435\u0435", "Other") }
    ],
    entries: []
  };
}
function normalizeDatabase(value) {
  if (!value || value.formatVersion !== 1 || !Array.isArray(value.categories) || !Array.isArray(value.entries)) {
    throw new Error(t(
      "\u0424\u0430\u0439\u043B \u043D\u0435 \u043F\u043E\u0445\u043E\u0436 \u043D\u0430 \u0431\u0430\u0437\u0443 Password Kanban \u0438\u043B\u0438 \u0435\u0433\u043E \u0444\u043E\u0440\u043C\u0430\u0442 \u043D\u0435 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044F.",
      "This file is not a Password Kanban database or its format is unsupported."
    ));
  }
  const categories = value.categories.filter((item) => item && typeof item.id === "string" && typeof item.name === "string").map((item) => ({ id: item.id, name: item.name }));
  const categoryIds = new Set(categories.map((item) => item.id));
  const entries = value.entries.filter((item) => item && typeof item.id === "string" && typeof item.title === "string").map((item) => ({
    id: item.id,
    categoryId: categoryIds.has(item.categoryId) ? item.categoryId : categories[0]?.id,
    title: item.title,
    fields: Array.isArray(item.fields) ? item.fields.filter((field) => field && typeof field.label === "string").map((field) => ({
      id: typeof field.id === "string" ? field.id : crypto.randomUUID(),
      label: field.label,
      value: typeof field.value === "string" ? field.value : ""
    })) : [],
    createdAt: Number(item.createdAt) || Date.now(),
    updatedAt: Number(item.updatedAt) || Date.now()
  }));
  return { formatVersion: 1, categories, entries };
}
function generatePassword() {
  const groups = [
    "acdefhjkmnprtuvwxy",
    "ACDEFHJKMNPRTUVWXY",
    "347"
  ];
  const alphabet = groups.join("");
  const randomIndex = (max) => {
    const limit = Math.floor(256 / max) * max;
    const byte = new Uint8Array(1);
    do
      crypto.getRandomValues(byte);
    while (byte[0] >= limit);
    return byte[0] % max;
  };
  const length = 11 + randomIndex(5);
  const chars = groups.map((group) => group[randomIndex(group.length)]);
  while (chars.length < length) chars.push(alphabet[randomIndex(alphabet.length)]);
  for (let i = chars.length - 1; i > 0; i--) {
    const j = randomIndex(i + 1);
    [chars[i], chars[j]] = [chars[j], chars[i]];
  }
  return chars.join("");
}
function isPasswordField(field) {
  return /^(пароль|password)$/i.test(field.label.trim());
}
var PasswordKanbanPlugin = class extends Plugin {
  async onload() {
    this.db = null;
    this.key = null;
    this.salt = null;
    this.diskFingerprint = null;
    this.boardView = null;
    this.entryEditorModal = null;
    this.conflictRecoveryModal = null;
    this.lockTimer = null;
    this.editingModeTimer = null;
    this.editingMode = false;
    this.pendingGateMode = null;
    this.clipboardTimer = null;
    this.clipboardSequence = 0;
    this.saveQueue = Promise.resolve();
    this.registerView(VIEW_TYPE, (leaf) => new PasswordBoardView(leaf, this));
    this.app.workspace.onLayoutReady(() => {
      for (const leaf of this.app.workspace.getLeavesOfType(VIEW_TYPE)) leaf.detach();
    });
    this.addRibbonIcon("key-round", t("\u041E\u0442\u043A\u0440\u044B\u0442\u044C Password Kanban", "Open Password Kanban"), () => this.openGate());
    this.addCommand({
      id: "lock-password-kanban",
      name: t("\u0417\u0430\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u0442\u044C Password Kanban", "Lock Password Kanban"),
      callback: () => this.lock(true)
    });
    this.addCommand({
      id: "recover-password-kanban-conflict",
      name: t("\u0412\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u043B\u043E\u043A\u0430\u043B\u044C\u043D\u0443\u044E \u043A\u043E\u043F\u0438\u044E \u043F\u043E\u0441\u043B\u0435 \u043A\u043E\u043D\u0444\u043B\u0438\u043A\u0442\u0430", "Restore a local copy after a sync conflict"),
      callback: () => this.openConflictRecovery()
    });
    this.addCommand({
      id: "open-password-kanban-help",
      name: t("\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0441\u043F\u0440\u0430\u0432\u043A\u0443 Password Kanban", "Open Password Kanban help"),
      callback: () => this.openHelp()
    });
    this.activityHandler = () => this.resetLockTimer();
    this.activityEvents = ["pointerdown", "keydown", "input", "change", "wheel"];
    for (const eventName of this.activityEvents) {
      window.addEventListener(eventName, this.activityHandler, true);
    }
    this.blurHandler = () => {
      if (this.db && this.key && !this.editingMode) this.lock(true);
    };
    window.addEventListener("blur", this.blurHandler);
  }
  onunload() {
    for (const eventName of this.activityEvents) {
      window.removeEventListener(eventName, this.activityHandler, true);
    }
    window.removeEventListener("blur", this.blurHandler);
    this.entryEditorModal?.close();
    this.conflictRecoveryModal?.close();
    window.clearTimeout(this.lockTimer);
    window.clearTimeout(this.editingModeTimer);
    window.clearTimeout(this.clipboardTimer);
    this.clipboardSequence++;
    this.boardView = null;
    this.db = null;
    this.key = null;
    this.salt = null;
    this.editingMode = false;
  }
  async copyToClipboard(value, label) {
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      new Notice(t("\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0441\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C. \u041F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043D\u0438\u044F \u0431\u0443\u0444\u0435\u0440\u0430 \u043E\u0431\u043C\u0435\u043D\u0430.", "Could not copy. Check clipboard permissions."));
      return;
    }
    const sequence = ++this.clipboardSequence;
    window.clearTimeout(this.clipboardTimer);
    this.clipboardTimer = window.setTimeout(async () => {
      if (sequence !== this.clipboardSequence) return;
      try {
        const currentValue = await navigator.clipboard.readText();
        if (sequence !== this.clipboardSequence) return;
        if (currentValue === value) {
          await navigator.clipboard.writeText("");
          new Notice(t("\u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0443\u0434\u0430\u043B\u0435\u043D\u043E \u0438\u0437 \u0431\u0443\u0444\u0435\u0440\u0430 \u043E\u0431\u043C\u0435\u043D\u0430.", "Copied value cleared from the clipboard."));
        }
      } catch {
        new Notice(t("\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043E\u0447\u0438\u0441\u0442\u0438\u0442\u044C \u0431\u0443\u0444\u0435\u0440 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438. \u041E\u0447\u0438\u0441\u0442\u0438\u0442\u0435 \u0435\u0433\u043E \u0432\u0440\u0443\u0447\u043D\u0443\u044E.", "Could not clear the clipboard automatically. Please clear it manually."));
      } finally {
        if (sequence === this.clipboardSequence) this.clipboardTimer = null;
      }
    }, CLIPBOARD_CLEAR_MS);
    new Notice(t(
      "\u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u043E: {label}. \u041E\u0447\u0438\u0441\u0442\u043A\u0430 \u0447\u0435\u0440\u0435\u0437 2 \u043C\u0438\u043D\u0443\u0442\u044B, \u0435\u0441\u043B\u0438 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043E\u0441\u0442\u0430\u043D\u0435\u0442\u0441\u044F \u0432 \u0431\u0443\u0444\u0435\u0440\u0435.",
      "Copied: {label}. It will be cleared in 2 minutes if it is still on the clipboard.",
      { label }
    ));
  }
  async openGate() {
    if (this.db && this.key) {
      await this.openBoard();
      return;
    }
    const adapter = this.app.vault.adapter;
    const exists = await adapter.exists(DB_PATH);
    this.pendingGateMode = exists ? "unlock" : "setup";
    try {
      await this.openBoard(this.pendingGateMode);
    } finally {
      this.pendingGateMode = null;
    }
  }
  async createVault(password) {
    if (!globalThis.crypto?.subtle) throw new Error(t("\u0412 \u044D\u0442\u043E\u0439 \u0432\u0435\u0440\u0441\u0438\u0438 Obsidian \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0430 Web Crypto API.", "Web Crypto API is unavailable in this version of Obsidian."));
    this.salt = randomBytes(16);
    this.key = await deriveKey(password, this.salt, KDF_ITERATIONS);
    this.db = newDatabase();
    this.diskFingerprint = null;
    let saved = false;
    try {
      saved = await this.persist();
    } catch (error) {
      this.db = null;
      this.key = null;
      this.salt = null;
      this.diskFingerprint = null;
      throw error;
    }
    if (!saved) {
      this.db = null;
      this.key = null;
      this.salt = null;
      this.diskFingerprint = null;
      throw new Error(t("\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0441\u043E\u0437\u0434\u0430\u0442\u044C \u0437\u0430\u0448\u0438\u0444\u0440\u043E\u0432\u0430\u043D\u043D\u0443\u044E \u0431\u0430\u0437\u0443.", "Could not create the encrypted database."));
    }
    this.resetLockTimer();
  }
  async unlockVault(password) {
    if (!globalThis.crypto?.subtle) throw new Error(t("\u0412 \u044D\u0442\u043E\u0439 \u0432\u0435\u0440\u0441\u0438\u0438 Obsidian \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0430 Web Crypto API.", "Web Crypto API is unavailable in this version of Obsidian."));
    const raw = await this.app.vault.adapter.read(DB_PATH);
    const envelope = JSON.parse(raw);
    if (envelope.formatVersion !== 1 || envelope.kdf?.name !== "PBKDF2" || envelope.cipher?.name !== "AES-GCM") {
      throw new Error(t("\u041D\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043D\u044B\u0439 \u0444\u043E\u0440\u043C\u0430\u0442 \u0437\u0430\u0448\u0438\u0444\u0440\u043E\u0432\u0430\u043D\u043D\u043E\u0439 \u0431\u0430\u0437\u044B.", "Unknown encrypted database format."));
    }
    const iterations = Number(envelope.kdf.iterations);
    if (!Number.isInteger(iterations) || iterations < 1e5 || iterations > 2e6) {
      throw new Error(t("\u041D\u0435\u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u044B\u0435 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B \u0448\u0438\u0444\u0440\u043E\u0432\u0430\u043D\u0438\u044F.", "Invalid encryption parameters."));
    }
    const salt = base64ToBytes(envelope.kdf.salt);
    const key = await deriveKey(password, salt, iterations);
    const clear = await crypto.subtle.decrypt(
      { name: "AES-GCM", iv: base64ToBytes(envelope.cipher.iv) },
      key,
      base64ToBytes(envelope.cipher.data)
    );
    const db = normalizeDatabase(JSON.parse(decoder.decode(clear)));
    this.db = db;
    this.key = key;
    this.salt = salt;
    this.diskFingerprint = await fingerprint(raw);
    this.resetLockTimer();
    this.notifyConflictCopies();
    return true;
  }
  async notifyConflictCopies() {
    try {
      const adapter = this.app.vault.adapter;
      if (!await adapter.exists(CONFLICT_DIR)) return;
      const files = (await adapter.list(CONFLICT_DIR)).files.filter((path) => path.endsWith(".enc"));
      if (files.length) new Notice(t(
        "\u041D\u0430\u0439\u0434\u0435\u043D\u043E \u043A\u043E\u043D\u0444\u043B\u0438\u043A\u0442\u043D\u044B\u0445 \u043A\u043E\u043F\u0438\u0439: {count}. \u0412\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435 \u2014 \u0432 \u043A\u043E\u043C\u0430\u043D\u0434\u0430\u0445 Password Kanban.",
        "Found {count} conflict copy/copies. Restore them from Password Kanban commands.",
        { count: files.length }
      ));
    } catch (error) {
      console.warn(t("Password Kanban \u043D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043F\u0440\u043E\u0432\u0435\u0440\u0438\u0442\u044C \u043A\u043E\u043D\u0444\u043B\u0438\u043A\u0442\u043D\u044B\u0435 \u043A\u043E\u043F\u0438\u0438", "Password Kanban could not inspect conflict copies"), error);
    }
  }
  async encryptedEnvelope(db = this.db) {
    const iv = randomBytes(12);
    const clear = encoder.encode(JSON.stringify(db));
    const encrypted = await crypto.subtle.encrypt({ name: "AES-GCM", iv }, this.key, clear);
    return JSON.stringify({
      formatVersion: 1,
      kdf: {
        name: "PBKDF2",
        hash: "SHA-256",
        iterations: KDF_ITERATIONS,
        salt: bytesToBase64(this.salt)
      },
      cipher: {
        name: "AES-GCM",
        iv: bytesToBase64(iv),
        data: bytesToBase64(new Uint8Array(encrypted))
      }
    });
  }
  async persist() {
    const task = this.saveQueue.then(() => this.persistOnce());
    this.saveQueue = task.catch(() => false);
    return task;
  }
  async persistOnce() {
    if (!this.db || !this.key) return false;
    const adapter = this.app.vault.adapter;
    if (this.diskFingerprint) {
      const exists = await adapter.exists(DB_PATH);
      const currentRaw = exists ? await adapter.read(DB_PATH) : "";
      const currentFingerprint = exists ? await fingerprint(currentRaw) : null;
      if (!exists || currentFingerprint !== this.diskFingerprint) {
        const localEnvelope = await this.encryptedEnvelope();
        if (!await adapter.exists(CONFLICT_DIR)) await adapter.mkdir(CONFLICT_DIR);
        const conflictPath = `${CONFLICT_DIR}/local-${(/* @__PURE__ */ new Date()).toISOString().replace(/[:.]/g, "-")}.enc`;
        await adapter.write(conflictPath, localEnvelope);
        this.lock(false);
        new Notice(t(
          "\u041E\u0431\u043D\u0430\u0440\u0443\u0436\u0435\u043D \u043A\u043E\u043D\u0444\u043B\u0438\u043A\u0442 \u0441\u0438\u043D\u0445\u0440\u043E\u043D\u0438\u0437\u0430\u0446\u0438\u0438. \u041B\u043E\u043A\u0430\u043B\u044C\u043D\u0430\u044F \u0432\u0435\u0440\u0441\u0438\u044F \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0430 \u0432 {path}; \u043E\u0441\u043D\u043E\u0432\u043D\u0430\u044F \u0431\u0430\u0437\u0430 \u043D\u0435 \u043F\u0435\u0440\u0435\u0437\u0430\u043F\u0438\u0441\u0430\u043D\u0430.",
          "A sync conflict was detected. The local copy was saved to {path}; the main database was not overwritten.",
          { path: conflictPath }
        ));
        return false;
      }
    }
    const raw = await this.encryptedEnvelope();
    await adapter.write(DB_PATH, raw);
    this.diskFingerprint = await fingerprint(raw);
    return true;
  }
  async saveAndNotify() {
    try {
      return await this.persist();
    } catch (error) {
      console.error(t("\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C Password Kanban", "Password Kanban save failed"), error);
      new Notice(t("\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0437\u0430\u0448\u0438\u0444\u0440\u043E\u0432\u0430\u043D\u043D\u0443\u044E \u0431\u0430\u0437\u0443: {message}", "Could not save the encrypted database: {message}", { message: error.message }));
      return false;
    }
  }
  async openBoard(gateMode = null) {
    let leaf = this.app.workspace.getLeavesOfType(VIEW_TYPE)[0];
    if (!leaf) {
      leaf = this.app.workspace.getLeaf("tab");
      await leaf.setViewState({ type: VIEW_TYPE, active: true });
    }
    this.app.workspace.revealLeaf(leaf);
    this.boardView = leaf.view;
    this.boardView.gateMode = this.db && this.key ? null : gateMode || this.pendingGateMode || this.boardView.gateMode || "unlock";
    this.boardView?.render();
    if (this.db && this.key) this.resetLockTimer();
  }
  resetLockTimer() {
    if (!this.db || !this.key) return;
    if (this.editingMode) {
      window.clearTimeout(this.editingModeTimer);
      this.editingModeTimer = window.setTimeout(() => {
        this.editingMode = false;
        this.editingModeTimer = null;
        this.lock(true);
      }, AUTO_LOCK_MS);
      return;
    }
    window.clearTimeout(this.lockTimer);
    this.lockTimer = window.setTimeout(() => this.lock(true), AUTO_LOCK_MS);
  }
  toggleEditingMode() {
    if (!this.db || !this.key) return;
    if (this.editingMode) {
      this.editingMode = false;
      window.clearTimeout(this.editingModeTimer);
      this.editingModeTimer = null;
      this.resetLockTimer();
      this.boardView?.render();
      new Notice(t(
        "\u041E\u0431\u044B\u0447\u043D\u044B\u0439 \u0440\u0435\u0436\u0438\u043C \u0432\u043A\u043B\u044E\u0447\u0451\u043D. \u0411\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u043A\u0430 \u043F\u0440\u0438 \u043F\u043E\u0442\u0435\u0440\u0435 \u0444\u043E\u043A\u0443\u0441\u0430 \u0430\u043A\u0442\u0438\u0432\u043D\u0430.",
        "Normal mode enabled. Locking on focus loss is active."
      ));
      return;
    }
    this.editingMode = true;
    window.clearTimeout(this.lockTimer);
    this.lockTimer = null;
    this.resetLockTimer();
    this.boardView?.render();
    new Notice(t(
      "\u0420\u0435\u0436\u0438\u043C \u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u0432\u043A\u043B\u044E\u0447\u0451\u043D. \u0425\u0440\u0430\u043D\u0438\u043B\u0438\u0449\u0435 \u0437\u0430\u0431\u043B\u043E\u043A\u0438\u0440\u0443\u0435\u0442\u0441\u044F \u0447\u0435\u0440\u0435\u0437 5 \u043C\u0438\u043D\u0443\u0442 \u0431\u0435\u0437\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F.",
      "Editing mode enabled. The vault will lock after 5 minutes of inactivity."
    ));
  }
  lock(showNotice) {
    window.clearTimeout(this.lockTimer);
    window.clearTimeout(this.editingModeTimer);
    this.editingModeTimer = null;
    this.editingMode = false;
    const hadUnsavedEditor = Boolean(this.entryEditorModal);
    this.db = null;
    this.key = null;
    this.salt = null;
    this.diskFingerprint = null;
    this.entryEditorModal?.close();
    this.conflictRecoveryModal?.close();
    if (this.boardView) {
      this.boardView.gateMode = "unlock";
      this.boardView.expandedEntryId = null;
      this.boardView.revealedPasswords.clear();
      this.boardView.render();
    }
    if (showNotice) {
      new Notice(hadUnsavedEditor ? t("\u0425\u0440\u0430\u043D\u0438\u043B\u0438\u0449\u0435 \u0437\u0430\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u043D\u043E. \u041D\u0435\u0441\u043E\u0445\u0440\u0430\u043D\u0451\u043D\u043D\u044B\u0435 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438 \u043F\u043E\u0442\u0435\u0440\u044F\u043D\u044B.", "The vault is locked. Unsaved card changes were discarded.") : t("Password Kanban \u0437\u0430\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u043D.", "Password Kanban is locked."));
    }
  }
  async openConflictRecovery() {
    if (!this.db || !this.key) {
      new Notice(t(
        "\u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u0437\u043D\u0430\u0447\u043E\u043A Password Kanban \u0441\u043B\u0435\u0432\u0430, \u0447\u0442\u043E\u0431\u044B \u043E\u0442\u043A\u0440\u044B\u0442\u044C \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443, \u0437\u0430\u0442\u0435\u043C \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043C\u0430\u0441\u0442\u0435\u0440-\u043F\u0430\u0440\u043E\u043B\u044C.",
        "Click the Password Kanban icon in the left ribbon to open the page, then enter your master password."
      ));
      return;
    }
    const adapter = this.app.vault.adapter;
    if (!await adapter.exists(CONFLICT_DIR)) {
      new Notice(t("\u041B\u043E\u043A\u0430\u043B\u044C\u043D\u044B\u0445 \u043A\u043E\u043F\u0438\u0439 \u043F\u043E\u0441\u043B\u0435 \u043A\u043E\u043D\u0444\u043B\u0438\u043A\u0442\u043E\u0432 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E.", "No local conflict copies were found."));
      return;
    }
    const listing = await adapter.list(CONFLICT_DIR);
    const files = listing.files.filter((path) => path.endsWith(".enc"));
    if (!files.length) {
      new Notice(t("\u041B\u043E\u043A\u0430\u043B\u044C\u043D\u044B\u0445 \u043A\u043E\u043F\u0438\u0439 \u043F\u043E\u0441\u043B\u0435 \u043A\u043E\u043D\u0444\u043B\u0438\u043A\u0442\u043E\u0432 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E.", "No local conflict copies were found."));
      return;
    }
    new ConflictRecoveryModal(this.app, this, files).open();
  }
  openHelp() {
    new HelpModal(this.app, this).open();
  }
  async mergeConflictCopy(path, password) {
    if (!this.db || !this.key) throw new Error(t("\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u0440\u0430\u0437\u0431\u043B\u043E\u043A\u0438\u0440\u0443\u0439\u0442\u0435 \u043E\u0441\u043D\u043E\u0432\u043D\u0443\u044E \u0431\u0430\u0437\u0443.", "Unlock the main database first."));
    const raw = await this.app.vault.adapter.read(path);
    const envelope = JSON.parse(raw);
    const iterations = Number(envelope.kdf?.iterations);
    if (!Number.isInteger(iterations) || iterations < 1e5 || iterations > 2e6) {
      throw new Error(t("\u041D\u0435\u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u044B\u0435 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B \u043A\u043E\u043F\u0438\u0438.", "Invalid conflict-copy parameters."));
    }
    const salt = base64ToBytes(envelope.kdf.salt);
    const key = await deriveKey(password, salt, iterations);
    const clear = await crypto.subtle.decrypt(
      { name: "AES-GCM", iv: base64ToBytes(envelope.cipher.iv) },
      key,
      base64ToBytes(envelope.cipher.data)
    );
    const recovered = normalizeDatabase(JSON.parse(decoder.decode(clear)));
    const categoryMap = /* @__PURE__ */ new Map();
    for (const category of recovered.categories) {
      let target = this.db.categories.find((item) => item.name === category.name);
      if (!target) {
        target = { id: crypto.randomUUID(), name: category.name };
        this.db.categories.push(target);
      }
      categoryMap.set(category.id, target.id);
    }
    for (const entry of recovered.entries) {
      this.db.entries.push({
        ...entry,
        id: crypto.randomUUID(),
        categoryId: categoryMap.get(entry.categoryId) || this.db.categories[0]?.id,
        title: `${entry.title} ${t("(\u0432\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043E)", "(restored)")}`,
        fields: entry.fields.map((field) => ({ ...field, id: crypto.randomUUID() }))
      });
    }
    const saved = await this.persist();
    if (!saved) throw new Error(t(
      "\u041E\u0441\u043D\u043E\u0432\u043D\u0430\u044F \u0431\u0430\u0437\u0430 \u0438\u0437\u043C\u0435\u043D\u0438\u043B\u0430\u0441\u044C \u0432\u043E \u0432\u0440\u0435\u043C\u044F \u0432\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u044F. \u041A\u043E\u043F\u0438\u044F \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0430; \u043F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0435 \u043F\u043E\u0441\u043B\u0435 \u0441\u0438\u043D\u0445\u0440\u043E\u043D\u0438\u0437\u0430\u0446\u0438\u0438.",
      "The main database changed during recovery. The copy was preserved; retry after syncing."
    ));
    await this.app.vault.adapter.remove(path);
    new Notice(t("\u041A\u043E\u043F\u0438\u044F \u0432\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0430. \u0417\u0430\u043F\u0438\u0441\u0438 \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u044B \u0441 \u043F\u043E\u043C\u0435\u0442\u043A\u043E\u0439 \xAB\u0432\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043E\xBB.", "Conflict copy restored. Recovered entries were added with \u201Crestored\u201D in their titles."));
    this.openBoard();
  }
};
var TextPromptModal = class extends Modal {
  constructor(app, title, initialValue, onSubmit) {
    super(app);
    this.titleText = title;
    this.initialValue = initialValue;
    this.onSubmit = onSubmit;
  }
  onOpen() {
    this.modalEl.classList.add("vkp-shell");
    this.contentEl.replaceChildren();
    this.contentEl.appendChild(makeEl("h3", "", this.titleText));
    const input = makeEl("input", "vkp-input");
    input.value = this.initialValue || "";
    const error = makeEl("div", "vkp-error");
    this.contentEl.append(input, error);
    makeButton(this.contentEl, t("\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C", "Save"), async () => {
      const value = input.value.trim();
      if (!value) {
        error.textContent = t("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435.", "Enter a name.");
        return;
      }
      await this.onSubmit(value);
      this.close();
    }, "mod-cta");
    input.focus();
  }
};
var EntryEditorModal = class extends Modal {
  constructor(app, plugin, entry, defaultCategoryId, onSave) {
    super(app);
    this.plugin = plugin;
    this.entry = entry;
    this.defaultCategoryId = defaultCategoryId;
    this.onSave = onSave;
    this.fieldSortable = null;
  }
  addFieldRow(container, field = {}) {
    const row = makeEl("div", "vkp-field-edit-row");
    row.dataset.id = field.id || crypto.randomUUID();
    const label = makeEl("input", "vkp-input vkp-field-label");
    label.placeholder = t("\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043F\u043E\u043B\u044F", "Field name");
    label.value = field.label || "";
    const value = makeEl("textarea", "vkp-input vkp-field-value");
    value.placeholder = t("\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435", "Value");
    value.value = field.value || "";
    const grip = makeEl("button", "clickable-icon vkp-field-grip");
    grip.type = "button";
    grip.setAttribute("aria-label", t("\u041F\u0435\u0440\u0435\u0442\u0430\u0449\u0438\u0442\u044C \u043F\u043E\u043B\u0435", "Drag field"));
    grip.title = t("\u041F\u0435\u0440\u0435\u0442\u0430\u0449\u0438\u0442\u044C \u043F\u043E\u043B\u0435", "Drag field");
    setIcon(grip, "grip-vertical");
    const generate = makeEl("button", "vkp-small", t("\u0413\u0435\u043D\u0435\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C", "Generate"));
    generate.type = "button";
    generate.classList.add("vkp-field-generate");
    generate.setAttribute("aria-label", t("\u0421\u0433\u0435\u043D\u0435\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043F\u0430\u0440\u043E\u043B\u044C", "Generate password"));
    generate.title = t("\u0421\u0433\u0435\u043D\u0435\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043F\u0430\u0440\u043E\u043B\u044C (11\u201315 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432)", "Generate password (11\u201315 characters)");
    const updateGeneratorVisibility = () => {
      const fieldName = label.value.trim().toLocaleLowerCase();
      const available = fieldName === "\u043F\u0430\u0440\u043E\u043B\u044C" || fieldName === "password";
      generate.disabled = !available;
      generate.classList.toggle("is-placeholder", !available);
      generate.setAttribute("aria-hidden", String(!available));
    };
    label.addEventListener("input", updateGeneratorVisibility);
    generate.addEventListener("click", () => {
      value.value = generatePassword();
      value.dispatchEvent(new Event("input", { bubbles: true }));
    });
    updateGeneratorVisibility();
    const remove = makeEl("button", "vkp-small vkp-danger", "\xD7");
    remove.type = "button";
    remove.setAttribute("aria-label", t("\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043F\u043E\u043B\u0435", "Delete field"));
    remove.title = t("\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043F\u043E\u043B\u0435", "Delete field");
    remove.addEventListener("click", () => {
      row.remove();
    });
    row.append(grip, label, value, generate, remove);
    container.appendChild(row);
  }
  onOpen() {
    this.plugin.entryEditorModal = this;
    this.modalEl.classList.add("vkp-shell", "vkp-editor");
    this.contentEl.replaceChildren();
    this.contentEl.appendChild(makeEl("h2", "", this.entry ? t("\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0430\u043A\u043A\u0430\u0443\u043D\u0442", "Edit account") : t("\u041D\u043E\u0432\u044B\u0439 \u0430\u043A\u043A\u0430\u0443\u043D\u0442", "New account")));
    const title = makeEl("input", "vkp-input");
    title.classList.add("vkp-card-title-input");
    title.placeholder = t("\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438", "Card title");
    title.value = this.entry?.title || "";
    const fields = makeEl("div", "vkp-editor-fields");
    const initial = this.entry?.fields || [
      { label: t("\u0421\u0430\u0439\u0442", "Website"), value: "" },
      { label: t("\u041B\u043E\u0433\u0438\u043D", "Username"), value: "" },
      { label: t("\u041F\u0430\u0440\u043E\u043B\u044C", "Password"), value: "" },
      { label: t("\u0417\u0430\u043C\u0435\u0442\u043A\u0438", "Notes"), value: "" }
    ];
    for (const field of initial) this.addFieldRow(fields, field);
    this.fieldSortable = Sortable.create(fields, {
      animation: 180,
      draggable: ".vkp-field-edit-row",
      handle: ".vkp-field-grip",
      direction: "vertical",
      forceFallback: true,
      fallbackOnBody: true,
      fallbackTolerance: 4,
      fallbackClass: "vkp-field-sort-fallback",
      ghostClass: "vkp-field-sort-ghost",
      chosenClass: "vkp-sort-chosen",
      dragClass: "vkp-sort-drag"
    });
    const error = makeEl("div", "vkp-error");
    this.contentEl.append(title, makeEl("h3", "vkp-editor-fields-heading", t("\u041F\u043E\u043B\u044F", "Fields")), fields, error);
    const actions = makeEl("div", "vkp-editor-actions");
    makeButton(actions, t("+ \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043F\u043E\u043B\u0435", "+ Add field"), () => this.addFieldRow(fields), "vkp-secondary");
    this.saveButton = makeButton(actions, this.entry ? t("\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F", "Save changes") : t("\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0443", "Create card"), async () => {
      const name = title.value.trim();
      if (!name) {
        error.textContent = t("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438.", "Enter a card title.");
        return;
      }
      const fieldValues = [...fields.querySelectorAll(".vkp-field-edit-row")].map((row) => ({
        id: row.dataset.id,
        label: row.querySelector("input").value.trim(),
        value: row.querySelector("textarea").value
      })).filter((field) => field.label);
      const now = Date.now();
      const result = {
        id: this.entry?.id || crypto.randomUUID(),
        categoryId: this.entry?.categoryId || this.defaultCategoryId || this.plugin.db.categories[0]?.id || "",
        title: name,
        fields: fieldValues,
        createdAt: this.entry?.createdAt || now,
        updatedAt: now
      };
      await this.onSave(result);
      this.close();
    }, "mod-cta");
    this.contentEl.appendChild(actions);
    this.editorKeyHandler = (event) => {
      if (event.key === "Tab") {
        const inputs = [...this.contentEl.querySelectorAll("input.vkp-input:not(.vkp-field-label), select.vkp-input, textarea.vkp-input")];
        if (!inputs.length) return;
        event.preventDefault();
        const currentIndex = inputs.indexOf(document.activeElement);
        const direction = event.shiftKey ? -1 : 1;
        const nextIndex = currentIndex < 0 ? direction > 0 ? 0 : inputs.length - 1 : (currentIndex + direction + inputs.length) % inputs.length;
        inputs[nextIndex].focus();
        return;
      }
      if (event.key === "Enter" && !event.isComposing && event.keyCode !== 229 && event.target.matches("input.vkp-input, select.vkp-input, textarea.vkp-input")) {
        if (event.target.matches("textarea") && event.shiftKey) return;
        event.preventDefault();
        this.saveButton?.click();
      }
    };
    this.contentEl.addEventListener("keydown", this.editorKeyHandler);
  }
  onClose() {
    if (this.editorKeyHandler) this.contentEl.removeEventListener("keydown", this.editorKeyHandler);
    this.fieldSortable?.destroy();
    this.fieldSortable = null;
    if (this.plugin.entryEditorModal === this) this.plugin.entryEditorModal = null;
    this.contentEl.replaceChildren();
  }
};
var ConflictRecoveryModal = class extends Modal {
  constructor(app, plugin, files) {
    super(app);
    this.plugin = plugin;
    this.files = files;
  }
  onOpen() {
    this.plugin.conflictRecoveryModal = this;
    this.modalEl.classList.add("vkp-shell");
    this.contentEl.replaceChildren();
    this.contentEl.appendChild(makeEl("h2", "", t("\u0412\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u043A\u043E\u043D\u0444\u043B\u0438\u043A\u0442\u043D\u0443\u044E \u043A\u043E\u043F\u0438\u044E", "Restore conflict copy")));
    this.contentEl.appendChild(makeEl("p", "vkp-muted", t(
      "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043A\u043E\u043F\u0438\u044E \u0438 \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043C\u0430\u0441\u0442\u0435\u0440-\u043F\u0430\u0440\u043E\u043B\u044C. \u0417\u0430\u043F\u0438\u0441\u0438 \u0431\u0443\u0434\u0443\u0442 \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u044B \u043A \u043E\u0441\u043D\u043E\u0432\u043D\u043E\u0439 \u0431\u0430\u0437\u0435, \u0430 \u0438\u0441\u0445\u043E\u0434\u043D\u0430\u044F \u043A\u043E\u043F\u0438\u044F \u0443\u0434\u0430\u043B\u0438\u0442\u0441\u044F \u0442\u043E\u043B\u044C\u043A\u043E \u043F\u043E\u0441\u043B\u0435 \u0443\u0441\u043F\u0435\u0448\u043D\u043E\u0433\u043E \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F.",
      "Choose a copy and enter the master password. Its entries will be added to the main database; the source copy is removed only after a successful save."
    )));
    const select = makeEl("select", "vkp-input");
    for (const file of this.files) {
      const option = makeEl("option", "", file.split("/").pop());
      option.value = file;
      select.appendChild(option);
    }
    const password = makeEl("input", "vkp-input");
    password.type = "password";
    password.placeholder = t("\u041C\u0430\u0441\u0442\u0435\u0440-\u043F\u0430\u0440\u043E\u043B\u044C", "Master password");
    const error = makeEl("div", "vkp-error");
    this.contentEl.append(select, password, error);
    makeButton(this.contentEl, t("\u0412\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u043A\u043E\u043F\u0438\u044E", "Restore copy"), async () => {
      try {
        await this.plugin.mergeConflictCopy(select.value, password.value);
        this.close();
      } catch (e) {
        error.textContent = e.message || t("\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0432\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u043A\u043E\u043F\u0438\u044E.", "Could not restore the copy.");
      }
    }, "mod-cta");
  }
  onClose() {
    if (this.plugin.conflictRecoveryModal === this) this.plugin.conflictRecoveryModal = null;
    this.contentEl.replaceChildren();
  }
};
var HelpModal = class extends Modal {
  constructor(app, plugin) {
    super(app);
    this.plugin = plugin;
  }
  onOpen() {
    this.modalEl.classList.add("vkp-shell", "vkp-help-modal");
    this.contentEl.replaceChildren();
    this.contentEl.appendChild(makeEl("h2", "", t("\u0421\u043F\u0440\u0430\u0432\u043A\u0430 Password Kanban", "Password Kanban help")));
    this.contentEl.appendChild(makeEl("p", "vkp-muted", t("\u0412\u0435\u0440\u0441\u0438\u044F {version}", "Version {version}", { version: this.plugin.manifest.version })));
    const addSection = (title, items) => {
      const section = makeEl("section", "vkp-help-section");
      section.appendChild(makeEl("h3", "", title));
      const list = makeEl("ul", "vkp-help-list");
      for (const item of items) list.appendChild(makeEl("li", "", item));
      section.appendChild(list);
      this.contentEl.appendChild(section);
    };
    addSection(t("\u0414\u043E\u0441\u043A\u0430 \u0438 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438", "Board and cards"), [
      t("\u0414\u043E\u0431\u0430\u0432\u043B\u044F\u0439\u0442\u0435 \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u044B \u0432 \u043D\u0443\u0436\u043D\u0443\u044E \u043A\u043E\u043B\u043E\u043D\u043A\u0443. \u041A\u0430\u0440\u0442\u043E\u0447\u043A\u0430 \u0440\u0430\u0441\u043A\u0440\u044B\u0432\u0430\u0435\u0442\u0441\u044F \u043D\u0430\u0436\u0430\u0442\u0438\u0435\u043C \u043D\u0430 \u0435\u0451 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435.", "Add accounts to the appropriate column. Click a card title to expand it."),
      t("\u0411\u0435\u0440\u0438\u0442\u0435\u0441\u044C \u0437\u0430 \u0440\u0443\u0447\u043A\u0443 \u043D\u0430 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0435, \u0447\u0442\u043E\u0431\u044B \u043C\u0435\u043D\u044F\u0442\u044C \u0435\u0451 \u043F\u043E\u0440\u044F\u0434\u043E\u043A \u0432 \u043A\u043E\u043B\u043E\u043D\u043A\u0435 \u0438\u043B\u0438 \u043F\u0435\u0440\u0435\u043D\u043E\u0441\u0438\u0442\u044C \u0432 \u0434\u0440\u0443\u0433\u0443\u044E \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044E. \u0420\u0443\u0447\u043A\u0438 \u0432 \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043A\u0430\u0445 \u043A\u043E\u043B\u043E\u043D\u043E\u043A \u0438 \u0440\u0435\u0434\u0430\u043A\u0442\u043E\u0440\u0435 \u043C\u0435\u043D\u044F\u044E\u0442 \u043F\u043E\u0440\u044F\u0434\u043E\u043A \u043A\u043E\u043B\u043E\u043D\u043E\u043A \u0438 \u043F\u043E\u043B\u0435\u0439.", "Use a card's grip to reorder it within a column or move it to another category. Grips in column headers and the editor reorder columns and fields."),
      t("\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0430 \u0437\u0430\u043A\u0440\u044B\u0442\u0430 \u043F\u0440\u0438 \u0437\u0430\u043F\u0443\u0441\u043A\u0435 Obsidian. \u041E\u0442\u043A\u0440\u043E\u0439\u0442\u0435 \u0435\u0451 \u0437\u043D\u0430\u0447\u043A\u043E\u043C Password Kanban \u043D\u0430 \u043B\u0435\u0432\u043E\u0439 \u043F\u0430\u043D\u0435\u043B\u0438; \u0435\u0441\u043B\u0438 \u0445\u0440\u0430\u043D\u0438\u043B\u0438\u0449\u0435 \u0437\u0430\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u043D\u043E, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043C\u0430\u0441\u0442\u0435\u0440-\u043F\u0430\u0440\u043E\u043B\u044C \u043F\u0440\u044F\u043C\u043E \u043D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435.", "The manager page stays closed when Obsidian starts. Open it from the Password Kanban icon in the left ribbon; when locked, enter the master password directly on the page."),
      t("\u041F\u043E\u0438\u0441\u043A \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u043F\u043E \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u044E \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438 \u0438 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F\u043C \u043F\u043E\u043B\u0435\u0439, \u043F\u043E\u043A\u0430 \u0445\u0440\u0430\u043D\u0438\u043B\u0438\u0449\u0435 \u0440\u0430\u0437\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u043D\u043E.", "Search matches card titles and field values while the vault is unlocked.")
    ]);
    addSection(t("\u041F\u043E\u043B\u044F \u0438 \u0433\u0435\u043D\u0435\u0440\u0430\u0442\u043E\u0440", "Fields and generator"), [
      t("\u0412 \u043D\u043E\u0432\u044B\u0445 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0430\u0445 \u043F\u043E\u043B\u0435 \xAB\u0421\u0430\u0439\u0442\xBB \u0438\u0434\u0451\u0442 \u043F\u0435\u0440\u0432\u044B\u043C. \u041F\u043E\u043B\u044F \u043C\u043E\u0436\u043D\u043E \u0434\u043E\u0431\u0430\u0432\u043B\u044F\u0442\u044C, \u043F\u0435\u0440\u0435\u0438\u043C\u0435\u043D\u043E\u0432\u044B\u0432\u0430\u0442\u044C \u0438 \u043C\u0435\u043D\u044F\u0442\u044C \u0438\u0445 \u043F\u043E\u0440\u044F\u0434\u043E\u043A \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u043E \u0432 \u043A\u0430\u0436\u0434\u043E\u0439 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0435.", "New cards start with the Website field. Add, rename, and reorder fields independently in each card."),
      t("\u0413\u0435\u043D\u0435\u0440\u0430\u0442\u043E\u0440 \u0434\u043E\u0441\u0442\u0443\u043F\u0435\u043D \u0442\u043E\u043B\u044C\u043A\u043E \u0434\u043B\u044F \u043F\u043E\u043B\u044F \xAB\u041F\u0430\u0440\u043E\u043B\u044C\xBB. \u041E\u043D \u0441\u043E\u0437\u0434\u0430\u0451\u0442 11\u201315 \u043B\u0430\u0442\u0438\u043D\u0441\u043A\u0438\u0445 \u0431\u0443\u043A\u0432 \u0438 \u0446\u0438\u0444\u0440 \u0431\u0435\u0437 \u0440\u0430\u0441\u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0451\u043D\u043D\u044B\u0445 \u0432\u0438\u0437\u0443\u0430\u043B\u044C\u043D\u043E \u043F\u043E\u0445\u043E\u0436\u0438\u0445 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432.", "The generator is available only for the Password field. It creates 11\u201315 Latin letters and digits, excluding commonly confused characters."),
      t("\u041F\u043E\u043B\u0435 \xAB\u041F\u0430\u0440\u043E\u043B\u044C\xBB \u0441\u043A\u0440\u044B\u0442\u043E \u043F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E. \u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u043D\u0430 \u0437\u043D\u0430\u0447\u043E\u043A \u0433\u043B\u0430\u0437\u0430, \u0447\u0442\u043E\u0431\u044B \u043F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0435\u0433\u043E; \u043F\u0440\u0438 \u0441\u0432\u043E\u0440\u0430\u0447\u0438\u0432\u0430\u043D\u0438\u0438 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438 \u043F\u0430\u0440\u043E\u043B\u044C \u0441\u043D\u043E\u0432\u0430 \u0441\u043A\u0440\u044B\u0432\u0430\u0435\u0442\u0441\u044F.", "Password fields are hidden by default. Use the eye icon to reveal one; collapsing the card hides it again."),
      t("Enter \u0441\u043E\u0445\u0440\u0430\u043D\u044F\u0435\u0442 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0443; Tab \u0438 Shift+Tab \u043F\u0435\u0440\u0435\u043C\u0435\u0449\u0430\u044E\u0442\u0441\u044F \u043F\u043E \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F\u043C, \u043F\u0440\u043E\u043F\u0443\u0441\u043A\u0430\u044F \u043A\u043D\u043E\u043F\u043A\u0438 \u0438 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u044F \u043F\u043E\u043B\u0435\u0439. Shift+Enter \u0432\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \u043D\u043E\u0432\u0443\u044E \u0441\u0442\u0440\u043E\u043A\u0443.", "Enter saves the card. Tab and Shift+Tab move between values, skipping buttons and field names. Shift+Enter inserts a new line.")
    ]);
    addSection(t("\u041A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0438 \u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u043A\u0430", "Clipboard and locking"), [
      t("\u041F\u043E\u0441\u043B\u0435 \u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u043F\u043B\u0430\u0433\u0438\u043D \u0447\u0435\u0440\u0435\u0437 2 \u043C\u0438\u043D\u0443\u0442\u044B \u043F\u043E\u043F\u044B\u0442\u0430\u0435\u0442\u0441\u044F \u043E\u0447\u0438\u0441\u0442\u0438\u0442\u044C \u0431\u0443\u0444\u0435\u0440, \u043D\u043E \u0442\u043E\u043B\u044C\u043A\u043E \u0435\u0441\u043B\u0438 \u0442\u0430\u043C \u043E\u0441\u0442\u0430\u043B\u043E\u0441\u044C \u0442\u043E \u0436\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435. \u0415\u0441\u043B\u0438 \u0434\u043E\u0441\u0442\u0443\u043F \u043A \u0431\u0443\u0444\u0435\u0440\u0443 \u0437\u0430\u043F\u0440\u0435\u0449\u0451\u043D, \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0438\u0437\u043C\u0435\u043D\u0438\u043B\u043E\u0441\u044C \u0438\u043B\u0438 Obsidian \u0437\u0430\u043A\u0440\u044B\u0442, \u043E\u0447\u0438\u0441\u0442\u043A\u0430 \u043D\u0435 \u0432\u044B\u043F\u043E\u043B\u043D\u044F\u0435\u0442\u0441\u044F.", "Two minutes after copying, the plugin tries to clear the clipboard only if the copied value is still there. It leaves the clipboard untouched if access is denied or its contents changed; the timer does not run after Obsidian closes."),
      t("\u0425\u0440\u0430\u043D\u0438\u043B\u0438\u0449\u0435 \u0431\u043B\u043E\u043A\u0438\u0440\u0443\u0435\u0442\u0441\u044F \u043F\u0440\u0438 \u043F\u043E\u0442\u0435\u0440\u0435 \u0444\u043E\u043A\u0443\u0441\u0430 Obsidian \u0438\u043B\u0438 \u043F\u043E\u0441\u043B\u0435 5 \u043C\u0438\u043D\u0443\u0442 \u0431\u0435\u0437\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F. \u0412 \u0440\u0435\u0436\u0438\u043C\u0435 \u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u043A\u0430 \u043F\u0440\u0438 \u043F\u043E\u0442\u0435\u0440\u0435 \u0444\u043E\u043A\u0443\u0441\u0430 \u043E\u0442\u043A\u043B\u044E\u0447\u0435\u043D\u0430, \u0430 \u0442\u0430\u0439\u043C\u0435\u0440 \u043D\u0430 5 \u043C\u0438\u043D\u0443\u0442 \u043E\u0431\u043D\u043E\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043F\u0440\u0438 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F\u0445 \u0432 Obsidian; \u0435\u0441\u043B\u0438 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439 \u043D\u0435\u0442, \u0445\u0440\u0430\u043D\u0438\u043B\u0438\u0449\u0435 \u0431\u043B\u043E\u043A\u0438\u0440\u0443\u0435\u0442\u0441\u044F. \u041F\u0440\u0438 \u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u043A\u0435 \u043E\u0442\u043A\u0440\u044B\u0442\u0430\u044F \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0430 \u0441\u043A\u0440\u044B\u0432\u0430\u0435\u0442\u0441\u044F; \u043D\u0435\u0441\u043E\u0445\u0440\u0430\u043D\u0451\u043D\u043D\u044B\u0435 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u0440\u0435\u0434\u0430\u043A\u0442\u043E\u0440\u0430 \u0442\u0435\u0440\u044F\u044E\u0442\u0441\u044F.", "The vault locks when Obsidian loses focus or after 5 minutes of inactivity. Editing mode disables focus-loss locking; its 5-minute timer resets whenever you interact with Obsidian and locks the vault after 5 minutes without activity. The open card is hidden; unsaved editor changes are discarded."),
      t("\u041C\u0430\u0441\u0442\u0435\u0440-\u043F\u0430\u0440\u043E\u043B\u044C \u0437\u0430\u043F\u0440\u0430\u0448\u0438\u0432\u0430\u0435\u0442\u0441\u044F \u043F\u0440\u0438 \u0437\u0430\u043F\u0443\u0441\u043A\u0435 Obsidian \u0438 \u043D\u0438\u0433\u0434\u0435 \u043D\u0435 \u0441\u043E\u0445\u0440\u0430\u043D\u044F\u0435\u0442\u0441\u044F.", "The master password is requested when Obsidian starts and is never stored.")
    ]);
    addSection(t("\u0425\u0440\u0430\u043D\u0435\u043D\u0438\u0435 \u0438 \u0441\u0438\u043D\u0445\u0440\u043E\u043D\u0438\u0437\u0430\u0446\u0438\u044F", "Storage and sync"), [
      t("\u0414\u0430\u043D\u043D\u044B\u0435 \u0445\u0440\u0430\u043D\u044F\u0442\u0441\u044F \u0432 \u043A\u043E\u0440\u043D\u0435 vault \u0432 \u0444\u0430\u0439\u043B\u0435 .password-kanban.enc: AES-256-GCM, \u043A\u043B\u044E\u0447 \u2014 PBKDF2-HMAC-SHA-256 \u0441 600 000 \u0438\u0442\u0435\u0440\u0430\u0446\u0438\u044F\u043C\u0438.", "Data is stored in .password-kanban.enc at the vault root, encrypted with AES-256-GCM. The key is derived using PBKDF2-HMAC-SHA-256 with 600,000 iterations."),
      t("\u041F\u0430\u0440\u043E\u043B\u0438 \u0438 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438 \u043D\u0435 \u0437\u0430\u043F\u0438\u0441\u044B\u0432\u0430\u044E\u0442\u0441\u044F \u0432 Markdown. \u041F\u0440\u0438 \u043E\u0431\u043D\u0430\u0440\u0443\u0436\u0435\u043D\u043D\u043E\u043C \u043A\u043E\u043D\u0444\u043B\u0438\u043A\u0442\u0435 \u0441\u0438\u043D\u0445\u0440\u043E\u043D\u0438\u0437\u0430\u0446\u0438\u0438 \u043B\u043E\u043A\u0430\u043B\u044C\u043D\u0430\u044F \u043A\u043E\u043F\u0438\u044F \u0441\u043E\u0445\u0440\u0430\u043D\u044F\u0435\u0442\u0441\u044F \u0432 .password-kanban-conflicts; \u0435\u0451 \u043C\u043E\u0436\u043D\u043E \u0432\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u043A\u043E\u043C\u0430\u043D\u0434\u043E\u0439 Password Kanban.", "Passwords and cards are never written to Markdown. Detected sync conflicts are saved in .password-kanban-conflicts and can be restored with a Password Kanban command."),
      t("\u041F\u043E\u0442\u0435\u0440\u044F\u043D\u043D\u044B\u0439 \u043C\u0430\u0441\u0442\u0435\u0440-\u043F\u0430\u0440\u043E\u043B\u044C \u0432\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u043D\u0435\u043B\u044C\u0437\u044F. \u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u043D\u0430\u0434\u0451\u0436\u043D\u0443\u044E \u0444\u0440\u0430\u0437\u0443-\u043F\u0430\u0440\u043E\u043B\u044C \u0438 \u043F\u0440\u043E\u0432\u0435\u0440\u044F\u0439\u0442\u0435 \u0441\u0438\u043D\u0445\u0440\u043E\u043D\u0438\u0437\u0430\u0446\u0438\u044E \u043D\u0430 \u0432\u0441\u0435\u0445 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430\u0445.", "A lost master password cannot be recovered. Use a strong passphrase and verify that sync completes on all devices.")
    ]);
    const notice = makeEl("p", "vkp-help-warning", t(
      "\u041F\u043B\u0430\u0433\u0438\u043D \u043D\u0435 \u043F\u0440\u043E\u0445\u043E\u0434\u0438\u043B \u043D\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043C\u044B\u0439 \u0430\u0443\u0434\u0438\u0442 \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u0438. \u041E\u043D \u0437\u0430\u0449\u0438\u0449\u0430\u0435\u0442 \u0444\u0430\u0439\u043B vault \u0432 \u0437\u0430\u043A\u0440\u044B\u0442\u043E\u043C \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0438, \u043D\u043E \u043D\u0435 \u0437\u0430\u0449\u0438\u0449\u0430\u0435\u0442 \u043E\u0442 \u0432\u0440\u0435\u0434\u043E\u043D\u043E\u0441\u043D\u044B\u0445 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C \u043D\u0430 \u0440\u0430\u0437\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u043E\u043C \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0435.",
      "This plugin has not been independently security-audited. It protects the vault file at rest, but cannot protect against malware on an unlocked device."
    ));
    this.contentEl.appendChild(notice);
    makeButton(this.contentEl, t("\u0417\u0430\u043A\u0440\u044B\u0442\u044C", "Close"), () => this.close(), "mod-cta");
  }
};
var PasswordBoardView = class extends ItemView {
  constructor(leaf, plugin) {
    super(leaf);
    this.plugin = plugin;
    this.query = "";
    this.categoryFilter = "";
    this.expandedEntryId = null;
    this.revealedPasswords = /* @__PURE__ */ new Set();
    this.columnSortable = null;
    this.cardSortables = /* @__PURE__ */ new Map();
    this.gateMode = this.plugin.pendingGateMode || null;
  }
  getViewType() {
    return VIEW_TYPE;
  }
  getDisplayText() {
    return "Password Kanban";
  }
  getIcon() {
    return "key-round";
  }
  onOpen() {
    this.containerEl.classList.add("vkp-view-container");
    this.contentEl.classList.add("vkp-view-content");
    this.plugin.boardView = this;
    this.render();
  }
  onClose() {
    this.columnSortable?.destroy();
    this.columnSortable = null;
    this.destroyCardSortables();
    this.contentEl.replaceChildren();
    this.expandedEntryId = null;
    this.revealedPasswords.clear();
    if (this.plugin.boardView === this) this.plugin.boardView = null;
  }
  async commitAndRender() {
    const saved = await this.plugin.saveAndNotify();
    if (saved && this.plugin.db) {
      if (this.columnsEl?.isConnected) this.renderColumns();
      else this.render();
    }
  }
  render() {
    this.columnSortable?.destroy();
    this.columnSortable = null;
    this.destroyCardSortables();
    this.contentEl.replaceChildren();
    if (!this.plugin.db || !this.plugin.key) {
      this.renderGate();
      return;
    }
    this.gateMode = null;
    const board = makeEl("div", "vkp-kanban");
    const toolbar = makeEl("div", "vkp-toolbar");
    const search = makeEl("input", "vkp-input vkp-search");
    search.placeholder = t("\u041F\u043E\u0438\u0441\u043A \u043F\u043E \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u044E, \u043B\u043E\u0433\u0438\u043D\u0443, \u0441\u0430\u0439\u0442\u0443 \u0438 \u043F\u043E\u043B\u044F\u043C\u2026", "Search titles, usernames, websites, and fields\u2026");
    search.value = this.query;
    const filter = makeEl("select", "vkp-input vkp-filter");
    const all = makeEl("option", "", t("\u0412\u0441\u0435 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438", "All categories"));
    all.value = "";
    filter.appendChild(all);
    for (const category of this.plugin.db.categories) {
      const option = makeEl("option", "", category.name);
      option.value = category.id;
      filter.appendChild(option);
    }
    filter.value = this.categoryFilter;
    search.addEventListener("input", () => {
      this.query = search.value;
      this.renderColumns();
    });
    filter.addEventListener("change", () => {
      this.categoryFilter = filter.value;
      this.renderColumns();
    });
    toolbar.append(search, filter);
    makeButton(toolbar, t("+ \u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F", "+ Category"), () => this.addCategory(), "vkp-toolbar-button mod-cta");
    makeButton(toolbar, t("\u0412\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u043A\u043E\u043F\u0438\u044E", "Restore copy"), () => this.plugin.openConflictRecovery(), "vkp-toolbar-button");
    makeButton(
      toolbar,
      this.plugin.editingMode ? t("\u041E\u0431\u044B\u0447\u043D\u044B\u0439 \u0440\u0435\u0436\u0438\u043C", "Normal mode") : t("\u0420\u0435\u0436\u0438\u043C \u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F", "Editing mode"),
      () => this.plugin.toggleEditingMode(),
      "vkp-toolbar-button"
    );
    let pointerLockFallback = null;
    const lockButton = makeButton(toolbar, t("\u0417\u0430\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u0442\u044C", "Lock"), () => {
      if (pointerLockFallback !== null) window.clearTimeout(pointerLockFallback);
      pointerLockFallback = null;
      this.plugin.lock(true);
    }, "vkp-toolbar-button");
    lockButton.addEventListener("pointerup", (event) => {
      if (event.button !== 0) return;
      if (pointerLockFallback !== null) window.clearTimeout(pointerLockFallback);
      pointerLockFallback = window.setTimeout(() => {
        pointerLockFallback = null;
        if (this.plugin.db && this.plugin.key) this.plugin.lock(true);
      }, 0);
    });
    makeIconButton(toolbar, "circle-help", t("\u0421\u043F\u0440\u0430\u0432\u043A\u0430 Password Kanban", "Password Kanban help"), () => this.plugin.openHelp(), "vkp-toolbar-help");
    board.appendChild(toolbar);
    this.columnsEl = makeEl("div", "vkp-columns");
    board.appendChild(this.columnsEl);
    this.contentEl.appendChild(board);
    this.renderColumns();
    this.columnSortable = Sortable.create(this.columnsEl, {
      animation: 220,
      draggable: ".vkp-lane-wrapper[data-category-id]",
      handle: ".vkp-lane-grip",
      direction: "horizontal",
      forceFallback: true,
      fallbackOnBody: true,
      fallbackTolerance: 4,
      fallbackClass: "vkp-lane-sort-fallback",
      ghostClass: "vkp-lane-sort-ghost",
      chosenClass: "vkp-sort-chosen",
      dragClass: "vkp-sort-drag",
      onMove: (event) => event.related?.parentElement === this.columnsEl,
      onEnd: () => {
        this.normalizeColumnOrder();
        this.persistCategoryOrder();
      }
    });
  }
  renderGate() {
    const isSetup = this.gateMode === "setup";
    const locked = makeEl("div", "vkp-locked");
    locked.appendChild(makeEl("h2", "", isSetup ? t("\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0437\u0430\u0448\u0438\u0444\u0440\u043E\u0432\u0430\u043D\u043D\u043E\u0435 \u0445\u0440\u0430\u043D\u0438\u043B\u0438\u0449\u0435", "Create encrypted vault") : t("Password Kanban \u0437\u0430\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u043D", "Password Kanban is locked")));
    locked.appendChild(makeEl("p", "vkp-muted", isSetup ? t("\u0417\u0430\u0434\u0430\u0439\u0442\u0435 \u043C\u0430\u0441\u0442\u0435\u0440-\u043F\u0430\u0440\u043E\u043B\u044C. \u041E\u043D \u043D\u0435 \u0441\u043E\u0445\u0440\u0430\u043D\u044F\u0435\u0442\u0441\u044F \u0432 vault, \u0438 \u0432\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u0435\u0433\u043E \u043D\u0435\u043B\u044C\u0437\u044F.", "Set a master password. It is never stored in the vault and cannot be recovered.") : t("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043C\u0430\u0441\u0442\u0435\u0440-\u043F\u0430\u0440\u043E\u043B\u044C, \u0447\u0442\u043E\u0431\u044B \u0440\u0430\u0437\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0445\u0440\u0430\u043D\u0438\u043B\u0438\u0449\u0435.", "Enter your master password to unlock the vault.")));
    const form = makeEl("div", `vkp-locked-form${isSetup ? " vkp-setup-form" : ""}`);
    const password = makeEl("input", "vkp-input");
    password.type = "password";
    password.autocomplete = isSetup ? "new-password" : "current-password";
    password.autocapitalize = "off";
    password.spellcheck = false;
    password.placeholder = isSetup ? t("\u041C\u0430\u0441\u0442\u0435\u0440-\u043F\u0430\u0440\u043E\u043B\u044C (\u043D\u0435 \u043C\u0435\u043D\u0435\u0435 12 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432)", "Master password (at least 12 characters)") : t("\u041C\u0430\u0441\u0442\u0435\u0440-\u043F\u0430\u0440\u043E\u043B\u044C", "Master password");
    form.appendChild(password);
    let confirm = null;
    if (isSetup) {
      confirm = makeEl("input", "vkp-input");
      confirm.type = "password";
      confirm.autocomplete = "new-password";
      confirm.autocapitalize = "off";
      confirm.spellcheck = false;
      confirm.placeholder = t("\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0435 \u043C\u0430\u0441\u0442\u0435\u0440-\u043F\u0430\u0440\u043E\u043B\u044C", "Confirm master password");
      form.appendChild(confirm);
    }
    const error = makeEl("div", "vkp-error");
    let submitButton;
    const submit = async () => {
      error.textContent = "";
      if (isSetup && password.value.length < 12) {
        error.textContent = t(
          "\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u043C\u0430\u0441\u0442\u0435\u0440-\u043F\u0430\u0440\u043E\u043B\u044C \u0434\u043B\u0438\u043D\u043E\u0439 \u043D\u0435 \u043C\u0435\u043D\u0435\u0435 12 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432.",
          "Use a master password with at least 12 characters."
        );
        password.focus();
        return;
      }
      if (isSetup && password.value !== confirm.value) {
        error.textContent = t("\u041F\u0430\u0440\u043E\u043B\u0438 \u043D\u0435 \u0441\u043E\u0432\u043F\u0430\u0434\u0430\u044E\u0442.", "Passwords do not match.");
        confirm.select();
        return;
      }
      submitButton.disabled = true;
      try {
        if (isSetup) await this.plugin.createVault(password.value);
        else await this.plugin.unlockVault(password.value);
        this.gateMode = null;
        await this.plugin.openBoard();
      } catch (e) {
        error.textContent = isSetup ? e.message || t("\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0441\u043E\u0437\u0434\u0430\u0442\u044C \u0445\u0440\u0430\u043D\u0438\u043B\u0438\u0449\u0435.", "Could not create the vault.") : t(
          "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043E\u0442\u043A\u0440\u044B\u0442\u044C \u0431\u0430\u0437\u0443. \u041F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u043C\u0430\u0441\u0442\u0435\u0440-\u043F\u0430\u0440\u043E\u043B\u044C \u0438\u043B\u0438 \u0446\u0435\u043B\u043E\u0441\u0442\u043D\u043E\u0441\u0442\u044C \u0444\u0430\u0439\u043B\u0430.",
          "Could not open the database. Check the master password or file integrity."
        );
        password.select();
      } finally {
        if (submitButton.isConnected) submitButton.disabled = false;
      }
    };
    const submitOnEnter = (event) => {
      if (event.key !== "Enter") return;
      event.preventDefault();
      void submit();
    };
    password.addEventListener("keydown", submitOnEnter);
    confirm?.addEventListener("keydown", submitOnEnter);
    submitButton = makeButton(
      form,
      isSetup ? t("\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0445\u0440\u0430\u043D\u0438\u043B\u0438\u0449\u0435", "Create vault") : t("\u0420\u0430\u0437\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u0442\u044C", "Unlock"),
      () => void submit(),
      "mod-cta"
    );
    locked.append(form, error);
    this.contentEl.appendChild(locked);
  }
  renderColumns() {
    if (!this.columnsEl || !this.plugin.db) return;
    this.destroyCardSortables();
    const columnsScrollLeft = this.columnsEl.scrollLeft;
    const laneScrollTops = /* @__PURE__ */ new Map();
    for (const lane of this.columnsEl.querySelectorAll(".vkp-lane")) {
      const items = lane.querySelector(".vkp-lane-items");
      if (items) laneScrollTops.set(lane.dataset.categoryId, items.scrollTop);
    }
    this.columnsEl.replaceChildren();
    const categories = this.plugin.db.categories.filter((item) => !this.categoryFilter || item.id === this.categoryFilter);
    for (const category of categories) {
      const wrapper = makeEl("div", "vkp-lane-wrapper");
      wrapper.dataset.categoryId = category.id;
      const column = makeEl("section", "vkp-lane");
      column.dataset.categoryId = category.id;
      const header = makeEl("div", "vkp-lane-header");
      const titleWrap = makeEl("div", "vkp-lane-title");
      const title = makeEl("div", "vkp-lane-title-text", category.name);
      const entries = this.plugin.db.entries.filter((entry) => {
        if (entry.categoryId !== category.id) return false;
        if (!this.query) return true;
        const haystack = [entry.title, ...entry.fields.flatMap((field) => [field.label, field.value])].join(" ").toLocaleLowerCase();
        return haystack.includes(this.query.toLocaleLowerCase());
      });
      const count = makeEl("span", "vkp-lane-count", String(entries.length));
      makeIconButton(
        titleWrap,
        "grip-vertical",
        t("\u041F\u0435\u0440\u0435\u0442\u0430\u0449\u0438\u0442\u044C \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044E", "Drag category"),
        () => {
        },
        "vkp-icon-button vkp-lane-grip"
      );
      titleWrap.append(title, count);
      const controls = makeEl("div", "vkp-lane-controls");
      makeIconButton(controls, "pencil", t("\u041F\u0435\u0440\u0435\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u0442\u044C \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044E", "Rename category"), () => this.renameCategory(category), "vkp-icon-button");
      makeIconButton(controls, "trash-2", t("\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044E", "Delete category"), () => this.deleteCategory(category), "vkp-icon-button vkp-danger");
      header.append(titleWrap, controls);
      column.appendChild(header);
      const items = makeEl("div", "vkp-lane-items");
      items.dataset.categoryId = category.id;
      for (const entry of entries) items.appendChild(this.renderEntry(entry));
      column.appendChild(items);
      const add = makeEl("div", "vkp-lane-add");
      makeButton(add, t("+ \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0430\u043A\u043A\u0430\u0443\u043D\u0442", "+ Add account"), () => this.addEntry(category.id), "vkp-new-card-button");
      column.appendChild(add);
      wrapper.appendChild(column);
      this.columnsEl.appendChild(wrapper);
    }
    if (!categories.length) this.columnsEl.appendChild(makeEl("p", "vkp-muted", t("\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0439 \u043F\u043E\u043A\u0430 \u043D\u0435\u0442. \u0414\u043E\u0431\u0430\u0432\u044C\u0442\u0435 \u043F\u0435\u0440\u0432\u0443\u044E \u043A\u043D\u043E\u043F\u043A\u043E\u0439 \xAB\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F\xBB.", "No categories yet. Add one with the \u201CCategory\u201D button.")));
    const addLane = makeEl("div", "vkp-lane-wrapper vkp-add-lane-wrapper");
    const addLaneButton = makeButton(addLane, t("+ \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044E", "+ Add category"), () => this.addCategory(), "vkp-new-card-button");
    addLaneButton.classList.add("vkp-add-lane");
    this.columnsEl.appendChild(addLane);
    this.columnsEl.scrollLeft = columnsScrollLeft;
    for (const lane of this.columnsEl.querySelectorAll(".vkp-lane")) {
      const items = lane.querySelector(".vkp-lane-items");
      const scrollTop = laneScrollTops.get(lane.dataset.categoryId);
      if (items && scrollTop !== void 0) items.scrollTop = scrollTop;
    }
    this.createCardSortables();
  }
  destroyCardSortables() {
    for (const sortable of this.cardSortables.values()) sortable.destroy();
    this.cardSortables.clear();
  }
  createCardSortables() {
    for (const items of this.columnsEl.querySelectorAll(".vkp-lane-items")) {
      const categoryId = items.dataset.categoryId;
      const sortable = Sortable.create(items, {
        group: { name: "password-kanban-cards", pull: true, put: true },
        animation: 180,
        draggable: ".vkp-card",
        handle: ".vkp-card-grip",
        direction: "vertical",
        forceFallback: true,
        fallbackOnBody: true,
        fallbackTolerance: 4,
        fallbackClass: "vkp-card-sort-fallback",
        ghostClass: "vkp-card-sort-ghost",
        chosenClass: "vkp-sort-chosen",
        dragClass: "vkp-sort-drag",
        disabled: Boolean(this.query),
        onEnd: (event) => this.persistCardOrder(event)
      });
      this.cardSortables.set(categoryId, sortable);
    }
  }
  persistCardOrder(event) {
    const database = this.plugin.db;
    if (!database || !this.columnsEl) return;
    const previousEntries = database.entries.slice();
    const oldCategoryById = new Map(previousEntries.map((entry) => [entry.id, entry.categoryId]));
    const positionsByCategory = /* @__PURE__ */ new Map();
    previousEntries.forEach((entry, index) => {
      const categoryId = oldCategoryById.get(entry.id);
      if (!positionsByCategory.has(categoryId)) positionsByCategory.set(categoryId, []);
      positionsByCategory.get(categoryId).push(index);
    });
    const entryById = new Map(previousEntries.map((entry) => [entry.id, entry]));
    const orderedByCategory = /* @__PURE__ */ new Map();
    const visibleCategoryIds = /* @__PURE__ */ new Set();
    for (const items of this.columnsEl.querySelectorAll(".vkp-lane-items")) {
      const categoryId = items.dataset.categoryId;
      visibleCategoryIds.add(categoryId);
      const orderedEntries = [...items.children].filter((card) => card.matches(".vkp-card[data-entry-id]")).map((card) => entryById.get(card.dataset.entryId)).filter(Boolean);
      for (const entry of orderedEntries) entry.categoryId = categoryId;
      orderedByCategory.set(categoryId, orderedEntries);
      const count = items.closest(".vkp-lane")?.querySelector(".vkp-lane-count");
      if (count) count.textContent = String(orderedEntries.length);
    }
    for (const category of database.categories) {
      if (visibleCategoryIds.has(category.id)) continue;
      orderedByCategory.set(
        category.id,
        previousEntries.filter((entry) => oldCategoryById.get(entry.id) === category.id)
      );
    }
    const hasChanges = database.categories.some((category) => {
      const before = previousEntries.filter((entry) => oldCategoryById.get(entry.id) === category.id).map((entry) => entry.id);
      const after = (orderedByCategory.get(category.id) || []).map((entry) => entry.id);
      return before.length !== after.length || before.some((id, index) => id !== after[index]);
    });
    if (!hasChanges) return;
    const movedEntry = entryById.get(event.item?.dataset.entryId);
    if (movedEntry) movedEntry.updatedAt = Date.now();
    const orderedSlots = Array(previousEntries.length).fill(null);
    const appendedEntries = [];
    for (const category of database.categories) {
      const orderedEntries = orderedByCategory.get(category.id) || [];
      const slots = positionsByCategory.get(category.id) || [];
      const retainedCount = Math.min(orderedEntries.length, slots.length);
      for (let index = 0; index < retainedCount; index++) {
        orderedSlots[slots[index]] = orderedEntries[index];
      }
      appendedEntries.push(...orderedEntries.slice(retainedCount));
    }
    database.entries = [...orderedSlots.filter(Boolean), ...appendedEntries];
    void this.plugin.saveAndNotify();
  }
  persistCategoryOrder() {
    if (!this.plugin.db || !this.columnsEl) return;
    const previousCategories = this.plugin.db.categories.slice();
    const visibleIds = [...this.columnsEl.children].filter((child) => child.matches(".vkp-lane-wrapper[data-category-id]")).map((child) => child.dataset.categoryId);
    const visibleSet = new Set(visibleIds);
    const visibleCategories = visibleIds.map((id) => previousCategories.find((item) => item.id === id));
    if (visibleCategories.some((item) => !item)) return;
    let visibleIndex = 0;
    const nextCategories = previousCategories.map((item) => visibleSet.has(item.id) ? visibleCategories[visibleIndex++] : item);
    if (nextCategories.every((item, index) => item.id === previousCategories[index].id)) return;
    this.plugin.db.categories = nextCategories;
    void this.plugin.saveAndNotify();
  }
  normalizeColumnOrder() {
    if (!this.columnsEl) return;
    const addLane = this.columnsEl.querySelector(".vkp-add-lane-wrapper");
    for (const wrapper of this.columnsEl.querySelectorAll(".vkp-lane-wrapper[data-category-id]")) {
      this.columnsEl.insertBefore(wrapper, addLane);
    }
  }
  renderEntry(entry) {
    const card = makeEl("article", `vkp-card${this.expandedEntryId === entry.id ? " is-expanded" : ""}`);
    card.dataset.entryId = entry.id;
    const heading = makeEl("div", "vkp-card-heading");
    const name = makeEl("button", "vkp-card-title", entry.title);
    name.addEventListener("click", () => {
      this.revealedPasswords.clear();
      this.expandedEntryId = this.expandedEntryId === entry.id ? null : entry.id;
      this.renderColumns();
    });
    const titleWrap = makeEl("div", "vkp-card-title-wrap");
    const cardGrip = makeIconButton(
      titleWrap,
      "grip-vertical",
      this.query ? t("\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u0435 \u043F\u043E\u0438\u0441\u043A, \u0447\u0442\u043E\u0431\u044B \u043C\u0435\u043D\u044F\u0442\u044C \u043F\u043E\u0440\u044F\u0434\u043E\u043A \u043A\u0430\u0440\u0442\u043E\u0447\u0435\u043A", "Clear search to reorder cards") : t("\u041F\u0435\u0440\u0435\u0442\u0430\u0449\u0438\u0442\u044C \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0443", "Drag card"),
      () => {
      },
      "vkp-icon-button vkp-card-grip"
    );
    cardGrip.disabled = Boolean(this.query);
    if (this.query) cardGrip.classList.add("is-sort-disabled");
    titleWrap.appendChild(name);
    const actions = makeEl("div", "vkp-card-actions");
    makeIconButton(actions, "pencil", t("\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0443", "Edit card"), () => this.editEntry(entry), "vkp-icon-button");
    makeIconButton(actions, "trash-2", t("\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0443", "Delete card"), () => this.deleteEntry(entry), "vkp-icon-button vkp-danger");
    heading.append(titleWrap, actions);
    card.appendChild(heading);
    if (this.expandedEntryId === entry.id) {
      const details = makeEl("div", "vkp-details");
      for (const field of entry.fields) {
        const row = makeEl("div", "vkp-detail-row");
        const label = makeEl("div", "vkp-detail-label", field.label);
        const isPassword = isPasswordField(field);
        const revealKey = `${entry.id}:${field.id}`;
        const isRevealed = isPassword && this.revealedPasswords.has(revealKey);
        const valueText = field.value || "\u2014";
        const value = makeEl("div", "vkp-detail-value", isPassword && field.value && !isRevealed ? "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022" : valueText);
        row.append(label, value);
        if (isPassword) {
          makeIconButton(
            row,
            isRevealed ? "eye-off" : "eye",
            isRevealed ? t("\u0421\u043A\u0440\u044B\u0442\u044C \u043F\u0430\u0440\u043E\u043B\u044C", "Hide password") : t("\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u043F\u0430\u0440\u043E\u043B\u044C", "Show password"),
            () => {
              if (isRevealed) this.revealedPasswords.delete(revealKey);
              else this.revealedPasswords.add(revealKey);
              this.renderColumns();
            },
            "vkp-reveal"
          );
        } else {
          row.appendChild(makeEl("span", "vkp-reveal-placeholder"));
        }
        makeIconButton(row, "copy", t("\u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C: {label}", "Copy: {label}", { label: field.label }), () => this.plugin.copyToClipboard(field.value, field.label), "vkp-copy");
        details.appendChild(row);
      }
      card.appendChild(details);
    }
    return card;
  }
  async addCategory() {
    new TextPromptModal(this.app, t("\u041D\u043E\u0432\u0430\u044F \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F", "New category"), "", async (name) => {
      this.plugin.db.categories.push({ id: crypto.randomUUID(), name });
      await this.commitAndRender();
    }).open();
  }
  async renameCategory(category) {
    new TextPromptModal(this.app, t("\u041F\u0435\u0440\u0435\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u0442\u044C \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044E", "Rename category"), category.name, async (name) => {
      category.name = name;
      await this.commitAndRender();
    }).open();
  }
  async deleteCategory(category) {
    if (this.plugin.db.entries.some((entry) => entry.categoryId === category.id)) {
      new Notice(t("\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u043F\u0435\u0440\u0435\u043C\u0435\u0441\u0442\u0438\u0442\u0435 \u0438\u043B\u0438 \u0443\u0434\u0430\u043B\u0438\u0442\u0435 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438 \u0438\u0437 \u044D\u0442\u043E\u0439 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438.", "Move or delete this category's cards first."));
      return;
    }
    this.plugin.db.categories = this.plugin.db.categories.filter((item) => item.id !== category.id);
    await this.commitAndRender();
  }
  addEntry(categoryId) {
    new EntryEditorModal(this.app, this.plugin, null, categoryId, async (entry) => {
      this.plugin.db.entries.push(entry);
      await this.commitAndRender();
    }).open();
  }
  editEntry(entry) {
    new EntryEditorModal(this.app, this.plugin, entry, entry.categoryId, async (updated) => {
      const index = this.plugin.db.entries.findIndex((item) => item.id === entry.id);
      if (index >= 0) this.plugin.db.entries[index] = updated;
      this.expandedEntryId = updated.id;
      this.revealedPasswords.clear();
      await this.commitAndRender();
    }).open();
  }
  async deleteEntry(entry) {
    new ConfirmModal(this.app, t("\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0443 \xAB{title}\xBB?", "Delete card \u201C{title}\u201D?", { title: entry.title }), async () => {
      this.plugin.db.entries = this.plugin.db.entries.filter((item) => item.id !== entry.id);
      if (this.expandedEntryId === entry.id) this.expandedEntryId = null;
      await this.commitAndRender();
    }).open();
  }
};
var ConfirmModal = class extends Modal {
  constructor(app, message, onConfirm) {
    super(app);
    this.message = message;
    this.onConfirm = onConfirm;
  }
  onOpen() {
    this.modalEl.classList.add("vkp-shell");
    this.contentEl.replaceChildren();
    this.contentEl.appendChild(makeEl("p", "", this.message));
    makeButton(this.contentEl, t("\u0423\u0434\u0430\u043B\u0438\u0442\u044C", "Delete"), async () => {
      await this.onConfirm();
      this.close();
    }, "mod-warning");
    makeButton(this.contentEl, t("\u041E\u0442\u043C\u0435\u043D\u0430", "Cancel"), () => this.close(), "vkp-secondary");
  }
};
module.exports = PasswordKanbanPlugin;
/*! Bundled license information:

sortablejs/Sortable.min.js:
  (*! Sortable 1.15.7 - MIT | git://github.com/SortableJS/Sortable.git *)
*/
