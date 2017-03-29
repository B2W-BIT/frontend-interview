import { connect } from 'react-redux'
import { fetchTweets } from '../../actions/tweets'
import TweetsList from '../../components/TweetsList'

const mapStateToProps = (state) => {
  return {
    tweetsList: state.tweetsList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTweets: () => {
      dispatch(fetchTweets())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TweetsList)
