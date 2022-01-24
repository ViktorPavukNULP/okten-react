import {useState} from "react";

import Layout from "./components/Layout/Layout";
import Photo from "./components/Photo/Photo";
import "./App.css";

function App() {
    const [random, setRandom,] = useState(0);
    const [keyword, setKeyword,] = useState(null);


    return (
        <div className="App">
            <Layout setKeyword={setKeyword} setRandom={setRandom}/>
            {keyword && <Photo keyword={keyword} random={random} setRandom={setRandom}/>}
        </div>
    );
}

export default App;
