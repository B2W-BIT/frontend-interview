import { Transform, timeUtils } from '../helpers'

test("Testing transforming object to url", () => {
    let obj = {
        param1: "abc",
        param2: "def",
        param3: "ghi"
    }
    expect(Transform.objectToUrl(obj)).toBe("param1=abc&param2=def&param3=ghi")
})

describe("Testing time utils ", () => {
    test("Testing get array by month number as get by JS Date obj", () => {
        expect(timeUtils.monthName(0)).toBe("janeiro")
        expect(timeUtils.monthName(1)).toBe("fevereiro")
        expect(timeUtils.monthName(2)).toBe("março")
        expect(timeUtils.monthName(3)).toBe("abril")
        expect(timeUtils.monthName(4)).toBe("maio")
        expect(timeUtils.monthName(5)).toBe("junho")
        expect(timeUtils.monthName(6)).toBe("julho")
        expect(timeUtils.monthName(7)).toBe("agosto")
        expect(timeUtils.monthName(8)).toBe("setembro")
        expect(timeUtils.monthName(9)).toBe("outubro")
        expect(timeUtils.monthName(10)).toBe("novembro")
        expect(timeUtils.monthName(11)).toBe("dezembro")
    })
})
