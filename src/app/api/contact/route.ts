import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, purpose, message, botField } = body;

    // Honeypot spam check
    if (botField) {
      return NextResponse.json({ success: true, message: 'Message filtered' }, { status: 200 });
    }

    if (!name || name.trim().length < 2) {
      return NextResponse.json({ success: false, message: 'Valid name is required' }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email.trim())) {
      return NextResponse.json({ success: false, message: 'Valid email is required' }, { status: 400 });
    }

    if (!purpose) {
      return NextResponse.json({ success: false, message: 'Purpose is required' }, { status: 400 });
    }

    if (!message || message.trim().length < 10) {
      return NextResponse.json({ success: false, message: 'Message must be at least 10 characters' }, { status: 400 });
    }

    // In production, integrate with Resend, SendGrid, or nodemailer using environment variable
    // console.log('[New Contact Submission]:', { name, email, purpose, message, timestamp: new Date().toISOString() });

    return NextResponse.json(
      {
        success: true,
        message: 'Message received successfully',
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Internal server processing error' },
      { status: 500 }
    );
  }
}
