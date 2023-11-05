/*a, s, d*/
function colorRosado () {
    colorRosado = document.getElementById ("key");
    key.style.background = "pink"
}

function colorNaranjo () {
    colorNaranjo = document.getElementById ("key");
    key.style.background = "orange"
}

function colorCeleste() {
    colorCeleste = document.getElementById ("key");
    key.style.background = "lightblue"
}

document.addEventListener("keydown", function (event) {
  if (event.key === "a") {
    colorRosado();
  } else if (event.key === "s") {
    colorNaranjo();
  } else if (event.key === "d") {
    colorCeleste();
  }

  /*q, w, e*/

function colorMorado() {
    colorMorado = document.getElementById ("key");
    nuevoDiv = document.createElement ("div");
    nuevoDiv.style = "border-color: black; border: solid 2px; background-color: purple; height: 200px; width: 200px"
    key.appendChild (nuevoDiv);
}

function colorGris() {
    colorGris = document.getElementById ("key");
    nuevoDiv = document.createElement ("div");
    nuevoDiv.style = "border-color: black; border: solid 2px; background-color: gray; height: 200px; width: 200px"
    key.appendChild (nuevoDiv);
}

function colorCafe() {
    colorCafe = document.getElementById ("key");
    nuevoDiv = document.createElement ("div");
    nuevoDiv.style = "border-color: black; border: solid 2px; background-color: brown; height: 200px; width: 200px"
    key.appendChild (nuevoDiv);
}
  if (event.key === "q") {
    colorMorado();
  }
  else if (event.key === "w") {
    colorGris();
  }
  else if (event.key === "e") {
    colorCafe();
  }

});

