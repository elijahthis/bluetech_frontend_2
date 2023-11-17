import { ICourse } from "@/data/types";
import Image from "next/image";

const OverviewCard = ({ courseData }: { courseData: ICourse }) => {
	return (
		<div>
			<Image
				src={courseData.img_url}
				width={340}
				height={300}
				alt={courseData.short_title}
				className="w-full max-h-[435px] object-cover"
			/>
			<div className="py-6 lg:py-10 px-4 lg:px-6 mt-4 bg-white">
				<h2 className="mb-4 text-xl lg:text-2xl">Overview</h2>
				<p className="mb-6">{courseData.overview}</p>
				<h3 className="mb-4 text-[18px]  ">What you Learn</h3>
				<ul className="ml-4">
					{courseData.learning_points.map((item, ind) => (
						<li className="list-disc" key={ind}>
							{item}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default OverviewCard;
