"use client";
import Button from "@/components/Button";
import ButtonDropdown from "@/components/ButtonDropdown";
import ImgTextCol, { TiTleTextStory } from "@/components/ImgTextCol";
import { consultingList } from "@/data/constants";
import { useRouter } from "next/navigation";

const ConsultingList = () => {
	const router = useRouter();

	return (
		<div className="flex flex-col items-stretch gap-[91px] pt-[101px] pb-[75px] ">
			<div className="text-center lg:px-[20vw] px-4 flex flex-col items-center">
				<h2 className="mb-5 text-[28px] lg:leading-[24px] leading-[normal] ">
					One-on-one Consulting
				</h2>
				<div className="mb-8">
					<p>
						Today is the best day to launch your career into tech. If you are
						considering our taster session or would like to dive straight into
						any of our course offerings, then you are at the right place. We
						also offer 1-2-1 consulting and support in following areas:
					</p>
					<ul className="my-4">
						<li>- Resume writing,</li>
						<li>- Interview preparation</li>
						<li>- On-the job support</li>
						<li>- Specialist support</li>
					</ul>
				</div>
				<ButtonDropdown
					label="Book Consultation"
					optionList={[
						{
							label: { title: "90 min. session", desc: "" },
							action: () => {
								if (window !== undefined)
									window.open(
										"https://calendly.com/bluetechconsulting/90-mins-consultation-1"
									);
							},
						},
						{
							label: { title: "60 min. session", desc: "" },
							action: () => {
								if (window !== undefined)
									window.open(
										"https://calendly.com/bluetechconsulting/60-mins-consultation"
									);
							},
						},
						{
							label: { title: "30 min. session", desc: "" },
							action: () => {
								if (window !== undefined)
									window.open(
										"https://calendly.com/bluetechconsulting/30-mins-consultation"
									);
							},
						},
					]}
					ind={0}
				/>
			</div>
			<div className="text-center lg:px-[20vw] px-4 flex flex-col items-center">
				<h2 className="mb-5 text-[28px] lg:leading-[24px] leading-[normal] ">
					Digital Transformation Consulting
				</h2>
				<div className="mb-8">
					<p>
						Digital transformation consulting is not a one-size-fits-all
						approach. At Bluetech Consulting, we tailor our engagement and
						offerings to the specific needs and goals of our clients. The aim is
						to use digital technologies to drive efficiency, competitiveness,
						and growth in the rapidly evolving business landscape. We involves
						the strategic use of technology and digital tools to enhance
						business processes, improve customer experiences, and drive
						innovation.
					</p>
				</div>
				<ButtonDropdown
					label="Book Consultation"
					optionList={[
						{
							label: { title: "90 min. session", desc: "" },
							action: () => {
								if (window !== undefined)
									window.open(
										"https://calendly.com/bluetechconsulting/90-mins-consultation-1",
										"_blank"
									);
							},
						},
						{
							label: { title: "60 min. session", desc: "" },
							action: () => {
								if (window !== undefined)
									window.open(
										"https://calendly.com/bluetechconsulting/60-mins-consultation",
										"_blank"
									);
							},
						},
						{
							label: { title: "30 min. session", desc: "" },
							action: () => {
								if (window !== undefined)
									window.open(
										"https://calendly.com/bluetechconsulting/30-mins-consultation",
										"_blank"
									);
							},
						},
					]}
					ind={0}
				/>
			</div>

			{/* <ImgTextCol
				imgURL="https://loremflickr.com/594/443?random=1"
				textSide="right"
			>
				<TiTleTextStory
					title="One-on-one Consultation"
					body={
						<div className="mt-[-10px] text-[18px] mb-[25px]">
							Today is the best day to launch your career into tech. If you are
							considering our taster session or would like to dive straight into
							our business analyst, scrum master or product owner training, then
							contact us now.
						</div>
					}
				/>
				<ButtonDropdown
					label="Book Consultation"
					optionList={[
						{
							label: { title: "90 min. session", desc: "" },
							action: () => {
								if (window !== undefined)
									window.open(
										"https://calendly.com/bluetechconsulting/90-mins-consultation-1",
										"_blank"
									);
							},
						},
						{
							label: { title: "60 min. session", desc: "" },
							action: () => {
								if (window !== undefined)
									window.open(
										"https://calendly.com/bluetechconsulting/60-mins-consultation",
										"_blank"
									);
							},
						},
						{
							label: { title: "30 min. session", desc: "" },
							action: () => {
								if (window !== undefined)
									window.open(
										"https://calendly.com/bluetechconsulting/30-mins-consultation",
										"_blank"
									);
							},
						},
					]}
					ind={0}
				/>
			</ImgTextCol> */}
			{/* <ImgTextCol
				imgURL="https://loremflickr.com/594/443?random=5"
				textSide="left"
			>
				<TiTleTextStory
					title="Digital Transformation Consulting"
					body={
						<div className="mt-[-10px] text-[18px] mb-[25px]">
							Today is the best day to launch your career into tech. If you are
							considering our taster session or would like to dive straight into
							our business analyst, scrum master or product owner training, then
							contact us now. <br />
							Today is the best day to launch your career into tech. If you are
							considering our taster session or would like to dive straight into
							our business analyst, scrum master or product owner training, then
							contact us now.Today is the best day to launch your career into
							tech. If you are considering our taster session or would like to
							dive straight into our business analyst, scrum master or product
							owner training, then contact us now.Today is the best day to
							launch your career into tech. If you are considering our taster
							session or would like to dive straight into our business analyst,
							scrum master or product owner training, then contact us now.
						</div>
					}
				/>
				<Button>Book Consultation</Button>
			</ImgTextCol> */}
		</div>
	);
};

export default ConsultingList;
