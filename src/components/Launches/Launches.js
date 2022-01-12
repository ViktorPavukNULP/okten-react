import React, {useEffect, useState} from 'react';

import Launch from "../Launch/Launch";
import './Launches.css';
import {getLaunches} from "../../services/Services";

const Launches = () => {

    const [launches, setLaunches] = useState([]);

    useEffect(() => {
        getLaunches().then(value => setLaunches(value));
    }, [])

    return (
        <div className="Launches">
            {launches.map(launch => <Launch key={launch.flight_number} name={launch.mission_name} year={launch.launch_year} patch={launch.links.mission_patch_small}/>)}
        </div>
    );
};

export default Launches;