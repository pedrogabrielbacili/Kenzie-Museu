import { useContext } from "react";
import retangle from "../../assets/rectangle.svg";
import home from "../../assets/homee.svg";
import { StyledHeader, StyledMain } from "./style";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../providers/UserContext";
import { CardContext } from "../../providers/CardContext";
import { CardArts } from "../../components/Form/ListArts/CardArts";

const ProfilePage = () => {
  const navigate = useNavigate();

  const homeNavigate = () => {
    navigate("/dashboard");
  };

  const { user } = useContext(UserContext);

  const { favorite } = useContext(CardContext);

  return (
    <>
      <StyledHeader>
        <nav>
          <h1 className="logo">Kenzie Museu</h1>
          <button>
            <img src={home} alt="Ir para inicio" onClick={homeNavigate} />
          </button>
        </nav>

      </StyledHeader>   

      {user ? (
     
        <StyledMain>
          <div className="profile-container">
            <p>Bem vindo(a), {user?.name}</p>
            <p>{user?.email}</p>
          </div>
          <div className="favorite-container">
            <p>Você ainda não possuí nenhuma obra favorita.</p>
            <button>Adicionar Favoritos</button>
          </div>
        </StyledMain>
      ) : (
        <StyledMain>
          <img className="img-bg" src={retangle} alt="" />
          <div className="profile-container"></div>
          <div className="favorite-container">
            <p>Minhas obras favoritas</p>
            {favorite.map((art) => (
              <CardArts
                key={art.id}
                id={art.id}
                img={art.img}
                title={art.title}
                artist={art.artist}
              />
            ))}
          </div>
        </StyledMain>
      )}
    </>
  );
};

export default ProfilePage;
