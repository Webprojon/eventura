import { ParticipantType } from "../../lib/types";

type EventParticipantsProps = {
	participants: ParticipantType[];
};

export default function EventParticipants({ participants }: EventParticipantsProps) {
	return (
		<div className="flex-1 rounded-md border select-none bg-[#10141E]">
			{/*border-b*/}
			<div className="px-3 py-2">
				<span className="font-semibold text-[18px]">Participants {participants.length}</span>
			</div>
			{/*<div className="flex flex-col gap-y-3 p-3 max-h-[35.4vh] overflow-y-scroll small-scroll">
				{participants.map((participant) => (
					<Link
						key={participant.id}
						to={`/profile/${participant.participantName.toLowerCase().replace(/\s+/g, "-")}`}
						className="flex items-center gap-x-4 px-3 py-[5px] rounded-md transition-all bg-[#1C2029] hover:bg-[#262a34]"
					>
						<img src={participant.participantImg} alt="coming user" className="w-10 h-10 rounded-full" />
						<span className="font-medium">{participant.participantName}</span>
					</Link>
				))}
			</div>*/}
		</div>
	);
}
