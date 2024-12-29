"use client";

import * as React from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Billboard as BillboardType, Category } from "@/types";

export const revalidate = 0;

interface BillboardProps {
    billboards: BillboardType[];
    categories: Category[];
}

const Billboard: React.FC<BillboardProps> = ({ billboards, categories }) => {
    const [currentSlide, setCurrentSlide] = React.useState(0);

    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-[240px_1fr]">
                {/* Categories */}
                <div className="hidden md:block">
                    <nav className="flex flex-col space-y-1">
                        {categories.map((category) => (
                            <Link
                                key={category.id}
                                href={`/category/${category.id}`}
                                className="flex items-center justify-between rounded-lg px-3 py-2 text-sm transition-colors hover:bg-accent"
                            >
                                {category.name}
                                <ChevronRight className="h-4 w-4" />
                            </Link>
                        ))}
                    </nav>
                </div>

                {/* Billboard Slider */}
                <div className="relative overflow-hidden rounded-lg bg-black" style={{backgroundImage: `url(${billboards[currentSlide]?.imageUrl})`,
            objectFit: `cover`
            }}>
                    <div className="relative aspect-[16/9] md:aspect-[21/9]">
                        <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-2">
                            <div className="z-10 flex flex-col justify-center p-6 text-white md:p-8 lg:p-12">
                                <h1 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
                                    {billboards[currentSlide]?.label}
                                </h1>
                                <Button
                                    variant="outline"
                                    className="mt-6 w-fit border-white text-white hover:bg-white hover:text-black"
                                >
                                    Shop Now
                                </Button>
                            </div>
                            <div className="relative hidden md:block">
                                {/* <Image
                                    src={billboards[currentSlide]?.imageUrl}
                                    alt={billboards[currentSlide]?.label}
                                    fill
                                    className="object-contain"
                                    priority
                                /> */}
                            </div>
                        </div>
                    </div>
                    <div className="absolute z-50 bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
                        {billboards.map((_, index) => (
                            <button
                                key={index}
                                className={`h-2 w-2 rounded-full ${currentSlide === index ? "bg-white" : "bg-white/50"
                                    }`}
                                onClick={() => setCurrentSlide(index)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Billboard;
