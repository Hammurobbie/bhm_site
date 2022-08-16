import Head from "next/head";
import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.scss";
import Link from "next/link";

export default function About() {
  return (
    <Layout>
      <Head>
        <title>BH&M | About</title>
      </Head>
      <div className={utilStyles.headerBottomBorder} />
      <section className={utilStyles.about}>
        <h3>About Us</h3>
        <div className={utilStyles.aboutInner}>
          <div className={utilStyles.aboutLeft}>
            <p>
              BH&M Environmental Consultants, INC was established as a small
              business in Memphis and is continually growing far beyond the
              Shelby County limits. BH&M has accrued 100+ years of combined
              experience by providing quality consulting to each of their
              clients. In addition, BH&M boasts one of the few existing NVLAP
              accredited laboratories in the state of Tennessee where their
              analysts are able to process asbestos and lead samples.
              <br />
              <br />
              After providing years of service to the local community and other
              regions outside of Tennessee our mission remains the same; aiming
              to provide nothing short of exceptional services that fall in line
              with and enforce environmental regulations to keep our citizens,
              our communities, and our world in safer health.
            </p>
            <div className={utilStyles.aboutButtons}>
              <Link href="/consulting">
                <button>Consulting</button>
              </Link>
              <Link href="/lab">
                <button>Lab Services</button>
              </Link>
            </div>
          </div>
          <div className={utilStyles.aboutImages}>
            <img src="/images/about_1.jpeg" alt="mlgw"></img>
            <img src="/images/about_2.jpeg" alt="mlgw"></img>
          </div>
        </div>
      </section>
    </Layout>
  );
}
