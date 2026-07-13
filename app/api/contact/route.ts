import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, phone, message } = body;

    if (!firstName || !lastName || !phone || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!token) {
      return NextResponse.json(
        { error: "Telegram bot not configured" },
        { status: 500 }
      );
    }

    if (!chatId) {
      return NextResponse.json(
        { error: "Telegram chat ID not configured" },
        { status: 500 }
      );
    }

    const text = [
      "🆕 <b>Yangi murojaat / Новая заявка</b>",
      "",
      `👤 <b>Ism / Имя:</b> ${escapeHtml(firstName)} ${escapeHtml(lastName)}`,
      `📱 <b>Telefon / Телефон:</b> ${escapeHtml(phone)}`,
      `💬 <b>Xabar / Сообщение:</b>`,
      escapeHtml(message),
    ].join("\n");

    const response = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text,
          parse_mode: "HTML",
        }),
      }
    );

    const data = await response.json();

    if (!response.ok || !data.ok) {
      console.error("Telegram API error:", data);
      return NextResponse.json(
        { error: "Failed to send message" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
