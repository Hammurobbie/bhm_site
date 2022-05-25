import { useState, useEffect } from "react";
import styles from "../styles/utils.module.scss";
import headerStyles from "../components/layout.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import { BsTelephone, BsLinkedin } from "react-icons/bs";
import { VscMail, VscLocation } from "react-icons/vsc";
import { ImGoogle2 } from "react-icons/im";

export default function PageTransition({ children }) {
  const [displayChildren, setDisplayChildren] = useState(children);
  const [transitionStage, setTransitionStage] = useState("init");

  const route = useRouter().pathname.substring(1);
  const year = new Date().getFullYear();

  useEffect(() => {
    if (transitionStage === "init") {
      setTimeout(() => {
        setTransitionStage("in");
      }, 500);
    } else if (children.type.name !== displayChildren.type.name)
      setTransitionStage("out");
  }, [children, setDisplayChildren, displayChildren]);

  return (
    <div
      className={`${styles.initContent} ${
        transitionStage === "init" ? styles.out : styles.in
      }`}
    >
      <header className={headerStyles.header}>
        <div>
          <>
            <Link href="/">
              <a>
                <img
                  src="/images/logo.png"
                  className={headerStyles.headerImage}
                  alt="logo"
                />
              </a>
            </Link>
          </>
          <Link href="/">
            <a className={route === "" ? headerStyles.curPageColor : undefined}>
              home
            </a>
          </Link>
          <Link href="/consulting">
            <a
              className={
                route === "consulting" ? headerStyles.curPageColor : undefined
              }
            >
              consulting
            </a>
          </Link>
          <Link href="/lab">
            <a
              className={
                route === "lab" ? headerStyles.curPageColor : undefined
              }
            >
              lab
            </a>
          </Link>
          <Link href="/contact">
            <a
              className={
                route === "contact" ? headerStyles.curPageColor : undefined
              }
            >
              contact
            </a>
          </Link>
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
      </header>
      <div
        onTransitionEnd={() => {
          if (transitionStage === "out") {
            setDisplayChildren(children);
            setTransitionStage("in");
          }
        }}
        className={`${styles.content} ${styles[transitionStage]}`}
      >
        {displayChildren}
      </div>
      <footer className={styles.footer}>
        <div className={styles.footer1}>
          <div>
            <div>
              <div className={styles.iconHeader}>
                <BsTelephone style={{ marginTop: "3px" }} />
                <h3>Call Us</h3>
              </div>
              <div>
                <a href="tel:+9014356429">
                  <p>Tel: 901.435.6429</p>
                </a>
                <a href="tel:+9015124600">
                  <p>Fax: 901.512.4600</p>
                </a>
              </div>
            </div>
            <span />
            <div>
              <div className={styles.iconHeader} style={{ marginLeft: "0" }}>
                <VscMail style={{ height: "23px" }} />
                <h3>Email Us</h3>
              </div>
              <div>
                <a href="mailto:bhm@bhmenvironmental.com">
                  <p>bhm@bhmenvironmental.com</p>
                </a>
                <a href="mailto:bhmlabservices@gmail.com">
                  <p>bhmlabservices@gmail.com</p>
                </a>
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
                  <a
                    target="_blank"
                    rel="noopener"
                    href="https://www.google.com/maps/place/BHM+Environmental+Consultants/@35.2286676,-89.8941862,18z/data=!3m1!4b1!4m5!3m4!1s0x887f7ba592907ca1:0x49dbe4a3b15a6539!8m2!3d35.2286444!4d-89.8929681"
                  >
                    <p>3775 Covington Pike</p>
                    <p>Memphis, TN 38135</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footer2}>
          <div>
            <div className={styles.hours}>
              <h3>Hours:</h3>
              <p>7AM - 4PM | M - F</p>
              <a
                target="_blank"
                rel="noopener"
                href="https://www.linkedin.com/company/bh&m-environmental-consultants-inc./mycompany/"
              >
                <BsLinkedin />
              </a>
              <a
                target="_blank"
                rel="noopener"
                href="https://www.google.com/search?q=bh%26m+environmental+inc+memphis%2C+tn&sxsrf=ALiCzsZWSxT1YUwamhO_paIHvqWj5Wmu9A%3A1653438561509&ei=YXiNYvCfHoufqtsP9fucmA4&ved=0ahUKEwiw1PbQsvn3AhWLj2oFHfU9B-MQ4dUDCA4&uact=5&oq=bh%26m+environmental+inc+memphis%2C+tn&gs_lcp=Cgdnd3Mtd2l6EAMyBQghEKsCOgcIIxCwAxAnOgcIABBHELADOgUIABCiBDoFCCEQoAFKBAhBGABKBAhGGABQ5wtY93Jg0XloBnABeACAAW2IAcYLkgEEMTIuNJgBAKABAcgBA8ABAQ&sclient=gws-wiz#lrd=0x887f7ba592907ca1:0x49dbe4a3b15a6539,1,,,"
              >
                <ImGoogle2 />
              </a>
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
        </div>
        <div className={styles.footer3}>
          <p>
            <span>Copyright © {year} |</span> BH&M Environmental Consultants
            Memphis, Tennessee
          </p>
        </div>
      </footer>
    </div>
  );
}
