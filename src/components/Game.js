import React, { useState } from "react";
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

  const handlePlayer = () => {
    setPlayer(player * -1);
  };

  const handleH1 = () => {
    if (h1 === "") {
      if (player === 1) {
        seth1("X");
      } else {
        seth1("O");
      }
    }
    handlePlayer();
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
  };

  return (
    <div>
      <h1>Jogo da Velha</h1>
      <div className="row">
        <button className="btn-game" type="submit" onClick={handleH1}>
          <span >{h1}</span>
        </button>
        <button className="btn-game" type="submit" onClick={handleH2}>
          {h2}
        </button>
        <button className="btn-game" type="submit" onClick={handleH3}>
          {h3}
        </button>
      </div>
      <div className="row">
        <button className="btn-game" type="submit" onClick={handleH4}>
          {h4}
        </button>
        <button className="btn-game" type="submit" onClick={handleH5}>
          {h5}
        </button>
        <button className="btn-game" type="submit" onClick={handleH6}>
          {h6}
        </button>
      </div>
      <div className="row">
        <button className="btn-game" type="submit" onClick={handleH7}>
          {h7}
        </button>
        <button className="btn-game" type="submit" onClick={handleH8}>
          {h8}
        </button>
        <button className="btn-game" type="submit" onClick={handleH9}>
          {h9}
        </button>
      </div>
    </div>
  );
};

export default Game;
