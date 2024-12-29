import { ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const categories = [
  "Woman's Fashion",
  "Men's Fashion",
  "Electronics",
  "Home & Lifestyle",
  "Medicine",
  "Sports & Outdoor",
  "Baby's & Toys",
  "Groceries & Pets",
  "Health & Beauty",
]

export function Sidebar({ className }: { className?: string }) {
  return (
    <aside className={cn("w-60", className)}>
      <nav className="flex flex-col space-y-1">
        {categories.map((category) => (
          <a
            key={category}
            href="#"
            className="flex items-center justify-between rounded-lg px-3 py-2 text-sm hover:bg-accent"
          >
            {category}
            <ChevronRight className="h-4 w-4" />
          </a>
        ))}
      </nav>
    </aside>
  )
}

