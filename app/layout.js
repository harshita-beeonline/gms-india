// app/layout.js
import React from "react";
import Header from "@/components/layout/Header";
import "../app/globals.css"
import Footer from "@/components/layout/Footer";
export const metadata = {
  title: "Homepage",
  description: "Built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {" "}
          <Header />
          {children}
          <Footer />
      </body>
    </html>
  );
}
