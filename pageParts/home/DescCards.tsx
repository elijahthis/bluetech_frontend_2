import BlueCard from "@/components/BlueCard";

export const DescCards = () => {
	return (
		<section
			className="grid grid-cols-3 gap-6 px-4 lg:px-[93px] py-8 pb-10 lg:py-10 lg:pb-[72px] "
			style={{ gridTemplateColumns: "repeat(auto-fit, minmax(328px, 1fr))" }}
		>
			<BlueCard title="Who we are">
				<>
					At Bluetech Consulting, we are more than just a training and
					consulting outfit; we are your trusted partner on the journey to
					mastering the world class, highly demanded skill. <br />
					<br />
					With a passion for education and a commitment to excellence, we
					empower individuals and organizations to thrive in the ever evolving
					digital landscape.
				</>
			</BlueCard>
			<BlueCard title="What we do">
				<>
					We provide requisite hand-on experience and up-skilling solutions to
					individuals and organisations. <br />
					<br />
					Serving a fast-changing world, we ensure innovation is at the heart of
					everything we do; resulting in programmes that are engaging,
					effective, accessible and affordable.
				</>
			</BlueCard>
			<BlueCard title="Our Commitment">
				<>
					Our commitment goes beyond delivering top-notch hand-on training. We
					are committed to standing by you side-by-side throughout the journey.{" "}
					<br />
					<br />
					We would support you through the interviewing process and even you
					secure your first job, until such time you are able to firmly stand on
					both feet.
				</>
			</BlueCard>
		</section>
	);
};
