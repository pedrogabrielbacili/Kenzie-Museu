import { useForm } from "react-hook-form";
import Input from "../../Form/Input";
import { useContext } from "react";
import { CardContext } from "../../../providers/CardContext";
import Lupa from "../../../assets/search.png";
import record from "../../../assets/record_voice.svg";
import trash from "../../../assets/trash.svg";
import searchvoice from "../..//../assets/search200.png";
import SearchForVoice from "../../SearchForVoice";

interface ISearch {
  search: string;
  text: string;
}
export const Search = () => {
  const { register, handleSubmit } = useForm<ISearch>();
  const { cardsList, setFilterCardsArt } = useContext(CardContext);
  const {
    text,
    startListening,
    setText,
    hasRecognitionSupport,
  } = SearchForVoice();

  const submit = (formData: ISearch) => {
    const filterArts = cardsList.filter((art) =>
      formData.search
        ? art.title.toLowerCase().includes(formData.search.toLowerCase()) ||
          art.artist.toLowerCase().includes(formData.search.toLowerCase())
        : cardsList
    );
    console.log(filterArts);
    setFilterCardsArt(filterArts);
  };
  const SeachVoice = () => {
    const filterVoice = cardsList.filter((art) =>
      text
        ? art.title.toLowerCase().includes(text.toLowerCase()) ||
          art.artist.toLowerCase().includes(text.toLowerCase())
        : cardsList
    );
    console.log(filterVoice);
    setFilterCardsArt(filterVoice);
  };
  const excluir = () => {
    setFilterCardsArt(cardsList);
    setText("");
  };

  return (
    <>
      <div>
        {hasRecognitionSupport ? (
          <>
            <div>
              <img
                className="iconRecord"
                src={record}
                alt=""
                onClick={startListening}
              />
              <img
                className="iconSerch"
                src={searchvoice}
                alt="Icon search"
                onClick={SeachVoice}
              />
              <img
                className="imgExcluir"
                src={trash}
                alt=""
                onClick={excluir}
              />
            </div>
          </>
        ) : (
          <h1>teste</h1>
        )}
      </div>
      <form onSubmit={handleSubmit(submit)}>
        <Input
          className="inputSearch"
          placeholder={text ? text : "buscar"}
          {...register("search")}
        />
        <button>
          <img src={Lupa} alt="Pesquisar" />
        </button>
      </form>
    </>
  );
};
