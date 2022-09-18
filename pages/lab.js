import Head from "next/head";
import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.scss";
import { ImLab } from "react-icons/im";
import { motion } from "framer-motion";

export default function Lab() {
  return (
    <Layout>
      <Head>
        <title>BH&M | Lab</title>
      </Head>
      <div className={utilStyles.headerBottomBorder} />
      <section className={utilStyles.lab}>
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 2 } }}
        >
          Lab Services
        </motion.h3>
        <div className={utilStyles.labCont}>
          <p>
            BH&M is one of the few existing NVLAP accredited labs(Lab #201018-0)
            in the state of Tennessee allowing for PLM (polarized light
            microscopy) samples to undergo thorough and accurate analysis. Some
            of our lab services include:
          </p>
          <div className={utilStyles.labGrid}>
            <div>
              <ImLab />
              <h4>Indoor Air Quality</h4>
              <p>I'm a paragraph. I need to be reviewed for content.</p>
            </div>
            <div>
              <ImLab />
              <h4>Mold Testing</h4>
              <p>I'm a paragraph. I need to be reviewed for content.</p>
            </div>
            <div>
              <ImLab />
              <h4>Lead-Based Paint</h4>
              <ul>
                <li>- Flame Atomic Absorption (FAA) Analysis</li>
              </ul>
            </div>
            <div>
              <ImLab />
              <h4>Asbestos</h4>
              <ul>
                <li>- Polarized Light Microscopy (PLM) Analysis</li>
                <li>- Phase Contrast Microscopy (PCM) Analysis</li>
              </ul>
            </div>
            <div>
              <ImLab />
              <h4>Industrial Hygiene</h4>
              <p>I'm a paragraph. I need to be reviewed for content.</p>
            </div>
            <div>
              <ImLab />
              <h4>Environmental</h4>
              <p>I'm a paragraph. I need to be reviewed for content.</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
