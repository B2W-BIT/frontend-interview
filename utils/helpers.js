// https://webapplog.com/decreasing-64-bit-tweet-id-in-javascript/
export const decrementHugeNumberBy1 = (n) => {
    // make sure s is a string, as we can't do math on numbers over a certain size
    n = n.toString()
    let allButLast = n.substr(0, n.length - 1)
    let lastNumber = n.substr(n.length - 1)

    if (lastNumber === "0") {
        return decrementHugeNumberBy1(allButLast) + "9"
    }
    else {
        let finalResult = allButLast + (parseInt(lastNumber, 10) - 1).toString()
        return trimLeft(finalResult, "0")
    }
}

function trimLeft(s, c) {
    let i = 0
    while (i < s.length && s[i] === c) {
        i++
    }

    return s.substring(i)
}

export const parseTweets = (tweets) => {
  return tweets.map(t => {
    let tweet = {
      id: t.id,
      id_str: t.id_str,
      text: t.text,
      entities: t.entities,
      in_reply_to_screen_name: t.in_reply_to_screen_name,
      in_reply_to_user_id_str: t.in_reply_to_user_id_str
    }

    if (t.hasOwnProperty('extended_entities')) {
      tweet.video_info = t.extended_entities.media[0].video_info
    }

    return tweet
  })
}

export const parseInfos = (infos) => {
  infos.profile_image_400 = infos.profile_image_url.replace('normal', '400x400')
  return infos
}
