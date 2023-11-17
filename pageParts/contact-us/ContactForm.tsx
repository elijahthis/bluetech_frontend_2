"use client";
import Button from "@/components/Button";
import InputComponent from "@/components/InputComponent";
import PhoneInputComponent from "@/components/PhoneInputComponent";
import { sendContactEmail } from "@/requests/emails";
import { FormEvent, useState } from "react";

export const ContactForm = ({
	setDone,
}: {
	setDone: (val: boolean) => void;
}) => {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		phone: "",
		email: "",
		subject: "",
		comment: "",
	});
	const [loading, setLoading] = useState(false);

	const submitForm = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log("formData", formData);

		setLoading(true);

		try {
			const res = await sendContactEmail(formData);
			console.log("res", res);

			if (res?.status === 200) {
				setDone(true);
			}
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	};

	return (
		<form
			className="flex flex-col gap-4 items-stretch"
			action=""
			onSubmit={submitForm}
		>
			<div className="lg:grid lg:grid-cols-2 flex flex-col items-stretch gap-4">
				<InputComponent
					label="First name"
					placeholder="Enter First name"
					name="firstName"
					type="text"
					required={true}
					value={formData.firstName}
					onChange={(e) =>
						setFormData({
							...formData,
							firstName: e.target.value,
						})
					}
				/>
				<InputComponent
					label="Last name"
					placeholder="Enter Last name"
					name="lastName"
					type="text"
					required={true}
					value={formData.lastName}
					onChange={(e) =>
						setFormData({
							...formData,
							lastName: e.target.value,
						})
					}
				/>
			</div>
			{/* <InputComponent
				label="Phone"
				placeholder="Enter Phone"
				name="phone"
				type="tel"
				required={true}
				onChange={(e) =>
					setFormData({
						...formData,
						phone: e.target.value,
					})
				}
			/> */}
			<PhoneInputComponent
				label="Phone"
				required={true}
				value={formData.phone}
				onChange={(val) =>
					setFormData({
						...formData,
						phone: val?.toString()!,
					})
				}
			/>
			<InputComponent
				label="Email address"
				placeholder="Email address"
				name="email"
				type="email"
				required={true}
				value={formData.email}
				onChange={(e) =>
					setFormData({
						...formData,
						email: e.target.value,
					})
				}
			/>
			<InputComponent
				label="Subject"
				placeholder="Enter Subject"
				name="subject"
				type="text"
				value={formData.subject}
				onChange={(e) =>
					setFormData({
						...formData,
						subject: e.target.value,
					})
				}
			/>
			<InputComponent
				label="Comment"
				placeholder="Enter comment description"
				name="comment"
				type="textarea"
				required={true}
				value={formData.comment}
				onChange={(e) =>
					setFormData({
						...formData,
						comment: e.target.value,
					})
				}
			/>
			<Button type="submit" onClick={() => {}} loading={loading}>
				Submit Feedback
			</Button>
			{/* <p onClick={() => sendContactEmail()}>lalalalal</p> */}
		</form>
	);
};
