import Head from "next/head";
import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.scss";

export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>Contact</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Contact</p>
      </section>
    </Layout>
  );
}
