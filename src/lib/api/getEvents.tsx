export const getEvents = async () => {
	const res = await fetch("https://eventura-data.onrender.com/api/v1/events");
	if (!res.ok) throw new Error("Error fetching users");
	//await new Promise((resolve) => setTimeout(resolve, 3000));
	return res.json();
};
