import { all } from 'redux-saga/effects'
import sagasForUsers from './users.saga'

export default function * rootSaga () {
  yield all([...sagasForUsers])
}
