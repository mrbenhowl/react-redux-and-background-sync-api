import { all } from 'redux-saga/effects'
import personalDetailsSagas from './personalDetails.saga'

export default function * rootSaga () {
  yield all([
    ...personalDetailsSagas
  ])
}
