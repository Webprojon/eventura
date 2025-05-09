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
import useModalStore from "../../store/modal";

export default function ManageEvent({ id }: { id: string }) {
	const isMenuOpen = useModalStore((state) => state.isMenuOpen);
	const handleMenu = useModalStore((state) => state.handleMenu);

	const [isModalOpen, setIsModalOpen] = useState(false);
	const { handleDelete } = useDeleteEvent();
	const { token } = useUser();

	const handleModal = () => {
		setIsModalOpen(!isModalOpen);
	};

	return (
		<>
			<div className="flex gap-3">
				{isMenuOpen && (
					<motion.div initial="initial" animate="animate" variants={modalAnim} className="hidden sm:flex flex-col gap-y-2">
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

export function ManageEventMobile({ id }: { id: string }) {
	const isMenuOpen = useModalStore((state) => state.isMenuOpen);

	const [isModalOpen, setIsModalOpen] = useState(false);
	const { handleDelete } = useDeleteEvent();
	const { token } = useUser();

	const handleModal = () => {
		//setIsMenuOpen(false);
		setIsModalOpen(!isModalOpen);
	};

	return (
		<>
			<div>
				{isMenuOpen && (
					<motion.div initial="initial" animate="animate" variants={modalAnim} className="flex sm:hidden justify-between mt-4">
						<Link to={`${token ? `/events/update/${id}` : "/login"}`} className="flex items-center gap-2 font-semibold text-sky-300">
							<MdOutlineEdit className="size-5" />
							Update event
						</Link>
						<button onClick={handleModal} className="flex items-center gap-2 cursor-pointer font-semibold text-red-400">
							<RiDeleteBin6Line className="size-5" />
							Delete event
						</button>
					</motion.div>
				)}
			</div>
			{/* Confirmation Modal */}
			{isModalOpen && <ConfirmationModal message="Confirm deletion of this event?" onCancel={handleModal} onConfirm={() => handleDelete(id)} />}
		</>
	);
}
