// import { SendHorizontal } from 'lucide-react';
// import Link from 'next/link';
// import React from 'react';

// interface FooterProps {

// }

// const Footer: React.FC<FooterProps> = () => {
//     return (

//         <footer className=' bg-black text-white '>
//             <div className="wrap">
//                 <div className='pt-[80px] pb-[100px] pr-[100px] pl-[200px] grid grid-cols-4'>
//                     <div className='flex flex-col gap-4'>
//                         <h3 className='heading-24px-bold'>Exclusive</h3>
//                         <h4 className='title-20px-medium'>Subscribe</h4>
//                         <div className='flex flex-col gap-4'>
//                             <p className='title-16px-regular'>Get 10% off your first order</p>
//                             <form>
//                                 <label htmlFor="email" className='py-[10px] px-[16px] flex border-white border-[1px] max-w-[217px] rounded-md'>
//                                     <input type="email" id='email' name='email' placeholder='Enter your email' className='bg-black text-white outline-none placeholder-white max-w-[130px] mr-8 title-16px-regular' />
//                                     <button type='submit'>
//                                         <SendHorizontal />
//                                     </button>
//                                 </label>
//                             </form>
//                         </div>
//                     </div>
//                     <div className='flex flex-col gap-4'>
//                         <h4 className='heading-24px-bold'>Support</h4>
//                         <p className='title-16px-regular w-[175px]'>111 Bijoy sarani, Dhaka,</p>
//                         <p className='title-16px-regular w-[175px]'>DH 1515, Bangladesh.</p>
//                         <a href='mailto: exclusiveshop.by.winnie@gmail.com' className='title-16px-regular'>exclusiveshop.by.winnie@gmail.com</a>
//                         <a href='tel:+998902706030' className='title-16px-regular'>+998(90)270-60-30</a>
//                     </div>
//                     <div className='flex flex-col gap-4'>
//                         <h4 className='heading-24px-bold'>Account</h4>
//                         <Link className='title-16px-regular' href="#">My Account</Link>
//                         <div className='title-16px-regular'>
//                             <Link href="#">
//                                 Login
//                             </Link>
//                             <span> / </span>
//                             <Link className='title-16px-regular' href="#">Register</Link>
//                         </div>
//                         <Link className='title-16px-regular' href="#">Cart</Link>
//                         <Link className='title-16px-regular' href="#">Wishlist</Link>
//                         <Link className='title-16px-regular' href="/">Shop</Link>
//                     </div>
//                     <div className='flex flex-col gap-4'>
//                         <h4 className='heading-24px-bold'>Quick Link</h4>
//                         <Link className='title-16px-regular' href="/privacy-policy">Privacy Policy</Link>
//                         <Link className='title-16px-regular' href="/terms-of-use">Terms Of Use</Link>
//                         <Link className='title-16px-regular' href="/faq">FAQ</Link>
//                         <Link className='title-16px-regular' href="/contact">Contact</Link>
//                     </div>
//                 </div>
//             </div>
//         </footer>


//     );
// };

// export default Footer;

import Image from 'next/image'
import Link from 'next/link'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Facebook, Twitter, Instagram, Linkedin, Send } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-5">
          {/* Exclusive Column */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Exclusive</h2>
            <p className="text-sm">Subscribe</p>
            <p className="text-sm">Get 10% off your first order</p>
            <div className="flex">
              <Input
                placeholder="Enter your email"
                className="rounded-r-none bg-transparent"
              />
              <Button
                size="icon"
                className="rounded-l-none bg-transparent hover:bg-white/10"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Support Column */}
          <div className="space-y-4">
            <h3 className="font-bold">Support</h3>
            <address className="not-italic text-sm text-gray-300">
              111 Bijoy sarani, Dhaka,
              <br />
              DH 1515, Bangladesh.
            </address>
            <p className="text-sm">exclusive@gmail.com</p>
            <p className="text-sm">+88015-88888-9999</p>
          </div>

          {/* Account Column */}
          <div className="space-y-4">
            <h3 className="font-bold">Account</h3>
            <nav className="flex flex-col space-y-2 text-sm text-gray-300">
              <Link href="/account">My Account</Link>
              <Link href="/login">Login / Register</Link>
              <Link href="/cart">Cart</Link>
              <Link href="/wishlist">Wishlist</Link>
              <Link href="/shop">Shop</Link>
            </nav>
          </div>

          {/* Quick Link Column */}
          <div className="space-y-4">
            <h3 className="font-bold">Quick Link</h3>
            <nav className="flex flex-col space-y-2 text-sm text-gray-300">
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/terms">Terms Of Use</Link>
              <Link href="/faq">FAQ</Link>
              <Link href="/contact">Contact</Link>
            </nav>
          </div>

          {/* Download App Column */}
          <div className="space-y-4">
            <h3 className="font-bold">Download App</h3>
            <p className="text-xs text-gray-300">Save $3 with App New User Only</p>
            <div className="grid grid-cols-2 gap-2">
              <div className="relative aspect-square">
                <Image
                  src="/images/qrcode.png"
                  alt="QR Code"
                  fill
                  className="rounded-lg"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Image
                  src="/images/googleplay.png"
                  alt="Get it on Google Play"
                  width={120}
                  height={40}
                  className="rounded"
                />
                <Image
                  src="/images/appstore.png"
                  alt="Download on the App Store"
                  width={120}
                  height={40}
                  className="rounded"
                />
              </div>
            </div>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-gray-300">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-gray-300">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-gray-300">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-gray-300">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
