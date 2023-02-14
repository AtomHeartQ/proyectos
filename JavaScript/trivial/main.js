const url1 = "https://opentdb.com/api.php?amount=";
const url2 = "&type=multiple";

let questionsAnswered = [];
const board$$ = document.querySelector('[data-function="board"]');

const searchQuestions = async () => {
  resetGame();
  const input$$ = document.querySelector(
    '[data-function="number-of-questions"]'
  );
  const newURl = url1 + input$$.value.toString() + url2;
  const res = await fetch(newURl).then((res) => res.json());
  createQuestions(res.results);
};

const resetGame = () => {
  questionsAnswered = [];
  board$$.innerHTML = "";
};

const createQuestions = (questions) => {
  for (let i = 0; i < questions.length; i++) {
    const question = questions[i];
    const h4$$ = document.createElement("h4");
    h4$$.textContent = question.question;
    board$$.appendChild(h4$$);
    createAnswers(
      [question.correct_answer, ...question.incorrect_answers],
      question.correct_answer,
      i
    );
  }
};

const createAnswers = (answers, correctAnswer, questionIndex) => {
  for (let i = 0; i < answers.length; i++) {
    const answer = answers[i];
    const p$$ = document.createElement("p");
    p$$.textContent = answer;
    p$$.addEventListener("click", () => {
      checkAnswer(answer, correctAnswer, questionIndex);
    });
    board$$.appendChild(p$$);
  }
};

const checkAnswer = (answer, correctAnswer, index) => {
  if (answer === correctAnswer) {
    questionsAnswered[index] = true;
  } else {
    questionsAnswered[index] = false;
  }
  console.log(questionsAnswered);
};

/** const checkGame = () => {
  const results = questionsAnswered.reduce(
    (accum, questionAnswered) => {
      return {
        correctResult: questionAnswered
          ? accum.correctResult + 1
          : accum.correctResult,
        incorrectResult: !questionAnswered
          ? accum.incorrectResult + 1
          : accum.incorrectResult,
      };
    },
    { correctResult: 0, incorrectResult: 0 }
  );
  console.log(results);
};**/

const checkGameWithFor = () => {
  let correctResult = 0;
  let incorrectResult = 0;
  for (const questionAnswered of questionsAnswered) {
    if (questionAnswered) {
      correctResult++;
    } else {
      incorrectResult++;
    }
  }
  const p$$ = document.createElement("p");
  p$$.textContent = `You have ${correctResult} correct answers and ${incorrectResult} errors`;
  board$$.appendChild(p$$);
};
const button$ = document.querySelector('[data-function="start-game"]');
button$.addEventListener("click", searchQuestions);

const checkButton$ = document.querySelector('[data-function="check-game"]');
checkButton$.addEventListener("click", checkGameWithFor);
