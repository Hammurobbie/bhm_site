import React, { useState } from "react";
import styles from "../styles/utils.module.scss";
import headerStyles from "../components/layout.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import { BsTelephone, BsLinkedin } from "react-icons/bs";
import { VscMail, VscLocation } from "react-icons/vsc";
import { ImGoogle2 } from "react-icons/im";
import { motion } from "framer-motion";
import HamburgerMenu from "react-hamburger-menu";
import Accordion from "react-bootstrap/Accordion";

export default function PageTransition({ children }) {
  const [isHamburger, setIsHamburger] = useState(false);
  const [curKey, setCurKey] = useState("0");
  const route = useRouter().pathname.substring(1);
  const year = new Date().getFullYear();

  const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 25 },
    },
    closed: { opacity: 0, y: -30, transition: { duration: 5 } },
  };

  const handleHamburger = () => {
    setIsHamburger(!isHamburger);
    if (curKey === "0") {
      setCurKey("1");
    } else setCurKey("0");
  };

  return (
    <div className={styles.outerDiv}>
      <header className={headerStyles.header}>
        <motion.div
          initial="closed"
          animate="open"
          variants={{
            open: {
              transition: {
                type: "spring",
                bounce: 0,
                duration: 2,
                delayChildren: 0.3,
                staggerChildren: 0.1,
              },
            },
            closed: {
              transition: {
                type: "spring",
                bounce: 0,
                duration: 0.3,
              },
            },
          }}
        >
          <motion.span variants={itemVariants}>
            <Link href="/">
              <a>
                <img
                  src="/images/logo.png"
                  className={headerStyles.headerImage}
                  alt="logo"
                />
              </a>
            </Link>
          </motion.span>
          <motion.span
            className={headerStyles.hamburger}
            variants={itemVariants}
          >
            <HamburgerMenu
              isOpen={isHamburger}
              menuClicked={handleHamburger}
              height={10}
              strokeWidth={1}
              rotate={0}
              color="black"
              borderRadius={0}
              animationDuration={0.5}
            />
          </motion.span>
          <motion.span className={headerStyles.navItem} variants={itemVariants}>
            <Link href="/">
              <a
                className={route === "" ? headerStyles.curPageColor : undefined}
              >
                home
              </a>
            </Link>
          </motion.span>
          <motion.span className={headerStyles.navItem} variants={itemVariants}>
            <Link href="/consulting">
              <a
                className={
                  route === "consulting" ? headerStyles.curPageColor : undefined
                }
              >
                consulting
              </a>
            </Link>
          </motion.span>
          <motion.span className={headerStyles.navItem} variants={itemVariants}>
            <Link href="/lab">
              <a
                className={
                  route === "lab" ? headerStyles.curPageColor : undefined
                }
              >
                lab
              </a>
            </Link>
          </motion.span>
          <motion.span className={headerStyles.navItem} variants={itemVariants}>
            <Link href="/contact">
              <a
                className={
                  route === "contact" ? headerStyles.curPageColor : undefined
                }
              >
                contact
              </a>
            </Link>
          </motion.span>
          <motion.span className={headerStyles.navItem} variants={itemVariants}>
            <Link href="/about">
              <a
                className={
                  route === "about" ? headerStyles.curPageColor : undefined
                }
              >
                about
              </a>
            </Link>
          </motion.span>
        </motion.div>
      </header>
      <Accordion defaultActiveKey="1" className={headerStyles.hamburger}>
        <Accordion.Item eventKey={curKey}>
          <Accordion.Body className={headerStyles.mobileNav}>
            <div onClick={handleHamburger}>
              <Link href="/">
                <a
                  className={
                    route === "" ? headerStyles.curPageColor : undefined
                  }
                >
                  home
                </a>
              </Link>
            </div>
            <div onClick={handleHamburger}>
              <Link href="/consulting">
                <a
                  className={
                    route === "consulting"
                      ? headerStyles.curPageColor
                      : undefined
                  }
                >
                  consulting
                </a>
              </Link>
            </div>
            <div onClick={handleHamburger}>
              <Link href="/lab">
                <a
                  className={
                    route === "lab" ? headerStyles.curPageColor : undefined
                  }
                >
                  lab
                </a>
              </Link>
            </div>
            <div onClick={handleHamburger}>
              <Link href="/contact">
                <a
                  className={
                    route === "contact" ? headerStyles.curPageColor : undefined
                  }
                >
                  contact
                </a>
              </Link>
            </div>
            <div onClick={handleHamburger}>
              <Link href="/about">
                <a
                  className={
                    route === "about" ? headerStyles.curPageColor : undefined
                  }
                >
                  about
                </a>
              </Link>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <div className={styles.content}>
        <div className={styles.contentInner}>{children}</div>
      </div>
      <footer className={styles.footer}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0, duration: 1.5 }}
          className={styles.footer1}
        >
          <div>
            <div>
              <div className={styles.iconHeader}>
                <BsTelephone style={{ marginTop: "3px" }} />
                <h3>Call Us</h3>
              </div>
              <div>
                <p>
                  <a href="tel:+9014356429">Tel: 901.435.6429</a>
                </p>
                <p>
                  <a href="tel:+9015124600">Fax: 901.512.4600</a>
                </p>
              </div>
            </div>
            <span />
            <div>
              <div className={styles.iconHeader} style={{ marginLeft: "0" }}>
                <VscMail style={{ height: "23px" }} />
                <h3>Email Us</h3>
              </div>
              <div>
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
              </div>
            </div>
            <span />
            <div>
              <div>
                <div className={styles.iconHeader}>
                  <VscLocation
                    style={{
                      height: "25px",
                      marginRight: "9px",
                      marginTop: "-1px",
                    }}
                  />
                  <h3>Visit Us</h3>
                </div>
                <div>
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
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1.25 }}
          className={styles.footer2}
        >
          <div>
            <div className={styles.hours}>
              <h3>Hours:</h3>
              <p>7AM - 4PM | M - F</p>
              <div>
                <a
                  target="_blank"
                  rel="noopener"
                  href="https://www.linkedin.com/company/bh&m-environmental-consultants-inc./about/"
                >
                  <BsLinkedin />
                </a>
              </div>
              <div>
                <a
                  target="_blank"
                  rel="noopener"
                  href="https://www.google.com/search?q=bh%26m+environmental+inc+memphis%2C+tn&sxsrf=ALiCzsZWSxT1YUwamhO_paIHvqWj5Wmu9A%3A1653438561509&ei=YXiNYvCfHoufqtsP9fucmA4&ved=0ahUKEwiw1PbQsvn3AhWLj2oFHfU9B-MQ4dUDCA4&uact=5&oq=bh%26m+environmental+inc+memphis%2C+tn&gs_lcp=Cgdnd3Mtd2l6EAMyBQghEKsCOgcIIxCwAxAnOgcIABBHELADOgUIABCiBDoFCCEQoAFKBAhBGABKBAhGGABQ5wtY93Jg0XloBnABeACAAW2IAcYLkgEEMTIuNJgBAKABAcgBA8ABAQ&sclient=gws-wiz#lrd=0x887f7ba592907ca1:0x49dbe4a3b15a6539,1,,,"
                >
                  <ImGoogle2 />
                </a>
              </div>
            </div>
            <div id="logosDiv" className={styles.logosDiv}>
              <span>
                <img
                  id="agc_logo"
                  src="/images/agc_logo.png"
                  className={styles.headerImage}
                  alt="agc logo"
                />
                <img
                  id="agc_expand"
                  src="/images/agc_logo.png"
                  className={styles.headerImageHidden}
                  alt="agc logo"
                />
              </span>
              <span>
                <img
                  id="isn_logo"
                  src="/images/isn_logo.png"
                  className={styles.headerImage}
                  alt="isn logo"
                />
                <img
                  id="isn_expand"
                  src="/images/isn_logo.png"
                  className={styles.headerImageHidden}
                  alt="isn logo"
                />
              </span>
              <span>
                <img
                  id="nvlap_logo"
                  src="/images/nvlap_logo.png"
                  className={styles.headerImage}
                  alt="nvlap logo"
                  style={{ borderRadius: "25px" }}
                />
                <img
                  id="nvlap_expand"
                  src="/images/nvlap_logo.png"
                  className={styles.headerImageHidden}
                  alt="nvlap logo"
                  style={{ borderRadius: "25px" }}
                />
                <em id="nvlap_expand_text">
                  NVLAP Accreditation Does Not Confer Or Imply Certification,
                  Approval, Or Endorsement By NVLAP, NIST, Or Any Agency Of The
                  U.S. Government.
                </em>
              </span>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className={styles.footer3}
        >
          <p>
            <span>Copyright © {year} |</span> BH&M Environmental Consultants
            Memphis, Tennessee
          </p>
        </motion.div>
      </footer>
    </div>
  );
}
