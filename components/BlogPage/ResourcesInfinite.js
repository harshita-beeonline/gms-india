"use client";

import { useEffect, useRef, useState } from "react";
import BlogCards from "./BlogCards";

const PAGE_LIMIT = 9;

const ResourcesInfinite = ({ initialArticles = [], initialPage = 1 }) => {
  const [articles, setArticles] = useState(initialArticles);
  const [page, setPage] = useState(initialPage);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(
    (initialArticles || []).length >= PAGE_LIMIT
  );
  const sentinelRef = useRef(null);

  useEffect(() => {
    if (!hasMore || loading) {
      return;
    }

    const node = sentinelRef.current;
    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          void loadMore();
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [hasMore, loading, page]);

  const loadMore = async () => {
    if (loading) {
      return;
    }

    const nextPage = page + 1;
    setLoading(true);

    try {
      const response = await fetch(`/api/blogs?page=${nextPage}`);
      if (!response.ok) {
        throw new Error(`Failed to load page ${nextPage}`);
      }

      const data = await response.json();
      const nextArticles = Array.isArray(data?.articles) ? data.articles : [];

      setArticles((prev) => {
        const existing = new Set(
          prev.map((item) => item?.id || item?.slug).filter(Boolean)
        );
        const merged = [...prev];
        nextArticles.forEach((item) => {
          const key = item?.id || item?.slug;
          if (key && !existing.has(key)) {
            existing.add(key);
            merged.push(item);
          }
        });
        return merged;
      });

      setPage(nextPage);
      if (nextArticles.length < PAGE_LIMIT) {
        setHasMore(false);
      }
    } catch (error) {
      console.error("[resources] failed to load more blogs:", error?.message);
      setHasMore(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div suppressHydrationWarning>
      <BlogCards articles={articles} basePath="/resources" />
      <div ref={sentinelRef} />
      {loading && (
        <p style={{ textAlign: "center", margin: "24px 0" }}>
          Loading more resources...
        </p>
      )}
    </div>
  );
};

export default ResourcesInfinite;
