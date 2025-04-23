import { motion } from "framer-motion";
import { fromLeftToRight } from "../lib/page-animations";
import Navbar from "../components/Navbar";
import Events from "../components/Events";
import Calendar from "../components/Calendar";

export default function Home() {
	return (
		<motion.section
			initial="initial"
			animate="animate"
			variants={fromLeftToRight}
			className="max-w-[1350px] mx-auto min-h-[100vh] tracking-wide text-slate-100 pb-10"
		>
			<Navbar />
			<div className="flex gap-5 mt-9">
				<Events />
				<Calendar />
			</div>
		</motion.section>
	);
}
