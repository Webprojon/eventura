import { MdOutlineDateRange } from "react-icons/md";
import { TfiLocationPin } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { SlInfo } from "react-icons/sl";
import { useState } from "react";
import EventParticipants from "../../components/event-components/EventParticipants";
import { smoothOpacity } from "../../lib/page-animations";
import { DEFAULT_BG_IMG } from "../../lib/data";
import { useDeleteEvent } from "../../hooks/useDeleteEvent";
import { useGetEvents } from "../../hooks/useGetEvents";

export default function EventDetails() {
	const [userIsLoggedIn] = useState(false);
	const { handleDelete } = useDeleteEvent();
	const { event, isLoading, formattedDate } = useGetEvents();

	if (isLoading) return <p>Loading...</p>;
	if (!event) return;

	return (
		<motion.section
			initial="initial"
			animate="animate"
			variants={smoothOpacity}
			className="flex items-start gap-5 mt-9 max-w-[1350px] min-h-[100vh] mx-auto pb-10"
		>
			<div className="flex-3 rounded-md p-5 border bg-[#10141E]">
				<div className="relative overflow-hidden border rounded-md">
					<img src={DEFAULT_BG_IMG} alt="background img" className="w-full h-[44vh] object-cover" />
					<div className="flex flex-col gap-y-1 absolute bottom-0 p-4 w-full h-[44vh] bg-black/75">
						<span className="font-medium text-[24px]">{event.eventTitle}</span>
						<span className="flex gap-x-2 text-[18px] items-center">
							{formattedDate}, at {event.eventTime}
						</span>
						<span>
							Organised by{" "}
							<Link to="/events" className="font-semibold text-sky-300">
								{event.eventOrganiser || "Unkown"}
							</Link>
						</span>
					</div>
				</div>

				<div className="flex flex-col items-start gap-y-3 mt-5 p-3 rounded-sm border bg-[#1C2029]">
					<div className="flex items-center gap-x-4 border-b pb-2">
						<span>
							<SlInfo className="size-5" />
						</span>
						{event.eventDescription}
					</div>

					<div className="flex items-center gap-x-4 border-b pb-2 w-full">
						<MdOutlineDateRange className="size-5" />
						{formattedDate}, at {event.eventTime}
					</div>

					<div className="flex items-center gap-x-4 border-b pb-2 w-full">
						<TfiLocationPin className="size-5" />
						{event.eventCity} {event.eventAvenue}
					</div>

					<div className="flex justify-between items-end w-full">
						<button className="btn py-[6px] px-4">
							{userIsLoggedIn ? "Join This Event" : "Sign in to join this event"}
						</button>
						<button
							onClick={() => handleDelete(event._id)}
							className="font-semibold cursor-pointer rounded-md py-[6px] px-4 bg-red-500 hover:bg-[#f72c3ae6]"
						>
							Delete Event
						</button>
					</div>
				</div>
			</div>

			<EventParticipants participants={event.eventParticipants} />
		</motion.section>
	);
}
