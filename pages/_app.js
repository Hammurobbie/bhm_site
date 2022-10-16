import "../styles/globals.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import PageTransition from "../utils/PageTransition";

function MyApp({ Component, pageProps }) {
  return (
    <PageTransition>
      <Component {...pageProps} />
    </PageTransition>
  );
}

export default MyApp;
