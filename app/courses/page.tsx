import TitleBanner from "@/components/TitleBanner";
import { CourseList } from "@/pageParts/courses";

const Courses = () => {
	return (
		<main>
			<TitleBanner
				title="Courses"
				navList={[{ label: "Courses", link: "/courses" }]}
			/>
			<CourseList />
		</main>
	);
};

export default Courses;
