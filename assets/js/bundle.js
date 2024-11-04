(() => {
    var t = {
            887: function(t) {
                t.exports = function() {
                    "use strict";
                    var t = { grid: 0, filterTarget: null, limit: { x: null, y: null }, threshold: 0, setCursor: !1, setPosition: !0, smoothDrag: !0, useGPU: !0, onDrag: u, onDragStart: u, onDragEnd: u },
                        e = { transform: function() { for (var t = " -o- -ms- -moz- -webkit-".split(" "), e = document.body.style, n = t.length; n--;) { var o = t[n] + "transform"; if (o in e) return o } }() },
                        n = {
                            assign: function() { for (var t = arguments[0], e = arguments.length, n = 1; n < e; n++) { var o = arguments[n]; for (var r in o) t[r] = o[r] } return t },
                            bind: function(t, e) { return function() { t.apply(e, arguments) } },
                            on: function(t, e, o) {
                                if (e && o) n.addEvent(t, e, o);
                                else if (e)
                                    for (var r in e) n.addEvent(t, r, e[r])
                            },
                            off: function(t, e, o) {
                                if (e && o) n.removeEvent(t, e, o);
                                else if (e)
                                    for (var r in e) n.removeEvent(t, r, e[r])
                            },
                            limit: function(t, e) { return e instanceof Array ? t < (e = [+e[0], +e[1]])[0] ? t = e[0] : t > e[1] && (t = e[1]) : t = +e, t },
                            addEvent: "attachEvent" in Element.prototype ? function(t, e, n) { t.attachEvent("on" + e, n) } : function(t, e, n) { t.addEventListener(e, n, !1) },
                            removeEvent: "attachEvent" in Element.prototype ? function(t, e, n) { t.detachEvent("on" + e, n) } : function(t, e, n) { t.removeEventListener(e, n) }
                        };

                    function o(e, o) {
                        var r = this,
                            i = n.bind(r.start, r),
                            s = n.bind(r.drag, r),
                            u = n.bind(r.stop, r);
                        if (!a(e)) throw new TypeError("Draggable expects argument 0 to be an Element");
                        o = n.assign({}, t, o), n.assign(r, { element: e, handle: o.handle && a(o.handle) ? o.handle : e, handlers: { start: { mousedown: i, touchstart: i }, move: { mousemove: s, mouseup: u, touchmove: s, touchend: u } }, options: o }), r.initialize()
                    }

                    function r(t) { return parseInt(t, 10) }

                    function i(t) { return "currentStyle" in t ? t.currentStyle : getComputedStyle(t) }

                    function s(t) { return null != t }

                    function a(t) { return t instanceof Element || "undefined" != typeof HTMLDocument && t instanceof HTMLDocument }

                    function u() {}
                    return n.assign(o.prototype, {
                        setOption: function(t, e) { var n = this; return n.options[t] = e, n.initialize(), n },
                        get: function() { var t = this.dragEvent; return { x: t.x, y: t.y } },
                        set: function(t, e) { var n = this.dragEvent; return n.original = { x: n.x, y: n.y }, this.move(t, e), this },
                        dragEvent: { started: !1, x: 0, y: 0 },
                        initialize: function() {
                            var t, o = this,
                                r = o.element,
                                s = (o.handle, r.style),
                                a = i(r),
                                u = o.options,
                                l = e.transform,
                                f = o._dimensions = { height: r.offsetHeight, left: r.offsetLeft, top: r.offsetTop, width: r.offsetWidth };
                            u.useGPU && l && ("none" === (t = a[l]) && (t = ""), s[l] = t + " translate3d(0,0,0)"), u.setPosition && (s.display = "block", s.left = f.left + "px", s.top = f.top + "px", s.width = f.width + "px", s.height = f.height + "px", s.bottom = s.right = "auto", s.margin = 0, s.position = "absolute"), u.setCursor && (s.cursor = "move"), o.setLimit(u.limit), n.assign(o.dragEvent, { x: f.left, y: f.top }), n.on(o.handle, o.handlers.start)
                        },
                        start: function(t) {
                            var e = this,
                                o = e.getCursor(t),
                                r = e.element;
                            e.useTarget(t.target || t.srcElement) && (t.preventDefault && !t.target.getAttribute("contenteditable") ? t.preventDefault() : t.target.getAttribute("contenteditable") || (t.returnValue = !1), e.dragEvent.oldZindex = r.style.zIndex, r.style.zIndex = 1e4, e.setCursor(o), e.setPosition(), e.setZoom(), n.on(document, e.handlers.move))
                        },
                        drag: function(t) {
                            var e = this,
                                n = e.dragEvent,
                                o = e.element,
                                r = e._cursor,
                                i = e._dimensions,
                                s = e.options,
                                a = i.zoom,
                                u = e.getCursor(t),
                                l = s.threshold,
                                f = (u.x - r.x) / a + i.left,
                                d = (u.y - r.y) / a + i.top;
                            !n.started && l && Math.abs(r.x - u.x) < l && Math.abs(r.y - u.y) < l || (n.original || (n.original = { x: f, y: d }), n.started || (s.onDragStart(o, f, d, t), n.started = !0), e.move(f, d) && s.onDrag(o, n.x, n.y, t))
                        },
                        move: function(t, e) {
                            var n = this,
                                o = n.dragEvent,
                                r = n.options,
                                i = r.grid,
                                s = n.element.style,
                                a = n.limit(t, e, o.original.x, o.original.y);
                            return !r.smoothDrag && i && (a = n.round(a, i)), (a.x !== o.x || a.y !== o.y) && (o.x = a.x, o.y = a.y, s.left = a.x + "px", s.top = a.y + "px", !0)
                        },
                        stop: function(t) {
                            var e, o = this,
                                r = o.dragEvent,
                                i = o.element,
                                s = o.options,
                                a = s.grid;
                            n.off(document, o.handlers.move), i.style.zIndex = r.oldZindex, s.smoothDrag && a && (e = o.round({ x: r.x, y: r.y }, a), o.move(e.x, e.y), n.assign(o.dragEvent, e)), o.dragEvent.started && s.onDragEnd(i, r.x, r.y, t), o.reset()
                        },
                        reset: function() { this.dragEvent.started = !1 },
                        round: function(t) { var e = this.options.grid; return { x: e * Math.round(t.x / e), y: e * Math.round(t.y / e) } },
                        getCursor: function(t) { return { x: (t.targetTouches ? t.targetTouches[0] : t).clientX, y: (t.targetTouches ? t.targetTouches[0] : t).clientY } },
                        setCursor: function(t) { this._cursor = t },
                        setLimit: function(t) {
                            var e = this,
                                o = function(t, e) { return { x: t, y: e } };
                            if (t instanceof Function) e.limit = t;
                            else if (a(t)) {
                                var r = e._dimensions,
                                    i = t.scrollHeight - r.height,
                                    u = t.scrollWidth - r.width;
                                e.limit = function(t, e) { return { x: n.limit(t, [0, u]), y: n.limit(e, [0, i]) } }
                            } else if (t) {
                                var l = s(t.x),
                                    f = s(t.y);
                                e.limit = l || f ? function(e, o) { return { x: l ? n.limit(e, t.x) : e, y: f ? n.limit(o, t.y) : o } } : o
                            } else e.limit = o
                        },
                        setPosition: function() {
                            var t = this.element,
                                e = t.style;
                            n.assign(this._dimensions, { left: r(e.left) || t.offsetLeft, top: r(e.top) || t.offsetTop })
                        },
                        setZoom: function() {
                            for (var t = this.element, e = 1; t = t.offsetParent;) { var n = i(t).zoom; if (n && "normal" !== n) { e = n; break } }
                            this._dimensions.zoom = e
                        },
                        useTarget: function(t) { var e = this.options.filterTarget; return !(e instanceof Function) || e(t) },
                        destroy: function() { n.off(this.handle, this.handlers.start), n.off(document, this.handlers.move) }
                    }), o
                }()
            }
        },
        e = {};

    function n(o) { var r = e[o]; if (void 0 !== r) return r.exports; var i = e[o] = { exports: {} }; return t[o].call(i.exports, i, i.exports, n), i.exports }
    n.n = t => { var e = t && t.__esModule ? () => t.default : () => t; return n.d(e, { a: e }), e }, n.d = (t, e) => { for (var o in e) n.o(e, o) && !n.o(t, o) && Object.defineProperty(t, o, { enumerable: !0, get: e[o] }) }, n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e), (() => {
        "use strict";
        var t = n(887),
            e = n.n(t);
        const o = document.getElementById("drag-box");
        document.getElementsByClassName("game__virus-img"), new(e())(o, {
            onDrag: () => {
                let t = 1;
                t < 10 && function e() {

                    setTimeout((() => {
                        document.getElementById(`virus-${t}`).classList.add("hide-virus"), t++, t <= 10 && e()
                            // document.getElementById(`virus-1`).classList.add("hide-virus"), t++, t <= 4 && e()
                    }), 0.5e3)
                }()
                if (t < 10) {
                    setTimeout((() => {
                        $(".result").fadeIn();
                        $(".resultOverlay").fadeIn();
                    }), 5e3)

                }
            }
        })
    })()
})();