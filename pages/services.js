import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.scss";

export default function Services() {
  return (
    <Layout>
      <Head>
        <title>Services</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h1>Services</h1>
      </section>
    </Layout>
  );
}
