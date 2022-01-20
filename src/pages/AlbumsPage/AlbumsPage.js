import React, {useEffect, useState} from 'react';
import {Link, Outlet, useParams} from "react-router-dom";

import {albumService} from "../../services/album.service";
import "./AlbumsPage.css";

const AlbumsPage = () => {

    const [albums, setAlbums] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        albumService.getByUsertId(id)
            .then(value => setAlbums(value))
    }, [id])

    return (
        <div className="AlbumsPage">
            {albums.map(album => {
                return <div key={album.id}>
                    <h3>{album.id} - {album.title}
                    <Link to={album.id.toString()}><button>Photos</button></Link>
                    </h3>
                </div>
            })}
            <Outlet/>
        </div>
    );
};

export default AlbumsPage;