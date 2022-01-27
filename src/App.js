import "./App.css";
import {useReducer} from "react";

const reducer = (state, action) => {
  console.log("ggg")
}

function App() {
    const [state, dispatch] = useReducer(reducer, {cats: [], dogs: []});
    return (
        <div className="App">
            <div className="Header">
                Add Cat
                <input type="text"/>
                <button onClick={()=>dispatch()}>Save</button>
                Add Dog
                <input type="text"/>
                <button onClick={()=>dispatch()}>Save</button>
            </div>
        </div>
    );
}

export default App;
