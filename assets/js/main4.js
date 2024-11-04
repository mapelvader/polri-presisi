$(document).ready(function() {

    if (
        $(window).load(function() {
            $("#preloader").fadeOut("slow", function() {
                $(this).remove();
            });
        })
    );

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

// parallax
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


function scrollBoss() {
    var redPospage4 = $('#trigerpage4').offset().top - $(window).scrollTop();


    var redGonepage4;


    if (redPospage4 < 0) {
        redGonepage4 = true;
        $('.content__bg__police-S4').show('300');
        $('.content__bg__text-S4').show('300');

    } else {
        redGonepage4 = false;
        $('.content__bg__police-S4').hide('300');
        $('.content__bg__text-S4').hide('300');
    }

}


scrollBoss();
$(window).scroll(scrollBoss);

// game 
function games_answer2(answer) {

    if (answer == 'b') {
        document.getElementById("pil2_b").children[1].style.backgroundColor = "#39EA34";
        document.getElementById("games_image2").src = "assets/images/page4/section7/police2.png";
        close_option2(answer);
    } else {
        document.getElementById("pil2_" + answer).children[1].style.backgroundColor = "#FF3E3E";
        document.getElementById("pil2_b").children[1].style.backgroundColor = "#39EA34";
        document.getElementById("games_image2").src = "assets/images/page4/section7/police3.png";
        close_option2(answer);
    }

}

function open_option2(opt) {
    document.getElementById("option2-" + opt).style.display = 'flex';
}

function close_option2(opt) {
    document.getElementById("option2-" + opt).style.display = 'none';
}


$('[open-modal]').on('click', function() {
    var id = $(this).attr('open-modal');
    $('.modal#' + id).addClass('active');
});

$('[close-modal]').on('click', function() {
    $(this).parents('.modal').removeClass('active');
});

$('.modal').on('click', function(e) {
    if (e.target !== this) {
        return
    };
    $(this).removeClass('active');
});

var counted = 0;
var counted1 = 0;
var counted2 = 0;
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
            counted = 1;

        });
    }
    var oTop1 = $('#counter2').offset().top - window.innerHeight;
    if (counted1 == 0 && $(window).scrollTop() > oTop1) {
        var statistics = $(".statistic");

        statistics.each(function(index) {
            var value = $(statistics[index]).html();
            var statisticAnimation = new CountUp(statistics[index], 0, value, 0, 5, options);
            statisticAnimation.start();
        });
        counted1 = 1;
    }
    var oTop2 = $('#counter3').offset().top - window.innerHeight;
    if (counted2 == 0 && $(window).scrollTop() > oTop2) {
        var statistics = $(".statistic2");

        statistics.each(function(index) {
            var value = $(statistics[index]).html();
            var statisticAnimation = new CountUp(statistics[index], 0, value, 0, 5, options);
            statisticAnimation.start();
        });
        counted2 = 1;
    }

});


var mySwiper = new Swiper(".slide2", {
    spaceBetween: 1,
    slidesPerView: 1,
    centeredSlides: true,
    roundLengths: true,
    loop: true,
    loopAdditionalSlides: 30,
    speed: 1000,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
var options = {
    useEasing: true,
    useGrouping: true,
    separator: ".",
    decimal: "."
};