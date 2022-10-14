var readLineSycn = require("readline-sync")

var score = 0;

var userName = readLineSycn.question("Whats Your Name ")
console.log("Welcome " + userName + " How Smart Are You? ")



function play(question, answer, options) {
  console.log(question)
  for (let i = 0; i < options.length; i++) {
    console.log(`${i}) `, options[i])
  }
  var userAnswer = readLineSycn.question("Answer >")
  if (userAnswer.toLowerCase() === answer.toLowerCase()) {
    console.log(" GENIUS ")
    score = score + 1

  } else {
    console.log(" WRONG ")
    score = score - 1

  }
  console.log(" Current score: ", score)
  console.log(" *-*-*-*-*-*-*-*-* ")
}




var question = [{
  question: " How Many Months Have 28 Days? ",
  options: ["1", "2", "ALL MONTHS", "HAVE TO CHECK CALENDAR?"],
  answer: "ALL MONTHS"
},
{
  question: " THERE ARE 45 MANGOES IN YOUR  BASKET YOU TAKE 3 MANGOES HOW MANY MANGOES LEFT?? ",
  options: ["3", "42", "45", "I DONT EAT MANGOES"],
  answer: "I DONT EAT MANGOES"

},
{
  question: " JIMMY'S FATHER HAS THREE SONS PAUL-I PAUL-II. CAN YOU GUESS NAME OF THIRD SON? ",
  options: ["PAUL-III", "JERIN", "JIMMY", "JOHN"],
  answer: "JIMMY"

},
{
  question: " WHAT COMES ONCE IN A YEAR BUT TWICE IN A WEEK? ",
  options: ["CHRISTMAS", "CALENDAER", "I SHOULD START SCHOOL AGAIN", "E"
  ],
  answer: "E"

},
{
  question: " YOU ARE DRIVING A BUS,AND SUDDENLY COW COMES IN MIDDLE OF ROAD WHAT WILL YOU HIT FIRST? ",
  options: ["COW", "ROAD DIVIDER", "BRAKES", "I AM NOT REALLY GOOD DRIVER!"],
  answer: "BRAKES"

},
{
  question: " WHICH OF THE FOLLOWING IS THE HEAVIEST? ",
  options: ["ELEPHANT", "ROAD-ROLLER", "5 TON COTTON", "BUS"],
  answer: "5 TON COTTON"

},
{
  question: " DESCRIBE YOUR LOVE LIFE IN ONE WORD? ",
  options: ["SEARCHING", "WAITING", "FINDING", "NO-LOVE"],
  answer: "NO-LOVE"
}




];

for (var i = 0; i < question.length; i++) {
  var currentquestion = question[i]
  play(currentquestion.question, currentquestion.answer, currentquestion.options)
}
console.log("CONGRATULATIONS!!  Seriously Find Your Love Fast!!! YOUR SCORE  ", score)



