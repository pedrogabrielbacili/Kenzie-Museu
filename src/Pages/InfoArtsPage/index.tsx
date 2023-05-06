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
          <section>
            <div className="divImg">
              {" "}
              <img src={art?.img} />
            </div>
            <div className="divTitle">
              <span>Title:</span>
              <h2>{art?.title}</h2>
              <span>Artist/Culture:</span>
              <h2> {art?.artist}</h2>
              <span>Date:</span>
              <h2>{art?.date}</h2>
              <StyledSpanBtnDiv>
                <span>Dimensions:</span>
                <h4>{art?.dimensions}</h4>
                <button>Adicionar aos favoritos</button>
              </StyledSpanBtnDiv>
            </div>
          </section>
        </StyledArtDiv>
      </StyledMain>
    </>
  );
};
