import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import dayjs from "dayjs";
import { frontendClient } from "../lib/graphql-clients";
import { getAllCategories } from "../components/graphql";

const addToArrayIfDoesntExist = (list, newItem) => {
  const existingItem = list.find((item) => item.id === newItem.id);
  if (existingItem) {
    return list;
  }
  return [...list, newItem];
};

const addNoteToItem = (list, id, note) =>
  list.map((item) => (item.id === id ? { ...item, note } : item));

const removeFromArray = (list, id) => list.filter((item) => item.id !== id);

export const useAppStore = create(
  devtools(
    persist(
      (set) => ({
        cartItems: [],
        categoryTree: [],
        categoryTimestamp: undefined,
        categoryTreeDisplay: "equipment",
        addToCart: (item) =>
          set((state) => ({
            cartItems: addToArrayIfDoesntExist(state.cartItems, item),
          })),
        removeFromCart: (id) =>
          set((state) => ({
            cartItems: removeFromArray(state.cartItems, id),
          })),
        clearCart: () => set(() => ({ cartItems: [] })),
        addNote: (id, note) => {
          set((state) => ({
            cartItems: addNoteToItem(state.cartItems, id, note),
          }));
        },
        fetchCategoryTree: async () => {
          const { backend_category } = await frontendClient.request(
            getAllCategories
          );
          set({
            categoryTree: backend_category,
            categoryTimestamp: dayjs().toISOString(),
          });
        },
        categoryTreeDisplayChange: (value) => set({ categoryTreeDisplay: value }),
      }),
      {
        name: "gms-store-v2",
      }
    ),
    {
      enabled: process.env.NEXT_PUBLIC_NODE_ENV === "dev",
    }
  )
);
