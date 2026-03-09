# Traavellio - Travel Booking Platform

एक complete travel booking platform जिसमें frontend, backend, admin panel, और payment gateway integration है।

## Project Structure

```
traavellio/
├── frontend/          # React/Vue frontend application
├── backend/           # Node.js/Express API server
├── admin/            # Admin panel for managing bookings
├── package.json      # Root package.json (workspaces)
├── vercel.json       # Vercel deployment config
└── README.md         # This file
```

## Technology Stack

### Frontend
- React 18 या Vue 3
- Vite (Lightning fast build tool)
- Axios (HTTP client)

### Backend
- Node.js
- Express.js
- Stripe (Payment gateway)
- CORS enabled

### Admin Panel
- React
- React Router
- Axios

## Getting Started

### Prerequisites
- Node.js 18+
- npm या yarn
- Git

### Installation

```bash
# Install all dependencies (frontend, backend, admin)
npm install

# या if using yarn
yarn install
```

### Development

```bash
# Start both frontend and backend in development mode
npm run dev

# या run separately
npm run dev:frontend  # Frontend only
npm run dev:backend   # Backend only
```

### Build

```bash
# Build all projects
npm run build

# या build separately
npm run build:frontend
npm run build:backend
```

## Project Folders

### /frontend
Main user-facing travel booking application
- See `frontend/README.md` for detailed setup

### /backend
REST API server handling:
- User authentication
- Booking management
- Payment processing (Stripe)
- Admin operations

See `backend/README.md` for API documentation

### /admin
Dashboard for administrators to:
- Manage bookings
- View analytics
- Manage users
- Configure payment settings

See `admin/README.md` for details

## Deployment on Vercel

### Step 1: Push to Git
```bash
git add .
git commit -m "Initial project setup"
git push origin main
```

### Step 2: Connect to Vercel
1. Go to https://vercel.com
2. Click "Add New" → "Project"
3. Import your GitHub repository
4. Configure settings:
   - Root Directory: `./`
   - Framework: Other (for monorepo)
   - Build Command: `npm run build`
   - Install Command: `npm install`

### Step 3: Environment Variables
Add these in Vercel project settings:
```
STRIPE_SECRET_KEY=your_stripe_key
STRIPE_PUBLIC_KEY=your_stripe_public_key
DATABASE_URL=your_database_url
JWT_SECRET=your_jwt_secret
```

### Step 4: Deploy Separate Services

**Frontend:**
- Deploy frontend to Vercel
- Update API URLs to point to backend

**Backend:**
- Deploy backend as separate Vercel project or external service
- Keep track of backend URL

**Admin:**
- Deploy to Vercel
- Update backend API URL in admin environment variables

## Environment Variables

Create `.env` files in each folder:

**backend/.env**
```
PORT=5000
STRIPE_SECRET_KEY=sk_test_...
DATABASE_URL=
JWT_SECRET=your_secret_key
```

**frontend/.env**
```
VITE_API_URL=http://localhost:5000/api
VITE_STRIPE_PUBLIC_KEY=pk_test_...
```

**admin/.env**
```
VITE_API_URL=http://localhost:5000/api
```

## Payment Gateway (Stripe)

### Setup
1. Create Stripe account at https://stripe.com
2. Get API keys from Dashboard
3. Add keys to environment variables
4. Implement in backend payment routes

### Integration Points
- Backend: Handle Stripe webhooks and payments
- Frontend: Stripe.js integration for card processing
- Admin: View payment analytics

## Next Steps

1. **Setup React/Vue in frontend/**
   ```bash
   cd frontend
   npm create vite@latest . -- --template react
   npm install
   ```

2. **Create Backend Routes**
   - Authentication (JWT)
   - Bookings CRUD
   - Payments (Stripe)
   - Admin endpoints

3. **Setup Database**
   - Choose: PostgreSQL, MongoDB, MySQL
   - Create schema for users, bookings, payments

4. **Admin Panel**
   - Create dashboard
   - Add user management
   - Add booking management
   - Add payment settings

5. **Testing**
   - Unit tests
   - Integration tests
   - E2E tests

## File Structure Best Practices

```
frontend/
├── src/
│   ├── components/     # Reusable components
│   ├── pages/          # Page components
│   ├── services/       # API calls
│   ├── hooks/          # Custom hooks
│   ├── styles/         # Global styles
│   └── App.jsx
├── index.html
└── vite.config.js

backend/
├── routes/             # Express routes
├── controllers/        # Business logic
├── middleware/         # Auth, validation
├── models/            # Database models
├── config/            # Configuration
├── utils/             # Utility functions
└── server.js

admin/
├── src/
│   ├── components/     # Admin components
│   ├── pages/          # Admin pages
│   ├── services/       # API calls
│   └── App.jsx
└── vite.config.js
```

## Common Commands

```bash
# Development
npm run dev                # Start all services
npm run dev:frontend      # Frontend only
npm run dev:backend       # Backend only

# Building
npm run build             # Build all
npm run build:frontend    # Frontend only
npm run build:backend     # Backend only

# Production
npm start                 # Start backend (production mode)
```

## Support & Documentation

- Backend API Docs: `backend/README.md`
- Frontend Setup: `frontend/README.md`
- Admin Docs: `admin/README.md`
- Deployment: `docs/DEPLOYMENT.md`

## Future Additions

✅ Email notifications
✅ SMS alerts
✅ Real-time notifications (WebSocket)
✅ Multi-language support
✅ Mobile app (React Native)

## License

ISC

---

**Last Updated:** $(date)
