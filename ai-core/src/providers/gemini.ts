/**
 * Gemini AI Provider
 */

import { GoogleGenerativeAI } from '@google/generative-ai'
import { AIMessage, AIResponse, CodeGenerationRequest, CodeAnalysisRequest, AIProvider } from './types'

export class GeminiProvider extends AIProvider {
  private client: GoogleGenerativeAI
  private model: string = 'gemini-pro'

  constructor(apiKey: string) {
    super()
    this.client = new GoogleGenerativeAI(apiKey)
  }

  async chat(messages: AIMessage[]): Promise<AIResponse> {
    try {
      const model = this.client.getGenerativeModel({ model: this.model })
      const chat = model.startChat({
        history: messages.slice(0, -1).map((msg) => ({
          role: msg.role === 'user' ? 'user' : 'model',
          parts: msg.content,
        })),
      })

      const lastMessage = messages[messages.length - 1]
      const result = await chat.sendMessage(lastMessage.content)
      const response = await result.response

      return {
        content: response.text(),
        provider: 'gemini',
      }
    } catch (error: any) {
      return {
        content: '',
        provider: 'gemini',
        error: error.message,
      }
    }
  }

  async generateCode(request: CodeGenerationRequest): Promise<AIResponse> {
    const prompt = `Generate ${request.language} code for: ${request.prompt}${request.context ? `\n\nContext: ${request.context}` : ''}${request.style ? `\n\nStyle: ${request.style}` : ''}`

    return this.chat([{ role: 'user', content: prompt }])
  }

  async analyzeCode(request: CodeAnalysisRequest): Promise<AIResponse> {
    const focusArea = request.focus || 'all'
    const prompt = `Analyze this ${request.language} code for ${focusArea}:\n\n${request.code}\n\nProvide specific suggestions for improvement.`

    return this.chat([{ role: 'user', content: prompt }])
  }
}
