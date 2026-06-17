"use client"
import React, { useState } from 'react'
const Counter = () => {
  const [count , setCount] = useState(0)
   return (
     <div>
       <p>count: {count}</p>
       <button className="bg-green-500 text-white p-1 rounded cursor-crosshair" onClick={() => setCount(count + 1)}>increase</button>
     </div>
   )
}

export default Counter
