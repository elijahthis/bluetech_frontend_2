"use client";
import TitleBanner from "@/components/TitleBanner";
import { ContactForm, ContactSuccess, SideText } from "@/pageParts/contact-us";
import { useState } from "react";

const ContactUs = () => {
	const [done, setDone] = useState(false);
	return (
		<main className="">
			<TitleBanner
				title="Contact Us"
				navList={[{ label: "Contact Us", link: "/contact-us" }]}
			/>
			{!done ? (
				<div className="lg:grid lg:grid-cols-2 flex flex-col items-stretch lg:gap-[206px] gap-10 lg:px-[104px] px-4 pb-10 lg:pt-[70px] pt-10  ">
					<SideText />
					<ContactForm setDone={(val: boolean) => setDone(val)} />
				</div>
			) : (
				<div className="py-20 lg:px-[19.58vw] ">
					<ContactSuccess />
				</div>
			)}
		</main>
	);
};

export default ContactUs;
