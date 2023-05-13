import MatchmakingStrategy from './MatchmakingStrategy'
import Individual from '../System/Individual'

class Reverse implements MatchmakingStrategy {
  private matchmakingStrategy: MatchmakingStrategy

  public constructor(matchmakingStrategy: MatchmakingStrategy) {
    this.setMatchmakingStrategy(matchmakingStrategy)
  }

  public sortMatchmaking(individuals: Individual[], i: Individual): Individual[] {
    return this.matchmakingStrategy.sortMatchmaking(individuals, i).reverse()
  }

  public setMatchmakingStrategy(matchmakingStrategy: MatchmakingStrategy): void {
    this.matchmakingStrategy = matchmakingStrategy
  }

  public getMatchmakingStrategy(): MatchmakingStrategy {
    return this.matchmakingStrategy
  }
}

export default Reverse
