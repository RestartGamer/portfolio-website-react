import { z } from "zod";
import { inquiryOptions } from "./inquiryOptions"

export const Schema = z.object({
    name: z.string().min(3, "3 characters minimum"),
    email: z.email("Please insert a valid email address"),
    inquiry: z.string().refine(value => inquiryOptions.includes(value),
        { message: "Please select an option" }),
    message: z.string().min(10, "10 characters minimum"),
})