import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Loginization} from "./components/Login/Loginization";
import {Link} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Link to='../signin'>
                <p>
                    Sign in
                </p>
            </Link>
            <Loginization/>
        </div>
    );
}

export default App;
