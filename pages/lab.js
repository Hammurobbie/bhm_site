import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.scss";

export default function Lab() {
  return (
    <Layout>
      <Head>
        <title>Lab</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h1>Lab</h1>
      </section>
    </Layout>
  );
}
