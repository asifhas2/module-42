import { Suspense, useState } from 'react'

import './App.css'
import Nav from './component/dasyNav/Nav'
import Navber from './component/dasyNav/Navber/Navber'
import PricingOption from './component/dasyNav/PricingOption/PricingOption'
import ResultChart from './component/ResultChart/ResultChart'

const pricingPromis = fetch('pricingData.json').then(res => res.json())

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <header>
        <Navber></Navber>
        {/* <Nav></Nav> */}
      </header>

      <main>
          <Suspense fallback={<span class="loading loading-spinner loading-md"></span>

}>
              <PricingOption pricingPromis={pricingPromis}></PricingOption>
          </Suspense>

          <ResultChart></ResultChart>

          
      </main>
  
      
    
    </>
  )
}

export default App
