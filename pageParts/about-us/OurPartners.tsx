import Image, { StaticImageData } from "next/image";
import partner1Img from "@/assets/images/partner-1.svg";
import partner2Img from "@/assets/images/partner-2.svg";
import partner3Img from "@/assets/images/partner-3.png";
import partner4Img from "@/assets/images/partner-4.png";
import partner5Img from "@/assets/images/partner-5.png";
import partner6Img from "@/assets/images/partner-6.png";

export const OurPartners = () => {
	const partnerList = [
		partner1Img,
		partner2Img,
		partner3Img,
		partner4Img,
		partner5Img,
		partner6Img,
	];

	return (
		<div className="pt-[66px] pb-[30px] ">
			<p className="text-center mb-4">Our Partners</p>
			<h2 className="text-center mb-16 text-[28px] lg:leading-[24px] ">
				We are trusted by the following
			</h2>
			<div className="flex flex-row flex-wrap items-center justify-around gap-4 lg:px-[7.08vw] px-4 ">
				{partnerList.map((item, ind) => (
					<Image src={item} alt={`partner-${ind}`} key={ind} />
				))}
			</div>
		</div>
	);
};
