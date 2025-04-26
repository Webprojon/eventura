import { Toaster } from "react-hot-toast";
import Login from "./pages/Login";
import Register from "./pages/Register";
import StarterPage from "./pages/Starter";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import EventsPage from "./pages/EventsPage";
import EventDetails from "./pages/EventDetails";

function App() {
	const pathname = useLocation().pathname;
	return (
		<main className="bg-[#030712] min-h-[100vh] tracking-wide text-slate-100">
			{!(pathname === "/" || pathname === "/log-in" || pathname === "/register") && <Navbar />}
			<Routes>
				<Route path="/" element={<StarterPage />} />
				<Route path="/events" element={<EventsPage />} />
				<Route path="/events/:id" element={<EventDetails />} />
				<Route path="/log-in" element={<Login />} />
				<Route path="/register" element={<Register />} />
			</Routes>
			<Toaster position="bottom-right" />
			<div className="bg-blur-effect top-[-33rem]"></div>
			<div className="bg-blur-effect bottom-[-34rem]"></div>
		</main>
	);
}

export default App;
