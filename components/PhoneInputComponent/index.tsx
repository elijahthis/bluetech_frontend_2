import { useState } from "react";
import PhoneInput from "react-phone-number-input";
import { E164Number } from "libphonenumber-js";
import "react-phone-number-input/style.css";

interface PhoneInputComponentProps {
	label: string;
	showLabel?: boolean;
	value: E164Number | undefined;
	onChange: (val: E164Number | undefined) => void;
	required?: boolean;
}

const PhoneInputComponent = ({
	label,
	showLabel = true,
	value,
	onChange,
	required = false,
}: PhoneInputComponentProps) => {
	return (
		<label
			htmlFor=""
			className="flex flex-col items-stretch gap-2 text-[051C2C] font-medium "
		>
			{showLabel ? label : ""}
			<div className="flex flex-col items-stretch gap-2 text-[051C2C] font-medium  font-medium py-4 px-6 rounded border border-[#CCC] focus:outline-none">
				<PhoneInput
					placeholder="Enter phone number"
					value={value}
					onChange={onChange}
					required={required}
				/>
			</div>
		</label>
	);
};

export default PhoneInputComponent;
