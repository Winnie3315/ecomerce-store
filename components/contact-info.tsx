import { Mail, Phone } from 'lucide-react'

export function ContactInfo() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-500 text-white">
            <Phone className="h-5 w-5" />
          </div>
          <h2 className="text-xl font-semibold">Call To Us</h2>
        </div>
        <div className="space-y-2 pl-12">
          <p className="text-sm text-muted-foreground">
            We are available 24/7, 7 days a week.
          </p>
          <p className="text-sm">Phone: +8801611112222</p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-500 text-white">
            <Mail className="h-5 w-5" />
          </div>
          <h2 className="text-xl font-semibold">Write To US</h2>
        </div>
        <div className="space-y-2 pl-12">
          <p className="text-sm text-muted-foreground">
            Fill out our form and we will contact you within 24 hours.
          </p>
          <p className="text-sm">Emails: customer@exclusive.com</p>
          <p className="text-sm">Emails: support@exclusive.com</p>
        </div>
      </div>
    </div>
  )
}
