import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../service/api";
import {  ICard } from "../../providers/CardContext";
import { StyledArtDiv, StyledMain, StyledSpanBtnDiv } from "./style";
import { HeaderInfoArts } from "../../components/HeaderInfoArts";


export const InfoArtPage = () => {
  const { id } = useParams();

  const [art, setArt] = useState<ICard | null>(null);

  const loadArt = async () => {
    try {
      const { data } = await api.get<ICard>(`/arts/${id}`);
      setArt(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    loadArt();
  }, [id]);

  return (
    <>
      <HeaderInfoArts />
      <StyledMain>
        <StyledArtDiv>
          <div>
            <h1>{art?.title}</h1>
            <h2>{art?.artist}</h2>
            <h3>date:{art?.date}</h3>
            <StyledSpanBtnDiv>
              <span>dimensions:{art?.dimensions}</span>
              <button>Adicionar aos favoritos</button>
            </StyledSpanBtnDiv>
          </div>
          <div>
            {" "}
            <img src={art?.img} />
          </div>
        </StyledArtDiv>
      </StyledMain>
    </>
  );
};
