import React, { createContext, useEffect, useState } from "react";
import { api } from "../service/api";

interface ICardContex{
    cardsList: ICard[];
    setCardsList: React.Dispatch<React.SetStateAction<ICard[]>>;
}
interface ICardProvider{
    children:React.ReactNode;
}
interface ICard{
    id:number;
    title:string;
    artist:string;
    date:string;
    dimension:string;
    img:string;
}

export const CardContext=createContext({} as ICardContex)

export const CardProvider =({children}:ICardProvider)=>{
    const [cardsList, setCardsList]=useState<ICard[]>([]);

    useEffect(()=>{
        const carts=async()=>{
            try {
                const { data } = await api.get<ICard[]>("/arts")
                setCardsList(data)
                console.log(data)
            } catch (error) {
                console.log(error)
            }
        }
        carts();
    },[])

    return(
        <CardContext.Provider value={{cardsList, setCardsList}}>
            {children}
        </CardContext.Provider>
    )
    }