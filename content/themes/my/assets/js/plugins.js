// if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function(a) {
//     "use strict";
//     var b = a.fn.jquery.split(" ")[0].split(".");
//     if (b[0] < 2 && b[1] < 9 || 1 == b[0] && 9 == b[1] && b[2] < 1) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")
// }(jQuery), + function(a) {
//     "use strict";

//     function b() {
//         var a = document.createElement("bootstrap"),
//             b = {
//                 WebkitTransition: "webkitTransitionEnd",
//                 MozTransition: "transitionend",
//                 OTransition: "oTransitionEnd otransitionend",
//                 transition: "transitionend"
//             };
//         for (var c in b)
//             if (void 0 !== a.style[c]) return {
//                 end: b[c]
//             };
//         return !1
//     }
//     a.fn.emulateTransitionEnd = function(b) {
//         var c = !1,
//             d = this;
//         a(this).one("bsTransitionEnd", function() {
//             c = !0
//         });
//         var e = function() {
//             c || a(d).trigger(a.support.transition.end)
//         };
//         return setTimeout(e, b), this
//     }, a(function() {
//         a.support.transition = b(), a.support.transition && (a.event.special.bsTransitionEnd = {
//             bindType: a.support.transition.end,
//             delegateType: a.support.transition.end,
//             handle: function(b) {
//                 return a(b.target).is(this) ? b.handleObj.handler.apply(this, arguments) : void 0
//             }
//         })
//     })
// }(jQuery), + function(a) {
//     "use strict";

//     function b(b) {
//         return this.each(function() {
//             var c = a(this),
//                 e = c.data("bs.alert");
//             e || c.data("bs.alert", e = new d(this)), "string" == typeof b && e[b].call(c)
//         })
//     }
//     var c = '[data-dismiss="alert"]',
//         d = function(b) {
//             a(b).on("click", c, this.close)
//         };
//     d.VERSION = "3.3.4", d.TRANSITION_DURATION = 150, d.prototype.close = function(b) {
//         function c() {
//             g.detach().trigger("closed.bs.alert").remove()
//         }
//         var e = a(this),
//             f = e.attr("data-target");
//         f || (f = e.attr("href"), f = f && f.replace(/.*(?=#[^\s]*$)/, ""));
//         var g = a(f);
//         b && b.preventDefault(), g.length || (g = e.closest(".alert")), g.trigger(b = a.Event("close.bs.alert")), b.isDefaultPrevented() || (g.removeClass("in"), a.support.transition && g.hasClass("fade") ? g.one("bsTransitionEnd", c).emulateTransitionEnd(d.TRANSITION_DURATION) : c())
//     };
//     var e = a.fn.alert;
//     a.fn.alert = b, a.fn.alert.Constructor = d, a.fn.alert.noConflict = function() {
//         return a.fn.alert = e, this
//     }, a(document).on("click.bs.alert.data-api", c, d.prototype.close)
// }(jQuery), + function(a) {
//     "use strict";

//     function b(b) {
//         return this.each(function() {
//             var d = a(this),
//                 e = d.data("bs.button"),
//                 f = "object" == typeof b && b;
//             e || d.data("bs.button", e = new c(this, f)), "toggle" == b ? e.toggle() : b && e.setState(b)
//         })
//     }
//     var c = function(b, d) {
//         this.$element = a(b), this.options = a.extend({}, c.DEFAULTS, d), this.isLoading = !1
//     };
//     c.VERSION = "3.3.4", c.DEFAULTS = {
//         loadingText: "loading..."
//     }, c.prototype.setState = function(b) {
//         var c = "disabled",
//             d = this.$element,
//             e = d.is("input") ? "val" : "html",
//             f = d.data();
//         b += "Text", null == f.resetText && d.data("resetText", d[e]()), setTimeout(a.proxy(function() {
//             d[e](null == f[b] ? this.options[b] : f[b]), "loadingText" == b ? (this.isLoading = !0, d.addClass(c).attr(c, c)) : this.isLoading && (this.isLoading = !1, d.removeClass(c).removeAttr(c))
//         }, this), 0)
//     }, c.prototype.toggle = function() {
//         var a = !0,
//             b = this.$element.closest('[data-toggle="buttons"]');
//         if (b.length) {
//             var c = this.$element.find("input");
//             "radio" == c.prop("type") && (c.prop("checked") && this.$element.hasClass("active") ? a = !1 : b.find(".active").removeClass("active")), a && c.prop("checked", !this.$element.hasClass("active")).trigger("change")
//         } else this.$element.attr("aria-pressed", !this.$element.hasClass("active"));
//         a && this.$element.toggleClass("active")
//     };
//     var d = a.fn.button;
//     a.fn.button = b, a.fn.button.Constructor = c, a.fn.button.noConflict = function() {
//         return a.fn.button = d, this
//     }, a(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(c) {
//         var d = a(c.target);
//         d.hasClass("btn") || (d = d.closest(".btn")), b.call(d, "toggle"), c.preventDefault()
//     }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(b) {
//         a(b.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(b.type))
//     })
// }(jQuery), + function(a) {
//     "use strict";

//     function b(b) {
//         return this.each(function() {
//             var d = a(this),
//                 e = d.data("bs.carousel"),
//                 f = a.extend({}, c.DEFAULTS, d.data(), "object" == typeof b && b),
//                 g = "string" == typeof b ? b : f.slide;
//             e || d.data("bs.carousel", e = new c(this, f)), "number" == typeof b ? e.to(b) : g ? e[g]() : f.interval && e.pause().cycle()
//         })
//     }
//     var c = function(b, c) {
//         this.$element = a(b), this.$indicators = this.$element.find(".carousel-indicators"), this.options = c, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", a.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", a.proxy(this.pause, this)).on("mouseleave.bs.carousel", a.proxy(this.cycle, this))
//     };
//     c.VERSION = "3.3.4", c.TRANSITION_DURATION = 600, c.DEFAULTS = {
//         interval: 5e3,
//         pause: "hover",
//         wrap: !0,
//         keyboard: !0
//     }, c.prototype.keydown = function(a) {
//         if (!/input|textarea/i.test(a.target.tagName)) {
//             switch (a.which) {
//                 case 37:
//                     this.prev();
//                     break;
//                 case 39:
//                     this.next();
//                     break;
//                 default:
//                     return
//             }
//             a.preventDefault()
//         }
//     }, c.prototype.cycle = function(b) {
//         return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this
//     }, c.prototype.getItemIndex = function(a) {
//         return this.$items = a.parent().children(".item"), this.$items.index(a || this.$active)
//     }, c.prototype.getItemForDirection = function(a, b) {
//         var c = this.getItemIndex(b),
//             d = "prev" == a && 0 === c || "next" == a && c == this.$items.length - 1;
//         if (d && !this.options.wrap) return b;
//         var e = "prev" == a ? -1 : 1,
//             f = (c + e) % this.$items.length;
//         return this.$items.eq(f)
//     }, c.prototype.to = function(a) {
//         var b = this,
//             c = this.getItemIndex(this.$active = this.$element.find(".item.active"));
//         return a > this.$items.length - 1 || 0 > a ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() {
//             b.to(a)
//         }) : c == a ? this.pause().cycle() : this.slide(a > c ? "next" : "prev", this.$items.eq(a))
//     }, c.prototype.pause = function(b) {
//         return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition && (this.$element.trigger(a.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
//     }, c.prototype.next = function() {
//         return this.sliding ? void 0 : this.slide("next")
//     }, c.prototype.prev = function() {
//         return this.sliding ? void 0 : this.slide("prev")
//     }, c.prototype.slide = function(b, d) {
//         var e = this.$element.find(".item.active"),
//             f = d || this.getItemForDirection(b, e),
//             g = this.interval,
//             h = "next" == b ? "left" : "right",
//             i = this;
//         if (f.hasClass("active")) return this.sliding = !1;
//         var j = f[0],
//             k = a.Event("slide.bs.carousel", {
//                 relatedTarget: j,
//                 direction: h
//             });
//         if (this.$element.trigger(k), !k.isDefaultPrevented()) {
//             if (this.sliding = !0, g && this.pause(), this.$indicators.length) {
//                 this.$indicators.find(".active").removeClass("active");
//                 var l = a(this.$indicators.children()[this.getItemIndex(f)]);
//                 l && l.addClass("active")
//             }
//             var m = a.Event("slid.bs.carousel", {
//                 relatedTarget: j,
//                 direction: h
//             });
//             return a.support.transition && this.$element.hasClass("slide") ? (f.addClass(b), f[0].offsetWidth, e.addClass(h), f.addClass(h), e.one("bsTransitionEnd", function() {
//                 f.removeClass([b, h].join(" ")).addClass("active"), e.removeClass(["active", h].join(" ")), i.sliding = !1, setTimeout(function() {
//                     i.$element.trigger(m)
//                 }, 0)
//             }).emulateTransitionEnd(c.TRANSITION_DURATION)) : (e.removeClass("active"), f.addClass("active"), this.sliding = !1, this.$element.trigger(m)), g && this.cycle(), this
//         }
//     };
//     var d = a.fn.carousel;
//     a.fn.carousel = b, a.fn.carousel.Constructor = c, a.fn.carousel.noConflict = function() {
//         return a.fn.carousel = d, this
//     };
//     var e = function(c) {
//         var d, e = a(this),
//             f = a(e.attr("data-target") || (d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""));
//         if (f.hasClass("carousel")) {
//             var g = a.extend({}, f.data(), e.data()),
//                 h = e.attr("data-slide-to");
//             h && (g.interval = !1), b.call(f, g), h && f.data("bs.carousel").to(h), c.preventDefault()
//         }
//     };
//     a(document).on("click.bs.carousel.data-api", "[data-slide]", e).on("click.bs.carousel.data-api", "[data-slide-to]", e), a(window).on("load", function() {
//         a('[data-ride="carousel"]').each(function() {
//             var c = a(this);
//             b.call(c, c.data())
//         })
//     })
// }(jQuery), + function(a) {
//     "use strict";

//     function b(b) {
//         var c, d = b.attr("data-target") || (c = b.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, "");
//         return a(d)
//     }

