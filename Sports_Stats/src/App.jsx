import teamLogo from '/vite.svg'
import './App.css'
import gameResults from "./components/GameResults/GameResultsMainPage"

function App() {
//
  return (
    <>
      {/* Header */}
      <div className="header">        
          <div className="image">
            <img src={teamLogo} className="logo" alt="Team logo" />
          </div>
          <h1>Team Name</h1>
      </div>
      {/*  */}
      
      {/* Game Results */}
      <div className="game_results">
          {gameResults()}
      </div>
      {/*  */}

      {/* Roster */}
      <div className="roster">
        <h2>Roster</h2>
      </div>
      {/*  */}

      {/* Injury Reports */}
      <div className="injury_reports">
        <h2>Injury Report</h2>
      </div>
      {/*  */}

      {/* Team and Opponent Stats */}
      <div className="team_and_opponent_stats">
        <h2>Team and Opponent Stats</h2>
      </div>
      {/*  */}
    </>
  )
//
}

export default App
