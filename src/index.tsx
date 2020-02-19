import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Confirm } from './confirm'

const App: React.SFC = () => {
  return <>
      <h1>My React and TypeScript App!</h1>
      <Confirm />
    </>
}

ReactDOM.render(<App />, document.getElementById('root') as HTMLElement)
