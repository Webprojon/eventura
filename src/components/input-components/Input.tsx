type InputProps = {
	id: string;
	name: string;
	type: string;
	text: string;
	className?: string;
	value: string | number;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Input({ type, name, id, text, className, value, onChange }: InputProps) {
	return (
		<input
			id={id}
			type={type}
			name={name}
			value={value}
			autoComplete="off"
			placeholder={text}
			onChange={onChange}
			className={`bg-transparent py-2 px-3 rounded-md outline-none border text-slate-300 placeholder:text-slate-300 ${className}`}
		/>
	);
}
