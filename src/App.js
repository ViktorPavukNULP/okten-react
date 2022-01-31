import {Route, Routes} from "react-router-dom";

import CarsPage from "./pages/CarsPage/CarsPage";
import Layout from "./components/Layout/Layout";
import UsersPage from "./pages/UsersPage/UsersPage";
import PostsPage from "./pages/PostsPage/PostsPage";
import CommentsPage from "./pages/CommentsPage/CommentsPage";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route path="cars" element={<CarsPage/>}/>
                    <Route path="users" element={<UsersPage/>}/>
                    <Route path="posts" element={<PostsPage/>}/>
                    <Route path="comments" element={<CommentsPage/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
