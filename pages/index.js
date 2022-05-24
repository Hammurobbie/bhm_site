import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";
import styles from "../styles/utils.module.scss";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.homeDiv}>
        <div className={styles.heroImage}>
          <h1 className={styles.title}>Welcome to BH&M</h1>
          <p className={styles.description}>We'll fuck your bitch</p>
        </div>
      </div>
    </Layout>
  );
}