//     function c(b) {
//         return this.each(function() {
//             var c = a(this),
//                 e = c.data("bs.collapse"),
//                 f = a.extend({}, d.DEFAULTS, c.data(), "object" == typeof b && b);
//             !e && f.toggle && /show|hide/.test(b) && (f.toggle = !1), e || c.data("bs.collapse", e = new d(this, f)), "string" == typeof b && e[b]()
//         })
//     }
//     var d = function(b, c) {
//         this.$element = a(b), this.options = a.extend({}, d.DEFAULTS, c), this.$trigger = a('[data-toggle="collapse"][href="#' + b.id + '"],[data-toggle="collapse"][data-target="#' + b.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
//     };
//     d.VERSION = "3.3.4", d.TRANSITION_DURATION = 350, d.DEFAULTS = {
//         toggle: !0
//     }, d.prototype.dimension = function() {
//         var a = this.$element.hasClass("width");
//         return a ? "width" : "height"
//     }, d.prototype.show = function() {
//         if (!this.transitioning && !this.$element.hasClass("in")) {
//             var b, e = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
//             if (!(e && e.length && (b = e.data("bs.collapse"), b && b.transitioning))) {
//                 var f = a.Event("show.bs.collapse");
//                 if (this.$element.trigger(f), !f.isDefaultPrevented()) {
//                     e && e.length && (c.call(e, "hide"), b || e.data("bs.collapse", null));
//                     var g = this.dimension();
//                     this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
//                     var h = function() {
//                         this.$element.removeClass("collapsing").addClass("collapse in")[g](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
//                     };
//                     if (!a.support.transition) return h.call(this);
//                     var i = a.camelCase(["scroll", g].join("-"));
//                     this.$element.one("bsTransitionEnd", a.proxy(h, this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])
//                 }
//             }
//         }
//     }, d.prototype.hide = function() {
//         if (!this.transitioning && this.$element.hasClass("in")) {
//             var b = a.Event("hide.bs.collapse");
//             if (this.$element.trigger(b), !b.isDefaultPrevented()) {
//                 var c = this.dimension();
//                 this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
//                 var e = function() {
//                     this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
//                 };
//                 return a.support.transition ? void this.$element[c](0).one("bsTransitionEnd", a.proxy(e, this)).emulateTransitionEnd(d.TRANSITION_DURATION) : e.call(this)
//             }
//         }
//     }, d.prototype.toggle = function() {
//         this[this.$element.hasClass("in") ? "hide" : "show"]()
//     }, d.prototype.getParent = function() {
//         return a(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(a.proxy(function(c, d) {
//             var e = a(d);
//             this.addAriaAndCollapsedClass(b(e), e)
//         }, this)).end()
//     }, d.prototype.addAriaAndCollapsedClass = function(a, b) {
//         var c = a.hasClass("in");
//         a.attr("aria-expanded", c), b.toggleClass("collapsed", !c).attr("aria-expanded", c)
//     };
//     var e = a.fn.collapse;
//     a.fn.collapse = c, a.fn.collapse.Constructor = d, a.fn.collapse.noConflict = function() {
//         return a.fn.collapse = e, this
//     }, a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(d) {
//         var e = a(this);
//         e.attr("data-target") || d.preventDefault();
//         var f = b(e),
//             g = f.data("bs.collapse"),
//             h = g ? "toggle" : e.data();
//         c.call(f, h)
//     })
// }(jQuery), + function(a) {
//     "use strict";

//     function b(b) {
//         b && 3 === b.which || (a(e).remove(), a(f).each(function() {
//             var d = a(this),
//                 e = c(d),
//                 f = {
//                     relatedTarget: this
//                 };
//             e.hasClass("open") && (e.trigger(b = a.Event("hide.bs.dropdown", f)), b.isDefaultPrevented() || (d.attr("aria-expanded", "false"), e.removeClass("open").trigger("hidden.bs.dropdown", f)))
//         }))
//     }

//     function c(b) {
//         var c = b.attr("data-target");
//         c || (c = b.attr("href"), c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));
//         var d = c && a(c);
//         return d && d.length ? d : b.parent()
//     }

//     function d(b) {
//         return this.each(function() {
//             var c = a(this),
//                 d = c.data("bs.dropdown");
//             d || c.data("bs.dropdown", d = new g(this)), "string" == typeof b && d[b].call(c)
//         })
//     }
//     var e = ".dropdown-backdrop",
//         f = '[data-toggle="dropdown"]',
//         g = function(b) {
//             a(b).on("click.bs.dropdown", this.toggle)
//         };
//     g.VERSION = "3.3.4", g.prototype.toggle = function(d) {
//         var e = a(this);
//         if (!e.is(".disabled, :disabled")) {
//             var f = c(e),
//                 g = f.hasClass("open");
//             if (b(), !g) {
//                 "ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length && a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click", b);
//                 var h = {
//                     relatedTarget: this
//                 };
//                 if (f.trigger(d = a.Event("show.bs.dropdown", h)), d.isDefaultPrevented()) return;
//                 e.trigger("focus").attr("aria-expanded", "true"), f.toggleClass("open").trigger("shown.bs.dropdown", h)
//             }
//             return !1
//         }
//     }, g.prototype.keydown = function(b) {
//         if (/(38|40|27|32)/.test(b.which) && !/input|textarea/i.test(b.target.tagName)) {
//             var d = a(this);
//             if (b.preventDefault(), b.stopPropagation(), !d.is(".disabled, :disabled")) {
//                 var e = c(d),
//                     g = e.hasClass("open");
//                 if (!g && 27 != b.which || g && 27 == b.which) return 27 == b.which && e.find(f).trigger("focus"), d.trigger("click");
//                 var h = " li:not(.disabled):visible a",
//                     i = e.find('[role="menu"]' + h + ', [role="listbox"]' + h);
//                 if (i.length) {
//                     var j = i.index(b.target);
//                     38 == b.which && j > 0 && j--, 40 == b.which && j < i.length - 1 && j++, ~j || (j = 0), i.eq(j).trigger("focus")
//                 }
//             }
//         }
//     };
//     var h = a.fn.dropdown;
//     a.fn.dropdown = d, a.fn.dropdown.Constructor = g, a.fn.dropdown.noConflict = function() {
//         return a.fn.dropdown = h, this
//     }, a(document).on("click.bs.dropdown.data-api", b).on("click.bs.dropdown.data-api", ".dropdown form", function(a) {
//         a.stopPropagation()
//     }).on("click.bs.dropdown.data-api", f, g.prototype.toggle).on("keydown.bs.dropdown.data-api", f, g.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="menu"]', g.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="listbox"]', g.prototype.keydown)
// }(jQuery), + function(a) {
//     "use strict";

//     function b(b, d) {
//         return this.each(function() {
//             var e = a(this),
//                 f = e.data("bs.modal"),
//                 g = a.extend({}, c.DEFAULTS, e.data(), "object" == typeof b && b);
//             f || e.data("bs.modal", f = new c(this, g)), "string" == typeof b ? f[b](d) : g.show && f.show(d)
//         })
//     }
//     var c = function(b, c) {
//         this.options = c, this.$body = a(document.body), this.$element = a(b), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function() {
//             this.$element.trigger("loaded.bs.modal")
//         }, this))
//     };
//     c.VERSION = "3.3.4", c.TRANSITION_DURATION = 300, c.BACKDROP_TRANSITION_DURATION = 150, c.DEFAULTS = {
//         backdrop: !0,
//         keyboard: !0,
//         show: !0
//     }, c.prototype.toggle = function(a) {
//         return this.isShown ? this.hide() : this.show(a)
//     }, c.prototype.show = function(b) {
//         var d = this,
//             e = a.Event("show.bs.modal", {
//                 relatedTarget: b
//             });
//         this.$element.trigger(e), this.isShown || e.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
//             d.$element.one("mouseup.dismiss.bs.modal", function(b) {
//                 a(b.target).is(d.$element) && (d.ignoreBackdropClick = !0)
//             })
//         }), this.backdrop(function() {
//             var e = a.support.transition && d.$element.hasClass("fade");
//             d.$element.parent().length || d.$element.appendTo(d.$body), d.$element.show().scrollTop(0), d.adjustDialog(), e && d.$element[0].offsetWidth, d.$element.addClass("in").attr("aria-hidden", !1), d.enforceFocus();
//             var f = a.Event("shown.bs.modal", {
//                 relatedTarget: b
//             });
//             e ? d.$dialog.one("bsTransitionEnd", function() {
//                 d.$element.trigger("focus").trigger(f)
//             }).emulateTransitionEnd(c.TRANSITION_DURATION) : d.$element.trigger("focus").trigger(f)
//         }))
//     }, c.prototype.hide = function(b) {
//         b && b.preventDefault(), b = a.Event("hide.bs.modal"), this.$element.trigger(b), this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this)).emulateTransitionEnd(c.TRANSITION_DURATION) : this.hideModal())
//     }, c.prototype.enforceFocus = function() {
//         a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function(a) {
//             this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.trigger("focus")
//         }, this))
//     }, c.prototype.escape = function() {
//         this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", a.proxy(function(a) {
//             27 == a.which && this.hide()
//         }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
//     }, c.prototype.resize = function() {
//         this.isShown ? a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this)) : a(window).off("resize.bs.modal")
//     }, c.prototype.hideModal = function() {
//         var a = this;
//         this.$element.hide(), this.backdrop(function() {
//             a.$body.removeClass("modal-open"), a.resetAdjustments(), a.resetScrollbar(), a.$element.trigger("hidden.bs.modal")
//         })
//     }, c.prototype.removeBackdrop = function() {
//         this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
//     }, c.prototype.backdrop = function(b) {
//         var d = this,
//             e = this.$element.hasClass("fade") ? "fade" : "";
//         if (this.isShown && this.options.backdrop) {
//             var f = a.support.transition && e;
//             if (this.$backdrop = a('<div class="modal-backdrop ' + e + '" />').appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", a.proxy(function(a) {
//                     return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
//                 }, this)), f && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b) return;
//             f ? this.$backdrop.one("bsTransitionEnd", b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : b()
//         } else if (!this.isShown && this.$backdrop) {
//             this.$backdrop.removeClass("in");
//             var g = function() {
//                 d.removeBackdrop(), b && b()
//             };
//             a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : g()
//         } else b && b()
//     }, c.prototype.handleUpdate = function() {
//         this.adjustDialog()
//     }, c.prototype.adjustDialog = function() {
//         var a = this.$element[0].scrollHeight > document.documentElement.clientHeight;
//         this.$element.css({
//             paddingLeft: !this.bodyIsOverflowing && a ? this.scrollbarWidth : "",
//             paddingRight: this.bodyIsOverflowing && !a ? this.scrollbarWidth : ""
//         })
//     }, c.prototype.resetAdjustments = function() {
//         this.$element.css({
//             paddingLeft: "",
//             paddingRight: ""
//         })
//     }, c.prototype.checkScrollbar = function() {
//         var a = window.innerWidth;
//         if (!a) {
//             var b = document.documentElement.getBoundingClientRect();
//             a = b.right - Math.abs(b.left)
//         }
//         this.bodyIsOverflowing = document.body.clientWidth < a, this.scrollbarWidth = this.measureScrollbar()
//     }, c.prototype.setScrollbar = function() {
//         var a = parseInt(this.$body.css("padding-right") || 0, 10);
//         this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", a + this.scrollbarWidth)
//     }, c.prototype.resetScrollbar = function() {
//         this.$body.css("padding-right", this.originalBodyPad)
//     }, c.prototype.measureScrollbar = function() {
//         var a = document.createElement("div");
//         a.className = "modal-scrollbar-measure", this.$body.append(a);
//         var b = a.offsetWidth - a.clientWidth;
//         return this.$body[0].removeChild(a), b
//     };
//     var d = a.fn.modal;
//     a.fn.modal = b, a.fn.modal.Constructor = c, a.fn.modal.noConflict = function() {
//         return a.fn.modal = d, this
//     }, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(c) {
//         var d = a(this),
//             e = d.attr("href"),
//             f = a(d.attr("data-target") || e && e.replace(/.*(?=#[^\s]+$)/, "")),
//             g = f.data("bs.modal") ? "toggle" : a.extend({
//                 remote: !/#/.test(e) && e
//             }, f.data(), d.data());
//         d.is("a") && c.preventDefault(), f.one("show.bs.modal", function(a) {
//             a.isDefaultPrevented() || f.one("hidden.bs.modal", function() {
//                 d.is(":visible") && d.trigger("focus")
//             })
//         }), b.call(f, g, this)
//     })
// }(jQuery), + function(a) {
//     "use strict";

