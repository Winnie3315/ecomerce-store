import { Briefcase, Calendar, DollarSign, Users } from 'lucide-react'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const stats = [
  {
    title: '10.5k',
    subtitle: 'Sellers active on our site',
    icon: Calendar,
  },
  {
    title: '33k',
    subtitle: 'Monthly Product Sale',
    icon: DollarSign,
    highlighted: true,
  },
  {
    title: '45.5k',
    subtitle: 'Customer active on our site',
    icon: Users,
  },
  {
    title: '25k',
    subtitle: 'Annual gross sales in our site',
    icon: Briefcase,
  },
]

export function Stats() {
  return (
    <div className="my-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <Card
          key={index}
          className={stat.highlighted ? 'bg-red-500 text-white' : ''}
        >
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-3xl font-bold">
              {stat.title}
            </CardTitle>
            <stat.icon className={`h-6 w-6 ${stat.highlighted ? 'text-white' : 'text-muted-foreground'}`} />
          </CardHeader>
          <CardContent>
            <p className={`text-sm ${stat.highlighted ? 'text-white/90' : 'text-muted-foreground'}`}>
              {stat.subtitle}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

