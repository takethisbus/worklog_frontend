import { useNote } from "@/entities/notes/models/notes";
import { TodoDate } from "@/entities/todos/models/todoDate";
import { useTodo } from "@/entities/todos/models/todos";

export type ViewModel = ReturnType<typeof useViewModel>;

const useTodoWithNote = () => {
  const { todos } = useTodo();
  const { notes } = useNote();

  const todoController = new TodoDate([...notes, ...todos]);

  const sortedData = todoController.sortDataByDate("내림차순");
  return { todosNotes: todoController.groupByCreatedAt(sortedData) };
};

export const useViewModel = () => {
  return {
    ...useTodoWithNote()
  };
};
