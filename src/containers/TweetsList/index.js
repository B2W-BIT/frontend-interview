import { connect } from 'react-redux'
import { fetchTweets, fetchTweetsSuccees, fetchMore } from '../../actions/tweets'
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
    },
    fetchMore: (id, count) => {
      dispatch(fetchMore(id, count)).then(response => console.log(response))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TweetsList)
