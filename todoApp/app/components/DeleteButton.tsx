"use client";

import { useActionState } from "react";
import { DeleteTodoAction } from "@/app/actions/deleteTodo";

const initialState = {
  error: "",
};

export default function DeleteButton({ id }: { id: string }) {
  const [state, formAction] = useActionState(
    (prevState: any) => DeleteTodoAction(prevState, id),
    initialState
  );

  return (
    <>
      <form action={formAction}>
        <button
          type="submit"
          className="p-2 text-red-600 hover:bg-red-100 rounded-md"
        >
          🗑️
        </button>
      </form>

      {state.error && (
        <p className="text-red-500 text-xs">
          {state.error}
        </p>
      )}
    </>
  );
}