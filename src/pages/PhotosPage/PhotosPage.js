import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {photoService} from "../../services/photo.service";
import Photo from "../../components/Photo/Photo";

const PhotosPage = () => {

    const [photos, setPhotos] = useState([]);
    const {photoId} = useParams();

    useEffect(()=>{
        photoService.getByAlbumId(photoId)
            .then(value => setPhotos(value))
    },[photoId])

    return (
        <div className="PhotosPage">
            {photos.map(photo => <Photo key={photo.id} photo={photo}/>)}
        </div>
    );
};

export {PhotosPage};