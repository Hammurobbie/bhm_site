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
              <ul>
                <li>- Project Management & Monitoring</li>
                <li>- Air Quality Inspections & Sampling</li>
              </ul>
            </div>
            <div>
              <RiLungsLine />
              <h4>Mold Testing</h4>
              <ul>
                <li>- Mold Inspections</li>
                <li>- Mold Sampling</li>
              </ul>
            </div>
            <div>
              <RiLungsLine />
              <h4>Lead-Based Paint</h4>
              <ul>
                <li>- Lead Inspections</li>
                <li>- Lead Abatement Oversight</li>
                <li>- Lead Air Monitoring</li>
              </ul>
            </div>
            <div>
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
            </div>
            <div>
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
            </div>
            <div>
              <RiLungsLine />
              <h4>Environmental</h4>
              <ul>
                <li>- Phase I Environmental Site Assessments</li>
                <li>- Wetland Delineation</li>
                <li>- Endangered Species Investigation</li>
                <li>- Environmental Protection Plans</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
