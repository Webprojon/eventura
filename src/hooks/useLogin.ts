import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthUserType } from "../lib/types";
import { BASE_URL } from "../lib/data";
import { LoginFormType, LoginSchema } from "../lib/validation/login.schema";

export function useLogin() {
	const navigate = useNavigate();

	const signIn = async (userData: AuthUserType) => {
		const res = await fetch(`${BASE_URL}/auth/sign-in`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(userData),
		});

		if (!res.ok) {
			const errorData = await res.json();
			throw new Error(errorData.message || "Failed to log in");
		}

		return res.json();
	};

	const { mutate, isPending } = useMutation({
		mutationFn: signIn,
		onSuccess: (data) => {
			toast.success("User logged in!");

			const token = data?.data?.token || data?.token;
			if (token) {
				localStorage.setItem("token", token);
			}

			navigate("/events");
		},
		onError: () => {
			toast.error("Incorrect email or password, try again");
		},
	});

	const handleSubmit = (e: React.FormEvent, formData: AuthUserType, setErrors: (errors: Partial<Record<keyof LoginFormType, string>>) => void) => {
		e.preventDefault();

		const result = LoginSchema.safeParse(formData);
		if (!result.success) {
			const fieldErrors: Partial<Record<keyof LoginFormType, string>> = {};
			result.error.errors.forEach((err) => {
				const field = err.path[0] as keyof LoginFormType;
				fieldErrors[field] = err.message;
			});
			setErrors(fieldErrors);
			return;
		}

		mutate(formData);
	};

	return {
		isPending,
		handleSubmit,
	};
}
