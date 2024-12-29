"use client"

import { cn } from '@/lib/utils';
import { Category } from '@/types';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

interface CategoryNavProps {
    data: Category[]
}

const CategoryNav: React.FC<CategoryNavProps> = ({ data }) => {
    const pathname = usePathname()

    const routes = data.map((route) => ({
        href: `/categories/${route.id}`,
        label: route.name,
        active: pathname === `/categories/${route.id}`
    }))

    return (
        <nav className="w-1/4 pr-4">
            {routes.map((route, index) => (
                <Link
                    href={route.href}
                    key={index}
                    className={cn(
                        "text-sm font-medium transition-colors hover:text-black flex justify-between items-center py-2",
                        route.active ? "text-black font-semibold" : "text-neutral-500"
                    )}
                >
                    {route.label}
                </Link>
            ))}
        </nav>
    );
};

export default CategoryNav;