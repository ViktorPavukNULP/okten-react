import React, {useRef} from "react";
import {useDispatch} from "react-redux";

import {decrementDone, deleteTask, incrementDone} from "../../store/task.slice";
import "./Task.css";

const Task = ({task}) => {
    const dispatch = useDispatch();
    const refH1 = useRef();
    const refCheckbox = useRef();

    const btnDelete = () => {
        dispatch(deleteTask(task.id));
        if (refCheckbox.current.checked){
            dispatch(decrementDone());
        }
    }
    const checkboxChange = () => {
        if (refCheckbox.current.checked){
            refH1.current.classList.add("Done");
            dispatch(incrementDone());
        }else{
            dispatch(decrementDone());
            refH1.current.classList.remove("Done");
        }
    }
    return (
        <div className="Task">
            <div><h1 ref={refH1}><input type="checkbox" onChange={checkboxChange} ref={refCheckbox}/> {task.name}</h1></div>
            <div>
                <button onClick={btnDelete}>Delete</button>
            </div>
        </div>
    );
};

export default Task;