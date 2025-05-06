import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthUserType } from "../lib/types";
import { BASE_URL } from "../lib/data";

export function useLogin() {
	const [userEmailVal, setUserEmailVal] = useState("");
	const [userPasswordVal, setUserPasswordVal] = useState("");
	const [errorMessage, setErrorMessage] = useState("");
	const queryClient = useQueryClient();
	const navigate = useNavigate();

	const formData = {
		email: userEmailVal,
		password: userPasswordVal,
	};

	const signIn = async (userData: AuthUserType) => {
		const res = await fetch(`${BASE_URL}/auth/sign-in`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(userData),
		});

		if (!res.ok) {
			return new Error("Failed to log in");
		}

		return res.json();
	};

	const { mutate, isPending } = useMutation({
		mutationFn: signIn,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["signin"] });
			toast.success("User logged in!");
			navigate("/events");
		},
		onError: (error) => {
			toast.error("Something went wrong. Please try again. " + error);
		},
	});

	//Incorrect email or password. Please try again.

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		if (!userEmailVal || !userPasswordVal) {
			setErrorMessage("Email and password are required.");
			return;
		}

		if (userPasswordVal.length < 6) {
			setErrorMessage("Password must be at least 6 characters long.");
			return;
		}

		setUserEmailVal("");
		setUserPasswordVal("");
		setErrorMessage("");

		mutate(formData);
	};

	return {
		userEmailVal,
		userPasswordVal,
		setUserEmailVal,
		setUserPasswordVal,
		errorMessage,
		isPending,
		handleSubmit,
	};
}
