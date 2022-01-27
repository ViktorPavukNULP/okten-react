import "./App.css";
import {useReducer} from "react";
import Dog from "./components/Dog/Dog";
import Cat from "./components/Cat/Cat";
import Form from "./components/Form/Form";

const reducer = (state, action) => {
    switch (action.type) {
        case "Cat": {
            state.cats.push(action.name)
            break;
        }
        case "Dog": {
            state.dogs.push(action.name)
            break;
        }

    }
    console.log(state);
    return state
}

function App() {
    const [state, dispatch] = useReducer(reducer, {cats: ['cat', 'cat2'], dogs: ['dog']});
    return (
        <div className="App">
            <div className="Header">
                <Form dispatch={dispatch}/>
            </div>
            <div className="Main">
                <div className="Cats">
                    {state.cats && state.cats.map(cat => <Cat cat={cat}/>)}
                </div>
                <div className="Dogs">
                    {state.dogs && state.dogs.map(dog => <Dog dog={dog}/>)}
                </div>
            </div>
        </div>
    );
}

export default App;
