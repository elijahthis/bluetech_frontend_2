"use client";
import { useRef, useState } from "react";
import useOutsideAlerter from "../../hooks/useOutsideAlerter";
import Button from "../Button";

interface ButtonDropdownProps {
	label: string;
	optionList: { label: { title: string; desc?: string }; action: () => void }[];
	disabled?: boolean;
	ind?: number; // allows us to use multiple instances without glitching
	// openAction?: () => void;
}

const ButtonDropdown = ({
	label,
	optionList,
	disabled = false,
	ind = 0,
}: // openAction,
ButtonDropdownProps) => {
	const [open, setOpen] = useState(false);

	const wrapperRef = useRef<HTMLDivElement>(null);

	useOutsideAlerter(wrapperRef, () => {
		setOpen(false);
	});

	return (
		<div className="relative" ref={wrapperRef}>
			<Button
				className={`ButtonDropdown__button ButtonDropdown__button--${
					disabled ? "cursor-not-allowed" : "cursor-pointer"
				}`}
				onClick={() => {
					if (!disabled) setOpen((isOpen) => !isOpen);
				}}
			>
				{label}
			</Button>
			<div
				className={` overflow-hidden font-medium rounded-[6px] p-[5px] bg-white absolute  left-0 w-max z-10 transition-all duration-300 shadow-md ButtonDropdown__drop--${
					open
						? "h-max min-w-[220px] top-[calc(100% + 7px)] opacity-1 "
						: "h-0 top-[95%] opacity-0"
				}`}
			>
				{optionList.map((item, ind) => (
					<div
						className="p-2 transition-all duration-300 flex flex-col items-stretch gap-1 bg-white text-[#051c2c] cursor-pointer hover:bg-[#051c2c] hover:text-white "
						onClick={() => {
							item.action();
							setOpen(false);
						}}
						key={ind}
					>
						<p className="ButtonDropdown__drop__item__title">
							{item.label.title}
						</p>
						{item.label?.desc && (
							<p className="ButtonDropdown__drop__item__desc">
								{item.label.desc}
							</p>
						)}
					</div>
				))}
			</div>
		</div>
	);
};

export default ButtonDropdown;
