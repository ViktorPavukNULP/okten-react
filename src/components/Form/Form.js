import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {joiResolver} from "@hookform/resolvers/joi";

import {carService} from "../../services/car.service";
import {CarValidator} from "../../validators/car.validator";

const Form = ({update, car}) => {
    const [formError, serFormError] = useState({model: '', price: '', year: ''})
    const {
        register, handleSubmit, watch, formState: {errors}
    } = useForm(); // {resolver: joiResolver(CarValidator), mode: "onTouched"}

    const addCar = (car) => {
        carService.createCar(car).then(value => {
            console.log(value);
            update(value);
        }).catch(error => {
            serFormError(error.response.data);
            console.log(formError);
            update(null);
        });
    }

    const updateById = (car) => {
        carService.updateById(car.id, car).then(value => {
            console.log(value);
            update(car);
        });
    }

    const deleteById = (car) => {
        carService.deleteById(car.id).then(value => {
            console.log(value);
            update(car);
        });
    }

    return (
        <div>
            <form onSubmit={handleSubmit()}>
                <div><label>ID: <input type="text" defaultValue={''} {...register("id")}/></label></div>
                {errors.id && <span>{errors.id.message}</span>}
                <div><label>Model: <input type="text" defaultValue={''} {...register("model")}/></label></div>
                {/*{formError.model && <span>{formError.model}</span>}*/}
                {errors.model && <span>{errors.model.message}</span>}
                <div><label>Price: <input type="text" defaultValue={''} {...register("price")}/></label></div>
                {/*{formError.price && <span>{formError.price}</span>}*/}
                {errors.price && <span>{errors.price.message}</span>}
                <div><label>Year: <input type="text" defaultValue={''} {...register("year")}/></label></div>
                {/*{formError.year && <span>{formError.year}</span>}*/}
                {errors.year && <span>{errors.year.message}</span>}
                <div>
                    <button onClick={handleSubmit(addCar)}>Create</button>
                    <button onClick={handleSubmit(updateById)}>Update by ID</button>
                    <button onClick={handleSubmit(deleteById)}>Delete by ID</button>
                </div>
                {car && <span>Виконано {car.id} - {car.model}</span>}
            </form>
        </div>
    );
};

export default Form;