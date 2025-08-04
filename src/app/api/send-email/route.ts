import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    // Create a transporter object
    let transporter = nodemailer.createTransport({
      service: 'your_email_service_provider', // e.g., 'gmail'
      auth: {
        user: 'your_email@example.com',
        pass: 'your_email_password',
      },
    });

    // Setup email data
    let mailOptions = {
      from: '"Your Name" <your_email@example.com>',
      to: 'recipient_email@example.com', // e.g., your email address
      subject: 'New Contact Form Submission',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    // Send email
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error processing request:', error);
    return NextResponse.json({ message: 'Error processing request' }, { status: 500 });
  }
}