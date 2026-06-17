 "use server"

 type logInState = {
    message: string,
    error: string,
    success?: boolean
 }
 export  async function logIn ( state: logInState, formData: FormData) : Promise<logInState> {
 const email = formData.get('email')?.toString()
 const password = formData.get('password')?.toString()

   if (!email || !password) {
        return { message: "", error: "Email and password are required", success: false }
    }

    if(password.length <6) {
return   { message: "", error: "password must be greater then 6 characters.", success: false }
 
    }

 return {message: `loggedIn ${email} and ${password}` , error: "" , success: true}


 }