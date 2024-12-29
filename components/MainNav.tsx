"use client"

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';



export default function MainNav({
    className,
    ...props
}: React.HTMLAttributes<HTMLElement>) {
    const pathname = usePathname();

    const routes = [
        {
            href: `/`,
            label: "Home",
            active: pathname === `/`
        },
        {
            href: `/contact`,
            label: "Contact",
            active: pathname === `/contact`
        },
        {
            href: `/about`,
            label: "About",
            active: pathname === `/about`
        },
        {
            href: `/sign-up`,
            label: "Sign Up",
            active: pathname === `/sign-up`
        },
    ]

    return (
        <nav className={cn("flex items-center gap-5 space-x-4 lg:space-x-6", className)}>
            {routes.map((route) => (
                <Link
                    key={route.href}
                    href={route.href}
                    className={cn(
                        "text-sm font-medium transition-colors hover:text-primary",
                        route.active ? "text-black dark:text-white" : "text-gray-500"
                    )}
                >
                    {route.label}
                </Link>
            ))}
        </nav>

    )
}