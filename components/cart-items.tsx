'use client'

import * as React from 'react'
import Image from 'next/image'
import { Minus, Plus, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Product } from '@/types'
import {useCart} from '@/hooks/use-cart'

export function CartItems({ data }: { data: Product }) {
  const [quantity, setQuantity] = React.useState(1)
  const cart = useCart()

  const updateQuantity = (newQuantity: number) => {
    if (newQuantity < 1) return
    setQuantity(newQuantity)
  }

  const onDelete = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();

    cart.removeItem(data.id)
  }


  const subtotal = parseFloat(data.price) * quantity

  return (
    <div className="space-y-6">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[400px]">Product</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead className="text-right">Subtotal</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>
              <div className="flex items-center gap-4">
                <div className="relative h-20 w-20">
                  <Image
                    src={data.images[0]?.url || '/placeholder.svg'}
                    alt={data.name}
                    fill
                    className="rounded-lg object-cover"
                  />
                </div>
                <span className="font-medium">{data.name}</span>
              </div>
            </TableCell>
            <TableCell>${data.price}</TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => updateQuantity(quantity - 1)}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-12 text-center">{quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => updateQuantity(quantity + 1)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </TableCell>
            <TableCell className="text-right">
              <div className="flex items-center justify-end gap-4">
                ${subtotal.toFixed(2)}
                <Button onClick={onDelete} variant="ghost" size="icon" className="h-8 w-8">
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
}
