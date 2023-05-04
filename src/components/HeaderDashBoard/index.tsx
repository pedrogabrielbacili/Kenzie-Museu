import { useNavigate } from "react-router-dom"
import { Search } from "./Search"

export const Header=()=>{
    const navigate=useNavigate()
   const Logout=()=>{
    localStorage.removeItem("@TOKEN")
    localStorage.removeItem("@ID")
    navigate("/")
   }
    return(
        <div>
            <h1>Kenzie Museu</h1>
            <Search/>
            <button onClick={Logout}>Sair</button>
            <button>Lista de favorito</button>
        </div>
    )
}