import { gql } from "graphql-request";

export const getPageHero = gql`
  query GetPageHero($page: String!) {
    Page_Heros(filter: { page: { _eq: $page }, active: { _eq: true } }) {
      id
      image {
        filename_download
        id
      }
      video {
        id
      }
      page
    }
  }
`;

export const getAllSlugs = gql`
  query GetAllSlugs {
    blog_article(sort: ["-created_on"]) {
      id
      slug
      active
    }
  }
`;

export const getBlogs = gql`
  query BlogArticle($page: Int!) {
    blog_article(
      filter: { active: { _eq: true } }
      page: $page
      limit: 9
      sort: ["-created_on"]
    ) {
      id
      created_on
      active
      title
      slug
      categories
      image
      cover_image {
        id
        filename_download
      }
    }
  }
`;

export const getArticle = gql`
  query BlogArticle($slug: String!) {
    blog_article(
      filter: {
        slug: {
          _eq: $slug
        }
      }
    ) {
      id
      created_on
      active
      title
      slug
      image
      cover_image {
        id
        filename_download
      }
      overview
      meta_description
    }
  }
`;

export class BackendCategoryTree {
  constructor(list) {
    this.tree = list;
  }

  getNode(slug) {
    return this.tree.find((item) => item.slug === slug);
  }

  getChildrenIds(slug) {
    const collected = [];
    const node = this.getNode(slug);
    if (!node || !Array.isArray(node.category_self_rel)) {
      return collected;
    }

    node.category_self_rel.forEach((child) => {
      collected.push(child.slug);
      const childNode = this.getNode(child.slug);
      if (childNode && childNode.category_self_rel.length > 0) {
        this.getChildrenIds(child.slug).forEach((nestedSlug) => {
          collected.push(nestedSlug);
        });
      }
    });

    return collected;
  }
}

export const SearchGQL = gql`
  query Search($q: String!) {
    backend_product(
      search: $q
      limit: 10
      filter: { active: { _eq: true } }
    ) {
      id
      name
      meta_description
      image
      slug
      manufacturer_id {
        name
      }
      category_id {
        name
      }
      image_v2 {
        id
      }
      data_sheet_v2 {
        id
      }
      v2_product
    }
    blog_article(search: $q, limit: 10) {
      id
      title
      slug
      image
    }
  }
`;

export const getAllCategories = gql`
  query GetAllCategories {
    backend_category(limit: -1, sort: ["slug"]) {
      id
      name
      description
      slug
      category_self_rel {
        id
        name
        slug
        category_self_rel {
          id
          name
          slug
        }
      }
      cat_rel_key {
        id
        name
        slug
      }
    }
  }
`;

export const getCategoryPageGQL = gql`
  query GetCategoryPage($slug: String!, $page: Int!, $slugs: [String!]) {
    backend_product(
      filter: {
        category_id: { slug: { _in: $slugs } }
        active: { _eq: true }
      }
      page: $page
      limit: 24
      sort: ["name"]
    ) {
      id
      name
      image
      slug
      meta_description
      v2_product
      image_v2 {
        id
      }
      manufacturer_id {
        name
        image
        image_v2 {
          id
        }
        url
      }
    }
    backend_category(filter: { slug: { _eq: $slug } }) {
      id
      name
      description
      slug
      category_self_rel {
        id
        name
        slug
        category_self_rel {
          id
          name
          slug
        }
      }
      cat_rel_key {
        id
        name
        slug
      }
    }
  }
`;

export const getCategoryPage = gql`
  query GetCategoryPage($slug: String!) {
    backend_category(filter: { slug: { _eq: $slug } }) {
      id
      name
      slug
      category_self_rel {
        id
        name
        slug
        category_self_rel {
          id
          name
          slug
        }
      }
    }
  }
`;

export const GetProductGQL = gql`
  query GetProduct($slug: String!) {
    backend_product(filter: { slug: { _eq: $slug } }) {
      id
      name
      image
      slug
      overview
      applications
      technical_specs
      product_url
      data_sheet
      seo_keywords
      meta_description
      category_id {
        id
        name
        slug
      }
      manufacturer_id {
        id
        name
        image
        url
        image_v2 {
          id
        }
        image_is_v2
      }
      active
      v2_product
      image_v2 {
        id
      }
      data_sheet_v2 {
        id
      }
    }
  }
`;

export const getRelatedProductsGql = gql`
  query RelatedProducts(
    $title: String!
    $category: String!
    $id: GraphQLStringOrFloat!
  ) {
    backend_product(
      filter: {
        id: { _neq: $id }
        category_id: { name: { _eq: $category } }
      }
      search: $title
      limit: 4
    ) {
      id
      name
      image
      slug
      meta_description
      v2_product
      image_v2 {
        id
      }
      manufacturer_id {
        name
        image
        image_v2 {
          id
        }
        url
      }
    }
  }
`;

export const getProductSlugList = gql`
  query GetProductSlugList {
    backend_product(limit: -1, sort: ["slug"]) {
      id
      slug
    }
  }
`;

export const getResourceSlugList = gql`
  query GetResourceSlugList {
    blog_article(sort: ["-created_on"]) {
      id
      slug
    }
  }
`;

export const getAcceleratePage = gql`
  query GetAcceleratePage {
    accelerate_page(limit: 1) {
      id
      hero_heading
      hero_description
      hero_image {
        id
      }
      sections {
        id
        title
        description
        image {
          id
        }
      }
    }
  }
`;

export const CreateEnquiryGQL = gql`
  mutation CreateEnquiry(
    $name: String!
    $email: String!
    $phone: String!
    $cart: JSON
  ) {
    create_backend_enquiry_item(
      data: {
        name: $name
        email: $email
        phone: $phone
        preferred_mode_of_contact: "EMAIL"
        cart: $cart
      }
    )
  }
`;
