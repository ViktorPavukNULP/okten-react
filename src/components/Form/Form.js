import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {joiResolver} from "@hookform/resolvers/joi";

import {carService} from "../../services/car.service";
import {CarValidator} from "../../validators/car.validator";

const Form = ({update, car}) => {
    const [formError, serFormError] = useState({model: '', price: '', year: ''})
    const {
        register, handleSubmit, watch, formState: {errors}
    } = useForm({resolver: joiResolver(CarValidator), mode: "onTouched"});

    const submit = (car) => {
        console.log(car);
        carService.createCar(car).then(value => {
            console.log(value);
            update(value);
        }).catch(error => {
            serFormError(error.response.data);
            console.log(formError);
            update(null);
        });
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
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
                    <button>Create</button>
                </div>
                {car && <span>Добавлено {car.model}</span>}
            </form>
        </div>
    );
};

export default Form;