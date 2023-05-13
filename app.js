const Matchmaking = require('./dist/matchmaking.js')

const {
  MatchmakingSystem,
  Coord,
  Reverse,
  DistanceBasedMatchmakingStrategy,
  HabitBasedMatchmakingStrategy,
  Individual,
} = Matchmaking

const system = new MatchmakingSystem()

const dandelion = new Individual(
  'Dandelion',
  'MALE',
  30,
  'Hi I am Dandelion. I am a F2E. Love coding, workout, and reading. I am a big fan of React and Qwik. I am also a big fan of TypeScript.',
  ['coding', 'workout', 'reading'],
  new Coord(121.5598, 25.09108),
)
const msCutie = new Individual(
  'Ms.Cutie',
  'FEMALE',
  24,
  'Ms.Cutie. Love u.',
  ['coding', 'dancing', 'reading'],
  new Coord(120.3897, 23.75585),
)
const mrDizzy = new Individual(
  'Mr.Dizzy',
  'MALE',
  34,
  'I am Mr.Dizzy. I like sleeping and daydreaming.',
  ['sleeping', 'daydreaming'],
  new Coord(121.6739, 24.91571),
)

dandelion.signIn(system)
msCutie.signIn(system)
mrDizzy.signIn(system)

// distance based matchmaking
console.log('=== distance-based matchmaking ===')
system.setMatchmakingStrategy(new DistanceBasedMatchmakingStrategy())
system.match()

// habit based matchmaking
console.log('=== habit-based matchmaking ===')
system.setMatchmakingStrategy(new HabitBasedMatchmakingStrategy())
system.match()

// reverse distance based matchmaking
console.log('=== reversed distance-based matchmaking ===')
system.setMatchmakingStrategy(new Reverse(new DistanceBasedMatchmakingStrategy()))
system.match()

// reverse habit based matchmaking
console.log('=== reversed habit-based matchmaking ===')
system.setMatchmakingStrategy(new Reverse(new HabitBasedMatchmakingStrategy()))
system.match()
