import Button from "@/components/Button";
import { FiFrown } from "react-icons/fi";
import { BsArrowLeftCircle } from "react-icons/bs";
import Link from "next/link";

const NotFound = () => {
	return (
		<main className="h-[calc(100vh-72px)] lg:h-[calc(100vh-100px)] flex flex-col items-center py-4 pt-28 px-4 text-center ">
			<FiFrown size={120} />
			<h1 className="text-[40px] mt-8 mb-3">Oops!</h1>
			<p className="mb-5 text-[#BABABA] font-medium ">
				Sorry, the page you requested could not be found
			</p>
			<Link href="/">
				<Button>
					<div className="flex flex-row items-center gap-4 ">
						<BsArrowLeftCircle />
						Back to Homepage
					</div>
				</Button>
			</Link>
		</main>
	);
};

export default NotFound;
