"use client"

import { Button } from '@/components/ui/button'
import { useWishlist } from '@/hooks/use-wishlist';



export function WishlistHeader() {
  const { items, addAllToCart } = useWishlist();
  return (
    <div className="mb-8 flex items-center justify-between">
      <h1 className="text-2xl font-bold">
        Wishlist ({items.length})
      </h1>
      <Button onClick={addAllToCart} variant="outline">
        Move All To Bag
      </Button>
    </div>
  )
}

