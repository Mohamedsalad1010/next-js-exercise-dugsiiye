"use server";

import { revalidatePath } from "next/cache";
import { deleteTodo } from "../lib/todo";

export async function DeleteTodoAction(
  prevState: any,
  id: string
) {
  if (!id) {
    return { error: "ID is required" };
  }

  const success = await deleteTodo(id);

  if (!success) {
    return { error: "Failed to delete todo" };
  }

  revalidatePath("/");

  return { error: "" };
}