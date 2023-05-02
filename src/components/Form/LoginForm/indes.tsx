import Input from "../Input";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { UserContext } from "../../../providers/UserContext";
import { TloginFormValues, loginFormSchema } from "./loginFormSchema";

export const LoginForm =()=>{
    const { userLogin }=useContext(UserContext);

    const  {register, handleSubmit, formState:{errors}}=useForm<TloginFormValues>({resolver:zodResolver(loginFormSchema)});

    const submit:SubmitHandler<TloginFormValues>=(formData)=>{
        console.log(formData)
    }
    return(
        <form onSubmit={handleSubmit(submit)}>
            <Input 
                id="email"
                label="email"
                error={errors.email}
                {...register("email")}
            />
            <Input 
                id="password"
                label="password"
                error={errors.password}
                {...register("password")}
            />
            <button type="submit">Entrar</button>
        </form>
    )
}