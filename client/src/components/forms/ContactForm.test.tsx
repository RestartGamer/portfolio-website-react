import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ContactForm } from "./ContactForm";
import { submitContactMessage } from "../../services/contactService";

vi.mock("../../services/contactService");

const mockSubmit = vi.mocked(submitContactMessage);

const validData = {
  name: "Alice",
  email: "alice@example.com",
  inquiry: "General Inquiry",
  message: "Hello, this is a test message.",
};

async function fillAndSubmit(user: ReturnType<typeof userEvent.setup>) {
  await user.type(screen.getByLabelText("Name"), validData.name);
  await user.type(screen.getByLabelText("Email"), validData.email);
  await user.click(screen.getByRole("combobox"));
  await user.click(screen.getByRole("option", { name: validData.inquiry }));
  await user.type(screen.getByLabelText("Message"), validData.message);
  await user.click(screen.getByRole("button", { name: /submit/i }));
}

describe("ContactForm", () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it("renders all form fields and the submit button", () => {
    render(<ContactForm />);

    expect(screen.getByLabelText("Name")).toBeInTheDocument();
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
    expect(screen.getByRole("combobox")).toBeInTheDocument();
    expect(screen.getByLabelText("Message")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /submit/i })).toBeInTheDocument();
  });

  it("shows validation errors when an empty form is submitted", async () => {
    const user = userEvent.setup();
    render(<ContactForm />);

    await user.click(screen.getByRole("button", { name: /submit/i }));

    expect(await screen.findByText("3 characters minimum")).toBeInTheDocument();
    expect(await screen.findByText("Please insert a valid email address")).toBeInTheDocument();
    expect(await screen.findByText("Please select an option")).toBeInTheDocument();
    expect(await screen.findByText("10 characters minimum")).toBeInTheDocument();
  });

  it("shows validation errors when name and message are too short", async () => {
    const user = userEvent.setup();
    render(<ContactForm />);

    await user.type(screen.getByLabelText("Name"), "Al");
    await user.type(screen.getByLabelText("Message"), "Short");

    expect(await screen.findByText("3 characters minimum")).toBeInTheDocument();
    expect(await screen.findByText("10 characters minimum")).toBeInTheDocument();
  });

  it("calls submitContactMessage with the correct data on submit", async () => {
    mockSubmit.mockResolvedValueOnce({ status: "sent" });
    const user = userEvent.setup();
    render(<ContactForm />);

    await fillAndSubmit(user);

    expect(mockSubmit).toHaveBeenCalledOnce();
    expect(mockSubmit).toHaveBeenCalledWith(validData);
  });

  it("shows the success message when submitContactMessage returns { status: 'sent' }", async () => {
    mockSubmit.mockResolvedValueOnce({ status: "sent" });
    const user = userEvent.setup();
    render(<ContactForm />);

    await fillAndSubmit(user);

    const status = await screen.findByRole("status");
    expect(status).toHaveTextContent(/thank you/i);
  });

  it("shows the fallback message when submitContactMessage returns { status: 'fallback' }", async () => {
    mockSubmit.mockResolvedValueOnce({ status: "fallback", fallbackUrl: "mailto:test" });
    const user = userEvent.setup();
    render(<ContactForm />);

    await fillAndSubmit(user);

    expect(await screen.findByText(/message delivery timed out/i)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /open email app/i })).toBeInTheDocument();
  });
});
