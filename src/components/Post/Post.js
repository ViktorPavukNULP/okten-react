import React from 'react';

import './Post.css';

const Post = ({id,title}) => {
    return (
        <div className={'post'}>
            <h3>{id} - {title}</h3>
        </div>
    );
};

export default Post;