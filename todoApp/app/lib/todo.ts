
import { ObjectId } from "mongodb";
import { createTodoInput, todo, updateTodoInput } from "../types/todo";
import { getTodoCollection } from "./db";

// get all collections 
export async function fetchTodo(
  search?: string,
  completed?: string
): Promise<todo[]> {
  try {
    const collection = await getTodoCollection();

    const query: any = {};

    // Search by title
    if (search?.trim()) {
      query.title = {
        $regex: search.trim(),
        $options: "i",
      };
    }

    // Filter by completion status
    if (completed === "true") {
      query.completed = true;
    }

    if (completed === "false") {
      query.completed = false;
    }

    const todos = await collection
      .find(query)
      .sort({ createdAt: -1 })
      .toArray();

    return todos.map((todo) => ({
      _id: todo._id.toString(),
      title: todo.title,
       completed: todo.completed ?? false,
  priority: todo.priority ?? "medium",
      createdAt: todo.createdAt || new Date(),
      updatedAt: todo.updatedAt || new Date(),
    }));
  } catch (error) {
    console.log(`Error fetching ${error}`);
    return [];
  }
}
//  get one collection

export async function fetchById(id: string): Promise<todo | null> {
    try {
          const collection = await getTodoCollection()
      const todo = await collection.findOne({_id: new ObjectId(id)})
    if(!todo) {
        return null
    }
    return {
        _id: todo._id.toString(),
        title: todo.title,
         completed: todo.completed ?? false, 
  priority: todo.priority ?? "medium",
        createdAt: todo.createdAt.toString(),
        updatedAt: todo.updatedAt?.toString()
    }
    } catch (error) {
        console.log("error fetch todo by Id" , error)
        return null
    }

}

// create todo

export async function createTodo(todo:createTodoInput) : Promise<string | null> {
    try {
          const collection = await getTodoCollection()
      const result = await  collection.insertOne(todo)
        return result.insertedId.toString();
    } catch (error) {
        console.log("error create todo" , error)
        return null
    }

}

// update todo

export async function updateTodo(id: string , todo:updateTodoInput) : Promise<boolean> {
try {
    const collection = await getTodoCollection()
    const update = await collection.updateOne({_id: new ObjectId(id)}, {$set:todo})
    return update.modifiedCount > 0
    
} catch (error) {
    console.log("error update todo", error)
    return false
}
}

export async function deleteTodo(id: string ) : Promise<boolean> {
   try {
     const collection = await getTodoCollection()
    const deleteTodo = await  collection.deleteOne({_id: new ObjectId(id)})

    return deleteTodo.deletedCount > 0
   } catch (error) {
    console.log("delete error ", error)
    return false
   }
    
}