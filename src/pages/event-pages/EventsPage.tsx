import { motion } from "framer-motion";
import Calendar from "../../components/Calendar";
import EventLists from "../../components/event-components/EventLists";
import { smoothOpacity } from "../../lib/page-animations";

export default function EventsPage() {
	return (
		<motion.section
			initial="initial"
			animate="animate"
			variants={smoothOpacity}
			className="max-w-[1350px] mx-auto flex gap-5 mt-9 min-h-[100vh] pb-10"
		>
			<EventLists />
			<Calendar />
		</motion.section>
	);
}
