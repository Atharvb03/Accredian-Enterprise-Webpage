# Testing Checklist - Accredian Enterprise

## Pre-Deployment Testing

### ✅ Build Quality Checks

- [x] **TypeScript Compilation**: No TypeScript errors
  ```bash
  npm run build
  ```
  Status: ✅ PASS

- [x] **ESLint**: No linting errors
  ```bash
  npm run lint
  ```
  Status: ✅ PASS

- [x] **Production Build**: Successful build
  ```bash
  npm run build
  ```
  Status: ✅ PASS (115 KB First Load JS)

### 🎨 Visual Quality Assurance

#### Desktop (1920px)
- [ ] Header: Logo, navigation links, CTA visible and aligned
- [ ] Hero: Proper spacing, image loads, badges aligned
- [ ] Stats: Three columns evenly distributed
- [ ] Partnerships: Six logos in grid
- [ ] All sections: Proper max-width constraint (1280px)
- [ ] Footer: Multi-column layout
- [ ] No horizontal scroll

#### Tablet (768px)
- [ ] Header: Navigation still accessible
- [ ] Hero: Image and text stack properly or side-by-side
- [ ] Stats: 2-column or 3-column grid
- [ ] Domain cards: 2-3 columns
- [ ] Course cards: 2 columns
- [ ] Footer: Adjusted column layout

#### Mobile (375px)
- [ ] Header: Mobile menu button visible
- [ ] Mobile menu: Opens/closes smoothly
- [ ] Hero: Fully stacked, badges wrap properly
- [ ] Stats: Single column
- [ ] All sections: Single column, readable text
- [ ] Buttons: Touch-friendly (min 44px height)
- [ ] Footer: Single column stack
- [ ] No text clipping or overflow

### 🔍 Component Testing

#### Navbar
- [ ] Logo visible and properly sized
- [ ] Desktop links work (smooth scroll)
- [ ] Mobile hamburger icon appears < 768px
- [ ] Mobile menu opens on click
- [ ] Mobile menu closes on link click
- [ ] Mobile menu closes on outside click (if implemented)
- [ ] Sticky/fixed positioning works (if enabled)
- [ ] "Enquire Now" CTA prominent

#### Hero Section
- [ ] Headline readable and impactful
- [ ] Subheading visible
- [ ] Three feature badges display correctly
- [ ] CTA button prominent and clickable
- [ ] Hero image loads and scales properly
- [ ] Background gradient renders correctly
- [ ] Responsive on all breakpoints

#### Stats Section
- [ ] Three stat cards display
- [ ] Numbers bold and prominent
- [ ] Labels readable
- [ ] Cards have proper spacing
- [ ] Hover effects work (if implemented)

#### Partnerships
- [ ] Six partner logos display
- [ ] Logos properly sized
- [ ] Grayscale effect on load
- [ ] Color on hover (if implemented)
- [ ] Grid responsive across breakpoints

#### Domain Expertise
- [ ] Seven domain cards display
- [ ] Icons/emojis visible
- [ ] Titles readable
- [ ] Grid layout responsive
- [ ] Hover effects work

#### Course Segmentation
- [ ] Four course cards display
- [ ] Images load correctly
- [ ] Text overlay readable
- [ ] Cards clickable/interactive (if implemented)
- [ ] Responsive grid

#### Target Audience
- [ ] Four audience profiles display
- [ ] Icons visible
- [ ] Descriptions readable
- [ ] Proper spacing

#### CAT Framework
- [ ] SVG/image loads correctly
- [ ] Scales properly on mobile
- [ ] Maintains aspect ratio

#### Delivery Process
- [ ] Three steps display
- [ ] Step numbers prominent
- [ ] Icons visible
- [ ] Descriptions clear
- [ ] Proper vertical spacing

#### FAQ Section
- [ ] FAQ items display
- [ ] Accordion opens on click
- [ ] Only one open at a time (if single-open)
- [ ] Arrow icon rotates
- [ ] Content readable when expanded
- [ ] Keyboard accessible (Tab, Enter, Space)

#### Testimonials
- [ ] Testimonial displays
- [ ] Company logo visible
- [ ] Navigation arrows work
- [ ] Dot indicators show current slide
- [ ] Dots clickable to jump to testimonial
- [ ] Auto-rotation (if implemented)
- [ ] Smooth transitions

#### Contact Form
- [ ] All fields visible and labeled
- [ ] Required indicators present
- [ ] Field validation on blur
- [ ] Email format validation
- [ ] Phone format validation
- [ ] Submit button enabled when valid
- [ ] Loading state on submit
- [ ] Success message displays
- [ ] Error message displays on failure
- [ ] Form clears after successful submit
- [ ] Error messages accessible

#### Footer
- [ ] Brand name/logo
- [ ] Link columns properly organized
- [ ] Contact information visible
- [ ] Social media icons display and link correctly
- [ ] Copyright notice present
- [ ] Responsive stack on mobile

### 🔌 API Testing

#### POST /api/leads

**Test 1: Valid Submission**
```bash
curl -X POST http://localhost:3000/api/leads \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@company.com",
    "company": "Acme Corp",
    "phone": "+1234567890",
    "message": "Interested in training"
  }'
```
Expected: 200 OK, success message

