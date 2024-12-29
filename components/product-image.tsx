// 'use client'

// import * as React from 'react'
// import Image from 'next/image'
// import { cn } from '@/lib/utils'
// import { Badge } from '@/components/ui/badge'
// import type { Image as ImageType } from '@/types'

// interface ProductImageProps {
//   images: ImageType[];
//   name: string;
//   isFeatured?: boolean;
//   isArchived?: boolean;
//   discount?: number;
// }

// export function ProductImage({
//   images,
//   name,
//   isFeatured,
//   isArchived,
//   discount
// }: ProductImageProps) {
//   const [selectedImage, setSelectedImage] = React.useState(1)


//   return (
//     <div className="space-y-4">
//       <div className="relative aspect-square overflow-hidden rounded-xl bg-gray-100">
//       {images.map((image, index) => (
//           <button
//             key={index}
//             onClick={() => setSelectedImage(index)}
//             className={cn(
//               "relative aspect-square overflow-hidden rounded-lg border",
//               selectedImage === index && "ring-2 ring-primary ring-offset-2"
//             )}
//           >
//             <Image
//               src={image?.url || "/images/tom.png"}
//               alt={`Product image ${index + 1}`}
//               fill
//               className="object-cover"
//             />
//           </button>
//         ))}
//         <Image
//           src={images[selectedImage]?.url}
//           alt={name}
//           fill
//           className="object-cover"
//           priority
//         />
//         <div className="absolute left-2 top-2 flex flex-col gap-2">
//           {discount && discount > 0 && (
//             <Badge className="bg-red-500">
//               -{discount}%
//             </Badge>
//           )}
//           {isFeatured && (
//             <Badge className="bg-blue-500">
//               Featured
//             </Badge>
//           )}
//           {isArchived && (
//             <Badge variant="destructive">
//               Archived
//             </Badge>
//           )}
//         </div>
//       </div>

//       <div className="grid grid-cols-4 gap-4">
//         {images.map((image, index) => (
//           <button
//             key={image.id}
//             onClick={() => setSelectedImage(index)}
//             className={cn(
//               "relative aspect-square overflow-hidden rounded-lg border bg-muted",
//               selectedImage === index && "ring-2 ring-primary ring-offset-2"
//             )}
//           >
//             <Image
//               src={image.url}
//               alt={`${name} thumbnail ${index + 1}`}
//               fill
//               className="object-cover"
//             />
//           </button>
//         ))}
//       </div>
//     </div>
//   )
// }

'use client'

import * as React from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'
import type { Image as ImageType } from '@/types'

interface ProductImageProps {
    images: ImageType[];
    name: string;
    isFeatured?: boolean;
    isArchived?: boolean;
    discount?: number;
}

export function ProductImage({
    images,
    name,
    isFeatured,
    isArchived,
    discount
}: ProductImageProps) {
    const [selectedImage, setSelectedImage] = React.useState(0)

    return (
        <div className="grid gap-2 md:grid-cols-[80px_1fr] md:gap-4 lg:grid-cols-[100px_1fr]">
            {/* Thumbnails - vertical on desktop, horizontal on mobile */}
            <div
                className={cn(
                    "md:order-1 md:grid-cols-1 order-last flex gap-4 lg:order-none lg:flex-col overflow-auto max-h-[500px] lg:max-h-[364px] md:grid md:max-h-[256px] hide-scrollbar"
                )}
            >
                {images.map((image, index) => (
                    <button
                        key={image.id}
                        onClick={() => setSelectedImage(index)}
                        className={cn(
                            "relative aspect-square w-full overflow-hidden rounded-lg border bg-muted hover:bg-muted/80",
                            selectedImage === index && "ring-2 ring-primary ring-offset-2"
                        )}
                    >
                        <Image
                            src={image.url}
                            alt={`${name} thumbnail ${index + 1}`}
                            fill
                            className="object-cover"
                        />
                    </button>
                ))}
            </div>

            {/* Main Image */}
            <div className="order-1 md:order-2">
                <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-muted">
                    <Image
                        src={images[selectedImage].url}
                        alt={name}
                        fill
                        className="object-cover"
                        priority
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                    />
                    <div className="absolute left-2 top-2 flex flex-col gap-2">
                        {discount && discount > 0 && (
                            <Badge className="bg-red-500">
                                -{discount}%
                            </Badge>
                        )}
                        {isFeatured && (
                            <Badge className="bg-blue-500">
                                Featured
                            </Badge>
                        )}
                        {isArchived && (
                            <Badge variant="destructive">
                                Archived
                            </Badge>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

