"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiMenuAlt3 } from "react-icons/hi";
import Sidebar from "../Sidebar";
import { useState } from "react";
import { navList } from "@/data/constants";
import Image from "next/image";

const Header = () => {
	const pathname = usePathname();

	const [isOpen, setIsOpen] = useState(false);

	return (
		<header className="fixed top-0 w-full bg-white flex flex-row items-center lg:justify-center justify-between lg:px-8 px-4 lg:py-[38px] py-4 z-30 ">
			<Link href="/" className="lg:absolute left-8 top-[14px] h-10 lg:h-[65px]">
				<Image
					src="/images/logo.jpg"
					width={70}
					height={70}
					alt="logo"
					className="h-full w-auto"
				/>
			</Link>
			<nav className="hidden lg:block">
				<ul className="flex flex-row items-center gap-9 ">
					{navList.map((navItem, ind) => (
						<li
							key={ind}
							className={`${
								(pathname.startsWith(navItem.url) && navItem.url !== "/") ||
								(pathname === "/" && navItem.url === "/")
									? "text-[#051C2C] underline font-bold "
									: "text-[#8A8A8A] font-medium"
							} `}
							style={{
								textUnderlineOffset: "0.5rem",
								textDecorationThickness: "2px",
							}}
						>
							<Link href={navItem.url}>{navItem.name}</Link>
						</li>
					))}
				</ul>
			</nav>
			<HiMenuAlt3
				className="lg:hidden block cursor-pointer"
				size={32}
				onClick={() => setIsOpen(true)}
			/>
			<Sidebar isOpen={isOpen} toggleSidebar={() => setIsOpen((val) => !val)} />
		</header>
	);
};

export default Header;
