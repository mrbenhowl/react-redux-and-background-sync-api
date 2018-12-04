import React from 'react'
import ReactDOM from 'react-dom'
import runtime from 'serviceworker-webpack-plugin/lib/runtime'

const App = () => {
  return <div>Hello world</div>
}

ReactDOM.render(<App />, document.getElementById('root'))

if ('serviceWorker' in navigator) {
  const registration = runtime.register()
} else {
  console.error('browser does not support service workers')
}
