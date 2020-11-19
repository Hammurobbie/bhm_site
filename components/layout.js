import Head from "next/head";
import styles from "./layout.module.scss";
import utilStyles from "../styles/utils.module.scss";
import Link from "next/link";

export const siteTitle = "BH&M Environmental Consulatnts, Inc";

export default function Layout({ children, home }) {
  const homeCheck = children[0].props.children[0];

  const year = new Date().getFullYear();

  return (
    <div className={utilStyles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
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
        <Link href="/">
          <a>home</a>
        </Link>
        <Link href="/about">
          <a>about</a>
        </Link>
        {homeCheck ? (
          <>
            <img
              src="/images/logo.png"
              className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
              alt="logo"
            />
          </>
        ) : (
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
        )}
        <Link href="/contact">
          <a>contact</a>
        </Link>
        <Link href="/services">
          <a>services</a>
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
        <p>
          Copyright © {year} | BH&M Environmental Consultants Memphis, Tennessee
        </p>
      </footer>
    </div>
  );
}
