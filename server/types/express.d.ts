import type { ContactFormData } from "../../shared/config/schema.js";

declare module "express-serve-static-core" {
  interface Request {
    validatedData: ContactFormData;
  }
}
