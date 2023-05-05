import React, { createContext, useEffect, useState } from "react";
import { api } from "../service/api";

interface ICardContex{
    cardsList: ICard[];
    setCardsList: React.Dispatch<React.SetStateAction<ICard[]>>;
    setFilterCardsArt: React.Dispatch<React.SetStateAction<ICard[]>>;
    filterCardsArt: ICard[];
}
interface ICardProvider{
    children:React.ReactNode;
}
export interface ICard{
    id:number;
    title:string;
    artist:string;
    date:string;
    dimensions:string;
    img:string;
}

export const CardContext=createContext({} as ICardContex)

export const CardProvider =({children}:ICardProvider)=>{
    const [cardsList, setCardsList]=useState<ICard[]>([]);
    const [filterCardsArt, setFilterCardsArt]=useState<ICard[]>([])

    useEffect(()=>{
        const cards=async()=>{
            try {
                const { data } = await api.get<ICard[]>("/arts")
                setCardsList(data)
                setFilterCardsArt(data)
            } catch (error) {
                console.log(error)
            }
        }
        cards();
    },[])

    return(
        <CardContext.Provider value={{cardsList, setCardsList, filterCardsArt, setFilterCardsArt}}>
            {children}
        </CardContext.Provider>
    )
    }