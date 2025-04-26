import { MdOutlineDateRange } from "react-icons/md";
import { TfiLocationPin } from "react-icons/tfi";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { EVENT_DETAILS } from "../lib/data";
import { SlInfo } from "react-icons/sl";

export default function EventDetails() {
	const { id } = useParams();

	const event = EVENT_DETAILS.find((detail) => detail.id === Number(id));

	if (!event) {
		return <div>Not found</div>;
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

				{/*<div className="py-2"></div>*/}
				<button className="btn py-2 px-4 my-4 w-full">Join This Event</button>

				<div className="flex flex-col items-start gap-y-3 py-2 px-3 rounded-sm border bg-[#1C2029]">
					<div className="flex items-center gap-x-4 border-b pb-2">
						<SlInfo className="size-6" />
						{event.description}
					</div>

					<div className="flex items-center gap-x-4 border-b pb-2">
						<MdOutlineDateRange className="size-5" />
						{event.date}
					</div>

					<div className="flex items-center gap-x-4 border-b pb-2">
						<TfiLocationPin className="size-5" />
						{event.location}
					</div>

					<button className="btn py-[5px] px-4">Join This Event</button>
				</div>
			</div>
			<div className="h-[45vh] flex-1 px-5 py-4 rounded-md border bg-[#10141E]">
				<span>2 People Comming</span>
			</div>
		</motion.section>
	);
}
