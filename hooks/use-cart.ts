import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"
import { toast } from "react-hot-toast"
import type { Product, CartItem } from "@/types"

interface CartStore {
  items: CartItem[];
  addItem: (data: Product) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  removeAll: () => void;
}

export const useCart = create(
  persist<CartStore>((set, get) => ({
    items: [],
    addItem: (data: Product) => {
      const currentItems = get().items
      const existingItem = currentItems.find((item) => item.id === data.id)

      if (existingItem) {
        toast("Item already in cart")
        return
      }

      set({ items: [...currentItems, { ...data, quantity: 1 }] })
      toast.success("Item added to cart")
    },
    removeItem: (id: string) => {
      set({ items: [...get().items.filter((item) => item.id !== id)] })
      toast.success("Item removed from cart")
    },
    updateQuantity: (id: string, quantity: number) => {
      const currentItems = get().items
      const updatedItems = currentItems.map((item) => 
        item.id === id ? { ...item, quantity } : item
      )
      set({ items: updatedItems })
    },
    removeAll: () => {
      set({ items: [] })
      toast.success("Cart cleared")
    }
  }), {
    name: "cart-storage",
    storage: createJSONStorage(() => localStorage)
  })
)

