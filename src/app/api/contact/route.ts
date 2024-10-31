import { EmailTemplate } from '@/app/_utils/components/email___template';
import { NextResponse } from 'next/server'

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
    try {

        const formData = await request.json();
        const { name, email, message, country, phone, occupation, education } = formData;


        const { data, error } = await resend.emails.send({
            // from: 'Viso Way Consultancy <onboarding@resend.dev>',
            from: 'Viso Way Consultancy <info@visowayconsultancy.com>',
            to: ['musiur.opu@gmail.com', 'visowayconsultancy@gmail.com','info@visowayconsultancy.com'],
            cc: [email],
            subject: 'Contact Form Submission: Viso Way Consultancy Website',
            react: EmailTemplate({ name, email, country, phone, occupation, education, message }),
        });

        if (error) {
            console.log(error)
            return Response.json({ error }, { status: 500 });
        }


        return NextResponse.json({ success: true, message: 'Email sent successfully!', data });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ success: false, message: 'Failed to send email.' });
    }
}
