import React, {useEffect} from "react";
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {joiResolver} from "@hookform/resolvers/joi";

import {createCar, updateCar} from "../../store/car.slice";
import {CarValidator} from "../../validators/car.validator";

const Form = () => {
    const {handleSubmit, register, reset, setValue, formState: {errors}} = useForm({resolver: joiResolver(CarValidator), mode: "onTouched"});
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
            <div><label>Model: <input type="text" {...register('model')}/></label></div>
            {errors.model && <span>{errors.model.message}</span>}
            <div><label>Price: <input type="text" {...register('price')}/></label></div>
            {errors.price && <span>{errors.price.message}</span>}
            <div><label>Year: <input type="text" {...register('year')}/></label></div>
            {errors.year && <span>{errors.year.message}</span>}
            <div>
                <button onClick={handleSubmit(submit)}>Create</button>
            </div>
            {carForUpdate.id && <button onClick={handleSubmit(update)}>Update</button>}
        </form>
    );
};

export default Form;