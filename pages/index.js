import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import styles from "../styles/utils.module.scss";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to BH&M!</h1>
      </main>
    </Layout>
  );
}
