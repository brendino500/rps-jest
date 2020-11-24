import React from "react";
import ChoiceButtons from "./ChoiceButtons";

function App() {
  const [playerScore, setPlayerScore] = React.useState(0);
  const [computerScore, setComputerScore] = React.useState(0);
  const [options, setOptions] = React.useState(["rock", " paper", "scissors"]);
  const [playerChoice, setPlayerChoice] = React.useState("");
  const [computerChoice, setComputerChoice] = React.useState("");
  const [winnerResults, setWinnerResults] = React.useState("");

  const handleClick = (e) => {
    setComputerChoice(compChoice());
    setPlayerChoice(e.target.value);
    setWinnerResults(compareChoices(computerChoice, playerChoice));
  };

  const handleReset = () => {
    setComputerChoice("");
    setPlayerChoice("");
    setWinnerResults("");
    setOptions(["rock", " paper", "scissors"]);
  };

  const compChoice = () => {
    return options[Math.floor(Math.random() * options.length)];
  };

  const compareChoices = (computerChoice, playerChoice) => {
    if (playerChoice === computerChoice) return "Draw";
    if (
      computerChoice === options[0] ||
      computerChoice === options[1] ||
      computerChoice === options[2]
    ) {
      return "You Win";
    }
    return "You Lost";
  };

  return (
    <div className="container" data-test="component-app">
      {/* <Main />
      <Results
        playerChoice={playerChoice}
        computerChoice={computerChoice}
        playerScore={playerScore}
        computerScore={computerScore}
        winnerResults={winnerResults}
      /> */}
      <ChoiceButtons handleClick={handleClick} handleReset={handleReset} />
    </div>
  );
}

export default App;
