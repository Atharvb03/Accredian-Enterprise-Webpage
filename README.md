# Accredian Enterprise - Next.js Recreation

A modern, responsive enterprise website recreation built with Next.js, inspired by the Accredian Enterprise platform. This project demonstrates professional frontend development practices, component architecture, and full-stack capabilities.

## 🌐 Live Demo

**Live Link:** https://vercel.com/atharvb03-3092s-projects/accredian-enterprise-webpage

## 📦 Repository

**Github Repo:** https://github.com/Atharvb03/Accredian-Enterprise-Webpage

## 🛠️ Tech Stack

- **Next.js 15** - React framework with App Router
- **React 18** - UI library
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Next.js API Routes** - Backend API endpoints

## ✨ Features

### Frontend
- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Component-based architecture with reusable components
- ✅ Smooth navigation with anchor links
- ✅ Interactive mobile menu
- ✅ Hero section with feature badges
- ✅ Statistics showcase
- ✅ Partner logos section
- ✅ Domain expertise cards
- ✅ Course segmentation with images
- ✅ Target audience profiles
- ✅ Process flow visualization
- ✅ Accordion-style FAQ section
- ✅ Testimonial carousel with navigation
- ✅ Contact form with validation

### Backend
- ✅ Next.js API Route for lead submission
- ✅ Server-side validation
- ✅ Input sanitization
- ✅ Error handling
- ✅ Type-safe API responses

### Quality
- ✅ Accessible HTML (semantic markup, ARIA labels, keyboard navigation)
- ✅ SEO optimization with metadata
- ✅ Performance optimized (Next.js Image, server components)
- ✅ TypeScript for type safety
- ✅ Client/server component separation

## 📁 Project Structure

```
accredian-enterprise/
├── app/
│   ├── api/
│   │   └── leads/
│   │       └── route.ts          # Lead submission API
│   ├── layout.tsx                # Root layout with metadata
│   ├── page.tsx                  # Main landing page
│   └── globals.css               # Global styles
├── components/
│   ├── Navbar.tsx                # Header navigation
│   ├── Hero.tsx                  # Hero section
│   ├── Stats.tsx                 # Statistics section
│   ├── Partnerships.tsx          # Partner logos
│   ├── AccredianEdge.tsx         # USP section
│   ├── DomainExpertise.tsx       # Domain cards
│   ├── CourseSegmentation.tsx    # Course categories
│   ├── TargetAudience.tsx        # Audience profiles
│   ├── CATFramework.tsx          # Framework visualization
│   ├── DeliveryProcess.tsx       # Process steps
│   ├── FAQ.tsx                   # FAQ accordion
│   ├── Testimonials.tsx          # Testimonial carousel
│   ├── ContactCTA.tsx            # Contact section
│   ├── LeadForm.tsx              # Lead capture form
│   └── Footer.tsx                # Footer
├── types/
│   └── index.ts                  # TypeScript types
├── public/                       # Static assets
├── tailwind.config.ts            # Tailwind configuration
├── next.config.ts                # Next.js configuration
└── tsconfig.json                 # TypeScript configuration
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd accredian-enterprise
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:3000
```

## 🔧 Environment Variables

No environment variables are required for basic functionality. The application uses mock data for lead submissions.

For production deployment with a real database, create a `.env.local` file:

```env
# Example environment variables for production
DATABASE_URL=your_database_url
API_SECRET=your_api_secret
```

## 📡 API Documentation

### POST /api/leads

