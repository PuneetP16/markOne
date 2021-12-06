// Quiz App
var readlineSync = require("readline-sync");
var chalk = require("chalk");
// Ask name and welcome with game details

var userName = readlineSync.question("Hi there!, What is you name? ; ")
console.log("Welcome " + userName.toUpperCase() + ", to the game of: " + chalk.bgGray("How much do you know about me?") + "\n")


//define global score var
var score = 0;

//create a function which asks question and compares answer which if is right adds up 1 to the score

function play(question, answer, i) 
{
  var yourAnswer = readlineSync.question("Q" + (i+1) + ": " + question);
  
  try // if user answer or answer is number it will throw type error 
  {
    is_right = (yourAnswer.toUpperCase() === answer.toUpperCase())
    }
  catch(TypeError) 
  {
    if (String(Number(yourAnswer)) == "NaN") // if user answer is a string, it will execute this branch
    {
      is_right = (yourAnswer === answer)
      } 
    else  
    {
      is_right = (Number(yourAnswer) === answer)
      }
  }
  if (is_right) //
  {
    console.log(chalk.bgGreen.bold("\n>> Right!"));
    score = score + 1;
    } 
  else {
    console.log(">> Wrong!");
    }  
  
  console.log(chalk.white.bgMagenta.bold("Current Score: " + score))
  console.log(chalk.yellow("\n--------------------------------------------\n"));
}

//create a list having objects which has question and answers.

var question_bank = [
  {
    "question": "What's my age?: ",
    "answer": 26
  },
  {
    "question": "What's my favourite dish in Chinese?: ",
    "answer": "Manchurian"
  },
  {
    "question": "Which is my favourit colour?: ",
    "answer": "Blue"
  },
  {
    "question": "What would i like more to do with friends? \nA. Going to movie. or \nB. Playing cricket.\nChoose A or B: ",
    "answer": "B"
  },
  {
    "question": "Where was i born and brought up? \nA. Umbergaon or \nB. Vapi\nChoose A or B: ",
    "answer": "A"
  },
  {
    "question": "I did Bachelor's in which field? \nA. Mechanical or \nB. Computer Science\nChoose A or B: ",
    "answer": "A"
  },
  {
    "question": "What do i like more to do? \nA. Read Books or \nB. Play Chess\nChoose A or B:  ",
    "answer": "Patel"
  },
  {
    "question": "In which year I was born?: ",
    "answer": 1995
  },
  {
    "question": "What is my blood group? \nA. B Negative or \nB. A Negative\nChoose A or B: ",
    "answer": "B"
  },
  {
    "question": "What's my last Qualification? \nA. Bachelor's or \nB. Master's \nChoose A or B: ",
    "answer": "B"
  }
];

// create a for loop executing play functioon for all questions in question bank.

for (i=0; i<question_bank.length; i++) {
  current_question = question_bank[i];
  play(current_question.question, current_question.answer, i);
}

// print final score stating number of right answers.

console.log(userName + ", Your Final Score is: " + score + ".\nYou gave " + score + " right answers out of " + question_bank.length + '.\n')

console.log("Check out the high scores below, \nif you should be there send me screenshot of your score and I w'll love to update it.")

var highest_score = [
  {
    "name": "Puneet",
    "score": 10
  },
  {
    "name": "Vishalbhai",
    "score": 8
  },
  {
    "name": "Lovely dad",
    "score": 7
  }
]

for (i=0; i<3; i++) {
  console.log(highest_score[i].name + ": " + highest_score[i].score);
  if (score > highest_score[i].score) {
    console.log("Congrats! You have beaten record of " + highest_score[i].name)

  }
}
