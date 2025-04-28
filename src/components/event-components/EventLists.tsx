import { MdOutlineDateRange } from "react-icons/md";
import { TfiLocationPin } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { EVENT_DETAILS } from "../../lib/data";

export default function EventLists() {
	return (
		<section className="flex flex-col gap-y-5 flex-2 z-40">
			{EVENT_DETAILS.map((detail) => (
				<div key={detail.id} className="rounded-md p-5 border bg-[#10141E]">
					<div className="flex gap-6 border-b pb-2">
						<img alt="User img" className="w-[60px] h-[60px] rounded-full object-cover" src={detail.organiserImg} />
						<div className="flex flex-col">
							<span className="font-medium text-[20px]">{detail.eventTitle}</span>
							<span>
								Organised by{" "}
								<Link to="/events" className="font-semibold text-sky-300">
									{detail.organiser}
								</Link>
							</span>
						</div>
					</div>
					<div className="flex justify-between items-center py-3">
						<span className="flex gap-x-2 items-center">
							<MdOutlineDateRange className="size-5" />
							{detail.date}
						</span>
						<span className="flex gap-x-2 items-center">
							<TfiLocationPin className="size-5" />
							{detail.location}
						</span>
					</div>
					<div className="py-2 px-3 rounded-sm border bg-[#1C2029]">
						<div className="flex items-center gap-x-2 p-2 mb-4 border-b">
							{detail.participants.map((participant, idx) => (
								<img
									alt="User img"
									key={idx}
									src={participant.participantImg}
									className="w-9 h-9 rounded-full object-cover"
								/>
							))}
						</div>
						<p>{detail.description}</p>
						<Link to={`/events/${detail.id}`} className="flex justify-end mt-2 font-medium text-sky-300">
							Learn More
						</Link>
					</div>
				</div>
			))}
		</section>
	);
}
