import React, {useEffect} from "react";
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";

import {createCar, updateCar} from "../../store/car.slice";

const Form = () => {
    const {handleSubmit, register, reset, setValue} = useForm();
    const dispatch = useDispatch();
    const {carForUpdate} = useSelector(state => state["carReducer"]);

    useEffect(() => {
        setValue("model", carForUpdate.model);
        setValue("price", carForUpdate.price);
        setValue("year", carForUpdate.year);
    }, [carForUpdate])

    const submit = (data) => {
        dispatch(createCar({data}));
        reset();
    }
    const update = (data) => {
        dispatch(updateCar({id: carForUpdate.id, newCar: data}));
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>Model: <input type="text" {...register('model')}/></label>
            <label>Price: <input type="text" {...register('price')}/></label>
            <label>Year: <input type="text" {...register('year')}/></label>
            <button onClick={handleSubmit(submit)}>Create</button>
            {carForUpdate.id && <button onClick={handleSubmit(update)}>Update</button>}
        </form>
    );
};

export default Form;