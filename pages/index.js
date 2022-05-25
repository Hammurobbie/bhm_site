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
          <h1 className={styles.title}>High Quality Service</h1>
          <div>
            <p className={styles.description}>
              with a reputation you can depend on
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
