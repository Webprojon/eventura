import Home from "./pages/Home";
import StarterPage from "./pages/Starter";
import { Routes, Route } from "react-router-dom";

function App() {
	return (
		<main className="bg-[#030712] tracking-wide text-slate-100">
			<Routes>
				<Route path="/" element={<StarterPage />} />
				<Route path="/events" element={<Home />} />
			</Routes>
			<div className="fixed z-10 top-[-33rem] left-1/2 -translate-x-1/2 h-[30rem] w-[40rem] rounded-full blur-[10rem] bg-[#2a3f83]"></div>
			<div className="fixed z-10 bottom-[-34rem] left-1/2 -translate-x-1/2 h-[30rem] w-[70rem] rounded-full blur-[10rem] bg-[#2a3f83]"></div>
		</main>
	);
}

export default App;
