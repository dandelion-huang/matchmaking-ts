import MatchmakingStrategy from './MatchmakingStrategy'
import Individual from '../System/Individual'

class DistanceBasedMatchmakingStrategy implements MatchmakingStrategy {
  public sortMatchmaking(individuals: Individual[], i: Individual): Individual[] {
    const newIndividuals = individuals.filter((individual) => individual !== i)
    const sortedIndividuals = newIndividuals.sort((a, b) => {
      const aDiffX = a.getCoord().getX() - i.getCoord().getX()
      const aDiffY = a.getCoord().getY() - i.getCoord().getY()
      const aDist = Math.sqrt(Math.pow(aDiffX, 2) + Math.pow(aDiffY, 2))
      const bDiffX = b.getCoord().getX() - i.getCoord().getX()
      const bDiffY = b.getCoord().getY() - i.getCoord().getY()
      const bDist = Math.sqrt(Math.pow(bDiffX, 2) + Math.pow(bDiffY, 2))
      if (aDist === bDist) {
        return a.getId() - b.getId()
      }
      return aDist - bDist
    })
    return sortedIndividuals
  }
}

export default DistanceBasedMatchmakingStrategy
