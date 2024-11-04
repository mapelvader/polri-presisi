const counterUp = window.counterUp.default

const el = document.querySelector( '.myChartText' )

let heightOfText = $(".myChartText").position().top;
$('#IKMM').scroll(function(){

	counterUp( el, {
	    duration: 1500,
	    delay: 16,
	})	
})
