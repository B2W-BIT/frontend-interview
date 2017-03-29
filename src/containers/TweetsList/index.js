import { connect } from 'react-redux'
import { fetchTweets, fetchTweetsSuccees } from '../../actions/tweets'
import TweetsList from '../../components/TweetsList'

const mapStateToProps = (state) => {
  return {
    tweetsList: state.tweetsList.tweetsList
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    initFetchTweets: () => {
      dispatch(fetchTweets()).then(response => {
        dispatch(fetchTweetsSuccees(response.payload.data))
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TweetsList)
