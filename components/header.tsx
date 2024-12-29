'use client'

import * as React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Search, ShoppingCart, Heart } from 'lucide-react'
import { SignedIn, UserButton } from '@clerk/nextjs'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { MobileNav } from '@/components/mobile-nav'
// import { SearchModal } from '@/components/search-modal'
import { useCart } from '@/hooks/use-cart'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Contact', href: '/contact' },
  { name: 'About', href: '/about' },
  { name: 'Sign Up', href: '/sign-up' },
]

export function Header() {
  const [searchOpen, setSearchOpen] = React.useState(false)
  const router = useRouter()
  const cart = useCart()

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <MobileNav />
            <Link href="/" className="text-xl font-bold">
              Exclusive
            </Link>
          </div>

          <nav className="hidden items-center gap-8 md:flex">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm hover:text-primary"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <div className="relative hidden lg:block">
              <Input
                type="search"
                placeholder="What are you looking for?"
                className="w-[300px] bg-muted pr-8"
                onClick={() => setSearchOpen(true)}
                readOnly
              />
              <Search className="absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2 transform text-muted-foreground" />
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setSearchOpen(true)}
            >
              <Search className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => router.push("/wishlist")}
            >
              <Heart className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => router.push("/cart")}
              className="relative"
            >
              <ShoppingCart className="h-5 w-5" />
              {cart.items.length > 0 && (
                <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] text-white">
                  {cart.items.length}
                </span>
              )}
            </Button>
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
          </div>
        </div>
      </header>
      {/* <SearchModal
        open={searchOpen}
        onClose={() => setSearchOpen(false)}
      /> */}
    </>
  )
}

