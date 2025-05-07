import { useQuery } from "@tanstack/react-query";
import { BASE_URL } from "../lib/data";

export function useUser() {
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

	const user = data?.data;

	return {
		user,
		token,
		isLoading,
	};
}
