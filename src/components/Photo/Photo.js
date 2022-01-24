import React from 'react';

import baseURL, {urls} from "../../configs/urls";
import "./Photo.css";

const Photo = ({keyword, random, setRandom}) => {

    const update = () => {
        setRandom(random + 1)
    }

    return (
        <div className="Photo">
            <img src={`${baseURL}${urls.res_480_640}${keyword}?random=${random}`} alt="dog"/>
            <button onClick={update}>Update</button>
        </div>
    );
};

export default Photo;