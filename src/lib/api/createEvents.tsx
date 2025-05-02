export const createEvent = async (newPost) => {
	const res = await fetch("https://eventura-data.onrender.com/api/v1/events", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(newPost),
	});
	if (!res.ok) throw new Error("Failed to create event");
	return res.json();
};
