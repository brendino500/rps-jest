import React from "react";
import ChoiceButtons from "./ChoiceButtons";
import Main from "./Main";
import Results from "./Results";

function App() {
  const [playerScore, setPlayerScore] = React.useState(0);
  const [computerScore, setComputerScore] = React.useState(0);
  const [options, setOptions] = React.useState(["roche", "papier", "ciseaux"]);
  const [playerChoice, setPlayerChoice] = React.useState("");
  const [computerChoice, setComputerChoice] = React.useState("");
  const [winnerResults, setWinnerResults] = React.useState("");

  const handleClick = (e) => {
    const tempCompChoice = compChoice();
    const tempPlayerChoice = !!e.target.value
      ? e.target.value
      : e.target.parentNode.parentNode.value;
    setComputerChoice(tempCompChoice);
    setPlayerChoice(tempPlayerChoice);
    setWinnerResults(compareChoices(tempCompChoice, tempPlayerChoice));
  };

  const handleReset = (e) => {
    console.log(e);
    console.log(
      !!e.target.value ? e.target.value : e.target.parentNode.parentNode.value
    );
    setComputerChoice("");
    setPlayerChoice("");
    setWinnerResults("");
    setPlayerScore(0);
    setComputerScore(0);
    setOptions(["roch", "papier", "ciseaux"]);
  };

  const compChoice = () => {
    return options[Math.floor(Math.random() * options.length)];
  };

  const compareChoices = (computer, player) => {
    console.log("player", player);
    console.log("computer", computer);
    console.log("-------");

    if (player === computer) {
      return "personne";
    } else if (
      (player === options[0] && computer === options[2]) ||
      (player === options[1] && computer === options[0]) ||
      (player === options[2] && computer === options[1])
    ) {
      setPlayerScore(playerScore + 1);
      return "toi";
    }
    setComputerScore(computerScore + 1);
    return "pas toi";
  };

  return (
    <div className="container" data-test="component-app">
      <Main />
      <Results
        playerChoice={playerChoice}
        computerChoice={computerChoice}
        playerScore={playerScore}
        computerScore={computerScore}
        winnerResults={winnerResults}
      />
      <ChoiceButtons handleClick={handleClick} handleReset={handleReset} />
    </div>
  );
}

export default App;
