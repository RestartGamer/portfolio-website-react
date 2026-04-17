# React Portfolio (Full-Stack)

A personal portfolio website built with **React** and **Express**, featuring a responsive multi-page frontend, shared form validation, and backend email handling with a fallback to the user's mail client.

---

## Preview

### Live Application
![App Preview](./assets/app-preview.png)

### Figma Design
![Figma Design](./assets/figma-preview.png)

---

## Live Demo

_Add your deployment link here._

---

## Tech Stack

- **Frontend:** React, MUI, React Hook Form, Zod
- **Backend:** Node.js, Express, Nodemailer
- **Build Tool:** Vite

---

## Features

- Responsive portfolio layout
- Reusable components, sections, and layout tokens
- Contact form with validation shared between frontend and backend using Zod
- Email sending through an Express backend with Nodemailer
- `mailto:` fallback if the backend is unavailable
- Light/dark theme support
- Multi-page routing with React Router

---

## Project Structure

```txt
ReactCVPortfolio/
├── client/
│   ├── src/
│   │   ├── assets/        # Images and static assets
│   │   ├── components/    # Reusable UI components
│   │   ├── layout/        # Shared layout values and spacing tokens
│   │   ├── pages/         # Route-level pages
│   │   ├── sections/      # Larger page sections/compositions
│   │   ├── services/      # Frontend API/service logic
│   │   └── utils/         # Frontend utility helpers
│   └── package.json
├── server/
│   ├── controllers/       # Express request handlers
│   ├── middleware/        # Validation and request middleware
│   ├── routes/            # Express routes
│   ├── utils/             # Server-side helpers
│   └── package.json
├── shared/
│   └── config/            # Shared constants and validation schemas
└── README.md
```

---

## Frontend / Backend Flow

The frontend is built with React and MUI and serves as the user-facing portfolio interface. It handles routing, layout, theming, and the contact form UI.

The backend is built with Express and handles contact form submissions. Form data is validated and sent through the backend email flow using Nodemailer. If the backend request fails, the frontend can fall back to opening the user's default mail client with a `mailto:` link.

Validation-related configuration is shared between frontend and backend to keep the form rules consistent across both sides.

---

## Setup

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (LTS recommended)
- npm

You can verify both with:

```bash
node -v
npm -v
```

### 1. Clone the repository

```bash
git clone <your-repository-url>
cd ReactCVPortfolio
```

### 2. Install dependencies

Install dependencies for both the client and server:

```bash
cd client
npm install
cd ../server
npm install
```

### 3. Configure environment variables

Create a `.env` file in both the `client` and `server` folders.

#### `client/.env`

```env
VITE_API_URL=http://localhost:5000
```

#### `server/.env`

```env
PORT=5000
CLIENT_URL=http://localhost:5173
EMAIL_USER=your-email@example.com
EMAIL_PASS=your-email-app-password
EMAIL_TO=your-email@example.com
```

### 4. Start the development servers

Open two terminals.

#### Start the backend

```bash
cd server
npm run dev
```

#### Start the frontend

```bash
cd client
npm run dev
```

### 5. Open the app

Once both servers are running, open:

```txt
http://localhost:5173
```

---

## Notes

- The frontend runs with **Vite**
- The backend runs with **Express**
- The React client sends contact form requests to the Express API
- Email delivery is handled through **Nodemailer**
- If email delivery fails, the project can fall back to a `mailto:` flow
- Make sure `CLIENT_URL` and `VITE_API_URL` match your local setup
