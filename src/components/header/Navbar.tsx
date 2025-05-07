import { FaPeopleGroup } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import { NO_AVATAR } from "../../lib/data";
import { useUser } from "../../hooks/useUser";
import ClipLoader from "./../../../node_modules/react-spinners/esm/ClipLoader";

export default function Navbar() {
	const pathname = useLocation().pathname;
	const { data, isLoading } = useUser();
	const user = data?.data[0];

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
				{user ? (
					isLoading ? (
						<ClipLoader size={30} color="text-sky-300" speedMultiplier={0.6} />
					) : (
						<div className="flex items-center gap-2">
							<Link to={`/profile/${user._id}`}>
								<img src={NO_AVATAR} alt="user img" className="w-9 h-9 rounded-full border object-cover" />
							</Link>
							<span className="text-white">{user.name}</span>
						</div>
					)
				) : (
					<Link to="/log-in" className="py-[4px] px-5 btn">
						Sign In
					</Link>
				)}
			</nav>
		</header>
	);
}
