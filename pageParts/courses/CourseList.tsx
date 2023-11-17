import Button from "@/components/Button";
import { courseList } from "@/data/constants";
import { ICourse } from "@/data/types";
import Image from "next/image";
import Link from "next/link";

export const CourseList = () => {
	return (
		<section
			className="pt-[67px] pb-10 bg-[#F0F9FF] grid gap-10 px-4 lg:px-[86px] "
			style={{ gridTemplateColumns: "repeat(auto-fit, minmax(328px, 1fr))" }}
		>
			{courseList.map((item, ind) => (
				<CourseItem key={ind} courseData={item} />
			))}
		</section>
	);
};

const CourseItem = ({ courseData }: { courseData: ICourse }) => (
	<div className="bg-white rounded-3xl overflow-hidden flex flex-col items-stretch ">
		<Image
			src={courseData.img_url_sm}
			alt={courseData.short_title}
			width={396}
			height={342}
			className="w-full"
		/>
		{/* <div className="   "> */}
		<h2 className="mb-4 text-[24px] leading-[24px] mt-6 px-6 ">
			{courseData.long_title}
		</h2>
		<p className="text-base leading-[24px]  mb-6 px-6 ">
			{courseData.short_desc}
		</p>
		<div className="px-6 pb-8 mt-auto">
			<Link href={courseData.page_url}>
				<Button>View More</Button>
			</Link>
		</div>

		{/* </div> */}
	</div>
);
