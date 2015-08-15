! function(a) {
    "use strict";
    var b = function() {
        var b = function() {
                function b() {
                    var b = a("#header").outerHeight() - a(".primary-menu").outerHeight();
                    a(window).scrollTop() > b ? a("body").addClass("header-fixed") : a("body").removeClass("header-fixed")
                }
                a(window).scroll(function() {
                    b()
                })
            },
            c = function() {
                a("[data-type]").each(function() {
                    a(this).data("offsetY", parseInt(a(this).attr("data-offsetY"))), a(this).data("Xposition", a(this).attr("data-Xposition")), a(this).data("speed", a(this).attr("data-speed"))
                }), a('[data-type="background"]').each(function() {
                    {
                        var b = a(this),
                            c = b.offset();
                        c.top
                    }
                    a(window).scroll(function() {
                        var c = -(a(window).scrollTop() / b.data("speed"));
                        b.data("offsetY") && (c += b.data("offsetY"));
                        var d = "50% " + c + "px";
                        b.css({
                            backgroundPosition: d
                        })
                    })
                })
            },
            e = function() {
                a(".menu-mobile-open").on("click", function() {
                    return a("#menu-mobile").fadeIn(), !1
                }), a(".menu-mobile-close").on("click", function() {
                    return a("#menu-mobile").fadeOut(), !1
                }), a("#menu-mobile .menu > li.menu-item-has-children > a").on("click", function() {
                    return a(this).parent("li").find(".sub-menu").slideToggle(), !1
                })
            },
            f = function() {
                b(), c(), e()
            };
        return {
            init: f
        }
    }();
    b.init()
}(jQuery);
