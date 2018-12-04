export const types = {
  SAVE_PERSONAL_DETAILS: 'PERSONAL_DETAILS/SAVE'
}

export function personalDetails (state = {}, action = {}) {
  return state
}

export const actions = {
  savePersonalDetails: () => ({ type: types.SAVE_PERSONAL_DETAILS })
}
