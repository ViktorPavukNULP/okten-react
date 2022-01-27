import React from 'react';
import {useForm} from 'react-hook-form';

const Form = ({dispatch}) => {
    const {register, handleSubmit} = useForm();

    const addCat = (form) => {
        console.log(form);
        dispatch({type: "Cat", name: form.cat});
    }
    const addDog = (form) => {
        console.log(form);
        dispatch({type: "Dog", name: form.dog});
    }
    return (
        <form onSubmit={e => e.preventDefault()}>
            <label>
                Add Cat
                <input type="text" {...register("cat")}/>
                <button onClick={handleSubmit(addCat)}>Save</button>
            </label>
            <label>
                Add Dog
                <input type="text" {...register("dog")}/>
                <button onClick={handleSubmit(addDog)}>Save</button>
            </label>
        </form>
    );
};

export default Form;