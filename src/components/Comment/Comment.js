import React from 'react';

import './Comment.css';

const Comment = ({id, name, body}) => {
    return (
        <div className="comment">
            <h3>{id} - {name}</h3>
            <p>{body}</p>
        </div>
    );
};

export default Comment;