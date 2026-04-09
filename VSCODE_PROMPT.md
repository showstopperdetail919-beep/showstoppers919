# VS Code / Claude Code Handoff Prompt

Copy and paste the prompt below into Claude Code (or your AI assistant in VS Code) to continue building from where we left off.

---

## PROMPT — Paste This Into VS Code

```
You are building a production-ready website for Show Stopper Detailing, a premium mobile auto detailing business in Durham, NC. The project is already scaffolded as a Next.js 14 + Tailwind CSS + TypeScript app with all data files, copy, styles, and config in place.

## Project Location
Open the ShowStopperDetail folder. All files are ready.

## What's Already Done
- package.json with Next.js 14, React 18, Tailwind, Framer Motion, Lucide icons
- tailwind.config.js with brand colors (black #0A0A0A, gold #C9A84C, charcoal, etc.) and fonts (Montserrat headings, Inter body)
- globals.css with brand variables, gold gradient text, button styles, card styles
- src/data/business.json — all business info, contact, SEO meta, policies
- src/data/services.json — full service menu with prices, features, deposit amounts
- src/data/faq.json — 7 FAQ entries
- WEBSITE_COPY.md — all polished website copy ready to use
- .gitignore, tsconfig.json, postcss.config.js, next.config.js

## What You Need to Build

### 1. Run `npm install` first

### 2. Create the Next.js App Router structure:
- src/app/layout.tsx (root layout with SEO meta from business.json)
- src/app/page.tsx (homepage assembling all sections)
- src/app/globals.css (import the existing one from src/styles/)

### 3. Build these components (src/components/):
- **Navbar.tsx** — Fixed top nav. Logo text "SHOW STOPPER" in gold gradient. Links: Services, Pricing, How It Works, FAQ, Contact. Mobile hamburger menu. "Book Now" gold CTA button.
- **Hero.tsx** — Full viewport height. Dark overlay on background. Headline: "Premium Mobile Detailing. At Your Door." Subheadline: "Show-stopping results without leaving your driveway. Serving Durham, Raleigh, Cary, and beyond." Two CTAs: "Book Your Detail Now" (gold) and "View Services" (outline). Framer Motion fade-in animation.
- **Services.tsx** — Grid of service cards from services.json. Each card: name, price, feature list, duration, CTA button. Gold border on hover. "Most Popular" badge on Gold Detail. Custom Quote card has "Get a Quote" instead of "Book Now".
- **HowItWorks.tsx** — 3-step horizontal layout (stacks on mobile). Icons from Lucide. Step 1: Pick Your Service. Step 2: Book & Confirm. Step 3: We Come to You. Gold numbered circles.
- **Pricing.tsx** — Clean comparison table. All services with prices. Gold header row. CTA at bottom.
- **WhyChooseUs.tsx** — 5 trust badges: Locally Owned, 100% Mobile, Hand Wash Only, Premium Products, Satisfaction Guaranteed. Icon + text layout.
- **Testimonials.tsx** — Placeholder section with 2-3 sample testimonials in quote cards. Easy to update later.
- **FAQ.tsx** — Accordion style. Click to expand answers. Uses faq.json data. Gold accent on active item.
- **BookingSection.tsx** — Contact form: name, email, phone, service dropdown (from services.json), preferred date, vehicle type, location/address, message. Form submits to an API route or mailto. Shows deposit info. Gold submit button.
- **Policies.tsx** — Deposit & payment policy + cancellation policy. Clean two-column layout on desktop.
- **Footer.tsx** — SEO paragraph from business.json. Contact info. Service area list. Social link placeholders. Copyright.

### 4. Create a simple admin page:
- src/app/admin/page.tsx — password-protected (check against env var NEXT_PUBLIC_ADMIN_PASSWORD). Shows list of form submissions (stored in a JSON file or local state for now — this is MVP). Simple table view.

### 5. API route for form submissions:
- src/app/api/booking/route.ts — POST handler that receives form data, validates it, and stores to a local JSON file (data/bookings.json). Returns success/error. In production this would connect to a database or email service.

### 6. Deployment prep:
- Ensure `next build` passes with zero errors
- Add a vercel.json if needed
- Make sure all images use next/image or CSS backgrounds
- Test responsive design at 375px, 768px, 1024px, 1440px

## Brand Rules
- Background: #0A0A0A (near black)
- Primary accent: #C9A84C (gold)
- Cards/sections: #1A1A1A with #2A2A2A borders
- Text: #FAFAFA (off-white)
- Headings: Montserrat bold/extrabold
- Body: Inter regular/medium
- Buttons: Gold gradient with black text, uppercase
- Tone: confident, premium, clean — not flashy or over-designed
- Mobile-first responsive design

## Environment
Create a .env.local file:
NEXT_PUBLIC_ADMIN_PASSWORD=ShowStopper2024!

## Git & Deploy
After everything builds clean:
git init && git add . && git commit -m "Initial commit: Show Stopper Detailing website"
Then push to GitHub and connect to Vercel for deployment.

Build this step by step. Start with npm install, then layout and page, then components top to bottom. Test the build after each major component.
```

---

## Notes
- The admin password for the MVP is: `ShowStopper2024!` — change this before going live
- For a real booking system later, consider integrating Calendly, Square Appointments, or Acuity
- For payments/deposits, Stripe or Square would be the cleanest integration
- Social links in business.json are empty — fill those in once accounts are created
