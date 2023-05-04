import { useContext } from "react"
import { UserContext } from "../../providers/UserContext"
import { Navigate, Outlet, useNavigate } from "react-router";
import { CardProvider } from "../../providers/CardContext";

export const ProtectRoutes=()=>{
    const {user}=useContext(UserContext);

    return user ? <CardProvider><Outlet/></CardProvider> : <Navigate to="/"/>
}