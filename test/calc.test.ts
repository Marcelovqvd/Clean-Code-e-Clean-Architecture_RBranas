test("Deve calcular o valor de uma corrida normal", function() {
  const segments = [{ dist: 10, ds: new Date("2021-03-01T10:00:00")}]
  expect(segments).toBe(2)
})
