import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { smoothOpacity } from "../lib/page-animations";

export default function UserPprofile() {
	const { text } = useParams();
	//const user = EVENT_DETAILS.map((event) =>
	//	event.participants.find((participant) => participant.participantName === text),
	//);

	return (
		<motion.section
			initial="initial"
			animate="animate"
			variants={smoothOpacity}
			className="flex items-start gap-5 mt-9 max-w-[1350px] min-h-[100vh] mx-auto pb-10"
		>
			<div>{text}</div>
			{/*<img src={user?.participantImg} alt="" />*/}
		</motion.section>
	);
}
