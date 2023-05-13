class Coord {
  private x: number
  private y: number

  constructor(x: number, y: number) {
    this.setX(x)
    this.setY(y)
  }

  public setY(y: number): void {
    this.y = y
  }

  public getY(): number {
    return this.y
  }

  public setX(x: number): void {
    this.x = x
  }

  public getX(): number {
    return this.x
  }
}

export default Coord
