// "use client"

// import { Breadcrumb } from '@/components/breadcrumb'
// import { CartItems } from '@/components/cart-items'
// import { CartSummary } from '@/components/cart-summary'
// import useCart from '@/hooks/use-cart'

// export default function CartPage() {
//   const cart = useCart()
//   return (
//     <div className="container mx-auto px-4 py-8">
//       <Breadcrumb
//         items={[
//           { label: 'Home', href: '/' },
//           { label: 'Cart', href: '/cart' },
//         ]}
//       />
//       <div className="mt-8">
//         <div className="grid gap-8 lg:grid-cols-[1fr_400px]">
//           {cart.items.map((item) => (
//             <CartItems key={item.id} data={item} />
//           ))}
          
//           <CartSummary />
//         </div>
//       </div>
//     </div>
//   )
// }

'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { CartItem } from "@/components/cart-item"
import { CartSummary } from "@/components/cart-summary"
import { useCart } from "@/hooks/use-cart"

export default function CartPage() {
  const cart = useCart()

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Shopping Cart</h1>
        {cart.items.length > 0 && (
          <Button
            onClick={() => cart.removeAll()}
            variant="outline"
          >
            Clear Cart
          </Button>
        )}
      </div>
      {cart.items.length === 0 ? (
        <div className="flex flex-col items-center gap-4 py-12">
          <p className="text-lg text-muted-foreground">Your cart is empty</p>
          <Button asChild>
            <Link href="/products">Continue Shopping</Link>
          </Button>
        </div>
      ) : (
        <div className="grid gap-8 lg:grid-cols-[1fr_400px]">
          <div>
            <div className="mb-4 grid grid-cols-4 text-sm">
              <div className="col-span-2">Product</div>
              <div className="text-center">Quantity</div>
              <div className="text-right">Subtotal</div>
            </div>
            <Separator className="mb-4" />
            <div className="divide-y">
              {cart.items.map((item) => (
                <CartItem key={item.id} data={item} />
              ))}
            </div>
            <div className="mt-4 flex justify-between">
              <Button asChild variant="outline">
                <Link href="/">Return To Shop</Link>
              </Button>
              <Button variant="outline">Update Cart</Button>
            </div>
          </div>
          <CartSummary />
        </div>
      )}
    </div>
  )
}

