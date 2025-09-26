import { DocumentNode } from "graphql";

export interface IGetPageHeroAsset {
  id: string;
  filename_download?: string;
}

export interface IGetPageHero {
  id: string;
  page: string;
  image: IGetPageHeroAsset | null;
  video: IGetPageHeroAsset | null;
}

export declare const getPageHero: DocumentNode;
export declare const getAllSlugs: DocumentNode;
export declare const getBlogs: DocumentNode;
export declare const getArticle: DocumentNode;
export declare const SearchGQL: DocumentNode;
export declare const getAllCategories: DocumentNode;
export declare const getCategoryPageGQL: DocumentNode;
export declare const getCategoryPage: DocumentNode;
export declare const GetProductGQL: DocumentNode;
export declare const getRelatedProductsGql: DocumentNode;
export declare const getProductSlugList: DocumentNode;

export declare class BackendCategoryTree {
  constructor(list: Array<{ slug: string; category_self_rel?: any[] }>);
  getNode(slug: string): any;
  getChildrenIds(slug: string): string[];
}
