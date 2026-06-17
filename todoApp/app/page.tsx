import Link from "next/link";
import { fetchTodo } from "./lib/todo";
import { DeleteTodoAction } from "./actions/deleteTodo";
import { toggleTodoAction } from "./actions/toggle";
import DeleteButton from "./components/DeleteButton";
import { timeAgo } from "./lib/TimesUp";
const page = async ({
  searchParams,
}: {
  searchParams: Promise<{
    search?: string;
    completed?: string;
  }>;
}) => {
  const params = await searchParams;

  const todos = await fetchTodo( params.search , params.completed);


  const time = new Date().toLocaleTimeString();

  
  return (
    <main className="max-w-4xl mx-auto mt-10 p-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">📝 Todo App</h1>
        <p className="text-sm text-gray-500 mb-4">Last updated: {time}</p>
        <div className="mb-6">
          <Link
            href="/new"
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            ➕ Add New Todo
          </Link>
        </div>
        <form className="mb-6 flex gap-2">
  <input
    type="text"
    name="search"
    placeholder="Search todos..."
    className="flex-1 border rounded-md px-3 py-2"
  />

  <select
    name="completed"
    className="border rounded-md px-3 py-2"
  >
    <option value="">All</option>
    <option value="true">Completed</option>
    <option value="false">Pending</option>
  </select>

  <button
    type="submit"
    className="bg-blue-600 text-white px-4 py-2 rounded-md"
  >
    Search
  </button>
</form>

        {todos.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-500 text-lg">No todos yet!</p>
            <p className="text-gray-400 text-sm mt-2">
              Create your first todo to get started.
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {todos.map((todo) => (
              

              <div
                key={todo._id}
                className="flex items-center justify-between bg-gray-50 border border-gray-200 rounded-lg p-4"
              >
                <div className="flex items-center space-x-3">
                  <form action={toggleTodoAction.bind(null, todo._id)}>
                    <button
                      type="submit"
                      className="text-2xl hover:scale-110 transition-transform"
                      title={
                        todo.completed
                          ? "Mark as incomplete"
                          : "Mark as complete"
                      }
                    >
                      {todo.completed ? "✅" : "⬜"}
                    </button>
                  </form>

                  <div className="flex flex-col flex-1">
                    <span
                      className={`text-lg ${
                        todo.completed
                          ? "line-through text-gray-500"
                          : "text-gray-800"
                      }`}
                    >
                      {todo.title}
                    </span>
<span className="text-xs text-gray-400">
  created {timeAgo(todo.createdAt)}
</span>
<span className="text-xs text-gray-400">
  updated {timeAgo(todo.updatedAt)}
</span>
                    <span
                      className={`mt-1 inline-block w-fit px-2 py-1 text-xs rounded-full ${
                        todo.priority === "high"
                          ? "bg-red-100 text-red-700"
                          : todo.priority === "medium"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-green-100 text-green-700"
                      }`}
                    >
                      {todo.priority === "high" && "🔴 High"}
                      {todo.priority === "medium" && "🟡 Medium"}
                      {todo.priority === "low" && "🟢 Low"}
                    </span>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Link
                    href={`/edit/${todo._id}`}
                    className="p-2 text-blue-600 hover:bg-blue-100 rounded-md transition-colors"
                    title="Edit todo"
                  >
                    ✏️
                  </Link>

                  <DeleteButton id={todo._id.toString()} />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default page;
