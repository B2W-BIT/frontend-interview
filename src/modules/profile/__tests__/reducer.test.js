import { profile } from '../reducer'

describe('should test the reducer for the profile module', () => {

    let pending = profile(undefined, { type: "FETCH_PROFILE_PENDING" })
    it("should test the profile fetching pending", () => {
        expect(pending).toEqual({
            profile: {},
            fetching: true,
            fetched: false,
            error: null,
        })
    })

    let error = profile(pending, { type: "FETCH_PROFILE_REJECTED", payload: "error" })
    it("should test the profile fetching rejected", () => {
        expect(error).toEqual({
            profile: {},
            fetching: false,
            fetched: false,
            error: ["error"],
        })
    })

    let pendingAfterError = profile(error, { type: "FETCH_PROFILE_PENDING" })
    it("should test the profile fetching pending after reject", () => {
        expect(pendingAfterError).toEqual({
            profile: {},
            fetching: true,
            fetched: false,
            error: null,
        })
    })

    let fullfilled = profile(pendingAfterError, { type: "FETCH_PROFILE_FULFILLED", payload: { userProfile: true } })
    it("should test the profile fetching fulfilled", () => {
        expect(fullfilled).toEqual({
            profile: { userProfile: true },
            fetching: false,
            fetched: true,
            error: null,
        })
    })
})
