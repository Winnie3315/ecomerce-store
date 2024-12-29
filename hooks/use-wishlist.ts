import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { toast } from "react-hot-toast";
import type { Product, WishlistItem } from "@/types";
import { useCart } from "./use-cart";

interface WishlistStore {
  items: WishlistItem[];
  addItem: (data: Product) => void;
  removeItem: (id: string) => void;
  isInWishlist: (id: string) => boolean;
  addToCart: (id: string) => void;
  addAllToCart: () => void;
}

export const useWishlist = create(
  persist<WishlistStore>(
    (set, get) => ({
      items: [],
      /**
       * Добавить товар в вишлист
       */
      addItem: (data: Product) => {
        const currentItems = get().items;
        const exists = get().isInWishlist(data.id);

        if (exists) {
          toast("Item already in wishlist");
          return;
        }

        set({ items: [...currentItems, { ...data }] });
        toast.success("Item added to wishlist");
      },
      /**
       * Удалить товар из вишлиста
       */
      removeItem: (id: string) => {
        const currentItems = get().items;
        const updatedItems = currentItems.filter((item) => item.id !== id);

        if (updatedItems.length === currentItems.length) {
          toast.error("Item not found in wishlist");
          return;
        }

        set({ items: updatedItems });
        toast.success("Item removed from wishlist");
      },
      /**
       * Проверить, есть ли товар в вишлисте
       */
      isInWishlist: (id: string) => {
        return get().items.some((item) => item.id === id);
      },
      /**
       * Добавить товар из вишлиста в корзину
       */
      addToCart: (id: string) => {
        const wishlistItem = get().items.find((item) => item.id === id);

        if (!wishlistItem) {
          toast.error("Item not found in wishlist");
          return;
        }

        useCart.getState().addItem(wishlistItem);
        get().removeItem(id); // Удаляем из вишлиста после добавления в корзину
        toast.success("Item added to cart and removed from wishlist");
      },
      /**
       * Добавить все товары из вишлиста в корзину
       */
      addAllToCart: () => {
        const wishlistItems = get().items;

        if (wishlistItems.length === 0) {
          toast.error("No items in wishlist to add to cart");
          return;
        }

        wishlistItems.forEach((item) => {
          useCart.getState().addItem(item);
        });

        set({ items: [] }); // Очищаем вишлист
        toast.success("All items added to cart and wishlist cleared");
      },
    }),
    {
      name: "wishlist-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
