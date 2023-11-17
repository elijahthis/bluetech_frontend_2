import Image from "next/image";
import partner1Img from "@/assets/images/partner-1.svg";
import partner2Img from "@/assets/images/partner-2.svg";
import partner3Img from "@/assets/images/partner-3.png";
import partner4Img from "@/assets/images/partner-4.png";
import partner5Img from "@/assets/images/partner-5.png";
import partner6Img from "@/assets/images/partner-6.png";

export const Sponsors = () => {
	const partnerList = [
		partner1Img,
		partner2Img,
		partner3Img,
		partner4Img,
		partner5Img,
		partner6Img,
	];

	return (
		<div className="flex flex-col items-center gap-4 justify-between py-[38px] lg:px-[72px] px-4 ">
			<p className="text-[24px] font-semibold w-max ">Trusted by</p>
			<div className="flex flex-row flex-wrap lg:items-center justify-around lg:gap-[60px] gap-8 lg:px-[7.08vw] w-full ">
				{partnerList.map((item, ind) => (
					<Image
						src={item}
						alt={`partner-${ind}`}
						key={ind}
						className="lg:min-h-[60px] min-h-[40px] w-max"
					/>
				))}
			</div>
		</div>
	);
};
