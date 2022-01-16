import {useEffect, useState} from "react";

import {userService} from "./services/user.service";
import Users from "./components/Users/Users";
import Form from "./components/Form/Form";

function App() {

    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);

    useEffect(() => {
        userService.getAll()
            .then(value => {
                setUsers(value);
                setFilteredUsers(value);
            });
    }, [])


    const filterUsers = ({name, username, email}) => {
        let filteredArr = [...users];

        if (name){
            filteredArr = filteredArr.filter(user => user.name.toLowerCase().includes(name));
        }
        if (username){
            filteredArr = filteredArr.filter(user => user.username.toLowerCase().includes(username));
        }
        if (email){
            filteredArr = filteredArr.filter(user => user.email.toLowerCase().includes(email));
        }
        setFilteredUsers(filteredArr);
    }

    return (
        <div className="App">
            {/*<form onSubmit={send}>*/}
            {/*    <label>Name: <input type="text" name="name" value={form.name} onChange={onFormChange}/></label>*/}
            {/*    <label>Userame: <input type="text" name="username" value={form.username}*/}
            {/*                           onChange={onFormChange}/></label>*/}
            {/*    <label>Email: <input type="text" name="email" value={form.email} onChange={onFormChange}/></label>*/}
            {/*    <button>Filter</button>*/}
            {/*</form>*/}
            <Form filterUsers={filterUsers}/>
            <Users users={filteredUsers}/>
        </div>
    );
}

export default App;
