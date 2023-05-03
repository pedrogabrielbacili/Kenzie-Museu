import {createContext} from "react";
import { api } from "../service/api";
import { TloginFormValues } from "../components/Form/LoginForm/loginFormSchema";
import { TRegisterFormValues } from "../components/Form/RegisterForm/RegisterFormSchema";

interface IUserContext{
    userLogin:(formdata:TloginFormValues, setLoading:React.Dispatch<React.SetStateAction<boolean>>)=>Promise<void>;
    userRegister:(formData: TRegisterFormValues, setLoading:React.Dispatch<React.SetStateAction<boolean>>) => Promise<void>;
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
interface IUserRegister{
    user:IUser
}
interface IUserProvider{
    children:React.ReactNode;
}

export const UserContext=createContext({} as IUserContext)

export const UserProvider=({children}:IUserProvider)=>{
    
    const userLogin=async(formData:TloginFormValues, setLoading:React.Dispatch<React.SetStateAction<boolean>>)=>{
        try {
            setLoading(true)
            const response=await api.post<IUserLogin>("/login", formData);
            console.log(response)
        } catch (error) {
            console.error(error)
        }finally{
            setLoading(false)
        }
    }
    const userRegister=async(formData:TRegisterFormValues, setLoading:React.Dispatch<React.SetStateAction<boolean>>)=>{
        try {
            setLoading(true)
            const response=await api.post<IUserRegister>("/register", formData)
            console.log(response)
        } catch (error) {
            console.log(error)
        }finally{
            setLoading(false)
        }
    }
    return(
        <UserContext.Provider value={{userLogin, userRegister}}>
            {children}
        </UserContext.Provider>
    )

}