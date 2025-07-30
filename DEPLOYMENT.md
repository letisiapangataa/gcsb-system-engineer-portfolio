# Deployment Guide for GitHub Pages

## Overview
This GCSB System Engineer Portfolio is configured for automatic deployment to GitHub Pages using GitHub Actions.

## Quick Deployment Steps

### 1. Repository Setup
1. Push this repository to GitHub
2. Make sure the repository is public (required for GitHub Pages on free accounts)

### 2. Enable GitHub Pages
1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under "Source", select **GitHub Actions**

### 3. Automatic Deployment
- Any push to the `main` branch will trigger automatic deployment
- The GitHub Actions workflow (`.github/workflows/deploy.yml`) will:
  - Install dependencies
  - Build the Next.js application
  - Deploy to GitHub Pages

### 4. Access Your Portfolio
- Your portfolio will be available at: `https://[username].github.io/[repository-name]/`
- Example: `https://letisiapangataa.github.io/gcsb-system-engineer-portfolio/`

## Manual Build and Test

Before deploying, you can test locally:

```bash
# Install dependencies
npm install

# Test development server
npm run dev

# Build for production
npm run build

# The built files will be in the 'dist' folder
```

## Technical Configuration

The deployment is configured with:
- **Framework**: Next.js 14 with static export
- **Build Output**: `dist/` folder
- **GitHub Actions**: Automated workflow
- **Deployment Target**: GitHub Pages

## Troubleshooting

### Build Fails
- Check that all dependencies are installed
- Ensure Node.js version is 18 or higher
- Verify no ESLint errors in code

### Pages Not Loading
- Ensure the repository is public
- Check GitHub Actions workflow has completed successfully
- Verify GitHub Pages is enabled in repository settings

### Updates Not Showing
- Check that your push triggered the GitHub Actions workflow
- Wait a few minutes for deployment to complete
- Clear browser cache if needed

## Security Notes

This portfolio follows security best practices:
- Static site generation (no server-side vulnerabilities)
- No sensitive data in client-side code
- Professional content suitable for government applications
- No external tracking or analytics

## Support

For any deployment issues, check:
1. GitHub Actions workflow logs
2. Repository settings
3. GitHub Pages status

---

**Ready to showcase your technical excellence for the GCSB System Engineer position!**
