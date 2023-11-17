import Link from "next/link";
import {
	FacebookIcon,
	InstagramIcon,
	LinkedInIcon,
	TwitterIcon,
} from "../svgs";
import Image from "next/image";

const Footer = () => {
	const linkList: { label: string; link: string }[] = [
		{ label: "Home", link: "/" },
		{ label: "About us", link: "/about-us" },
		{ label: "Contact us", link: "/contact-us" },
		{ label: "Courses", link: "/courses" },
		{ label: "Consulting", link: "/consulting" },
	];

	const availabilitylist: { date: string; time: string }[] = [
		{ date: "Mon - Fri", time: "8:00am - 6:00pm" },
		{ date: "Sat", time: "10:00am - 4:00pm" },
		{ date: "Sunday", time: "Closed" },
	];

	const socialList: { icon: JSX.Element; link: string }[] = [
		{ icon: <FacebookIcon />, link: "/" },
		{ icon: <TwitterIcon />, link: "/" },
		{ icon: <InstagramIcon />, link: "/" },
		{ icon: <LinkedInIcon />, link: "/" },
	];

	return (
		<footer className="bg-[#051C2C] text-[#CCC] ">
			<section className="border-b border-[#B5B5B5] lg:px-[52px] px-4 lg:pt-16 pt-10 pb-[75px] flex lg:flex-row flex-col items-start justify-between lg:gap-2 gap-12 ">
				<div>
					<Image
						src="/images/logo.jpg"
						width={56}
						height={56}
						alt="logo"
						className=" mb-6"
					/>
					<div className="mb-4">
						33 Riversdale <br />
						Northfleet, Gravesend <br />
						United Kingdom, DA11 8SP
					</div>
					<div className="flex flex-row items-center gap-4">
						{socialList.map((socialItem, ind) => (
							<Link href={socialItem.link} key={ind}>
								{socialItem.icon}
							</Link>
						))}
					</div>
				</div>
				<div className="flex lg:flex-row flex-col items-start lg:gap-24 gap-8 ">
					<div>
						<h3 className="text-white mb-4">Pages</h3>
						<ul className="flex flex-col items-start gap-2 ">
							{linkList.map((linkItem, ind) => (
								<li key={ind}>
									<Link href={linkItem.link}>{linkItem.label}</Link>
								</li>
							))}
						</ul>
					</div>
					<div>
						<h3 className="text-white mb-4">Services</h3>
						<ul className="flex flex-col items-start gap-2 ">
							{availabilitylist.map((item, ind) => (
								<li
									key={ind}
									className="grid gap-3"
									style={{ gridTemplateColumns: "120px 1fr" }}
								>
									<span>{item.date}</span>
									<span>{item.time}</span>
								</li>
							))}
						</ul>
					</div>
					<div>
						<h3 className="text-white mb-4">Contact Info</h3>
						<ul className="flex flex-col items-start gap-2 ">
							<li>+447792929550</li>
							<li>info@bluetechconsulting.uk</li>
						</ul>
					</div>
				</div>
			</section>
			<section className="p-3 text-[18px] leading-[24px] text-center ">
				© 2023 Bluetech Consulting
			</section>
		</footer>
	);
};

export default Footer;
