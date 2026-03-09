# Traavellio Backend API

Node.js/Express API server for Traavellio travel booking platform.

## Getting Started

```bash
cd backend
npm install
npm run dev
```

Server will run on `http://localhost:5000`

## API Endpoints

### Health Check
```
GET /api/health
```

### Authentication
```
POST /api/auth/register     # Register new user
POST /api/auth/login        # Login
POST /api/auth/logout       # Logout
POST /api/auth/refresh      # Refresh token
```

### Bookings
```
GET    /api/bookings         # Get all bookings (admin)
POST   /api/bookings         # Create booking
GET    /api/bookings/:id     # Get booking details
PUT    /api/bookings/:id     # Update booking
DELETE /api/bookings/:id     # Cancel booking
```

### Payments (Stripe)
```
POST   /api/payments/create-intent    # Create payment intent
POST   /api/payments/webhook          # Stripe webhook
GET    /api/payments/:id              # Get payment status
```

### Admin Routes
```
GET    /api/admin/users              # List all users
GET    /api/admin/analytics          # Get analytics
PUT    /api/admin/settings           # Update settings
```

## Environment Variables

Create `.env` file:
```
PORT=5000
NODE_ENV=development
STRIPE_SECRET_KEY=sk_test_...
JWT_SECRET=your_super_secret_key
DATABASE_URL=your_database_url
CORS_ORIGIN=http://localhost:3000
```

## Folder Structure

```
backend/
├── routes/           # Express route handlers
├── controllers/      # Business logic
├── middleware/       # Auth, validation
├── models/          # Database schemas
├── utils/           # Helper functions
├── config/          # Configuration files
├── server.js        # Main server file
└── package.json
```

## Key Features

### Authentication
- JWT-based authentication
- Secure password hashing
- Refresh token mechanism

### Payment Processing
- Stripe integration
- Webhook handling
- Payment verification

### Database
- ORM/ODM ready (Mongoose, TypeORM, etc.)
- User management
- Booking management
- Payment records

## Adding Routes

Create files in `routes/` folder:

```javascript
// routes/bookings.js
import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  // Get all bookings
});

export default router;
```

Then import in `server.js`:
```javascript
import bookingsRouter from './routes/bookings.js';
app.use('/api/bookings', bookingsRouter);
```

## Adding Stripe Payments

```bash
npm install stripe
```

Implement webhook handler for payment confirmations.

## Running in Production

```bash
NODE_ENV=production npm start
```

## Deployment on Vercel

1. Create Vercel project
2. Set environment variables
3. Connect to Vercel
4. Auto-deploys on git push

Or deploy as separate service on Railway, Render, etc.
