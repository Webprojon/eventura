import { useQuery } from "@tanstack/react-query";
import { BASE_URL } from "../lib/data";
import { useNavigate } from "react-router-dom";

export function useUser() {
	const navigate = useNavigate();
	const token = localStorage.getItem("token");
	const getUser = async () => {
		const res = await fetch(`${BASE_URL}/users/me`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		if (!res.ok) throw new Error("Error fetching users");
		return res.json();
	};

	const { data, isLoading } = useQuery({
		queryKey: ["user"],
		queryFn: getUser,
		enabled: !!token,
	});

	const handleLogOut = () => {
		localStorage.removeItem("token");
		navigate("/events");
	};

	const user = data?.data;

	return {
		user,
		token,
		isLoading,
		handleLogOut,
	};
}
