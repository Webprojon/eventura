import { motion } from "framer-motion";
import Input from "../../components/input-components/Input";
import { Link } from "react-router-dom";

export default function CreateEvent() {
	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5 }}
			className="max-w-[1350px] mx-auto min-h-[75vh] rounded-md p-4 mt-9 bg-[#10141E]"
		>
			<form>
				<div>
					<span className="uppercase text-sm leading-none font-semibold text-sky-300">Event Details</span>
					<div className="flex justify-between gap-x-6 mt-2">
						<Input type="text" text="Event title" className="flex-2" />
						<select
							required
							className="flex-2 border outline-none cursor-pointer rounded-md py-2 px-3 text-slate-300 bg-[#10141E]"
						>
							<option selected>Category</option>
							<option value="business">Business</option>
							<option value="entertainment">Entertainment</option>
						</select>
					</div>
				</div>

				<div className="flex flex-col mt-10">
					<span className="text-sky-300 uppercase text-sm leading-none font-semibold">Event Location Details</span>
					<div className="flex gap-x-6 mt-2">
						<Input type="text" text="City" className="flex-1" />
						<Input type="text" text="Avenue" className="flex-1" />
						<Input type="text" text="Date" className="flex-1" />
					</div>
					<textarea
						required
						autoComplete="off"
						name="description"
						placeholder="Description..."
						className="my-6 bg-transparent py-2 px-3 min-h-[14vh] small-scroll rounded-md outline-none border text-slate-300 placeholder:text-slate-300"
					></textarea>
				</div>

				<div className="flex justify-end gap-x-6">
					<Link to="/events" className="py-2 px-7 rounded-md font-semibold bg-red-500">
						Cancel
					</Link>
					<button className="py-2 px-7 btn">Create New Event</button>
				</div>
			</form>
		</motion.section>
	);
}
