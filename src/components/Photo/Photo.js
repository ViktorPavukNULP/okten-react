import React from 'react';

const Photo = ({photo}) => {
    return (
        <div className="Photo">
            <h3>{photo.id} - {photo.title}</h3>
            <img src={photo.thumbnailUrl} alt={photo.title}/>
        </div>
    );
};

export default Photo;