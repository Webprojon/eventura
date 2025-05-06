import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthUserType } from "../lib/types";
import { BASE_URL } from "../lib/data";
import { RegisterFormType, RegisterSchema } from "../lib/validation/register.schema";

export function useRegister() {
	const queryClient = useQueryClient();
	const navigate = useNavigate();

	// API Call
	const signUp = async (newUser: AuthUserType) => {
		const res = await fetch(`${BASE_URL}/auth/sign-up`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(newUser),
		});

		const data = await res.json();

		if (!res.ok) {
			throw new Error(data.message || "Failed to create new user");
		}

		return data;
	};

	// Mutation
	const { mutate, isPending } = useMutation({
		mutationFn: signUp,
		onSuccess: (data) => {
			queryClient.invalidateQueries({ queryKey: ["signup"] });
			toast.success("User created successfully!");
			localStorage.setItem("token", data.data.token);
			navigate("/events");
		},
		onError: (error: Error) => {
			toast.error("Something went wrong. Please try again. " + error.message);
		},
	});

	// Submit
	const handleSubmit = (e: React.FormEvent, formData: AuthUserType, setErrors: (errors: Partial<Record<keyof RegisterFormType, string>>) => void) => {
		e.preventDefault();

		const result = RegisterSchema.safeParse(formData);
		if (!result.success) {
			const fieldErrors: Partial<Record<keyof RegisterFormType, string>> = {};
			result.error.errors.forEach((err) => {
				const field = err.path[0] as keyof RegisterFormType;
				fieldErrors[field] = err.message;
			});
			setErrors(fieldErrors);
			return;
		}

		setErrors({});
		mutate(formData);
	};

	return {
		handleSubmit,
		isPending,
	};
}
