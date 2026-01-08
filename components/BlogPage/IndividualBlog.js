import React from "react";
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
  return d.toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const IndividualBlog = ({ article }) => {
  const heroImageId = article?.cover_image?.id || article?.image;
  const heroImage = heroImageId ? getAsset(heroImageId, 90, 1200) : null;
  const createdOn = formatDate(article?.created_on);
  const cleanMeta = sanitizeEditorHtml(article?.meta_description || "");
  const cleanOverview = sanitizeEditorHtml(
    article?.overview || "<p>Content coming soon.</p>"
  );

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
            <h5>Overview</h5>
            {article?.categories && <h6>{article.categories}</h6>}
          </div>
          <div className={styles["introduction-right-part"]}>
            <div
              dangerouslySetInnerHTML={{
                __html: cleanOverview,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndividualBlog;
