import { z } from "zod";

export const loginFormSchema =z.object({
    email:z.string().min(1, "Email obrigatório").email("Email incorreto"),
    password:z.string().min(1, {message:"Senha obrigatória"}),
});
export type TloginFormValues = z.infer<typeof loginFormSchema>;
