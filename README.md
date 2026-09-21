# IRONCORE FITNESS — Gym Website

A clean, light, informative website for a gym / fitness center. Simple to navigate,
fast, fully responsive and easy to customize for any gym client.

## Tech Stack

- **React 18 + Vite** — fast dev & optimized production build
- **Tailwind CSS** — light "cream" theme
- **Framer Motion** — subtle, tasteful animations
- **Lucide React** — clean icons

## Sections

Home (hero) · About · Programs · Trainers · Membership · Weekly Schedule · Gallery · Contact

## Getting Started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → dist/
npm run preview  # preview the build
```

## Customizing For A Client

All editable content lives in `src/data/`:

- `site.js` — brand name, phone, email, address, hours, socials, navigation
- `programs.js` — services / programs
- `trainers.js` — coaches
- `memberships.js` — plans & billing cycles
- `classes.js` — weekly timetable
- `gallery.js` — gallery photos

Images are centralized in `src/utils/images.js` — swap the Unsplash IDs (or drop in
local photos) to rebrand instantly.

The contact form is demo-only (simulated submit). Wire the `onSubmit` handler in
`src/sections/Contact.jsx` to a real email service, webhook or backend to go live.

## Project Structure

```
src/
  components/   Navbar, Footer, cards, WhatsApp & back-to-top buttons
    ui/         Image, Icon, Reveal, Counter, SectionHeading
  sections/     Hero, About, Programs, Trainers, Membership, Schedule, Gallery, Contact
  data/         All editable content
  hooks/ utils/ Small helpers
```

> Photography is royalty-free from Unsplash.
# GYM-frontend
