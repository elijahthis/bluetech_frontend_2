import { RiLoader5Fill } from "react-icons/ri";

const LoadingComponent = ({ size }: { size: string }) => {
	return (
		<main className={`h-[${size}]  grid place-items-center `}>
			<RiLoader5Fill className="animate-spin text-[#1E3A8A] text-6xl" />
		</main>
	);
};

export default LoadingComponent;
