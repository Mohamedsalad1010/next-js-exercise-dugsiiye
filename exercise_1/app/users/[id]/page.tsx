import React from 'react'

interface User {
    params : Promise<{
        id: string
    }>
}
const user   =  async({params}: User) => {
 const {id} = await  params
  return (
    <div>
      <h4>Welicome:  { id} </h4>
    </div>
  )
}

export default user
