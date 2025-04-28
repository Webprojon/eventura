import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { EVENT_DETAILS } from "../lib/data";

export default function UserPprofile() {
	const { text } = useParams();
	const user = EVENT_DETAILS.map((event) =>
		event.participants.find((participant) => participant.participantName === text),
	);
	console.log(user);

	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1, delay: 0.2 }}
			className="flex items-start gap-5 mt-9 max-w-[1350px] min-h-[100vh] mx-auto pb-10"
		>
			<div>{text}</div>
			{/*<img src={user?.participantImg} alt="" />*/}
		</motion.section>
	);
}
