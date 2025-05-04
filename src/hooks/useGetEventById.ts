import { useQuery } from "@tanstack/react-query";

export function useGetEventById(id: string) {
	return useQuery({
		queryKey: ["event", id],
		queryFn: async () => {
			const res = await fetch(`https://eventura-data.onrender.com/api/v1/events/${id}`);
			if (!res.ok) throw new Error("Ma'lumotni olishda xatolik");
			const data = await res.json();
			//await new Promise((resolve) => setTimeout(resolve, 1000));
			return data.data;
		},
	});
}
