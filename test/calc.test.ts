import { Calc } from "../src"

test("Should calculate the value of a normal ride", () => {
    const fare = Calc([{dist: 10, day: 2}, {dist: 5, day: 2}])
    expect(fare).toBe(10)
})