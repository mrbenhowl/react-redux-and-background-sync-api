import runtime from 'serviceworker-webpack-plugin/lib/runtime'

export const serviceWorkerDetails = { isBackgroundSyncAvailable: false }

function registerSW () {
  if ('serviceWorker' in navigator && 'SyncManager' in window) {
    const registration = runtime.register()
    registration.then(reg => {
      serviceWorkerDetails.registration = reg
      serviceWorkerDetails.isBackgroundSyncAvailable = true
    })
  } else {
    console.error('browser does not support service workers')
  }
}

export default registerSW
