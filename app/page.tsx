import {
	DescCards,
	FounderMessage,
	Hero,
	Sponsors,
	Testimonials,
} from "@/pageParts/home";

const Home = () => {
	return (
		<main>
			<Hero />
			<Sponsors />
			<DescCards />
			<FounderMessage />
			<Testimonials />
		</main>
	);
};

export default Home;
