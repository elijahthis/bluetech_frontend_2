interface RadioComponentProps {
	label: string | JSX.Element;
	value: string;
}

const RadioComponent = ({ label, value }: RadioComponentProps) => {
	return (
		<div className="p-4 border border-[#CCC] rounded cursor-pointer flex flex-row items-center gap-6 ">
			<div className="w-6 h-6 border border-[2px] border-[#051C2C] rounded-full "></div>
			<div className="text-[#051C2C] ">{label}</div>
		</div>
	);
};

export default RadioComponent;
