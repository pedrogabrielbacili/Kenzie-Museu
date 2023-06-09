import Input from "../Input";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext, useState } from "react";
import { UserContext } from "../../../providers/UserContext";
import { TloginFormValues, loginFormSchema } from "./loginFormSchema";
import { StyledForm } from "../../../styles/styledForm";
import { StyledDivForm } from "../../../styles/styledDivForms";
import { useNavigate } from "react-router";
import { Loading } from "../../../styles/loading";
import { IoEyeOutline } from "react-icons/io5";

export const LoginForm = () => {
  const { userLogin } = useContext(UserContext);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const [isTypePassword, setIsTypePassword] = useState(true);

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
        <div className="flex flex-row align-center flex-between">
          <header>
            <h1>Login</h1>
            <p>Preencha os campos para realizar login</p>
          </header>
          <a onClick={() => navigate("/")}>Retornar</a>
        </div>

        <div className="divStyle">
          <Input
            id="email"
            disabled={loading}
            placeholder="Email"
            error={errors.email}
            {...register("email")}
          />
        </div>

        <div className="olhinho">
          <Input
            id="password"
            disabled={loading}
            placeholder="Senha"
            type={isTypePassword ? "password" : "text"}
            {...register("password")}
          >
            <button
              className="buttonOlhinho"
              type="button"
              onClick={() => setIsTypePassword(!isTypePassword)}
            >
              <IoEyeOutline />
            </button>
          </Input>
        </div>

        <div className="error">
          {errors.password ? <p>{errors.password.message}</p> : null}
        </div>

        <button type="submit" disabled={loading}>
          {loading ? <Loading /> : "Login"}
        </button>
        <span>ou</span>
        <button onClick={() => navigate("/register")}>Cadastra-se</button>
      </StyledForm>
    </StyledDivForm>
  );
};
