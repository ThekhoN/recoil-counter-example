import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { RecoilRoot } from 'recoil'
import Counter from './Counter'
import CountResetor from './CountResetor'

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <h2>Test Recoil(state management lib.) - Counter Example</h2>
      <Counter />
      <CountResetor />
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
)
