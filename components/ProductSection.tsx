import { Product } from "@/types";
import React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface ProductSectionProps {
  label: string;
  title: string;
  data: Product[]
  renderItem: (item: Product) => React.ReactNode;
}

const ProductSection: React.FC<ProductSectionProps> = ({
  label,
  title,
  data,
  renderItem,
}) => {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="py-6 max-w-[1280px] px-8 mx-auto"
    >
      <section>
        <div className="flex items-center justify-between">
          <CarouselPrevious className="mr-4" />
          <div className="flex items-center space-x-2">
            <span className="block w-3 h-8 bg-red-500 rounded"></span>
            <h3 className="text-sm font-bold text-red-500">{label}</h3>
          </div>
          <CarouselNext className="ml-4" />
        </div>
        <h2 className="mt-2 text-2xl font-semibold">{title}</h2>

        <div className="mt-6">
          <CarouselContent>
            {data.map((item, index) => (
              <CarouselItem key={index} className="md:basis-1/4 lg:basis-1/4">
                <div className="p-1">{renderItem(item)}</div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </div>
      </section>
    </Carousel>
  );
};

export default ProductSection;
