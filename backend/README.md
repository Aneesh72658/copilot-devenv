# Backend - Copilot Dev Environment

Express.js-based API server for the Copilot Dev Environment.

## Tech Stack

- **Express.js** - Web framework
- **TypeScript** - Type safety
- **PostgreSQL** - Database
- **Prisma ORM** - Database ORM
- **Socket.io** - Real-time communication
- **JWT** - Authentication
- **Axios** - HTTP client

## Directory Structure

```
src/
├── server.ts              # Express server setup
├── config/                # Configuration files
│   ├── env.ts            # Environment variables
│   └── database.ts       # Database connection
├── api/                   # REST endpoints
│   ├── auth.routes.ts
│   ├── projects.routes.ts
│   ├── files.routes.ts
│   ├── ai.routes.ts
│   └── user.routes.ts
├── services/              # Business logic
│   ├── auth.service.ts
│   ├── project.service.ts
│   ├── ai.service.ts
│   └── file.service.ts
├── middleware/            # Express middleware
│   ├── auth.middleware.ts
│   ├── error.middleware.ts
│   └── logging.middleware.ts
├── models/                # Database models (Prisma)
│   └── schema.prisma
├── utils/                 # Utility functions
│   ├── logger.ts
│   ├── validators.ts
│   └── errors.ts
└── types/                 # TypeScript types
    ├── api.ts
    ├── models.ts
    └── socket.ts
```

## Features

### Authentication
- JWT-based authentication
- Refresh token support
- Password hashing with bcrypt
- Role-based access control

### API Endpoints
- User authentication (register, login, logout)
- Project management (CRUD)
- File upload and download
- AI suggestion endpoints
- History and analytics

### Real-time Communication
- WebSocket support via Socket.io
- Real-time chat messages
- Live suggestions
- Activity monitoring

### Database
- PostgreSQL with Prisma ORM
- Automatic migrations
- Type-safe queries
- Relationship management

## Getting Started

### Prerequisites
- Node.js 18+
- PostgreSQL 12+
- npm or yarn

### Installation

```bash
cd backend
npm install
```

### Environment Setup

Create `.env` file:

```env
BACK_PORT=3001
BACK_NODE_ENV=development
BACK_DATABASE_URL=postgresql://user:password@localhost:5432/copilot_dev
BACK_JWT_SECRET=your_jwt_secret_here
BACK_GEMINI_API_KEY=your_gemini_key
BACK_CLAUDE_API_KEY=your_claude_key
BACK_CORS_ORIGIN=http://localhost:5173
```

### Database Setup

```bash
# Run migrations
npx prisma migrate dev --name init

# Generate Prisma client
npx prisma generate

# View database
npx prisma studio
```

### Development

```bash
# Start development server
npm run dev

# Server runs on http://localhost:3001
```

### Production

```bash
# Build
npm run build

# Start
npm run start
```

## API Endpoints

### Authentication
```
POST /api/auth/register
POST /api/auth/login
POST /api/auth/logout
POST /api/auth/refresh
```

### Projects
```
GET    /api/projects
GET    /api/projects/:id
POST   /api/projects
PUT    /api/projects/:id
DELETE /api/projects/:id
```

### Files
```
POST   /api/files/upload
GET    /api/files/:id
DELETE /api/files/:id
```

### AI
```
POST /api/ai/chat
POST /api/ai/suggest
POST /api/ai/analyze-code
POST /api/ai/generate-code
```

### User
```
GET  /api/user/profile
PUT  /api/user/profile
GET  /api/user/history
```

## Testing

```bash
# Run tests
npm run test

# Watch mode
npm run test:watch

# Coverage
npm run test:coverage
```

## Linting

```bash
# Run ESLint
npm run lint

# Fix issues
npm run lint:fix
```

## Database Schema

Key models:
- **User** - User accounts
- **Project** - User projects
- **File** - Project files
- **ChatMessage** - Chat history
- **Suggestion** - AI suggestions
- **Activity** - User activity logs

## Error Handling

Standardized error responses:
```json
{
  "success": false,
  "error": {
    "code": "INVALID_REQUEST",
    "message": "User-friendly error message",
    "details": {}
  }
}
```

## Logging

- Request/response logging
- Error tracking
- Performance monitoring
- Activity logs

## Performance

- Connection pooling
- Query optimization
- Caching strategies
- Rate limiting

## Security

- JWT authentication
- CORS protection
- Input validation
- SQL injection prevention
- Rate limiting
- HTTPS enforcement (production)

## Deployment

Supported platforms:
- Heroku
- AWS EC2
- DigitalOcean
- Railway
- Vercel

## Contributing

See [CONTRIBUTING.md](../CONTRIBUTING.md) for guidelines.
