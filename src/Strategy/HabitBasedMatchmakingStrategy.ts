import MatchmakingStrategy from './MatchmakingStrategy'
import Individual from '../System/Individual'

class HabiteBasedMatchmakingStrategy implements MatchmakingStrategy {
  public sortMatchmaking(individuals: Individual[], i: Individual): Individual[] {
    const newIndividuals = [...individuals].filter((individual) => individual !== i)
    const sortedIndividuals = newIndividuals.sort((a, b) => {
      const aCommonHabits = a.getHabits().filter((h) => i.getHabits().includes(h))
      const bCommonHabits = b.getHabits().filter((h) => i.getHabits().includes(h))
      if (aCommonHabits.length === bCommonHabits.length) {
        return a.getId() - b.getId()
      }
      return bCommonHabits.length - aCommonHabits.length
    })
    return sortedIndividuals
  }
}

export default HabiteBasedMatchmakingStrategy
