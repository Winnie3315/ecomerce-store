'use client'

import { useState } from 'react'
import axios from "axios"
import Image from 'next/image'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { Loader2 } from 'lucide-react'
import { toast } from 'react-hot-toast'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { useCart } from '@/hooks/use-cart'
import { Breadcrumb } from '@/components/breadcrumb'

const formSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  companyName: z.string().optional(),
  streetAddress: z.string().min(1, 'Street address is required'),
  apartment: z.string().optional(),
  townCity: z.string().min(1, 'Town/City is required'),
  phoneNumber: z.string().min(1, 'Phone number is required'),
  email: z.string().email('Invalid email address'),
  paymentMethod: z.enum(['bank', 'cash']),
  saveInformation: z.boolean().default(false),
})

export default function CheckoutPage() {
  const [loading, setLoading] = useState(false)
  const [couponCode, setCouponCode] = useState('')
  const cart = useCart()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      paymentMethod: 'bank',
      saveInformation: false,
    },
  })

  // const onSubmit = async (values: z.infer<typeof formSchema>) => {
  //   try {
  //     setLoading(true)
  
  //     // Making the POST request with axios
  //     const response = await axios.post(
  //       `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
  //       {
  //         user: {
  //           name: values.firstName,
  //           email: values.email,
  //           address: `${values.streetAddress} ${values.apartment || ''} ${values.townCity}`,
  //           phone: values.phoneNumber,
  //           company: values.companyName,
  //         },
  //         productIds: cart.items.map(item => ({
  //           id: item.id,
  //           quantity: item.quantity
  //         })),
  //         paymentMethod: values.paymentMethod,
  //       },
  //       {
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //       }
  //     )
  
  //     // Axios automatically handles the response status check, no need for response.ok
  //     if (response.status !== 200) {
  //       throw new Error('Failed to place order')
  //     }
  
  //     toast.success('Order placed successfully!')
  //     cart.removeAll()
  //   } catch (error) {
  //     toast.error('Something went wrong')
  //   } finally {
  //     setLoading(false)
  //   }
  // }
  
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setLoading(true);
  
      // Формируем структуру данных для отправки
      const requestPayload = {
        productIds: cart.items.map(item => item.id), // Список ID продуктов
        values: {
          firstName: values.firstName,
          email: values.email,
          streetAddress: values.streetAddress,
          apartment: values.apartment || '',
          townCity: values.townCity,
          phoneNumber: values.phoneNumber,
          companyName: values.companyName || '',
        },
      };
  
      // Отправка POST-запроса с данными
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
        requestPayload,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
  
      if (response.status !== 200) {
        throw new Error('Failed to place order');
      }
  
      toast.success('Order placed successfully!');
      cart.removeAll();
    } catch (error) {
      toast.error('Something went wrong');
    } finally {
      setLoading(false);
    }
  };
  

  const total = cart.items.reduce((acc, item) => {
    const price = item.discount
      ? Number(item.price) * (1 - item.discount / 100)
      : Number(item.price)
    return acc + (price * item.quantity)
  }, 0)

  return (
    <div className="container mx-auto px-4 py-8">

      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_400px]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold">Billing Details</h2>
              <div className="mt-4 space-y-4">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>First Name*</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="companyName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company Name</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="streetAddress"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Street Address*</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="apartment"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Apartment, floor, etc. (optional)</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="townCity"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Town/City*</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number*</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address*</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <FormField
              control={form.control}
              name="paymentMethod"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Payment Method</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="space-y-3"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="bank" id="bank" />
                        <Label htmlFor="bank" className="flex items-center gap-2">
                          Bank
                          <div className="flex gap-2">
                            <Image
                              src="/placeholder.svg"
                              alt="Visa"
                              width={32}
                              height={20}
                              className="h-5 w-auto"
                            />
                            <Image
                              src="/placeholder.svg"
                              alt="Mastercard"
                              width={32}
                              height={20}
                              className="h-5 w-auto"
                            />
                          </div>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="cash" id="cash" />
                        <Label htmlFor="cash">Cash on delivery</Label>
                      </div>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="saveInformation"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>
                      Save this information for faster check-out next time
                    </FormLabel>
                  </div>
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full"
              disabled={loading}
            >
              {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Place Order
            </Button>
          </form>
        </Form>

        <div className="space-y-6">
          <div className="space-y-4">
            {cart.items.map((item) => (
              <div key={item.id} className="flex items-center gap-4">
                <div className="relative aspect-square h-16 w-16 overflow-hidden rounded-lg">
                  <Image
                    fill
                    src={item.images[0].url}
                    alt={item.name}
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 justify-between">
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-muted-foreground">
                      Quantity: {item.quantity}
                    </p>
                  </div>
                  <p className="font-medium">
                    ${(Number(item.price) * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <div className="flex justify-between">
              <span>Subtotal:</span>
              <span className="font-medium">${total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping:</span>
              <span className="font-medium">Free</span>
            </div>
            <div className="flex justify-between text-lg font-medium">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>

          <div className="flex gap-2">
            <Input
              placeholder="Coupon Code"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
            />
            <Button variant="outline">Apply Coupon</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

