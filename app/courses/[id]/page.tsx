import CourseHighlightsCard from "@/components/CourseHighlightsCard";
import CourseInfoCard from "@/components/CourseInfoCard";
import OverviewCard from "@/components/OverviewCard";
import TitleBanner from "@/components/TitleBanner";
import { courseList } from "@/data/constants";

const CoursePage = ({ params }: { params: { id: string } }) => {
	const currentCourse = courseList.find((course) => course.id === params.id);

	if (!currentCourse) {
		return (
			<main>
				<TitleBanner
					title="Courses"
					navList={[{ label: "Courses", link: "/courses" }]}
				/>
				<h1>Course Not Found</h1>
			</main>
		);
	}

	return (
		<main>
			<TitleBanner
				title={currentCourse.short_title}
				navList={[
					{ label: "Courses", link: "/courses" },
					{ label: currentCourse.short_title, link: currentCourse.page_url },
				]}
			/>
			<div
				className="pt-[77px] pb-10 px-4 lg:px-[7.08vw] bg-[#F0F9FF] flex flex-col items-stretch gap-6 lg:grid  "
				style={{ gridTemplateColumns: "61fr 39fr" }}
			>
				<OverviewCard courseData={currentCourse} />
				<div className="flex flex-col items-stretch gap-6">
					<CourseInfoCard courseData={currentCourse} />
					<CourseHighlightsCard courseData={currentCourse} />
				</div>
			</div>
		</main>
	);
};

export default CoursePage;
