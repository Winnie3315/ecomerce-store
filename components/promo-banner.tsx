"use client";

import * as React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Product } from "@/types";


export function PromoBanner({products}: {products: Product[]}) {
  const [randomProduct, setRandomProduct] = React.useState(products[0]);
  const [timeLeft, setTimeLeft] = React.useState({
    hours: 23,
    days: 5,
    minutes: 59,
    seconds: 35,
  });

  const router = useRouter();

  React.useEffect(() => {
    const randomIndex = Math.floor(Math.random() * products.length);
    setRandomProduct(products[randomIndex]);

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        }
        if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        }
        if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleBuyNow = () => {
    router.push(`/product/${randomProduct.id}`);
  };

  return (
    <div className="relative overflow-hidden rounded-xl bg-black text-white">
      <div className="container relative z-20 grid gap-8 px-4 py-12 md:grid-cols-2">
        <div className="space-y-4">
          <span className="text-[#00FF66]">Categories</span>
          <h2 className="text-4xl font-bold tracking-tight">
            {randomProduct.name}
          </h2>
          <p className="text-lg font-medium">
            Price: <span className="text-[#00FF66]">${randomProduct.price}</span>
          </p>
          <div className="grid grid-cols-4 gap-4">
            {Object.entries(timeLeft).map(([key, value]) => (
              <div
                key={key}
                className="flex aspect-square flex-col items-center justify-center rounded-full bg-white/10 p-2"
              >
                <span className="text-lg font-bold">{value}</span>
                <span className="text-xs capitalize">{key}</span>
              </div>
            ))}
          </div>
          <Button
            className="bg-[#00FF66] text-black hover:bg-[#00FF66]/90"
            onClick={handleBuyNow}
          >
            Buy Now!
          </Button>
        </div>
        <div className="relative hidden md:block w-full h-full">
          <Image
            src={randomProduct.images[0].url}
            alt={randomProduct.name}
            width={500}
            height={500}
            className="object-contain w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}
