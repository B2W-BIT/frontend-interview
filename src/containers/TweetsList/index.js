import { connect } from 'react-redux'
import { fetchTweets, fetchTweetsSuccees } from '../../actions/tweets'
import TweetsList from '../../components/TweetsList'

const mapStateToProps = (state) => {
  return {
    tweetsList: state.tweetsList
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    initFetchTweets: () => { dispatch(fetchTweets()) }
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     initFetchTweets: () => {
//       dispatch(fetchTweets()).then((tweets) => {
//             dispatch(fetchTweetsSuccees(tweets.payload.data))
//         }).catch(err => console.log('ERROR: ', err))
//     }
//   }
// }

export default connect(mapStateToProps, mapDispatchToProps)(TweetsList)
