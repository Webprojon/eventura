import { motion } from "framer-motion";
import Calendar from "../../components/Calendar";
import EventLists from "../../components/event-components/EventLists";

export default function EventsPage() {
	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5 }}
			className="max-w-[1350px] mx-auto flex gap-5 mt-9 min-h-[100vh] pb-10"
		>
			<EventLists />
			<Calendar />
		</motion.section>
	);
}
