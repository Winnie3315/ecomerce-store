'use client'

import * as React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ProductCard } from './product-card'
import { Product } from '@/types'
// import { ProductCard } from './product-card'


export function FlashSales({ data }: { data: Product[] }) {

    return (
        <section className="space-y-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="space-y-2">
                    <div className="inline-flex items-center rounded-lg bg-red-100 px-3 py-1 text-sm text-red-500">
                        Today's
                    </div>
                    <h2 className="text-2xl font-bold tracking-tight">Flash Sales</h2>
                </div>
                <div className="flex items-center gap-4">
                    <div className="flex gap-2">
                        <Button variant="outline" size="icon">
                            <ChevronLeft className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="icon">
                            <ChevronRight className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {data.map((product) => (
                    <ProductCard key={product.id} data={product} />
                ))}
            </div>
        </section>
    )
}
