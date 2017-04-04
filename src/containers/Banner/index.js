import { connect } from 'react-redux'
import { fetchUserData, fetchUserDataSuccess } from 'Actions/user'
import Banner from 'Components/Banner'

const mapStateToProps = (state) => {
  return {
    user: state.user.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserData: (id) => {
      dispatch(fetchUserData(id)).then(response => {
        dispatch(fetchUserDataSuccess(response.payload.data))
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Banner)
