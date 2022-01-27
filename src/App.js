import {useReducer} from "react";

const reducer = (state, action) => {
    switch (action.type) {
        case "increment": {
            state = {...state, [action.counter]: state[action.counter] + 1}
            break;
        }
        case "decrement": {
            state = {...state, [action.counter]: state[action.counter] - 1}
            break;
        }
        case "reset": {
            state = {...state, [action.counter]: 0}
            break;
        }
        default: {
            throw new Error("Unknown button")
        }
    }
    return state;
}

function App() {
    const [state, dispatch] = useReducer(reducer, {count1: 0, count2: 0, count3: 0})
    return (
        <div className="App">
            <div>{state.count1}</div>
            <button onClick={() => dispatch({counter: "count1", type: "increment"})}>increment</button>
            <button onClick={() => dispatch({counter: "count1", type: "decrement"})}>decrement</button>
            <button onClick={() => dispatch({counter: "count1", type: "reset"})}>reset</button>
            <div>{state.count2}</div>
            <button onClick={() => dispatch({counter: "count2", type: "increment"})}>increment</button>
            <button onClick={() => dispatch({counter: "count2", type: "decrement"})}>decrement</button>
            <button onClick={() => dispatch({counter: "count2", type: "reset"})}>reset</button>
            <div>{state.count3}</div>
            <button onClick={() => dispatch({counter: "count3", type: "increment"})}>increment</button>
            <button onClick={() => dispatch({counter: "count3", type: "decrement"})}>decrement</button>
            <button onClick={() => dispatch({counter: "count3", type: "reset"})}>reset</button>
        </div>
    );
}

export default App;
