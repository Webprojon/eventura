import { FaPeopleGroup } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
	const pathname = useLocation().pathname;

	return (
		<header className="max-w-[1350px] mx-auto flex items-center justify-between h-[9vh] border-b">
			<div className="flex items-center gap-x-6 text-lg">
				<Link to="/events" className="flex items-center leading-none gap-3">
					<FaPeopleGroup className="size-7 text-sky-300" />
					<h1 className="leading-none font-semibold">Eventura</h1>
				</Link>
				<Link to="/events" className="font-semibold text-sky-300">
					Events
				</Link>
			</div>
			<nav className="font-semibold flex items-center gap-x-4 text-sky-300">
				<Link to="/create-event" className={`py-[4px] px-3 btn ${pathname === "/create-event" ? "hidden" : ""}`}>
					Create New Event
				</Link>
				<Link to="/log-in" className="py-[4px] px-3 btn">
					Sign In
				</Link>
				<Link to="/profile/john">
					<img
						alt="user img"
						className="w-8 h-8 rounded-full object-cover"
						src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
					/>
				</Link>
			</nav>
		</header>
	);
}
