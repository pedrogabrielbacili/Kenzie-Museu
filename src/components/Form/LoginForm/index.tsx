import Input from "../Input";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext, useState } from "react";
import { UserContext } from "../../../providers/UserContext";
import { TloginFormValues, loginFormSchema } from "./loginFormSchema";
import { StyledForm } from "../../../styles/styledForm";
import { StyledDivForm } from "../../../styles/styledDivForms";

export const LoginForm = () => {
  const { userLogin } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TloginFormValues>({ resolver: zodResolver(loginFormSchema) });

  const submit: SubmitHandler<TloginFormValues> = (formData) => {
    userLogin(formData, setLoading);
  };

  return (
    <StyledDivForm>
      <StyledForm onSubmit={handleSubmit(submit)}>
        <h1>Login</h1>
        <p>Preencha os campos para realizar login</p>
        <Input
          id="email"
          disabled={loading}
          placeholder="Email"
          error={errors.email}
          {...register("email")}
        />
        <Input
          id="password"
          disabled={loading}
          placeholder="Senha"
          error={errors.password}
          {...register("password")}
        />
        <button type="submit" disabled={loading}>
          {loading ? "Logando..." : "Login"}
        </button>
        <span>ou</span>
        <button>Cadastra-se</button>
      </StyledForm>
    </StyledDivForm>
  );
};
