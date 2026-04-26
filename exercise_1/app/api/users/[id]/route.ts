import { NextRequest, NextResponse } from "next/server"

  interface UserInfo {
    params: Promise<{
        id: string
    }>
  }
 
 export async function GET( req:NextRequest , {params}:UserInfo) {
    const {id} = await params
    console.log("id" , id)
   return  NextResponse.json({
    message: 'userinfo',
    username: `${id}`,
    email: `${id}@gmail.com`
   })
    
 }