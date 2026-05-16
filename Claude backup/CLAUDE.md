# CLAUDE.md

## Project Context

This is my personal portfolio project.

It is a full-stack portfolio, but testing work should currently focus only on the frontend unless I explicitly ask for backend testing.

Project structure:

- `client/` contains the Vite + React + TypeScript frontend.
- `server/` contains the Express + TypeScript backend.
- `shared/` contains shared Zod schema/config used by both client and server.

Frontend stack:

- React
- TypeScript
- Vite
- Material UI
- React Hook Form
- Zod
- Vitest
- React Testing Library

Backend stack:

- Node.js
- Express
- TypeScript
- Zod
- Nodemailer

## Current Testing Goal

Implement frontend test coverage only.

Use:

- Vitest
- React Testing Library
- `@testing-library/jest-dom`
- `@testing-library/user-event`
- jsdom
- V8 coverage

Do not use:

- Jest
- Supertest
- Cypress
- Playwright
- backend route tests
- E2E tests

Backend testing can be suggested later, but do not implement it unless I explicitly request it.

## Testing Scope

Prioritize tests for:

### 1. `client/src/services/contactService.ts`

Test:

- successful fetch returns sent status
- failed fetch returns fallback mailto URL
- rejected fetch returns fallback mailto URL

### 2. `client/src/components/forms/ContactForm.tsx`

Test:

- renders form fields
- validates required/invalid inputs
- submits valid data
- shows success state
- shows fallback email state

### 3. `shared/config/schema.ts`

Test:

- valid data passes
- invalid name fails
- invalid email fails
- invalid inquiry fails
- invalid message fails

### 4. `client/src/utils/muiConverter.ts`

Test:

- simple utility behavior

## Commands

Frontend commands should be run inside `client/`:

```bash
npm run typecheck
npm run build
npm test
npm run test:coverage
```

## Code Change Rules

Follow these rules strictly:

- Do not rewrite the app.
- Do not rename existing components, functions, files, or folders unless absolutely necessary.
- Do not change public APIs unless required for testability.
- Do not change visual design.
- Do not refactor unrelated files.
- Do not weaken TypeScript strictness.
- Do not disable important TypeScript checks.
- Do not add `any` unless there is a clear reason and no better option.
- Do not add `@ts-ignore`.
- Do not add snapshot tests.
- Do not chase 100% coverage.
- Keep tests simple, readable, and beginner-friendly.
- Prefer user-visible behavior tests over implementation-detail tests.
- Use `screen.getByRole`, `screen.getByLabelText`, `screen.findByText`, and `userEvent` where possible.
- Mock external behavior such as `fetch`.
- Restore mocks after tests.

## Security and Safety Rules

- Never expose or print secrets, tokens, API keys, passwords, or environment variables.
- Never commit `.env` files.
- Never send real emails during tests.
- Never call real external APIs during tests.
- Never install unnecessary packages.
- Never modify deployment settings unless explicitly requested.
- Before running commands that install packages, modify many files, delete files, or change git history, explain the action first.

## AI Workflow Rules

When asked to implement something:

1. Inspect relevant files first.
2. Explain the planned files to modify.
3. Make the smallest reasonable change.
4. Run relevant checks.
5. Summarize exactly what changed.

If a task is ambiguous, make a reasonable minimal assumption and continue, but mention the assumption.

If an error happens:

- Explain the cause briefly.
- Fix it with the smallest possible change.
- Do not rewrite unrelated code.

## Portfolio Positioning

This project should present testing honestly as:

> Frontend unit and component tests with Vitest and React Testing Library, covering validation, form behavior, and contact submission fallback logic.

Do not describe the project as having:

- full-stack testing
- backend testing
- E2E testing
- production-grade test coverage
- 100% coverage
