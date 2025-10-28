# 🚀 Deployment Checklist for Vercel

## Pre-Deployment Checklist

Before deploying to Vercel, make sure you've completed these steps:

### ✅ Code Ready
- [ ] All components are working locally
- [ ] Images are loading correctly
- [ ] Navigation links work properly
- [ ] Map is displaying correctly
- [ ] Animations are smooth
- [ ] Mobile responsive design verified

### ✅ Build Test
Run a production build locally to catch any errors:

```bash
npm run build
npm run start
```

Visit `http://localhost:3000` to test the production build.

### ✅ Git Repository
1. Initialize git (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Timor-Leste Tourism Website"
   ```

2. Create a new repository on GitHub:
   - Go to [github.com/new](https://github.com/new)
   - Name: `timor-leste-tourism`
   - Description: "Modern tourism website for Timor-Leste"
   - Keep it public or private

3. Push to GitHub:
   ```bash
   git remote add origin https://github.com/yourusername/timor-leste-tourism.git
   git branch -M main
   git push -u origin main
   ```

## Deployment Steps

### Option 1: Vercel Dashboard (Recommended)

1. **Visit Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Sign Up" or "Log In"
   - Connect your GitHub account

2. **Import Project**
   - Click "Add New..." → "Project"
   - Select your GitHub repository
   - Click "Import"

3. **Configure**
   - **Project Name**: `timor-leste-tourism`
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `./` (default)
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
   - **Install Command**: `npm install`

4. **Deploy**
   - Click "Deploy"
   - Wait 1-2 minutes
   - Your site will be live!

### Option 2: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

## Post-Deployment

### ✅ Verify Deployment
- [ ] Visit your deployed URL (e.g., `https://timor-leste-tourism.vercel.app`)
- [ ] Check all images load
- [ ] Test all navigation links
- [ ] Verify map functionality
- [ ] Test on mobile device
- [ ] Check page speed with [PageSpeed Insights](https://pagespeed.web.dev/)

### ✅ Custom Domain (Optional)
If you want to use a custom domain:

1. Go to your project settings on Vercel
2. Click "Domains"
3. Add your custom domain (e.g., `timor-leste-tourism.com`)
4. Follow DNS configuration instructions
5. Wait for DNS propagation (can take up to 48 hours)

### ✅ Performance Optimization
- Enable Vercel Analytics (free)
- Set up Speed Insights
- Configure caching headers if needed

## Continuous Deployment

Once deployed, Vercel automatically:
- ✅ Deploys every push to `main` branch to production
- ✅ Creates preview deployments for pull requests
- ✅ Runs builds and catches errors
- ✅ Optimizes images automatically
- ✅ Provides SSL certificates (HTTPS)

## Environment Variables

If you need environment variables in the future:

1. Go to Project Settings → Environment Variables
2. Add variables:
   - `NEXT_PUBLIC_API_KEY` (for public APIs)
   - `DATABASE_URL` (for databases)
   - etc.

## Troubleshooting

### Build Fails
- Check the build logs in Vercel dashboard
- Make sure `npm run build` works locally
- Check for TypeScript errors

### Images Not Loading
- Verify images are in `public/image/` folder
- Check image paths start with `/image/`
- Ensure images are committed to git

### Map Not Working
- Check browser console for errors
- Verify Leaflet CSS is imported
- Check network tab for tile loading errors

## Monitoring

After deployment, monitor:
- **Analytics**: Track visitors and page views
- **Performance**: Monitor Core Web Vitals
- **Errors**: Check Vercel logs for runtime errors

## Rollback

If something goes wrong:
1. Go to Vercel Dashboard
2. Select your project
3. Go to "Deployments"
4. Find a previous working deployment
5. Click "..." → "Promote to Production"

## Support

- **Vercel Docs**: [vercel.com/docs](https://vercel.com/docs)
- **Next.js Docs**: [nextjs.org/docs](https://nextjs.org/docs)
- **Community**: [github.com/vercel/vercel/discussions](https://github.com/vercel/vercel/discussions)

---

**Ready to deploy?** Follow the steps above and your Timor-Leste Tourism website will be live in minutes! 🚀
