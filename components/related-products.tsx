import { ProductCard } from '@/components/product-card'
import { Product } from '@/types'

export function RelatedProducts({data}: {data: Product[]}) {
  return (
    <section className="mt-16 space-y-6">
      <div>
        <span className="text-red-500">Related Item</span>
        <h2 className="text-2xl font-bold">You Might Also Like</h2>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {data.map((product) => (
          <ProductCard key={product.id} data={product} />
        ))}
      </div>
    </section>
  )
}

