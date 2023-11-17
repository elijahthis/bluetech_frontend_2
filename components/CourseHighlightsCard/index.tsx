import { ICourse } from "@/data/types";

const CourseHighlightsCard = ({ courseData }: { courseData: ICourse }) => {
	return (
		<div className="bg-white py-10 px-6 ">
			<h2 className="mb-6 text-[18px] leading-[24px] ">Course highlights</h2>
			<ul className="ml-4">
				{courseData.learning_points.map((item, ind) => (
					<li className="list-disc" key={ind}>
						{item}
					</li>
				))}
			</ul>
		</div>
	);
};

export default CourseHighlightsCard;
