import React from 'react';
import {useForm} from 'react-hook-form';

const Form = ({dispatch}) => {
    const {register, handleSubmit} = useForm();

    const addCat = (form) => {
        dispatch({type: "Add", pet: "cats", name: form.cat});
    }
    const addDog = (form) => {
        dispatch({type: "Add", pet: "dogs", name: form.dog});
    }
    return (
        <div className="Header">
            <form onSubmit={handleSubmit}>
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
        </div>
    );
};

export default Form;