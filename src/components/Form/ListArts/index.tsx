import { useContext } from "react"
import { CardContext } from "../../../providers/CardContext"
import {CardArts} from "./CardArts"

export const ListArts=()=>{
    const {cardsList}=useContext(CardContext)
    return(
            <ul>
                {cardsList.map((card)=>{
                    return(
                        <CardArts 
                            key={card.id}
                            id={card.id}
                            img={card.img} 
                            title={card.title} 
                            artist={card.artist}
                        />
                    )
                })}
            </ul>
    )
}