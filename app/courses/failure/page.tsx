"use client";
import StatusCard from "@/components/StatusCard";
import handleCheckout from "@/lib/getStripe";
import { useRouter, useSearchParams } from "next/navigation";

const FailurePage = () => {
	const searchParams = useSearchParams();
	const router = useRouter();

	return (
		<main className="bg-[#F0F9FF] py-16 px-0 pt-[77px] lg:px-[19.58vw] ">
			<StatusCard
				title="Booking Failed"
				buttonText="Try Again"
				buttonAction={() => {
					//------------- Stripe Checkout -------------
					handleCheckout(
						process.env.NEXT_PUBLIC_STRIPE_PRICE_ID!,
						1,
						searchParams.get("email")!,
						`${
							process.env.NEXT_PUBLIC_BASE_URL
						}/courses/success?courseRef=${searchParams.get(
							"courseRef"
						)}&email=${searchParams.get("email")!}&firstName=${searchParams.get(
							"firstName"
						)!}&lastName=${searchParams.get(
							"lastName"
						)!}&phone=${searchParams.get("phone")!}`,
						`${
							process.env.NEXT_PUBLIC_BASE_URL
						}/courses/failure?courseRef=${searchParams.get(
							"courseRef"
						)}&email=${searchParams.get("email")!}&firstName=${searchParams.get(
							"firstName"
						)!}&lastName=${searchParams.get(
							"lastName"
						)!}&phone=${searchParams.get("phone")!}`
					);
				}}
				success={false}
			>
				<p>
					Your payment could not be processed. Please try again or contact us at{" "}
					<a
						href="mailto:info@bluetechconsulting.uk"
						target="_blank"
						className="font-medium"
					>
						info@bluetechconsulting.uk
					</a>
				</p>
			</StatusCard>
		</main>
	);
};

export default FailurePage;
