let nIntervId;

function changeColor() {
  // check if already an interval has been set up
  if (!nIntervId) {
    nIntervId = setInterval(flashText, 1000);
  }
}

function flashText() {
  const oElem = document.getElementById("my_box");
  if (oElem.className === "go") {
    oElem.className = "stop";
  } else {
    oElem.className = "go";
  }
}

function stopTextColor() {
  clearInterval(nIntervId);
  // release our intervalID from the variable
  nIntervId = null; 
}

function start(){
  document.getElementById("startButton3").addEventListener("click", changeColor, false);
  document.getElementById("stop").addEventListener("click", stopTextColor, false);
}

window.addEventListener("load", start, false);