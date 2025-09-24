let usrScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const gameUserScore = document.querySelector("#usr-score");
const gameCompScore = document.querySelector("#comp-score");

const genCompChoise = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

// increase score
const updateScore = () => {
  gameUserScore.innerText = usrScore;
  gameCompScore.innerText = compScore;
};

const drawGame = () => {
  msg.innerText = "Game was Draw. Play Again !!";
  msg.style.backgroundColor = "#241E4E";
};

// Show winner

const showWinner = (userWin, usrChoice, compChoice) => {
  
    if (userWin) {
      msg.innerText = `You Win ! Your ${usrChoice} beats ${compChoice} `;
      msg.style.backgroundColor = "#006E90";
    } else {
      msg.innerText = `You Lose.. ${compChoice} beats your ${usrChoice}`;
      msg.style.backgroundColor = "#B36A5E";
    }
  
  userWin ? usrScore++ : compScore++;
  updateScore();
};

const playGame = (userChoice) => {
  // generate computer choice
  const compChoice = genCompChoise();
  let userWin = true;
  if (userChoice === compChoice) {
    // Draw game
    drawGame();
  } else {
    if (userChoice === "rock") {
      //  possible comp choices: paper, scissors
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //  possible comp choices: rock, scissors
      userWin = compChoice === "scissors" ? false : true;
    } else if (userChoice === "scissors") {
      //  possible comp choices: paper, rock
      userWin = compChoice === "rock" ? false : true;
    }

    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const usrChoice = choice.getAttribute("id");
    playGame(usrChoice);
  });
});
