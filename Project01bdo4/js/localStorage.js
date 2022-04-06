function resetSearches(){
    localStorage.clear();
}

function startSearch(){
    var name = localStorage.getItem("name");
    if (name == null || name == "null"){
        alert("Hi, Stranger!");
        name = prompt("What is your name?");
        localStorage.setItem("name", name)
        document.getElementById("message").innerHTML = "Hi, " + name + "!";
    }
}

function start(){
    var startButton = document.getElementById("startButton");
    startButton.addEventListener("click", startSearch, false);
    var resetButton = document.getElementById("resetButton");
    resetButton.addEventListener("click", resetSearches, false);
}

window.addEventListener("load", start, false);