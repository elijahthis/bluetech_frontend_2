import SmallNav from "../SmallNav";
import styles from "./styles.module.css";

interface TitleBannerProps {
	title: string;
	navList: { label: string; link: string }[];
}

const TitleBanner = ({ title, navList }: TitleBannerProps) => {
	return (
		<section className={`h-[186px] pt-16 relative ${styles.TitleBanner} `}>
			<h1 className="text-center">{title}</h1>
			<SmallNav navList={navList} />
		</section>
	);
};

export default TitleBanner;
