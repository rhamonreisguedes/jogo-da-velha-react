import React, { useState, useEffect } from "react";
import "./Game.css";

const Game = () => {
  const [player, setPlayer] = useState(1);
  const [move, setMove] = useState(null);
  const [h1, seth1] = useState("");
  const [h2, seth2] = useState("");
  const [h3, seth3] = useState("");
  const [h4, seth4] = useState("");
  const [h5, seth5] = useState("");
  const [h6, seth6] = useState("");
  const [h7, seth7] = useState("");
  const [h8, seth8] = useState("");
  const [h9, seth9] = useState("");
  const [winCondition, setWinCondition] = useState("");
  const [counter, setCounter] = useState(0);
  const [haveWinner, setHavewinner] = useState(false);
  const [initialGame, seInitialGame] = useState("");

  const handlePlayer = () => {
    setPlayer(player * -1);
  };

  const handleSetCounter = () => {
    setCounter(counter + 1);
  };

  useEffect(() => {
    if (
      (h1 === "X" && h4 === "X" && h7 === "X") ||
      (h1 === "O" && h4 === "O" && h7 === "O")
    ) {
      console.log("Ganhou");
      setHavewinner(true);
    }
    if (
      (h2 === "X" && h5 === "X" && h8 === "X") ||
      (h2 === "O" && h5 === "O" && h8 === "O")
    ) {
      console.log("Ganhou");
      setHavewinner(true);
    }
    if (
      (h3 === "X" && h6 === "X" && h9 === "X") ||
      (h3 === "O" && h6 === "O" && h9 === "O")
    ) {
      console.log("Ganhou");
      setHavewinner(true);
    }
    if (
      (h1 === "X" && h2 === "X" && h3 === "X") ||
      (h1 === "O" && h2 === "O" && h3 === "O")
    ) {
      console.log("Ganhou");
      setHavewinner(true);
    }
    if (
      (h4 === "X" && h5 === "X" && h6 === "X") ||
      (h4 === "O" && h5 === "O" && h6 === "O")
    ) {
      console.log("Ganhou");
      setHavewinner(true);
    }
    if (
      (h7 === "X" && h8 === "X" && h9 === "X") ||
      (h7 === "O" && h8 === "O" && h9 === "O")
    ) {
      console.log("Ganhou");
      setHavewinner(true);
    }
    if (
      (h1 === "X" && h5 === "X" && h9 === "X") ||
      (h1 === "O" && h5 === "O" && h9 === "O")
    ) {
      console.log("Ganhou");
      setHavewinner(true);
    }
    if (
      (h3 === "X" && h5 === "X" && h7 === "X") ||
      (h3 === "O" && h5 === "O" && h7 === "O")
    ) {
      console.log("Ganhou");
      setHavewinner(true);
    }
    if (counter === 9 && haveWinner) {
      console.log("Game over");
    }
  }, [h1, h2, h3, h4, h5, h6, h7, h8, h9, counter]);

  const handleH1 = () => {
    if (h1 === "") {
      if (player === 1) {
        seth1("X");
      } else {
        seth1("O");
      }
    }
    handlePlayer();
    handleSetCounter();
  };

  const handleH2 = () => {
    if (h2 === "") {
      if (player === 1) {
        seth2("X");
      } else {
        seth3("O");
      }
    }
    handlePlayer();
    handleSetCounter();
  };

  const handleH3 = () => {
    if (h3 === "") {
      if (player === 1) {
        seth3("X");
      } else {
        seth3("O");
      }
    }
    handlePlayer();
    handleSetCounter();
  };

  const handleH4 = () => {
    if (h4 === "") {
      if (player === 1) {
        seth4("X");
      } else {
        seth4("O");
      }
    }
    handlePlayer();
    handleSetCounter();
  };

  const handleH5 = () => {
    if (h5 === "") {
      if (player === 1) {
        seth5("X");
      } else {
        seth5("O");
      }
    }
    handlePlayer();
    handleSetCounter();
  };

  const handleH6 = () => {
    if (h6 === "") {
      if (player === 1) {
        seth6("X");
      } else {
        seth6("O");
      }
    }
    handlePlayer();
    handleSetCounter();
  };

  const handleH7 = () => {
    if (h7 === "") {
      if (player === 1) {
        seth7("X");
      } else {
        seth7("O");
      }
    }
    handlePlayer();
    handleSetCounter();
  };

  const handleH8 = () => {
    if (h8 === "") {
      if (player === 1) {
        seth8("X");
      } else {
        seth8("O");
      }
    }
    handlePlayer();
    handleSetCounter();
  };

  const handleH9 = () => {
    if (h9 === "") {
      if (player === 1) {
        seth9("X");
      } else {
        seth9("O");
      }
    }
    handlePlayer();
    handleSetCounter();
  };

  return (
    <div>
      <h1>Jogo da Velha</h1>
      <div className="row">
        <button
          className="btn-game"
          type="submit"
          onClick={haveWinner ? "" : handleH1}
        >
          <span>{h1}</span>
        </button>
        <button
          className="btn-game"
          type="submit"
          onClick={haveWinner ? "" : handleH2}
        >
          {h2}
        </button>
        <button
          className="btn-game"
          type="submit"
          onClick={haveWinner ? "" : handleH3}
        >
          {h3}
        </button>
      </div>
      <div className="row">
        <button
          className="btn-game"
          type="submit"
          onClick={haveWinner ? "" : handleH4}
        >
          {h4}
        </button>
        <button
          className="btn-game"
          type="submit"
          onClick={haveWinner ? "" : handleH5}
        >
          {h5}
        </button>
        <button
          className="btn-game"
          type="submit"
          onClick={haveWinner ? "" : handleH6}
        >
          {h6}
        </button>
      </div>
      <div className="row">
        <button
          className="btn-game"
          type="submit"
          onClick={haveWinner ? "" : handleH7}
        >
          {h7}
        </button>
        <button
          className="btn-game"
          type="submit"
          onClick={haveWinner ? "" : handleH8}
        >
          {h8}
        </button>
        <button
          className="btn-game"
          type="submit"
          onClick={haveWinner ? "" : handleH9}
        >
          {h9}
        </button>
        {haveWinner && (
          <h2>O ganhador foi o jogador: {player > 0 ? "O" : "X"}</h2>
        )}
      </div>
    </div>
  );
};

export default Game;
