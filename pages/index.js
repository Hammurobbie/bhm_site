import { useEffect, useState } from "react";
import Head from "next/head";
import Layout from "../components/layout";
import styles from "../styles/utils.module.scss";
import { motion } from "framer-motion";

export default function Home() {
  const [scrollPos, setScrollPos] = useState(118);
  const [scrollPos2, setScrollPos2] = useState(0);
  const [windH, setWindH] = useState(0);
  const [acc, setAcc] = useState(null);
  const [cli, setCli] = useState(null);

  useEffect(() => {
    if (!acc) {
      setAcc(document.getElementById("accolades"));
    }

    if (!cli) {
      setCli(document.getElementById("clients"));
    }

    setWindH(window.innerHeight);

    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrollPos(0);
      } else if (window.scrollY < 118) {
        setScrollPos(118);
      }
      setScrollPos2(window.scrollY);
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPos]);

  console.log(windH, acc?.offsetTop + acc?.offsetHeight - 180);

  const hide = {
    opacity: 0,
    y: -20,
  };

  const show = {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2,
      duration: 1,
    },
  };

  const show2 = {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.7,
      duration: 0.7,
    },
  };

  const show3 = {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.8,
      duration: 0.7,
    },
  };

  const show4 = {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.9,
      duration: 0.7,
    },
  };

  const show5 = {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1,
      duration: 0.7,
    },
  };

  return (
    <Layout>
      <Head>
        <title>BH&M | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0, duration: 0.1 }}
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
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0, duration: 2 }}
          className={styles.missionStatement}
        >
          <h3>Our Mission Statement</h3>
          <p>
            “It is our mission to exemplify and maintain our reputation as a
            fair, reliable, and environmentally conscience company so our
            clients know they can depend on us to provide them the highest
            quality service in meeting their needs to protect the environment.”
          </p>
        </motion.div>
        <div id="accolades" className={styles.accolades}>
          <div>
            <motion.div
              initial={hide}
              animate={
                windH >= acc?.offsetTop + acc?.offsetHeight - 180 ||
                scrollPos2 >= acc?.offsetTop - acc?.offsetHeight - 110
                  ? show
                  : hide
              }
            >
              <h3>2017 MLGW Flame Award Winner</h3>
              <p>
                Annual Flame Awards, which acknowledge minority and women-owned
                business enterprises and locally-owned small
                businesses(MWBE/LSBs) and their successful working relationship
                with MLGW.
              </p>
              <button>
                <a
                  target="_blank"
                  rel="noopener"
                  href="https://www.mlgw.com/news/flame-and-spark-awards-dec-2016"
                >
                  Read More
                </a>
              </button>
            </motion.div>
            <motion.img
              initial={hide}
              animate={
                windH >= acc?.offsetTop + acc?.offsetHeight - 180 ||
                scrollPos2 >= acc?.offsetTop - acc?.offsetHeight - 110
                  ? show2
                  : hide
              }
              src="/images/mlgw.png"
              alt="mlgw"
            ></motion.img>
          </div>
        </div>
        <div id="clients" className={styles.clients}>
          <motion.h3
            initial={hide}
            animate={
              windH >= cli?.offsetTop + cli?.offsetHeight - 180 ||
              scrollPos2 >= cli?.offsetTop - cli?.offsetHeight - 110
                ? show
                : hide
            }
          >
            Some of our clients:
          </motion.h3>
          <div>
            <motion.img
              initial={hide}
              animate={
                windH >= cli?.offsetTop + cli?.offsetHeight - 180 ||
                scrollPos2 >= cli?.offsetTop - cli?.offsetHeight - 110
                  ? show2
                  : hide
              }
              src="/images/fhb_logo.png"
              alt="first horizon"
              style={{ margin: "0 20px" }}
            ></motion.img>
            <motion.img
              initial={hide}
              animate={
                windH >= cli?.offsetTop + cli?.offsetHeight - 180 ||
                scrollPos2 >= cli?.offsetTop - cli?.offsetHeight - 110
                  ? show3
                  : hide
              }
              src="/images/uthsc_logo.png"
              alt="uthsc"
              style={{ height: "95px" }}
            ></motion.img>
            <motion.img
              initial={hide}
              animate={
                windH >= cli?.offsetTop + cli?.offsetHeight - 180 ||
                scrollPos2 >= cli?.offsetTop - cli?.offsetHeight - 110
                  ? show4
                  : hide
              }
              src="/images/harding_logo.png"
              alt="harding"
              style={{ height: "55px", margin: "30px 20px" }}
            ></motion.img>
            <motion.img
              initial={hide}
              animate={
                windH >= cli?.offsetTop + cli?.offsetHeight - 180 ||
                scrollPos2 >= cli?.offsetTop - cli?.offsetHeight - 110
                  ? show5
                  : hide
              }
              src="/images/msnb_logo.png"
              alt="navy base"
            ></motion.img>
          </div>
        </div>
      </motion.section>
    </Layout>
  );
}
