// rollup.config.js
import typescript from '@rollup/plugin-typescript'

export default {
  input: 'src/main.ts',
  output: {
    file: 'dist/matchmaking.js',
    format: 'commonjs',
    name: 'Matchmaking',
    indent: true,
  },
  plugins: [typescript()],
}
