"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useAppStore } from "../store";
import { getAsset, getLegacyAsset } from "./utils";

const ImageLogic = ({ v2_image, v2_product, name, image }) => {
  if (v2_product) {
    if (v2_image != null) {
      return (
        <img
          alt={name}
          className="block mt-auto max-h-[200px] mx-auto"
          src={getAsset(v2_image)}
        />
      );
    } else {
      return (
        <img
          alt={name}
          className="block mt-auto max-h-[200px] mx-auto"
          src={
            "https://gms-backend.centauri-tech.com/assets/f9d2fe8d-3ac1-433e-aaf8-9a8db30b366f"
          }
        />
      );
    }
  }
  return (
    <img
      alt={name}
      className="block mt-auto max-h-[200px] mx-auto"
      src={`https://gms-44a3.s3.ap-south-1.amazonaws.com/media/${image}`}
    />
  );
};

const ProductCard = (props) => {
  const appStore = useAppStore();
  const linkBase = props.linkPrefix || "/product";
  const addToCart = () => {
    appStore.addToCart({
      id: props.id,
      name: props.name,
      slug: props.slug,
      image: getLegacyAsset(props.image),
      v2_product: props.v2_product,
    });
  };
  return (
    <motion.div
      initial={{ opacity: 0.3, translateY: 70 }}
      animate={{ opacity: 1, translateY: 0, transition: { duration: 0.6 } }}
      className={`p-10 shadow-md ${props.className} hover:shadow-xl flex flex-col justify-end gap-y-5 rounded-md`}
    >
      <div>
        <ImageLogic
          image={props.image}
          v2_product={props.v2_product}
          v2_image={props.image_v2 ? props.image_v2.id : null}
          name={props.name}
        />
      </div>
      <div>
        <Link
          href={`${linkBase}/${props.slug}`}
          className="text-xl font-bs text-center border-b border-black pb-2 block"
        >
          {props.name}
        </Link>
        <p>
          {props.meta_description
            ? props.meta_description.substring(0, 75)
            : ""}
        </p>
      </div>
      <div className="flex flex-col gap-y-2">
        <Link
          href={`${linkBase}/${props.slug}`}
          className="block rounded-full bg-[#4b8bf5] p-2 text-white text-center hover:bg-sky-700 "
        >
          View Product
        </Link>
        <button
          onClick={addToCart}
          className={`block rounded-full p-2 text-center ${
            appStore.cartItems.find((i) => i.id === props.id)
              ? "bg-sky-[#4b8bf5] cursor-text hover:bg-sky-700 text-gray-700"
              : "bg-[#4b8bf5] hover:bg-sky-700  text-white"
          } `}
        >
          {appStore.cartItems.find((i) => i.id === props.id)
            ? "Item in Cart"
            : "Add to Cart"}
        </button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
