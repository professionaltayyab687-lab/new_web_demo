# ThinkInner MVP prototype

A Next.js App Router prototype for ThinkInner. This is a local/demo build, not a production mental-health service.

## Requirements

- Node.js 20.9+ (Node.js 22 recommended)
- npm

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Checks

```bash
npm run typecheck
npm run build
```

## Prototype limitations to resolve before public launch

- The ThinkInner Guide uses scripted keyword-based replies; no AI model/API is connected.
- Profile, check-ins, journal, and intentions use browser localStorage. This is not encrypted storage, does not sync across devices, and is not suitable for sensitive clinical records.
- Community content is sample/demo data. Posting, likes, comments, user accounts, and real moderation are not connected.
- Professional listings are fictional demo records, not verified practitioners. Booking is not connected.
- The crisis response text is only a prototype response and should be replaced with verified, current local resources and a reviewed escalation flow before public use.
- Add a real privacy notice, terms, consent, secure backend, authentication, data deletion, abuse handling, and professional review before collecting real user information.

## Deployment

This is a Next.js app. Deploy it to Netlify using the Next.js runtime/plugin support, or follow Netlify's current Next.js deployment flow. Set the build command to `npm run build`; do not publish the source folder as a plain static site because this app uses Next.js routing.
