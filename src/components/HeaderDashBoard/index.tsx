import { useNavigate } from "react-router-dom";
import { Search } from "./Search";
import { StyleHeaderDashboard } from "./styled";
import out from "../../assets/out.svg";
import start from "../../assets/star.svg";

export const StyleHeaderDashbaord = () => {
  const navigate = useNavigate();

  const Logout = () => {
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@ID");
    navigate("/");
  };
  const profile = () => {
    navigate("/profile");
  };
  return (
    <StyleHeaderDashboard>
      <nav>
        <h2>Kenzie Museu</h2>
        <div>
          <Search />
          <div>
            <img
              className="iconFavorite"
              src={start}
              alt="Favoritos"
              onClick={profile}
            />
            <img className="iconExit" src={out} alt="Sair" onClick={Logout} />
          </div>
        </div>
      </nav>
    </StyleHeaderDashboard>
  );
};
