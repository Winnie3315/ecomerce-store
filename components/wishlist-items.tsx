'use client';

import Image from 'next/image';
import { Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useWishlist } from '@/hooks/use-wishlist';

export function WishlistItems() {
  const { items, removeItem, addToCart } = useWishlist();

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => {
        const oldPrice = parseFloat(item.price)
        const newPrice = item.discount
          ? oldPrice - (oldPrice * item.discount) / 100
          : oldPrice;

        return (
          <div key={item.id} className="group relative">
            <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
              {item.discount && (
                <span className="absolute left-2 top-2 rounded bg-red-500 px-2 py-1 text-xs text-white">
                  -{item.discount}%
                </span>
              )}
              <Image
                src={item.images[0].url}
                alt={item.name}
                fill
                className="object-cover"
              />
              <Button
                onClick={() => removeItem(item.id)}
                variant="ghost"
                size="icon"
                className="absolute right-2 top-2 h-8 w-8 rounded-full bg-white shadow-sm"
              >
                <Trash2 className="h-4 w-4" />
                <span className="sr-only">Remove from wishlist</span>
              </Button>
            </div>
            <div className="mt-4 space-y-2">
              <h3 className="font-medium">{item.name}</h3>
              <div className="flex items-center gap-2">
                <span className="text-lg font-medium text-red-500">
                  ${newPrice.toFixed(2)}
                </span>
                {item.discount && (
                  <span className="text-sm text-muted-foreground line-through">
                    ${oldPrice.toFixed(2)}
                  </span>
                )}
              </div>
            </div>
            <Button
              onClick={() => addToCart(item.id)}
              className="mt-4 w-full bg-black text-white hover:bg-black/90"
            >
              Add To Cart
            </Button>
          </div>
        );
      })}
    </div>
  );
}
