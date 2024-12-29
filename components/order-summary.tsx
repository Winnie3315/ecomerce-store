'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

const orderItems = [
  {
    id: '1',
    name: 'LCD Monitor',
    price: 650,
    image: '/placeholder.svg',
  },
  {
    id: '2',
    name: 'H1 Gamepad',
    price: 1100,
    image: '/placeholder.svg',
  },
]

export function OrderSummary() {
  const subtotal = orderItems.reduce((acc, item) => acc + item.price, 0)
  const shipping = 'Free'
  const total = subtotal

  return (
    <Card>
      <CardHeader>
        <div className="space-y-4">
          {orderItems.map((item) => (
            <div key={item.id} className="flex items-center gap-4">
              <div className="relative h-16 w-16 overflow-hidden rounded-lg">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 justify-between">
                <span className="font-medium">{item.name}</span>
                <span>${item.price}</span>
              </div>
            </div>
          ))}
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <Separator />
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Subtotal:</span>
            <span className="font-medium">${subtotal}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Shipping:</span>
            <span className="font-medium text-green-600">{shipping}</span>
          </div>
          <Separator />
          <div className="flex justify-between text-lg font-medium">
            <span>Total:</span>
            <span>${total}</span>
          </div>
        </div>
        <div className="flex gap-4">
          <Input placeholder="Coupon Code" className="flex-1" />
          <Button className="bg-red-500 hover:bg-red-600">
            Apply Coupon
          </Button>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-red-500 hover:bg-red-600">
          Place Order
        </Button>
      </CardFooter>
    </Card>
  )
}

