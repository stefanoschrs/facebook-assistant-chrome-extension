/* globals chrome */

'use strict'

chrome.runtime.sendMessage({ from: 'content', subject: 'showPageAction' })

chrome.runtime.onMessage.addListener((msg, sender, done) => {
  console.log('[FA] onMessage', msg, sender)

  if (msg.from === 'popup') {
    if (msg.subject === 'getInfo') {
      let userId
      try {
        userId = getUserId()
      } catch (err) {
        console.error('[FA] Not a user page')
      }

      done({ userId })
    }
  }
})

function getUserId () {
  return []
    .map
    .call(document.querySelectorAll('[data-gt]'), (el) => {
      el = el.getAttribute('data-gt')
      return el.indexOf('{"profile_owner') === 0 ? el : ''
    })
    .filter((el) => el)
    .pop()
    .match(/[0-9]+/)
    .pop()
}
