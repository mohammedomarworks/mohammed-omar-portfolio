# Mohammed Omar — Developer Portfolio

A modern, minimal, engineering-focused personal portfolio website for **Mohammed Omar**, Software Engineering student at **Daffodil International University**.

Built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**.

---

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the site.

### 3. Build for Production
```bash
npm run build
npm start
```

---

## How to Customize Your Information

All personal information, links, project details, skills, and academic history are stored in a **single centralized data file**:

👉 `src/data/portfolio.ts`

### 1. Personal Social Links & Contact
Open `src/data/portfolio.ts` and update the placeholder links:
- **Email**: Replace `omar.swe.diu@example.com` with your real email.
- **GitHub**: Replace `https://github.com/yourusername` with your GitHub profile URL.
- **LinkedIn**: Replace `https://linkedin.com/in/yourusername` with your LinkedIn profile URL.

### 2. Projects
Under `projects`, update each card's:
- `githubUrl`: Your project's GitHub repository link.
- `liveUrl`: Your live demo link (or `#` if not deployed yet).
- `description` and `techStack`: Add or adjust tags as your project evolves.

### 3. Skills
Under `skillCategories`, add or edit skills across:
- **Frontend**
- **Programming / Development**
- **Tools & Environment**
- **Creative / 3D**

### 4. Education
Under `education`, modify your status, session dates, or academic highlights.

---

## Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css           # Tailwind setup & CSS variables
│   │   ├── layout.tsx            # Root layout, metadata & accessibility
│   │   └── page.tsx              # Single-page portfolio composition
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx        # Sticky header with active scroll spy
│   │   │   ├── MobileNav.tsx     # Mobile drawer navigation
│   │   │   ├── Footer.tsx        # Footer with back-to-top & socials
│   │   │   └── ThemeToggle.tsx   # SSR hydration-safe Dark/Light toggle
│   │   ├── providers/
│   │   │   └── ThemeProvider.tsx # Theme context & persistent state
│   │   ├── sections/
│   │   │   ├── Hero.tsx          # Headline, DIU status & quick CTAs
│   │   │   ├── About.tsx         # Bio, academic foundation & interests
│   │   │   ├── Skills.tsx        # Categorized skill badges
│   │   │   ├── Projects.tsx      # Featured project showcase
│   │   │   ├── Education.tsx     # Timeline card for DIU
│   │   │   └── Contact.tsx       # Direct email copying & social links
│   │   └── ui/
│   │       ├── Container.tsx     # Max-width layout wrapper
│   │       ├── SectionHeader.tsx # Reusable section title & category tag
│   │       ├── SkillBadge.tsx    # Interactive skill tag component
│   │       └── ProjectCard.tsx   # Reusable project card with badges & actions
│   ├── data/
│   │   └── portfolio.ts          # Central data source for all content
│   └── types/
│       └── portfolio.ts          # TypeScript interfaces
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.ts
```

---

## Key Features

- **Dark Theme First**: Engineered with a deep slate/zinc developer aesthetic and high-contrast typography.
- **Theme Toggle**: Smooth toggle between dark and light modes with zero hydration mismatch and `localStorage` persistence.
- **Accessible & Semantic**: Semantic landmarks (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`), keyboard navigation, visible focus indicators, and `prefers-reduced-motion` compliance.
- **Copy Email Interaction**: One-click email copy with instant feedback.
- **Responsive**: Mobile-first design looking sharp from 320px mobile screens up to ultra-wide displays.