//     function b(b) {
//         return this.each(function() {
//             var d = a(this),
//                 e = d.data("bs.tooltip"),
//                 f = "object" == typeof b && b;
//             (e || !/destroy|hide/.test(b)) && (e || d.data("bs.tooltip", e = new c(this, f)), "string" == typeof b && e[b]())
//         })
//     }
//     var c = function(a, b) {
//         this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.init("tooltip", a, b)
//     };
//     c.VERSION = "3.3.4", c.TRANSITION_DURATION = 150, c.DEFAULTS = {
//         animation: !0,
//         placement: "top",
//         selector: !1,
//         template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
//         trigger: "hover focus",
//         title: "",
//         delay: 0,
//         html: !1,
//         container: !1,
//         viewport: {
//             selector: "body",
//             padding: 0
//         }
//     }, c.prototype.init = function(b, c, d) {
//         if (this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d), this.$viewport = this.options.viewport && a(this.options.viewport.selector || this.options.viewport), this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
//         for (var e = this.options.trigger.split(" "), f = e.length; f--;) {
//             var g = e[f];
//             if ("click" == g) this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this));
//             else if ("manual" != g) {
//                 var h = "hover" == g ? "mouseenter" : "focusin",
//                     i = "hover" == g ? "mouseleave" : "focusout";
//                 this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this))
//             }
//         }
//         this.options.selector ? this._options = a.extend({}, this.options, {
//             trigger: "manual",
//             selector: ""
//         }) : this.fixTitle()
//     }, c.prototype.getDefaults = function() {
//         return c.DEFAULTS
//     }, c.prototype.getOptions = function(b) {
//         return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = {
//             show: b.delay,
//             hide: b.delay
//         }), b
//     }, c.prototype.getDelegateOptions = function() {
//         var b = {},
//             c = this.getDefaults();
//         return this._options && a.each(this._options, function(a, d) {
//             c[a] != d && (b[a] = d)
//         }), b
//     }, c.prototype.enter = function(b) {
//         var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
//         return c && c.$tip && c.$tip.is(":visible") ? void(c.hoverState = "in") : (c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), clearTimeout(c.timeout), c.hoverState = "in", c.options.delay && c.options.delay.show ? void(c.timeout = setTimeout(function() {
//             "in" == c.hoverState && c.show()
//         }, c.options.delay.show)) : c.show())
//     }, c.prototype.leave = function(b) {
//         var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
//         return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), clearTimeout(c.timeout), c.hoverState = "out", c.options.delay && c.options.delay.hide ? void(c.timeout = setTimeout(function() {
//             "out" == c.hoverState && c.hide()
//         }, c.options.delay.hide)) : c.hide()
//     }, c.prototype.show = function() {
//         var b = a.Event("show.bs." + this.type);
//         if (this.hasContent() && this.enabled) {
//             this.$element.trigger(b);
//             var d = a.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
//             if (b.isDefaultPrevented() || !d) return;
//             var e = this,
//                 f = this.tip(),
//                 g = this.getUID(this.type);
//             this.setContent(), f.attr("id", g), this.$element.attr("aria-describedby", g), this.options.animation && f.addClass("fade");
//             var h = "function" == typeof this.options.placement ? this.options.placement.call(this, f[0], this.$element[0]) : this.options.placement,
//                 i = /\s?auto?\s?/i,
//                 j = i.test(h);
//             j && (h = h.replace(i, "") || "top"), f.detach().css({
//                 top: 0,
//                 left: 0,
//                 display: "block"
//             }).addClass(h).data("bs." + this.type, this), this.options.container ? f.appendTo(this.options.container) : f.insertAfter(this.$element);
//             var k = this.getPosition(),
//                 l = f[0].offsetWidth,
//                 m = f[0].offsetHeight;
//             if (j) {
//                 var n = h,
//                     o = this.options.container ? a(this.options.container) : this.$element.parent(),
//                     p = this.getPosition(o);
//                 h = "bottom" == h && k.bottom + m > p.bottom ? "top" : "top" == h && k.top - m < p.top ? "bottom" : "right" == h && k.right + l > p.width ? "left" : "left" == h && k.left - l < p.left ? "right" : h, f.removeClass(n).addClass(h)
//             }
//             var q = this.getCalculatedOffset(h, k, l, m);
//             this.applyPlacement(q, h);
//             var r = function() {
//                 var a = e.hoverState;
//                 e.$element.trigger("shown.bs." + e.type), e.hoverState = null, "out" == a && e.leave(e)
//             };
//             a.support.transition && this.$tip.hasClass("fade") ? f.one("bsTransitionEnd", r).emulateTransitionEnd(c.TRANSITION_DURATION) : r()
//         }
//     }, c.prototype.applyPlacement = function(b, c) {
//         var d = this.tip(),
//             e = d[0].offsetWidth,
//             f = d[0].offsetHeight,
//             g = parseInt(d.css("margin-top"), 10),
//             h = parseInt(d.css("margin-left"), 10);
//         isNaN(g) && (g = 0), isNaN(h) && (h = 0), b.top = b.top + g, b.left = b.left + h, a.offset.setOffset(d[0], a.extend({
//             using: function(a) {
//                 d.css({
//                     top: Math.round(a.top),
//                     left: Math.round(a.left)
//                 })
//             }
//         }, b), 0), d.addClass("in");
//         var i = d[0].offsetWidth,
//             j = d[0].offsetHeight;
//         "top" == c && j != f && (b.top = b.top + f - j);
//         var k = this.getViewportAdjustedDelta(c, b, i, j);
//         k.left ? b.left += k.left : b.top += k.top;
//         var l = /top|bottom/.test(c),
//             m = l ? 2 * k.left - e + i : 2 * k.top - f + j,
//             n = l ? "offsetWidth" : "offsetHeight";
//         d.offset(b), this.replaceArrow(m, d[0][n], l)
//     }, c.prototype.replaceArrow = function(a, b, c) {
//         this.arrow().css(c ? "left" : "top", 50 * (1 - a / b) + "%").css(c ? "top" : "left", "")
//     }, c.prototype.setContent = function() {
//         var a = this.tip(),
//             b = this.getTitle();
//         a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right")
//     }, c.prototype.hide = function(b) {
//         function d() {
//             "in" != e.hoverState && f.detach(), e.$element.removeAttr("aria-describedby").trigger("hidden.bs." + e.type), b && b()
//         }
//         var e = this,
//             f = a(this.$tip),
//             g = a.Event("hide.bs." + this.type);
//         return this.$element.trigger(g), g.isDefaultPrevented() ? void 0 : (f.removeClass("in"), a.support.transition && f.hasClass("fade") ? f.one("bsTransitionEnd", d).emulateTransitionEnd(c.TRANSITION_DURATION) : d(), this.hoverState = null, this)
//     }, c.prototype.fixTitle = function() {
//         var a = this.$element;
//         (a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "")
//     }, c.prototype.hasContent = function() {
//         return this.getTitle()
//     }, c.prototype.getPosition = function(b) {
//         b = b || this.$element;
//         var c = b[0],
//             d = "BODY" == c.tagName,
//             e = c.getBoundingClientRect();
//         null == e.width && (e = a.extend({}, e, {
//             width: e.right - e.left,
//             height: e.bottom - e.top
//         }));
//         var f = d ? {
//                 top: 0,
//                 left: 0
//             } : b.offset(),
//             g = {
//                 scroll: d ? document.documentElement.scrollTop || document.body.scrollTop : b.scrollTop()
//             },
//             h = d ? {
//                 width: a(window).width(),
//                 height: a(window).height()
//             } : null;
//         return a.extend({}, e, g, h, f)
//     }, c.prototype.getCalculatedOffset = function(a, b, c, d) {
//         return "bottom" == a ? {
//             top: b.top + b.height,
//             left: b.left + b.width / 2 - c / 2
//         } : "top" == a ? {
//             top: b.top - d,
//             left: b.left + b.width / 2 - c / 2
//         } : "left" == a ? {
//             top: b.top + b.height / 2 - d / 2,
//             left: b.left - c
//         } : {
//             top: b.top + b.height / 2 - d / 2,
//             left: b.left + b.width
//         }
//     }, c.prototype.getViewportAdjustedDelta = function(a, b, c, d) {
//         var e = {
//             top: 0,
//             left: 0
//         };
//         if (!this.$viewport) return e;
//         var f = this.options.viewport && this.options.viewport.padding || 0,
//             g = this.getPosition(this.$viewport);
//         if (/right|left/.test(a)) {
//             var h = b.top - f - g.scroll,
//                 i = b.top + f - g.scroll + d;
//             h < g.top ? e.top = g.top - h : i > g.top + g.height && (e.top = g.top + g.height - i)
//         } else {
//             var j = b.left - f,
//                 k = b.left + f + c;
//             j < g.left ? e.left = g.left - j : k > g.width && (e.left = g.left + g.width - k)
//         }
//         return e
//     }, c.prototype.getTitle = function() {
//         var a, b = this.$element,
//             c = this.options;
//         return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title)
//     }, c.prototype.getUID = function(a) {
//         do a += ~~(1e6 * Math.random()); while (document.getElementById(a));
//         return a
//     }, c.prototype.tip = function() {
//         return this.$tip = this.$tip || a(this.options.template)
//     }, c.prototype.arrow = function() {
//         return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
//     }, c.prototype.enable = function() {
//         this.enabled = !0
//     }, c.prototype.disable = function() {
//         this.enabled = !1
//     }, c.prototype.toggleEnabled = function() {
//         this.enabled = !this.enabled
//     }, c.prototype.toggle = function(b) {
//         var c = this;
//         b && (c = a(b.currentTarget).data("bs." + this.type), c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c))), c.tip().hasClass("in") ? c.leave(c) : c.enter(c)
//     }, c.prototype.destroy = function() {
//         var a = this;
//         clearTimeout(this.timeout), this.hide(function() {
//             a.$element.off("." + a.type).removeData("bs." + a.type)
//         })
//     };
//     var d = a.fn.tooltip;
//     a.fn.tooltip = b, a.fn.tooltip.Constructor = c, a.fn.tooltip.noConflict = function() {
//         return a.fn.tooltip = d, this
//     }
// }(jQuery), + function(a) {
//     "use strict";

