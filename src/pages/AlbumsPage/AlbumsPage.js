import React, {useEffect, useState} from 'react';
import {Outlet, useParams} from "react-router-dom";

import {albumService} from "../../services/album.service";
import "./AlbumsPage.css";
import Album from "../../components/Album/Album";

const AlbumsPage = () => {

    const [albums, setAlbums] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        albumService.getByUsertId(id)
            .then(value => setAlbums(value))
    }, [id])

    return (
        <div className="AlbumsPage">
            {albums.map(album => <Album key={album.id} album={album}/>)}
            <Outlet/>
        </div>
    );
};

export {AlbumsPage};