import React from 'react';

const Dog = ({dog, dispatch}) => {
    function onDelete() {
        dispatch({type: "Delete", pet: "dogs", id: dog.id})
    }

    return (
        <div className="Dog">
            {dog.name}
            <button onClick={onDelete}>Delete</button>
        </div>
    );
};

export default Dog;