import { notFound } from 'next/navigation'
import  {Billboard}  from '@/components/BillboardInCategory'
import { Container } from '@/components/ui/container'
import { ProductGrid } from '@/components/product-grid'
import getProducts from '@/actions/get-products'
import getCategory from '@/actions/get-category'

interface CategoryPageProps {
  params: {
    categoryId: string
  }
}

export default async function CategoryPage({
  params
}: CategoryPageProps) {
  const category = await getCategory(params.categoryId)

  if (!category) {
    return notFound()
  }

  const products = await getProducts({ categoryId: params.categoryId })
  console.log("category billboard" ,category);


  
  return (
    
    <div className="bg-white">
      <Container>
        <Billboard 
          data={category?.billboard}
        />
        <div className="px-4 pb-24 sm:px-6 lg:px-8">
          <div className="mb-4 mt-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900">
              {category?.name}
            </h1>
          </div>
          <ProductGrid products={products} />
        </div>
      </Container>
    </div>
  )
}

