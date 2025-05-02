import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useDeleteEvent() {
	const queryClient = useQueryClient();
	const navigate = useNavigate();

	const deleteEvent = async (id: string) => {
		const response = await fetch(`https://eventura-data.onrender.com/api/v1/events/${id}`, {
			method: "DELETE",
		});
		if (!response.ok) {
			throw new Error("Failed to delete the item");
		}
		return id;
	};

	const mutation = useMutation({
		mutationFn: (id: string) => deleteEvent(id),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["events"] });
			toast.success("Event successfully deleted.");
			navigate("/events");
		},
	});

	const handleDelete = (id: string) => {
		mutation.mutate(id);
	};

	return {
		handleDelete,
	};
}
