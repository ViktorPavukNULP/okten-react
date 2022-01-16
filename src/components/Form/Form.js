import React, {useState} from 'react';

import "./Form.css";

const Form = ({filterUsers}) => {

    const [form, setForm] = useState({name: "", username: "", email: ""})

    const onFormChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    }

    const send = (e) => {
        e.preventDefault();
        filterUsers(form);
    }

    return (
        <div>
            <form onSubmit={send}>
                <label>Name: <input type="text" name="name" value={form.name} onChange={onFormChange}/></label>
                <label>Userame: <input type="text" name="username" value={form.username}
                                       onChange={onFormChange}/></label>
                <label>Email: <input type="text" name="email" value={form.email} onChange={onFormChange}/></label>
                <button>Filter</button>
            </form>
        </div>
    );
};

export default Form;