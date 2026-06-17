"use server"

  type userType = {
    message: string,
    error: string
  }
export async function greetUser(state :userType , formData: FormData) : Promise<userType> {
      const fistName = formData.get('firstName')?.toString()
      const lastName = formData.get('lastName')
     return {message: `Hello ${fistName}  ${lastName}` , error: ''}
    }