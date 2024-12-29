import Image from 'next/image'
import { Facebook, Linkedin, Twitter } from 'lucide-react'
import { Button } from '@/components/ui/button'

const team = [
  {
    name: 'Tom Cruise',
    role: 'Founder & Chairman',
    image: '/images/tom.png',
    socials: {
      linkedin: '#',
      twitter: '#',
      facebook: '#',
    },
  },
  {
    name: 'Emma Watson',
    role: 'Managing Director',
    image: '/images/emma.png',
    socials: {
      linkedin: '#',
      twitter: '#',
    },
  },
  {
    name: 'Will Smith',
    role: 'Product Designer',
    image: '/images/will.png',
    socials: {
      linkedin: '#',
      facebook: '#',
    },
  },
]

export function Team() {
  return (
    <section className="my-16">
      <h2 className="mb-8 text-center text-3xl font-bold">Our Team</h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {team.map((member) => (
          <div
            key={member.name}
            className="group relative overflow-hidden rounded-xl bg-muted"
          >
            <div className="aspect-[3/4]">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end text-white opacity-0 transition-opacity group-hover:opacity-100">
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-sm text-gray-300">{member.role}</p>
              <div className="mt-4 flex gap-4">
                {member.socials.linkedin && (
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 rounded-full bg-white/20 hover:bg-white/40"
                    asChild
                  >
                    <a href={member.socials.linkedin}>
                      <Linkedin className="h-4 w-4" />
                    </a>
                  </Button>
                )}
                {member.socials.twitter && (
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 rounded-full bg-white/20 hover:bg-white/40"
                    asChild
                  >
                    <a href={member.socials.twitter}>
                      <Twitter className="h-4 w-4" />
                    </a>
                  </Button>
                )}
                {member.socials.facebook && (
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 rounded-full bg-white/20 hover:bg-white/40"
                    asChild
                  >
                    <a href={member.socials.facebook}>
                      <Facebook className="h-4 w-4" />
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

