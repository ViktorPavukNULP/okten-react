import React from "react";

import Cats from "../Cats/Cats";
import Dogs from "../Dogs/Dogs";
import "./Main.css";

const Main = ({state, dispatch}) => {
    return (
        <div className="Main">
            <Cats state={state} dispatch={dispatch}/>
            <Dogs state={state} dispatch={dispatch}/>
        </div>
    );
};

export default Main;