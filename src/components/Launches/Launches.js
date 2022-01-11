import React, {useEffect, useState} from 'react';
import Launch from "../Launch/Launch";

import './Launches.css';

const Launches = () => {

    const [launches, setLaunches] = useState([]);

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(value => value.json())
            .then((value => setLaunches(value.filter(launch => launch.launch_year !== "2020"))))
    }, [])

    return (
        <div className="Launches">
            {launches.map(launch => <Launch key={launch.flight_number} name={launch.mission_name} year={launch.launch_year} patch={launch.links.mission_patch_small}/>)}
        </div>
    );
};

export default Launches;