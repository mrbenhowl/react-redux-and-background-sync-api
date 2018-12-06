import { takeLatest, call } from 'redux-saga/effects'
import { types } from '../reducers/users.reducer'
import { serviceWorkerDetails } from '../swDetails'

export default [takeLatest(types.ADD_USER, createNewUser)]

function * createNewUser () {
  yield call(() => {
    return serviceWorkerDetails.registration.sync.register('createNewUser')
  })
}
