function buttonPressed(){
    var linkCount = document.links;
    var inputColor = prompt("Enter a color name", "");

    for(var i = 0; i < linkCount.length; i++){
        var currentLink = linkCount[i];
        currentLink.setAttribute("style", "background-color:" + inputColor);
    }
}

function start(){
    var startButton = document.getElementById("startButton2");
    startButton.addEventListener("click", buttonPressed, false);
}

window.addEventListener("load", start, false);