**Test 2: Missing Fields**
```bash
curl -X POST http://localhost:3000/api/leads \
  -H "Content-Type: application/json" \
  -d '{"name": "John Doe"}'
```
Expected: 400 Bad Request, error message

**Test 3: Invalid Email**
```bash
curl -X POST http://localhost:3000/api/leads \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "invalid-email",
    "company": "Acme",
    "phone": "123",
    "message": "Test"
  }'
```
Expected: 400 Bad Request, email validation error

**Test 4: GET Request (Unsupported)**
```bash
curl -X GET http://localhost:3000/api/leads
```
Expected: 405 Method Not Allowed

### ♿ Accessibility Testing

#### Keyboard Navigation
- [ ] Tab through all interactive elements
- [ ] Focus indicators visible
- [ ] Enter/Space activate buttons
- [ ] Escape closes mobile menu (if implemented)
- [ ] No keyboard traps

#### Screen Reader
- [ ] Headings in proper hierarchy (h1 → h2 → h3)
- [ ] Images have alt text
- [ ] Forms have labels
- [ ] ARIA labels on icon buttons
- [ ] Error messages announced
- [ ] Success messages announced

#### Color Contrast
- [ ] Body text: at least 4.5:1 ratio
- [ ] Headings: at least 4.5:1 ratio
- [ ] Buttons: at least 4.5:1 ratio
- [ ] Links: distinguishable from text

#### Other Accessibility
- [ ] No flashing content
- [ ] Animations respect prefers-reduced-motion
- [ ] Language attribute set in HTML
- [ ] Semantic HTML used throughout

### 📱 Device Testing

#### Viewports to Test
- [ ] 375px (iPhone SE)
- [ ] 390px (iPhone 12/13)
- [ ] 430px (iPhone 14 Pro Max)
- [ ] 768px (iPad)
- [ ] 1024px (iPad Pro)
- [ ] 1280px (Small laptop)
- [ ] 1440px (Standard desktop)
- [ ] 1920px (Large desktop)

#### Browsers to Test
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

### ⚡ Performance Testing

#### Lighthouse Audit (Target Scores)
- [ ] Performance: > 90
- [ ] Accessibility: > 95
- [ ] Best Practices: > 95
- [ ] SEO: > 95

#### Key Metrics
- [ ] First Contentful Paint (FCP): < 1.8s
- [ ] Largest Contentful Paint (LCP): < 2.5s
- [ ] Cumulative Layout Shift (CLS): < 0.1
- [ ] First Input Delay (FID): < 100ms
- [ ] Total Blocking Time (TBT): < 300ms

#### Image Optimization
- [ ] All images use Next.js Image component
- [ ] Proper width/height specified
- [ ] WebP format used where supported
- [ ] Lazy loading enabled
- [ ] No layout shift from images

### 🔒 Security Testing

- [ ] No sensitive data in console logs
- [ ] No API keys exposed in client code
- [ ] HTTPS in production
- [ ] No SQL injection vulnerabilities (N/A for mock API)
- [ ] Input sanitization on API routes
- [ ] No XSS vulnerabilities
- [ ] CSP headers configured (optional)

### 🌐 SEO Testing

- [ ] Title tag present and descriptive
- [ ] Meta description present
- [ ] Open Graph tags present
- [ ] Semantic HTML structure
- [ ] Heading hierarchy correct
- [ ] Alt text on all images
- [ ] robots.txt present (if needed)
- [ ] sitemap.xml present (if needed)

### 📋 Content Quality

- [ ] No "Lorem ipsum" text
- [ ] No broken links
- [ ] No spelling/grammar errors
- [ ] Professional tone throughout
- [ ] Contact information accurate
- [ ] Social media links work
- [ ] Email link works (mailto:)

### 🚀 Deployment Testing

#### After Deployment to Vercel

- [ ] Production URL loads
- [ ] All pages accessible
- [ ] Images load from CDN
- [ ] API routes work in production
- [ ] Form submission works
- [ ] No console errors in production
- [ ] SSL certificate valid
- [ ] Custom domain works (if configured)
- [ ] Analytics tracking (if configured)

### 📊 Final Quality Gates

Before declaring project complete:

- [x] ✅ Lint: PASS
- [x] ✅ Build: PASS
- [x] ✅ TypeScript: PASS
- [ ] ✅ Responsive QA: PASS (to be tested manually)
- [ ] ✅ API: PASS (to be tested)
- [ ] ✅ Accessibility: PASS (to be tested)
- [ ] ✅ Performance: PASS (to be tested)
- [ ] ✅ Cross-browser: PASS (to be tested)

---

## Testing Instructions

1. **Local Testing**:
   ```bash
   npm run dev
   ```
   Test on http://localhost:3000

2. **Production Build Testing**:
   ```bash
   npm run build
   npm start
   ```
   Test on http://localhost:3000

3. **API Testing**: Use curl or Postman

4. **Responsive Testing**: Use browser DevTools device emulation

5. **Accessibility Testing**: Use browser extensions (axe, WAVE)

6. **Performance Testing**: Run Lighthouse in Chrome DevTools

---

**Status**: Core functionality built and production-ready. Manual QA recommended before public launch.
