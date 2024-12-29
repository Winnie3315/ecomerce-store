import Image from 'next/image'
import { Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'

const products = [
  {
    name: 'The north coat',
    price: 260,
    oldPrice: 350,
    rating: 5,
    image: '/placeholder.svg',
  },
  {
    name: 'Gucci duffle bag',
    price: 960,
    oldPrice: 1160,
    rating: 4,
    image: '/placeholder.svg',
  },
  {
    name: 'RGB liquid CPU Cooler',
    price: 160,
    oldPrice: 170,
    rating: 4,
    image: '/placeholder.svg',
  },
  {
    name: 'Small bookshelf',
    price: 360,
    oldPrice: null,
    rating: 5,
    image: '/placeholder.svg',
  },
]

export function BestSelling() {
  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold tracking-tight">Best Selling Products</h2>
        </div>
        <Button variant="outline">View All</Button>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <div key={product.name} className="group relative">
            <div className="aspect-square overflow-hidden rounded-xl border bg-muted">
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={300}
                className="object-cover transition-transform group-hover:scale-105"
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 top-2"
              >
                <Heart className="h-5 w-5" />
              </Button>
            </div>
            <div className="mt-2 space-y-1">
              <h3 className="font-medium">{product.name}</h3>
              <div className="flex gap-2">
                <span className="text-primary">${product.price}</span>
                {product.oldPrice && (
                  <span className="text-muted-foreground line-through">
                    ${product.oldPrice}
                  </span>
                )}
              </div>
              <div className="flex text-yellow-400">
                {Array.from({ length: product.rating }).map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

