import { FlashSales } from '@/components/flash-sales'
import { CategoryBrowser } from '@/components/category-browser'
import { PromoBanner } from '@/components/promo-banner'
import { ProductExplorer } from '@/components/product-explorer'
import Billboard from '@/components/billboard'
import getCategories from '@/actions/get-categories'
import getBillboards from '@/actions/get-billboards'
import getProducts from '@/actions/get-products'
// import { Billboard } from '@/components/Billboard'

export default async function Home() {

    const billboards = await getBillboards()
    const categories = await getCategories()
    const products = await getProducts({ isFeatured: true })

    const productsWithDiscount = products.filter(product => product.discount > 0);
    const productsWithoutDiscount = products.filter(product => product.discount === 0);

  return (
    <div className="min-h-screen bg-background">
      <Billboard billboards={billboards} categories={categories}/>
      <div className="container mx-auto space-y-12 px-4 py-8">
        <FlashSales data={productsWithDiscount} />
        <CategoryBrowser data={categories} />
        <PromoBanner products={products}/>
        <ProductExplorer data={productsWithoutDiscount} />
      </div>
    </div>
  )
}
