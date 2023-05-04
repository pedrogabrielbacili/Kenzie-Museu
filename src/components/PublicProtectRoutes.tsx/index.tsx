import { useContext } from "react"
import { UserContext } from "../../providers/UserContext"
import { Navigate, Outlet } from "react-router";

export const PublicProtectRoutes=()=>{
    const {user}=useContext(UserContext);

    return !user ?<Outlet/> : <Navigate to="dashboard"/>  
}