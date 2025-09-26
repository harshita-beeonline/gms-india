export const getAsset = (id, quality = 80, width = 800) => {
  let url = `${process.env.NEXT_PUBLIC_DIRECTUS_FRONTEND_URL}/assets/${id}`;
  url += `?width=${width}`;
  return url;
};

export const getLegacyAsset = (path) =>
  `https://gms-44a3.s3.ap-south-1.amazonaws.com/media/${path}`;
