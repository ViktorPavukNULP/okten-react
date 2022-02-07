import {Route, Routes} from "react-router-dom";

import CarsPage from "./pages/CarsPage/CarsPage";
import Layout from "./components/Layout/Layout";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route path="cars" element={<CarsPage/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;