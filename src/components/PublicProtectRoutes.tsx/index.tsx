import { useContext } from "react"
import { UserContext } from "../../providers/UserContext"
import { Navigate } from "react-router";

export const PublicProtectRoutes=()=>{
    const {user}=useContext(UserContext);

    return user ? <Navigate to="/dashboard"/>:<Navigate to="/"/>   
}