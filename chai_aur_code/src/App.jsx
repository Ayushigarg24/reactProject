import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const decreaseCount = () => {
    if(count > 0){
      setCount(count-1)
    }
  }
  return (
    <>
      
      {/* <h1 className='bg-red-400 p-5 rounded-xl text-black'>Ayushi Gaarg</h1>
      
        <button onClick={() => {setCount(count +1)}}>
          Increase Count
        </button>
       <br/>
        <button onClick={decreaseCount}>
          Decrease Count  
        </button>
        <h2>Count is: {count}</h2> */}


        {/* project bgcolor changer */}
        
    </>
  )
}

export default App
