import { useForm } from "react-hook-form"
import Input from "../../Form/Input"
import { useContext } from "react"
import { CardContext } from "../../../providers/CardContext";

interface ISearch{
    search:string;
}
export const Search=()=>{
    const {register, handleSubmit}=useForm<ISearch>()
    const {cardsList, setFilterCardsArt}=useContext(CardContext)

    const submit=(formData:ISearch)=>{
          const filterArts=cardsList.filter((art)=>
            formData.search ? art.title.toLowerCase().includes(formData.search.toLowerCase()) || 
            art.artist.toLowerCase().includes(formData.search.toLowerCase()) : cardsList
        )
        console.log(filterArts)
        setFilterCardsArt(filterArts) 
    }
    return(
        <form onSubmit={handleSubmit(submit)}>
            <Input {...register("search")}/>
            <button type="submit">Pesquisar</button>
        </form>
    )
}