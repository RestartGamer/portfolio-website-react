import { z } from "zod";
import { Schema } from "../../shared/config/schema.js";
import type { Request, Response, NextFunction } from "express";

export function validateMessage(req: Request, res: Response, next: NextFunction): void {
    try {
        const validatedData = Schema.parse(req.body);
        req.validatedData = validatedData;
        next();
    } catch (error) {
        if (error instanceof z.ZodError) {
            res.status(400).json({
                success: false,
                message: "validation failed",
                errors: error.issues,
            });
        } else {
            res.status(400).json({
                success: false,
                message: "validation failed",
                errors: String(error),
            });
        }
    }
}
