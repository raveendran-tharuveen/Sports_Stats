import React, { useState } from "react"
import GameResultsTable from "./GameResultsTable"
import TeamSeasonData from "../BackendConnections/TeamSeasonData.jsx"

const gameResults = () => {
    const [month, setMonth] = useState("October")
    const handleChange = (event) => {
        setMonth(event.target.value)
    }
    
    return (
        <div>
            <div className="section_header">
                <h2>Game Results</h2>
                <TeamSeasonData/>
            </div>
            <div className="month_dropdown">
                <label>
                    View results for month of: 
                    <select onChange={handleChange} value={month}>
                        <option value={"October"}>October</option>
                        <option value={"November"}>November</option>
                        <option value={"December"}>December</option>
                        <option value={"January"}>January</option>
                        <option value={"February"}>February</option>
                        <option value={"March"}>March</option>
                        <option value={"April"}>April</option>
                    </select>
                </label>
            </div>
            <GameResultsTable month = {month}/>
        </div>
        

    )
}

export default gameResults