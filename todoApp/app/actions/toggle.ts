"use server"

import { revalidatePath } from "next/cache";
import { fetchById, updateTodo } from "../lib/todo";

 export async function toggleTodoAction(id:string) {
    const todo = await fetchById(id)
    if(!todo){
        return 
    }

    const success = await updateTodo(id , {completed: !todo.completed ,  updatedAt: new Date().toISOString(),} )

    if(!success){
        return 
    }

    revalidatePath('/')
    
 }