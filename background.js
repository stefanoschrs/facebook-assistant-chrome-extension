/* globals chrome */

chrome.runtime.onMessage.addListener((msg, sender) => {
  if (msg.from === 'content') {
    if (msg.subject === 'showPageAction') {
      chrome.pageAction.show(sender.tab.id)
    }
  }
})
