import Gender from './Gender'
import Coord from './Coord'
import MatchmakingSystem from './MatchmakingSystem'
import {
  checkIfValidHabits,
  checkIfValidIntroduction,
  checkIfValidAge,
  checkIfValidName,
  checkIfValidId,
  checkIfUniqueIndividual,
} from '../Utils/Validation'

class Individual {
  private static indexId: number = 1
  private id: number
  private name: string
  private gender: Gender
  private age: number
  private introduction: string
  private habits: string[]
  private coord: Coord
  private system: MatchmakingSystem

  public constructor(name: string, gender: Gender, age: number, introduction: string, habits: string[], coord: Coord) {
    this.setId()
    this.setName(name)
    this.setGender(gender)
    this.setAge(age)
    this.setIntroduction(introduction)
    this.setHabits(habits)
    this.setCoord(coord)
  }

  public signIn(system: MatchmakingSystem): void {
    this.setSystem(system)
    system.addIndividuals(this)
  }

  public setSystem(system: MatchmakingSystem): void {
    this.system = checkIfUniqueIndividual(system, this)
  }

  public getSystem(): MatchmakingSystem {
    return this.system
  }

  public setCoord(coord: Coord): void {
    this.coord = coord
  }

  public getCoord(): Coord {
    return this.coord
  }

  public setHabits(habits: string[]): void {
    this.habits = checkIfValidHabits(habits)
  }

  public getHabits(): string[] {
    return this.habits
  }

  public setIntroduction(introduction: string): void {
    this.introduction = checkIfValidIntroduction(introduction)
  }

  public getIntroduction(): string {
    return this.introduction
  }

  public setAge(age: number): void {
    this.age = checkIfValidAge(age)
  }

  public getAge(): number {
    return this.age
  }

  public setGender(gender: Gender): void {
    this.gender = gender
  }

  public getGender(): string {
    return Gender[this.gender]
  }

  public setName(name: string): void {
    this.name = checkIfValidName(name)
  }

  public getName(): string {
    return this.name
  }

  public setId(): void {
    this.id = checkIfValidId(Individual.indexId)
    this.addIndexId()
  }

  public getId(): number {
    return this.id
  }

  private addIndexId(): void {
    Individual.indexId++
  }
}

export default Individual
