import React from 'react';

import './Comment.css';

const Comment = ({id,name}) => {
    return (
        <div className={'comment'}>
            <h3>{id} - {name}</h3>
        </div>
    );
};

export default Comment;