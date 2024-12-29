"use client";

import Image from "next/image";
import { Heart, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Product } from "@/types";
import { useRouter } from "next/navigation";
import { useCart } from "@/hooks/use-cart";
import { useWishlist } from "@/hooks/use-wishlist";

interface ProductCardProps {
  data: Product;
}

export function ProductCard({ data }: ProductCardProps) {
  const router = useRouter();
  const cart = useCart();
  const wishlist = useWishlist();

  const handleClick = () => {
    router.push(`/product/${data?.id}`);
  };

  const onCartAdd = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    cart.addItem(data);
  };

  const toggleWishlist = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    if (wishlist.isInWishlist(data.id)) {
      wishlist.removeItem(data.id);
    } else {
      wishlist.addItem(data);
    }
  };

  const oldPrice = Number(data?.price);
  const discountValue = Number(data?.discount);
  const newPrice =
    discountValue > 0 ? oldPrice - (oldPrice * discountValue) / 100 : oldPrice;

  const isInWishlist = wishlist.isInWishlist(data.id);

  return (
    <div className="group relative" onClick={handleClick}>
      <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
        {data?.discount && (
          <span className="absolute z-50 left-2 top-2 rounded bg-red-500 px-2 py-1 text-xs text-white">
            {data?.discount}%
          </span>
        )}
        <Image
          src={data?.images?.[0]?.url || "/default-image.jpg"}
          alt={data?.name || "image"}
          fill
          className="object-cover object-center"
        />
        <div className="absolute right-2 top-2 flex flex-col gap-2">
          <Button
            size="icon"
            variant="secondary"
            className={`h-8 w-8 ${isInWishlist ? "text-red-500" : ""}`}
            onClick={toggleWishlist}
          >
            <Heart className={`h-4 w-4 ${isInWishlist ? "fill-current" : ""}`} />
          </Button>
          <Button
            size="icon"
            variant="secondary"
            className="h-8 w-8"
            onClick={(e) => e.stopPropagation()}
          >
            <Eye className="h-4 w-4" />
          </Button>
        </div>
        <div className="absolute bottom-0 left-0 right-0 translate-y-full bg-black p-2 text-white transition-transform group-hover:translate-y-0">
          <Button variant="secondary" className="w-full" onClick={onCartAdd}>
            Add to Cart
          </Button>
        </div>
      </div>
      <div className="mt-4 space-y-2">
        <h3 className="font-medium">{data?.name}</h3>
        <div className="flex items-center gap-2">
          <span className="text-lg font-medium text-red-500">${newPrice}</span>
          {oldPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ${oldPrice}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
