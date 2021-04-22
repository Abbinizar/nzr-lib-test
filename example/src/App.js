import React from 'react'

import { ExampleComponent, ButtonComponent } from 'react-lib-test'
import 'react-lib-test/dist/index.css'

const App = () => {
  return (
    <div>
      <ExampleComponent text='Create React Library Example 😄' />
      <ButtonComponent label='save' />
    </div>
  )
}

export default App
