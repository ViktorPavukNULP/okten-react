import React from "react";
import {useSelector} from "react-redux";

import Task from "../Task/Task";
import "./List.css"

const List = () => {

    const {tasks} = useSelector(state => state["taskReducer"]);

    return (
        <div className="List">
            {tasks.map(task => <Task key={task.id} task={task}/> )}
        </div>
    );
};

export default List;