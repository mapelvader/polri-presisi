var header = $('.bgscene4'),
    blueSection = $('section.blue'),
    offset = blueSection.offset().top + blueSection.height() - header.height();
$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= offset) {
        header.addClass('darkhide');
    } else {
        header.removeClass('darkhide');
    }
});
var header2 = $('.bg-change'),
    blueSection2 = $('section.blue'),
    offset = blueSection2.offset().top + blueSection2.height() - header2.height();
$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= offset) {
        header2.addClass('changeShow');
    } else {
        header2.removeClass('changeShow');
    }
});
var header3 = $('.sticky-media7__next'),
    blueSection3 = $('section.bluenext'),
    offsett = blueSection3.offset().top + blueSection3.height() - header3.height();
$(window).scroll(function() {
    var scrollt = $(window).scrollTop();
    if (scrollt >= offsett) {
        header3.addClass('show-button');
    } else {
        header3.removeClass('show-button');
    }
});