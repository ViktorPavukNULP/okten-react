import React, {useRef} from "react";
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";

import {addTask} from "../../store/task.slice";
import "./Form.css";


const Form = () => {
    const {handleSubmit} = useForm();
    const refInput = useRef();
    const dispatch = useDispatch();
    const {tasks, done} = useSelector(state => state["taskReducer"]);

    const submit = () => {
        dispatch(addTask(refInput.current.value))
        refInput.current.value = '';
    }

    return (
        <div className="Header">
            <h2>All: {tasks.length}  Completed: {done}</h2>
            <form onSubmit={handleSubmit(submit)}>
                <label>Add task: <input type="text" ref={refInput}/></label>
                <button>Save</button>
            </form>
        </div>
    );
};

export default Form;