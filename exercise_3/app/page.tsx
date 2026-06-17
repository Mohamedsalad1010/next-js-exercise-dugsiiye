"use client"
import { logIn } from "./actions/form"
import { useActionState } from "react"
import { greetUser } from "./actions/greet_user"
export default function Home() {

    const inialMessage = {
        message: '',
        error: "",
        success: false
    }




    const [state , formAction] = useActionState(logIn , inialMessage)
    const [user , userAction] = useActionState(greetUser , inialMessage)
return  (
 <div className="flex flex-col justify-around  mt-6 px-20 ">
    <h2>exercise_3</h2>
  <h3 className="text-2xl font-black">login </h3>

  {/* form */}
   <form action={formAction} className="flex flex-col mt-6 ">
    <input type="text" name="email"  placeholder=" Enter your email" className="border border-rose-600 p-2 rounded outline-none  mb-4" />
    <input type="password" name="password" placeholder="Enter your password." className="border border-rose-600 p-2 rounded outline-none " />
    <button type="submit" className=" bg-pink-600 text-white mt-6  cursor-pointer border border-rose-600 p-2 rounded outline-none">log In</button>
    <div>
{state.message && (
        <p className="text-blue-500">{state.message} {state.success ? ` status: ${state.success}` : 'no access'}</p>
      )}

      {state.error &&(
        <p className="text-red-500">{state.error}</p>
      )}
</div>
   </form>


{/* user greet  */}
<div className="mt-10">
  <h2 className="text-2xl font-black">user full name</h2>
<form action={userAction}>
    <input type="text" name="firstName" placeholder="Enter your first name" className="border border-rose-600 p-2 rounded outline-none  mb-4" />
  <input type="text" name="lastName" placeholder="Enter your last name"  className="border border-rose-600 p-2 rounded outline-none  mb-4 mx-3" />
  <button type="submit"  className=" bg-pink-600 text-white mt-6  cursor-pointer border border-rose-600 p-2 rounded outline-none">apply</button>
</form>
{user.message}
 
</div>
 </div>
)
}
