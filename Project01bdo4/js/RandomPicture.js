var iconImg;
var pictures = ["Ganyu", "HuTao", "Raiden"];
var description = ["Genshin Impact Character - Ganyu", "Genshin Impact Character - HuTao", "Genshin Impact Character - Raiden"]

function pickImage(){
    var index = Math.floor(Math.random() * 3)
    iconImg.setAttribute("src", "img/" + pictures[index] + ".jpg");
    iconImg.setAttribute("alt", description[index]);
}

function start(){
    iconImg = document.getElementById("image");
    pickImage();
}

window.addEventListener("load", start, false);