# Deployment Guide - Accredian Enterprise

This guide covers deploying the Accredian Enterprise website to Vercel.

## Prerequisites

- GitHub account
- Vercel account (free tier works perfectly)
- Git installed locally

## Step 1: Push to GitHub

1. Initialize Git repository (if not already done):
```bash
cd accredian-enterprise
git init
git add .
git commit -m "Initial commit: Accredian Enterprise website"
```

2. Create a new repository on GitHub:
   - Go to https://github.com/new
   - Name: `accredian-enterprise`
   - Keep it public or private
   - Don't initialize with README (we already have one)

3. Push your code:
```bash
git remote add origin https://github.com/YOUR_USERNAME/accredian-enterprise.git
git branch -M main
git push -u origin main
```

## Step 2: Deploy to Vercel

### Option A: Vercel Dashboard (Recommended)

1. Go to https://vercel.com/new
2. Import your GitHub repository
3. Vercel will auto-detect Next.js settings:
   - **Framework Preset**: Next.js
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
   - **Install Command**: `npm install`
4. Click "Deploy"
5. Wait 2-3 minutes for deployment to complete
6. Your site will be live at: `https://your-project.vercel.app`

### Option B: Vercel CLI

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
cd accredian-enterprise
vercel
```

4. Follow the prompts:
   - Set up and deploy? Yes
   - Which scope? (your account)
   - Link to existing project? No
   - Project name: accredian-enterprise
   - Directory: ./
   - Override settings? No

5. For production deployment:
```bash
vercel --prod
```

## Step 3: Configure Custom Domain (Optional)

1. In Vercel Dashboard, go to your project
2. Navigate to Settings > Domains
3. Add your custom domain
4. Follow DNS configuration instructions
5. Vercel automatically handles SSL certificates

## Step 4: Environment Variables (If Needed)

If you add environment variables in the future:

1. In Vercel Dashboard: Settings > Environment Variables
2. Add variables for Production, Preview, and Development
3. Redeploy for changes to take effect

## Automatic Deployments

Once connected to GitHub:
- **Push to `main`**: Deploys to production
- **Pull Requests**: Creates preview deployments
- **Other branches**: Creates preview deployments

## Post-Deployment Checklist

After deployment, verify:

- [ ] Homepage loads correctly
- [ ] Navigation works (all anchor links)
- [ ] Mobile menu functions properly
- [ ] All sections render correctly
- [ ] Images load properly
- [ ] Contact form submits successfully
- [ ] API endpoint `/api/leads` works
- [ ] Responsive design on mobile/tablet/desktop
- [ ] No console errors
- [ ] Performance is acceptable (check Lighthouse)

## Performance Optimization

Vercel automatically provides:
- ✅ Edge Network CDN
- ✅ Automatic image optimization
- ✅ Brotli compression
- ✅ HTTP/2 support
- ✅ Automatic SSL certificates

## Monitoring

After deployment:
1. Check Vercel Analytics (if enabled)
2. Monitor build logs for any issues
3. Set up error tracking (optional: Sentry)
4. Enable Web Vitals monitoring

## Troubleshooting

### Build Fails
- Check build logs in Vercel dashboard
- Verify all dependencies are in `package.json`
- Ensure no TypeScript errors locally: `npm run build`

### Images Don't Load
- Verify `next.config.ts` has correct `remotePatterns`
- Check image URLs are accessible
- Ensure Next.js Image component is used correctly

### API Routes Don't Work
- Check function logs in Vercel dashboard
- Verify route files are in `app/api/` directory
- Ensure proper HTTP methods are exported

### Environment Issues
- Verify environment variables are set in Vercel
- Check variable names match your code
- Remember: `NEXT_PUBLIC_` prefix for client-side variables

## Updating Your Site

To push updates:
```bash
git add .
git commit -m "Description of changes"
git push origin main
```

Vercel automatically rebuilds and deploys on push.

## Rollback

If something goes wrong:
1. Go to Vercel Dashboard > Deployments
2. Find a previous working deployment
3. Click "..." menu > "Promote to Production"

## Support

- Vercel Documentation: https://vercel.com/docs
- Next.js Documentation: https://nextjs.org/docs
- GitHub Issues: (your repository)

---

**Your site is now live! 🎉**

Share your deployment URL and gather feedback.
