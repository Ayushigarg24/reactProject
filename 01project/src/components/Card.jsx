import React from 'react'
// however we can also directly use the properties instead of putting them in {} braces
function Card(props) {
  return (
    <div className="max-w-xs p-6 rounded-md shadow-md bg-black m-4">
        <img
          src="https://images.pexels.com/photos/29421579/pexels-photo-29421579.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
          className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
            {props.data.title} <br/>
            {props.username}
          </span>
          <h2 className="text-xl font-semibold tracking-wide">Lorem ipsum dolor</h2>
        </div>
        <p className="text-gray-300">
          {props.data.descp}
        </p>
      </div>
  )
}

export default Card