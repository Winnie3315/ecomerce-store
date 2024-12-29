'use client'

import * as React from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { Image as ImageType } from '@/types'

interface ProductGalleryProps {
  images: ImageType[]
}

export function ProductGallery({ images }: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = React.useState(0)

  return (
    <div className="grid gap-4 lg:grid-cols-[100px_1fr]">
      <div className="order-last flex gap-4 lg:order-none lg:flex-col">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={cn(
              "relative aspect-square overflow-hidden rounded-lg border",
              selectedImage === index && "ring-2 ring-primary ring-offset-2"
            )}
          >
            <Image
              src={image?.url || "/images/tom.png"}
              alt={`Product image ${index + 1}`}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>
      <div className="relative aspect-square overflow-hidden rounded-lg bg-muted">
        <Image
          src={images[selectedImage]?.url}
          alt="Main product image"
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  )
}

