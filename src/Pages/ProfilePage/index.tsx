import React, { useContext } from "react";
import retangle from "../../assets/rectangle.svg";
import homeButton from "../../assets/homeButton.png";
import { StyledHeader, StyledMain } from "./style";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../providers/UserContext";
const ProfilePage = () => {
  const navigate = useNavigate();

  const homeNavigate = () => {
    navigate("/dashboard");
  };
  const { user } = useContext(UserContext);

  return (
    <>
      <StyledHeader>
        <h1 className="logo">Kenzie Museu</h1>
        <button>
          <img src={homeButton} alt="Ir para inicio" onClick={homeNavigate} />
        </button>
      </StyledHeader>
      {user ? (
        <StyledMain>
          <img className="img-bg" src={retangle} alt="" />
          <div className="profile-container">
            <p>Bem vindo de volta, {user?.name}</p>
            <p>{user?.email}</p>
          </div>
          <div className="favorite-container">
            <p>Você ainda não possuí nenhuma obra favorita</p>
            <button>Adicionar Favoritos</button>
          </div>
        </StyledMain>
      ) : (
        <StyledMain>
          <img className="img-bg" src={retangle} alt="" />
          <div className="profile-container"></div>
          <div className="favorite-container">
            <p>Você ainda não possuí nenhuma obra favorita</p>
            <button onClick={homeNavigate}>Adicionar Favoritos</button>
          </div>
        </StyledMain>
      )}
    </>
  );
};

export default ProfilePage;
