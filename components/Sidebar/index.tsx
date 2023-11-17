import { navList } from "@/data/constants";
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

interface SidebarProps {
	isOpen: boolean;
	toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
	const pathname = usePathname();

	return (
		<aside
			className={` fixed ${
				isOpen ? "right-0" : "right-[-100%]"
			} top-0 w-full  bg-white h-screen transition-all duration-300 ease-in-out z-50 px-4 py-8`}
		>
			<div className="flex flex-row items-center justify-between">
				<Link href="/" className="h-10 " onClick={toggleSidebar}>
					<Image src="/images/logo.jpg" width={70} height={70} alt="logo" />
				</Link>
				<button onClick={toggleSidebar} className="ml-auto">
					<AiOutlineClose size={32} />
				</button>
			</div>

			<ul className="flex flex-col items-stretch mt-10 text-2xl ">
				{navList.map((navItem, ind) => (
					<li
						key={ind}
						className={`${
							(pathname.startsWith(navItem.url) && navItem.url !== "/") ||
							(pathname === "/" && navItem.url === "/")
								? "text-[#051C2C] font-bold "
								: "text-[#8A8A8A] font-medium"
						} border-b  `}
						style={{
							textUnderlineOffset: "0.5rem",
							textDecorationThickness: "2px",
						}}
					>
						<Link
							href={navItem.url}
							onClick={toggleSidebar}
							className="block w-full py-4"
						>
							{navItem.name}
						</Link>
					</li>
				))}
			</ul>
		</aside>
	);
};

export default Sidebar;
