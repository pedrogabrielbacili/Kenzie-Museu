import {createContext} from "react";
import { api } from "../service/api";
import { TloginFormValues } from "../components/Form/LoginForm/loginFormSchema";

interface IUserContext{
    userLogin:(formdata:TloginFormValues)=>Promise<void>;
}
interface IUser{
    name:string;
    email:string;
    password:string;
    id:number;
}
interface IUserLogin{
    accessToken:string;
    user:IUser;
}
interface IUserProvider{
    children:React.ReactNode;
}

export const UserContext=createContext({} as IUserContext)

export const UserProvider=({children}:IUserProvider)=>{
    const userLogin=async(formData:TloginFormValues)=>{
        try {
            const response=await api.post<IUserLogin>("/login", formData);
        } catch (error) {
            console.error(error)
        }
    }
    return(
        <UserContext.Provider value={{userLogin}}>
            {children}
        </UserContext.Provider>
    )

}