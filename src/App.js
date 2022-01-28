import "./App.css";
import {useReducer} from "react";
import Dog from "./components/Dog/Dog";
import Cat from "./components/Cat/Cat";
import Form from "./components/Form/Form";

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
        default:{
            throw new Error("Wrong animal")
        }

    }
    console.log(newState);
    return newState;
}

function App() {
    const [state, dispatch] = useReducer(reducer, {cats: [], dogs: []});
    return (
        <div className="App">
            <div className="Header">
                <Form dispatch={dispatch}/>
            </div>
            <div className="Main">
                <div className="Cats">
                    {state.cats && state.cats.map(cat => <Cat key={cat.id} cat={cat} dispatch={dispatch}/>)}
                </div>
                <div className="Dogs">
                    {state.dogs && state.dogs.map(dog => <Dog key={dog.id} dog={dog} dispatch={dispatch}/>)}
                </div>
            </div>
        </div>
    );
}

export default App;
