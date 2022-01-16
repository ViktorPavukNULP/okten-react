import {useState} from "react";

import UserDetails from "./components/User-details/UserDetails";
import "./App.css";
import Users from "./components/Users/Users";
import Posts from "./components/Posts/Posts";


function App() {

    const [user, setUser] = useState(null);
    const [userId, setUserId] = useState(null);

    const getUser = (user) => {
        setUser(user);
        setUserId(null);
    }

    const getUserId = (id) => {
        setUserId(id)
    }

    return (
        <div className="App">
            <div className="Wrap">
                <Users getUser={getUser}/>
                {user && <UserDetails user={user} getUserId={getUserId}/>}
            </div>
            {userId && <Posts userId={userId}/>}
        </div>
    );
}

export default App;
