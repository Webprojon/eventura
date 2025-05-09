import { FaPeopleGroup } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import { NO_AVATAR } from "../../lib/data";
import { useUser } from "../../hooks/useUser";
import { MdEditCalendar } from "react-icons/md";

export default function Navbar() {
	const pathname = useLocation().pathname;
	const { token, isLoading } = useUser();

	return (
		<header className="max-w-[1350px] mx-auto flex items-center justify-between h-[9vh] border-b px-2 xl:px-0">
			<div className="flex items-center gap-x-4 text-lg">
				<Link to="/" className="flex items-center leading-none gap-3">
					<FaPeopleGroup className="size-7 text-sky-300" />
					<h1 className="leading-none font-semibold">Eventura</h1>
				</Link>
				<Link to="/events" className={`font-semibold ${pathname === "/events" && "text-sky-300"}`}>
					Events
				</Link>
			</div>
			<nav className="font-semibold flex items-center gap-x-4 text-sky-300">
				<Link
					to={`${token ? "/events/create-event" : "/login"}`}
					className={`hidden sm:block py-[4px] px-5 btn ${pathname === "/events/create-event" && "hidden"}`}
				>
					Create New Event
				</Link>
				<Link to={`${token ? "/events/create-event" : "/login"}`} className={`sm:hidden ${pathname === "/events/create-event" && "hidden"}`}>
					<MdEditCalendar className="size-6 text-slate-300" />
				</Link>
				{token ? (
					<>
						{isLoading ? (
							<div className="animate-spin w-9 h-9 rounded-full border-2 border-r border-b"></div>
						) : (
							<Link to="/user-profile" className="rounded-full bg-[#1C2029]">
								<img src={NO_AVATAR} alt="user img" className="w-9 h-9 rounded-full border object-cover" />
							</Link>
						)}
					</>
				) : (
					<Link to="/login" className="py-[7px] sm:py-[4px] px-5 btn relative flex justify-center items-center">
						<span className="relative -top-4 -right-20 flex size-3">
							<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-300 opacity-85"></span>
							<span className="relative inline-flex size-3 rounded-full bg-sky-400"></span>
						</span>
						Sign In
					</Link>
				)}
			</nav>
		</header>
	);
}
