$(document).ready(function() {

    if (
        $(window).load(function() {
            $("#preloader").fadeOut("slow", function() {
                $(this).remove();
            });
        })
    );

    $(".page3-S4__gas").on("click", function() {
        $(".page3-S4__smoke").addClass("smokeClick");
        $(this).addClass("gasClick");
        $('.page3-S4__pointer').hide();
    });

    $(".page3-S7__item--box1").on("click", function() {
        $(".page3-S7__item--modal1").addClass("page3-S7__click");
    });
    $(".page3-S7__item--box2").on("click", function() {
        $(".page3-S7__item--modal2").addClass("page3-S7__click");
    });


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
    var redPos8 = $('#triger81').offset().top - $(window).scrollTop();
    var redPos9 = $('#triger82').offset().top - $(window).scrollTop();
    var redPos10 = $('#triger10').offset().top - $(window).scrollTop();

    var redGone8;
    var redGone9;
    var redGone10;

    if (redPos8 < 0) {
        redGone8 = true;
        $('.page3-S8__text1').addClass('changeText1');
        $('.page3-S8__text2').addClass('changeText2');

    } else {
        redGone8 = false;
        $('.page3-S8__text1').removeClass('changeText1');
        $('.page3-S8__text2').removeClass('changeText2');
    }
    if (redPos9 < 0) {
        redGone9 = true;
        $('.page3-S8__text2').addClass('changeText3');
        $('.page3-S8__text3').addClass('changeText4');
    } else {
        redGone9 = false;
        $('.page3-S8__text2').removeClass('changeText3');
        $('.page3-S8__text3').removeClass('changeText4');
    }
    if (redPos10 < 0) {
        redGone10 = true;
        $('.page3-S9__text1').addClass('changeText5');
        $('.page3-S9__text2').addClass('changeText6');
    } else {
        redGone10 = false;
        $('.page3-S9__text1').removeClass('changeText5');
        $('.page3-S9__text2').removeClass('changeText6');
    }

}


scrollBoss();
$(window).scroll(scrollBoss);

// game 
function games_answer2(answer) {

    if (answer == 'd') {
        document.getElementById("pil2_d").children[1].style.backgroundColor = "#39EA34";
        document.getElementById("games_image2").src = "assets/images/page3/section6/police1.png";
        close_option2(answer);
    } else {
        document.getElementById("pil2_" + answer).children[1].style.backgroundColor = "#FF3E3E";
        document.getElementById("pil2_d").children[1].style.backgroundColor = "#39EA34";
        document.getElementById("games_image2").src = "assets/images/page3/section6/police2.png";
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