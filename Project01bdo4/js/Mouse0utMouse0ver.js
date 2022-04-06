function mouse0ver(e){
    if (e.target.getAttribute("id")){
        e.target.setAttribute("style", "background-color: aqua");
    }
}

function mouse0ut(e){
    if(e.target.getAttribute("id")){
        e.target.setAttribute("style", "background-color: white");
    }
}

document.addEventListener("mouseover", mouse0ver, false);
document.addEventListener("mouseout", mouse0ut, false);