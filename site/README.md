# Karthikeyan — Portfolio

A single-page portfolio site for Karthikeyan (Founder of **Digitals Info** &
**kfold.co**), built for winning small-business clients. Warm editorial
"modern consultant" look — off-white, dark ink, deep-teal accent — with
restrained motion (scroll reveals, animated counters, hover lifts, an
industries marquee) and a floating WhatsApp button.

Implemented in **React + Vite**. The production build is fully static, so it
deploys to Netlify, Vercel, GitHub Pages, or any static host.

## Run

```bash
npm install
npm run dev        # local dev server
npm run build      # production build -> dist/
npm run preview    # preview the production build
```

## Structure

```
src/
  App.jsx              # page assembly + scroll-reveal hook
  data.js              # ALL copy, links, services, testimonials, etc.
  index.css            # design tokens (colors, fonts) + base styles
  components.css       # section/component styles
  hooks/useReveal.js   # IntersectionObserver scroll reveals
  components/
    Nav, Hero, Services, Process, About, Ventures,
    Industries, Testimonials, Contact, WhatsAppButton
    Icon.jsx           # line-icon renderer
    Counter.jsx        # count-up-on-scroll number
  assets/
    hero-portrait.png      # graded 4:5 hero photo
    about-portrait.png     # graded 1:1 about photo
    digitals-info-logo.svg # brand mark (see note below)
    kfold-logo.svg         # brand mark (see note below)
```

## Editing content

All text, links, and lists live in **`src/data.js`** — services,
testimonials, industries, contact details (phone, email, LinkedIn, WhatsApp,
booking-calendar URL). Update there; no component edits needed.

> Verify the external links stay current — the Google Calendar booking link,
> LinkedIn URL, phone, and email are carried over from the design.

## Company logos

`digitals-info-logo.svg` and `kfold-logo.svg` are faithful **SVG
recreations** of the two brand marks (chosen so the site self-hosts its
assets with no dependency on the old Netlify site). To use the exact original
raster logos instead, drop the PNG files into `src/assets/` and update the two
`import` lines at the top of `src/data.js`.

## Swapping the client photos

The two graded portraits live in `src/assets/`. Replace `hero-portrait.png`
(4:5) and/or `about-portrait.png` (1:1) with new files of the same aspect
ratio to update them.
