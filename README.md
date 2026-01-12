# jOES Creative Agency

A modern, responsive Next.js web application for a creative agency offering services in lighted signages, logo & branding, web design, and business consultation.

## Features

- 🎨 **6 Complete Pages**: Home, Lighted Signages, Logo & Branding, Web Design, Business Consultation, and About Us
- 🌓 **Dark/Light Mode**: Toggle between dark and light themes
- 📱 **Fully Responsive**: Optimized for all devices (desktop, tablet, mobile)
- 🎭 **Smooth Animations**: Framer Motion animations for seamless transitions
- 🎯 **Modern UI**: Clean, aesthetic design with Tailwind CSS
- 🔗 **Seamless Navigation**: Next.js routing with smooth page transitions

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
jOES/
├── app/
│   ├── about-us/
│   │   └── page.tsx
│   ├── business-consultation/
│   │   └── page.tsx
│   ├── lighted-signages/
│   │   └── page.tsx
│   ├── logo-branding/
│   │   └── page.tsx
│   ├── web-design/
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Footer.tsx
│   ├── Navigation.tsx
│   ├── ThemeProvider.tsx
│   └── ThemeToggle.tsx
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── next.config.js
```

## Pages

### Home Page
- Hero section with call-to-action
- Services overview with links to service pages
- About Us preview
- Footer with contact information

### Lighted Signages
- Introduction to lighted signages
- Types of signages (LED, Neon, Backlit)
- Gallery of work examples

### Logo & Branding
- Branding explanation
- Branding elements (Logo, Color, Typography, Visual Identity)
- Branding process steps
- Brand portfolio gallery

### Web Design
- Importance of professional web design
- Key features (Responsive, SEO, Performance, Security)
- Why choose us section
- Website mockups gallery

### Business Consultation
- Business consultation overview
- Services (Strategy, Market Analysis, Growth Planning, Team Building)
- Success stories
- Client testimonials

### About Us
- Company history and story
- Mission statement
- Core values
- Team members
- Contact section

## Features in Detail

### Dark/Light Mode
- Persistent theme preference stored in localStorage
- Smooth theme transitions
- System preference detection on first visit

### Responsive Navigation
- Desktop: Horizontal navigation menu
- Mobile: Hamburger menu with dropdown
- Dropdown background color matches current page theme
- Active page highlighting

### Animations
- Framer Motion animations on scroll
- Page transitions
- Hover effects
- Smooth scrolling

## Customization

### Colors
Edit `tailwind.config.js` to customize the color scheme and theme colors.

### Content
All page content can be customized in the respective page files in the `app/` directory.

### Styling
Global styles can be modified in `app/globals.css`. Component-specific styles use Tailwind CSS classes.

## License

This project is open source and available under the MIT License.

## Support

For questions or support, please contact info@joesagency.com

