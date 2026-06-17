"use server"

import { revalidatePath } from "next/cache"
import { fetchById, updateTodo } from "../lib/todo"
import { redirect } from "next/navigation"

 export async function updateAction(formData:FormData) {
      const id = formData.get('id') as string
      const title = formData.get('title') as string
       const priority =
  formData.get("priority") as
    | "low"
    | "medium"
    | "high";

    
      if(!id || title.trim().length === 0) {
        return 
      }

    //   exist todo
    const existTodo = await fetchById(id)

    if(!existTodo){
        return 
    }

      const success = await updateTodo(id , {title: title.trim() , priority: priority , updatedAt: new Date().toISOString(),} )

      if(!success){
     return  
      }

      revalidatePath('/')
      redirect('/')
 }