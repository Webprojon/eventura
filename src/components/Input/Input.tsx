type InputProps = {
	type: string;
	text: string;
	className?: string;
};

export default function Input({ type, text, className }: InputProps) {
	return (
		<input
			required
			type={type}
			placeholder={text}
			autoComplete="off"
			className={`bg-transparent py-2 px-3 rounded-md outline-none border text-slate-300 placeholder:text-slate-300 ${className}`}
		/>
	);
}
