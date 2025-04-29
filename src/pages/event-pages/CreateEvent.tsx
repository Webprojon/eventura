import { motion } from "framer-motion";
import Input from "../../components/input-components/Input";
import { Link } from "react-router-dom";
import { smoothOpacity } from "../../lib/page-animations";
import { useState } from "react";

export default function CreateEvent() {
	const [eventTitle, setEventTitle] = useState("");
	const [eventCategory, setEventCategory] = useState("");
	const [eventTime, setEventTime] = useState("");
	const [eventCity, setEventCity] = useState("");
	const [eventAvenue, setEventAvenue] = useState("");
	const [eventDate, setEventDate] = useState("");
	const [eventDescription, setEventDescription] = useState("");

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		console.log(eventTitle, eventCategory, eventTime, eventCity, eventAvenue, eventDate, eventDescription);
	};

	return (
		<motion.section
			initial="initial"
			animate="animate"
			variants={smoothOpacity}
			className="max-w-[1350px] mx-auto rounded-md px-4 py-5 mt-9 border select-none bg-[#10141E]"
		>
			<form onSubmit={handleSubmit}>
				<div>
					<h2 className="uppercase text-sm leading-none font-semibold text-sky-300">Event Details</h2>
					<div className="flex flex-wrap justify-between gap-6 mt-4">
						<Input
							type="text"
							name="event-title"
							id="event-title"
							text="Event Title"
							className="flex-[2]"
							state={eventTitle}
							setState={setEventTitle}
						/>
						<select
							required
							value={eventCategory}
							onChange={(e) => setEventCategory(e.target.value)}
							className="flex-[2] border outline-none cursor-pointer rounded-md py-2 px-3 text-slate-300 bg-[#10141E]"
						>
							<option value="" disabled>
								Select Category
							</option>
							<option value="business">Business</option>
							<option value="entertainment">Entertainment</option>
							<option value="other">Other</option>
						</select>
					</div>
				</div>

				<div className="mt-10">
					<h2 className="uppercase text-sm leading-none font-semibold text-sky-300">Event Location Details</h2>
					<div className="flex flex-wrap gap-6 mt-4">
						<Input
							type="text"
							name="city"
							id="city"
							text="City"
							className="flex-[2]"
							state={eventCity}
							setState={setEventCity}
						/>
						<Input
							type="text"
							name="avenue"
							id="avenue"
							text="Avenue"
							className="flex-[2]"
							state={eventAvenue}
							setState={setEventAvenue}
						/>
					</div>
				</div>

				<div className="mt-10">
					<h2 className="uppercase text-sm leading-none font-semibold text-sky-300">Event Date & Time</h2>
					<div className="flex flex-wrap gap-6 mt-4">
						<Input type="date" name="date" id="date" text="Date" state={eventDate} setState={setEventDate} />
						<Input
							type="time"
							name="event-title"
							id="event-title"
							text="Event Title"
							state={eventTime}
							setState={setEventTime}
						/>
					</div>
				</div>

				<div className="mt-10">
					<label htmlFor="description" className="uppercase text-sm leading-none font-semibold text-sky-300">
						Description
					</label>
					<textarea
						required
						id="description"
						autoComplete="off"
						name="description"
						value={eventDescription}
						placeholder="Write a brief description..."
						onChange={(e) => setEventDescription(e.target.value)}
						className="w-full mt-3 mb-5 bg-transparent py-2 px-3 min-h-[14vh] small-scroll rounded-md outline-none border text-slate-300 placeholder:text-slate-300"
					></textarea>
				</div>

				<div className="flex justify-end gap-x-6">
					<Link to="/events" className="py-2 px-7 rounded-md font-semibold border-1 border-sky-300 text-sky-300">
						Cancel
					</Link>
					<button type="submit" className="py-2 px-7 btn">
						Create New Event
					</button>
				</div>
			</form>
		</motion.section>
	);
}
