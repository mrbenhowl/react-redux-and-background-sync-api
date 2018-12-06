import { connect } from 'react-redux'
import { actions } from '../../reducers/users.reducer'

const mapDispatchToState = dispatch => ({
  addUser: () => dispatch(actions.addUser())
})

export default connect(
  null,
  mapDispatchToState
)
