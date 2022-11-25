import {SignIn} from "./SignIn";
import React from "react";
import {Route, Routes} from "react-router-dom";

export const Loginization = () => {
    return <div>
        <h1>Loginization</h1>
        <p>Sign up</p>
       <Routes>
           <Route path={'signin'} element={<SignIn/>}/>
       </Routes>
    </div>
}