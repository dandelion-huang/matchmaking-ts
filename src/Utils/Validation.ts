import Individual from '../System/Individual'
import MatchmakingSystem from '../System/MatchmakingSystem'

export function checkIfMatchable(individuals: Individual[]) {
  if (individuals.length < 2) {
    throw new Error('There should be at least two individuals for matching')
  }
  return individuals
}

export function checkIfUniqueIndividual(system: MatchmakingSystem, individual: Individual): MatchmakingSystem {
  if (system.getIndividuals().some((i) => i.getId() === individual.getId())) {
    throw new Error('Individuals should be unique')
  }
  return system
}

export function checkIfValidHabits(habits: string[]): string[] {
  if (habits.some((h) => h.length < 1 || h.length > 16)) {
    throw new Error('Each habit should be between 1 and 16 characters')
  }
  return habits
}

export function checkIfValidIntroduction(introcution: string): string {
  if (introcution.length < 0 || introcution.length > 200) {
    throw new Error('Introduction should be between 0 and 200 characters')
  }
  return introcution
}

export function checkIfValidAge(age: number): number {
  if (age < 18) {
    throw new Error('Age should be bigger than 18')
  }
  return age
}

export function checkIfValidName(name: string): string {
  if (name.length < 1 || name.length > 16) {
    throw new Error('Name should be between 1 and 16 characters')
  }
  return name
}

export function checkIfValidId(id: number): number {
  if (id < 0) {
    throw new Error('Id should be bigger than 0')
  }
  return id
}
