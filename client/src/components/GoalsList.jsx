import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AppContext } from "../App";


const GoalsList = () => {

    const {allGoals, setAllGoals} = useContext(AppContext);

    useEffect(() => {
        axios.get('http://localhost:8000/goals')
            .then(res => setAllGoals(res.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <h1>Goals</h1>
            <ul>
                {
                    allGoals.map((goal) => (
                        <li key={goal._id}>{goal.goalName}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default GoalsList