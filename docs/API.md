# API Reference

## Base URL

```
http://localhost:3001/api
```

## Authentication

Use JWT tokens in the `Authorization` header:

```
Authorization: Bearer <token>
```

## Response Format

All responses follow this format:

### Success Response

```json
{
  "success": true,
  "data": { ... },
  "message": "Success message"
}
```

### Error Response

```json
{
  "success": false,
  "error": {
    "code": "ERROR_CODE",
    "message": "Error description",
    "details": { ... }
  }
}
```

## Endpoints

### Authentication

#### Register User

```http
POST /api/auth/register
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "secure_password",
  "name": "User Name"
}
```

Response:
```json
{
  "success": true,
  "data": {
    "id": "user_id",
    "email": "user@example.com",
    "name": "User Name"
  }
}
```

#### Login

```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "secure_password"
}
```

Response:
```json
{
  "success": true,
  "data": {
    "accessToken": "jwt_token",
    "refreshToken": "refresh_token",
    "user": { ... }
  }
}
```

### Projects

#### List Projects

```http
GET /api/projects
Authorization: Bearer <token>
```

Response:
```json
{
  "success": true,
  "data": [
    {
      "id": "project_id",
      "name": "Project Name",
      "description": "Description",
      "createdAt": "2024-01-01T00:00:00Z"
    }
  ]
}
```

#### Get Project

```http
GET /api/projects/:id
Authorization: Bearer <token>
```

#### Create Project

```http
POST /api/projects
Authorization: Bearer <token>
Content-Type: application/json

{
  "name": "New Project",
  "description": "Project description"
}
```

#### Update Project

```http
PUT /api/projects/:id
Authorization: Bearer <token>
Content-Type: application/json

{
  "name": "Updated Name",
  "description": "Updated description"
}
```

#### Delete Project

```http
DELETE /api/projects/:id
Authorization: Bearer <token>
```

### Files

#### Upload File

```http
POST /api/files/upload
Authorization: Bearer <token>
Content-Type: multipart/form-data

{
  "file": <binary>,
  "projectId": "project_id"
}
```

#### Download File

```http
GET /api/files/:id
Authorization: Bearer <token>
```

### AI

#### Chat with AI

```http
POST /api/ai/chat
Authorization: Bearer <token>
Content-Type: application/json

{
  "messages": [
    {
      "role": "user",
      "content": "How do I create a button in React?"
    }
  ],
  "provider": "gemini"
}
```

Response (streaming via WebSocket):
```json
{
  "type": "ai:message",
  "data": {
    "content": "To create a button in React...",
    "provider": "gemini",
    "completed": true
  }
}
```

#### Generate Code

```http
POST /api/ai/generate-code
Authorization: Bearer <token>
Content-Type: application/json

{
  "prompt": "Create a login form component",
  "language": "typescript",
  "context": "React component"
}
```

#### Analyze Code

```http
POST /api/ai/analyze-code
Authorization: Bearer <token>
Content-Type: application/json

{
  "code": "const add = (a, b) => a + b;",
  "language": "javascript",
  "focus": "performance"
}
```

### User

#### Get Profile

```http
GET /api/user/profile
Authorization: Bearer <token>
```

#### Update Profile

```http
PUT /api/user/profile
Authorization: Bearer <token>
Content-Type: application/json

{
  "name": "New Name",
  "preferences": { ... }
}
```

#### Get History

```http
GET /api/user/history
Authorization: Bearer <token>
```

## WebSocket Events

### Client → Server

```javascript
// Connect
socket.connect()

// Send message
socket.emit('chat:message', {
  content: 'Hello Copilot',
  projectId: 'project_id'
})

// Disconnect
socket.disconnect()
```

### Server → Client

```javascript
// Connected
socket.on('connect', () => {
  console.log('Connected')
})

// Receive AI message
socket.on('ai:message', (data) => {
  console.log('AI:', data.content)
})

// Receive suggestion
socket.on('ai:suggestion', (data) => {
  console.log('Suggestion:', data.content)
})

// Code executed
socket.on('code:executed', (data) => {
  console.log('Output:', data.output)
})

// Disconnected
socket.on('disconnect', () => {
  console.log('Disconnected')
})
```

## Error Codes

| Code | Message | Status |
|------|---------|--------|
| INVALID_REQUEST | Invalid request parameters | 400 |
| UNAUTHORIZED | Authentication required | 401 |
| FORBIDDEN | Access denied | 403 |
| NOT_FOUND | Resource not found | 404 |
| CONFLICT | Resource already exists | 409 |
| RATE_LIMITED | Too many requests | 429 |
| SERVER_ERROR | Internal server error | 500 |
| SERVICE_UNAVAILABLE | Service temporarily unavailable | 503 |

## Rate Limiting

API is rate limited to:
- **100 requests per 15 minutes** (unauthenticated)
- **1000 requests per 15 minutes** (authenticated)

Headers:
```
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 99
X-RateLimit-Reset: 1609459200
```

## Pagination

List endpoints support pagination:

```
GET /api/projects?page=1&limit=10
```

Response:
```json
{
  "success": true,
  "data": [...],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 50,
    "pages": 5
  }
}
```
