import "./globals.css";
import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
import AnalyticsScript from "../components/AnalyticsScript";
import ProgressBar from "../components/ProgressBar";
import AppInitializer from "../components/AppInitializer";
import Header from "../components/layout/Header";
import PageContent from "../components/layout/PageContent";
import Footer from "../components/layout/Footer"
export const metadata = {
  metadataBase: new URL("https://gms-india.com"),
  title: {
    default: "GMS India",
    template: "%s | GMS India",
  },
  description:
    "Accelerate your Next-Gen product needs with microelectronics and semiconductor solutions from GMS India.",
  icons: {
    icon: [
      {
        url: "https://res.cloudinary.com/poorna/image/upload/c_scale,w_16/v1605536477/gms/favicon.png",
        rel: "icon",
        type: "image/png",
      },
      {
        url: "https://res.cloudinary.com/poorna/image/upload/c_scale,w_16/v1605536477/gms/favicon.png",
        rel: "shortcut icon",
        type: "image/png",
      },
    ],
  },
  openGraph: {
    type: "website",
    siteName: "GMS India",
    title: "GMS India",
    description:
      "Accelerate your Next-Gen product needs with microelectronics and semiconductor solutions from GMS India.",
    url: "https://gms-india.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "GMS India",
    description:
      "Accelerate your Next-Gen product needs with microelectronics and semiconductor solutions from GMS India.",
  },
};

const fontPreconnects = (
  <>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
    <link
      href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&display=swap"
      rel="stylesheet"
    />
  </>
);

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        {fontPreconnects}
        <link
          rel="shortcut icon"
          href="https://res.cloudinary.com/poorna/image/upload/c_scale,w_32/v1605536477/gms/favicon.png"
        />
      </head>
      <body className="font-text">
        <AnalyticsScript />
        <AppInitializer />
        {/* <Navbar /> */}
        <Header />
        <ProgressBar />
        <PageContent>{children}</PageContent>
        <div className="mt-5">
          <Footer />
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
