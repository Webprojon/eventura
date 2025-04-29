import { useState } from "react";
import { Calendar } from "primereact/calendar";
import "primereact/resources/themes/lara-dark-indigo/theme.css";

export default function EventCalendar() {
	const [dateValue, setDateValue] = useState<Date | null>(new Date());

	return (
		<Calendar
			inline
			showWeek
			value={dateValue}
			onChange={(e) => setDateValue(e.value as Date)}
			className="flex-1 select-none border rounded-md"
		/>
	);
}
