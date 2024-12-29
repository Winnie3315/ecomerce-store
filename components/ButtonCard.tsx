"use client"

import { Category } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface ButtonCardProps {
    data: Category;
}

const ButtonCard: React.FC<ButtonCardProps> = ({ data }) => {
    const imageUrl = data?.imageUrl;
    const pathname = usePathname();

    const route = {
        href: `/category/${data.id}`,
        label: data.name,
        active: pathname === `/category/${data.id}`,
    };

    return (
        <Link href={route.href}>
            <button className="flex flex-col items-center justify-center w-40 h-40 border border-gray-300 rounded-lg bg-white text-black hover:bg-red-500 hover:text-white transition duration-300">
                <Image
                    src={imageUrl}
                    alt={`${data?.name} icon`}
                    width={48}
                    height={48}
                />
                <span className="mt-2 font-semibold">{data?.name}</span>
            </button>
        </Link>
    );
};

export default ButtonCard;
