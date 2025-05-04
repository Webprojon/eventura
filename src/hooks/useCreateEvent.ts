import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { EventFormData } from "../lib/types";

export function useCreateEvent() {
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

	const createEvent = async (newEvent: EventFormData) => {
		const res = await fetch("https://eventura-data.onrender.com/api/v1/events", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(newEvent),
		});

		if (!res.ok) {
			throw new Error("Failed to create event");
		}

		return res.json();
	};

	const { mutate, isPending } = useMutation({
		mutationFn: createEvent,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["events"] });
			toast.success("New event is added!");
			navigate("/events");
		},
		onError: (error) => {
			toast.error("Something went wrong. Please try again. " + error);
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
		handleChange,
		handleSubmit,
		isPending,
	};
}
