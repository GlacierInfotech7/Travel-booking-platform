# Glacier InfoTech Travel

Glacier InfoTech Travel is a frontend-only travel and hotel discovery website created as a portfolio project for **Glacier InfoTech**. It adapts the original Next.js travel template into a standalone demo with local sample data and simulated booking interactions.

The website preserves the original UI and page structure while removing dependencies on external APIs, databases, authentication providers, and payment services.

## Features

- Responsive travel and hotel discovery interface
- Destination search and hotel filtering using local sample data
- Date-range selection and guest selection
- Hotel detail pages with galleries, ratings, and amenities
- Illustrative map panels without external map APIs
- Browser-based favorites using `localStorage`
- Simulated booking confirmation and demo booking history
- Access to the demo without login or registration
- Responsive layouts for desktop, tablet, and mobile

**Note:** This is a demonstration website only. Hotel searches use sample data, and bookings are simulated. The website does not create real reservations, process payments, or communicate with hotel providers.

## Tech stack

- Next.js (Pages Router)
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- React Date Range
- Local mock data and browser `localStorage`

## Getting started

### Prerequisites

- Node.js 18 or newer
- npm

### Installation

Clone your repository and navigate to the project directory:

```bash
git clone <your-glacier-infotech-repository-url>
cd Travel-booking-platform
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

No `.env.local` file, API keys, database, OAuth credentials, payment credentials, or external service accounts are required.

## Build and validation

Run the available project checks:

```bash
npm test
npm run lint
npm run build
```

Some scripts may not be configured in the original project. Check `package.json` for the available commands and use the corresponding checks.

## Deployment on Vercel

1. Push the customized project to your GitHub repository.
2. Import the repository into [Vercel](https://vercel.com/).
3. Keep the default Next.js framework settings.
4. Do not add environment variables for external services.
5. Deploy the project.

The production build should use the existing Next.js build script. No database migrations, API credentials, or payment configuration are required.

## Project scope

This portfolio adaptation is designed to demonstrate frontend development, responsive UI design, local state management, and interactive booking flows.

- No backend or database
- No authentication or user accounts
- No external hotel-search or mapping APIs
- No real bookings or payment processing
- No external environment variables required

## Attribution

This project is based on the open-source UI and code foundation of [weisdevelopers/travel-template](https://github.com/weisdevelopers/travel-template).

Glacier InfoTech branding, local mock data, frontend-only interactions, and deployment documentation have been adapted for this portfolio project.

The upstream repository did not include a `LICENSE` file. Please verify the original author's licensing terms and obtain permission if required before distributing or using the adapted project commercially. Do not assume that the absence of a license grants permission for unrestricted reuse.
