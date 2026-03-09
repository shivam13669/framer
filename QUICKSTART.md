# Quick Start Guide - Traavellio Project

आपका project अब properly organized है! यहाँ से शुरु करें:

## 1️⃣ Project Setup (First Time)

```bash
# Install all dependencies
npm install

# यह सभी folders में dependencies install करेगा:
# - frontend/
# - backend/
# - admin/
```

## 2️⃣ Create Environment Files

```bash
# Backend
cp backend/.env.example backend/.env

# Frontend  
cp frontend/.env.example frontend/.env.local

# Admin
cp admin/.env.example admin/.env.local
```

Edit each `.env` file और अपने values add करें।

## 3️⃣ Setup Frontend (React/Vue)

```bash
cd frontend

# Create Vite React project (या Vue)
npm create vite@latest . -- --template react
# Select: React > JavaScript

npm install
cd ..
```

## 4️⃣ Start Development

```bash
# Terminal में root folder से:
npm run dev

# यह दोनों start करेगा:
# - Frontend: http://localhost:5173
# - Backend: http://localhost:5000
```

## 5️⃣ Project Structure Ready

अब आपके पास है:

```
frontend/        → User-facing application
backend/        → REST API server  
admin/          → Admin dashboard
```

## 📁 Folder Organization

### Frontend (React/Vue)
```
frontend/
├── src/
│   ├── components/    # Reusable UI components
│   ├── pages/        # Page components
│   ├── services/     # API calls
│   ├── hooks/        # Custom React hooks
│   └── App.jsx
├── index.html
└── vite.config.js
```

### Backend (Node.js/Express)
```
backend/
├── routes/       # API routes
├── controllers/  # Business logic
├── models/      # Database schemas
├── middleware/  # Auth, validation
├── utils/       # Helper functions
├── server.js
└── package.json
```

### Admin (React)
```
admin/
├── src/
│   ├── components/  # Admin UI components
│   ├── pages/      # Dashboard pages
│   ├── services/   # API calls
│   └── App.jsx
└── vite.config.js
```

## 🚀 Next Steps

### Step 1: Build Frontend
```bash
cd frontend
# Create your pages, components, routes
# Add API integration
```

### Step 2: Build Backend APIs
```bash
cd backend
# Add routes for:
# - Authentication (signup, login)
# - Bookings (create, read, update, delete)
# - Payments (Stripe integration)
```

### Step 3: Build Admin Panel
```bash
cd admin
# Create admin dashboard
# Add user management
# Add booking management
```

## 🔌 Backend Routes Template

Backend में `routes/` folder में files create करें:

```javascript
// routes/bookings.js
import express from 'express';
import { getAllBookings, createBooking } from '../controllers/bookings.js';

const router = express.Router();

router.get('/', getAllBookings);
router.post('/', createBooking);

export default router;
```

फिर `server.js` में add करें:
```javascript
import bookingsRouter from './routes/bookings.js';
app.use('/api/bookings', bookingsRouter);
```

## 💳 Payment Integration

Stripe setup करने के लिए:

1. Account बनाएं: https://stripe.com
2. API keys लें dashboard से
3. `backend/.env` में add करें:
   ```
   STRIPE_SECRET_KEY=sk_test_...
   STRIPE_PUBLIC_KEY=pk_test_...
   ```
4. Backend में payment routes create करें

## 🗄️ Database Setup

Choose one:

**MongoDB (Easy)**
```
DATABASE_URL=mongodb+srv://user:pass@cluster.mongodb.net/traavellio
```

**PostgreSQL**
```
DATABASE_URL=postgresql://user:pass@host:5432/traavellio
```

## ☁️ Deploy to Vercel

जब ready हों:

```bash
# Push to GitHub
git add .
git commit -m "Initial commit"
git push origin main

# Then:
# 1. Go to vercel.com
# 2. Import GitHub repo
# 3. Set environment variables
# 4. Deploy!
```

विस्तृत deployment guide: `docs/DEPLOYMENT.md`

## 📚 Documentation

- **Main README**: `README.md` - Complete overview
- **Backend API**: `backend/README.md` - API documentation
- **Deployment**: `docs/DEPLOYMENT.md` - Vercel deployment
- **Frontend Setup**: `frontend/README.md` - Frontend guide
- **Admin Setup**: `admin/README.md` - Admin panel guide

## ❌ Old Files Removed

- ❌ `api/hello.js` - हटा दिया गया (backend/ में move हो गया)
- ❌ Framer clutter - clean up हो गया
- ❌ Messy public folder - अब organized है

## ✅ Project is Clean Now!

```
❌ Before: Framer + old files + mess
✅ After:  Professional monorepo structure
```

अब आप safely add कर सकते हो:
- ✅ Backend features
- ✅ Admin panel  
- ✅ Payment gateway
- ✅ Database
- ✅ Auth system

## 🎯 Common Commands

```bash
# Development
npm run dev              # Start all
npm run dev:frontend    # Frontend only
npm run dev:backend     # Backend only

# Building
npm run build           # Build all
npm run build:frontend  # Frontend only
npm run build:backend   # Backend only

# Production
npm start               # Run backend (prod)
```

## 💡 Tips

1. **Hot reload enabled** - Changes auto-reload in dev mode
2. **CORS configured** - Frontend → Backend communication ready
3. **Environment variables** - Use `.env` files, never hardcode secrets
4. **Monorepo support** - Easy to manage 3 separate apps

## 🆘 Need Help?

See respective README files:
- Frontend issues → `frontend/README.md`
- Backend issues → `backend/README.md`
- Deployment issues → `docs/DEPLOYMENT.md`

---

**Happy Coding! 🎉**

अब start करो: `npm run dev`
