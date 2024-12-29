import React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Category } from "@/types";


interface CategorySectionProps {
  label: string;
  title: string;
  data: Category[];
  renderItem: (item: Category) => React.ReactNode;
}

const CategorySection: React.FC<CategorySectionProps> = ({
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
          <div className="flex items-center space-x-2">
            <span className="block w-3 h-8 bg-red-500 rounded"></span>
            <h3 className="text-sm font-bold text-red-500">{label}</h3>
          </div>
        </div>
        <h2 className="mt-2 text-2xl font-semibold">{title}</h2>

        <div className="mt-6">
          <CarouselContent>
            {data.map((item, index) => (
              <CarouselItem key={item.id} className="md:basis-1/6 lg:basis-1/6">
                <div className="p-1">{renderItem(item)}</div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </div>
      </section>
    </Carousel>
  );
};

export default CategorySection;
