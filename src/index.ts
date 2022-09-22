
export function Calc(movArray: any) {
    const fare = movArray[0].dist;
    return fare;
}

const rides = [{dist: 10, day: 2}, {dist: 5, day: 2}]
Calc(rides)
