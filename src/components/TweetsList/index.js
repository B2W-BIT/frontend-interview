import React from 'react'

const TweetsList = ({ TweetsList, fetchTweets }) => {
  const tweets = fetchTweets()
  return (
    <div>
      <h3>I'am a list of tweets</h3>
      { console.log(tweets) }
    </div>
  )
}

export default TweetsList
