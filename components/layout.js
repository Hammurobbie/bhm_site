import Head from "next/head";
import styles from "./layout.module.scss";
import utilStyles from "../styles/utils.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import { BsTelephone } from "react-icons/bs";
import { VscMail, VscLocation } from "react-icons/vsc";

export const siteTitle = "BH&M Environmental Consulatnts, Inc";

export default function Layout({ children, home }) {
  const homeCheck = children[0].props.children[0];
  const route = useRouter().pathname.substring(1);

  const year = new Date().getFullYear();

  return (
    <div className={utilStyles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400&family=Nunito+Sans:wght@200;300&family=Roboto:wght@100;300&display=swap"
          rel="stylesheet"
        />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        <>
          <Link href="/">
            <a>
              <img
                src="/images/logo.png"
                className={styles.headerImage}
                alt="logo"
              />
            </a>
          </Link>
        </>
        <Link href="/">
          <a className={route === "" ? styles.curPageColor : undefined}>home</a>
        </Link>
        <Link href="/consulting">
          <a
            className={route === "consulting" ? styles.curPageColor : undefined}
          >
            consulting
          </a>
        </Link>
        <Link href="/lab">
          <a className={route === "lab" ? styles.curPageColor : undefined}>
            lab
          </a>
        </Link>
        <Link href="/contact">
          <a className={route === "contact" ? styles.curPageColor : undefined}>
            contact
          </a>
        </Link>
        <Link href="/about">
          <a className={route === "about" ? styles.curPageColor : undefined}>
            about
          </a>
        </Link>
      </header>
      {route !== "" ? <div className={styles.headerBottomBorder} /> : null}
      <main className={utilStyles.main}>{children}</main>
      {!homeCheck && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
      <footer className={utilStyles.footer}>
        <div className={utilStyles.footer1}>
          <div>
            <div>
              <div className={utilStyles.iconHeader}>
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
              <div
                className={utilStyles.iconHeader}
                style={{ marginLeft: "0" }}
              >
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
                <div className={utilStyles.iconHeader}>
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
        <div className={utilStyles.footer2}>
          <div>Hours</div>
          <div className={utilStyles.logosDiv}>
            <img
              src="/images/agc_logo.png"
              className={styles.headerImage}
              alt="agc logo"
            />
            <img
              src="/images/isn_logo.png"
              className={styles.headerImage}
              alt="isn logo"
            />
            <img
              src="/images/nvlap_logo.png"
              className={styles.headerImage}
              alt="nvlap logo"
            />
          </div>
        </div>
        <div className={utilStyles.footer3}>
          <p>
            <span>Copyright © {year} |</span> BH&M Environmental Consultants
            Memphis, Tennessee
          </p>
        </div>
      </footer>
    </div>
  );
}
