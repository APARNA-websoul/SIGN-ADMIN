import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from '../authentication/login/Login';
import Signup from '../authentication/signup/Signup';
import Forget from '../authentication/forgetpswd/Forget';
import Email from '../authentication/forgetpswd/Email';
import Admin from "../pages/admin/admin";
import ProfileDetail from "../pages/admin/view/view";
import ProductData from '../pages/Products'
import ProductDetails from "../pages/ProductDetails";

export default function Navigate() {
    return (
        <Router>
            <div>
                <Routes >
                    <Route exact path="/" element={<Login />}></Route>
                    <Route path="/signup" element={<Signup />}></Route>
                    <Route path="/forget" element={<Forget />}></Route>
                    <Route path="/email" element={<Email />}></Route>
                    <Route path="/admin" element={<Admin />}></Route>
                    <Route path="/view/:id" element={<ProfileDetail />}></Route>
                    <Route path='/products' element={ <ProductData />}>
                       
                    </Route>
                    <Route path='/product-details/:id' element={<ProductDetails />} >
                        
                    </Route>
                   
                </Routes >

            </div>
        </Router>

    );
}