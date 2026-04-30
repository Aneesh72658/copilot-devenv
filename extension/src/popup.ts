// Popup UI logic
document.getElementById('askButton')?.addEventListener('click', () => {
  chrome.runtime.sendMessage({ action: 'openChat' }, (response) => {
    console.log('Opened chat:', response)
  })
})

document.getElementById('settingsButton')?.addEventListener('click', () => {
  chrome.runtime.openOptionsPage()
})
