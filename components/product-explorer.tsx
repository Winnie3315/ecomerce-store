'use client'

import * as React from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Product } from '@/types'
import { useRouter } from 'next/navigation'
import { useCart } from '@/hooks/use-cart'


export function ProductExplorer({ data }: { data: Product[]}) {
  const scrollContainerRef = React.useRef<HTMLDivElement>(null)
  const router = useRouter()
  const cart = useCart()

  const handleClick = (id: string) => {
    router.push(`/product/${id}`)
  }

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current
    if (!container) return

    const scrollAmount = direction === 'left' ? -400 : 400
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' })
  }

  const onCartAdd = (event: React.MouseEvent<HTMLButtonElement>, product: Product) => {
    event.stopPropagation();
  
    cart.addItem(product);
  };
  

  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold tracking-tight">Explore Our Products</h2>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => scroll('left')}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => scroll('right')}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide"
      >
        {data.map((product) => (
          <div
            onClick={() => handleClick(product?.id)}
            key={product.name}
            className="flex-none w-[250px]"
          >
            <div className="aspect-square overflow-hidden rounded-xl border bg-muted">
              <Image
                src={product.images[0]?.url}
                alt={product.name}
                width={250}
                height={250}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="mt-2 space-y-1">
              <h3 className="font-medium">{product.name}</h3>
              <p className="text-primary">${product.price}</p>
            </div>
            <Button onClick={(event) => onCartAdd(event, product)} className="mt-2 w-full">Add to Cart</Button>
          </div>
        ))}
      </div>
    </section>
  )
}

