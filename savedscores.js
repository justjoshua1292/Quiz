var allscores = JSON.parse(localStorage.getItem("highscores"));
var scorelist = document.getElementById("scoring");

for (let index = 0; index < highscores.length; index++) {
    var newestlist = document.createElement("list")
    newestlist.textContent=highscores[index].initals+" - " + highscores[index].score
    scorelist.appendChild(newestlist)
}
