import React, {useState} from 'react';
import {useForm} from 'react-hook-form';

import {carService} from "../../services/car.service";

const Form = () => {
    const [formError, serFormError] = useState({model: '', price: '', year: ''})
    const {register, handleSubmit, watch, formState: {errors}} = useForm();

    const submit = (car) => {
        carService.createCar(car).then(value => console.log(value)).catch(error => {
            serFormError(error.response.data)
        });
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <div><label>Model: <input type="text" defaultValue={''} {...register("model")}/></label></div>
                {formError.model && <span>{formError.model}</span>}
                <div><label>Price: <input type="text" defaultValue={''} {...register("price")}/></label></div>
                {formError.price && <span>{formError.price}</span>}
                <div><label>Year: <input type="text" defaultValue={''} {...register("year")}/></label></div>
                {formError.year && <span>{formError.year}</span>}
                <div>
                    <button>Send</button>
                </div>
            </form>
        </div>
    );
};

export default Form;