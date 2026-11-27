import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

function Dashboard() {
    const location = useLocation();
    const[userdata, setUserData] = useState("");
    function displaydata(){
        setUserData(location.state);
        console.log(userdata)
    }
    return (
        <div>
            <h1>Dashboard</h1>
            <button onClick={displaydata}>Display Data</button>
            <p>{userdata}</p>
        </div>
    )
}

export default Dashboard;