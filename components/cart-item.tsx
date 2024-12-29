import Image from "next/image"
import { Minus, Plus, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useCart } from "@/hooks/use-cart"
import type { CartItem } from "@/types"

interface CartItemProps {
  data: CartItem;
}

export function CartItem({ data }: CartItemProps) {
  const cart = useCart()
  
  const onRemove = () => {
    cart.removeItem(data.id)
  }

  const onUpdateQuantity = (quantity: number) => {
    if (quantity < 1) return
    cart.updateQuantity(data.id, quantity)
  }

  const getPrice = () => {
    // Проверяем, есть ли скидка и если она есть, применяем её
    if (data.discount) {
      return Number(data.price) * (1 - data.discount / 100)
    }
    // Если скидки нет, возвращаем обычную цену
    return Number(data.price)
  }

  const price = getPrice()
  const subtotal = price * data.quantity

  return (
    <div className="flex items-center gap-4 py-4">
      <div className="relative aspect-square h-24 w-24 overflow-hidden rounded-lg">
        <Image
          fill
          src={data.images[0].url}
          alt={data.name}
          className="object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col gap-1">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-medium">{data.name}</h3>
            <p className="text-sm text-muted-foreground">
              {data.size.name} / {data.color.name}
            </p>
          </div>
          <Button
            onClick={onRemove}
            variant="ghost"
            size="icon"
            className="h-8 w-8"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Button
              onClick={() => onUpdateQuantity(data.quantity - 1)}
              variant="outline"
              size="icon"
              className="h-8 w-8"
            >
              <Minus className="h-4 w-4" />
            </Button>
            <span className="w-12 text-center">{data.quantity}</span>
            <Button
              onClick={() => onUpdateQuantity(data.quantity + 1)}
              variant="outline"
              size="icon"
              className="h-8 w-8"
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-medium">${subtotal.toFixed(2)}</span>
            {data.discount > 0 && (
              <span className="text-sm text-muted-foreground line-through">
                ${(Number(data.price) * data.quantity).toFixed(2)}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

