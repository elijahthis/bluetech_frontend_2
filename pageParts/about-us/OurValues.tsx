import ImgTextCol, {
	NumberedItem,
	TiTleTextStory,
} from "@/components/ImgTextCol";
import about3Img from "@/assets/images/about-3.png";

export const OurValues = () => {
	const exceptionalList: string[] = [
		"Hands-on training on real-life projects",
		"Complementary topics around API technology, Cloud computing, Jira and Confluence",
		"Resume writing",
		"Interview preparation",
		"Job referral",
	];

	return (
		<div className="pt-16 mb-16">
			<ImgTextCol imgURL={about3Img} textSide="right">
				<TiTleTextStory
					// smallTitle="Our Values"
					title="What makes us exceptional"
					body={
						<ol className="list-none flex flex-col items-stretch gap-4 text-base ">
							{exceptionalList.map((item, index) => (
								<NumberedItem key={index} index={index + 1} title={item} />
							))}
						</ol>
					}
				/>
			</ImgTextCol>
		</div>
	);
};
