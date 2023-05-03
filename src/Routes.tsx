import { Routes, Route } from "react-router-dom";
import { LoginPage } from "./Pages/Login/index";
import {  RegisterPage } from "./Pages/Register/index";
import { HomePage } from "./Pages/HomePage/index";

 const MainRouter=()=>(
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
    </Routes>
)
export default MainRouter;