import React from 'react'
import { useResetCount } from './atoms'

const CountResetor = () => {
  const resetCount = useResetCount()

  return (
    <div>
      <h2>Count Resetor</h2>
      <button onClick={resetCount}>Reset Count</button>
    </div>
  )
}

export default CountResetor
