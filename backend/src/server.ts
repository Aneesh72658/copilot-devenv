import express, { Express, Request, Response, NextFunction } from 'express'
import cors from 'cors'
import { createServer } from 'http'
import { Server as SocketServer } from 'socket.io'
import pino from 'pino'

// Initialize logger
const logger = pino({
  level: process.env.BACK_LOG_LEVEL || 'info',
})

// Initialize Express app
const app: Express = express()
const httpServer = createServer(app)

// Initialize Socket.io
const io = new SocketServer(httpServer, {
  cors: {
    origin: process.env.BACK_CORS_ORIGIN || 'http://localhost:5173',
    methods: ['GET', 'POST'],
  },
})

// Middleware
app.use(cors({
  origin: process.env.BACK_CORS_ORIGIN || 'http://localhost:5173',
  credentials: true,
}))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Request logging
app.use((req: Request, res: Response, next: NextFunction) => {
  logger.info({
    method: req.method,
    path: req.path,
    query: req.query,
  })
  next()
})

// Health check endpoint
app.get('/api/health', (req: Request, res: Response) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
  })
})

// API Routes (to be implemented)
app.get('/api', (req: Request, res: Response) => {
  res.json({
    message: 'Copilot Dev Environment API',
    version: '0.1.0',
    endpoints: {
      auth: '/api/auth',
      projects: '/api/projects',
      files: '/api/files',
      ai: '/api/ai',
      user: '/api/user',
    },
  })
})

// Placeholder routes (implement these next)
app.post('/api/auth/register', (req: Request, res: Response) => {
  res.status(201).json({ message: 'Registration endpoint - coming soon' })
})

app.post('/api/auth/login', (req: Request, res: Response) => {
  res.json({ message: 'Login endpoint - coming soon' })
})

app.get('/api/projects', (req: Request, res: Response) => {
  res.json({ projects: [] })
})

// WebSocket connection
io.on('connection', (socket) => {
  logger.info(`Client connected: ${socket.id}`)

  socket.on('chat:message', (data) => {
    logger.info(`Message from ${socket.id}:`, data)
    io.emit('chat:message', { ...data, timestamp: new Date() })
  })

  socket.on('disconnect', () => {
    logger.info(`Client disconnected: ${socket.id}`)
  })
})

// Error handling
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  logger.error(err)
  res.status(err.status || 500).json({
    success: false,
    error: {
      message: err.message || 'Internal server error',
    },
  })
})

// Start server
const PORT = process.env.BACK_PORT || 3001
httpServer.listen(PORT, () => {
  logger.info(`🚀 Backend server running on http://localhost:${PORT}`)
  logger.info(`📡 WebSocket server running on ws://localhost:${PORT}`)
})

export { app, io }
