import { Toaster } from "react-hot-toast";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/header/Navbar";
import EventsPage from "./pages/event-pages/EventsPage";
import EventDetails from "./pages/event-pages/EventDetails";
import Login from "./pages/authentication/Login";
import Register from "./pages/authentication/Register";
import CreateEvent from "./pages/event-pages/CreateEvent";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import StarterPage from "./pages/home-page/Starter";
import UpdateEvent from "./pages/event-pages/UpdateEvent";
import UserProfile from "./pages/user-page/UserProfile";

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
					<Route path="/events/create-event" element={<CreateEvent />} />
					<Route path="/events/update/:id" element={<UpdateEvent />} />
					<Route path="/profile/:id" element={<UserProfile />} />
				</Routes>
				<Toaster position="bottom-right" />
				<div className="bg-blur-effect top-[-33rem]"></div>
				<div className="bg-blur-effect bottom-[-34rem]"></div>
			</main>
		</QueryClientProvider>
	);
}

export default App;
