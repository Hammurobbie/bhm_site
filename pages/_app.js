import "../styles/globals.scss";
import PageTransition from "../utils/PageTransition";

function MyApp({ Component, pageProps }) {
  return (
    <PageTransition>
      <Component {...pageProps} />
    </PageTransition>
  );
}

export default MyApp;
