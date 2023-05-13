import Individual from '../System/Individual'

interface MatchmakingStrategy {
  sortMatchmaking(Individuals: Individual[], i: Individual): Individual[]
}

export default MatchmakingStrategy
