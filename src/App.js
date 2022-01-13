import {useEffect, useState} from "react";

import {userService} from "./services/user.service";
import {postService} from "./services/post.service";
import User from "./components/User/User";
import UserDetails from "./components/User-details/UserDetails";
import Post from "./components/Post/Post";
import "./App.css";


function App() {

    const [users, setUsers] = useState([]);
    const [user, setUser] = useState(null);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        userService.getAll()
            .then(value => setUsers(value))
    }, [])

    const getUserId = (id) => {
        userService.getById(id)
            .then(value => setUser(value))
    }

    const getPostByUserId = (id) => {
        postService.getByUserId(id)
            .then(value => setPosts(value))
    }

    return (
        <div className="App">
            <div className="Users">
                <div className="AllUsers">
                    {users.map(user => <User key={user.id} user={user} getUserId={getUserId}/>)}
                </div>
                {user && <UserDetails user={user} getPostId={getPostByUserId}/>}
            </div>
            <div className="Posts">
                {posts && posts.map(post => <Post key={post.id} post={post}/>)}
            </div>
        </div>
    );
}

export default App;
