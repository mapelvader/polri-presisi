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

    var redPos = $('#triger1').offset().top - $(window).scrollTop();
    var redPos2 = $('#triger2').offset().top - $(window).scrollTop();
    var redPos3 = $('#triger3').offset().top - $(window).scrollTop();
    var redPos4 = $('#triger4').offset().top - $(window).scrollTop();
    var redPos5 = $('#triger5').offset().top - $(window).scrollTop();
    var redPos6 = $('#triger6').offset().top - $(window).scrollTop();
    var redPos7 = $('#triger71').offset().top - $(window).scrollTop();

    var redGone;
    var redGone2;
    var redGone3;
    var redGone4;
    var redGone5;
    var redGone6;
    var redGone7;

    if (redPos < 0) {
        redGone = true;
        $('.content__bg__police').hide();
        $('.content__bg__police2').show(100);
        $('.content__bg__obj2').addClass('changePosition');
        $('.content__bg__police2').addClass('changePosition2');
        $('.content__bg__logo').addClass('changePosition3');
        $('.content6__bg__dialog').show(500);
        $('.cover2 .Scroll').hide();

    } else {
        redGone = false;
        $('.content__bg__obj2').removeClass('changePosition');
        $('.content__bg__police2').removeClass('changePosition2');
        $('.content__bg__logo').removeClass('changePosition3');
        $('.content6__bg__dialog').hide();
        $('.content__bg__police').show(300);
        $('.content__bg__police2').hide();
        $('.cover2 .Scroll').show();
    }

    if (redPos2 < 0) {
        redGone2 = true;
        $('.content__bg__police3').addClass('changeHide');
        $('.content__bg__police4').addClass('changeShow');
        $('.content__bg__obj4').show();

    } else {
        redGone2 = false;
        $('.content__bg__police3').removeClass('changeHide');
        $('.content__bg__police4').removeClass('changeShow');
        $('.content__bg__obj4').hide();

    }

    if (redPos3 < 0) {
        redGone3 = true;
        $('.content__bg__obj4').addClass('changeHide');
        $('.content__bg__police4').addClass('changePosition4');
        $('.content__bg__obj3').addClass('changePosition5');

    } else {
        redGone3 = false;
        $('.content__bg__police4').removeClass('changePosition4');
        $('.content__bg__obj3').removeClass('changePosition5');
        $('.content__bg__obj4').removeClass('changeHide');

    }
    if (redPos4 < 0) {
        redGone4 = true;
        $('.content__bg__obj5').addClass('changeShow');
        $('.content__bg__police4').addClass('changePosition6');
        $('.content__bg__obj3').addClass('changePosition7');

    } else {
        redGone4 = false;
        $('.content__bg__police4').removeClass('changePosition6');
        $('.content__bg__obj3').removeClass('changePosition7');
        $('.content__bg__obj5').removeClass('changeShow');

    }
    if (redPos5 < 0) {
        redGone5 = true;
        $('.content__bg__police4').addClass('changePosition8');
        $('.content__bg__obj3').addClass('changePosition9');
        $('.content__bg__obj5').addClass('changePosition10');

    } else {
        redGone5 = false;
        $('.content__bg__police4').removeClass('changePosition8');
        $('.content__bg__obj3').removeClass('changePosition9');
        $('.content__bg__obj5').removeClass('changePosition10');

    }
    if (redPos6 < 0) {
        redGone6 = true;
        $('.content__bg__obj7').addClass('changePosition11');
    } else {
        redGone6 = false;
        $('.content__bg__obj7').removeClass('changePosition11');

    }
    if (redPos7 < 0) {
        redGone7 = true;
        $('.content__bg__obj71').addClass('changePosition71');
        $('.content__bg__police71').hide();
        $('.content__bg__police72').show();

    } else {
        redGone7 = false;
        $('.content__bg__obj71').removeClass('changePosition71');
        $('.content__bg__police71').show();
        $('.content__bg__police72').hide();

    }
}

scrollBoss();
$(window).scroll(scrollBoss);

// game polwan 1
function games_answer(answer) {

    if (answer == 'a') {
        document.getElementById("pil_a").children[1].style.backgroundColor = "#39EA34";
        document.getElementById("games_image").src = "assets/images/page2/section4/police3.png";
        close_option(answer);
    } else {
        document.getElementById("pil_" + answer).children[1].style.backgroundColor = "#FF3E3E";
        document.getElementById("pil_a").children[1].style.backgroundColor = "#39EA34";
        document.getElementById("games_image").src = "assets/images/page2/section4/police2.png";
        close_option(answer);
    }

}

function open_option(opt) {
    document.getElementById("option-" + opt).style.display = 'flex';
}

function close_option(opt) {
    document.getElementById("option-" + opt).style.display = 'none';
}
// game polwan 2
function games_answer2(answer) {

    if (answer == 'b') {
        document.getElementById("pil2_b").children[1].style.backgroundColor = "#39EA34";
        document.getElementById("games_image2").src = "assets/images/page2/section4/police3.png";
        close_option2(answer);
    } else {
        document.getElementById("pil2_" + answer).children[1].style.backgroundColor = "#FF3E3E";
        document.getElementById("pil2_b").children[1].style.backgroundColor = "#39EA34";
        document.getElementById("games_image2").src = "assets/images/page2/section4/police2.png";
        close_option2(answer);
    }

}

function open_option2(opt) {
    document.getElementById("option2-" + opt).style.display = 'flex';
}

function close_option2(opt) {
    document.getElementById("option2-" + opt).style.display = 'none';
}


var mySwiper = new Swiper(".slide1", {
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