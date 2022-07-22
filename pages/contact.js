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
        <div className={utilStyles.contactInner}>
          <div className={utilStyles.contactLeft}>
            <p className={utilStyles.contactRedP}>Telephone</p>
            <p>
              <a href="tel:+9014356429">Tel: 901.435.6429</a>
            </p>
            <p>
              <a href="tel:+9015124600">Fax: 901.512.4600</a>
            </p>
            <p className={utilStyles.contactRedP}>Email</p>
            <p>
              <a href="mailto:bhm@bhmenvironmental.com">
                bhm@bhmenvironmental.com
              </a>
            </p>
            <p>
              <a href="mailto:bhmlabservices@gmail.com">
                bhmlabservices@gmail.com
              </a>
            </p>
            <p className={utilStyles.contactRedP}>Hours</p>
            <p>Mon - Fri: 7am - 10pm</p>
          </div>
          <ContactForm />
        </div>
      </section>
    </Layout>
  );
}
