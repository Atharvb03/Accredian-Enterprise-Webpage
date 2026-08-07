# Quick Start Guide

Get the Accredian Enterprise website running in 3 minutes!

## Prerequisites

- Node.js 18+ installed
- npm or yarn
- Git (for deployment)

## Installation

```bash
# Navigate to project directory
cd accredian-enterprise

# Install dependencies (if not already done)
npm install

# Start development server
npm run dev
```

## View the Website

Open your browser and visit:
```
http://localhost:3000
```

You should see the Accredian Enterprise homepage with:
- Hero section with call-to-action
- Statistics showcase
- Partner logos
- Domain expertise cards
- Course segmentation
- Target audience profiles
- Framework visualization
- Delivery process
- FAQ section
- Testimonials carousel
- Contact form
- Footer

## Test the Contact Form

1. Scroll to the "Want to Learn More" section
2. Fill out the form:
   - Name: Your name
   - Email: your@email.com
   - Company: Your company
   - Phone: +1234567890
   - Message: Test message
3. Click "Submit"
4. You should see a success message

## Available Commands

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## Project Structure

```
accredian-enterprise/
├── app/                    # Next.js App Router
│   ├── api/leads/         # API endpoint
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Stats.tsx
│   └── ... (11 more)
└── types/                 # TypeScript types
```

## Making Changes

### Edit Content

1. Open `components/` directory
2. Find the component you want to edit
3. Make changes
4. Save - hot reload will update the browser

### Edit Styles

- Tailwind classes are used throughout
- Edit `tailwind.config.ts` for theme customization
- Edit `app/globals.css` for global styles

### Test API

```bash
# Test lead submission
curl -X POST http://localhost:3000/api/leads \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "company": "Test Co",
    "phone": "+1234567890",
    "message": "Test message"
  }'
```

Expected response:
```json
{
  "success": true,
  "message": "Thank you for your interest! Our team will contact you within 24 hours.",
  "data": {
    "id": "lead_1234567890",
    "submittedAt": "2026-08-07T12:00:00.000Z"
  }
}
```

## Deployment

See `DEPLOYMENT.md` for complete instructions.

Quick deploy to Vercel:
```bash
# Push to GitHub
git remote add origin https://github.com/YOUR_USERNAME/accredian-enterprise.git
git push -u origin main

# Then import in Vercel dashboard
# https://vercel.com/new
```

## Troubleshooting

### Port already in use
```bash
# Kill process on port 3000
npx kill-port 3000

# Or use different port
npm run dev -- -p 3001
```

### Dependencies issues
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build errors
```bash
# Check for TypeScript errors
npm run build

# Check for lint errors
npm run lint
```

## Learn More

- 📖 Full documentation: `README.md`
- 🚀 Deployment guide: `DEPLOYMENT.md`
- ✅ Testing checklist: `TESTING_CHECKLIST.md`
- 📊 Project report: `PROJECT_REPORT.md`

## Support

For issues or questions:
1. Check existing documentation
2. Review build logs: `.next/` directory
3. Check browser console for errors
4. Review API logs in terminal

---

**You're all set! Start building! 🚀**
