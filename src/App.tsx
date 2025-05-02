import { Toaster } from "react-hot-toast";
import StarterPage from "./pages/Starter";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import EventsPage from "./pages/event-pages/EventsPage";
import EventDetails from "./pages/event-pages/EventDetails";
import Login from "./pages/authentication/Login";
import Register from "./pages/authentication/Register";
import UserProfile from "./pages/UserProfile";
import CreateEvent from "./pages/event-pages/CreateEvent";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
	const pathname = useLocation().pathname;
	const queryClient = new QueryClient();
	return (
		<QueryClientProvider client={queryClient}>
			<main className="bg-[#030712] min-h-[100vh] tracking-wide text-slate-100">
				{!(pathname === "/" || pathname === "/log-in" || pathname === "/register") && <Navbar />}
				<Routes>
					<Route path="/" element={<StarterPage />} />
					<Route path="/log-in" element={<Login />} />
					<Route path="/register" element={<Register />} />
					<Route path="/events" element={<EventsPage />} />
					<Route path="/events/:id" element={<EventDetails />} />
					<Route path="/create-event" element={<CreateEvent />} />
					<Route path="/profile/:text" element={<UserProfile />} />
				</Routes>
				<Toaster position="bottom-right" />
				<div className="bg-blur-effect top-[-33rem]"></div>
				<div className="bg-blur-effect bottom-[-34rem]"></div>
			</main>
		</QueryClientProvider>
	);
}

export default App;