//     function b(b) {
//         return this.each(function() {
//             var d = a(this),
//                 e = d.data("bs.popover"),
//                 f = "object" == typeof b && b;
//             (e || !/destroy|hide/.test(b)) && (e || d.data("bs.popover", e = new c(this, f)), "string" == typeof b && e[b]())
//         })
//     }
//     var c = function(a, b) {
//         this.init("popover", a, b)
//     };
//     if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js");
//     c.VERSION = "3.3.4", c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
//         placement: "right",
//         trigger: "click",
//         content: "",
//         template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
//     }), c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype), c.prototype.constructor = c, c.prototype.getDefaults = function() {
//         return c.DEFAULTS
//     }, c.prototype.setContent = function() {
//         var a = this.tip(),
//             b = this.getTitle(),
//             c = this.getContent();
//         a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof c ? "html" : "append" : "text"](c), a.removeClass("fade top bottom left right in"), a.find(".popover-title").html() || a.find(".popover-title").hide()
//     }, c.prototype.hasContent = function() {
//         return this.getTitle() || this.getContent()
//     }, c.prototype.getContent = function() {
//         var a = this.$element,
//             b = this.options;
//         return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content)
//     }, c.prototype.arrow = function() {
//         return this.$arrow = this.$arrow || this.tip().find(".arrow")
//     };
//     var d = a.fn.popover;
//     a.fn.popover = b, a.fn.popover.Constructor = c, a.fn.popover.noConflict = function() {
//         return a.fn.popover = d, this
//     }
// }(jQuery), + function(a) {
//     "use strict";

//     function b(c, d) {
//         this.$body = a(document.body), this.$scrollElement = a(a(c).is(document.body) ? window : c), this.options = a.extend({}, b.DEFAULTS, d), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", a.proxy(this.process, this)), this.refresh(), this.process()
//     }

//     function c(c) {
//         return this.each(function() {
//             var d = a(this),
//                 e = d.data("bs.scrollspy"),
//                 f = "object" == typeof c && c;
//             e || d.data("bs.scrollspy", e = new b(this, f)), "string" == typeof c && e[c]()
//         })
//     }
//     b.VERSION = "3.3.4", b.DEFAULTS = {
//         offset: 10
//     }, b.prototype.getScrollHeight = function() {
//         return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
//     }, b.prototype.refresh = function() {
//         var b = this,
//             c = "offset",
//             d = 0;
//         this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), a.isWindow(this.$scrollElement[0]) || (c = "position", d = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() {
//             var b = a(this),
//                 e = b.data("target") || b.attr("href"),
//                 f = /^#./.test(e) && a(e);
//             return f && f.length && f.is(":visible") && [
//                 [f[c]().top + d, e]
//             ] || null
//         }).sort(function(a, b) {
//             return a[0] - b[0]
//         }).each(function() {
//             b.offsets.push(this[0]), b.targets.push(this[1])
//         })
//     }, b.prototype.process = function() {
//         var a, b = this.$scrollElement.scrollTop() + this.options.offset,
//             c = this.getScrollHeight(),
//             d = this.options.offset + c - this.$scrollElement.height(),
//             e = this.offsets,
//             f = this.targets,
//             g = this.activeTarget;
//         if (this.scrollHeight != c && this.refresh(), b >= d) return g != (a = f[f.length - 1]) && this.activate(a);
//         if (g && b < e[0]) return this.activeTarget = null, this.clear();
//         for (a = e.length; a--;) g != f[a] && b >= e[a] && (void 0 === e[a + 1] || b < e[a + 1]) && this.activate(f[a])
//     }, b.prototype.activate = function(b) {
//         this.activeTarget = b, this.clear();
//         var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]',
//             d = a(c).parents("li").addClass("active");
//         d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")), d.trigger("activate.bs.scrollspy")
//     }, b.prototype.clear = function() {
//         a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
//     };
//     var d = a.fn.scrollspy;
//     a.fn.scrollspy = c, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.noConflict = function() {
//         return a.fn.scrollspy = d, this
//     }, a(window).on("load.bs.scrollspy.data-api", function() {
//         a('[data-spy="scroll"]').each(function() {
//             var b = a(this);
//             c.call(b, b.data())
//         })
//     })
// }(jQuery), + function(a) {
//     "use strict";

//     function b(b) {
//         return this.each(function() {
//             var d = a(this),
//                 e = d.data("bs.tab");
//             e || d.data("bs.tab", e = new c(this)), "string" == typeof b && e[b]()
//         })
//     }
//     var c = function(b) {
//         this.element = a(b)
//     };
//     c.VERSION = "3.3.4", c.TRANSITION_DURATION = 150, c.prototype.show = function() {
//         var b = this.element,
//             c = b.closest("ul:not(.dropdown-menu)"),
//             d = b.data("target");
//         if (d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active")) {
//             var e = c.find(".active:last a"),
//                 f = a.Event("hide.bs.tab", {
//                     relatedTarget: b[0]
//                 }),
//                 g = a.Event("show.bs.tab", {
//                     relatedTarget: e[0]
//                 });
//             if (e.trigger(f), b.trigger(g), !g.isDefaultPrevented() && !f.isDefaultPrevented()) {
//                 var h = a(d);
//                 this.activate(b.closest("li"), c), this.activate(h, h.parent(), function() {
//                     e.trigger({
//                         type: "hidden.bs.tab",
//                         relatedTarget: b[0]
//                     }), b.trigger({
//                         type: "shown.bs.tab",
//                         relatedTarget: e[0]
//                     })
//                 })
//             }
//         }
//     }, c.prototype.activate = function(b, d, e) {
//         function f() {
//             g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), h ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), b.parent(".dropdown-menu").length && b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), e && e()
//         }
//         var g = d.find("> .active"),
//             h = e && a.support.transition && (g.length && g.hasClass("fade") || !!d.find("> .fade").length);
//         g.length && h ? g.one("bsTransitionEnd", f).emulateTransitionEnd(c.TRANSITION_DURATION) : f(), g.removeClass("in")
//     };
//     var d = a.fn.tab;
//     a.fn.tab = b, a.fn.tab.Constructor = c, a.fn.tab.noConflict = function() {
//         return a.fn.tab = d, this
//     };
//     var e = function(c) {
//         c.preventDefault(), b.call(a(this), "show")
//     };
//     a(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', e).on("click.bs.tab.data-api", '[data-toggle="pill"]', e)
// }(jQuery), + function(a) {
//     "use strict";

