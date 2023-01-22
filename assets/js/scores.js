/*

This file deals with highscores page: it displays all the highscores from the Score object created in logic.js file. This page will extract all the objects stored in localStorage and display it as a list on the page. 

*/

const Score = {
  score: 0,
  initials: "",
  highscores: JSON.parse(window.localStorage.getItem("highscore")) || [],
  addScore: function () {
    this.score += 1;
  },
  addFinal: function () {
    const newScore = {
      initials: this.initials,
      highscore: this.score,
    };

    this.highscores.push(newScore);
  },
  setToLocal: function () {
    window.localStorage.setItem("highscore", JSON.stringify(this.highscores));
  },
  clearLocalStore: function () {
    window.localStorage.clear("highscore");
  },
};

// lets query select the ordered list and the clear button elements

const ol = document.getElementById("highscores");
const clearBnt = document.getElementById("clear");

// lets array from Scores object assigned here

const localScores = Score.highscores;

console.log(localScores);

// lets order the array in descending order - highest to lowest

const orderedList = localScores.sort((a, b) => b.highscore - a.highscore);

// lets now loop through the ordered array of highscores and create list item for each item in the array

for (const highscore in orderedList) {
  const eachObj = orderedList[highscore];

  console.log(eachObj.initials, eachObj.highscore);

  const li = document.createElement("li");

  ol.appendChild(li);

  li.textContent =
    "Initials :" + eachObj.initials + " Highscore: " + eachObj.highscore;
}

// if the clear highscores button is clicked we should clear the localStorage and all the list items too

clearBnt.addEventListener("click", function () {
  Score.clearLocalStore();

  ol.innerHTML = "";
});
