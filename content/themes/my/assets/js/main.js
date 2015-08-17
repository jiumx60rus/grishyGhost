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
                $('.post-comments > .button').click(function() {
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
                    
                    $(".disqus_thread").show();
                    $(this).html('<i class="fa fa-comments"></i> Комментарии')
                });
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
// r = function() {
//     if (0 != $(".comments").length && "" != config.disqus_shortname && null != config.disqus_shortname &&
//         void 0 != config.disqus_shortname || 1 == config.google_comments)
//         if ("" != config.disqus_shortname) {
//             var a = config.disqus_shortname;
//             ! function() {
//                 var b = document.createElement("script");
//                 b.type = "text/javascript", b.async = !0, b.src = "//" + a + ".disqus.com/embed.js", (document.getElementsByTagName(
//                     "head")[0] || document.getElementsByTagName("body")[0]).appendChild(b)
//             }()
//         } else 1 == config.google_comments && $.getScript("https://apis.google.com/js/plusone.js").done(
//             function(a, b) {
//                 gapi.comments.render("g-comments", {
//                     href: window.location,
//                     width: "760",
//                     first_party_property: "BLOGGER",
//                     view_type: "FILTERED_POSTMOD"
//                 })
//             });
//     $(".disqus_thread, #g-comments").show(), $(".comments .graybar").html(
//         '<i class="fa fa-comments"></i>Comments')
// }

// r = function() {
//     $('.post-comments .button').click(function() {
//         alert('Вы нажали на элемент "foo"');
//     });
//     console.log(123);
// }