Submit a new lead inquiry.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john.doe@company.com",
  "company": "Acme Corp",
  "phone": "+1234567890",
  "message": "Interested in corporate training programs"
}
```

**Success Response (200):**
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

**Error Response (400/500):**
```json
{
  "success": false,
  "message": "Error description"
}
```

**Validation Rules:**
- All fields are required
- Email must be valid format
- Phone must be 10+ characters
- Inputs are sanitized and length-limited

## 🎨 Approach

### Reference Analysis
I analyzed the reference website (https://enterprise.accredian.com/) to understand:
- Overall structure and section flow
- Visual hierarchy and typography
- Color scheme and design patterns
- Responsive behavior across devices
- Interactive elements and user experience

### Component Architecture
The website is built with reusable React components following these principles:
- **Single Responsibility**: Each component handles one specific section
- **Composition**: Complex sections are built from smaller components
- **Reusability**: Components accept props for flexibility
- **Separation of Concerns**: Client components only where interactivity is needed

### Server vs Client Components
- **Server Components** (default): Static sections for better performance
- **Client Components**: Interactive elements (Navbar menu, FAQ accordion, Testimonials carousel, LeadForm)

### Responsive Design Strategy
- Mobile-first approach using Tailwind breakpoints
- Tested across multiple viewport sizes (375px to 1920px)
- Flexible grid layouts that adapt gracefully
- Touch-friendly interactive elements on mobile
- Optimized navigation for small screens

### API Integration
- Next.js Route Handlers for serverless API
- Client-side and server-side validation
- Proper error handling and user feedback
- Mock implementation demonstrating architecture
- Ready for database integration

### Accessibility
- Semantic HTML elements (`<nav>`, `<main>`, `<section>`, `<footer>`)
- Proper heading hierarchy (h1, h2, h3)
- ARIA labels for icon buttons
- Keyboard navigation support
- Sufficient color contrast
- Alt text for all images
- Form labels and error messages

### Performance
- Next.js Image component for optimized images
- Server components by default to minimize JavaScript
- Lazy loading where appropriate
- Efficient component rendering
- Production-ready build optimization

## 🤖 AI Usage

This project was developed with AI assistance to demonstrate efficient modern development practices.

### Where AI Helped:
- **Reference Analysis**: Analyzing the structure and content of the reference website
- **Initial Architecture**: Setting up the Next.js project structure and component hierarchy
- **Component Scaffolding**: Creating base component files with proper TypeScript types
- **Tailwind Implementation**: Building responsive layouts with utility classes
- **API Implementation**: Creating the lead submission endpoint with validation
- **Accessibility**: Ensuring proper semantic HTML and ARIA attributes
- **Documentation**: Writing comprehensive README and code comments

### Manual Refinement:
After AI generation, the implementation was manually reviewed and refined for:
- **Visual Accuracy**: Comparing with reference and adjusting spacing, colors, and typography
- **Responsive Behavior**: Testing across multiple devices and fixing layout issues
- **Accessibility**: Verifying keyboard navigation, screen reader support, and contrast
- **Component Organization**: Ensuring clean architecture and proper separation of concerns
- **Performance**: Optimizing images, minimizing client-side JavaScript
- **Error Handling**: Robust validation and user-friendly error messages
- **UX Polish**: Smooth transitions, hover states, loading states
- **Code Quality**: TypeScript types, naming consistency, removing duplication

## 🧪 Build & Quality Checks

Run these commands before deployment:

```bash
# Linting
npm run lint

# Production build
npm run build

# Start production server
npm start
```

## 🚀 Deployment

### Vercel Deployment (Recommended)

1. Push your code to GitHub
2. Import the project in Vercel
3. Vercel will auto-detect Next.js configuration
4. Deploy!

The project is configured for Vercel with:
- Automatic builds on push
- Environment variable support
- Edge network CDN
- Serverless functions for API routes

## 🔮 Improvements With More Time

Given additional time, these enhancements would add value:

- **Database Integration**: Connect to PostgreSQL/MongoDB for persistent lead storage
- **CRM Integration**: Sync leads with Salesforce, HubSpot, or similar platforms
- **Email Notifications**: Send confirmation emails to users and alerts to admins
- **Spam Protection**: Add reCAPTCHA or honeypot fields
- **Analytics**: Integrate Google Analytics or similar for tracking
- **CMS Integration**: Use Contentful or Sanity for dynamic content management
- **Advanced Animations**: Framer Motion for sophisticated page transitions
- **E2E Testing**: Playwright or Cypress for automated testing
- **Performance Monitoring**: Real User Monitoring (RUM) implementation
- **Advanced SEO**: Structured data, Open Graph optimization
- **Internationalization**: Multi-language support
- **Dark Mode**: Theme switching capability
- **A/B Testing**: Experiment with different CTA placements

## 📄 License

This is a demonstration project created as a technical assignment. Not affiliated with Accredian.

## 🙏 Acknowledgments

- Reference website: [Accredian Enterprise](https://enterprise.accredian.com/)
- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Deployed on [Vercel](https://vercel.com/)
