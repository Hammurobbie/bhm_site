import Head from "next/head";
import utilStyles from "../styles/utils.module.scss";

export const siteTitle = "BH&M Environmental Consulatnts, Inc";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400&family=Nunito+Sans:wght@200;300;400&family=Roboto:wght@100;300&display=swap"
          rel="stylesheet"
        />
        <meta
          name="description"
          content="BH&M Environmental Consulatnts, Inc"
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
      <main className={utilStyles.main}>{children}</main>
    </div>
  );
}
