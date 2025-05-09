import { motion } from "framer-motion";
import { smoothOpacity } from "../../lib/page-animations";
import { useUser } from "../../hooks/useUser";

export default function UserProfile() {
	const { user, handleLogOut } = useUser();

	if (!user) return <p className="max-w-[1350px] mx-auto mt-5 sm:mt-9 px-2 xl:px-0">User not found</p>;

	return (
		<motion.section
			initial="initial"
			animate="animate"
			variants={smoothOpacity}
			className="flex items-start gap-5 mt-5 sm:mt-9 max-w-[1350px] min-h-[100vh] mx-auto pb-10 px-2 xl:px-0"
		>
			<div className="flex flex-col items-start gap-y-3 text-lg">
				<span>
					<strong>Name: </strong>
					{user.name}
				</span>
				<span>
					<strong>Email: </strong>
					{user.email}
				</span>
				<button className="btn cursor-pointer py-2 px-6" onClick={handleLogOut}>
					Log out
				</button>
				<span>New design and features are coming soon !</span>
			</div>
		</motion.section>
	);
}
