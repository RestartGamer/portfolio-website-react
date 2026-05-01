const adminEmail = "ckorkmaz56@gmail.com";
const API_BASE = import.meta.env.VITE_API_URL;
const REQUEST_TIMEOUT_MS = 10000;

function openFallbackMailto(payload) {
  const subject = encodeURIComponent(`Portfolio Contact: ${payload.inquiry}`);
  const body = encodeURIComponent(
`Name: ${payload.name}
Email: ${payload.email}
Inquiry: ${payload.inquiry}

Message:
${payload.message}`
  );

  return `mailto:${adminEmail}?subject=${subject}&body=${body}`;
}

export async function submitContactMessage(payload) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  try {
    const res = await fetch(`${API_BASE}/api/messages`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!res.ok) {
      throw new Error("Server responded but failed");
    }

    return { status: "sent" };
  } catch (error) {
    clearTimeout(timeoutId);

    console.error("Email API failed or timed out, using mailto fallback:", error);

    return {
      status: "fallback",
      fallbackUrl: openFallbackMailto(payload),
    };
  }
}