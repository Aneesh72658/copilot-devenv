/**
 * Background Service Worker
 */

chrome.runtime.onInstalled.addListener(() => {
  console.log('Copilot Dev Environment installed')
})

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'getPageContent') {
    sendResponse({
      title: sender.tab?.title,
      url: sender.tab?.url,
    })
  }
})
