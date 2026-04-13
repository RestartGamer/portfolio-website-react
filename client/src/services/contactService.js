
const adminEmail = "ckorkmaz56@gmail.com"
const API_BASE = import.meta.env.VITE_API_URL;


function openFallbackMailto(payload) {
  const adminEmail = "ckorkmaz56@gmail.com";

  const subject = encodeURIComponent(`Portfolio Contact: ${payload.inquiry}`);
  const body = encodeURIComponent(
`Name: ${payload.name}
Email: ${payload.email}
Inquiry: ${payload.inquiry}

Message:
${payload.message}`
  );

  window.open(
  `mailto:${adminEmail}?subject=${subject}&body=${body}`,
  "_blank"
);
}


export async function submitContactMessage(payload) {
  try {
    const res = await fetch(`${API_BASE}/api/messages`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      throw new Error("Server responded but failed");
    }

    return { status: "sent" };

  } catch (error) {
    openFallbackMailto(payload);
    return { status: "fallback-opened" };
  }
}