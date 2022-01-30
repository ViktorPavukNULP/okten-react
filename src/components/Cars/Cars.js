import React from "react";
import Car from "../Car/Car";
import {useSelector} from "react-redux";

const Cars = () => {
    const {cars} = useSelector(state => state["carReducer"]);

    return (
        <div>
            {cars.map(car=><Car key={car.id} car={car}/>)}
        </div>
    );
};

export default Cars;