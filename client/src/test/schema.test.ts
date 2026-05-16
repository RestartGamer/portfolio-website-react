import { Schema } from "../../../shared/config/schema";

const validData = {
  name: "Alice",
  email: "alice@example.com",
  inquiry: "General Inquiry",
  message: "Hello, this is a test message.",
};

describe("Schema", () => {
  it("passes with valid contact form data", () => {
    const result = Schema.safeParse(validData);
    expect(result.success).toBe(true);
  });

  it("fails when name is shorter than 3 characters", () => {
    const result = Schema.safeParse({ ...validData, name: "Al" });
    expect(result.success).toBe(false);
  });

  it("fails with an invalid email", () => {
    const result = Schema.safeParse({ ...validData, email: "not-an-email" });
    expect(result.success).toBe(false);
  });

  it("fails with an invalid inquiry option", () => {
    const result = Schema.safeParse({ ...validData, inquiry: "Invalid Option" });
    expect(result.success).toBe(false);
  });

  it("fails when message is shorter than 10 characters", () => {
    const result = Schema.safeParse({ ...validData, message: "Short" });
    expect(result.success).toBe(false);
  });
});
