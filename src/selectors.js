import { selector } from 'recoil'
import { counter } from './atoms'

// derive value from state
export const countType = selector({
  key: 'countType',
  get: ({ get }) => {
    const count = get(counter)
    return count % 2 === 0 ? 'EVEN' : 'ODD'
  },
})
