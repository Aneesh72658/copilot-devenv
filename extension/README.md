# Browser Extension - Copilot Dev Environment

Browser extension for real-time code assistance while browsing.

## Features

### Activity Monitoring
- Track code editor usage
- Monitor GitHub activity
- Watch for error patterns
- Detect context switches

### Context Extraction
- Extract code snippets
- Capture error messages
- Monitor typing patterns
- Track file changes

### Suggestions
- Inline code suggestions
- Quick fixes for errors
- Learning recommendations
- Next step guidance

## Installation

### Development

1. Clone repository
2. Run `npm install` in extension folder
3. Run `npm run dev`
4. Open `chrome://extensions`
5. Enable "Developer mode"
6. Click "Load unpacked"
7. Select `extension/dist` folder

### Production

```bash
npm run build
```

Upload `dist` folder to Chrome Web Store.

## Architecture

### Background Script
- Message handling
- State management
- API communication

### Content Script
- DOM monitoring
- Context extraction
- UI injection

### Popup UI
- User interaction
- Settings display
- Quick actions

## Manifest V3

Modern browser extension format supporting:
- Chrome 88+
- Edge 88+
- Firefox (partial)

## Contributing

See [CONTRIBUTING.md](../CONTRIBUTING.md) for guidelines.
