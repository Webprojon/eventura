import { useQuery } from "@tanstack/react-query";
import { EventTypes } from "../lib/types";
import { useParams } from "react-router-dom";

export function useGetEvents() {
	const { id } = useParams<{ id: string }>();

	const getEvents = async () => {
		const res = await fetch("https://eventura-data.onrender.com/api/v1/events");
		if (!res.ok) throw new Error("Error fetching users");
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
	const formattedDate = data?.data.map((detail) => {
		const date = new Date(detail.eventDate);
		return date.toLocaleDateString("en-US", {
			year: "numeric",
			month: "long",
			day: "numeric",
		});
	});

	return {
		data,
		isLoading,
		event,
		formattedDate,
	};
}
