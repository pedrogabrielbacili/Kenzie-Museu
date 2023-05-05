import { useForm, SubmitHandler } from "react-hook-form";
import Input from "../Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterFormSchema, TRegisterFormValues } from "./RegisterFormSchema";
import { useContext, useState } from "react";
import { UserContext } from "../../../providers/UserContext";
import { StyledForm } from "../../../styles/styledForm";
import { StyledDivForm } from "../../../styles/styledDivForms";
import { useNavigate } from "react-router";

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TRegisterFormValues>({
    resolver: zodResolver(RegisterFormSchema),
  });
  const { userRegister } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [isVisiblePassword, setIsVisiblePassword]=useState(false)


  const submit: SubmitHandler<TRegisterFormValues> = (formData) => {
    userRegister(formData, setLoading);
  };

  const navigate=useNavigate()

  return (
    <StyledDivForm>
      <StyledForm onSubmit={handleSubmit(submit)}>
        <h1>Cadastra-se</h1>
        <Input
          id="nome"
          disabled={loading}
          placeholder="Nome"
          error={errors.name}
          {...register("name")} 
        />
        <Input
          id="email"
          disabled={loading}
          placeholder="ex:teste@gmail.com"
          error={errors.email}
          {...register("email")}
        />
        <Input
          id="password"
          disabled={loading}
          placeholder="Senha"
          error={errors.password}
          type="password"
          {...register("password")}
        />
        <button type="submit" disabled={loading}>
          Cadastrar
        </button>
        <span>Ou</span>
        <button onClick={()=>navigate("/")}>
          Retornar
        </button>
      </StyledForm>
    </StyledDivForm>
  );
};
 
