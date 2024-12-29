"use client"

import Image from "next/image";
import { Heart, Eye } from "lucide-react";
import { Product } from "@/types";
import { useRouter } from "next/navigation";


export default function ProductCard({ data }: { data: Product }) {
  const productImage = data?.images?.[0]?.url || "/default-image.jpg";

  const router = useRouter()

  const hanleClick = () => {
    router.push(`/products/${data?.id}`)
  }

  return (
    <div onClick={hanleClick} className="max-w-[270px] rounded-lg transition-transform duration-300 hover:scale-105 hover:shadow-lg">
      <div className="bg-[#F5F5F5]">
        <div className="relative p-4">
          <div className="flex justify-center items-center">
            <Image
              src={productImage}
              alt={data?.name || "Product"}
              width={190}
              height={180}
              className="rounded-md object-contain h-[180px] transition-transform duration-300 hover:scale-110"
            />
          </div>

          <div className="absolute top-4 right-4 space-y-2">
            <button className="flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors duration-300">
              <Heart className="w-5 h-5 text-gray-500 hover:text-red-500" />
            </button>
            <button className="flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors duration-300">
              <Eye className="w-5 h-5 text-gray-500 hover:text-blue-500" />
            </button>
          </div>
        </div>
      </div>

      <div className="px-4 pb-4">
        <h2 className="text-lg font-medium text-gray-800">
          {data?.name || "No name available"}
        </h2>
        <p className="text-xl font-bold text-red-600">
          ${data?.price || "N/A"}
        </p>
      </div>
    </div>
  );
}
