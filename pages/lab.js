import Head from "next/head";
import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.scss";
import { ImLab } from "react-icons/im";

export default function Lab() {
  return (
    <Layout>
      <Head>
        <title>BH&M | Lab</title>
      </Head>
      <div className={utilStyles.headerBottomBorder} />
      <section className={utilStyles.lab}>
        <h3>Lab Services</h3>
        <div className={utilStyles.labCont}>
          <p>
            As a multifaceted environmental consulting firm, BH&M offers a wide
            range of services. Some of these services include:
          </p>
          <div className={utilStyles.labGrid}>
            <div>
              <ImLab />
              <h4>Indoor Air Quality</h4>
              <p>
                I'm a paragraph. Click here to add your own text and edit me.
                It’s easy. Just click “Edit Text” or double click me to add your
                own content and make changes to the font.
              </p>
            </div>
            <div>
              <ImLab />
              <h4>Mold Testing</h4>
              <p>
                I'm a paragraph. Click here to add your own text and edit me.
                It’s easy. Just click “Edit Text” or double click me to add your
                own content and make changes to the font.
              </p>
            </div>
            <div>
              <ImLab />
              <h4>Lead-Based Paint</h4>
              <p>
                I'm a paragraph. Click here to add your own text and edit me.
                It’s easy. Just click “Edit Text” or double click me to add your
                own content and make changes to the font.
              </p>
            </div>
            <div>
              <ImLab />
              <h4>Asbestos</h4>
              <p>
                I'm a paragraph. Click here to add your own text and edit me.
                It’s easy. Just click “Edit Text” or double click me to add your
                own content and make changes to the font.
              </p>
            </div>
            <div>
              <ImLab />
              <h4>Industrial Hygiene</h4>
              <p>
                I'm a paragraph. Click here to add your own text and edit me.
                It’s easy. Just click “Edit Text” or double click me to add your
                own content and make changes to the font.
              </p>
            </div>
            <div>
              <ImLab />
              <h4>Environmental</h4>
              <p>
                I'm a paragraph. Click here to add your own text and edit me.
                It’s easy. Just click “Edit Text” or double click me to add your
                own content and make changes to the font.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
