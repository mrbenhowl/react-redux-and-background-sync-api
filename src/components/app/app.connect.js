import { connect } from 'react-redux'
import { actions } from '../../reducers/personalDetails.reducer'

const mapDispatchToState = dispatch => ({
  savePersonalDetails: () => dispatch(actions.savePersonalDetails())
})

export default connect(
  null,
  mapDispatchToState
)
