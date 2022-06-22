import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from '../authentication/login/Login';
import Signup from '../authentication/signup/Signup';
import Forget from '../authentication/forgetpswd/Forget';
import Email from '../authentication/forgetpswd/Email';
import Admin from "../pages/admin/admin";
import ProfileDetail from "../pages/admin/view/view";
export default function Navigate() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route exact path="/" element={<Login />}></Route>
                    <Route path="/signup" element={<Signup />}></Route>
                    <Route path="/forget" element={<Forget />}></Route>
                    <Route path="/email" element={<Email />}></Route> 
                    <Route path="/admin" element={<Admin />}></Route> 
                    <Route path="/view" element={<ProfileDetail/>}></Route>
                </Routes>
                
            </div>
        </Router>

    );
}