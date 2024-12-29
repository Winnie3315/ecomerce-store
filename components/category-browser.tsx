'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Category } from '@/types'
import Image from 'next/image'
import { useRouter } from 'next/navigation'


export function CategoryBrowser({data}: {
  data: Category[]
}) {
  const router = useRouter()

  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <div className="inline-flex items-center rounded-lg bg-red-100 px-3 py-1 text-sm text-red-500">
            Categories
          </div>
          <h2 className="text-2xl font-bold tracking-tight">Browse By Category</h2>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="icon">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {data.map(({ name, id, imageUrl  }) => (
          <Button
            onClick={() => router.push(`/category/${id}`)}
            key={id}
            variant="outline"
            className={`h-auto flex-col gap-4 p-8 hover:bg-red-500 hover:text-white `}
          >
            <Image src={imageUrl} alt={name} height={24} width={24} className="h-6 w-6" />
            <span className="text-sm font-medium">{name}</span>
          </Button>
        ))}
      </div>
    </section>
  )
}
