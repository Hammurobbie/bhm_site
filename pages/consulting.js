import Head from "next/head";
import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.scss";
import { RiLungsLine } from "react-icons/ri";

export default function Consulting() {
  return (
    <Layout>
      <Head>
        <title>BH&M | Consulting</title>
      </Head>
      <div className={utilStyles.headerBottomBorder} />
      <section className={utilStyles.consulting}>
        <h3>Consulting</h3>
        <div className={utilStyles.consultingCont}>
          <p>
            As a multifaceted environmental consulting firm, BH&M offers a wide
            range of services. Some of these services include:
          </p>
          <div className={utilStyles.consultingGrid}>
            <div>
              <RiLungsLine />
              <h4>Indoor Air Quality</h4>
              <p>
                I'm a paragraph. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Proin pellentesque urna sem, a facilisis mauris
                vulputate eu.
              </p>
            </div>
            <div>
              <RiLungsLine />
              <h4>Mold Testing</h4>
              <p>
                I'm a paragraph. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Proin pellentesque urna sem, a facilisis mauris
                vulputate eu.
              </p>
            </div>
            <div>
              <RiLungsLine />
              <h4>Lead-Based Paint</h4>
              <p>
                I'm a paragraph. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Proin pellentesque urna sem, a facilisis mauris
                vulputate eu.
              </p>
            </div>
            <div>
              <RiLungsLine />
              <h4>Asbestos</h4>
              <p>
                I'm a paragraph. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Proin pellentesque urna sem, a facilisis mauris
                vulputate eu.
              </p>
            </div>
            <div>
              <RiLungsLine />
              <h4>Industrial Hygiene</h4>
              <p>
                I'm a paragraph. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Proin pellentesque urna sem, a facilisis mauris
                vulputate eu.
              </p>
            </div>
            <div>
              <RiLungsLine />
              <h4>Environmental</h4>
              <p>
                I'm a paragraph. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Proin pellentesque urna sem, a facilisis mauris
                vulputate eu.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
