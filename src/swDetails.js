import runtime from 'serviceworker-webpack-plugin/lib/runtime'

const serviceWorkerDetails = { isBackgroundSyncAvailable: false }

if ('serviceWorker' in navigator && 'SyncManager' in window) {
  const registration = runtime.register()
  serviceWorkerDetails.registration = registration
  serviceWorkerDetails.isBackgroundSyncAvailable = true
} else {
  console.error('browser does not support service workers')
}

export default serviceWorkerDetails
