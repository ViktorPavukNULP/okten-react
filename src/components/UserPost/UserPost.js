import React from 'react';

const UserPost = ({post}) => {
    return (
        <div className="UserPost">
                {post.id} - {post.title}
        </div>
    );
};

export default UserPost;