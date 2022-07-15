import Head from "next/head";
import Layout from "../components/layout";
import ContactForm from "../components/ContactForm";
import utilStyles from "../styles/utils.module.scss";

export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>BH&M | Contact</title>
      </Head>
      <div className={utilStyles.headerBottomBorder} />
      <section className={utilStyles.contact}>
        <h3>Contact Us</h3>
        <div className={utilStyles.aboutInner}>
          <div className={utilStyles.contactLeft}>
            <p className={utilStyles.contactRedP}>Telephone</p>
            <p>Tel: 123-456-7890</p>
            <p>Fax: 123-456-7890</p>
            <p className={utilStyles.contactRedP}>Email</p>
            <p>info@mysite.com</p>
            <p className={utilStyles.contactRedP}>Opening Hours</p>
            <p>Mon - Fri: 7am - 10pm</p>
          </div>
          <ContactForm />
        </div>
      </section>
    </Layout>
  );
}
