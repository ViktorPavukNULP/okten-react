import React from 'react';

const Dog = ({dog}) => {
    return (
        <div className="Dog">
            {dog}
            <button>Delete</button>
        </div>
    );
};

export default Dog;