import { submitContactMessage } from "./contactService";
import type { ContactFormData } from "../../../shared/config/schema";

const payload: ContactFormData = {
  name: "Alice",
  email: "alice@example.com",
  inquiry: "General Inquiry",
  message: "Hello, this is a test message.",
};

describe("submitContactMessage", () => {
  beforeEach(() => {
    vi.stubGlobal("fetch", vi.fn());
  });

  afterEach(() => {
    vi.restoreAllMocks();
    vi.unstubAllGlobals();
  });

  it("returns { status: 'sent' } when the server responds ok", async () => {
    vi.mocked(fetch).mockResolvedValueOnce({ ok: true } as Response);

    const result = await submitContactMessage(payload);

    expect(result).toEqual({ status: "sent" });
  });

  it("returns fallback when the server responds with ok: false", async () => {
    vi.spyOn(console, "error").mockImplementation(() => {});
    vi.mocked(fetch).mockResolvedValueOnce({ ok: false } as Response);

    const result = await submitContactMessage(payload);

    expect(result.status).toBe("fallback");
  });

  it("returns fallback when fetch rejects", async () => {
    vi.spyOn(console, "error").mockImplementation(() => {});
    vi.mocked(fetch).mockRejectedValueOnce(new Error("Network error"));

    const result = await submitContactMessage(payload);

    expect(result.status).toBe("fallback");
  });

  describe("fallbackUrl", () => {
    let fallbackUrl!: string;

    beforeEach(async () => {
      vi.spyOn(console, "error").mockImplementation(() => {});
      vi.mocked(fetch).mockRejectedValueOnce(new Error("Network error"));

      const result = await submitContactMessage(payload);
      if (result.status !== "fallback") throw new Error("Expected fallback result");
      fallbackUrl = result.fallbackUrl;
    });

    it("starts with mailto:", () => {
      expect(fallbackUrl).toMatch(/^mailto:/);
    });

    it("includes the encoded subject", () => {
      expect(fallbackUrl).toContain(
        encodeURIComponent(`Portfolio Contact: ${payload.inquiry}`)
      );
    });

    it("includes the encoded name", () => {
      expect(fallbackUrl).toContain(payload.name);
    });

    it("includes the encoded email", () => {
      expect(fallbackUrl).toContain(encodeURIComponent(payload.email));
    });

    it("includes the encoded inquiry", () => {
      expect(fallbackUrl).toContain(encodeURIComponent(payload.inquiry));
    });

    it("includes the encoded message", () => {
      expect(fallbackUrl).toContain(encodeURIComponent(payload.message));
    });
  });
});
