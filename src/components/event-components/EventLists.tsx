import { MdOutlineDateRange } from "react-icons/md";
import { TfiLocationPin } from "react-icons/tfi";
import { Link } from "react-router-dom";
import "react-loading-skeleton/dist/skeleton.css";
import { NO_AVATAR } from "../../lib/data";
import { useGetEvents } from "../../hooks/useGetEvents";
import { EventListsSkeleton } from "../skeletons/EventListsSkeleton";
import ManageEvent from "../modals/ManageEventModal";
import { useUser } from "../../hooks/useUser";

export default function EventLists() {
	const { data, isLoading, formatDate } = useGetEvents();
	const { user } = useUser();

	return (
		<section className="flex flex-col gap-y-5 flex-[2.5] z-40">
			{isLoading && <EventListsSkeleton count={2} />}
			{data?.data.map((detail) => (
				<div key={detail._id} className="rounded-md p-3 border bg-[#10141E]">
					<div className="flex justify-between items-start border-b">
						<div className="flex gap-6 pb-2">
							<Link to="/user-profile" className="rounded-full bg-[#1C2029]">
								<img alt="User img" className="w-[60px] h-[60px] rounded-full object-cover border bg-[#1C2029" src={detail.organiserImg || NO_AVATAR} />
							</Link>
							<div className="flex flex-col">
								<span className="font-medium text-[20px]">{detail.eventTitle}</span>
								<span className="text-[14px]">
									Organised by{" "}
									<Link to="/user-profile" className="font-semibold text-sky-300">
										{user?.name || "Unknown"}
									</Link>
								</span>
							</div>
						</div>
						<ManageEvent id={detail._id} />
					</div>

					<div className="flex justify-between items-center py-6">
						<span className="flex gap-x-2 items-center">
							<MdOutlineDateRange className="size-5" />
							{formatDate(detail.eventDate)}, at {detail.eventTime}
						</span>
						<span className="flex gap-x-2 items-center">
							<TfiLocationPin className="size-5" />
							{detail.eventCity} {detail.eventAvenue}
						</span>
					</div>
					<div className="p-3 rounded-sm border bg-[#1C2029]">
						{detail.eventParticipants.length !== 0 && (
							<div className="flex items-center gap-x-2 p-2 mb-4 border-b">
								{detail.eventParticipants.map((participant, idx) => (
									<img alt="User img" key={idx} src={participant.participantImg} className="w-9 h-9 rounded-full object-cover" />
								))}
							</div>
						)}
						<p>{detail.eventDescription}</p>
						<Link to={`/events/${detail._id}`} className="flex justify-end mt-2 font-medium text-sky-300">
							Learn More
						</Link>
					</div>
				</div>
			))}
		</section>
	);
}
