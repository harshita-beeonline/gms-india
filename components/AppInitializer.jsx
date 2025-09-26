"use client";

import { useEffect } from "react";
import { useAppStore } from "../store";

const AppInitializer = () => {
  const fetchCategoryTree = useAppStore((state) => state.fetchCategoryTree);

  useEffect(() => {
    fetchCategoryTree();
  }, [fetchCategoryTree]);

  return null;
};

export default AppInitializer;
