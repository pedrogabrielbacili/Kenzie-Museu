
import { Search } from "./Search"
import { StyleHeaderDashboard } from "./styled"
import out from"../../assets/out.svg"
import start from"../../assets/star.svg"
import { UserContext } from "../../providers/UserContext"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"

export const StyleHeaderDashbaord = () => {
    const { setUser } = useContext (UserContext)
    // const navigate=useNavigate()




  const Logout = () => {
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@ID");
    setUser(null);
  };
  
  return (
    <StyleHeaderDashboard>
      <nav>
        <h2>Kenzie Museu</h2>
        <div>
          <Search />
          <div>
            <img className="iconFavorite" src={start} alt="Favoritos" />
            <img
              className="iconExit"
              src={out}
              alt="Sair"
              onClick={() => Logout()}
            />
          </div>
        </div>
      </nav>
    </StyleHeaderDashboard>
  );
};
