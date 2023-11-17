import Link from "next/link";
import { Fragment } from "react";

const SmallNav = ({
	navList,
}: {
	navList: { label: string; link: string }[];
}) => {
	return (
		<div className="grid place-items-center absolute w-full bottom-[-27px] ">
			<div
				className="rounded bg-white w-max px-4 lg:px-6 py-3 lg:py-4 flex flex-row items-center gap-[10px] lg:gap-4 text:sm lg:text-[18px] leading-[24px] font-bold text-[#696969] "
				style={{ boxShadow: "0px 4px 10px 0px rgba(0, 0, 0, 0.19)" }}
			>
				<Link href="/" className="text-[#696969]">
					Home
				</Link>
				<span>|</span>
				{navList.map((navTo, index) => (
					<Fragment key={index}>
						<Link
							href={navTo.link}
							className={`${
								index === navList.length - 1 ? "text-[#051C2C]" : ""
							}`}
						>
							{navTo.label}
						</Link>
						{index < navList.length - 1 && <span>|</span>}
					</Fragment>
				))}
			</div>
		</div>
	);
};

export default SmallNav;