//     function b(b) {
//         return this.each(function() {
//             var d = a(this),
//                 e = d.data("bs.affix"),
//                 f = "object" == typeof b && b;
//             e || d.data("bs.affix", e = new c(this, f)), "string" == typeof b && e[b]()
//         })
//     }
//     var c = function(b, d) {
//         this.options = a.extend({}, c.DEFAULTS, d), this.$target = a(this.options.target).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)), this.$element = a(b), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
//     };
//     c.VERSION = "3.3.4", c.RESET = "affix affix-top affix-bottom", c.DEFAULTS = {
//         offset: 0,
//         target: window
//     }, c.prototype.getState = function(a, b, c, d) {
//         var e = this.$target.scrollTop(),
//             f = this.$element.offset(),
//             g = this.$target.height();
//         if (null != c && "top" == this.affixed) return c > e ? "top" : !1;
//         if ("bottom" == this.affixed) return null != c ? e + this.unpin <= f.top ? !1 : "bottom" : a - d >= e + g ? !1 : "bottom";
//         var h = null == this.affixed,
//             i = h ? e : f.top,
//             j = h ? g : b;
//         return null != c && c >= e ? "top" : null != d && i + j >= a - d ? "bottom" : !1
//     }, c.prototype.getPinnedOffset = function() {
//         if (this.pinnedOffset) return this.pinnedOffset;
//         this.$element.removeClass(c.RESET).addClass("affix");
//         var a = this.$target.scrollTop(),
//             b = this.$element.offset();
//         return this.pinnedOffset = b.top - a
//     }, c.prototype.checkPositionWithEventLoop = function() {
//         setTimeout(a.proxy(this.checkPosition, this), 1)
//     }, c.prototype.checkPosition = function() {
//         if (this.$element.is(":visible")) {
//             var b = this.$element.height(),
//                 d = this.options.offset,
//                 e = d.top,
//                 f = d.bottom,
//                 g = a(document.body).height();
//             "object" != typeof d && (f = e = d), "function" == typeof e && (e = d.top(this.$element)), "function" == typeof f && (f = d.bottom(this.$element));
//             var h = this.getState(g, b, e, f);
//             if (this.affixed != h) {
//                 null != this.unpin && this.$element.css("top", "");
//                 var i = "affix" + (h ? "-" + h : ""),
//                     j = a.Event(i + ".bs.affix");
//                 if (this.$element.trigger(j), j.isDefaultPrevented()) return;
//                 this.affixed = h, this.unpin = "bottom" == h ? this.getPinnedOffset() : null, this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix", "affixed") + ".bs.affix")
//             }
//             "bottom" == h && this.$element.offset({
//                 top: g - b - f
//             })
//         }
//     };
//     var d = a.fn.affix;
//     a.fn.affix = b, a.fn.affix.Constructor = c, a.fn.affix.noConflict = function() {
//         return a.fn.affix = d, this
//     }, a(window).on("load", function() {
//         a('[data-spy="affix"]').each(function() {
//             var c = a(this),
//                 d = c.data();
//             d.offset = d.offset || {}, null != d.offsetBottom && (d.offset.bottom = d.offsetBottom), null != d.offsetTop && (d.offset.top = d.offsetTop), b.call(c, d)
//         })
//     })
// }(jQuery),
// function(a) {
//     a.flexslider = function(b, c) {
//         var d = a(b);
//         d.vars = a.extend({}, a.flexslider.defaults, c);
//         var e, f = d.vars.namespace,
//             g = window.navigator && window.navigator.msPointerEnabled && window.MSGesture,
//             h = ("ontouchstart" in window || g || window.DocumentTouch && document instanceof DocumentTouch) && d.vars.touch,
//             i = "click touchend MSPointerUp keyup",
//             j = "",
//             k = "vertical" === d.vars.direction,
//             l = d.vars.reverse,
//             m = d.vars.itemWidth > 0,
//             n = "fade" === d.vars.animation,
//             o = "" !== d.vars.asNavFor,
//             p = {},
//             q = !0;
//         a.data(b, "flexslider", d), p = {
//             init: function() {
//                 d.animating = !1, d.currentSlide = parseInt(d.vars.startAt ? d.vars.startAt : 0, 10), isNaN(d.currentSlide) && (d.currentSlide = 0), d.animatingTo = d.currentSlide, d.atEnd = 0 === d.currentSlide || d.currentSlide === d.last, d.containerSelector = d.vars.selector.substr(0, d.vars.selector.search(" ")), d.slides = a(d.vars.selector, d), d.container = a(d.containerSelector, d), d.count = d.slides.length, d.syncExists = a(d.vars.sync).length > 0, "slide" === d.vars.animation && (d.vars.animation = "swing"), d.prop = k ? "top" : "marginLeft", d.args = {}, d.manualPause = !1, d.stopped = !1, d.started = !1, d.startTimeout = null, d.transitions = !d.vars.video && !n && d.vars.useCSS && function() {
//                     var a = document.createElement("div"),
//                         b = ["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
//                     for (var c in b)
//                         if (void 0 !== a.style[b[c]]) return d.pfx = b[c].replace("Perspective", "").toLowerCase(), d.prop = "-" + d.pfx + "-transform", !0;
//                     return !1
//                 }(), d.ensureAnimationEnd = "", "" !== d.vars.controlsContainer && (d.controlsContainer = a(d.vars.controlsContainer).length > 0 && a(d.vars.controlsContainer)), "" !== d.vars.manualControls && (d.manualControls = a(d.vars.manualControls).length > 0 && a(d.vars.manualControls)), d.vars.randomize && (d.slides.sort(function() {
//                     return Math.round(Math.random()) - .5
//                 }), d.container.empty().append(d.slides)), d.doMath(), d.setup("init"), d.vars.controlNav && p.controlNav.setup(), d.vars.directionNav && p.directionNav.setup(), d.vars.keyboard && (1 === a(d.containerSelector).length || d.vars.multipleKeyboard) && a(document).bind("keyup", function(a) {
//                     var b = a.keyCode;
//                     if (!d.animating && (39 === b || 37 === b)) {
//                         var c = 39 === b ? d.getTarget("next") : 37 === b ? d.getTarget("prev") : !1;
//                         d.flexAnimate(c, d.vars.pauseOnAction)
//                     }
//                 }), d.vars.mousewheel && d.bind("mousewheel", function(a, b) {
//                     a.preventDefault();
//                     var c = d.getTarget(0 > b ? "next" : "prev");
//                     d.flexAnimate(c, d.vars.pauseOnAction)
//                 }), d.vars.pausePlay && p.pausePlay.setup(), d.vars.slideshow && d.vars.pauseInvisible && p.pauseInvisible.init(), d.vars.slideshow && (d.vars.pauseOnHover && d.hover(function() {
//                     d.manualPlay || d.manualPause || d.pause()
//                 }, function() {
//                     d.manualPause || d.manualPlay || d.stopped || d.play()
//                 }), d.vars.pauseInvisible && p.pauseInvisible.isHidden() || (d.vars.initDelay > 0 ? d.startTimeout = setTimeout(d.play, d.vars.initDelay) : d.play())), o && p.asNav.setup(), h && d.vars.touch && p.touch(), (!n || n && d.vars.smoothHeight) && a(window).bind("resize orientationchange focus", p.resize), d.find("img").attr("draggable", "false"), setTimeout(function() {
//                     d.vars.start(d)
//                 }, 200)
//             },
//             asNav: {
//                 setup: function() {
//                     d.asNav = !0, d.animatingTo = Math.floor(d.currentSlide / d.move), d.currentItem = d.currentSlide, d.slides.removeClass(f + "active-slide").eq(d.currentItem).addClass(f + "active-slide"), g ? (b._slider = d, d.slides.each(function() {
//                         var b = this;
//                         b._gesture = new MSGesture, b._gesture.target = b, b.addEventListener("MSPointerDown", function(a) {
//                             a.preventDefault(), a.currentTarget._gesture && a.currentTarget._gesture.addPointer(a.pointerId)
//                         }, !1), b.addEventListener("MSGestureTap", function(b) {
//                             b.preventDefault();
//                             var c = a(this),
//                                 e = c.index();
//                             a(d.vars.asNavFor).data("flexslider").animating || c.hasClass("active") || (d.direction = d.currentItem < e ? "next" : "prev", d.flexAnimate(e, d.vars.pauseOnAction, !1, !0, !0))
//                         })
//                     })) : d.slides.on(i, function(b) {
//                         b.preventDefault();
//                         var c = a(this),
//                             e = c.index(),
//                             g = c.offset().left - a(d).scrollLeft();
//                         0 >= g && c.hasClass(f + "active-slide") ? d.flexAnimate(d.getTarget("prev"), !0) : a(d.vars.asNavFor).data("flexslider").animating || c.hasClass(f + "active-slide") || (d.direction = d.currentItem < e ? "next" : "prev", d.flexAnimate(e, d.vars.pauseOnAction, !1, !0, !0))
//                     })
//                 }
//             },
//             controlNav: {
//                 setup: function() {
//                     d.manualControls ? p.controlNav.setupManual() : p.controlNav.setupPaging()
//                 },
//                 setupPaging: function() {
//                     var b, c, e = "thumbnails" === d.vars.controlNav ? "control-thumbs" : "control-paging",
//                         g = 1;
//                     if (d.controlNavScaffold = a('<ol class="' + f + "control-nav " + f + e + '"></ol>'), d.pagingCount > 1)
//                         for (var h = 0; h < d.pagingCount; h++) {
//                             if (c = d.slides.eq(h), b = "thumbnails" === d.vars.controlNav ? '<img src="' + c.attr("data-thumb") + '"/>' : "<a>" + g + "</a>", "thumbnails" === d.vars.controlNav && !0 === d.vars.thumbCaptions) {
//                                 var k = c.attr("data-thumbcaption");
//                                 "" != k && void 0 != k && (b += '<span class="' + f + 'caption">' + k + "</span>")
//                             }
//                             d.controlNavScaffold.append("<li>" + b + "</li>"), g++
//                         }
//                     d.controlsContainer ? a(d.controlsContainer).append(d.controlNavScaffold) : d.append(d.controlNavScaffold), p.controlNav.set(), p.controlNav.active(), d.controlNavScaffold.delegate("a, img", i, function(b) {
//                         if (b.preventDefault(), "" === j || j === b.type) {
//                             var c = a(this),
//                                 e = d.controlNav.index(c);
//                             c.hasClass(f + "active") || (d.direction = e > d.currentSlide ? "next" : "prev", d.flexAnimate(e, d.vars.pauseOnAction))
//                         }
//                         "" === j && (j = b.type), p.setToClearWatchedEvent()
//                     })
//                 },
//                 setupManual: function() {
//                     d.controlNav = d.manualControls, p.controlNav.active(), d.controlNav.bind(i, function(b) {
//                         if (b.preventDefault(), "" === j || j === b.type) {
//                             var c = a(this),
//                                 e = d.controlNav.index(c);
//                             c.hasClass(f + "active") || (d.direction = e > d.currentSlide ? "next" : "prev", d.flexAnimate(e, d.vars.pauseOnAction))
//                         }
//                         "" === j && (j = b.type), p.setToClearWatchedEvent()
//                     })
//                 },
//                 set: function() {
//                     var b = "thumbnails" === d.vars.controlNav ? "img" : "a";
//                     d.controlNav = a("." + f + "control-nav li " + b, d.controlsContainer ? d.controlsContainer : d)
//                 },
//                 active: function() {
//                     d.controlNav.removeClass(f + "active").eq(d.animatingTo).addClass(f + "active")
//                 },
//                 update: function(b, c) {
//                     d.pagingCount > 1 && "add" === b ? d.controlNavScaffold.append(a("<li><a>" + d.count + "</a></li>")) : 1 === d.pagingCount ? d.controlNavScaffold.find("li").remove() : d.controlNav.eq(c).closest("li").remove(), p.controlNav.set(), d.pagingCount > 1 && d.pagingCount !== d.controlNav.length ? d.update(c, b) : p.controlNav.active()
//                 }
//             },
//             directionNav: {
//                 setup: function() {
//                     var b = a('<ul class="' + f + 'direction-nav"><li class="' + f + 'nav-prev"><a class="' + f + 'prev" href="#">' + d.vars.prevText + '</a></li><li class="' + f + 'nav-next"><a class="' + f + 'next" href="#">' + d.vars.nextText + "</a></li></ul>");
//                     d.controlsContainer ? (a(d.controlsContainer).append(b), d.directionNav = a("." + f + "direction-nav li a", d.controlsContainer)) : (d.append(b), d.directionNav = a("." + f + "direction-nav li a", d)), p.directionNav.update(), d.directionNav.bind(i, function(b) {
//                         b.preventDefault();
//                         var c;
//                         ("" === j || j === b.type) && (c = d.getTarget(a(this).hasClass(f + "next") ? "next" : "prev"), d.flexAnimate(c, d.vars.pauseOnAction)), "" === j && (j = b.type), p.setToClearWatchedEvent()
//                     })
//                 },
//                 update: function() {
//                     var a = f + "disabled";
//                     1 === d.pagingCount ? d.directionNav.addClass(a).attr("tabindex", "-1") : d.vars.animationLoop ? d.directionNav.removeClass(a).removeAttr("tabindex") : 0 === d.animatingTo ? d.directionNav.removeClass(a).filter("." + f + "prev").addClass(a).attr("tabindex", "-1") : d.animatingTo === d.last ? d.directionNav.removeClass(a).filter("." + f + "next").addClass(a).attr("tabindex", "-1") : d.directionNav.removeClass(a).removeAttr("tabindex")
//                 }
//             },
//             pausePlay: {
//                 setup: function() {
//                     var b = a('<div class="' + f + 'pauseplay"><a></a></div>');
//                     d.controlsContainer ? (d.controlsContainer.append(b), d.pausePlay = a("." + f + "pauseplay a", d.controlsContainer)) : (d.append(b), d.pausePlay = a("." + f + "pauseplay a", d)), p.pausePlay.update(d.vars.slideshow ? f + "pause" : f + "play"), d.pausePlay.bind(i, function(b) {
//                         b.preventDefault(), ("" === j || j === b.type) && (a(this).hasClass(f + "pause") ? (d.manualPause = !0, d.manualPlay = !1, d.pause()) : (d.manualPause = !1, d.manualPlay = !0, d.play())), "" === j && (j = b.type), p.setToClearWatchedEvent()
//                     })
//                 },
//                 update: function(a) {
//                     "play" === a ? d.pausePlay.removeClass(f + "pause").addClass(f + "play").html(d.vars.playText) : d.pausePlay.removeClass(f + "play").addClass(f + "pause").html(d.vars.pauseText)
//                 }
//             },
//             touch: function() {
//                 function a(a) {
//                     d.animating ? a.preventDefault() : (window.navigator.msPointerEnabled || 1 === a.touches.length) && (d.pause(), q = k ? d.h : d.w, s = Number(new Date), u = a.touches[0].pageX, v = a.touches[0].pageY, p = m && l && d.animatingTo === d.last ? 0 : m && l ? d.limit - (d.itemW + d.vars.itemMargin) * d.move * d.animatingTo : m && d.currentSlide === d.last ? d.limit : m ? (d.itemW + d.vars.itemMargin) * d.move * d.currentSlide : l ? (d.last - d.currentSlide + d.cloneOffset) * q : (d.currentSlide + d.cloneOffset) * q, j = k ? v : u, o = k ? u : v, b.addEventListener("touchmove", c, !1), b.addEventListener("touchend", e, !1))
//                 }

