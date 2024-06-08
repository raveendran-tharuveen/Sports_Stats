import React, { useState } from "react";
import axios from "axios";
import './TeamSeasonData.css'

const TeamSeasonData = () => {
    const [array, setArray] = useState([]);
    const [error, setError] = useState(null);
    const [teamName, setTeamName] = useState("");

    const fetchAPI = async (teamName) => {
        try {
            const response = await axios.get(`http://localhost:8080/api/season_stats?teamName=${teamName}`);
            console.log(response.data.users);
            setArray(response.data.users);
            setError(null);
        } catch (err) {
            console.error("Error fetching data:", err);
            setError("Error fetching data");
        }
    };

    const handleSearch = (e) => {
        e.preventDefault();
        fetchAPI(teamName);
    };

    return (
        <div>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    value={teamName}
                    onChange={(e) => setTeamName(e.target.value)}
                    placeholder="Enter team Name"
                />
                <button type="submit">Search</button>
            </form>
            {error ? (
                <div>{error}</div>
            ) : (
                <div className="season_data">
                    <table>
                        <thead>
                            <tr className="season_data_headers">
                                {/* <th>MIN</th> */}
                                <th>Date Played</th>
                                <th>Matchup</th>
                                <th>Result</th>

                                <th>PTS</th>
                                <th>AST</th>
                                <th>DREB</th>
                                <th>OREB</th>
                                <th>REB</th>
                                <th>BLK</th>
                                <th>STL</th>
                                <th>TOV</th>
                                <th>PF</th>
                                
                                <th>FG3A</th>
                                <th>FG3M</th>
                                <th>FG3 PCT</th>
                                
                                <th>FGA</th>
                                <th>FGM</th>
                                <th>FG PCT</th>

                                <th>FTA</th>
                                <th>FTM</th>
                                <th>FT PCT</th>
                                
                                <th>Record</th>
                                <th>Win Percentile</th>

                                {/* <th>Game ID</th> */}
                                {/* <th>Team ID</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {array.map((game, index) => (
                                <tr key={index}>
                                    {/* <td>{game.MIN}</td> */}
                                    <td>{game.GAME_DATE}</td>
                                    <td>{game.MATCHUP}</td>
                                    <td>{game.WL}</td>
                                    
                                    <td>{game.PTS}</td>
                                    <td>{game.AST}</td>
                                    <td>{game.DREB}</td>
                                    <td>{game.OREB}</td>
                                    <td>{game.REB}</td>
                                    <td>{game.BLK}</td>
                                    <td>{game.STL}</td>
                                    <td>{game.TOV}</td>
                                    <td>{game.PF}</td>
                                    
                                    <td>{game.FG3A}</td>
                                    <td>{game.FG3M}</td>
                                    <td>{game.FG3_PCT}</td>
                                    <td>{game.FGA}</td>
                                    <td>{game.FGM}</td>
                                    <td>{game.FG_PCT}</td>
                                    <td>{game.FTA}</td>
                                    <td>{game.FTM}</td>
                                    <td>{game.FT_PCT}</td>
                                    
                                    
                                    <td>{game.W}:{game.L}</td>
                                    <td>{game.W_PCT}</td>

                                    {/* <td>{game.Game_ID}</td> */}
                                    {/* <td>{game.Team_ID}</td> */}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default TeamSeasonData;
