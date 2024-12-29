import { Breadcrumb } from '@/components/breadcrumb'
import  {ContactForm}  from '@/components/contact-form'
import { ContactInfo } from '@/components/contact-info'

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'Contact', href: '/contact' },
            ]}
          />
          <div className="mt-8 grid gap-8 md:grid-cols-[1fr_2fr]">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </main>
    </div>
  )
}

