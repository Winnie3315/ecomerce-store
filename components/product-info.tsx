'use client'

// import * as React from 'react'
// import { Heart, Minus, Plus } from 'lucide-react'
// import { Button } from '@/components/ui/button'
// import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
// import { Label } from '@/components/ui/label'
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from '@/components/ui/card'
// import { Product as ProductType } from '@/types'

// interface ProductInfoProps {
//   product: ProductType
// }

// export function ProductInfo({ product }: ProductInfoProps) {
//   const [quantity, setQuantity] = React.useState(1)
//   const [selectedColor, setSelectedColor] = React.useState(product.color)
//   const [selectedSize, setSelectedSize] = React.useState(product.size)

//   return (
//     <div className="space-y-6">
//       <div>
//         <h1 className="text-2xl font-bold">{product.name}</h1>
//       </div>

//       <div className="text-2xl font-bold">${product.price.toFixed(2)}</div>

//       <p className="text-muted-foreground">{product.description}</p>

//       <div className="space-y-4">
//         <div>
//           <Label>Colours:</Label>
//           <RadioGroup
//             defaultValue={selectedColor}
//             onValueChange={setSelectedColor}
//             className="mt-2 flex gap-2"
//           >
//             {product.color.map((cl) => (
//               <div key={cl} className="flex items-center space-x-2">
//                 <RadioGroupItem
//                   value={cl}
//                   id={`color-${cl}`}
//                   className="peer sr-only"
//                 />
//                 <Label
//                   htmlFor={`color-${color}`}
//                   className="rounded-full border p-2 peer-data-[state=checked]:ring-2 peer-data-[state=checked]:ring-primary"
//                 >
//                   <div
//                     className="h-4 w-4 rounded-full"
//                     style={{ backgroundColor: color }}
//                   />
//                 </Label>
//               </div>
//             ))}
//           </RadioGroup>
//         </div>

//         <div>
//           <Label>Size:</Label>
//           <RadioGroup
//             defaultValue={selectedSize}
//             onValueChange={setSelectedSize}
//             className="mt-2 flex gap-2"
//           >
//             {product.sizes.map((size) => (
//               <div key={size} className="flex items-center space-x-2">
//                 <RadioGroupItem
//                   value={size}
//                   id={`size-${size}`}
//                   className="peer sr-only"
//                 />
//                 <Label
//                   htmlFor={`size-${size}`}
//                   className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-md border peer-data-[state=checked]:border-primary peer-data-[state=checked]:font-medium"
//                 >
//                   {size}
//                 </Label>
//               </div>
//             ))}
//           </RadioGroup>
//         </div>

//         <div className="flex items-center gap-4">
//           <div className="flex items-center">
//             <Button
//               variant="outline"
//               size="icon"
//               onClick={() => setQuantity(Math.max(1, quantity - 1))}
//             >
//               <Minus className="h-4 w-4" />
//             </Button>
//             <span className="w-12 text-center">{quantity}</span>
//             <Button
//               variant="outline"
//               size="icon"
//               onClick={() => setQuantity(quantity + 1)}
//             >
//               <Plus className="h-4 w-4" />
//             </Button>
//           </div>
//           <Button className="flex-1">Buy Now</Button>
//           <Button variant="outline" size="icon">
//             <Heart className="h-4 w-4" />
//           </Button>
//         </div>
//       </div>

//       <div className="grid gap-4">
//         <Card>
//           <CardHeader className="pb-3">
//             <CardTitle className="text-base">Free Delivery</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <CardDescription>
//               Enter your postal code for Delivery Availability
//             </CardDescription>
//           </CardContent>
//         </Card>
//         <Card>
//           <CardHeader className="pb-3">
//             <CardTitle className="text-base">Return Delivery</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <CardDescription>
//               Free 30 Days Delivery Returns. Details
//             </CardDescription>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   )
// }

'use client'

import * as React from 'react'
import { Heart, Minus, Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import type { Product } from '@/types'



interface ProductInfoProps {
  product: Product;
}

export function ProductInfo({ product }: ProductInfoProps) {
  const [quantity, setQuantity] = React.useState(1)

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold sm:text-3xl">{product.name}</h1>
      </div>

      <div className="text-2xl font-bold">
        ${Number(product.price).toFixed(2)}
      </div>

      <div className="space-y-4">
        <div>
          <h3 className="mb-2 font-medium">Colours:</h3>
          <RadioGroup defaultValue={product.color.value} className="flex gap-2">
            <div>
              <RadioGroupItem
                value={product.color.value}
                id={product.color.id}
                className="peer sr-only"
              />
              <label
                htmlFor={product.color.id}
                className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border-2 peer-data-[state=checked]:border-primary"
                style={{ backgroundColor: product.color.value }}
              />
            </div>
          </RadioGroup>
        </div>

        <div>
          <h3 className="mb-2 font-medium">Size:</h3>
          <RadioGroup defaultValue={product.size.value} className="flex gap-2">
            {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
              <div key={size}>
                <RadioGroupItem
                  value={size}
                  id={`size-${size}`}
                  className="peer sr-only"
                />
                <label
                  htmlFor={`size-${size}`}
                  className={`flex h-10 w-10 cursor-pointer items-center justify-center rounded border ${size === product.size.value
                      ? 'border-primary bg-primary text-primary-foreground'
                      : 'hover:bg-muted'
                    }`}
                >
                  {size}
                </label>
              </div>
            ))}
          </RadioGroup>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
            >
              <Minus className="h-4 w-4" />
            </Button>
            <span className="w-12 text-center">{quantity}</span>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setQuantity(quantity + 1)}
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
          <Button className="flex-1" size="lg">
            Buy Now
          </Button>
          <Button variant="outline" size="icon" className="h-11 w-11">
            <Heart className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <div className="grid gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Free Delivery</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Enter your postal code for Delivery Availability
            </CardDescription>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Return Delivery</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Free 30 Days Delivery Returns. Details
            </CardDescription>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

