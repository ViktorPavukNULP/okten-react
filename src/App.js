import {useEffect, useState} from "react";

import {userService} from "./services/user.service";
import User from "./components/User/User";
import "./App.css"

function App() {

    const [users, setUsers] = useState([]);
    const [form, setForm] = useState({name: "", username: "", email: ""})

    useEffect(() => {
        userService.getAll()
            .then(value => setUsers(value));
    }, [])

    const onFormChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    }

    const send = (e) => {
        e.preventDefault();
        userService.getAllFiltered(form)
            .then(value => setUsers(value));
    }

    return (
        <div className="App">
            <form onSubmit={send}>
                <label>Name: <input type="text" name="name" value={form.name} onChange={onFormChange}/></label>
                <label>Userame: <input type="text" name="username" value={form.username}
                                       onChange={onFormChange}/></label>
                <label>Email: <input type="text" name="email" value={form.email} onChange={onFormChange}/></label>
                <button>Filter</button>
            </form>
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
}

export default App;
