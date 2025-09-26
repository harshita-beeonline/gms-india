"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import OGP from "../../components/OGP";
import { useAppStore } from "../../store";

const CartItem = ({ item, index }) => {
  const [note, setNote] = useState("");
  const [loading, setLoading] = useState(false);
  const appStore = useAppStore();

  const removeFromCart = (event, id) => {
    event.preventDefault();
    appStore.removeFromCart(id);
  };

  const handleNoteSubmit = (event, id) => {
    event.preventDefault();
    appStore.addNote(id, note);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    setNote(item.note || "");
  }, [item.note]);

  return (
    <div className="shadow-md border border-gms rounded-md p-4">
      <div className="flex lg:flex-row flex-col justify-between">
        <Link
          href={`/product/${item.slug}`}
          className="text-2xl hover:text-gms block my-auto"
        >
          {index + 1}.{item.name}
        </Link>
        <img width={100} className="block" alt={item.name} src={item.image} />
      </div>
      <form
        onSubmit={(event) => handleNoteSubmit(event, item.id)}
        className="flex flex-col lg:flex-row gap-x-3 justify-between mt-2"
      >
        <div>
          <label>Write your note regarding the product here</label>
          <textarea
            required
            rows={4}
            name="note"
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            value={note}
            onChange={(event) => {
              setNote(event.target.value);
            }}
          />
        </div>
        <div className="flex flex-col justify-end">
          <button
            onClick={(event) => removeFromCart(event, item.id)}
            className="bg-red-300 hover:bg-red-400 py-2 px-2 inline-block rounded-md"
          >
            Remove Product
          </button>
          <button
            type="submit"
            className={`inline-block mt-2 py-3 px-2 rounded-md text-slate-200  ${
              loading ? "bg-green-600" : "hover:bg-indigo-900 bg-gms"
            }`}
          >
            {loading ? "Submitted" : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

const CartPage = () => {
  const appStore = useAppStore();
  const cart = appStore.cartItems || [];

  if (cart.length === 0) {
    return (
      <div className="lg:container mx-auto lg:p-8 p-4">
        <p className="text-center text-4xl block text-black">
          There are no items in cart.
        </p>
      </div>
    );
  }

  return (
    <div>
      <OGP title="Cart" image="" />
      <div className="lg:container mx-auto lg:p-8 p-4">
        <h1 className="text-gms text-4xl">Cart</h1>
        <p className="text-gray-700 text-lg">Here are the items in your cart.</p>

        <div className="grid lg:grid-cols-3 grid-cols-1 gap-3 mt-6">
          {cart.map((cartItem, index) => (
            <CartItem item={cartItem} index={index} key={cartItem.id} />
          ))}
        </div>
        <Link
          href="/submit-cart"
          className="bg-green-700 hover:bg-green-800 hover:shadow-md p-4 inline-block mt-6 rounded-md text-white"
        >
          Submit cart
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5 inline ml-3"
          >
            <path d="M3.105 2.289a.75.75 0 00-.826.95l1.414 4.925A1.5 1.5 0 005.135 9.25h6.115a.75.75 0 010 1.5H5.135a1.5 1.5 0 00-1.442 1.086l-1.414 4.926a.75.75 0 00.826.95 28.896 28.896 0 0015.293-7.154.75.75 0 000-1.115A28.897 28.897 0 003.105 2.289z" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default CartPage;
