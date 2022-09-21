import Head from "next/head";
import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.scss";
import { RiLungsLine } from "react-icons/ri";
import { motion } from "framer-motion";

export default function Consulting() {
  const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 25 },
    },
    closed: { opacity: 0, y: -30, transition: { duration: 2 } },
  };

  return (
    <Layout>
      <Head>
        <title>BH&M | Consulting</title>
      </Head>
      <div className={utilStyles.headerBottomBorder} />
      <section className={utilStyles.consulting}>
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 2.5 } }}
        >
          Consulting
        </motion.h3>
        <div className={utilStyles.consultingCont}>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1.25, delay: 0.3 } }}
          >
            As a multifaceted environmental consulting firm, BH&M offers a wide
            range of services. Some of these services include:
          </motion.p>
          <motion.div
            className={utilStyles.consultingGrid}
            initial="closed"
            animate="open"
            variants={{
              open: {
                opacity: 1,
                transition: {
                  type: "spring",
                  bounce: 0,
                  duration: 2,
                  delayChildren: 0.5,
                  staggerChildren: 0.15,
                },
              },
              closed: {
                opacity: 0,
                transition: {
                  type: "spring",
                  bounce: 0,
                  duration: 2,
                },
              },
            }}
          >
            <motion.div variants={itemVariants}>
              <RiLungsLine />
              <h4>Indoor Air Quality</h4>
              <ul>
                <li>- Project Management & Monitoring</li>
                <li>- Air Quality Inspections & Sampling</li>
              </ul>
            </motion.div>
            <motion.div variants={itemVariants}>
              <RiLungsLine />
              <h4>Mold Testing</h4>
              <ul>
                <li>- Mold Inspections</li>
                <li>- Mold Sampling</li>
              </ul>
            </motion.div>
            <motion.div variants={itemVariants}>
              <RiLungsLine />
              <h4>Lead-Based Paint</h4>
              <ul>
                <li>- Lead Inspections</li>
                <li>- Lead Abatement Oversight</li>
                <li>- Lead Air Monitoring</li>
              </ul>
            </motion.div>
            <motion.div variants={itemVariants}>
              <RiLungsLine />
              <h4>Asbestos</h4>
              <ul>
                <li>- Building Inspections</li>
                <li>- PLM Surveys / Asbestos Bulk Sampling</li>
                <li>- Operations & Management Plans</li>
                <li>- Abatement Design & Specifications</li>
                <li>- Project Management & Monitoring</li>
                <li>- Asbestos Air Monitoring & Clearance Samples</li>
              </ul>
            </motion.div>
            <motion.div variants={itemVariants}>
              <RiLungsLine />
              <h4>Industrial Hygiene</h4>
              <ul>
                <li>- Safety Data Sheet (SDS) Review</li>
                <li>- Sampling</li>
                <li>- Initial Hazardous Chemical Exposure Monitoring</li>
                <li>- Silica Testing</li>
                <li>- Radon Testing</li>
                <li>- HAZWOPER Training</li>
              </ul>
            </motion.div>
            <motion.div variants={itemVariants}>
              <RiLungsLine />
              <h4>Environmental</h4>
              <ul>
                <li>- Phase I Environmental Site Assessments</li>
                <li>- Wetland Delineation</li>
                <li>- Endangered Species Investigation</li>
                <li>- Environmental Protection Plans</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
