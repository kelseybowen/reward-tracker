import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { AppContext } from '../App';
import GoalsList from '../components/GoalsList';
import NewGoal from '../components/NewGoal';

const Dashboard = () => {

    

    return (
        <div>
            <GoalsList/>
            <NewGoal/>
            
        </div>
    )
}

export default Dashboard