function replaceit(){
	var theoriginal = document.getElementById('original');
	var thereplacement = document.createElement('p');

	thereplacement.appendChild(document.createTextNode('Replacement Text'));
	theoriginal.replaceChild(thereplacement, theoriginal.lastChild);
}// JavaScript Document

function start(){
    var startButton = document.getElementById("startButton4");
    startButton.addEventListener("click", replaceit, false);
}

window.addEventListener("load", start, false);