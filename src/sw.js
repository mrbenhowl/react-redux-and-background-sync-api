import addUser from './services/addUser'

console.log('Bonjour from sw.js')

self.addEventListener('sync', function (event) {
  if (event.tag === 'createNewUser') {
    event.waitUntil(addUser())
  }
})
