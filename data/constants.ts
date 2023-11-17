import { IConsulting, ICourse } from "./types";

export const navList: { name: string; url: string }[] = [
	{
		name: "Home",
		url: "/",
	},
	{
		name: "About Us",
		url: "/about-us",
	},
	{
		name: "Courses",
		url: "/courses",
	},
	{
		name: "Consulting",
		url: "/consulting",
	},
	{
		name: "Contact Us",
		url: "/contact-us",
	},
];

export const courseList: ICourse[] = [
	{
		id: "business-analysis",
		long_title: "Business Analysis",
		short_title: "Business Analysis",
		short_desc:
			"Are you looking for a career switch as a Business Analyst? Well. Worry no more! We have got you covered. Our range of specially curated Business Analysis Training Courses provides you with the knowledge and skillset needed for a successful career in Business Analysis. Our comprehensive curriculum a...",
		img_url: "/images/courses/business-analysis.png",
		img_url_sm: "/images/courses/business-analysis.png",
		page_url: "/courses/business-analysis",
		overview:
			"Our comprehensive Business Analyst Career Programme is meticulously crafted to empower aspiring Business Analysts with the essential skills required to not only thrive but also stand out in today’s dynamic and high-speed professional landscape. This program also serves as a platform to reaffirm the proficiencies of seasoned Business Analysts. Throughout this program, you will master the art of adopting a holistic perspective when delving into organizational processes, leveraging cutting-edge business analysis tools, and implementing advanced business analyst skills. You will gain hands-on experience in utilizing a plethora of techniques and industry best practices to adeptly gather critical information, all the while researching and presenting alternative solutions that hold merit for crucial stakeholders. Prepare to submerge yourself in the captivating realm of business analysis, as you embark on a journey to enhance your abilities like never before.",
		learning_points: [
			"Business Case and project documentation",
			"Software Development Life Cycle",
			"Stakeholder management",
			"Requirements engineering",
			"Requirements modelling",
			"Business Analyst’ deliverables",
			"Agile ways of working - Scrum",
			"Jira /Confluence",
			"Web technology",
			"Tech skills",
		],
		course_highlights: [
			"Hand-on project experience",
			"Working with cutting edge tools",
			"Recorded sessions",
			"CV writing & job interview prep",
			"1 month post tuition on the job support ",
		],
		price: 850,
		duration: "8 weeks",
		mode: "100% Online",
		schedule: ["Weds: 6pm - 8pm", "Sats: 10am - 3pm "],
	},
	{
		id: "scrum-mastering",
		long_title: "Scrum Master",
		short_title: "Scrum Master",
		short_desc:
			"Master the core concepts of Scrum, including the roles and responsibilities of the Scrum Master, Product Owner, and Development Team, as well as Scrum ceremonies and artifacts in our experiential learning sessions, power-packed with activities, role-plays, real-world simulations, and case studies",
		img_url: "/images/courses/scrum-mastering.png",
		img_url_sm: "/images/courses/scrum-mastering.png",
		page_url: "/courses/scrum-mastering",
		overview:
			"A scrum master is the scrum team member tasked with fostering an effective and productive working environment and guiding others to understand scrum values, principles and practices. Scrum masters tend to be people-oriented, have a high level of emotional intelligence, and find joy in helping team members to grow.On this course, you'll gain a deeper understanding of professional Scrum roles, events and artefacts, including your own role as a Scrum Master to encourage performance at the highest level. The objectives of the course are to: Provide a clear understanding of the rules of Scrum through the empirical foundation of Scrum. Enable you to act as a Scrum Master for Scrum teams as well as stakeholders from an in-depth understanding of servant-leadership. Enable you to effectively start up Scrum or increase its effectiveness if already underway",
		learning_points: [
			"The Scrum Framework",
			"Complexity and empiricism",
			"Origins of Agile",
			"Scrum values and teams",
			"Scrum roles",
			"Scrum events",
			"Scrum artifacts",
			"Prioritisation",
			"Estimating",
			"Scaling and projects",
		],
		course_highlights: [
			"Hand-on project experience",
			"Working with cutting edge tools",
			"Recorded sessions",
			"CV writing & job interview prep",
			"1 month post tuition on the job support",
		],
		price: 850,
		duration: "8 weeks",
		mode: "100% Online",
		schedule: ["Weds: 6pm - 8pm", "Sats: 10am - 3pm"],
	},
	{
		id: "product-ownership",
		long_title: "Product Owner",
		short_title: "Product Owner",
		short_desc:
			"The Product Owner role is arguably the most important role in Scrum — and the most challenging. The Product Owner is part project manager, part product manager, and part customer advocate. This person must ensure the customer’s wants and needs are understood while ensuring that the team ...",
		img_url: "/images/courses/product-ownership.png",
		img_url_sm: "/images/courses/product-ownership.png",
		page_url: "/courses/product-ownership",
		overview:
			"The Product Owner is ccountable for maximising the value of the product, resulting from the work of the Scrum team. They are also accountable for effective product backlog management, which includes: Developing and explicitly communicating the product goal Creating and clearly communicating product backlog items Ordering product backlog items Ensuring that the backlog is transparent, visible and understood. The product owner may do the above work or may delegate. They represent the needs of many stakeholders, those wanting to change the backlog do so by convincing the product owner.",
		learning_points: [
			"Agile Software Development",
			"Scrum Framework",
			"Product Owner Role",
			"Product Owner Activities",
			"Product Owner Skills",
			"Scaling",
			"Product Vision",
			"User Stories",
			"Product backlog",
			"Writing user stories",
			"User Story mapping",
			"Splitting user stories",
			"Acceptance Criteria, DoR, DoD",
			"Release Planning",
		],
		course_highlights: [
			"Hand-on project experience",
			"Working with cutting edge tools",
			"Recorded sessions",
			"1 month post tuition on the job support",
		],
		price: 850,
		duration: "8 weeks",
		mode: "100% Online",
		schedule: ["Weds: 6pm - 8pm", "Sats: 10am - 3pm"],
	},
	{
		id: "data-analysis",
		long_title: "Data Analysis",
		short_title: "Data Analysis",
		short_desc:
			"Data analytics has become indispensable for organisations as they look for new ways to optimise performance, reduce costs and identify more efficient approaches to conducting business.with $68 billion projected revenue from the global big data analytics market by 2025, opportunities in...",
		img_url: "/images/courses/data-analysis.png",
		img_url_sm: "/images/courses/data-analysis.png",
		page_url: "/courses/data-analysis",
		overview:
			"Data analytics has become indispensable for organisations as they look for new ways to optimise performance, reduce costs and identify more efficient approaches to conducting business. And with $68 billion projected revenue from the global big data analytics market by 2025, opportunities in data analytics are expected to soar.This course is designed to help participants succeed in today’s data-driven business environment. By developing a strong technical foundation in the applications of data analytics and the skills to analyse, visualise and communicate critical business insights.",
		learning_points: [
			"Agile Software Development",
			"Scrum Framework",
			"Product Owner Role",
			"Product Owner Activities",
			"Product Owner Skills",
			"Scaling",
			"Product Vision",
			"User Stories",
			"Product backlog",
			"Writing user stories",
			"User Story mapping",
			"Splitting user stories",
			"Acceptance Criteria, DoR, DoD",
			"Release Planning",
		],
		course_highlights: [
			"Hand-on project experience",
			"Working with cutting edge tools",
			"Recorded sessions",
			"1 month post tuition on the job support ",
		],
		price: 850,
		duration: "8 weeks",
		mode: "100% Online",
		schedule: ["Weds: 6pm - 8pm", "Sats: 10am - 3pm "],
	},
];

