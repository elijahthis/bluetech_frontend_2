import ImgTextCol, { TiTleTextStory } from "@/components/ImgTextCol";
import about1Img from "@/assets/images/about-1.png";
import about2Img from "@/assets/images/about-2.png";

export const StoryVision = () => {
	return (
		<div className="lg:grid lg:grid-rows-2 flex flex-col items-stretch lg:gap-11 gap-10 pb-11 ">
			<ImgTextCol imgURL={about1Img} textSide="right">
				<TiTleTextStory
					title="Our Story"
					body={
						<>
							Established in 2014, Bluetech Consulting is a UK based consulting
							firm that helps learners from all walks of life, transform their
							careers. <br />
							<br />
							We offer hands-on training with real project delivery work on
							Agile Business Analysis, Scrum Master, Data Analysis or a KYC
							Analysis. <br />
							<br />
							Our promise is to equip you with the skill, tools, knowledge and
							experience required to get you prepared the job market.
						</>
					}
				/>
			</ImgTextCol>
			<ImgTextCol imgURL={about2Img} textSide="right">
				<TiTleTextStory
					title="Our Vision & Mission statements"
					body={
						<div>
							Mission Statement: <br />
							"To empower individuals and organizations with the knowledge and
							skills needed to excel in the rapidly evolving field of tech,
							through innovative and accessible training solutions". <br />
							<br />
							Vision Statement: <br />
							"To be the leading provider of IT training, recognized for our
							commitment to delivering high-quality, up-to-date, and practical
							education that equips individuals and businesses with the tools to
							thrive in the digital age. We aspire to create a global community
							of proficient IT professionals, driving technological innovation
							and transformation across industries”.
						</div>
					}
				/>
			</ImgTextCol>
		</div>
	);
};
