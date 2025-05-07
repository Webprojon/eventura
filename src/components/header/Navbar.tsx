import { FaPeopleGroup } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import { NO_AVATAR } from "../../lib/data";
import { useUser } from "../../hooks/useUser";

export default function Navbar() {
	const pathname = useLocation().pathname;
	const { token, isLoading } = useUser();

	return (
		<header className="max-w-[1350px] mx-auto flex items-center justify-between h-[9vh] border-b">
			<div className="flex items-center gap-x-6 text-lg">
				<Link to="/" className="flex items-center leading-none gap-3">
					<FaPeopleGroup className="size-7 text-sky-300" />
					<h1 className="leading-none font-semibold">Eventura</h1>
				</Link>
				<Link to="/events" className="font-semibold text-sky-300">
					Events
				</Link>
			</div>
			<nav className="font-semibold flex items-center gap-x-6 text-sky-300">
				<Link to="/events/create-event" className={`py-[4px] px-5 btn ${pathname === "/events/create" ? "hidden" : ""}`}>
					Create New Event
				</Link>
				{!token && (
					<Link to="/log-in" className="py-[4px] px-5 btn">
						Sign In
					</Link>
				)}
				{isLoading ? (
					<div className="animate-spin w-9 h-9 rounded-full border-2 border-r border-b"></div>
				) : (
					<Link to="/user-profile">
						<img src={NO_AVATAR} alt="user img" className="w-9 h-9 rounded-full border object-cover" />
					</Link>
				)}
			</nav>
		</header>
	);
}
