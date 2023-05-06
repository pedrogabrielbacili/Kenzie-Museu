import { z } from "zod";

export const RegisterFormSchema = z.object({
  name: z.string().min(1, { message: "nome obrigatório!" }),
  email: z
    .string()
    .min(1, { message: "Email obrigatório" })
    .email("Digite seu email corretamente"),
  password: z
    .string()
    .min(6, { message: "A senha deve ter no minimo 6 caracteres" })
    .regex(/(?=.*?[A-Z])/, "É necessário ao menos uma letra maiúscula")
    .regex(/(?=.*?[a-z])/, "É necessário ao menos uma letra minúscula")
    .regex(/(?=.*?[0-9])/, "É necessário pelo menos um número")
    .regex(/[@$!%*?&]/, "Digite um caracter especial"),
});

export type TRegisterFormValues = z.infer<typeof RegisterFormSchema>;
