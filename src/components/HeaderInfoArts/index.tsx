import { StyleHeaderDashboard } from "../HeaderDashBoard/styled";
import voltar from"../../assets/voltar.png";
import start from"../../assets/star.svg";
import {  useNavigate } from "react-router-dom";

export const HeaderInfoArts=()=>{
    const navigate=useNavigate()
    return(
        <StyleHeaderDashboard>
            <nav>
                <h2>Kenzie Museu</h2>
                <div>
                    <div>
                        <img className="iconFavorite" src={start} alt="Favoritos" onClick={()=>navigate("/profile")}/>
                        <img className="iconExit" src={voltar} alt="Sair" onClick={()=>navigate("/dashboard")}/>
                    </div>
                </div>
            </nav>
        </StyleHeaderDashboard>
    )
}