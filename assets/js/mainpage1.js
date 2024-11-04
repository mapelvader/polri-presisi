$(document).ready(function() {
    if (
        $(window).load(function() {
            $("#preloader").fadeOut("slow", function() {
                $(this).remove();
            });
        })
    );
    if (
        $(window).load(function() {
            $("#preloader2").fadeOut("slow", function() {
                $(this).remove();
            });
        })
    );

    $('.sub-menu').click(function() {
        location.reload();
    });

    var toggleHeight = $(window).outerHeight() * 1;

    $(window).scroll(function() {
        if ($(window).scrollTop() > toggleHeight) {
            $(".m-backtotop").addClass("active");
        } else {
            $(".m-backtotop").removeClass("active");
        }
    });

    $(".m-backtotop").click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, "slow");
        return false;
    });
    $('.list-header').on('click', function() {
        var $J_li = $(this).parents('.J_list');
        $J_li.hasClass('open') ? $J_li.removeClass('open') : $J_li.addClass('open');
    });

});

const tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: "bottom top",
        scrub: true
    }
});
gsap.utils.toArray(".parallax").forEach(layer => {
    const depth = layer.dataset.depth;
    const movement = -(layer.offsetHeight * depth);
    tl.to(layer, {
        y: movement,
        ease: "none"
    }, 0);
});

var b = document.getElementsByTagName("BODY")[0];
b.addEventListener("mousemove", function(event) {
    parallaxed(event);
});

function parallaxed(e) {
    var amountMovedX = (e.clientX * -0.3 / 8);
    var amountMovedY = (e.clientY * -0.3 / 8);
    var x = document.getElementsByClassName("parallaxed");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.transform = 'translate(' + amountMovedX + 'px,' + amountMovedY + 'px)'
    }
}

// var linklocation;
// $(document).ready(function() {

//     $(".next2").click(function(event) {
//         event.preventDefault();
//         linkLocation = this.href;
//         $(".transition").addClass("open-transition");
//         setTimeout(redirectPage, 200);
//     });

//     function redirectPage() {
//         window.location = linkLocation;
//     }
// });

// var jump = function(e) {
//     if (e) {
//         e.preventDefault();
//         var target = $(this).attr("href");
//     } else {
//         var target = location.hash;
//     }

//     $('html,body').animate({
//         scrollTop: $(target).offset().top
//     }, 2000, function() {
//         location.hash = target;
//     });

// }

// $('html, body').hide();

// $(document).ready(function() {
//     $('a[href^=#]').bind("click", jump);

//     if (location.hash) {
//         setTimeout(function() {
//             $('html, body').scrollTop(0).show();
//             jump();
//         }, 0);
//     } else {
//         $('html, body').show();
//     }
// });


var counted = 0;
$(window).scroll(function() {

    var oTop = $('#counter').offset().top - window.innerHeight;
    if (counted == 0 && $(window).scrollTop() > oTop) {
        $('.count').each(function() {
            var $this = $(this),
                countTo = $this.attr('data-count');
            $({
                countNum: $this.text()
            }).
            animate({
                countNum: countTo
            }, {

                duration: 2000,
                easing: 'swing',
                step: function() {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function() {
                    $this.text(this.countNum);
                }
            });


        });
        // 
        var statistics = $(".statistic");

        statistics.each(function(index) {
            var value = $(statistics[index]).html();
            var statisticAnimation = new CountUp(statistics[index], 0, value, 0, 5, options);
            statisticAnimation.start();
        });
        counted = 1;
    }

});
var options = {
    useEasing: true,
    useGrouping: true,
    separator: ".",
    decimal: "."
};