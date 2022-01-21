import React from 'react';

const PostComments = ({comment}) => {
    return (
        <div className="Comment">
            <h3>{comment.id} - {comment.name}</h3>
            <p>{comment.body}</p>
        </div>
    );
};

export default PostComments;