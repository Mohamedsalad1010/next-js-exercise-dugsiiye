"use client"

import Link from 'next/link'
import { CreateAction } from '../actions/createTodo'
import { useActionState } from 'react'




const NewTodo = () => {
    const inial = {
        error: ""
    }

    const [state , formAction] = useActionState(CreateAction , inial)
  return (
      <main className="max-w-2xl mx-auto mt-10 p-6">

            <div className="bg-white rounded-lg shadow-md p-6">

                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-2xl font-bold text-gray-800">Add New Todo</h1>
                    <Link
                        href="/"
                        className="text-rose-600 hover:text-rose-800 transition-colors"
                    >
                        ← Back to Todos
                    </Link>
                </div>
{/* form action */}
                <form action={formAction}>
                    <div>
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                            Todo Title
                        </label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            placeholder="Enter your todo..."
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            required
                            maxLength={200}
                            autoFocus
                        />
                        <p className="text-xs text-gray-500 mt-1">Maximum 200 characters</p>
                       
                    </div>

                {/* Priority */}
                    <div>
  <label
    htmlFor="priority"
    className="block text-sm font-medium text-gray-700 mb-2"
  >
    Priority
  </label>

  <select
    id="priority"
    name="priority"
    defaultValue="medium"
    className="w-full px-3 py-2 border border-gray-300 rounded-md"
  >
    <option value="low">Low</option>
    <option value="medium">Medium</option>
    <option value="high">High</option>
  </select>
</div>

                    <div className="flex gap-3">
                        <button
                            type="submit"
                            className="flex-1 bg-rose-600 text-white py-2 px-4 rounded-md hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-500 transition-colors"
                        >
                            Create Todo
                        </button>

                        <Link
                            href="/"
                            className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-colors"
                        >
                            Cancel
                        </Link>

                    </div>

                </form>
 { state.error && (
    <p className='text-rose-600 text-sm bg-rose-50 p-2 rounded mt-4'>{state.error}</p>
 )}

            </div>

        </main>
  )
}

export default NewTodo
