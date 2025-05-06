import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthUserType } from "../lib/types";
import { BASE_URL } from "../lib/data";

export function useRegister() {
	const [userNameVal, setUserNameVal] = useState("");
	const [userEmailVal, setUserEmailVal] = useState("");
	const [userPasswordVal, setUserPasswordVal] = useState("");
	const [errorMessage, setErrorMessage] = useState("");
	const queryClient = useQueryClient();
	const navigate = useNavigate();

	const formData = {
		name: userNameVal,
		email: userEmailVal,
		password: userPasswordVal,
	};

	const signUp = async (newUser: AuthUserType) => {
		const res = await fetch(`${BASE_URL}/auth/sign-up`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(newUser),
		});

		if (!res.ok) {
			throw new Error("Failed to create new user");
		}

		return res.json();
	};

	const { mutate, isPending } = useMutation({
		mutationFn: signUp,
		onSuccess: (data) => {
			queryClient.invalidateQueries({ queryKey: ["signup"] });
			toast.success("New user is created!");
			localStorage.setItem("token", data.data.token);
			navigate("/events");
		},
		onError: (error) => {
			toast.error("Something went wrong. Please try again. " + error);
		},
	});

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		if (!userEmailVal || !userPasswordVal) {
			setErrorMessage("Email and password are required.");
			return;
		}

		const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
		if (!emailRegex.test(userEmailVal)) {
			setErrorMessage("Please enter a valid email.");
			return;
		}

		if (userPasswordVal.length < 6) {
			setErrorMessage("Password must be at least 6 characters long.");
			return;
		}

		mutate(formData);

		setUserNameVal("");
		setUserEmailVal("");
		setUserPasswordVal("");
		setErrorMessage("");
	};

	return {
		userNameVal,
		userEmailVal,
		userPasswordVal,
		setUserNameVal,
		setUserEmailVal,
		setUserPasswordVal,
		errorMessage,
		handleSubmit,
		isPending,
	};
}
