# Glacier InfoTech Travel

Glacier InfoTech Travel is a frontend-only travel and hotel booking website
demo for the Glacier InfoTech agency portfolio. It preserves the original
Next.js travel-template UI and page structure while replacing live services
with local sample data and harmless browser-only demo state.

This project is based on the open-source
[weisdevelopers/travel-template](https://github.com/weisdevelopers/travel-template).
The original implementation and required author attribution are retained; this
repository does not claim the upstream code was authored entirely by Glacier
InfoTech. The upstream repository did not include a `LICENSE` file.

## Demo features

- Responsive hotel discovery interface with the original Tailwind styling
- Local destination search and sample hotel filtering
- Local date-range and guest selection
- Hotel detail pages, galleries, ratings, amenities, and illustrative map panels
- Local favorites saved in browser `localStorage`
- Simulated booking confirmation and local demo booking history
- Demo access screen with no authentication requirement
- No real reservations, payments, API requests, database writes, or user data

## Technology

- Next.js Pages Router
- React and TypeScript
- Tailwind CSS, Framer Motion, and React Date Range
- Local mock data and browser `localStorage` only

## Run locally

Requirements: Node.js 18 or newer and npm.

```bash
git clone <your-glacier-infotech-repository-url>
cd Travel-booking-platform
npm install
npm run dev
```

Open <http://localhost:3000>. No `.env.local` file, API key, database, OAuth
provider, payment account, or other external service is required.

The included [.env.example](./.env.example) and
[.env.local.example](./.env.local.example) explicitly document that no
environment variables are needed.

## Validation

```bash
npm test
npm run lint
npm run build
```

Vercel can deploy this project with the default Next.js settings. The
`vercel-build` script is simply `next build`; no migration or credential setup
is required.

## Attribution

The UI and project foundation are based on the original
[weisdevelopers/travel-template](https://github.com/weisdevelopers/travel-template).
Glacier InfoTech branding, frontend-only mock flows, local data, and deployment
documentation were added for this portfolio adaptation.
