import { useForm, SubmitHandler } from "react-hook-form";
import Input from "../Input";
import {zodResolver} from "@hookform/resolvers/zod"
import {RegisterFormSchema, TRegisterFormValues} from "./RegisterFormSchema"
import { useContext, useState } from "react";
import { UserContext } from "../../../providers/UserContext"

export const RegisterForm =()=>{
    const {register, handleSubmit, formState:{errors}}=useForm<TRegisterFormValues>({resolver:zodResolver(RegisterFormSchema)});
    const {userRegister}=useContext(UserContext)
    const [loading, setLoading]=useState(false)

    const submit:SubmitHandler<TRegisterFormValues>=(formData)=>{
        userRegister(formData, setLoading)
    }
    
    return(
        <form onSubmit={handleSubmit(submit)}>
            <Input
                id="nome"
                disabled={loading}
                placeholder="Nome"
                label="Nome"
                error={errors.name}
                 {...register("name")} 
            />
            <Input
                id="email"
                disabled={loading}
                placeholder="ex:teste@gmail.com"
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
            <button type="submit" disabled={loading}>Cadastrar</button>
        </form>
    )
}