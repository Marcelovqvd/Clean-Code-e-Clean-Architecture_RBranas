import { calculateRide } from "../src/calcRefatorada"

test("Deve calcular o valor de uma corrida normal", function() {
  const segments = [{ distance: 10, date: new Date("2022-15-08T10:00:00")}]
  const fare = calculateRide(segments)
  expect(fare).toBe(21)
})

test("Deve calcular o valor de uma corrida em horário noturno", function() {
  const segments = [{ distance: 10, date: new Date("2022-15-08T23:00:00")}]
  const fare = calculateRide(segments)
  expect(fare).toBe(39)
})


test("Deve calcular o valor de uma corrida no domingo", function() {
  const segments = [{ distance: 10, date: new Date("2022-14-08T10:00:00")}]
  const fare = calculateRide(segments)
  expect(fare).toBe(29)
})

test("Deve calcular o valor de uma corrida com tarifa mínima", function() {
  const segments = [{ distance: 3, date: new Date("2022-15-08T10:00:00")}]
  const fare = calculateRide(segments)
  expect(fare).toBe(10)
})

test("Deve calcular o valor de uma corrida com a distância inválida", function() {
  const segments = [{ distance: -3, date: new Date("2022-15-08T10:00:00")}]
  expect(() => calculateRide(segments)).toThrow(new Error("Invalid Distance"))
})

test("Deve calcular o valor de uma corrida com a data inválida", function() {
  const segments = [{ distance: 10, date: new Date(" ")}]
  expect(() => calculateRide(segments)).toThrow(new Error("Invalid date"))
})