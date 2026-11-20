import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, purpose, message, botField } = body;

    // Honeypot spam check
    if (botField) {
      return NextResponse.json({ success: true, message: 'Message filtered' }, { status: 200 });
    }

    if (!name || name.trim().length < 2) {
      return NextResponse.json({ success: false, message: 'Nama wajib diisi minimal 2 karakter.' }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email.trim())) {
      return NextResponse.json({ success: false, message: 'Format alamat email tidak valid.' }, { status: 400 });
    }

    if (!purpose) {
      return NextResponse.json({ success: false, message: 'Keperluan diskusi wajib dipilih.' }, { status: 400 });
    }

    if (!message || message.trim().length < 10) {
      return NextResponse.json({ success: false, message: 'Pesan wajib diisi minimal 10 karakter.' }, { status: 400 });
    }

    const recipient = process.env.CONTACT_EMAIL || 'rayhanramadan402@gmail.com';
    const timestamp = new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' });

    const purposeMap: Record<string, string> = {
      internship: 'Peluang Magang (Internship)',
      freelance: 'Proyek Freelance IoT / Web',
      training: 'Pelatihan Robotika / Workshop',
      other: 'Lainnya / Kolaborasi Teknis',
    };

    const purposeLabel = purposeMap[purpose] || purpose;
    const subject = `[Portofolio] ${purposeLabel} — dari ${name.trim()}`;

    // Plain text email body
    const textContent = `
Pesan Baru dari Website Portofolio:

Pengirim: ${name.trim()}
Email Pengirim: ${email.trim()}
Keperluan: ${purposeLabel}
Waktu: ${timestamp} WIB

Pesan:
${message.trim()}

--------------------------------------------------
Balas langsung ke email ini untuk menghubungi pengirim.
    `.trim();

    // HTML email body with sleek tech theme
    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #0b0f19; color: #f1f5f9; padding: 24px; margin: 0; }
    .container { max-width: 600px; margin: 0 auto; background-color: #111827; border: 1px solid #1f2937; border-radius: 16px; overflow: hidden; }
    .header { background: linear-gradient(135deg, #ea580c, #f97316); padding: 24px; color: #ffffff; }
    .header h1 { margin: 0; font-size: 20px; font-weight: 800; }
    .header p { margin: 4px 0 0 0; font-size: 13px; opacity: 0.9; }
    .content { padding: 24px; }
    .meta-table { width: 100%; border-collapse: collapse; margin-bottom: 20px; }
    .meta-table td { padding: 8px 0; border-bottom: 1px solid #1f2937; font-size: 13px; }
    .meta-table td.label { color: #9ca3af; width: 35%; font-weight: 600; }
    .meta-table td.value { color: #f3f4f6; font-weight: 500; }
    .message-box { background-color: #1f2937; border-left: 4px solid #f97316; padding: 16px; border-radius: 8px; margin-top: 16px; }
    .message-box p { margin: 0; white-space: pre-wrap; font-size: 14px; line-height: 1.6; color: #e5e7eb; }
    .footer { padding: 16px 24px; background-color: #0d121f; border-top: 1px solid #1f2937; font-size: 12px; color: #6b7280; text-align: center; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Inquiry Portofolio Rayhan</h1>
      <p>Pesan masuk baru dari pengunjung website</p>
    </div>
    <div class="content">
      <table class="meta-table">
        <tr>
          <td class="label">Nama Pengirim:</td>
          <td class="value"><strong>${name.trim()}</strong></td>
        </tr>
        <tr>
          <td class="label">Email Pengirim:</td>
          <td class="value"><a href="mailto:${email.trim()}" style="color: #38bdf8; text-decoration: none;">${email.trim()}</a></td>
        </tr>
        <tr>
          <td class="label">Keperluan Diskusi:</td>
          <td class="value" style="color: #fb923c;">${purposeLabel}</td>
        </tr>
        <tr>
          <td class="label">Waktu Pengiriman:</td>
          <td class="value">${timestamp} WIB</td>
        </tr>
      </table>
      
      <div style="font-size: 12px; font-weight: 700; color: #9ca3af; text-transform: uppercase; letter-spacing: 0.05em; margin-top: 16px;">
        Detail Pesan:
      </div>
      <div class="message-box">
        <p>${message.trim().replace(/</g, '&lt;').replace(/>/g, '&gt;')}</p>
      </div>
    </div>
    <div class="footer">
      Dikirim otomatis via Sistem Kontak Portofolio Muhammad Rayhan Ramadhan
    </div>
  </div>
</body>
</html>
    `.trim();

    // Check for SMTP configuration (e.g. Gmail App Password or SMTP provider)
    const smtpUser = process.env.SMTP_USER || process.env.GMAIL_USER;
    const smtpPass = process.env.SMTP_PASS || process.env.GMAIL_APP_PASSWORD;
    const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com';
    const smtpPort = Number(process.env.SMTP_PORT) || 465;

    let emailDelivered = false;

    if (smtpUser && smtpPass) {
      try {
        const transporter = nodemailer.createTransport({
          host: smtpHost,
          port: smtpPort,
          secure: smtpPort === 465,
          auth: {
            user: smtpUser,
            pass: smtpPass,
          },
        });

        await transporter.sendMail({
          from: `"Portofolio Rayhan" <${smtpUser}>`,
          to: recipient,
          replyTo: `"${name.trim()}" <${email.trim()}>`,
          subject,
          text: textContent,
          html: htmlContent,
        });

        emailDelivered = true;
      } catch (sendError) {
        console.error('[Nodemailer SMTP Error]:', sendError);
      }
    }

    // Fallback mailto link
    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(textContent)}`;

    return NextResponse.json(
      {
        success: true,
        delivered: emailDelivered,
        recipient,
        mailtoLink,
        message: emailDelivered
          ? 'Pesan berhasil dikirim langsung ke inbox email Rayhan!'
          : 'Pesan telah dicatat. Anda juga dapat membuka draft email langsung.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('[Contact API Route Error]:', error);
    return NextResponse.json(
      { success: false, message: 'Terjadi kendala pada server saat memproses pesan.' },
      { status: 500 }
    );
  }
}
