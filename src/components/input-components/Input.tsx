type InputProps<T> = {
	id: string;
	name: string;
	type: string;
	text: string;
	className?: string;
	state: T;
	setState: React.Dispatch<React.SetStateAction<T>>;
};

export default function Input<T extends string | number>({
	type,
	name,
	id,
	text,
	className,
	state,
	setState,
}: InputProps<T>) {
	return (
		<input
			id={id}
			type={type}
			name={name}
			value={state}
			autoComplete="off"
			placeholder={text}
			onChange={(e) => setState(e.target.value as T)}
			className={`bg-transparent py-2 px-3 rounded-md outline-none border text-slate-300 placeholder:text-slate-300 ${className}`}
		/>
	);
}
