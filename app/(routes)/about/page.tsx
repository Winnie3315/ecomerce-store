import { Breadcrumb } from '@/components/breadcrumb'
import { AboutHero } from '@/components/about-hero'
import { Stats } from '@/components/stats'
import { Team } from '@/components/team'
import { Features } from '@/components/features'

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'About', href: '/about' },
          ]}
        />
        <AboutHero />
        <Stats />
        <Team />
        <Features />
      </div>
    </div>
  )
}

