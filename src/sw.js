console.log('Bonjour from sw.js')

self.addEventListener('sync', function (event) {
  console.log('hello sync')
})
