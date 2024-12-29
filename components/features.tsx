import { Headphones, Shield, Truck } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const features = [
  {
    icon: Truck,
    title: 'Free and Fast Delivery',
    description: 'Free delivery for all orders above $140',
  },
  {
    icon: Headphones,
    title: '24/7 Customer Service',
    description: 'Friendly 24/7 customer support',
  },
  {
    icon: Shield,
    title: 'Money Back Guarantee',
    description: 'We return money within 30 days',
  },
]

export function Features() {
  return (
    <section className="my-16">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <Card key={feature.title} className="text-center">
            <CardHeader>
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-500 text-white">
                <feature.icon className="h-6 w-6" />
              </div>
              <CardTitle>{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

