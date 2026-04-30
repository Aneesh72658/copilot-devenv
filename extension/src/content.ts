/**
 * Content Script
 * Injects into web pages to monitor activity and extract context
 */

console.log('Copilot Dev Environment content script loaded')

// Monitor for code editors
const monitorCodeEditors = () => {
  // Track Monaco Editor
  const monacoElements = document.querySelectorAll('[class*="monaco"]')
  if (monacoElements.length > 0) {
    console.log('Monaco editor detected')
  }

  // Track CodeMirror
  const codeMirrorElements = document.querySelectorAll('[class*="CodeMirror"]')
  if (codeMirrorElements.length > 0) {
    console.log('CodeMirror detected')
  }

  // Track GitHub code blocks
  const githubCode = document.querySelectorAll('[data-codemirror-is-empty="false"]')
  if (githubCode.length > 0) {
    console.log('GitHub code detected')
  }
}

// Listen for messages from popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'getContent') {
    monitorCodeEditors()
    sendResponse({
      content: document.body.innerText.substring(0, 500),
      url: window.location.href,
    })
  }
})
