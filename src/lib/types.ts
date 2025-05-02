export interface ParticipantType {
	id: string;
	participantImg: string;
	participantName: string;
}

export interface EventTypes {
	_id: string;
	organiserImg: string;
	eventTitle: string;
	eventOrganiser: string;
	eventDate: string;
	eventTime: string;
	eventCity: string;
	eventAvenue: string;
	eventParticipants: ParticipantType[];
	eventDescription: string;
}
