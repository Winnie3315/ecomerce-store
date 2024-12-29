// 'use client'

// import { Button } from '@/components/ui/button'
// import { Input } from '@/components/ui/input'
// import {
//   Card,
//   CardContent,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from '@/components/ui/card'
// import { Separator } from '@/components/ui/separator'

// export function CartSummary() {
//   return (
//     <div className="space-y-6">
//       <div className="flex gap-4">
//         <Input placeholder="Coupon Code" className="flex-1" />
//         <Button className="bg-red-500 hover:bg-red-600 text-white">
//           Apply Coupon
//         </Button>
//       </div>
//       <Card>
//         <CardHeader>
//           <CardTitle>Cart Total</CardTitle>
//         </CardHeader>
//         <CardContent className="space-y-4">
//           <div className="flex justify-between">
//             <span className="text-muted-foreground">Subtotal:</span>
//             <span className="font-medium">$1750</span>
//           </div>
//           <Separator />
//           <div className="flex justify-between">
//             <span className="text-muted-foreground">Shipping:</span>
//             <span className="font-medium text-green-600">Free</span>
//           </div>
//           <Separator />
//           <div className="flex justify-between text-lg font-medium">
//             <span>Total:</span>
//             <span>$1750</span>
//           </div>
//         </CardContent>
//         <CardFooter>
//           <Button className="w-full bg-red-500 hover:bg-red-600 text-white">
//             Proceed to Checkout
//           </Button>
//         </CardFooter>
//       </Card>
//     </div>
//   )
// }

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { useCart } from "@/hooks/use-cart"
import Link from "next/link"

export function CartSummary() {
  const cart = useCart()
  
  const total = cart.items.reduce((acc, item) => {
    const price = item.discount 
      ? Number(item.price) * (1 - item.discount / 100)
      : Number(item.price)
    return acc + (price * item.quantity)
  }, 0)

  return (
    <div className="space-y-4 rounded-lg border p-4">
      <div className="flex items-center gap-2">
        <Input placeholder="Coupon Code" className="flex-1" />
        <Button className="bg-red-500 hover:bg-red-600 text-white">Apply Coupon</Button>
      </div>
      <Separator />
      <div className="space-y-1.5">
        <div className="flex justify-between">
          <span className="text-sm">Subtotal:</span>
          <span className="font-medium">${total.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Shipping:</span>
          <span className="font-medium text-green-600">Free</span>
        </div>
      </div>
      <Separator />
      <div className="flex justify-between">
        <span className="text-lg font-medium">Total:</span>
        <span className="text-lg font-medium">${total.toFixed(2)}</span>
      </div>
      <Button className="w-full bg-red-500 hover:bg-red-600 text-white"><Link href={"/checkout"}>Process to checkout</Link></Button>
    </div>
  )
}

