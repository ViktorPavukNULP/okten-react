import React from 'react';

import Cat from "../Cat/Cat";
import "./Cats.css";

const Cats = ({state, dispatch}) => {
    return (
        <div className="Cats">
            {state.cats && state.cats.map(cat => <Cat key={cat.id} cat={cat} dispatch={dispatch}/>)}
        </div>
    );
};

export default Cats;