import React from 'react';

import Dog from "../Dog/Dog";
import "./Dogs.css"

const Dogs = ({state, dispatch}) => {
    return (
        <div className="Dogs">
            {state.dogs && state.dogs.map(dog => <Dog key={dog.id} dog={dog} dispatch={dispatch}/>)}
        </div>
    );
};

export default Dogs;