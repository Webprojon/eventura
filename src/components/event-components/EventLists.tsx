import { MdOutlineDateRange } from "react-icons/md";
import { TfiLocationPin } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { EventTypes } from "../../lib/types";
import { useQuery } from "@tanstack/react-query";
import { getEvents } from "../../lib/api/getEvents";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export function EventSkeleton() {
	return (
		<div className="rounded-md p-5 border bg-[#10141E]">
			<div className="flex gap-6 border-b pb-2">
				<Skeleton circle width={60} height={60} baseColor="#1C2029" highlightColor="#2A2F3A" />
				<div className="flex flex-col w-full gap-2">
					<Skeleton width="60%" height={20} baseColor="#1C2029" highlightColor="#2A2F3A" />
					<Skeleton width="40%" height={15} baseColor="#1C2029" highlightColor="#2A2F3A" />
				</div>
			</div>

			<div className="flex justify-between items-center py-5">
				<Skeleton width="30%" height={15} baseColor="#1C2029" highlightColor="#2A2F3A" />
				<Skeleton width="30%" height={15} baseColor="#1C2029" highlightColor="#2A2F3A" />
			</div>

			<div className="p-3 rounded-sm border bg-[#1C2029]">
				{/*<div className="flex items-center gap-x-2 p-2 mb-4 border-b">
					{[...Array(3)].map((_, i) => (
						<Skeleton key={i} circle width={36} height={36} baseColor="#1C2029" highlightColor="#2A2F3A" />
					))}
				</div>*/}
				<Skeleton count={2} height={10} className="mb-2" baseColor="#1C2029" highlightColor="#2A2F3A" />
				<Skeleton width="25%" height={15} baseColor="#1C2029" highlightColor="#2A2F3A" />
			</div>
		</div>
	);
}

const DEFAULT_IMG =
	"https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D";

export default function EventLists() {
	const { data, isLoading, error } = useQuery<{ data: EventTypes[] }>({
		queryKey: ["events"],
		queryFn: getEvents,
		staleTime: 1000 * 60 * 5,
	});

	//if (isLoading) return <p>Loading...</p>;
	//if (error) return <p>Error: {error.message}</p>;

	return (
		<section className="flex flex-col gap-y-5 flex-[2] z-40">
			{isLoading && <EventSkeleton />}
			{data?.data.map((detail) => (
				<div key={detail._id} className="rounded-md p-5 border bg-[#10141E]">
					<div className="flex gap-6 border-b pb-2">
						<img
							alt="User img"
							className="w-[60px] h-[60px] rounded-full object-cover"
							src={detail.organiserImg || DEFAULT_IMG}
						/>
						<div className="flex flex-col">
							<span className="font-medium text-[20px]">{detail.eventTitle}</span>
							<span className="text-[14px]">
								Organised by{" "}
								<Link to="/events" className="font-semibold text-sky-300">
									{detail.eventOrganiser || "Unknown"}
								</Link>
							</span>
						</div>
					</div>
					<div className="flex justify-between items-center py-5">
						<span className="flex gap-x-2 items-center">
							<MdOutlineDateRange className="size-5" />
							{detail.eventDate} {detail.eventTime}
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
									<img
										alt="User img"
										key={idx}
										src={participant.participantImg}
										className="w-9 h-9 rounded-full object-cover"
									/>
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
