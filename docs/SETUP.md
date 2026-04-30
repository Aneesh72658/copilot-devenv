# Setup Guide

## Prerequisites

- **Node.js** 18+ ([Download](https://nodejs.org))
- **npm** or **yarn**
- **Git**
- **PostgreSQL** 12+ (for local development)

### API Keys (Optional for Development)

Get free API keys from:
- [Google Gemini](https://ai.google.dev/)
- [Anthropic Claude](https://console.anthropic.com/)
- [OpenAI](https://platform.openai.com/)

## Installation

### 1. Clone Repository

```bash
git clone https://github.com/Aneesh72658/copilot-devenv.git
cd copilot-devenv
```

### 2. Install Dependencies

```bash
# Install root dependencies
npm install

# This installs all workspace dependencies
```

### 3. Environment Configuration

Create `.env.local` in the root directory:

```bash
cp .env.example .env.local
```

Edit `.env.local` and add your API keys:

```env
# Frontend
VITE_API_URL=http://localhost:3001
VITE_WS_URL=ws://localhost:3001

# Backend
BACK_PORT=3001
BACK_DATABASE_URL=postgresql://user:password@localhost:5432/copilot_dev
BACK_JWT_SECRET=your_super_secret_key_change_in_production

# AI Providers
BACK_GEMINI_API_KEY=your_gemini_key
BACK_CLAUDE_API_KEY=your_claude_key
BACK_OPENAI_API_KEY=your_openai_key
```

### 4. Database Setup (Optional)

If using PostgreSQL locally:

```bash
# Create database
createdb copilot_dev

# Run migrations
cd backend
npx prisma migrate dev --name init

# View database
npx prisma studio
```

## Development

### Start All Services

```bash
# From root directory
npm run dev
```

This starts:
- Frontend on `http://localhost:5173`
- Backend on `http://localhost:3001`
- WebSocket on `ws://localhost:3001`

### Start Individual Services

```bash
# Frontend only
cd frontend
npm run dev

# Backend only
cd backend
npm run dev

# Browser extension
cd extension
npm run dev
```

### Access Points

- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:3001/api
- **API Health**: http://localhost:3001/api/health
- **WebSocket**: ws://localhost:3001

## Build for Production

```bash
# Build all packages
npm run build

# Build specific package
cd frontend && npm run build
cd backend && npm run build
```

## Testing

```bash
# Run all tests
npm run test

# Run with coverage
npm run test:coverage

# Watch mode
cd frontend && npm run test:watch
```

## Code Quality

```bash
# Lint all code
npm run lint

# Fix linting issues
npm run lint:fix

# Type checking
npm run type-check

# Format code
npm run format
```

## Troubleshooting

### Port Already in Use

```bash
# Frontend on different port
cd frontend && npm run dev -- --port 3000

# Backend on different port
cd backend && PORT=3002 npm run dev
```

### Database Connection Issues

```bash
# Check PostgreSQL is running
psql --version

# Test connection
psql postgresql://user:password@localhost:5432/copilot_dev

# Reset migrations
cd backend
npx prisma migrate reset
```

### Module Not Found

```bash
# Clear node_modules and reinstall
rm -rf node_modules
npm install
```

### WebSocket Connection Failed

Ensure backend is running and CORS origin is correct in `.env.local`

## Docker Setup (Optional)

### Using Docker Compose

```bash
# Start all services with Docker
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down
```

Create `docker-compose.yml`:

```yaml
version: '3.8'
services:
  db:
    image: postgres:15
    environment:
      POSTGRES_DB: copilot_dev
      POSTGRES_PASSWORD: password
    ports:
      - "5432:5432"
  backend:
    build: ./backend
    ports:
      - "3001:3001"
    depends_on:
      - db
  frontend:
    build: ./frontend
    ports:
      - "5173:5173"
```

## Next Steps

1. Read [Architecture Overview](./ARCHITECTURE.md)
2. Check [API Reference](./API.md)
3. Review [Contributing Guidelines](../CONTRIBUTING.md)
4. Start building features!

## Support

Need help?
- Check existing [GitHub Issues](https://github.com/Aneesh72658/copilot-devenv/issues)
- Read documentation in `docs/`
- Open a new issue with details

## Resources

- [React Documentation](https://react.dev)
- [Express.js Guide](https://expressjs.com/)
- [Prisma Documentation](https://www.prisma.io/docs/)
- [Socket.io Guide](https://socket.io/docs/)
- [Tailwind CSS](https://tailwindcss.com/)
