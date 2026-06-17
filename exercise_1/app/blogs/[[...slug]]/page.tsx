import { NextRequest } from 'next/server'
import React from 'react'

interface getBlogsSlugs  {
    params: Promise< {
        slug: string[]
    }>
}
const Blogs = async ({params}: getBlogsSlugs) => {
    console.log("params" , params)
    
  return (
    <div>
     <p>visits{( await params ).slug.join('/')} </p>
    </div>
  )
}

export default Blogs
