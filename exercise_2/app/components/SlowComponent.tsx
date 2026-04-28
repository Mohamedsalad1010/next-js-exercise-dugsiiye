import React from 'react'

const SlowComponent = async () => {
 await new Promise((response) => setTimeout(response , 10000))
  return (
    <div>
      <p>data will fetching after 10 seconds.</p>
    </div>
  )
}

export default SlowComponent
