// 'use client'

// import * as React from 'react'
// import Image from 'next/image'
// import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'
// import { Input } from '@/components/ui/input'
// import { Search, X } from 'lucide-react'
// import type { Product } from '@/types'
// import getProducts from '@/actions/get-products'

// interface SearchModalProps {
//   open: boolean
//   onClose: () => void
// }

// export function SearchModal({ open, onClose }: SearchModalProps) {
//   const [query, setQuery] = React.useState('')
//   const [results, setResults] = React.useState<Product[]>([])
//   const [loading, setLoading] = React.useState(false)
//   const [error, setError] = React.useState<string>('')

//   // Храним все продукты
//   const [products, setProducts] = React.useState<Product[]>([])

//   // Получаем все продукты при первом рендере
//   const fetchProducts = async () => {
//     setLoading(true)
//     setError('')

//     try {
//       // Печатаем запрос в консоль
//       console.log('Fetching products...')
//       const res = await getProducts({ isFeatured: true })

//       // Проверяем результат
//       console.log('Fetched products:', res)

//       if (Array.isArray(res)) {
//         setProducts(res) // Сохраняем все продукты
//       } else {
//         setError('Invalid data format received from the server.')
//       }
//     } catch (e) {
//       setError('Something went wrong. Please try again later.')
//       console.error('Error fetching products:', e)
//     } finally {
//       setLoading(false)
//     }
//   }

//   // Фильтрация продуктов по имени
//   const filterProductsByName = (searchQuery: string) => {
//     if (!searchQuery) {
//       setResults([]) // Если поисковая строка пуста, очищаем результаты
//       return
//     }

//     const filtered = products.filter((product) =>
//       product.name.toLowerCase().includes(searchQuery.toLowerCase())
//     )
//     setResults(filtered)
//   }

//   // Вызываем функцию получения продуктов при монтировании компонента
//   React.useEffect(() => {
//     fetchProducts()
//   }, [])

//   // Запускаем фильтрацию при изменении строки поиска
//   React.useEffect(() => {
//     filterProductsByName(query)
//   }, [query, products])

//   return (
//     <Dialog open={open} onOpenChange={onClose}>
//       <DialogContent className="max-w-3xl gap-0 p-0 text-white">
//         <DialogTitle>Search</DialogTitle>
//         <div className="flex items-center border-b p-4">
//           <Search className="mr-2 h-5 w-5 shrink-0 text-muted-foreground" />
//           <Input
//             placeholder="Search products..."
//             className="border-0 p-0 focus-visible:ring-0"
//             value={query}
//             onChange={(e) => setQuery(e.target.value)}
//           />
//           <button onClick={onClose} className="ml-2">
//             <X className="h-5 w-5 text-muted-foreground" />
//           </button>
//         </div>
//         <div className="max-h-[400px] overflow-y-auto p-4">
//           {loading ? (
//             <p className="text-center text-sm text-muted-foreground">Loading...</p>
//           ) : error ? (
//             <p className="text-center text-sm text-red-500">{error}</p>
//           ) : results.length === 0 ? (
//             <p className="text-center text-sm text-muted-foreground">
//               {query ? 'No results found' : 'Start typing to search'}
//             </p>
//           ) : (
//             <div className="space-y-4">
//               {results.map((product) => (
//                 <div
//                   key={product.id}
//                   className="flex items-center gap-4 rounded-lg p-2 hover:bg-muted"
//                 >
//                   <div className="relative h-16 w-16 overflow-hidden rounded-lg">
//                     <Image
//                       src={product.images[0].url}
//                       alt={product.name}
//                       fill
//                       className="object-cover"
//                     />
//                   </div>
//                   <div className="flex-1">
//                     <h4 className="font-medium">{product.name}</h4>
//                     <p className="text-sm text-muted-foreground">
//                       {product.category.name}
//                     </p>
//                   </div>
//                   <div className="text-right">
//                     <div className="font-medium">
//                       ${Number(product.price).toFixed(2)}
//                     </div>
//                     {product.discount > 0 && (
//                       <div className="text-sm text-red-500">
//                         -{product.discount}% off
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </DialogContent>
//     </Dialog>
//   )
// }
