# 🚀 Copilot Dev Environment

An AI-powered development environment integrated directly into your applications, similar to Microsoft Copilot in Office, VS Code, and Windows.

## ✨ Features

### 🤖 Integrated AI Assistant
- Real-time code suggestions and completions
- Chat-based assistance panel
- Context-aware help and recommendations
- Multi-AI provider support (Claude, Gemini, Copilot)
- Streaming responses for real-time feedback

### 🛠️ Multi-Purpose Development
- **Web Development** - HTML, CSS, JavaScript/TypeScript
- **Backend Coding** - Node.js, Python, Go, etc.
- **Animation & Design** - SVG, Canvas, design suggestions
- **CAD/3D Support** - 3D file handling and visualization
- **Testing & Debugging** - Unit tests, integration tests, error fixing
- **Database Design** - Schema design, query optimization

### 🧠 Smart Features
- Browser activity monitoring and context extraction
- Intelligent error detection and auto-fixes
- Code quality analysis and refactoring suggestions
- Learning path recommendations based on skill level
- Project management and organization
- Code execution in sandboxed environment
- Real-time collaboration ready

## 📁 Project Structure

```
copilot-devenv/
├── frontend/                    # React-based UI Layer
├── backend/                     # Node.js/Express API Server
├── ai-core/                     # AI Integration Layer
├── extension/                   # Browser Extension
├── docs/                        # Documentation
├── examples/                    # Example projects
├── package.json                 # Root package.json
├── turbo.json                   # Turbo build config
├── tsconfig.json                # TypeScript config
└── .env.example                 # Environment variables template
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm/yarn
- Git
- API keys:
  - Google Gemini API key
  - Anthropic Claude API key (optional)
  - OpenAI API key (optional)

### Installation

```bash
# Clone the repository
git clone https://github.com/Aneesh72658/copilot-devenv.git
cd copilot-devenv

# Install dependencies (uses npm workspaces)
npm install

# Copy environment template
cp .env.example .env.local

# Add your API keys to .env.local
# BACK_GEMINI_API_KEY=your_key_here
# BACK_CLAUDE_API_KEY=your_key_here
```

### Development

```bash
# Start all services in development mode
npm run dev

# Or start individual services
cd frontend && npm run dev
cd backend && npm run dev
cd extension && npm run dev
```

Access the application at:
- **Frontend**: `http://localhost:5173`
- **Backend API**: `http://localhost:3001`
- **WebSocket**: `ws://localhost:3001`

### Production Build

```bash
npm run build
npm run start
```

## 🏗️ Architecture Overview

### Frontend (React + TypeScript)
- **Tech Stack**: React 18, Vite, TypeScript, Tailwind CSS, Socket.io
- **Features**:
  - Chat interface for AI interaction
  - Code editor with syntax highlighting
  - Real-time suggestions panel
  - Project explorer and file manager
  - Settings and preferences panel
  - Activity monitor dashboard

### Backend (Node.js + Express)
- **Tech Stack**: Express, TypeScript, PostgreSQL, Prisma ORM, Socket.io
- **Features**:
  - REST API for CRUD operations
  - WebSocket server for real-time updates
  - Authentication & authorization (JWT)
  - File upload and processing
  - Code execution environment (sandboxed)
  - Database with Prisma ORM

### AI Core Module
- **Features**:
  - Multi-provider AI integration (Claude, Gemini, OpenAI)
  - Prompt engineering and templates
  - Context management and awareness
  - Response streaming and chunking
  - Error handling and fallbacks
  - Token counting and cost estimation

### Browser Extension
- **Manifest**: Manifest V3 (Chrome, Edge, Firefox)
- **Features**:
  - Tab activity monitoring
  - Page context extraction
  - Inline suggestion overlays
  - Settings and options pages
  - Background message handling

## 🔗 API Structure

### REST Endpoints
```
POST   /api/auth/register          - User registration
POST   /api/auth/login             - User login
GET    /api/user/profile           - Get user profile
POST   /api/projects               - Create project
GET    /api/projects               - List user projects
GET    /api/projects/:id           - Get project details
PUT    /api/projects/:id           - Update project
DELETE /api/projects/:id           - Delete project
POST   /api/files/upload           - Upload file
GET    /api/files/:id              - Download file
POST   /api/ai/suggest             - Get AI suggestions
POST   /api/ai/chat                - Chat with AI
POST   /api/ai/analyze-code        - Analyze code
POST   /api/ai/generate-code       - Generate code
GET    /api/history                - Get interaction history
```

### WebSocket Events
```
connect                             - Client connected
disconnect                          - Client disconnected
user:typing                         - User typing indicator
ai:suggestion                       - New AI suggestion
ai:message                          - Chat message from AI
code:executed                       - Code execution result
file:changed                        - File content changed
activity:monitored                  - Browser activity detected
```

## 🧪 Testing

```bash
# Run all tests
npm run test

# Run tests with coverage
npm run test:coverage

# Run specific test file
cd frontend && npm run test -- ChatPanel.test.tsx
```

## 📚 Documentation

Detailed documentation available in `docs/`:
- [Architecture Overview](./docs/ARCHITECTURE.md)
- [API Reference](./docs/API.md)
- [Setup Guide](./docs/SETUP.md)
- [Contributing Guidelines](./CONTRIBUTING.md)

## 🗺️ Roadmap

### Phase 1: MVP (Weeks 1-4) ✅
- [x] Project scaffold and setup
- [ ] Basic frontend UI (chat panel, editor)
- [ ] Backend API skeleton
- [ ] Gemini API integration
- [ ] Simple suggestion system
- [ ] Authentication system

### Phase 2: Core Features (Weeks 5-10) ⏳
- [ ] Real-time code assistance
- [ ] Code execution environment (WebContainer)
- [ ] Multi-AI provider support
- [ ] Advanced context awareness
- [ ] Browser activity monitoring
- [ ] File management system

### Phase 3: Advanced Features (Weeks 11-16) ⏳
- [ ] Design/Drawing tools integration
- [ ] Animation assistance
- [ ] CAD/3D file support
- [ ] Advanced testing framework
- [ ] Collaborative editing
- [ ] Learning paths and tutorials

### Phase 4: Polish & Deployment (Weeks 17+) ⏳
- [ ] Performance optimization
- [ ] Security hardening
- [ ] User testing and feedback
- [ ] Documentation and tutorials
- [ ] App store deployment
- [ ] Mobile version exploration

## 🔐 Security

- JWT-based authentication
- Encrypted API key storage
- Sandboxed code execution
- CORS protection
- Rate limiting
- Input validation and sanitization
- Regular security audits

## 📝 License

MIT License - See [LICENSE](./LICENSE) for details

## 🤝 Contributing

Contributions are welcome! Please see [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

## 📧 Support

For questions and issues:
- Open a GitHub Issue
- Check existing discussions
- Read documentation in `docs/`

## 🙏 Acknowledgments

Inspired by Microsoft Copilot's integration in Office, VS Code, and Windows.

---

**Made with ❤️ by Aneesh72658**
