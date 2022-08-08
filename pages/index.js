import { useEffect, useState } from "react";
import Head from "next/head";
import Layout from "../components/layout";
import styles from "../styles/utils.module.scss";

export default function Home() {
  const [scrollPos, setScrollPos] = useState(118);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrollPos(0);
      } else if (window.scrollY < 118) {
        setScrollPos(118);
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPos]);

  return (
    <Layout>
      <Head>
        <title>BH&M | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section
        className={styles.homeCont}
        style={{ backgroundPosition: `0 ${scrollPos}px` }}
      >
        <div className={styles.heroImage}>
          <h1 className={styles.title}>High Quality Service</h1>
          <div>
            <p className={styles.description}>
              with a reputation you can depend on
            </p>
          </div>
        </div>
        <div className={styles.missionStatement}>
          <h3>Our Mission Statement</h3>
          <p>
            “It is our mission to exemplify and maintain our reputation as a
            fair, reliable, and environmentally conscience company so our
            clients know they can depend on us to provide them the highest
            quality service in meeting their needs to protect the environment.”
          </p>
        </div>
        <div className={styles.accolades}>
          <div>
            <div>
              <h3>2017 MLGW Flame Award Winner</h3>
              <p>
                Annual Flame Awards, which acknowledge minority and women-owned
                business enterprises and locally-owned small
                businesses(MWBE/LSBs) and their successful working relationship
                with MLGW.
              </p>
              <button>
                <a>Read More</a>
              </button>
            </div>
            <img src="/images/mlgw.png" alt="mlgw"></img>
          </div>
        </div>
        <div className={styles.clients}>
          <h3>Some of our clients:</h3>
          <div>
            <img
              src="/images/fhb_logo.png"
              alt="first horizon"
              style={{ margin: "0 20px" }}
            ></img>
            <img
              src="/images/uthsc_logo.png"
              alt="uthsc"
              style={{ height: "95px" }}
            ></img>
            <img
              src="/images/harding_logo.png"
              alt="harding"
              style={{ height: "55px", margin: "30px 20px" }}
            ></img>
            <img src="/images/msnb_logo.png" alt="navy base"></img>
          </div>
        </div>
      </section>
    </Layout>
  );
}
