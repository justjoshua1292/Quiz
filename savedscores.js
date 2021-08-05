var highscores = JSON.parse(localStorage.getItem("highscores"));
var scorelist = document.getElementById("scoring");

for (let index = 0; index < highscores.length; index++) {
    var newli = document.createElement("li")
    newestlist.textContent=highscores[index].initals+" - " + highscores[index].score
    scorelist.appendChild(newli)
}

function clearHighscores () {
    localStorage.clear ();
    location.reload ();
}

var clearButton = document.getElementById("clearBtn");
clearButton.addEventListener("click", clearHighscores);
