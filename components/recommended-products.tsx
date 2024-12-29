'use client'

import { Button } from '@/components/ui/button'
import { Product } from '@/types'
import { ProductCard } from './product-card'
import Link from 'next/link'

export function RecommendedProducts({data} : {data: Product[]}) {
  return (
    <section className="mt-16">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <span className="text-red-500">Just For You</span>
          <h2 className="text-2xl font-bold">Recommended</h2>
        </div>
        <Button variant="outline"><Link href={"/"}>See All</Link></Button>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {data.map((product) => (
          <ProductCard key={product.id} data={product}/>
        ))}
      </div>
    </section>
  )
}