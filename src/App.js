import {Route, Routes} from "react-router-dom";

import Layout from "./components/Layout/Layout";
import {
    AlbumsPage,
    PhotosPage,
    PostCommentsPage,
    PostDetailsPage,
    PostsPage,
    UserDetailsPage,
    UserPostsPage, UsersPage
} from "./pages";


function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route path="users" element={<UsersPage/>}>
                        <Route path=":id" element={<UserDetailsPage/>}>
                            <Route path="posts" element={<UserPostsPage/>}/>
                        </Route>
                        <Route path=":id/albums" element={<AlbumsPage/>}>
                            <Route path=":photoId" element={<PhotosPage/>}/>
                        </Route>
                    </Route>
                    <Route path="posts" element={<PostsPage/>}>
                        <Route path=":id" element={<PostDetailsPage/>}>
                            <Route path="comments" element={<PostCommentsPage/>}/>
                        </Route>
                    </Route>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
