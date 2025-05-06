import { useQuery } from "@tanstack/react-query";
import { EventTypes } from "../lib/types";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../lib/data";

export function useGetEvents() {
	const { id } = useParams<{ id: string }>();

	const getEvents = async () => {
		const res = await fetch(`${BASE_URL}/events`);
		if (!res.ok) throw new Error("Error fetching users");
		//await new Promise((resolve) => setTimeout(resolve, 1000));
		return res.json();
	};

	const { data, isLoading } = useQuery<{ data: EventTypes[] }>({
		queryKey: ["events"],
		queryFn: getEvents,
		staleTime: 1000 * 60 * 5,
	});

	// Single event for EventDetail page
	const event = data?.data.find((detail) => detail._id === id);

	// Formatting date
	const formatDate = (dateString: string) => {
		const date = new Date(dateString);
		return date.toLocaleDateString("en-US", {
			year: "numeric",
			month: "long",
			day: "numeric",
		});
	};

	return {
		data,
		isLoading,
		event,
		formatDate,
	};
}
