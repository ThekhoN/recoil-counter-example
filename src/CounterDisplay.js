import React from 'react'
import { useRecoilValue } from 'recoil'
import { counter } from './atoms'

// reads value from state using useRecoilValue
const CounterDisplay = () => {
  const count = useRecoilValue(counter)

  return <h1>Count: {count}</h1>
}

export default CounterDisplay
