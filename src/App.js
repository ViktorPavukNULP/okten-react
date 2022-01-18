import Cars from "./components/Cars/Cars";
import Form from "./components/Form/Form";
import {useState} from "react";

function App() {

    const [car, setCar] = useState(null);

    const update = (newCar) =>{
        setCar(newCar);
    }

    return (
        <div className="App">
            <Form update={update} car={car}/>
            <Cars trigger={car}/>
        </div>
    );
}

export default App;
