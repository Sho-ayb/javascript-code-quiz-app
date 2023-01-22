# trilogy-bootcamp-code-quiz

---

## Introduction

This is a browser based coding quiz application where a user is challenged to
answer from multiple choice answers under timed conditions. This coding
quiz is primarily focused on questions based in Javascript - stored within
an array of objects within an external questions file and are stored as an
array of objects so that any number of questions can be added when needed
without breaking the underlying code of the application.

## User Acceptance

- The user is presented with a start screen providing a title to the page and
  short paragraph explaining the rules of the game.
- The user can begin the quiz by clicking on the start quiz button.
- When the quiz begins, the time will countdown. If the user gets an answer
  incorrect, the timer will penalise the player with a time deduction.
- Each time the player answers correctly, the players score is updated by one.
- At each time the player clicks on an answer a sound file will play
  determined by the correct or incorrect answer the player chose.
- If the timer countsdown to zero before the player completes all questions
  the quiz application will display the end screen and this is also true if the
  user completes all questions within the time limit.
- The player is then presented with end screen which displays the final
  score and allows the user to submit there initials that remain persistent even
  after the user closes the browser.
- Once the player submits his final score - providing his initials being set
  to max three characters long, the player is presented with the highscores
  page.
- The highscores page provides an ordered list of the players highest scores
  in descending order - the user can go back to start the quiz again or decide
  to clear all scores. The player also has the option to get to the highscores
  page by clicking on a link from the start screen.

## A gif of the code quiz in action

![code-quiz-capture]('./code-quiz-capture.gif');

## A link to the deployed application
