import {useReducer} from "react";

import Form from "./components/Form/Form";
import Main from "./components/Main/Main";
import "./App.css";

const reducer = (state, action) => {
    const newState = {...state}
    switch (action.type) {
        case "Add": {
            const newPets = [...newState[action.pet]];
            newPets.push({name: action.name, id: Date.now()})
            newState[action.pet] = newPets;
            break;
        }
        case "Delete": {
            newState[action.pet] = newState[action.pet].filter(pet => pet.id !== action.id);
            break;
        }
        default: {
            throw new Error("Wrong action")
        }

    }
    console.log(newState);
    return newState;
}

function App() {
    const [state, dispatch] = useReducer(reducer, {cats: [], dogs: []});
    return (
        <div className="App">
            <Form dispatch={dispatch}/>
            <Main state={state} dispatch={dispatch}/>
        </div>
    );
}

export default App;
