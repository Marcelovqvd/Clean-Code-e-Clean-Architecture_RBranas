import { Segment } from "./Segment"

class Ride {
    segments: Segment[] = []
    
  constructor() {

  }

  addSegment(distance: number, date: Date) {
    this.segments.push(new Segment(distance, date))
  }
}

export { Ride }