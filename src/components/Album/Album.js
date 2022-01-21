import React from 'react';
import {Link} from "react-router-dom";

const Album = ({album}) => {
    return (
        <div className="Album">
            <h3>{album.id} - {album.title}
                <Link to={album.id.toString()}><button>Photos</button></Link>
            </h3>
        </div>
    );
};

export default Album;