"use client";
import Loading from "@/app/loading";
import LoadingComponent from "@/components/Loading";
import StatusCard from "@/components/StatusCard";
import { consultTimeList, courseMap } from "@/data/constants";
import { sendConsultingEmail, sendCourseEmail } from "@/requests/emails";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const SuccessPage = () => {
	const router = useRouter();
	const searchParams = useSearchParams();

	const [loading, setLoading] = useState(false);

	const sendEmail = async () => {
		setLoading(true);
		try {
			const res = await sendConsultingEmail({
				eventDate: searchParams.get("start_time")!?.split("T")[0],
				startTime: searchParams.get("start_time")!?.split("T")[1],
				endTime: searchParams.get("end_time")!?.split("T")[1],
				duration: consultTimeList[searchParams.get("consultKey")!]?.full,
			});
		} catch (error) {
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		// sendEmail();
	}, []);

	return (
		<main className="bg-[#F0F9FF] py-16 px-0 pt-[77px] lg:px-[19.58vw] ">
			{loading ? (
				<LoadingComponent size={"80px"} />
			) : (
				<StatusCard
					title="Booking Successful"
					buttonText="Continue"
					buttonAction={() => {
						router.push("/consulting");
					}}
					success={true}
				>
					<p>
						You have successfully registered for a consulting session. You will
						receive a confirmation email to that effect shortly. In the
						meantime, you may contact us at{" "}
						<a
							href="mailto:info@bluetechconsulting.uk"
							target="_blank"
							className="font-medium"
						>
							info@bluetechconsulting.uk
						</a>{" "}
						for any further enquiries.
					</p>
				</StatusCard>
			)}
		</main>
	);
};

export default SuccessPage;
