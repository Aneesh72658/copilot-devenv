/**
 * AI Provider Interface
 * Unified interface for multiple AI providers
 */

export interface AIMessage {
  role: 'user' | 'assistant'
  content: string
}

export interface AIResponse {
  content: string
  provider: string
  tokensUsed?: number
  error?: string
}

export interface CodeGenerationRequest {
  prompt: string
  language: string
  context?: string
  style?: string
}

export interface CodeAnalysisRequest {
  code: string
  language: string
  focus?: 'performance' | 'security' | 'maintainability' | 'all'
}

export abstract class AIProvider {
  abstract chat(messages: AIMessage[]): Promise<AIResponse>
  abstract generateCode(request: CodeGenerationRequest): Promise<AIResponse>
  abstract analyzeCode(request: CodeAnalysisRequest): Promise<AIResponse>
}
