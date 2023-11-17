export type ICourse = {
	id: string;
	long_title: string;
	short_title: string;
	short_desc: string;
	img_url: string;
	img_url_sm: string;
	page_url: string;
	overview: string;
	learning_points: string[];
	course_highlights: string[];
	price: number;
	duration: string;
	mode: string;
	schedule: string[];
};

export type IConsulting = {
	id: string;
	title: string;
	desc: string | JSX.Element;
	img_url: string;
	booking_url: string;
};

export type IUserDetails = {
	firstName: string;
	lastName: string;
	email: string;
	phone: string;
};
