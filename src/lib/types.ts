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

export interface EventFormData {
	eventTitle: string;
	eventCategory: string;
	eventCity: string;
	eventAvenue: string;
	eventDate: string;
	eventTime: string;
	eventDescription: string;
}