export const consultingList: IConsulting[] = [
	{
		id: "one_on_one",
		title: "One-on-one Consultation",
		desc: "Today is the best day to launch your career into tech. If you are considering our taster session or would like to dive straight into our business analyst, scrum master or product owner training, then contact us now.",
		img_url: "https://loremflickr.com/594/443?random=1",
		booking_url: "",
	},
	{
		id: "digital_transformation",
		title: "Digital Transformation Consulting",
		desc: "Today is the best day to launch your career into tech. If you are considering our taster session or would like to dive straight into our business analyst, scrum master or product owner training, then contact us now. Today is the best day to launch your career into tech. If you are considering our taster session or would like to dive straight into our business analyst, scrum master or product owner training, then contact us now.Today is the best day to launch your career into tech. If you are considering our taster session or would like to dive straight into our business analyst, scrum master or product owner training, then contact us now.Today is the best day to launch your career into tech. If you are considering our taster session or would like to dive straight into our business analyst, scrum master or product owner training, then contact us now.",
		img_url: "https://loremflickr.com/594/443?random=4",
		booking_url: "",
	},
];

export const courseMap = new Map<string, string>([
	[courseList[0].id, courseList[0].long_title],
	[courseList[1].id, courseList[1].long_title],
	[courseList[2].id, courseList[2].long_title],
	[courseList[3].id, courseList[3].long_title],
]);

export const consultTimeList: any = {
	"30_mins": { full: "30 minutes", linkEnd: "30-mins-consultation" },
	"60_mins": { full: "60 minutes", linkEnd: "60-mins-consultation" },
	"90_mins": { full: "90 minutes", linkEnd: "90-mins-consultation-1" },
};
