import Image from 'next/image'
import { Button } from '@/components/ui/button'

export function HeroBanner() {
  return (
    <div className="relative overflow-hidden rounded-xl bg-black text-white">
      <div className="container relative z-20 grid min-h-[300px] items-center gap-4 px-4 py-12 md:min-h-[400px] lg:grid-cols-2">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Up to 10% off Voucher
          </h1>
          <Button className="w-fit" variant="secondary">
            Shop Now
          </Button>
        </div>
        <div className="hidden lg:block">
          <Image
            src="/placeholder.svg"
            alt="iPhone 14 Series"
            width={500}
            height={500}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  )
}

