import "../app/globals.css";

import AnalyticsScript from "../components/AnalyticsScript";
import AppInitializer from "../components/AppInitializer";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import ProgressBar from "../components/ProgressBar";
import { useRouter } from "next/router";

const LegacyApp = ({ Component, pageProps }) => {
  const router = useRouter();
  const isHome = router.pathname === "/";
  return (
    <>
      <AnalyticsScript />
      <AppInitializer />
      <Header />
      <ProgressBar />
      <main className={isHome ? undefined : "page-content"}>
        <Component {...pageProps} />
      </main>
      <div className="mt-5">
        <Footer />
      </div>
    </>
  );
};

export default LegacyApp;
