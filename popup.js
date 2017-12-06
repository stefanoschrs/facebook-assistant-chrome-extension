/* globals chrome */

'use strict'

window.addEventListener('DOMContentLoaded', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { from: 'popup', subject: 'getInfo' }, onInfo)
  })
})

function onInfo (data) {
  console.log('onInfo', data)

  if (!data) return

  // User Id
  if (data.userId) {
    let userId = document.querySelector('#user-id')

    userId.className = userId.className.replace('hidden', '')

    userId.querySelector('strong').innerHTML = data.userId
  }
}
