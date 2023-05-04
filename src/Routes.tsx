import { Routes, Route } from "react-router-dom";
import { LoginPage } from "./Pages/Login/index";
import {  RegisterPage } from "./Pages/Register/index";
import { HomePage } from "./Pages/HomePage/index";
import { DashBoardPage } from "./Pages/DashBoardPage";
import { CardProvider } from "./providers/CardContext";
import { NotFoundPage } from "./Pages/NotFound";

 const MainRouter=()=>(
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="*" element={<NotFoundPage /> } />
        <Route path="/dashboard" element={<CardProvider><DashBoardPage/></CardProvider>}/>
    </Routes>
)
export default MainRouter;