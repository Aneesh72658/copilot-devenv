# Architecture Overview

## System Design

```
┌─────────────────────────────────────────────────┐
│   User Applications / Web Browsers              │
├─────────────────────────────────────────────────┤
│                                                 │
│  ┌──────────────────────────────────────────┐  │
│  │  Browser Extension (Manifest V3)         │  │
│  │  • Activity Monitoring                   │  │
│  │  • Context Extraction                    │  │
│  │  • Suggestion Overlay                    │  │
│  └──────────────────────────────────────────┘  │
│                                                 │
│  ┌──────────────────────────────────────────┐  │
│  │  React Frontend Application              │  │
│  │  • Chat Interface                        │  │
│  │  • Code Editor                           │  │
│  │  • Project Management                    │  │
│  │  • Settings Panel                        │  │
│  └──────────────────────────────────────────┘  │
└────────────────────┬─────────────────────────────┘
                     │ WebSocket + REST
        ┌────────────▼────────────┐
        │  Express.js Backend     │
        │  • REST API             │
        │  • WebSocket Server     │
        │  • Session Management   │
        │  • File Handling        │
        └────────────┬────────────┘
                     │
        ┌────────────▼──────────────────────┐
        │  AI Integration Layer             │
        │  • Gemini Provider                │
        │  • Claude Provider                │
        │  • OpenAI Provider                │
        │  • Context Management             │
        └────────────┬──────────────────────┘
                     │
        ┌────────────▼──────────────┐
        │  External Services        │
        │  • Google Gemini API      │
        │  • Anthropic Claude API   │
        │  • OpenAI API             │
        │  • PostgreSQL Database    │
        └───────────────────────────┘
```

## Component Details

### Frontend (React)
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **State Management**: Zustand
- **Real-time**: Socket.io Client
- **Code Editor**: Monaco Editor
- **Styling**: Tailwind CSS

### Backend (Express.js)
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: JWT with refresh tokens
- **Real-time**: Socket.io Server
- **File Upload**: Multer
- **Validation**: Express Validator

### AI Core
- **Providers**: Gemini, Claude, OpenAI
- **Context**: File and project awareness
- **Prompting**: Engineered templates
- **Streaming**: Real-time response handling

### Browser Extension
- **Manifest**: V3 (Chrome, Edge, Firefox)
- **Content Script**: DOM monitoring
- **Background Script**: Message handling
- **Popup UI**: User interaction

## Data Flow

### User Asks for Code Suggestions

1. **Frontend**: User types prompt in chat panel
2. **WebSocket**: Sends to backend via Socket.io
3. **Backend**: Receives and validates input
4. **AI Core**: Routes to appropriate provider (Gemini, Claude, etc.)
5. **AI Provider**: Generates response with streaming
6. **Backend**: Processes and enriches response
7. **WebSocket**: Streams back to frontend in real-time
8. **Frontend**: Displays in chat with syntax highlighting

### Code Execution

1. **Frontend**: User selects code to run
2. **REST API**: POST /api/execute
3. **Backend**: Sandboxes and executes code
4. **WebSocket**: Sends results back
5. **Frontend**: Displays output

## Security Architecture

### Authentication
- JWT tokens with expiry
- Refresh token rotation
- Password hashing (bcrypt)
- Session management

### Authorization
- Role-based access control (RBAC)
- Project ownership verification
- API key scoping

### Data Protection
- Encrypted API keys
- HTTPS enforcement
- CORS validation
- Input sanitization
- SQL injection prevention

### Code Execution
- Sandboxed environment
- Resource limits
- Timeout restrictions
- Network isolation

## Scalability

### Horizontal Scaling
- Stateless backend design
- Load balancing ready
- Database connection pooling
- Redis for caching (future)

### Database
- Indexed queries
- Connection pooling
- Automated backups
- Migration management

## Deployment

### Development
- Local PostgreSQL
- Hot module reloading
- Source maps
- Debug logging

### Production
- Cloud-hosted database
- Docker containerization
- Environment configuration
- Performance monitoring

## Future Enhancements

- GraphQL API
- Redis caching layer
- Rate limiting
- Advanced analytics
- Multi-language support
- Collaborative editing
