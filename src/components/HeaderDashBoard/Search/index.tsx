import { useForm } from "react-hook-form";
import Input from "../../Form/Input";
import { useContext } from "react";
import { CardContext } from "../../../providers/CardContext";
import Lupa from "../../../assets/search.png";
import SearchForVoice from "../../SearchForVoice";

interface ISearch {
  search: string;
  text:string;
}
export const Search = () => {
  const { register, handleSubmit } = useForm<ISearch>();
  const { cardsList, setFilterCardsArt } = useContext(CardContext);
  const {text, startListening, setText, hasRecognitionSupport}=SearchForVoice()

  const submit = (formData: ISearch) => {
    const filterArts = cardsList.filter((art) =>
      formData.search
        ? art.title.toLowerCase().includes(formData.search.toLowerCase()) ||
          art.artist.toLowerCase().includes(formData.search.toLowerCase()) 
        : cardsList
    );
    setFilterCardsArt(filterArts);
  };
    const SeachVoice = () => {
      const filterVoice = cardsList.filter((art) =>
        text
          ? art.title.toLowerCase().includes(text.toLowerCase()) ||
            art.artist.toLowerCase().includes(text.toLowerCase()) 
          : cardsList
      );
        setFilterCardsArt(filterVoice)
    }
    const excluir=()=>{
      setFilterCardsArt(cardsList)
      setText("")
    }
  
  return (
    <>
      <div>
         {hasRecognitionSupport ? (
              <>
                <div>
                  <button onClick={startListening}>gravar</button>
                </div>
              </>
         ):(
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

      <button onClick={SeachVoice}>pesquisar</button>
      <button onClick={excluir} >excluir</button>
    </>
  );
};
