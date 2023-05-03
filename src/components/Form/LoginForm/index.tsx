import Input from "../Input";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext, useState } from "react";
import { UserContext } from "../../../providers/UserContext";
import { TloginFormValues, loginFormSchema } from "./loginFormSchema";

export const LoginForm =()=>{
    const { userLogin }=useContext(UserContext);
    const [loading, setLoading]=useState(false)

    const  {register, handleSubmit, formState:{errors}}=useForm<TloginFormValues>({resolver:zodResolver(loginFormSchema)});

    const submit:SubmitHandler<TloginFormValues>=(formData)=>{
        userLogin(formData, setLoading)
    }
    return(
        <form onSubmit={handleSubmit(submit)}>
            <Input 
                id="email"
                disabled={loading}
                placeholder="Email"
                label="Email"
                error={errors.email}
                {...register("email")}
            />
            <Input 
                id="password"
                disabled={loading}
                placeholder="Senha"
                label="Senha"
                error={errors.password}
                {...register("password")}
            />
            <button type="submit" disabled={loading} >{loading ? "entrando" : "entrar"}</button>
        </form>
    )
}