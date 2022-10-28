import Head from "next/head";
import Layout from "../components/layout";
import ContactForm from "../components/ContactForm";
import utilStyles from "../styles/utils.module.scss";
import React, { useState, useEffect } from "react";
import { Map, Marker } from "pigeon-maps";
import { stamenToner } from "pigeon-maps/providers";
import { motion } from "framer-motion";

export default function Contact() {
  const [scrollPos, setScrollPos] = useState(0);
  const [windH, setWindH] = useState(0);
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (!map) {
      setMap(document.getElementById("map"));
    }

    setWindH(window.innerHeight);

    const handleScroll = () => {
      setScrollPos(window.scrollY);
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPos]);

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

  const handleAddressRedirect = () => {
    const URL =
      "https://www.google.com/maps/place/BHM+Environmental+Consultants/@35.2286676,-89.8941862,18z/data=!3m1!4b1!4m5!3m4!1s0x887f7ba592907ca1:0x49dbe4a3b15a6539!8m2!3d35.2286444!4d-89.8929681";
    window.open(URL, "_blank");
  };

  return (
    <Layout>
      <Head>
        <title>BH&M | Contact</title>
      </Head>
      <div className={utilStyles.headerBottomBorder} />
      <section className={utilStyles.contact}>
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 2 } }}
        >
          Contact Us
        </motion.h3>
        <div className={utilStyles.contactInner}>
          <motion.div
            className={utilStyles.contactLeft}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 1.5 }}
          >
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
            <p className={utilStyles.contactRedP}>Address</p>
            <p>
              <a
                target="_blank"
                rel="noopener"
                href="https://www.google.com/maps/place/BHM+Environmental+Consultants/@35.2286676,-89.8941862,18z/data=!3m1!4b1!4m5!3m4!1s0x887f7ba592907ca1:0x49dbe4a3b15a6539!8m2!3d35.2286444!4d-89.8929681"
              >
                3775 Covington Pike
                <br />
                Memphis, TN 38135
              </a>
            </p>
            <p className={utilStyles.contactRedP}>Hours</p>
            <p>Mon - Fri: 7am - 10pm</p>
          </motion.div>
          <ContactForm />
        </div>
        <div id="map" className={utilStyles.map}>
          <motion.h4
            initial={hide}
            animate={
              windH >= map?.offsetTop + map?.offsetHeight - 500 ||
              scrollPos >= map?.offsetTop - map?.offsetHeight - 100
                ? show
                : hide
            }
          >
            Getting Here
          </motion.h4>
          <motion.div
            initial={hide}
            animate={
              windH >= map?.offsetTop + map?.offsetHeight - 500 ||
              scrollPos >= map?.offsetTop - map?.offsetHeight - 100
                ? show2
                : hide
            }
          >
            <Map
              defaultCenter={[35.2286654, -89.8930989]}
              defaultZoom={15}
              width={1000}
              height={300}
              provider={stamenToner}
            >
              <Marker
                anchor={[35.2281, -89.893]}
                payload={1}
                onClick={handleAddressRedirect}
                color={"#d02626"}
              />
            </Map>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
