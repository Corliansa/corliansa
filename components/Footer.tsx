import Link from "next/link";
import styles from "../styles/Footer.module.css";

const Card: React.FC = () => {
	return (
		<footer className={styles.footer}>
			<Link href="/">
				{`Copyright © ${new Date().getFullYear()} Corliansa Kusumah`}
			</Link>
			<Link href="/impressum">
				<a className={styles.link}>Impressum</a>
			</Link>
			<Link href="/privacy">Privacy Policy</Link>
		</footer>
	);
};

export default Card;
