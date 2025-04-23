import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Events from "../components/Events";
import Calendar from "../components/Calendar";

export default function Home() {
	return (
		<motion.section
			//initial="initial"
			//animate="animate"
			//variants={fromLeftToRight}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1, delay: 0.3 }}
			className="max-w-[1350px] mx-auto min-h-[100vh] pb-10"
		>
			<Navbar />
			<div className="flex gap-5 mt-9">
				<Events />
				<Calendar />
			</div>
		</motion.section>
	);
}
