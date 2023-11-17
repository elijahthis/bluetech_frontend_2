"use client";
import { CSSProperties, MouseEvent } from "react";
import { BiLoaderAlt } from "react-icons/bi";

interface ButtonProps {
	children: string | JSX.Element;
	className?: string;
	onClick?: () => void;
	loading?: boolean;
	disabled?: boolean;
	type?: "button" | "submit" | "reset" | undefined;
	style?: CSSProperties;
}

const Button = ({
	children,
	className = "",
	onClick,
	loading = false,
	disabled = false,
	type = "button",
	style,
}: ButtonProps) => {
	return (
		<button
			className={`lg:rounded-2xl rounded-lg bg-[#051C2C] text-white w-max lg:px-10 px-6 lg:py-6 py-4 text-base flex justify-center items-center `}
			onClick={(e: MouseEvent<HTMLButtonElement>) => {
				if (disabled) e.preventDefault();
				else if (!loading) onClick && onClick();
			}}
			type={type}
			disabled={disabled}
			style={style}
		>
			{loading ? <BiLoaderAlt className="btn-loader" /> : children}
		</button>
	);
};

export default Button;
