# quiz

Timer-based quiz application that stores high scores client-side.

## Description

This app is a timed quiz about food and drinks on JavaScript fundamentals that stores high scores.

Play proceeds as follows:

- The user arrives at the landing page and is presented with a call-to-action to "Start Quiz." Also note the navigation option to "View Highscores" and the "Time" value set at 0.

- Clicking the "Start Quiz" button presents the user with a series of questions. The timer is initialized with a value and immediately begins countdown.

- Score is calculated by time remaining. Answering quickly and correctly results in a higher score. Answering incorrectly results in a time penalty (10 seconds are subtracted from time remaining).

- When time runs out and/or all questions are answered, the user is presented with their final score and asked to enter their initials. Their final score and initials are then stored in `localStorage`.

- The application is responsive and adapts to multiple screen sizes.

## User Story

AS AN employee of restaurant business

I WANT to complete timed quiz about food and drinks where I cam save my results

SO THAT I can compare them to my coworkers

## Acceptance Criteria

- Functional, deployed application.

- GitHub repository with README describing project.

- The first view of the application displays a button that starts the quiz.

- Clicking the start button displays a series of questions.

- Once the quiz begins, a timer starts.

- If a question is answered incorrectly, additional time is subtracted from the timer.

- The timer stops when all questions have been answered or the timer reaches 0.

- After the game ends, the user can save their initials and score to a highscores view using local storage.
