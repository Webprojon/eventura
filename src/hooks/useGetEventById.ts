import { useQuery } from "@tanstack/react-query";
import { BASE_URL } from "../lib/data";

export function useGetEventById(id: string) {
	return useQuery({
		queryKey: ["event", id],
		queryFn: async () => {
			const res = await fetch(`${BASE_URL}/events/${id}`);
			if (!res.ok) throw new Error("Ma'lumotni olishda xatolik");
			const data = await res.json();
			//await new Promise((resolve) => setTimeout(resolve, 1000));
			return data.data;
		},
	});
}
