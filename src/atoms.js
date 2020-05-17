import { atom, useRecoilState } from 'recoil'

export const counter = atom({
  key: 'counter',
  default: 0,
})

export const useResetCount = () => {
  // eslint-disable-next-line
  const [count, setCount] = useRecoilState(counter)
  return function () {
    setCount(0)
  }
}
