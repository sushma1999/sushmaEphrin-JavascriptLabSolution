function Question(questionText, choices, correctAnswer) {
  this.questionText = questionText
  this.choices = choices
  this.correctAnswer = correctAnswer
}

function Quiz(questions) {
  this.questions = questions
  this.score = 0
  this.questionIndex = 0
}

Quiz.prototype.GetQuestionByIndex = function () {
  return this.questions[this.questionIndex]
}

Quiz.prototype.CheckAnswer = function (userChoice) {
  if (userChoice === this.GetQuestionByIndex().correctAnswer) {
    this.score++
  }
  this.questionIndex++
}

Quiz.prototype.IsEnded = function () {
  return quiz.questionIndex === questions.length
}

Quiz.prototype.ShowProgress = function () {
  document.getElementById('progress').innerText = `Question ${
    quiz.questionIndex + 1
  } of ${questions.length}`
}

let questions = [
  new Question(
    'Javascript supports _____',
    ['Functions', 'XHTML', 'CSS', 'XML'],
    'Functions'
  ),
  new Question(
    'Which is not a JavaScript FrameWork',
    ['Python script', 'JQuery', 'Django', 'NodeJS'],
    'Django'
  ),
  new Question(
    'Which language is used for styling web pages ?',
    ['HTML', 'JQuery', 'CSS', 'XML'],
    'CSS'
  ),
  new Question(
    'What is used for connecting to the database',
    ['PHP', 'HTML', 'JS', 'MySQL'],
    'MySQL'
  ),
  new Question(
    'Javascript is a ',
    ['Language', 'Programming language', 'Development', 'All'],
    'Programming language'
  ),
]

let currentQuestion = 1
let quiz = new Quiz(questions)

function loadPage() {
  if (quiz.IsEnded()) {
    ShowScore()
  } else {
    let questionElement = document.getElementById('question')
    questionElement.innerHTML = quiz.GetQuestionByIndex().questionText

    let choices = quiz.GetQuestionByIndex().choices

    for (let i = 0; i < choices.length; i++) {
      document.getElementById('btn' + i).innerHTML = choices[i]
      handleOptionButton(choices[i], 'btn' + i)
    }

    quiz.ShowProgress()
  }
}

function handleOptionButton(choiceIndex, id) {
  let button = document.getElementById(id)

  button.onclick = function () {
    quiz.CheckAnswer(choiceIndex)
    loadPage()
  }
}

function ShowScore() {
  let percent = (quiz.score / 5) * 100
  let score = '<h1> Result </h1>'
  score +='<h2> Your score is : ' +quiz.score +'/' +questions.length +'.And mark percentage is: ' +percent +'%</h2>'
  document.getElementById('quiz').innerHTML = score
}

loadPage()
