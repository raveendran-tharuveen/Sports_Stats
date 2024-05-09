import React from 'react';

class GameDataComponent extends React.Component {
  constructor(props) {
    super(props);
    // Define the game data in the state
    this.state = {
      gameData: {
        October: {
            "#1": {
              date: 5,
              opponent: 100,
              location: "Home",
              score: "100-99",
              result: "Win"
            },
            "#2": {
              date: 5,
              opponent: 100,
              location: "Home",
              score: "100-99",
              result: "Win"
            },
            // Add more games as needed
          },
          November: {
            "#3": {
              date: 5,
              opponent: 100,
              location: "Home",
              score: "100-99",
              result: "Win"
            },
            "#4": {
              date: 5,
              opponent: 100,
              location: "Home",
              score: "100-99",
              result: "Win"
            },
            // Add more games as needed
        },
        December: {
            "#5": {
              date: 5,
              opponent: 100,
              location: "Home",
              score: "100-99",
              result: "Win"
            },
            "#6": {
              date: 5,
              opponent: 100,
              location: "Home",
              score: "100-99",
              result: "Win"
            },
            // Add more games as needed
          },
          January: {
          "#7": {
            date: 5,
            opponent: 100,
            location: "Home",
            score: "100-99",
            result: "Win"
          },
          "#8": {
            date: 5,
            opponent: 100,
            location: "Home",
            score: "100-99",
            result: "Win"
          },
          // Add more games as needed
        },
        February: {
          "#9": {
            date: 5,
            opponent: 100,
            location: "Home",
            score: "100-99",
            result: "Win"
          },
          "#10": {
            date: 5,
            opponent: 100,
            location: "Home",
            score: "100-99",
            result: "Win"
          },
          // Add more games as needed
        },
        March: {
            "#11": {
              date: 5,
              opponent: 100,
              location: "Home",
              score: "100-99",
              result: "Win"
            },
            "#12": {
              date: 5,
              opponent: 100,
              location: "Home",
              score: "100-99",
              result: "Win"
            },
            // Add more games as needed
          },
          April: {
            "#13": {
              date: 5,
              opponent: 100,
              location: "Home",
              score: "100-99",
              result: "Win"
            },
            "#14": {
              date: 5,
              opponent: 100,
              location: "Home",
              score: "100-99",
              result: "Win"
            },
            // Add more games as needed
          },
        // Add more months as needed
      }
    };
  }

  render() {
    const { month } = this.props;
    const gamesDataForMonth = this.state.gameData[month] || {};
    
    return (
      <div>
        <h2>Game Data for {month}</h2>
        {Object.entries(gamesDataForMonth).map(([game, gameData]) => (
          <div key={game}>
            <h3>Game {game}</h3>
            <p>Date Played: {gameData.date}</p>
            <p>Opponent: {gameData.opponent}</p>
            <p>Location: {gameData.location}</p>
            <p>Score: {gameData.score}</p>
            <p>Result: {gameData.result}</p>
            {/* Render more game data properties as needed */}
          </div>
        ))}
      </div>
    );
  }
}

export default GameDataComponent;
