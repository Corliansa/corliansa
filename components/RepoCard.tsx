import styles from "../styles/RepoCard.module.css";
import { GoLaw, GoPrimitiveDot } from "react-icons/go";

export type Repo = {
	name: string;
	description: string;
	language: string;
	license: { spdx_id: string };
	pushed_at: string;
};

type CardProps = {
	data: Repo;
};

const RepoCard: React.FC<CardProps> = ({ data }) => {
	return (
		<div className={styles.card}>
			<h2 className={styles.title}>
				<a
					href={`https://github.com/Corliansa/${data.name}`}
				>{`${data.name} →`}</a>
			</h2>
			<p>{data.description}</p>
			<hr />
			<div className={styles.info}>
				{data.language && (
					<span>
						{" "}
						<GoPrimitiveDot size={12} /> {data.language}{" "}
					</span>
				)}
				{data.license?.spdx_id && (
					<span>
						{" "}
						<GoLaw size={12} /> {data.license?.spdx_id} License{" "}
					</span>
				)}
				{/* <span>
					Updated on{" "}
					{new Date(data.pushed_at).toLocaleDateString("en-UK", {
						dateStyle: "medium",
					})}
				</span> */}
			</div>
		</div>
	);
};

export default RepoCard;
