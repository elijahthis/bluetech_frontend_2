const BlueCard = ({
	title,
	children,
}: {
	title: string;
	children: JSX.Element | JSX.Element[] | string;
}) => {
	return (
		<div className="py-10 px-6 bg-[#F0F9FF] rounded-2xl ">
			<h3 className="text-[28px] text-[#051C2C] mb-6 ">{title}</h3>
			<div className="text-[18px] ">{children}</div>
		</div>
	);
};

export default BlueCard;
