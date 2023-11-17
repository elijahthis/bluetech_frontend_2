"use client";
import { ICourse } from "@/data/types";
import Button from "../Button";
import { CalendarIcon, MegaphoneIcon, TimeIcon } from "../svgs";
import { useRouter } from "next/navigation";

const CourseInfoCard = ({ courseData }: { courseData: ICourse }) => {
	const router = useRouter();

	return (
		<div className="bg-white">
			<div className="py-8 pt-10 px-6 border-b border-[#CCCCCC] ">
				<div className="flex flex-row items-center gap-4 mb-6">
					<h3 className="text-2xl">£{(courseData.price * 12) / 17}</h3>
					<p className="font-medium line-through">£{courseData.price}</p>
				</div>
				<Button
					onClick={() =>
						router.push(`/courses/checkout?courseRef=${courseData.id}`)
					}
				>
					Proceed to Checkout
				</Button>
			</div>
			<div className="py-8 pt-10 px-6 flex flex-col items-stretch gap-4 lg:gap-6">
				<div className="flex flex-row items-start gap-4 ">
					<CalendarIcon />
					<p>Duration: {courseData.duration}</p>
				</div>
				<div className="flex flex-row items-start gap-4 ">
					<MegaphoneIcon />
					<p>Mode: {courseData.mode}</p>
				</div>
				<div className="flex flex-row items-start gap-4 ">
					<TimeIcon />
					<p>
						Schedule:
						<br />
						{courseData.schedule.map((item, ind) => (
							<>
								<span>{item}</span>
								{ind !== courseData.schedule.length - 1 && <br />}
							</>
						))}
					</p>
				</div>
			</div>
		</div>
	);
};

export default CourseInfoCard;
