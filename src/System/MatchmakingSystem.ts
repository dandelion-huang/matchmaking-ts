import Individual from './Individual'
import MatchmakingStrategy from '../Strategy/MatchmakingStrategy'

class MatchmakingSystem {
  private individuals: Individual[] = []
  private matchmakingStrategy: MatchmakingStrategy

  public match(): void {
    for (const i of this.individuals) {
      const matchedList = this.matchmakingStrategy.sortMatchmaking(this.individuals, i)
      this.showBestMatched(matchedList, i)
    }
  }

  public showBestMatched(matchedList: Individual[], i: Individual): void {
    console.log(`${i.getName()} is matched with ${matchedList[0].getName()}`)
  }

  public setMatchmakingStrategy(matchmakingStrategy: MatchmakingStrategy): void {
    this.matchmakingStrategy = matchmakingStrategy
  }

  public getMatchmakingStrategy(): MatchmakingStrategy {
    return this.matchmakingStrategy
  }

  public addIndividuals(individual: Individual): void {
    this.individuals.push(individual)
  }

  public getIndividuals(): Individual[] {
    return this.individuals
  }
}

export default MatchmakingSystem