//                 function c(a) {
//                     u = a.touches[0].pageX, v = a.touches[0].pageY, r = k ? j - v : j - u, t = k ? Math.abs(r) < Math.abs(u - o) : Math.abs(r) < Math.abs(v - o);
//                     var b = 500;
//                     (!t || Number(new Date) - s > b) && (a.preventDefault(), !n && d.transitions && (d.vars.animationLoop || (r /= 0 === d.currentSlide && 0 > r || d.currentSlide === d.last && r > 0 ? Math.abs(r) / q + 2 : 1), d.setProps(p + r, "setTouch")))
//                 }

//                 function e() {
//                     if (b.removeEventListener("touchmove", c, !1), d.animatingTo === d.currentSlide && !t && null !== r) {
//                         var a = l ? -r : r,
//                             f = d.getTarget(a > 0 ? "next" : "prev");
//                         d.canAdvance(f) && (Number(new Date) - s < 550 && Math.abs(a) > 50 || Math.abs(a) > q / 2) ? d.flexAnimate(f, d.vars.pauseOnAction) : n || d.flexAnimate(d.currentSlide, d.vars.pauseOnAction, !0)
//                     }
//                     b.removeEventListener("touchend", e, !1), j = null, o = null, r = null, p = null
//                 }

//                 function f(a) {
//                     a.stopPropagation(), d.animating ? a.preventDefault() : (d.pause(), b._gesture.addPointer(a.pointerId), w = 0, q = k ? d.h : d.w, s = Number(new Date), p = m && l && d.animatingTo === d.last ? 0 : m && l ? d.limit - (d.itemW + d.vars.itemMargin) * d.move * d.animatingTo : m && d.currentSlide === d.last ? d.limit : m ? (d.itemW + d.vars.itemMargin) * d.move * d.currentSlide : l ? (d.last - d.currentSlide + d.cloneOffset) * q : (d.currentSlide + d.cloneOffset) * q)
//                 }

//                 function h(a) {
//                     a.stopPropagation();
//                     var c = a.target._slider;
//                     if (c) {
//                         var d = -a.translationX,
//                             e = -a.translationY;
//                         return w += k ? e : d, r = w, t = k ? Math.abs(w) < Math.abs(-d) : Math.abs(w) < Math.abs(-e), a.detail === a.MSGESTURE_FLAG_INERTIA ? void setImmediate(function() {
//                             b._gesture.stop()
//                         }) : void((!t || Number(new Date) - s > 500) && (a.preventDefault(), !n && c.transitions && (c.vars.animationLoop || (r = w / (0 === c.currentSlide && 0 > w || c.currentSlide === c.last && w > 0 ? Math.abs(w) / q + 2 : 1)), c.setProps(p + r, "setTouch"))))
//                     }
//                 }

