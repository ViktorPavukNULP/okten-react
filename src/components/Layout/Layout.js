import React from 'react';

import "./Layout.css";

const Layout = ({setRandom, setKeyword}) => {

    function onClick(e){
        setRandom(1);
        setKeyword(`/${e.target.firstChild.data.toLowerCase()}`);
    }

    return (
        <div className="Layout">
            <button onClick={onClick}>Cat</button>
            <button onClick={onClick}>Car</button>
            <button onClick={onClick}>Dog</button>
            <button onClick={onClick}>Girl</button>
            <button onClick={onClick}>Laptop</button>
        </div>
    );
};

export default Layout;