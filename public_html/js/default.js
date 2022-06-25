(function(window, document, $, undefined) {
    var app = {
        WINDOW_HEIGHT: $(window).height(),
        WINDOW_WIDTH: $(window).width(),
        isMobile: false,
        isTouch: false,
        isTablet: false,
        resizeTimeoutID: null,
        $body: $("body"),
        detectDevice: function() {
            (function(a) {
                if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) {
                    app.isMobile = true;
                }
            })(navigator.userAgent || navigator.vendor || window.opera);
            if (navigator.userAgent.match(/Android/i)
                || navigator.userAgent.match(/webOS/i)
                || navigator.userAgent.match(/iPhone/i)
                || navigator.userAgent.match(/iPad/i)
                || navigator.userAgent.match(/iPod/i)
                || navigator.userAgent.match(/BlackBerry/i)
                || navigator.userAgent.match(/Windows Phone/i)
            ) {
                app.isTouch = true;
                app.$body.addClass("touch");
            }
            else {
                app.$body.addClass("no-touch");
            }
            app.isTablet = (!app.isMobile && app.isTouch);
        },
        _windowResize: function() {
            app.WINDOW_HEIGHT = $(window).height();
            app.WINDOW_WIDTH = $(window).width();
        },
        resizeListner: function() {
            if (!app.isTouch) {
                $(window).resize(function() {
                    clearTimeout(app.resizeTimeoutID);
                    app.resizeTimeoutID = setTimeout(app._windowResize, 500);
                });
            }
            else {
                window.addEventListener('orientationchange', function() {
                });
            }
        },
        addEventListner: function() {
            $(".sliderOuter2 img").click(function() {
                app._goToFullScreen($(this));
            });
            $(".overlay .close").click(function() {
                $(".overlay").fadeOut();
            });
        },
        msIeVersion: function() {
            var ua = window.navigator.userAgent,
                msie = ua.indexOf("MSIE ");
            if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
                $("body").addClass("ie");
            }
            return false;
        },
        bxSlider: function() {
            var img = $(".home-banner-section .bxslider li img")
            if (!(img.attr("data-mobile") == undefined && img.attr("data-desktop") == undefined && img.attr("data-tablet") == undefined)) {
                img.each(function() {
                    var $this = $(this);
                    if (app.isMobile) {
                        $this.attr("src", $this.attr("data-mobile"))
                    }
                    else if (app.isTablet) {
                        $this.attr("src", $this.attr("data-tablet"))
                    }
                    else {
                        $this.attr("src", $this.attr("data-desktop"))
                    }
                });
            }
            $('.bxslider').bxSlider({
                pagerCustom: '#bx-pager',
                auto: true,
                video: true,
                useCSS: false,
            pause: 8000
            });
        },
        init: function() {
            app.detectDevice();
            app.resizeListner();
            app.addEventListner();
            app.msIeVersion();
            //app.bxSlider();
        }
    };
    window.app = app;
})(window, document, jQuery);
$(document).ready(function() {
    app.init();
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 100) {
            $(".header-main").addClass("darkHeader");
        } else {
            $(".header-main").removeClass("darkHeader");
        }
    });
    $(function() {
        $('a[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });
    $('.bxslider2').bxSlider({
        nextSelector: '#slider-next',
        prevSelector: '#slider-prev',
        pager: false,
        nextText: 'Next',
        prevText: 'Pre',
        auto: true
    });
    $('.bxslider3').bxSlider({
        nextSelector: '#slider-next2',
        prevSelector: '#slider-prev2',
        pager: false,
        nextText: 'Next',
        prevText: 'Pre',
        minSlides: (app.isMobile) ? 1 : 3,
        maxSlides: (app.isMobile) ? 1 : 3,
        slideWidth: (app.isMobile) ? 587 : 360,
        slideMargin: (app.isMobile) ? 0 : 13,
        auto: true
    });
    $('.media-bxslider').bxSlider({
        pagerCustom: '#bx-page2',
        auto: true
    });
    $('.media-bxslider-nav').bxSlider({
        nextSelector: '#slider-next2',
        prevSelector: '#slider-prev2',
        pager: false,
        nextText: 'Next',
        prevText: 'Pre',
        minSlides: 4,
        maxSlides: 4,
        slideWidth: 299,
        slideMargin: 4,
        auto: false
    });
});
$(document).ready(function() {
    var accor = $(".accordion-main > ul > li > em"),
        disc = $(".disc"),
        accorActive = $(".accordion-main > ul > li > em.active");
    disc.first().show();
    accor.first().addClass("active");
    accor.click(function() {
        if (!$(this).hasClass("active")) {
            disc.slideUp();
            accor.removeClass("active");
            $(this).toggleClass("active").next().slideDown();
        }
        var $this = $(this),
            position = 0;
        setTimeout(function() {
            position = $this.offset().top;
            $("html, body").animate({
                scrollTop: position - 85
            }, 400);
        }, 400);
    });
});
$(document).ready(function() {
    /* var accor = $(".our-business-left-nav > ul > li > i"),
     disc = $(".our-business-left-nav > ul > li > ul"),
     accorActive = $(".our-business-left-nav > ul > li > i.active");

     accor.click(function () {
     if (!$(this).hasClass("active")) {
     disc.slideUp();
     accor.removeClass("active");
     $(this).toggleClass("active").next().slideDown();
     }
     });*/
    $('.our-business-left-nav ul li i').click(function() {
        var hasClass = $(this).hasClass('active');
        $('.our-business-left-nav ul li i').removeClass('active');
        if (hasClass) {
            $(this).removeClass('active');
            $('.our-business-left-nav ul li ul').slideUp();
        } else {
            $(this).addClass('active');
            $('.our-business-left-nav ul li ul').slideDown();
        }
    });
});
$(document).ready(function() {
    $('#media-filter-nav li a').click(function() {
        var ourClass = $(this).attr('class');
        $('#media-filter-nav li').removeClass('active');
        $(this).parent().addClass('active');
        if (ourClass == 'all') {
            $('#media-filter-data').children('li.item').show(1000);
        }
        else {
            $('#media-filter-data').children('li:not(.' + ourClass + ')').hide(1000);
            $('#media-filter-data').children('li.' + ourClass).show(1000);
        }
        return false;
    });
    $(".drop-down-select .selected-option span").click(function() {

        $(this).parent().parent().find(".drop-down-option ul").slideToggle();
        $(this).parent().parent().addClass("active-select");
    });
    $(".drop-down-select .drop-down-option ul li").click(function() {
        console.log("click");
        var text = $(this).html();
        $(this).parents(".drop-down-select").find(".selected-option span").html(text);
        $(this).parent().slideUp();
    });
});
//HIDE OPTIONS IF CLICKED ANYWHERE ELSE ON PAGE
$(document).bind('click', function(e) {
    var $clicked = $(e.target);
    if (!$clicked.parents().hasClass("drop-down-select"))
        $(".drop-down-select .drop-down-option ul").slideUp();
});
$(document).ready(function() {
    //nice = $(".location-map-section ul").niceScroll();
    //$(".our-business-section .video-img img").click(function () {
    //    $(".our-business-section .video-img img").fadeOut();
    //    $(".our-business-section .video-img iframe").fadeIn();
    //});
    /*$(".home-banner-section .bxslider li .banner-video img").click(function () {
     $(".home-banner-section .bxslider li .banner-video img").fadeOut();
     $(".home-banner-section .bxslider li .banner-video iframe").fadeIn();
     });*/
    $(".banner-video").click(function() {
        console.log("VDOImg");
        $(this).find("img").fadeOut();
        $(this).find("iframe").fadeIn();
    });
    $('.banner-video img').on('click', function(ev) {
        console.log("testing");
        $("#video")[0].src += "&autoplay=1";
        ev.preventDefault();
    });
    $(".mob-nav-icon").click(function() {
        ALTER (1);
        $(".for_use_mobie").toggleClass("mob-nav-on", 1500);
    });
});
(function() {
    "use strict";
    var toggles = document.querySelectorAll(".cmn-toggle-switch");
    for (var i = toggles.length - 1; i >= 0; i--) {
        var toggle = toggles[i];
        toggleHandler(toggle);
    }
    ;
    function toggleHandler(toggle) {
        toggle.addEventListener("click", function(e) {
            e.preventDefault();
            (this.classList.contains("active") === true) ? this.classList.remove("active") : this.classList.add("active");
            
        });
    }
})();
$(function() {
    var pgurl = window.location.href.substr(window.location.href
        .lastIndexOf("/") + 1);
    $(".nav ul li a").each(function() {
        if ($(this).attr("href") == pgurl || $(this).attr("href") == '')
            $(this).addClass("active");
    })
    var img = $(".static-banner img")
    if (!(img.attr("data-mobile") == undefined && img.attr("data-desktop") == undefined && img.attr("data-tablet") == undefined)) {
        img.each(function() {
            var $this = $(this);
            if (app.isMobile) {
                $this.attr("src", $this.attr("data-mobile"))
            }
            else if (app.isTablet) {
                $this.attr("src", $this.attr("data-tablet"))
            }
            else {
                $this.attr("src", $this.attr("data-desktop"))
            }
        });
    }
});