function games_answer(answer){

	if(answer == 'b'){
		document.getElementById("pil_b").children[1].style.backgroundColor = "rgba(41, 255, 41, 1)";
		document.getElementById("games_image").src = "assets/images/ill_polisi_benar.png";
		close_option(answer);
	}else{
		document.getElementById("pil_"+answer).children[1].style.backgroundColor = "red";
		document.getElementById("pil_b").children[1].style.backgroundColor = "rgba(41, 255, 41, 1)";
		document.getElementById("games_image").src = "assets/images/ill_polisi_salah.png";
		close_option(answer);
	}
}
function open_option(opt){
	document.getElementById("option-"+opt).style.display = 'flex';
}
function close_option(opt){
	document.getElementById("option-"+opt).style.display = 'none';
}