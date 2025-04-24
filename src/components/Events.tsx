import { MdOutlineDateRange } from "react-icons/md";
import { TfiLocationPin } from "react-icons/tfi";
import { Link } from "react-router-dom";

const EVENT_DETAILS = [
	{
		id: 1,
		organiser: "Adrian",
		date: "July 7, 2025, 12:00 AM",
		eventTitle: "250 Km Running Marathon",
		location: "Warsaw Tawer Campus, Jana Pavla Street, Poland",
		participantImgs: [
			"https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
			"https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
			"https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
		],
		organiserImg:
			"https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores dolore iure itaque fuga nostrum molestias deserunt, asperiores hic eius aliquam!",
	},
	{
		id: 2,
		organiser: "Richard",
		date: "July 7, 2025, 12:00 AM",
		eventTitle: "250 Km Running Marathon",
		location: "Warsaw Tawer Campus, Jana Pavla Street, Poland",
		participantImgs: [
			"https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
			"https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
		],
		organiserImg:
			"https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores dolore iure itaque fuga nostrum molestias deserunt, asperiores hic eius aliquam!",
	},
	{
		id: 3,
		organiser: "Tome Simth",
		date: "July 7, 2025, 12:00 AM",
		eventTitle: "250 Km Running Marathon",
		location: "Warsaw Tawer Campus, Jana Pavla Street, Poland",
		participantImgs: [
			"https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
		],
		organiserImg:
			"https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores dolore iure itaque fuga nostrum molestias deserunt, asperiores hic eius aliquam!",
	},
];

export default function Events() {
	return (
		<div className="flex flex-col gap-y-5 flex-2 z-40">
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
							{detail.participantImgs.map((participantImg, idx) => (
								<img alt="User img" key={idx} src={participantImg} className="w-9 h-9 rounded-full object-cover" />
							))}
						</div>
						<p>{detail.description}</p>
						<Link to="/events" className="flex justify-end mt-2 font-medium text-sky-300">
							Learn More
						</Link>
					</div>
				</div>
			))}
		</div>
	);
}
