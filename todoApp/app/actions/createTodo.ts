"use server"

import { revalidatePath } from "next/cache"
import { createTodo } from "../lib/todo"
import { redirect } from "next/navigation"

 type TodoState = {
  error: string
}
 export async function CreateAction( satate: TodoState , formData:FormData) {
    const title =  formData.get('title' ) as string
    const priority =
  formData.get("priority") as
    | "low"
    | "medium"
    | "high";

    if(!title|| title.trim().length === 0){
   
  return{
      error: "title is required"
  }
  
    }

    const todoId = await createTodo({title : title.trim() , createdAt: new Date().toISOString() , updatedAt: new Date().toISOString(), priority: priority, })
   
  if (!todoId) {
   return {
      error: "failed to create todo"
   }
  }
    revalidatePath('/')
    redirect('/')
 }