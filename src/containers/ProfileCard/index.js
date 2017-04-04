import { connect } from 'react-redux'
import ProfileCard from 'Components/ProfileCard'

const mapStateToProps = (state) => {
  return {
    user: state.user.user
  }
}

export default connect(mapStateToProps, null)(ProfileCard)
