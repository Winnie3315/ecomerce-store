import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export async function POST(request: Request) {
  try {
    const { name, email, phone, message }: ContactFormData = await request.json();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: 'exclusiveshop.by.winnie@gmail.com',
      subject: `Contact Form - Phone: ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
    };

    try {
        console.log("Sending email...")
        await transporter.sendMail(mailOptions)
        console.log("Email sent successfully!")
        return new Response('Message sent successfully!', { status: 200 })
      } catch (error) {
        console.error('Error sending email:', error) 
        return new Response('Error sending message.', { status: 500 })
      }

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Error sending message.' }, { status: 500 });
  }
}
