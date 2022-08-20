import { Ride } from "../src/Ride"

test("Deve calcular o valor de uma corrida normal", () => {
  const ride = new Ride()
  ride.addSegment(10, new Date("2022-15-08T10:00:00"))
  const fare = ride.finish();
  expect(fare).toBe(21)
})

test("Deve calcular o valor de uma corrida noturna", () => {
  const ride = new Ride()
  ride.addSegment(10, new Date("2022-15-08T23:00:00"))
  const fare = ride.finish();
  expect(fare).toBe(39)
})