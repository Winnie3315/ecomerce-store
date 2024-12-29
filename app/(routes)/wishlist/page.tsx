import { WishlistHeader } from '@/components/wishlist-header'
import { WishlistItems } from '@/components/wishlist-items'
import { RecommendedProducts } from '@/components/recommended-products'
import getProducts from '@/actions/get-products'

export default async function WishlistPage() {
  const products = await getProducts({ isFeatured: true })
  return (
    <div className="container mx-auto px-4 py-8">
      <WishlistHeader />
      <WishlistItems/>
      <RecommendedProducts data={products.slice(0, 4)} />
    </div>
  )
}

