
// import getProduct from '@/actions/get-product'
// import getProducts from '@/actions/get-products'
// import { Breadcrumb } from '@/components/breadcrumb'
// import { ProductGallery } from '@/components/product-gallery'
// import { ProductInfo } from '@/components/product-info'
// import { RelatedProducts } from '@/components/related-products'
// import type { Product } from '@/types'




// export default async function ProductPage({params}: {params: {productId: string}}) {
//   const product = await getProduct(params.productId)

//     const suggestedProducts = await getProducts({
//     categoryId: product?.category?.id
//   })

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <Breadcrumb
//         items={[
//           { label: 'Account', href: '/account' },
//           { label: 'Gaming', href: '/gaming' },
//           { label: product.name, href: '#' },
//         ]}
//       />
//       <div className="mt-8 grid gap-8 lg:grid-cols-2">
//         <ProductGallery images={product.images} />
//         <ProductInfo product={product} />
//       </div>
//       <RelatedProducts data={suggestedProducts}/>
//     </div>
//   )
// }

import { notFound } from 'next/navigation'
import { ProductImage } from '@/components/product-image'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import getProduct from '@/actions/get-product'
import { RelatedProducts } from '@/components/related-products'
import getProducts from '@/actions/get-products'


export default async function ProductPage({ params }: { params: { productId: string } }) {
  const product = await getProduct(params.productId)
  if (!product) {
    notFound()
  }

  const discountedPrice = product.discount
    ? Number(product.price) * (1 - product.discount / 100)
    : null

  const suggestedProducts = await getProducts({
    categoryId: product?.category?.id
  })
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-4">
          <ProductImage
            images={product.images}
            name={product.name}
            isFeatured={product.isFeatured}
            isArchived={product.isArchived}
            discount={product.discount}
          />
        </div>

        <div className="space-y-6">
          <div>
            <h1 className="text-2xl font-bold sm:text-3xl">{product.name}</h1>
            <div className="mt-4 flex items-baseline gap-2">
              {discountedPrice ? (
                <>
                  <span className="text-3xl font-bold text-red-500">
                    ${discountedPrice.toFixed(2)}
                  </span>
                  <span className="text-xl text-muted-foreground line-through">
                    ${product.price}
                  </span>
                </>
              ) : (
                <span className="text-3xl font-bold">
                  ${product.price}
                </span>
              )}
            </div>
          </div>

          <Separator />

          <div className="space-y-2">
            <p className="text-sm font-medium">Category</p>
            <Badge variant="secondary">
              {product.category.name}
            </Badge>
          </div>

          <div className="space-y-2">
            <p className="text-sm font-medium">Size</p>
            <Badge variant="outline">
              {product.size.name}
            </Badge>
          </div>

          <div className="space-y-2">
            <p className="text-sm font-medium">Color</p>
            <div className="flex items-center gap-2">
              <div
                className="h-6 w-6 rounded-full border"
                style={{ backgroundColor: product.color.value }}
              />
              <span className="text-sm">{product.color.name}</span>
            </div>
          </div>

          <Separator />

          <Card>
            <CardHeader>
              <CardTitle>Description</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                {product.description}
              </CardDescription>
            </CardContent>
          </Card>

          <div className="flex gap-4">
            <Button size="lg" className="flex-1">
              Add to Cart
            </Button>
            <Button size="lg" variant="outline" className="flex-1">
              Buy Now
            </Button>
          </div>
        </div>
      </div>
      <RelatedProducts data={suggestedProducts} />
    </div>
  )
}


