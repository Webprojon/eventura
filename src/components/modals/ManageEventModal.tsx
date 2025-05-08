import { MdClose, MdOutlineEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { TfiMenuAlt } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { modalAnim } from "../../lib/page-animations";
import ConfirmationModal from "./ConfirmationModal";
import { useDeleteEvent } from "../../hooks/useDeleteEvent";
import { useUser } from "../../hooks/useUser";

export default function ManageEvent({ id }: { id: string }) {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const { handleDelete } = useDeleteEvent();
	const { token } = useUser();

	const handleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const handleModal = () => {
		setIsMenuOpen(false);
		setIsModalOpen(!isModalOpen);
	};

	return (
		<>
			<div className="flex gap-3">
				{isMenuOpen && (
					<motion.div initial="initial" animate="animate" variants={modalAnim} className="flex flex-col gap-y-2">
						<Link to={`${token ? `/events/update/${id}` : "/login"}`} className="flex items-center gap-2 text-[13px] font-semibold text-sky-300">
							<MdOutlineEdit className="size-4" />
							Update event
						</Link>
						<button onClick={handleModal} className="flex items-center gap-2 cursor-pointer text-[13px] font-semibold text-red-400">
							<RiDeleteBin6Line className="size-4" />
							Delete event
						</button>
					</motion.div>
				)}
				<div className="flex items-center justify-center w-7 h-7">
					{isMenuOpen ? (
						<MdClose onClick={handleMenu} className="cursor-pointer size-6" />
					) : (
						<TfiMenuAlt onClick={handleMenu} className="cursor-pointer size-5" />
					)}
				</div>
			</div>

			{/* Confirmation Modal */}
			{isModalOpen && <ConfirmationModal message="Confirm deletion of this event?" onCancel={handleModal} onConfirm={() => handleDelete(id)} />}
		</>
	);
}
