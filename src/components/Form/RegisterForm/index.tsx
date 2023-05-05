import { useForm, SubmitHandler } from "react-hook-form";
import Input from "../Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterFormSchema, TRegisterFormValues } from "./RegisterFormSchema";
import { useContext, useState } from "react";
import { UserContext } from "../../../providers/UserContext";
import { StyledForm } from "../../../styles/styledForm";
import { StyledDivForm } from "../../../styles/styledDivForms";
import { useNavigate } from "react-router";
import { IoEyeOutline } from "react-icons/io5";
import { StyledParagrapherError } from "../../../styles/styledError";

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
  const [isTypePassword, setIsTypePassword] = useState(true);

  const submit: SubmitHandler<TRegisterFormValues> = (formData) => {
    userRegister(formData, setLoading);
  };

  const navigate = useNavigate();

  return (
    <StyledDivForm>
      <StyledForm onSubmit={handleSubmit(submit)}>
        <h1>Cadastra-se</h1>
        <div className="divStyle">
          <Input
            id="nome"
            disabled={loading}
            placeholder="Nome"
            error={errors.name}
            {...register("name")}
          />
        </div>
        <div className="divStyle">
          <Input
            id="email"
            disabled={loading}
            placeholder="ex:teste@gmail.com"
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
          Cadastrar
        </button>
        <span>Ou</span>
        <button onClick={() => navigate("/")}>Retornar</button>
      </StyledForm>
    </StyledDivForm>
  );
};
