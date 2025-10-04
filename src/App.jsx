import { useState } from 'react'

import './App.css'
import Nav from './component/dasyNav/Nav'
import Navber from './component/dasyNav/Navber/Navber'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <header>
        <Navber></Navber>
        <Nav></Nav>
      </header>

      <main>

      </main>
  
      
    
    </>
  )
}

export default App
