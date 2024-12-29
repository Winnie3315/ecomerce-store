import { Product } from '@/types'
import qs from 'query-string'

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`

interface SearchQuery {
  categoryId?: string
  colorId?: string
  sizeId?: string
  isFeatured?: boolean
}

const getSearchProducts = async (
  searchQuery: string,
  filters: SearchQuery
): Promise<Product[]> => {
  // Формируем запрос с фильтрами и строкой поиска
  const query = {
    ...filters,
    name: searchQuery // Ищем по имени
  }

  const url = qs.stringifyUrl({
    url: URL,
    query
  })

  const res = await fetch(url)
  return res.json()
}

export default getSearchProducts
