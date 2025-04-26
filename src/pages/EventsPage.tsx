import { motion } from "framer-motion";
import Events from "../components/Events";
import Calendar from "../components/Calendar";

export default function EventsPage() {
	return (
		<section className="max-w-[1350px] mx-auto min-h-[100vh] pb-10">
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1, delay: 0.2 }}
				className="flex gap-5 mt-9"
			>
				<Events />
				<Calendar />
			</motion.div>
		</section>
	);
}
