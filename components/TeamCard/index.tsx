import Image, { StaticImageData } from "next/image";

const TeamCard = ({
	data,
}: {
	data: {
		imgURL: string | StaticImageData;
		name: string;
		position: string;
		desc: string;
	};
}) => {
	const { imgURL, name, position, desc } = data;
	return (
		<div className="rounded-2xl overflow-hidden">
			<Image src={imgURL} alt="" />
			<div className="pt-6 px-7 pb-8 bg-white">
				<p className="font-bold text-[18px] leading-[24px] mb-1 ">{name}</p>
				<p className="font-medium text-[18px] leading-[24px] mb-4 ">
					{position}
				</p>
				<p>{desc}</p>
			</div>
		</div>
	);
};

export default TeamCard;
