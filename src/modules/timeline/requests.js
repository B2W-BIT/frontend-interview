import { Config } from '../../config'
import Axios from 'axios'

const { apiUrl } = Config.url

const standardUrl = screen_name => `${apiUrl}/twitter/user/${screen_name}/`

export const fetchTweetsRequests = {
    tweets: (screen_name, lastCursor = null) => {
        let params = ""
        if(lastCursor) {
            params = `&max_id=${lastCursor}`
        }
        let url = `${standardUrl(screen_name)}timeline?count=200&exclude_replies=true${params}`
        console.log(url)
        return Axios.get(url).then(resp => resp.data)
    },
    tweetsAndReplies: (screen_name, lastCursor = null) => {
        let params = ""
        if(lastCursor) {
            params = `max_id=${lastCursor}`
        }
        let url = `${standardUrl(screen_name)}timeline?exclude_replies=false${params}`
        return Axios.get(url).then(resp => resp.data)
    },
    media: screen_name => {
        let url = `${standardUrl(screen_name)}media`
        return Axios.get(url).then(resp => resp.data)
    }
}
