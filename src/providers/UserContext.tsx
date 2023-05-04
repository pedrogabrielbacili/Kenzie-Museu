import {createContext, useEffect, useState} from "react";
import { api } from "../service/api";
import { TloginFormValues } from "../components/Form/LoginForm/loginFormSchema";
import { TRegisterFormValues } from "../components/Form/RegisterForm/RegisterFormSchema";
import { useNavigate } from "react-router";

interface IUserContext{
    user: IUser | null;
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
    const [user, setUser]=useState<IUser | null>(null);
    const navigate=useNavigate()

    useEffect(()=>{
        const id=localStorage.getItem("@ID")
        const token=localStorage.getItem("@TOKEN")
        const userAutoLogin=async()=>{
            try {
                const {data}=await api.get<IUser>(`/users/${id}`,
                 {
                    headers:{
                        Authorization:`Bearer ${token}`
                    },
                 });
                 console.log(data)
                 setUser(data)
                navigate("/dashboard")
            } catch (error) {
                console.log(error)
            }
        }
        if(token && id){
            userAutoLogin()
        }
    }, [])
    
    const userLogin=async(formData:TloginFormValues, setLoading:React.Dispatch<React.SetStateAction<boolean>>)=>{
        try {
            setLoading(true)
            const {data}=await api.post<IUserLogin>("/login", formData);
            localStorage.setItem("@TOKEN", data.accessToken);
            localStorage.setItem("@ID", JSON.stringify(data.user.id));
            setUser(data.user)
            navigate("/dashboard")
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
        <UserContext.Provider value={{userLogin, userRegister, user}}>
            {children}
        </UserContext.Provider>
    )

}