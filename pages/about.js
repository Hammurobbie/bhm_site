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
      <section className={utilStyles.about}>
        <h3>About Us</h3>
        <div className={utilStyles.aboutInner}>
          <div className={utilStyles.aboutLeft}>
            <p>
              BH&M Environmental Consultants, INC was established as a small
              business in Memphis and is continually growing far beyond the
              Shelby County limits. With years of quality workmanship provided
              by our certified employees in the environmental field, BH&M has
              accrued 100+ years of experience. BH&M is also one of the few
              existing NVLAP accredited labs(Lab #201018-0) in the state of
              Tennessee allowing for PLM (polarized light microscopy) samples to
              undergo thorough and accurate analysis.
              <br />
              <br />
              After providing ten years of service to the local community and
              other regions outside of Tennessee our mission remains the same;
              aiming to provide nothing short of exceptional services that fall
              in line with and enforce environmental regulations to keep our
              citizens, our communities, and our world in safer health.
            </p>
            <div className={utilStyles.aboutButtons}>
              <button>Consulting</button>
              <button>Labs</button>
            </div>
          </div>
          <div className={utilStyles.aboutImages}>
            <img src="/images/mlgw.png" alt="mlgw"></img>
            <img src="/images/mlgw.png" alt="mlgw"></img>
          </div>
        </div>
      </section>
    </Layout>
  );
}