//                 function i(a) {
//                     a.stopPropagation();
//                     var b = a.target._slider;
//                     if (b) {
//                         if (b.animatingTo === b.currentSlide && !t && null !== r) {
//                             var c = l ? -r : r,
//                                 d = b.getTarget(c > 0 ? "next" : "prev");
//                             b.canAdvance(d) && (Number(new Date) - s < 550 && Math.abs(c) > 50 || Math.abs(c) > q / 2) ? b.flexAnimate(d, b.vars.pauseOnAction) : n || b.flexAnimate(b.currentSlide, b.vars.pauseOnAction, !0)
//                         }
//                         j = null, o = null, r = null, p = null, w = 0
//                     }
//                 }
//                 var j, o, p, q, r, s, t = !1,
//                     u = 0,
//                     v = 0,
//                     w = 0;
//                 g ? (b.style.msTouchAction = "none", b._gesture = new MSGesture, b._gesture.target = b, b.addEventListener("MSPointerDown", f, !1), b._slider = d, b.addEventListener("MSGestureChange", h, !1), b.addEventListener("MSGestureEnd", i, !1)) : b.addEventListener("touchstart", a, !1)
//             },
//             resize: function() {
//                 !d.animating && d.is(":visible") && (m || d.doMath(), n ? p.smoothHeight() : m ? (d.slides.width(d.computedW), d.update(d.pagingCount), d.setProps()) : k ? (d.viewport.height(d.h), d.setProps(d.h, "setTotal")) : (d.vars.smoothHeight && p.smoothHeight(), d.newSlides.width(d.computedW), d.setProps(d.computedW, "setTotal")))
//             },
//             smoothHeight: function(a) {
//                 if (!k || n) {
//                     var b = n ? d : d.viewport;
//                     a ? b.animate({
//                         height: d.slides.eq(d.animatingTo).height()
//                     }, a) : b.height(d.slides.eq(d.animatingTo).height())
//                 }
//             },
//             sync: function(b) {
//                 var c = a(d.vars.sync).data("flexslider"),
//                     e = d.animatingTo;
//                 switch (b) {
//                     case "animate":
//                         c.flexAnimate(e, d.vars.pauseOnAction, !1, !0);
//                         break;
//                     case "play":
//                         c.playing || c.asNav || c.play();
//                         break;
//                     case "pause":
//                         c.pause()
//                 }
//             },
//             uniqueID: function(b) {
//                 return b.filter("[id]").add(b.find("[id]")).each(function() {
//                     var b = a(this);
//                     b.attr("id", b.attr("id") + "_clone")
//                 }), b
//             },
//             pauseInvisible: {
//                 visProp: null,
//                 init: function() {
//                     var a = p.pauseInvisible.getHiddenProp();
//                     if (a) {
//                         var b = a.replace(/[H|h]idden/, "") + "visibilitychange";
//                         document.addEventListener(b, function() {
//                             p.pauseInvisible.isHidden() ? d.startTimeout ? clearTimeout(d.startTimeout) : d.pause() : d.started ? d.play() : d.vars.initDelay > 0 ? setTimeout(d.play, d.vars.initDelay) : d.play()
//                         })
//                     }
//                 },
//                 isHidden: function() {
//                     var a = p.pauseInvisible.getHiddenProp();
//                     return a ? document[a] : !1
//                 },
//                 getHiddenProp: function() {
//                     var a = ["webkit", "moz", "ms", "o"];
//                     if ("hidden" in document) return "hidden";
//                     for (var b = 0; b < a.length; b++)
//                         if (a[b] + "Hidden" in document) return a[b] + "Hidden";
//                     return null
//                 }
//             },
//             setToClearWatchedEvent: function() {
//                 clearTimeout(e), e = setTimeout(function() {
//                     j = ""
//                 }, 3e3)
//             }
//         }, d.flexAnimate = function(b, c, e, g, i) {
//             if (d.vars.animationLoop || b === d.currentSlide || (d.direction = b > d.currentSlide ? "next" : "prev"), o && 1 === d.pagingCount && (d.direction = d.currentItem < b ? "next" : "prev"), !d.animating && (d.canAdvance(b, i) || e) && d.is(":visible")) {
//                 if (o && g) {
//                     var j = a(d.vars.asNavFor).data("flexslider");
//                     if (d.atEnd = 0 === b || b === d.count - 1, j.flexAnimate(b, !0, !1, !0, i), d.direction = d.currentItem < b ? "next" : "prev", j.direction = d.direction, Math.ceil((b + 1) / d.visible) - 1 === d.currentSlide || 0 === b) return d.currentItem = b, d.slides.removeClass(f + "active-slide").eq(b).addClass(f + "active-slide"), !1;
//                     d.currentItem = b, d.slides.removeClass(f + "active-slide").eq(b).addClass(f + "active-slide"), b = Math.floor(b / d.visible)
//                 }
//                 if (d.animating = !0, d.animatingTo = b, c && d.pause(), d.vars.before(d), d.syncExists && !i && p.sync("animate"), d.vars.controlNav && p.controlNav.active(), m || d.slides.removeClass(f + "active-slide").eq(b).addClass(f + "active-slide"), d.atEnd = 0 === b || b === d.last, d.vars.directionNav && p.directionNav.update(), b === d.last && (d.vars.end(d), d.vars.animationLoop || d.pause()), n) h ? (d.slides.eq(d.currentSlide).css({
//                     opacity: 0,
//                     zIndex: 1
//                 }), d.slides.eq(b).css({
//                     opacity: 1,
//                     zIndex: 2
//                 }), d.wrapup(t)) : (d.slides.eq(d.currentSlide).css({
//                     zIndex: 1
//                 }).animate({
//                     opacity: 0
//                 }, d.vars.animationSpeed, d.vars.easing), d.slides.eq(b).css({
//                     zIndex: 2
//                 }).animate({
//                     opacity: 1
//                 }, d.vars.animationSpeed, d.vars.easing, d.wrapup));
//                 else {
//                     var q, r, s, t = k ? d.slides.filter(":first").height() : d.computedW;
//                     m ? (q = d.vars.itemMargin, s = (d.itemW + q) * d.move * d.animatingTo, r = s > d.limit && 1 !== d.visible ? d.limit : s) : r = 0 === d.currentSlide && b === d.count - 1 && d.vars.animationLoop && "next" !== d.direction ? l ? (d.count + d.cloneOffset) * t : 0 : d.currentSlide === d.last && 0 === b && d.vars.animationLoop && "prev" !== d.direction ? l ? 0 : (d.count + 1) * t : l ? (d.count - 1 - b + d.cloneOffset) * t : (b + d.cloneOffset) * t, d.setProps(r, "", d.vars.animationSpeed), d.transitions ? (d.vars.animationLoop && d.atEnd || (d.animating = !1, d.currentSlide = d.animatingTo), d.container.unbind("webkitTransitionEnd transitionend"), d.container.bind("webkitTransitionEnd transitionend", function() {
//                         clearTimeout(d.ensureAnimationEnd), d.wrapup(t)
//                     }), clearTimeout(d.ensureAnimationEnd), d.ensureAnimationEnd = setTimeout(function() {
//                         d.wrapup(t)
//                     }, d.vars.animationSpeed + 100)) : d.container.animate(d.args, d.vars.animationSpeed, d.vars.easing, function() {
//                         d.wrapup(t)
//                     })
//                 }
//                 d.vars.smoothHeight && p.smoothHeight(d.vars.animationSpeed)
//             }
//         }, d.wrapup = function(a) {
//             n || m || (0 === d.currentSlide && d.animatingTo === d.last && d.vars.animationLoop ? d.setProps(a, "jumpEnd") : d.currentSlide === d.last && 0 === d.animatingTo && d.vars.animationLoop && d.setProps(a, "jumpStart")), d.animating = !1, d.currentSlide = d.animatingTo, d.vars.after(d)
//         }, d.animateSlides = function() {
//             !d.animating && q && d.flexAnimate(d.getTarget("next"))
//         }, d.pause = function() {
//             clearInterval(d.animatedSlides), d.animatedSlides = null, d.playing = !1, d.vars.pausePlay && p.pausePlay.update("play"), d.syncExists && p.sync("pause")
//         }, d.play = function() {
//             d.playing && clearInterval(d.animatedSlides), d.animatedSlides = d.animatedSlides || setInterval(d.animateSlides, d.vars.slideshowSpeed), d.started = d.playing = !0, d.vars.pausePlay && p.pausePlay.update("pause"), d.syncExists && p.sync("play")
//         }, d.stop = function() {
//             d.pause(), d.stopped = !0
//         }, d.canAdvance = function(a, b) {
//             var c = o ? d.pagingCount - 1 : d.last;
//             return b ? !0 : o && d.currentItem === d.count - 1 && 0 === a && "prev" === d.direction ? !0 : o && 0 === d.currentItem && a === d.pagingCount - 1 && "next" !== d.direction ? !1 : a !== d.currentSlide || o ? d.vars.animationLoop ? !0 : d.atEnd && 0 === d.currentSlide && a === c && "next" !== d.direction ? !1 : d.atEnd && d.currentSlide === c && 0 === a && "next" === d.direction ? !1 : !0 : !1
//         }, d.getTarget = function(a) {
//             return d.direction = a, "next" === a ? d.currentSlide === d.last ? 0 : d.currentSlide + 1 : 0 === d.currentSlide ? d.last : d.currentSlide - 1
//         }, d.setProps = function(a, b, c) {
//             var e = function() {
//                 var c = a ? a : (d.itemW + d.vars.itemMargin) * d.move * d.animatingTo,
//                     e = function() {
//                         if (m) return "setTouch" === b ? a : l && d.animatingTo === d.last ? 0 : l ? d.limit - (d.itemW + d.vars.itemMargin) * d.move * d.animatingTo : d.animatingTo === d.last ? d.limit : c;
//                         switch (b) {
//                             case "setTotal":
//                                 return l ? (d.count - 1 - d.currentSlide + d.cloneOffset) * a : (d.currentSlide + d.cloneOffset) * a;
//                             case "setTouch":
//                                 return l ? a : a;
//                             case "jumpEnd":
//                                 return l ? a : d.count * a;
//                             case "jumpStart":
//                                 return l ? d.count * a : a;
//                             default:
//                                 return a
//                         }
//                     }();
//                 return -1 * e + "px"
//             }();
//             d.transitions && (e = k ? "translate3d(0," + e + ",0)" : "translate3d(" + e + ",0,0)", c = void 0 !== c ? c / 1e3 + "s" : "0s", d.container.css("-" + d.pfx + "-transition-duration", c), d.container.css("transition-duration", c)), d.args[d.prop] = e, (d.transitions || void 0 === c) && d.container.css(d.args), d.container.css("transform", e)
//         }, d.setup = function(b) {
//             if (n) d.slides.css({
//                 width: "100%",
//                 "float": "left",
//                 marginRight: "-100%",
//                 position: "relative"
//             }), "init" === b && (h ? d.slides.css({
//                 opacity: 0,
//                 display: "block",
//                 webkitTransition: "opacity " + d.vars.animationSpeed / 1e3 + "s ease",
//                 zIndex: 1
//             }).eq(d.currentSlide).css({
//                 opacity: 1,
//                 zIndex: 2
//             }) : 0 == d.vars.fadeFirstSlide ? d.slides.css({
//                 opacity: 0,
//                 display: "block",
//                 zIndex: 1
//             }).eq(d.currentSlide).css({
//                 zIndex: 2
//             }).css({
//                 opacity: 1
//             }) : d.slides.css({
//                 opacity: 0,
//                 display: "block",
//                 zIndex: 1
//             }).eq(d.currentSlide).css({
//                 zIndex: 2
//             }).animate({
//                 opacity: 1
//             }, d.vars.animationSpeed, d.vars.easing)), d.vars.smoothHeight && p.smoothHeight();
//             else {
//                 var c, e;
//                 "init" === b && (d.viewport = a('<div class="' + f + 'viewport"></div>').css({
//                     overflow: "hidden",
//                     position: "relative"
//                 }).appendTo(d).append(d.container), d.cloneCount = 0, d.cloneOffset = 0, l && (e = a.makeArray(d.slides).reverse(), d.slides = a(e), d.container.empty().append(d.slides))), d.vars.animationLoop && !m && (d.cloneCount = 2, d.cloneOffset = 1, "init" !== b && d.container.find(".clone").remove(), d.container.append(p.uniqueID(d.slides.first().clone().addClass("clone")).attr("aria-hidden", "true")).prepend(p.uniqueID(d.slides.last().clone().addClass("clone")).attr("aria-hidden", "true"))), d.newSlides = a(d.vars.selector, d), c = l ? d.count - 1 - d.currentSlide + d.cloneOffset : d.currentSlide + d.cloneOffset, k && !m ? (d.container.height(200 * (d.count + d.cloneCount) + "%").css("position", "absolute").width("100%"), setTimeout(function() {
//                     d.newSlides.css({
//                         display: "block"
//                     }), d.doMath(), d.viewport.height(d.h), d.setProps(c * d.h, "init")
//                 }, "init" === b ? 100 : 0)) : (d.container.width(200 * (d.count + d.cloneCount) + "%"), d.setProps(c * d.computedW, "init"), setTimeout(function() {
//                     d.doMath(), d.newSlides.css({
//                         width: d.computedW,
//                         "float": "left",
//                         display: "block"
//                     }), d.vars.smoothHeight && p.smoothHeight()
//                 }, "init" === b ? 100 : 0))
//             }
//             m || d.slides.removeClass(f + "active-slide").eq(d.currentSlide).addClass(f + "active-slide"), d.vars.init(d)
//         }, d.doMath = function() {
//             var a = d.slides.first(),
//                 b = d.vars.itemMargin,
//                 c = d.vars.minItems,
//                 e = d.vars.maxItems;
//             d.w = void 0 === d.viewport ? d.width() : d.viewport.width(), d.h = a.height(), d.boxPadding = a.outerWidth() - a.width(), m ? (d.itemT = d.vars.itemWidth + b, d.minW = c ? c * d.itemT : d.w, d.maxW = e ? e * d.itemT - b : d.w, d.itemW = d.minW > d.w ? (d.w - b * (c - 1)) / c : d.maxW < d.w ? (d.w - b * (e - 1)) / e : d.vars.itemWidth > d.w ? d.w : d.vars.itemWidth, d.visible = Math.floor(d.w / d.itemW), d.move = d.vars.move > 0 && d.vars.move < d.visible ? d.vars.move : d.visible, d.pagingCount = Math.ceil((d.count - d.visible) / d.move + 1), d.last = d.pagingCount - 1, d.limit = 1 === d.pagingCount ? 0 : d.vars.itemWidth > d.w ? d.itemW * (d.count - 1) + b * (d.count - 1) : (d.itemW + b) * d.count - d.w - b) : (d.itemW = d.w, d.pagingCount = d.count, d.last = d.count - 1), d.computedW = d.itemW - d.boxPadding
//         }, d.update = function(a, b) {
//             d.doMath(), m || (a < d.currentSlide ? d.currentSlide += 1 : a <= d.currentSlide && 0 !== a && (d.currentSlide -= 1), d.animatingTo = d.currentSlide), d.vars.controlNav && !d.manualControls && ("add" === b && !m || d.pagingCount > d.controlNav.length ? p.controlNav.update("add") : ("remove" === b && !m || d.pagingCount < d.controlNav.length) && (m && d.currentSlide > d.last && (d.currentSlide -= 1, d.animatingTo -= 1), p.controlNav.update("remove", d.last))), d.vars.directionNav && p.directionNav.update()
//         }, d.addSlide = function(b, c) {
//             var e = a(b);
//             d.count += 1, d.last = d.count - 1, k && l ? void 0 !== c ? d.slides.eq(d.count - c).after(e) : d.container.prepend(e) : void 0 !== c ? d.slides.eq(c).before(e) : d.container.append(e), d.update(c, "add"), d.slides = a(d.vars.selector + ":not(.clone)", d), d.setup(), d.vars.added(d)
//         }, d.removeSlide = function(b) {
//             var c = isNaN(b) ? d.slides.index(a(b)) : b;
//             d.count -= 1, d.last = d.count - 1, isNaN(b) ? a(b, d.slides).remove() : k && l ? d.slides.eq(d.last).remove() : d.slides.eq(b).remove(), d.doMath(), d.update(c, "remove"), d.slides = a(d.vars.selector + ":not(.clone)", d), d.setup(), d.vars.removed(d)
//         }, p.init()
//     }, a(window).blur(function() {
//         focused = !1
//     }).focus(function() {
//         focused = !0
//     }), a.flexslider.defaults = {
//         namespace: "flex-",
//         selector: ".slides > li",
//         animation: "fade",
//         easing: "swing",
//         direction: "horizontal",
//         reverse: !1,
//         animationLoop: !0,
//         smoothHeight: !1,
//         startAt: 0,
//         slideshow: !0,
//         slideshowSpeed: 7e3,
//         animationSpeed: 600,
//         initDelay: 0,
//         randomize: !1,
//         fadeFirstSlide: !0,
//         thumbCaptions: !1,
//         pauseOnAction: !0,
//         pauseOnHover: !1,
//         pauseInvisible: !0,
//         useCSS: !0,
//         touch: !0,
//         video: !1,
//         controlNav: !0,
//         directionNav: !0,
//         prevText: "Previous",
//         nextText: "Next",
//         keyboard: !0,
//         multipleKeyboard: !1,
//         mousewheel: !1,
//         pausePlay: !1,
//         pauseText: "Pause",
//         playText: "Play",
//         controlsContainer: "",
//         manualControls: "",
//         sync: "",
//         asNavFor: "",
//         itemWidth: 0,
//         itemMargin: 0,
//         minItems: 1,
//         maxItems: 0,
//         move: 0,
//         allowOneSlide: !0,
//         start: function() {},
//         before: function() {},
//         after: function() {},
//         end: function() {},
//         added: function() {},
//         removed: function() {},
//         init: function() {}
//     }, a.fn.flexslider = function(b) {
//         if (void 0 === b && (b = {}), "object" == typeof b) return this.each(function() {
//             var c = a(this),
//                 d = b.selector ? b.selector : ".slides > li",
//                 e = c.find(d);
//             1 === e.length && b.allowOneSlide === !0 || 0 === e.length ? (e.fadeIn(400), b.start && b.start(c)) : void 0 === c.data("flexslider") && new a.flexslider(this, b)
//         });
//         var c = a(this).data("flexslider");
//         switch (b) {
//             case "play":
//                 c.play();
//                 break;
//             case "pause":
//                 c.pause();
//                 break;
//             case "stop":
//                 c.stop();
//                 break;
//             case "next":
//                 c.flexAnimate(c.getTarget("next"), !0);
//                 break;
//             case "prev":
//             case "previous":
//                 c.flexAnimate(c.getTarget("prev"), !0);
//                 break;
//             default:
//                 "number" == typeof b && c.flexAnimate(b, !0)
//         }
//     }
// }(jQuery),
// function() {
//     function a() {
//         var a = !1;
//         a && j("keydown", e), s.keyboardSupport && !a && i("keydown", e)
//     }

