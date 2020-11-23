import React from "react";

function App() {
  const [playerScore, setPlayerScore] = React.useState(0);
  const [computerScore, setComputerScore] = React.useState(0);
  const [options, setOption] = React.useState(["rock", " paper", "scissors"]);
  const [playerChoice, setPlayerChoice] = React.useState("");
  const [computerChoice, setComputerChoice] = React.useState("");
  const [winnerResults, setWinnerResults] = React.useState("");

  return <div className="container" data-test="component-app"></div>;
}

export default App;
