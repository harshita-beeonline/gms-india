"use client";

import { useEffect } from "react";
import Head from "next/head";
import FloatingIcons from "./FloatingIcons";

const DEFAULT_DESCRIPTION =
  "Accelerate your Next-Gen product needs with microelectronics and semiconductor solutions from GMS India.";
const DEFAULT_URL = "https://gms-india.com";
const FAVICON_URL =
  "https://res.cloudinary.com/poorna/image/upload/c_scale,w_32/v1605536477/gms/favicon.png";

const ensureMetaTag = (selector, attributes) => {
  const head = typeof document !== "undefined" ? document.head : undefined;
  if (!head) {
    return undefined;
  }
  let tag = head.querySelector(selector);
  if (!tag) {
    tag = document.createElement("meta");
    Object.entries(attributes).forEach(([key, value]) => {
      tag.setAttribute(key, value);
    });
    head.appendChild(tag);
  }
  return tag;
};

const OGP = ({ title = "Home", image = "" }) => {
  const pageTitle = `${title} | GMS India`;

  useEffect(() => {
    if (typeof document === "undefined") {
      return;
    }

    document.title = pageTitle;

    const descriptionTag = ensureMetaTag('meta[name="description"]', {
      name: "description",
    });
    if (descriptionTag) {
      descriptionTag.setAttribute("content", DEFAULT_DESCRIPTION);
    }

    const ogTitle = ensureMetaTag('meta[property="og:title"]', {
      property: "og:title",
    });
    if (ogTitle) {
      ogTitle.setAttribute("content", pageTitle);
    }

    const ogType = ensureMetaTag('meta[property="og:type"]', {
      property: "og:type",
    });
    if (ogType) {
      ogType.setAttribute("content", "website");
    }

    const ogUrl = ensureMetaTag('meta[property="og:url"]', {
      property: "og:url",
    });
    if (ogUrl) {
      ogUrl.setAttribute("content", DEFAULT_URL);
    }

    const ogDescription = ensureMetaTag('meta[property="og:description"]', {
      property: "og:description",
    });
    if (ogDescription) {
      ogDescription.setAttribute("content", DEFAULT_DESCRIPTION);
    }

    const ogImage = ensureMetaTag('meta[property="og:image"]', {
      property: "og:image",
    });
    if (ogImage) {
      ogImage.setAttribute("content", image || `${DEFAULT_URL}/og-image.png`);
    }

    const linkTag = document.querySelector('link[rel="shortcut icon"]');
    if (linkTag) {
      linkTag.setAttribute("href", FAVICON_URL);
    }
  }, [pageTitle, image]);

  return (
    <>
      {/* Keep next/head for legacy pages running under the pages router */}
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={DEFAULT_DESCRIPTION} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={DEFAULT_URL} />
        <meta property="og:description" content={DEFAULT_DESCRIPTION} />
        {image && <meta property="og:image" content={image} />}
        <link rel="shortcut icon" type="image/png" href={FAVICON_URL} />
      </Head>
      <FloatingIcons />
    </>
  );
};

export default OGP;
