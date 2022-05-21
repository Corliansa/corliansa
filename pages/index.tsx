import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Card from "../components/RepoCard";
import TechCard from "../components/TechCard";
import { Linkedin, GitHub, Mail } from "react-feather";

type Repo = {
	name: string;
	description: string;
	fork: boolean;
	language: string;
	license: { spdx_id: string };
	pushed_at: string;
};

type HomeProps = {
	data: Repo[];
};

type Tech = {
	name: string;
	description?: string;
	image?: string;
	url?: string;
};

const Home: NextPage<HomeProps> = ({ data }) => {
	return (
		<div className={styles.container}>
			<Head>
				<title>Corliansa Kusumah | Portfolio</title>
				<meta
					name="description"
					content="Corliansa Kusumah's Portfolio Website"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={styles.main}>
				<h1 className={styles.title}>Corliansa Kusumah</h1>

				<p className={styles.description}>
					Student at TU Berlin | Full Stack Developer
				</p>

				<div>
					<a
						href="https://www.linkedin.com/in/corliansa/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Linkedin />
					</a>{" "}
					<a
						href="https://github.com/Corliansa"
						target="_blank"
						rel="noopener noreferrer"
					>
						<GitHub />
					</a>{" "}
					<a href="mailto:corliansa@icloud.com">
						<Mail />
					</a>
				</div>
			</main>
			<hr />
			<main className={styles.main}>
				<h1 className={styles.title}>Tech Stack</h1>
				<div className={styles.stacks}>
					{[
						{ name: "React Native" },
						{ name: "React" },
						{ name: "Next.js" },
						{ name: "TypeScript" },
						{ name: "Node.js" },
						{ name: "Express" },
						{ name: "MongoDB" },
					].map((tech: Tech) => (
						<TechCard key={tech.name} data={tech} />
					))}
				</div>
			</main>
			<hr />
			<main className={styles.main}>
				<h1 className={styles.title}>Projects</h1>

				<div className={styles.projects}>
					{[
						{
							name: "SikeCoin App",
							description:
								"React Native | Typescript | Express\
								- Deprecated, use SikeTracker instead.",
							url: "https://play.google.com/store/apps/details?id=com.sikecoin.SikeApp&hl=en_US&gl=US",
						},
						{
							name: "SikeTracker",
							description:
								"React Native | Typescript | Serverless\
							- A mobile app to track your BSC cryptocurrencies investment.",
							url: "https://expo.dev/@corliansa/SikeTracker",
						},
						{
							name: "Simplifinance",
							description:
								"React Native | Typescript\
						- A simple mobile budget tracker app.",
							url: "https://apps.apple.com/in/app/simplifinance/id1612985627",
						},
						{
							name: "Simplinotes",
							description:
								"React | Vite | Electron\
						- A simple note taking app powered by Markdown and KaTeX",
							url: "https://dl.corliansa.xyz/Simplinotes/",
						},
					].map((tech: Tech) => (
						<TechCard key={tech.name} data={tech} />
					))}
				</div>
			</main>
			<hr />
			<main className={styles.main}>
				<h1 className={styles.title}>Repos</h1>

				<div className={styles.repos}>
					{data?.map((repo: Repo) => (
						<Card key={repo.name} data={repo} />
					))}
				</div>
			</main>
		</div>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const response = await fetch("https://api.github.com/users/corliansa/repos");
	const data = await response.json();
	return {
		props: {
			data,
		},
		revalidate: 86400,
	};
};

export default Home;
