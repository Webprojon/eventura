import { MdOutlineDateRange } from "react-icons/md";
import { TfiLocationPin } from "react-icons/tfi";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { MAP_SRC } from "../../lib/data";
import { SlInfo } from "react-icons/sl";
import { useState } from "react";
import EventParticipants from "../../components/event-components/EventParticipants";
import { smoothOpacity } from "../../lib/page-animations";
import { EventTypes } from "../../lib/types";
import { getEvents } from "../../lib/api/getEvents";
import { useQuery } from "@tanstack/react-query";

const DEFAULT_BG_IMG = "https://img.freepik.com/free-photo/people-taking-part-high-protocol-event_23-2150951243.jpg";

export default function EventDetails() {
	const [isOpenMap, setIsOpenMap] = useState(false);
	const [userIsLoggedIn] = useState(false);
	const { id } = useParams<{ id: string }>();

	const { data, isLoading, error } = useQuery<{ data: EventTypes[] }>({
		queryKey: ["events"],
		queryFn: getEvents,
		staleTime: 1000 * 60 * 5,
	});

	const event = data?.data.find((detail) => detail._id === id);

	if (!event) {
		return <div>This event is not found !</div>;
	}

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
					<div className="flex flex-col absolute bottom-0 p-4 w-full h-[44vh] bg-black/75">
						<span className="font-medium text-[24px]">{event.eventTitle}</span>
						<span className="flex gap-x-2 text-[18px] items-center">{event.eventDate}</span>
						<span>
							Organised by{" "}
							<Link to="/events" className="font-semibold text-sky-300">
								{event.eventOrganiser}
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
						{event.eventDate}
					</div>

					<div className="flex items-center gap-x-4 border-b pb-2 w-full">
						<TfiLocationPin className="size-5" />
						{event.eventLocation}
					</div>

					<div className="flex justify-between items-end w-full">
						<button className="btn py-[6px] px-4">
							{userIsLoggedIn ? "Join This Event" : "Sign in to join this event"}
						</button>
						<button
							onClick={() => setIsOpenMap(!isOpenMap)}
							className="font-semibold cursor-pointer text-sky-300 hover:text-sky-400"
						>
							View on map
						</button>
					</div>
				</div>

				<div className={`w-full h-[40vh] mt-2 ${isOpenMap ? "flex" : "hidden"}`}>
					<iframe src={MAP_SRC} loading="lazy" className="w-full h-full rounded-md"></iframe>
				</div>
			</div>

			<EventParticipants participants={event.eventParticipants} />
		</motion.section>
	);
}
