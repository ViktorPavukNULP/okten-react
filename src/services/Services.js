const launchFilter = (launch) =>{
    return launch.launch_year !== "2020";
}

const getLaunches = () =>{
    const launches = fetch('https://api.spacexdata.com/v3/launches/')
        .then(value => value.json());

    const filtered = launches.then((value => value.filter(launchFilter)));

    return filtered;
}

export {getLaunches}