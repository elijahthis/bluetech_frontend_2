import Image from "next/image";
import home1Img from "@/assets/images/about-selfie.jpg";

export const FounderMessage = () => {
	return (
		<section className="flex lg:flex-row flex-col items-stretch justify-center gap-12 py-6 px-4 pb-[60px]">
			<Image
				src={home1Img}
				alt={`Founder - Yinka`}
				className="w-full lg:w-[500px] object-cover object-center"
			/>
			<div>
				<h2 className="text-[28px] leading-[normal] mb-6 ">
					Meet the CEO and founder
				</h2>
				<p className="lg:max-w-[468px] text-[20px] ">
					Ibiyinka Aina is the founder and COO of Bluetech Consulting. He has
					vast experience implementing and supporting Digital and Agile
					transformation initiatives within banking, insurance, fintech, and
					Start-Ups in United Kingdom and Europe.
					<br />
					<br />
					He is also experienced digital strategy, transforming existing
					operation models, business processes, improving the end-to-end
					customer journey, and bring new digital products to market from
					inception. <br />
					<br />
					He has more than 15 years' experience consultancy as a Business
					Analysis, Scrum Master, and a Product Owner. <br />
					<br />
					Ibiyinka has mentored more than 100 mentees, guiding most of them
					through job interviews process and providing on-the-job support.{" "}
					<br />
					<br />
					His degrees are in Computer Science, (BSc, MSc), and Business
					Administration. He is a family man, and an ardent Arsenal Football
					Club
				</p>
			</div>
		</section>
	);
};
