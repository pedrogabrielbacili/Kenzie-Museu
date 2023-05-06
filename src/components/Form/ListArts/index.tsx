import { useContext } from "react";
import { CardContext } from "../../../providers/CardContext";
import { CardArts } from "./CardArts";

export const ListArts = () => {
  const { filterCardsArt } = useContext(CardContext);

  return (
    <ul>
      {filterCardsArt.map((card) => {
        return (
          <CardArts
            key={card.id}
            id={card.id}
            img={card.img}
            title={card.title}
            artist={card.artist}
          />
        );
      })}
    </ul>
  );
};
