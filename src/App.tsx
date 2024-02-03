import React from 'react';
import logo from './logo.svg';
import './App.css';
import {CreateUser} from "./components/CreateUser";
import {GetUser} from "./components/GetUser";

function App() {
    return (
        <>
            <CreateUser></CreateUser>
            <GetUser></GetUser>
        </>
    );
}

export default App;
