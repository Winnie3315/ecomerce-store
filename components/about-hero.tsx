import Image from 'next/image'

export function AboutHero() {
  return (
    <div className="mt-8 grid gap-12 lg:grid-cols-2 lg:items-center">
      <div className="space-y-6">
        <h1 className="text-4xl font-bold tracking-tight">Our Story</h1>
        <p className="text-lg text-muted-foreground">
          Launched in 2015, Exclusive is South Asia's premier online shopping
          marketplace with an active presence in Bangladesh. Supported by a wide
          range of tailored marketing, data, and service solutions, Exclusive has
          10,500 sellers and 300 brands and serves 3.5 million customers across
          the region.
        </p>
        <p className="text-lg text-muted-foreground">
          Exclusive has more than 1 billion products to offer, growing at a very
          fast rate. Exclusive offers a diverse assortment in categories ranging
          from consumer products to services.
        </p>
      </div>
      <div className="relative aspect-square overflow-hidden rounded-xl lg:aspect-[4/3]">
        <Image
          src="/images/about-hero.png"
          alt="Happy shoppers with shopping bags"
          fill
          className="object-cover"
        />
      </div>
    </div>
  )
}

