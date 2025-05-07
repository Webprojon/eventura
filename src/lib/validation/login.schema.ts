import { z } from "zod";

export const LoginSchema = z.object({
	email: z.string().email("Email did not match, please try again"),
	password: z.string().min(6, "Password did not match, please try again"),
});

export type LoginFormType = z.infer<typeof LoginSchema>;
