import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {photoService} from "../../services/photo.service";

const PhotosPage = () => {

    const [photos, setPhotos] = useState([]);
    const {photoId} = useParams();

    useEffect(()=>{
        photoService.getByAlbumId(photoId)
            .then(value => setPhotos(value))
    },[photoId])

    return (
        <div className="PhotosPage">
            {photos.map(photo => {
                return <div key={photo.id}>
                    <h3>{photo.id} - {photo.title}</h3>
                    <img src={photo.thumbnailUrl} alt={photo.title}/>
                </div>
            })}
        </div>
    );
};

export default PhotosPage;