import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Simplifinance.module.css";

const Impressum: NextPage = () => {
	return (
		<div className={styles.container}>
			<Head>
				<title>Impressum</title>
				<meta name="description" content="Simplifinance Terms & Conditions" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>
					<Link href="/">{"◀ "}</Link>Impressum
				</h1>

				<h2 className={styles.subtitle}>
					Angaben gem&auml;&szlig; &sect; 5 TMG
				</h2>
				<p>
					Muhammad Corliansa Kusumah
					<br />
					Quartiersweg 6<br />
					10829 Berlin
				</p>

				<h2 className={styles.subtitle}>Kontakt</h2>
				<p>
					Telefon: +49 (0) 17674670823
					<br />
					E-Mail: corliansa+website@icloud.com
				</p>
			</main>
		</div>
	);
};

export default Impressum;
