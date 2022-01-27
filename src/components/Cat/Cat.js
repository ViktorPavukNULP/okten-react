import React from 'react';

const Cat = ({cat}) => {
    return (
        <div className="Cats">
            {cat}
            <button>Delete</button>
        </div>
    );
};

export default Cat;