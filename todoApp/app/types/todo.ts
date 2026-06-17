 export type Priority = "low" | "medium" | "high";
 
 export type todo ={
 _id : string,
 title: string,
 completed: boolean,
 createdAt: string,
 updatedAt: string,
  priority: Priority
 }


 export type createTodoInput = {
    title: string,
    completed?:  boolean,
   createdAt?: string,
 updatedAt?: string,
  priority?: Priority
 }

 export type updateTodoInput = {
    title?: string,
    completed?:  boolean,
     priority?: Priority,
      updatedAt?: string
 }