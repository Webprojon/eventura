import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useGetEventById } from "./useGetEventById";
import { EventFormData } from "../lib/types";

export function useUpdateEvent({ id }: { id: string }) {
	const { data, isLoading } = useGetEventById(id);
	const queryClient = useQueryClient();
	const navigate = useNavigate();

	const [formData, setFormData] = useState<EventFormData>({
		eventTitle: "",
		eventCategory: "",
		eventCity: "",
		eventAvenue: "",
		eventDate: "",
		eventTime: "",
		eventDescription: "",
	});

	useEffect(() => {
		if (data) {
			setFormData({
				eventTitle: data.eventTitle,
				eventCategory: data.eventCategory,
				eventCity: data.eventCity,
				eventAvenue: data.eventAvenue,
				eventDate: new Date(data.eventDate).toISOString().split("T")[0],
				eventTime: data.eventTime,
				eventDescription: data.eventDescription,
			});
		}
	}, [data]);

	const updateEvent = async (updatedEvent: EventFormData) => {
		const res = await fetch(`https://eventura-data.onrender.com/api/v1/events/${id}`, {
			method: "PUT",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(updatedEvent),
		});
		if (!res.ok) throw new Error("Failed to update event");
		return res.json();
	};

	const { mutate, isPending } = useMutation({
		mutationFn: updateEvent,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["events"] });
			toast.success("Event is successfully updated!");
			navigate("/events");
		},
		onError: (error) => {
			toast.error("Something went wrong. Please try again. " + error.message);
		},
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (new Date(formData.eventDate) < new Date()) {
			toast.error("Event date cannot be in the past.");
			return;
		}

		mutate(formData);
	};

	return {
		formData,
		isLoading,
		isPending,
		handleSubmit,
		handleChange,
	};
}
