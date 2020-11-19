import Head from "next/head";
import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.scss";

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h1>About</h1>
      </section>
    </Layout>
  );
}
