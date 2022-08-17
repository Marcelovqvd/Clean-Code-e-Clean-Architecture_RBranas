import { calculateRide } from "../src/calcRefator"

test("Deve calcular o valor de uma corrida normal", function() {
  const segments = [{ dist: 10, ds: new Date("2022-15-08T10:00:00")}]
  const fare = calculateRide(segments)
  expect(fare).toBe(21)
})

test("Deve calcular o valor de uma corrida em horário noturno", function() {
  const segments = [{ dist: 10, ds: new Date("2022-15-08T23:00:00")}]
  const fare = calculateRide(segments)
  expect(fare).toBe(39)
})


test("Deve calcular o valor de uma corrida no domingo", function() {
  const segments = [{ dist: 10, ds: new Date("2022-14-08T10:00:00")}]
  const fare = calculateRide(segments)
  expect(fare).toBe(29)
})

test("Deve calcular o valor de uma corrida com tarifa mínima", function() {
  const segments = [{ dist: 3, ds: new Date("2022-15-08T10:00:00")}]
  const fare = calculateRide(segments)
  expect(fare).toBe(10)
})