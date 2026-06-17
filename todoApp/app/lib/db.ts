 import {MongoClient , Db , Collection } from 'mongodb'

 const uri = process.env.MONGODB_URI;

//  check if not exit uri
if(!uri) {
    throw new Error('mondb uri is not defined.')
}

let client = new MongoClient(uri);
let db: Db;

// connecting to database 

 export async function connectToDateBbse() {
   if(!db) {
    
    await client.connect()
    db = client.db('todo-app')
   }
    return { client , db}
    
}

// geting data 
export async function getTodoCollection(): Promise<Collection> {
     if(!db) {
  const  {db : database} =  await connectToDateBbse();
  return database.collection('todos')
     }

     return db.collection('todos')
}