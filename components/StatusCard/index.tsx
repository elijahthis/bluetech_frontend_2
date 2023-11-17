import { FiFrown } from "react-icons/fi";
import Button from "../Button";
import { HiBadgeCheck } from "react-icons/hi";

interface StatusCardProps {
	title: string;
	buttonText: string;
	buttonAction: () => void;
	children?: React.ReactNode;
	success?: boolean;
}

const StatusCard = ({
	title,
	buttonText,
	buttonAction,
	children,
	success = false,
}: StatusCardProps) => {
	return (
		<div className="bg-white px-4 py-20 lg:px-[11.74vw] lg:py-[56px] lg:pb-[71px] flex flex-col items-center ">
			{success ? (
				<HiBadgeCheck size={60} color="#1aad19" />
			) : (
				<FiFrown size={60} color="#eb001b" />
			)}
			<h1 className="mb-6 mt-4 lg:mb-10 text-2xl lg:text-[32px] ">{title}</h1>
			<div className="mb-10 lg:mb-16 text-center text-base lg:text-[18px] lg:leading-[24px] ">
				{children}
			</div>
			<Button onClick={buttonAction} style={{ width: "100%" }}>
				{buttonText}
			</Button>
		</div>
	);
};

export default StatusCard;
