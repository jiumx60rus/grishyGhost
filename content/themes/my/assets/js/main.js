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
                /* * * CONFIGURATION VARIABLES * * */
                var disqus_shortname = 'grishyru';

                /* * * DON'T EDIT BELOW THIS LINE * * */
                (function() {
                    var dsq = document.createElement('script');
                    dsq.type = 'text/javascript';
                    dsq.async = true;
                    dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
                    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
                })();
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
