import styles from "../styles/TechCard.module.css";

export type Tech = {
	name: string;
	description?: string;
	image?: string;
	url?: string;
};

type CardProps = {
	data: Tech;
};

const TechCard: React.FC<CardProps> = ({ data }) => {
	return (
		<div className={styles.card}>
			<h2 className={styles.title}>
				{data.url ? (
					<a href={data.url} target="_blank" rel="noopener noreferrer">
						{data.name}
					</a>
				) : (
					data.name
				)}
			</h2>
			<p>{data.description}</p>
		</div>
	);
};

export default TechCard;
