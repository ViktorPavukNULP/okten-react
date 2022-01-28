import React from 'react';

const Cat = ({cat, dispatch}) => {
    const onDelete = ()=>{
        dispatch({type: "Delete", pet: "cats", id: cat.id})
    }
    return (
        <div className="Cats">
            {cat.name}
            <button onClick={onDelete}>Delete</button>
        </div>
    );
};

export default Cat;