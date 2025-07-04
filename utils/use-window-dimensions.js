"use client"; // Optional, but recommended if used in App Router

import { useEffect, useState } from "react";

function getWindowDimensions() {
  if (typeof window === "undefined") {
    return { width: 0, height: 0 }; // SSR fallback
  }
  const { innerWidth: width, innerHeight: height } = window;
  return { width, height };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions);

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

export default useWindowDimensions;
