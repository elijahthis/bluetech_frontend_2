"use client";
import Button from "@/components/Button";
import InputComponent from "@/components/InputComponent";
import PhoneInputComponent from "@/components/PhoneInputComponent";
import RadioComponent from "@/components/RadioComponent";
import { BankIcon, CardIcon, PaypalIcon } from "@/components/svgs";
import { IUserDetails } from "@/data/types";
import handleCheckout from "@/lib/getStripe";
import { useRouter, useSearchParams } from "next/navigation";
import { Dispatch, SetStateAction, useState } from "react";

interface PersonalInfoProps {
	currentStep: number;
	setCurrentStep: Dispatch<SetStateAction<number>>;
	userDetails: IUserDetails;
	setUserDetails: React.Dispatch<React.SetStateAction<IUserDetails>>;
}

export const PersonalInfo = ({
	currentStep,
	setCurrentStep,
	userDetails,
	setUserDetails,
}: PersonalInfoProps) => {
	const searchParams = useSearchParams();

	const [loading, setLoading] = useState(false);

	const priceIdMap = new Map<string, string>([
		["business-analysis", process.env.NEXT_PUBLIC_BUSINESS_ANALYSIS_PRICE_ID!],
		["scrum-mastering", process.env.NEXT_PUBLIC_SCRUM_MASTERING_PRICE_ID!],
		["product-ownership", process.env.NEXT_PUBLIC_PRODUCT_OWNERSHIP_PRICE_ID!],
		["data-analysis", process.env.NEXT_PUBLIC_DATA_ANALYSIS_PRICE_ID!],
	]);

	return (
		<form
			action=""
			className="flex flex-col gap-6 items-stretch"
			onSubmit={async (e: React.FormEvent<HTMLFormElement>) => {
				e.preventDefault();

				console.log(userDetails);

				//------------- Stripe Checkout -------------
				setLoading(true);
				try {
					await handleCheckout(
						priceIdMap.get(searchParams.get("courseRef")!)!,
						1,
						userDetails.email,
						`${
							process.env.NEXT_PUBLIC_BASE_URL
						}/courses/success?courseRef=${searchParams.get(
							"courseRef"
						)}&email=${userDetails.email}&firstName=${
							userDetails.firstName
						}&lastName=${userDetails.lastName}&phone=${userDetails.phone}`,
						`${
							process.env.NEXT_PUBLIC_BASE_URL
						}/courses/failure?courseRef=${searchParams.get(
							"courseRef"
						)}&email=${userDetails.email}&firstName=${
							userDetails.firstName
						}&lastName=${userDetails.lastName}&phone=${userDetails.phone}`
					);
				} catch (error) {
				} finally {
					setLoading(false);
				}
			}}
		>
			<div className="lg:grid lg:grid-cols-2 flex flex-col items-stretch gap-4">
				<InputComponent
					label="First name"
					placeholder="Enter First name"
					name="firstName"
					type="text"
					showLabel={false}
					required={true}
					value={userDetails.firstName}
					onChange={(e) =>
						setUserDetails({
							...userDetails,
							firstName: e.target.value,
						})
					}
				/>
				<InputComponent
					label="Last name"
					placeholder="Enter Last name"
					name="lastName"
					type="text"
					showLabel={false}
					required={true}
					value={userDetails.lastName}
					onChange={(e) =>
						setUserDetails({
							...userDetails,
							lastName: e.target.value,
						})
					}
				/>
			</div>
			<InputComponent
				label="Email address"
				placeholder="Email address"
				name="email"
				type="email"
				showLabel={false}
				required={true}
				value={userDetails.email}
				onChange={(e) =>
					setUserDetails({
						...userDetails,
						email: e.target.value,
					})
				}
			/>
			{/* <InputComponent
				label="Phone"
				placeholder="Enter Phone"
				name="phone"
				type="tel"
				showLabel={false}
				required={true}
				value={userDetails.phone}
				onChange={(e) =>
					setUserDetails({
						...userDetails,
						phone: e.target.value,
					})
				}
			/> */}
			<PhoneInputComponent
				label="Phone"
				showLabel={false}
				required={true}
				value={userDetails.phone}
				onChange={(val) =>
					setUserDetails({
						...userDetails,
						phone: val?.toString()!,
					})
				}
			/>
			<Button
				type="submit"
				onClick={() => {}}
				style={{ width: "100%", marginTop: "8px" }}
				loading={loading}
			>
				Proceed to Payment
			</Button>
		</form>
	);
};

export const PaymentMethod = ({
	currentStep,
	setCurrentStep,
}: PersonalInfoProps) => {
	const paymentMethods: { label: string | JSX.Element; value: string }[] = [
		{
			label: (
				<div className="flex flex-row items-center gap-2">
					<CardIcon />
					<p>Pay with Bank Card</p>
				</div>
			),
			value: "bank_card",
		},
		{
			label: (
				<div className="flex flex-row items-center gap-2">
					<PaypalIcon />
					<p>Pay with Paypal</p>
				</div>
			),
			value: "paypal",
		},
		{
			label: (
				<div className="flex flex-row items-center gap-2">
					<BankIcon />
					<p>Pay with Internet banking</p>
				</div>
			),
			value: "internet_banking",
		},
	];
	return (
		<form
			className="flex flex-col items-stretch gap-6"
			onSubmit={(e) => {
				e.preventDefault();
				setCurrentStep(currentStep + 1);
			}}
		>
			{paymentMethods.map((item, ind) => (
				<RadioComponent label={item.label} value={item.value} key={ind} />
			))}
			<Button
				type="submit"
				onClick={() => {}}
				style={{ width: "100%", marginTop: "1rem" }}
			>
				Proceed to Payment
			</Button>
		</form>
	);
};

export const PaymentDetails = ({
	currentStep,
	setCurrentStep,
}: PersonalInfoProps) => {
	const router = useRouter();

	return (
		<form
			action=""
			className="flex flex-col gap-6 items-stretch"
			onSubmit={(e) => {
				e.preventDefault();
				// setCurrentStep(currentStep + 1);
			}}
		>
			<InputComponent
				label="Card holder name"
				placeholder="Card holder name"
				name="card_holder_name"
				type="text"
				showLabel={false}
			/>
			<InputComponent
				label="Card number"
				placeholder="Card number"
				name="card_number"
				type="text"
				showLabel={false}
			/>
			<div className="lg:grid lg:grid-cols-2 flex flex-col items-stretch gap-4">
				<InputComponent
					label="Expiry date"
					placeholder="Expiry date"
					name="expiry_date"
					type="text"
					showLabel={false}
				/>
				<InputComponent
					label="CCV"
					placeholder="CCV"
					name="ccv"
					type="text"
					showLabel={false}
				/>
			</div>
			<Button
				type="submit"
				onClick={() => {
					router.push("/courses/successful");
				}}
				style={{ width: "100%", marginTop: "8px" }}
			>
				Proceed to Payment
			</Button>
		</form>
	);
};
