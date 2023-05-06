import { Header } from "../../components/Form/Header";
import HomeBigImg from "../../assets/HomeBigImg.svg";
import africa700 from "../../assets/africa700.svg";
import asianArt from "../../assets/asianArt.svg";
import americanwing from "../../assets/americanwing.svg";
import HomePreviewImg from "../../assets/HomePreviewImg.svg";
import {
  StyledDivButtons,
  StyledMain,
  StyledLoginButton,
  StyledRegisterButton,
  StyledDivSmallImg,
} from "./style";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const navigate = useNavigate();

  const loginRedirect = () => {
    navigate("/login");
  };
  const registerRedirect = () => {
    navigate("/register");
  };

  return (
    <>
      <Header />
      <StyledMain>
        <div className="container">
          <div className="show-img">
            <img src={HomeBigImg} />
          </div>
          <StyledDivButtons className="flex-column">
            <h1>
              <span className="welcome">Bem vindo ao</span> Metropolitan New
              York Museum
            </h1>
            <StyledLoginButton onClick={loginRedirect}>Login</StyledLoginButton>
            <a href="/register"><span>Não possui uma conta?</span></a>
            <StyledRegisterButton onClick={registerRedirect}>
              Cadastre-se
            </StyledRegisterButton>
            <StyledDivSmallImg>
              <img src={africa700} />
              <img src={asianArt} />
              <img src={americanwing} />
              <img src={HomePreviewImg} />
            </StyledDivSmallImg>
          </StyledDivButtons>
        </div>
      </StyledMain>
    </>
  );
};
