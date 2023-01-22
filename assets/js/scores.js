/*

This file deals with highscores page: it displays all the highscores from the Score object created in logic.js file. This page will extract all the objects stored in localStorage and display it as a list on the page. 

*/

// lets query select the ordered list and the clear button elements

const ol = document.getElementById("highscores");
const clearBnt = document.getElementById("clear");

// lets array from Scores object assigned here

const localScores = Score.highscores;

console.log(localScores);
