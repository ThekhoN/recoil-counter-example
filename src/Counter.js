import React from 'react'
import CounterDisplay from './CounterDisplay'
import { useRecoilState, useRecoilValue } from 'recoil'
import { counter } from './atoms'
import { countType } from './selectors'

const Counter = () => {
  const [count, setCount] = useRecoilState(counter)
  /* this is throwing error - should be fix in latest react */
  const countTypeValue = useRecoilValue(countType)

  return (
    <React.Fragment>
      <CounterDisplay />
      <br />
      <br />
      <h3>Count Type: {countTypeValue}</h3>
      <div className="flex">
        <br />
        <button
          onClick={() => {
            const updateCountValue = count - 1
            setCount(updateCountValue)
          }}
        >
          -
        </button>
        <h2>{count}</h2>
        <button
          onClick={() => {
            const updateCountValue = count + 1
            setCount(updateCountValue)
          }}
        >
          +
        </button>
      </div>
      <br />
      <br />
    </React.Fragment>
  )
}

export default Counter
