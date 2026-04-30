# AI Core - Copilot Dev Environment

AI integration layer with multi-provider support (Claude, Gemini, OpenAI).

## Features

### Multi-Provider Support
- Google Gemini
- Anthropic Claude
- OpenAI GPT
- Automatic fallback

### Capabilities
- Code generation
- Code analysis and suggestions
- Bug detection
- Refactoring recommendations
- Documentation generation
- Test generation

### Context Awareness
- File context extraction
- Project structure understanding
- Code relationship analysis
- User preference learning

## Getting Started

```bash
cd ai-core
npm install
```

## Configuration

Set API keys in `.env`:
```env
BACK_GEMINI_API_KEY=your_key
BACK_CLAUDE_API_KEY=your_key
BACK_OPENAI_API_KEY=your_key
BACK_AI_DEFAULT_PROVIDER=gemini
```

## Usage

```typescript
import { AIProvider } from './providers'

const provider = new AIProvider('gemini')
const response = await provider.generateCode({
  prompt: 'Create a login form',
  language: 'typescript',
})
```

## Contributing

See [CONTRIBUTING.md](../CONTRIBUTING.md) for guidelines.
