import Head from "next/head";
import styles from "./layout.module.scss";
import utilStyles from "../styles/utils.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";

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
          href="https://fonts.googleapis.com/css2?family=Lato:wght@300&family=Nunito+Sans:wght@200&display=swap"
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
                className={`${styles.headerImage} ${utilStyles.borderCircle}`}
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
      <main>{children}</main>
      {!homeCheck && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
      <footer className={utilStyles.footer}>
        <div></div>
        <div></div>
        <div>
          <p>© {year} | BH&M Environmental Consultants Memphis, Tennessee</p>
        </div>
      </footer>
    </div>
  );
}
