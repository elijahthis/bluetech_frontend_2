import TitleBanner from "@/components/TitleBanner";
import ConsultingList from "@/pageParts/consultation/ConsultingList";

const Consulting = () => {
	return (
		<main>
			<TitleBanner
				title="Consulting"
				navList={[{ label: "Consulting", link: "/consulting" }]}
			/>
			<ConsultingList />
		</main>
	);
};

export default Consulting;
