# Vercel Deployment Guide

## Overview
Traavellio को Vercel पर deploy करने के लिए step-by-step guide।

## Architecture

आपके पास 3 separate services होंगी:
1. **Frontend** (React/Vue) - Main user app
2. **Backend** (Node.js/Express) - API server  
3. **Admin** (React) - Admin dashboard

## Option 1: Deploy Frontend Only (Recommended for Start)

### Step 1: Prepare Frontend

```bash
cd frontend
npm install
npm run build
```

### Step 2: Deploy to Vercel

1. Push code to GitHub:
```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

2. Go to https://vercel.com
3. Click "Add New" → "Project"
4. Select your GitHub repository
5. Configure:
   - **Framework Preset**: Vite
   - **Root Directory**: `frontend/`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

6. Add Environment Variables (in Vercel Settings):
```
VITE_API_URL=http://localhost:5000/api  # Change to live backend URL
VITE_STRIPE_PUBLIC_KEY=pk_test_...
```

7. Click Deploy

## Option 2: Deploy Backend Separately

### Using Vercel Functions (Serverless)

1. Create separate Vercel project for backend
2. Add environment variables:
```
STRIPE_SECRET_KEY=sk_test_...
JWT_SECRET=your_secret
DATABASE_URL=your_db_url
```

3. Deploy

### Using External Service

Deploy to Railway, Render, or Heroku:
- Railway: https://railway.app
- Render: https://render.com
- Heroku: https://heroku.com

Then update `VITE_API_URL` in frontend to your backend URL.

## Option 3: Monorepo Deployment (Advanced)

Deploy entire monorepo to single Vercel project:

1. Root `vercel.json` handles routing
2. Separate builds for frontend and backend
3. More complex but easier maintenance

```bash
# Vercel automatically runs build from root
npm run build
```

## Database Setup

### Option 1: MongoDB (Easy)
- Free tier: https://www.mongodb.com/cloud/atlas
- 512MB free storage
- Get connection string
- Add to `DATABASE_URL` in backend

### Option 2: PostgreSQL
- Free tier: https://neon.tech
- या https://supabase.com
- Get connection string
- Add to `DATABASE_URL`

### Option 3: MySQL
- Free tier: https://www.planetscale.com
- Get connection string
- Add to `DATABASE_URL`

## Payment Gateway Setup

### Stripe Setup
1. Create account: https://stripe.com
2. Go to Dashboard → API Keys
3. Copy:
   - Secret Key (Publishable)
   - Public Key (Secret)
4. Add to environment variables:
   ```
   STRIPE_PUBLIC_KEY=pk_test_...
   STRIPE_SECRET_KEY=sk_test_...
   ```

### Stripe Webhooks
1. Go to Developers → Webhooks
2. Add Endpoint: `https://your-backend-url/api/payments/webhook`
3. Select events:
   - `charge.succeeded`
   - `charge.failed`
   - `payment_intent.succeeded`
4. Copy Webhook Secret
5. Add to `STRIPE_WEBHOOK_SECRET`

## Domain Setup

1. Buy domain (Namecheap, GoDaddy, etc.)
2. In Vercel Project → Domains
3. Add your domain
4. Follow DNS setup instructions

## Environment Variables Checklist

### Frontend
- [ ] `VITE_API_URL` - Backend API URL
- [ ] `VITE_STRIPE_PUBLIC_KEY` - Stripe public key

### Backend
- [ ] `DATABASE_URL` - Database connection string
- [ ] `JWT_SECRET` - Secret for JWT tokens
- [ ] `STRIPE_SECRET_KEY` - Stripe secret key
- [ ] `STRIPE_WEBHOOK_SECRET` - Stripe webhook secret
- [ ] `CORS_ORIGIN` - Frontend URL

### Admin
- [ ] `VITE_API_URL` - Backend API URL

## Monitoring & Logs

### Vercel Logs
- Go to Vercel Dashboard → Project → Deployments
- Click deployment to see logs
- Errors दिखते हैं real-time में

### Database Logs
- MongoDB: Atlas Dashboard → Monitoring
- PostgreSQL: Neon Dashboard → Logs

## Troubleshooting

### CORS Error
```
Error: "Access to XMLHttpRequest blocked by CORS policy"
```
Solution: Update `CORS_ORIGIN` in backend:
```
CORS_ORIGIN=https://your-frontend.vercel.app
```

### Database Connection Failed
- Check connection string
- Verify database credentials
- Check IP whitelist (MongoDB Atlas)

### Payment Not Working
- Verify Stripe keys
- Check webhook endpoint
- View Stripe Dashboard logs

## Performance Optimization

1. **Image Optimization**
   - Use Next Image component या similar
   - Compress images before upload

2. **Database Indexing**
   - Add indexes on frequently queried fields
   - Monitor slow queries

3. **Caching**
   - Use Redis for sessions
   - Cache API responses

## CI/CD Pipeline

Auto-deploy on every push:

```bash
# GitHub Actions (.github/workflows/deploy.yml)
name: Deploy
on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Deploy to Vercel
        uses: vercel/action@master
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
```

## Rollback

If something breaks:
1. Vercel Dashboard → Deployments
2. Find previous working deployment
3. Click → "Promote to Production"

## Estimated Costs

- **Frontend**: Free (Vercel hobby)
- **Backend**: Free (until 100GB bandwidth)
- **Database**: Free tier available
- **Stripe**: 2.9% + $0.30 per transaction
- **Domain**: $10-15/year

**Total**: ~$120-200/year

## Next Steps

1. ✅ Setup GitHub repository
2. ✅ Configure database
3. ✅ Add Stripe integration
4. ✅ Deploy frontend to Vercel
5. ✅ Deploy backend to Vercel/External
6. ✅ Setup custom domain
7. ✅ Enable HTTPS (automatic)
8. ✅ Monitor logs and metrics

---

For more help: https://vercel.com/docs
