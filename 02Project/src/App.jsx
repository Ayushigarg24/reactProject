import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("black")
  const colorArray =["red","blue","green","yellow","pink","orange"]

  return (
    <div className=' h-screen flex flex-col items-center' 
    style={{background:color}}>
      <h1 className='text-white text-[48px]  m-10'>Bg Color Changer</h1>
<div className=' bg-gray-700 p-4 fixed bottom-10 flex gap-3 m-10'>
  {colorArray.map((color,index)=>(
    <button 
    key ={index}
    onClick= {()=> setColor(color)}
    style={{background: color}} 
    className="outline-none px-4 py-1 rounded-full text-white shadow-lg">{color.toUpperCase()}</button>
  ))
  }
  {/* <button 
  onClick= {()=> setColor("red")}
  style={{background: "red"}} 
  className="outline-none px-4 py-1 rounded-full text-white shadow-lg">Red</button>
       <button
          onClick={() => setColor("green")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "green"}}
          >Green</button>
          <button
          onClick={() => setColor("blue")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "blue"}}
          >Blue</button>
          <button
          onClick={() => setColor("orange")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "orange"}}
          >Orange</button>
          <button
          onClick={() => setColor("purple")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "purple"}}
          >Purple</button>
          <button
          onClick={() => setColor("pink")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "pink"}}
          >Pink</button> */}
</div>
    </div>
  )
}

export default App
