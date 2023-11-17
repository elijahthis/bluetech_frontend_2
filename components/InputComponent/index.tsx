interface InputComponentProps {
	label: string;
	name: string;
	showLabel?: boolean;
	value?: string;
	onChange?: (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => void;
	type:
		| "text"
		| "email"
		| "password"
		| "number"
		| "tel"
		| "url"
		| "search"
		| "textarea"
		| undefined;
	placeholder?: string;
	required?: boolean;
}

const InputComponent = ({
	label,
	name,
	showLabel = true,
	value,
	onChange,
	type,
	placeholder,
	required = false,
}: InputComponentProps) => {
	return (
		<label
			htmlFor=""
			className="flex flex-col items-stretch gap-2 text-[051C2C] font-medium "
		>
			{showLabel ? label : ""}
			{type === "textarea" ? (
				<textarea
					name={name}
					id=""
					cols={30}
					rows={5}
					value={value}
					onChange={onChange}
					placeholder={placeholder}
					className={`font-medium py-4 px-6 rounded border border-[#CCC] focus:outline-none focus:ring-2 focus:ring-[#051c2c] focus:border-transparent `}
					aria-label={label}
					required={required}
				></textarea>
			) : (
				<input
					name={name}
					type={type}
					value={value}
					onChange={onChange}
					placeholder={placeholder}
					className={`font-medium py-4 px-6 rounded border border-[#CCC] focus:outline-none focus:ring-2 focus:ring-[#051c2c] focus:border-transparent `}
					aria-label={label}
					required={required}
				/>
			)}
		</label>
	);
};

export default InputComponent;
