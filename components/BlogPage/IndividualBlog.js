"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "../../styles/IndividualBlog.module.scss";
import { getAsset } from "../utils";

// Strip inline styles coming from the editor to keep page styling consistent.
const removeInlineStyles = (html = "") =>
  html.replace(/\s+style\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]+)/gi, "");

// Drop images that reference local file-system paths from pasted content.
const removeInvalidImages = (html = "") =>
  html.replace(/<span[^>]*>\s*<img[^>]*src\s*=\s*["']?file:[^>"']*\/?>\s*<\/span>/gi, "").replace(/<img[^>]*src\s*=\s*["']?file:[^>"']*\/?>/gi, "");

const sanitizeEditorHtml = (html = "") => removeInvalidImages(removeInlineStyles(html));

const formatDate = (dateStr) => {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  if (Number.isNaN(d.getTime())) return "";
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  }).format(d);
};

const stripHtml = (value = "") => value.replace(/<[^>]*>/g, "");

const decodeHtmlEntities = (value = "") => {
  let decoded = value;
  for (let i = 0; i < 2; i += 1) {
    decoded = decoded
      .replace(/&nbsp;/gi, " ")
      .replace(/&ndash;/gi, String.fromCharCode(8211))
      .replace(/&mdash;/gi, String.fromCharCode(8212))
      .replace(/&quot;/gi, '"')
      .replace(/&#39;|&apos;/gi, "'")
      .replace(/&amp;/gi, "&")
      .replace(/&#(\d+);/g, (_, code) =>
        String.fromCharCode(Number.parseInt(code, 10))
      )
      .replace(/&#x([0-9a-f]+);/gi, (_, code) =>
        String.fromCharCode(Number.parseInt(code, 16))
      );
  }
  return decoded;
};

const slugify = (value = "") =>
  value
    .toLowerCase()
    .trim()
    .replace(/&amp;|&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const buildSectionToc = (html = "") => {
  const used = new Map();
  const items = [];
  const updatedHtml = html.replace(
    /<h2([^>]*)>(.*?)<\/h2>/gis,
    (match, attrs, inner) => {
      const text = decodeHtmlEntities(stripHtml(inner))
        .replace(/\s+/g, " ")
        .trim();
      if (!text) return match;
      const existingIdMatch = attrs.match(/id\s*=\s*["']([^"']+)["']/i);
      let id = existingIdMatch ? existingIdMatch[1] : slugify(text);
      if (!id) id = `section-${items.length + 1}`;
      if (!existingIdMatch) {
        const seen = used.get(id) || 0;
        used.set(id, seen + 1);
        if (seen > 0) id = `${id}-${seen + 1}`;
      }
      items.push({ id, text, level: 2 });
      if (existingIdMatch) return match;
      return `<h2${attrs} id="${id}" data-scroll-offset="0">${inner}</h2>`;
    }
  );

  return { items, html: updatedHtml };
};

const IndividualBlog = ({ article }) => {
  const heroImageId = article?.cover_image?.id || article?.image;
  const heroImage = heroImageId ? getAsset(heroImageId, 90, 1200) : null;
  const createdOn = formatDate(article?.created_on);
  const cleanMeta = sanitizeEditorHtml(article?.meta_description || "");
  const cleanOverview = sanitizeEditorHtml(
    article?.overview || "<p>Content coming soon.</p>"
  );
  const { items: tocItems, html: overviewWithIds } =
    buildSectionToc(cleanOverview);
  const [activeSectionId, setActiveSectionId] = useState(
    tocItems[0]?.id || ""
  );
  const tocRef = useRef(null);
  const contentRef = useRef(null);
  const hasIntroduction = tocItems.some(
    (item) => item.text.toLowerCase() === "introduction"
  );

  useEffect(() => {
    if (!tocItems.length) return;
    const ids = tocItems.map((item) => item.id);
    const syncFromHash = () => {
      const hashId = window.location.hash.replace("#", "");
      if (hashId && ids.includes(hashId)) {
        setActiveSectionId(hashId);
      }
    };

    const handleScroll = () => {
      const offset = 140;
      let currentId = ids[0];
      const container = contentRef.current;
      if (container) {
        const nearBottom =
          container.scrollTop + container.clientHeight >=
          container.scrollHeight - 2;
        if (nearBottom) {
          setActiveSectionId(ids[ids.length - 1]);
          return;
        }
      }
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        const containerTop = contentRef.current
          ? contentRef.current.getBoundingClientRect().top
          : 0;
        const top = el.getBoundingClientRect().top - containerTop;
        if (top - offset <= 0) {
          currentId = id;
        } else {
          break;
        }
      }
      setActiveSectionId(currentId);
    };

    syncFromHash();
    handleScroll();
    const scrollTarget = contentRef.current || window;
    scrollTarget.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("hashchange", syncFromHash);
    return () => {
      scrollTarget.removeEventListener("scroll", handleScroll);
      window.removeEventListener("hashchange", syncFromHash);
    };
  }, [tocItems]);

  useEffect(() => {
    if (!activeSectionId || !tocRef.current) return;
    const link = tocRef.current.querySelector(
      `a[href="#${activeSectionId}"]`
    );
    if (link) {
      link.scrollIntoView({ block: "nearest" });
    }
  }, [activeSectionId]);

  const handleSectionClick = (event, id) => {
    event.preventDefault();
    setActiveSectionId(id);
    const container = contentRef.current;
    const target = document.getElementById(id);
    if (container && target) {
      const containerRect = container.getBoundingClientRect();
      const targetRect = target.getBoundingClientRect();
      const desiredTop = Math.max(
        container.scrollTop + (targetRect.top - containerRect.top),
        0
      );
      const maxTop = Math.max(
        container.scrollHeight - container.clientHeight,
        0
      );
      const nextTop = Math.min(desiredTop, maxTop);
      container.scrollTo({ top: nextTop, behavior: "smooth" });
    } else if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className={styles["individual-blog-section"]}>
      <div className={styles["individual-blog-banner-part"]}>
        <div className={styles["banner-left-right-part"]}>
          <div className={styles["banner-left-part"]}>
            <div className={styles["banner-left-image"]}>
              {heroImage ? (
                <img src={heroImage} alt={article?.title || "blog image"} />
              ) : (
                <div className={styles["blog-image-placeholder"]} />
              )}
            </div>
          </div>
          <div className={styles["banner-right-part"]}>
            <h6>Featured Blog</h6>
            <div className={styles["other-details"]}>
              <div className={styles["cirle-div"]}></div>
              <h5 className={styles["divider"]}>
                {article?.categories || "GMS"}
              </h5>
              {createdOn && <h5>{createdOn}</h5>}
            </div>
            <h2>{article?.title || "Blog"}</h2>
            {cleanMeta && <p>{cleanMeta}</p>}
          </div>
        </div>
      </div>
      <div className={styles["individual-blog-introduction-part"]}>
        <div className={styles["introduction-left-right-part"]}>
          <div className={styles["introduction-left-part"]}>
            {!hasIntroduction && <h5>Overview</h5>}
            {article?.categories && <h6>{article.categories}</h6>}
            {tocItems.length > 0 && (
              <div className={styles["section-toc"]}>
                <ul ref={tocRef}>
                  {tocItems.map((item) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className={
                          item.id === activeSectionId
                            ? styles.tocLinkActive
                            : styles.tocLink
                        }
                        onClick={(event) => handleSectionClick(event, item.id)}
                      >
                        {item.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div
            className={styles["introduction-right-part"]}
            ref={contentRef}
          >
            <div
              dangerouslySetInnerHTML={{
                __html: overviewWithIds,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndividualBlog;
