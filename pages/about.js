import Head from "next/head";
import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.scss";

export default function About() {
  return (
    <Layout>
      <Head>
        <title>BH&M | About</title>
      </Head>
      <div className={utilStyles.headerBottomBorder} />
      <section>
        <h1 className={utilStyles.headingMd}>About</h1>
      </section>
    </Layout>
  );
}
