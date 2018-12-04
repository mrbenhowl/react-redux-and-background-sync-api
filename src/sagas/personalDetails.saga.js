import { takeLatest } from 'redux-saga/effects'
import { types } from '../reducers/personalDetails.reducer'

export default [takeLatest(types.SAVE_PERSONAL_DETAILS, savePersonalDetails)]

function * savePersonalDetails () {}
