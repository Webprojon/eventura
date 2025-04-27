import { MdOutlineDateRange } from "react-icons/md";
import { TfiLocationPin } from "react-icons/tfi";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { EVENT_DETAILS } from "../lib/data";
import { SlInfo } from "react-icons/sl";
import { useState } from "react";

export default function EventDetails() {
	const [isOpenMap, setIsOpenMap] = useState(false);
	const { id } = useParams();
	const event = EVENT_DETAILS.find((detail) => detail.id === Number(id));

	if (!event) {
		return <div>This event is not found !</div>;
	}

	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1, delay: 0.2 }}
			className="flex items-start gap-5 mt-9 max-w-[1350px] min-h-[100vh] mx-auto pb-10"
		>
			<div key={event.id} className="flex-3 rounded-md p-5 border bg-[#10141E]">
				<div className="relative overflow-hidden border rounded-md">
					<img src={event.bgImg} alt="background img" className="w-full h-[44vh] object-cover" />
					<div className="flex flex-col absolute bottom-0 p-4 w-full h-[44vh] bg-black/75">
						<span className="font-medium text-[24px]">{event.eventTitle}</span>
						<span className="flex gap-x-2 text-[18px] items-center">{event.date}</span>
						<span>
							Organised by{" "}
							<Link to="/events" className="font-semibold text-sky-300">
								{event.organiser}
							</Link>
						</span>
					</div>
				</div>

				<div className="flex flex-col items-start gap-y-3 mt-5 p-3 rounded-sm border bg-[#1C2029]">
					<div className="flex items-center gap-x-4 border-b pb-2">
						<span>
							<SlInfo className="size-5" />
						</span>
						{event.description}
					</div>

					<div className="flex items-center gap-x-4 border-b pb-2 w-full">
						<MdOutlineDateRange className="size-5" />
						{event.date}
					</div>

					<div className="flex items-center gap-x-4 border-b pb-2 w-full">
						<TfiLocationPin className="size-5" />
						{event.location}
					</div>

					<div className="flex justify-between items-end w-full">
						{/*<button className="btn py-[6px] px-4">Join This Event</button>*/}
						<button className="btn py-[6px] px-4">Sign in to join this event</button>
						<button
							onClick={() => setIsOpenMap(!isOpenMap)}
							className="font-semibold cursor-pointer text-sky-300 hover:text-sky-400"
						>
							View on map
						</button>
					</div>
				</div>

				<div className={`w-full h-[40vh] mt-2 ${isOpenMap ? "flex" : "hidden"}`}>
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d156388.98228271276!2d20.896613431747056!3d52.232887094352805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc669a869f01%3A0x72f0be2a88ead3fc!2sWarsaw!5e0!3m2!1sen!2spl!4v1745739844291!5m2!1sen!2spl"
						loading="lazy"
						className="w-full h-full rounded-md"
					></iframe>
				</div>
			</div>

			<div className="flex-1 rounded-md border select-none bg-[#10141E]">
				<div className="border-b p-3">
					<span className="font-semibold">Participants</span>
				</div>

				<div className="flex flex-col gap-y-3 p-3 max-h-[35.4vh] overflow-y-scroll small-scroll">
					{event.participantImgs.map((participant) => (
						<Link
							to="/events"
							className="flex items-center gap-x-4 px-3 py-[5px] rounded-md transition-all bg-[#1C2029] hover:bg-[#262a34]"
						>
							<img src={participant} alt="coming user" className="w-10 h-10 rounded-full" />
							<span className="font-medium">John doe</span>
						</Link>
					))}
				</div>
			</div>
		</motion.section>
	);
}
