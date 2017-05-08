import { timeline } from '../reducer'

describe('should test the reducer for the timeline module', () => {

    let pending = timeline(undefined, { type: "FETCH_TIMELINE_PENDING" })

    it("should test fetching pending", () => {
        expect(pending).toEqual({
            tweetList: {},
            fetched: false,
            mustFetch: true,
            fetching: true,
            error: null,
            fetchType: 'tweetsAndReplies',
            lastCursors: {},
        })
    })

    let rejected = timeline(pending, { type: "FETCH_TIMELINE_REJECTED", payload: "Error" })


    it("should test fetching error", () => {
        expect(rejected).toEqual({
            tweetList: {},
            fetched: false,
            mustFetch: true,
            fetching: false,
            error: ["Error"],
            fetchType: 'tweetsAndReplies',
            lastCursors: {},
        })
    })

    let fullfilled = timeline(pending, { type: "FETCH_TIMELINE_FULFILLED", payload: [ {id: 1, text: "yeah :D"} ] })

    it("should test fetching fullfillment", () => {
        expect(fullfilled).toEqual({
            tweetList: {"tweetsAndReplies": [ {id: 1, text: "yeah :D"} ]},
            fetched: true,
            mustFetch: false,
            fetching: false,
            error: null,
            fetchType: 'tweetsAndReplies',
            lastCursors: {
                tweetsAndReplies: 1
            },
        })
    })

    let typeChanged1 = timeline(rejected, {
        type: "CHANGE_TIMELINE_FETCHING_MODE",
        fetchType: "test"
    })

    it("should test fetch mode changing from rejected", () => {
        expect(typeChanged1).toEqual({
            tweetList: {},
            fetched: false,
            mustFetch: true,
            fetching: false,
            error: null,
            fetchType: 'test',
            lastCursors: {},
        })
    })

    let typeChanged2 = timeline(fullfilled, {
        type: "CHANGE_TIMELINE_FETCHING_MODE",
        fetchType: "tweetsAndReplies"
    })

    it("should test fetch mode changing from fullfilled", () => {
        expect(typeChanged2).toEqual({
            tweetList: {"tweetsAndReplies": [ {id: 1, text: "yeah :D"} ]},
            fetched: true,
            mustFetch: false,
            fetching: false,
            error: null,
            fetchType: 'tweetsAndReplies',
            lastCursors: {
                tweetsAndReplies: 1
            },
        })
    })
})