//     function b() {
//         if (document.body) {
//             var b = document.body,
//                 c = document.documentElement,
//                 d = window.innerHeight,
//                 e = b.scrollHeight;
//             if (x = document.compatMode.indexOf("CSS") >= 0 ? c : b, q = b, a(), w = !0, top != self) u = !0;
//             else if (e > d && (b.offsetHeight <= d || c.offsetHeight <= d)) {
//                 var f = !1,
//                     g = function() {
//                         f || c.scrollHeight == document.height || (f = !0, setTimeout(function() {
//                             c.style.height = document.height + "px", f = !1
//                         }, 500))
//                     };
//                 if (c.style.height = "auto", setTimeout(g, 10), x.offsetHeight <= d) {
//                     var h = document.createElement("div");
//                     h.style.clear = "both", b.appendChild(h)
//                 }
//             }
//             s.fixedBackground || t || (b.style.backgroundAttachment = "scroll", c.style.backgroundAttachment = "scroll")
//         }
//     }

//     function c(a, b, c, d) {
//         if (d || (d = 1e3), l(b, c), 1 != s.accelerationMax) {
//             var e = +new Date,
//                 f = e - C;
//             if (f < s.accelerationDelta) {
//                 var g = (1 + 30 / f) / 2;
//                 g > 1 && (g = Math.min(g, s.accelerationMax), b *= g, c *= g)
//             }
//             C = +new Date
//         }
//         if (A.push({
//                 x: b,
//                 y: c,
//                 lastX: 0 > b ? .99 : -.99,
//                 lastY: 0 > c ? .99 : -.99,
//                 start: +new Date
//             }), !B) {
//             var h = a === document.body,
//                 i = function() {
//                     for (var e = +new Date, f = 0, g = 0, j = 0; j < A.length; j++) {
//                         var k = A[j],
//                             l = e - k.start,
//                             m = l >= s.animationTime,
//                             n = m ? 1 : l / s.animationTime;
//                         s.pulseAlgorithm && (n = p(n));
//                         var o = k.x * n - k.lastX >> 0,
//                             q = k.y * n - k.lastY >> 0;
//                         f += o, g += q, k.lastX += o, k.lastY += q, m && (A.splice(j, 1), j--)
//                     }
//                     h ? window.scrollBy(f, g) : (f && (a.scrollLeft += f), g && (a.scrollTop += g)), b || c || (A = []), A.length ? G(i, a, d / s.frameRate + 1) : B = !1
//                 };
//             G(i, a, 0), B = !0
//         }
//     }

//     function d(a) {
//         w || b();
//         var d = a.target,
//             e = h(d);
//         if (!e || a.defaultPrevented || k(q, "embed") || k(d, "embed") && /\.pdf/i.test(d.src)) return !0;
//         var f = a.wheelDeltaX || 0,
//             g = a.wheelDeltaY || 0;
//         return f || g || (g = a.wheelDelta || 0), !s.touchpadSupport && m(g) ? !0 : (Math.abs(f) > 1.2 && (f *= s.stepSize / 120), Math.abs(g) > 1.2 && (g *= s.stepSize / 120), c(e, -f, -g), void a.preventDefault())
//     }

//     function e(a) {
//         var b = a.target,
//             d = a.ctrlKey || a.altKey || a.metaKey || a.shiftKey && a.keyCode !== z.spacebar;
//         if (/input|textarea|select|embed/i.test(b.nodeName) || b.isContentEditable || a.defaultPrevented || d) return !0;
//         if (k(b, "button") && a.keyCode === z.spacebar) return !0;
//         var e, f = 0,
//             g = 0,
//             i = h(q),
//             j = i.clientHeight;
//         switch (i == document.body && (j = window.innerHeight), a.keyCode) {
//             case z.up:
//                 g = -s.arrowScroll;
//                 break;
//             case z.down:
//                 g = s.arrowScroll;
//                 break;
//             case z.spacebar:
//                 e = a.shiftKey ? 1 : -1, g = -e * j * .9;
//                 break;
//             case z.pageup:
//                 g = .9 * -j;
//                 break;
//             case z.pagedown:
//                 g = .9 * j;
//                 break;
//             case z.home:
//                 g = -i.scrollTop;
//                 break;
//             case z.end:
//                 var l = i.scrollHeight - i.scrollTop - j;
//                 g = l > 0 ? l + 10 : 0;
//                 break;
//             case z.left:
//                 f = -s.arrowScroll;
//                 break;
//             case z.right:
//                 f = s.arrowScroll;
//                 break;
//             default:
//                 return !0
//         }
//         c(i, f, g), a.preventDefault()
//     }

//     function f(a) {
//         q = a.target
//     }

//     function g(a, b) {
//         for (var c = a.length; c--;) D[F(a[c])] = b;
//         return b
//     }

//     function h(a) {
//         var b = [],
//             c = x.scrollHeight;
//         do {
//             var d = D[F(a)];
//             if (d) return g(b, d);
//             if (b.push(a), c === a.scrollHeight) {
//                 if (!u || x.clientHeight + 10 < c) return g(b, document.body)
//             } else if (a.clientHeight + 10 < a.scrollHeight && (overflow = getComputedStyle(a, "").getPropertyValue("overflow-y"), "scroll" === overflow || "auto" === overflow)) return g(b, a)
//         } while (a = a.parentNode)
//     }

//     function i(a, b, c) {
//         window.addEventListener(a, b, c || !1)
//     }

//     function j(a, b, c) {
//         window.removeEventListener(a, b, c || !1)
//     }

//     function k(a, b) {
//         return (a.nodeName || "").toLowerCase() === b.toLowerCase()
//     }

//     function l(a, b) {
//         a = a > 0 ? 1 : -1, b = b > 0 ? 1 : -1, (v.x !== a || v.y !== b) && (v.x = a, v.y = b, A = [], C = 0)
//     }

//     function m(a) {
//         if (a) {
//             a = Math.abs(a), y.push(a), y.shift(), clearTimeout(E);
//             var b = n(y[0], 120) && n(y[1], 120) && n(y[2], 120);
//             return !b
//         }
//     }

//     function n(a, b) {
//         return Math.floor(a / b) == a / b
//     }

//     function o(a) {
//         var b, c, d;
//         return a *= s.pulseScale, 1 > a ? b = a - (1 - Math.exp(-a)) : (c = Math.exp(-1), a -= 1, d = 1 - Math.exp(-a), b = c + d * (1 - c)), b * s.pulseNormalize
//     }

//     function p(a) {
//         return a >= 1 ? 1 : 0 >= a ? 0 : (1 == s.pulseNormalize && (s.pulseNormalize /= o(1)), o(a))
//     }
//     var q, r = {
//             frameRate: 50,
//             animationTime: 800,
//             stepSize: 60,
//             pulseAlgorithm: !0,
//             pulseScale: 8,
//             pulseNormalize: 1,
//             accelerationDelta: 20,
//             accelerationMax: 1,
//             keyboardSupport: !0,
//             arrowScroll: 50,
//             touchpadSupport: !0,
//             fixedBackground: !0,
//             excluded: ""
//         },
//         s = r,
//         t = !1,
//         u = !1,
//         v = {
//             x: 0,
//             y: 0
//         },
//         w = !1,
//         x = document.documentElement,
//         y = [120, 120, 120],
//         z = {
//             left: 37,
//             up: 38,
//             right: 39,
//             down: 40,
//             spacebar: 32,
//             pageup: 33,
//             pagedown: 34,
//             end: 35,
//             home: 36
//         },
//         s = r,
//         A = [],
//         B = !1,
//         C = +new Date,
//         D = {};
//     setInterval(function() {
//         D = {}
//     }, 1e4);
//     var E, F = function() {
//             var a = 0;
//             return function(b) {
//                 return b.uniqueID || (b.uniqueID = a++)
//             }
//         }(),
//         G = function() {
//             return window.requestAnimationFrame || window.webkitRequestAnimationFrame || function(a, b, c) {
//                 window.setTimeout(a, c || 1e3 / 60)
//             }
//         }(),
//         H = /chrome/i.test(window.navigator.userAgent),
//         I = null;
//     "onwheel" in document.createElement("div") ? I = "wheel" : "onmousewheel" in document.createElement("div") && (I = "mousewheel"), I && H && (i(I, d), i("mousedown", f), i("load", b))
// }();
