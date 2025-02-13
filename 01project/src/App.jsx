import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  const data = [
               {
                 title : "Ayushi",
                 descp: "My name is Ayushi. I am 20 years old. I love myself so much."
               },
               {
                title : "Shubh",
                descp: "My name is Shubh. I am 12 years old. I love playing so much."
              },
              ]

  return (
    <div className='flex flex-col justify-center items-center'>
    <h1 className='bg-red-500 text-black p-4 rounded-xl m-4'>Project 1</h1>
    {data.map((item,index) => (  
        <Card data={item} key={index}/>
      ))}
   
    </div>
    
  )
}

export default App
