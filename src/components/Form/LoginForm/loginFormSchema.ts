import { z } from "zod";

export const loginFormSchema = z.object({
  email: z
    .string()
    .min(1, "Email obrigatório")
    .email("email incorreto"),
  password: z.string().min(1, { message: "senha obrigatória" }),
});
export type TloginFormValues = z.infer<typeof loginFormSchema>;
