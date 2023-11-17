import placeImg from "@/assets/images/img-2.jpg";
import TeamCard from "@/components/TeamCard";
import Image, { StaticImageData } from "next/image";

export const OurTeam = () => {
	const teamList: {
		name: string;
		position: string;
		desc: string;
		imgURL: string | StaticImageData;
	}[] = [
		{
			name: "Yinka Aina",
			position: "COO",
			desc: "Bluetechconsulting team was able to provide the right level of support during our Agile Transformation journey. ",
			imgURL: placeImg,
		},
		{
			name: "Yemi Oliyide",
			position: "CTO",
			desc: "Bluetechconsulting team was able to provide the right level of support during our Agile Transformation journey. ",
			imgURL: placeImg,
		},
		{
			name: "Folake Aina",
			position: "Operation Director",
			desc: "Bluetechconsulting team was able to provide the right level of support during our Agile Transformation journey. ",
			imgURL: placeImg,
		},
	];

	return (
		<div className="bg-[#E2E9EE] pt-12 pb-20 lg:px-[7.08vw] px-4 ">
			<p className="text-center lg:mb-[30px] mb-3">Our Team</p>
			<h2 className="text-center lg:mb-[78px] mb-10 text-[28px] lg:leading-[24px] leading-[normal] ">
				Meet those behind the amazing works
			</h2>
			<div className="lg:grid lg:grid-cols-3 flex flex-col items-stretch gap-6">
				{teamList.map((teamMember, ind) => (
					<TeamCard data={teamMember} key={ind} />
				))}
			</div>
		</div>
	);
};
