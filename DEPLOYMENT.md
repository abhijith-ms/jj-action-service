# JJ Action Services - Vercel Deployment Guide

## 🚀 Deploy to Vercel

### Method 1: Deploy via Vercel CLI (Recommended)

1. **Install Vercel CLI globally**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy from the project directory**
   ```bash
   cd jj-action-services
   vercel
   ```

4. **Follow the prompts:**
   - Set up and deploy? **Y**
   - Which scope? Choose your account
   - Link to existing project? **N** (for first deployment)
   - What's your project's name? **jj-action-services**
   - In which directory is your code located? **./** (current directory)

5. **Production deployment**
   ```bash
   vercel --prod
   ```

### Method 2: Deploy via Vercel Dashboard

1. **Push to GitHub** (if not already done)
   ```bash
   # Create a new repository on GitHub first, then:
   git remote add origin https://github.com/yourusername/jj-action-services.git
   git branch -M main
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect it's a Vite project

3. **Configure deployment settings:**
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

4. **Deploy**
   - Click "Deploy"
   - Your site will be live in minutes!

## 🔧 Configuration Files

### vercel.json
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "vite",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### Environment Variables (if needed)
If you need to add environment variables:
1. Go to your Vercel project dashboard
2. Navigate to Settings → Environment Variables
3. Add your variables (e.g., `VITE_API_URL`)

## 🌐 Custom Domain (Optional)

1. **In Vercel Dashboard:**
   - Go to your project
   - Click "Domains"
   - Add your custom domain (e.g., `jjactionservices.pt`)

2. **DNS Configuration:**
   - Add CNAME record pointing to `cname.vercel-dns.com`
   - Or A record pointing to Vercel's IP

## 📱 Features Enabled

✅ **Automatic HTTPS**
✅ **Global CDN**
✅ **Automatic deployments on git push**
✅ **Preview deployments for branches**
✅ **Performance monitoring**
✅ **SEO optimization**

## 🔄 Continuous Deployment

Once connected to GitHub:
- Every push to `main` branch = Production deployment
- Every push to other branches = Preview deployment
- Pull requests get their own preview URLs

## 📊 Performance

The website is optimized for:
- **Fast loading** with Vite's optimized build
- **SEO-friendly** with proper meta tags
- **Mobile responsive** design
- **Lighthouse score** optimization

## 🛠️ Troubleshooting

### Build Issues
```bash
# Test build locally first
npm run build
npm run preview
```

### Asset Issues
- All images are in `src/assets/` and properly imported
- Favicon is in `public/` folder

### Routing Issues
- SPA routing handled by `vercel.json` rewrites
- All routes redirect to `index.html`

## 📞 Support

If you encounter issues:
1. Check Vercel deployment logs
2. Verify all dependencies in `package.json`
3. Test build locally with `npm run build`
4. Check Vercel documentation

---

**Your JJ Action Services website will be live at:**
`https://jj-action-services.vercel.app` (or your custom domain)

🎉 **Ready to serve customers across Portugal!**