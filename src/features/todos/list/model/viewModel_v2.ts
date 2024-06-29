import { TodoDate } from "@/entities/todos/models/todoDate";
import { useTodo } from "@/entities/todos/models/todos";

export type ViewModel = ReturnType<typeof useViewModelV2>;

const useTodosByCreatedAt = () => {
  const { todos } = useTodo();
  const todoController = new TodoDate(todos);

  const sortedData = todoController.sortDataByDate("내림차순");

  return { todos: todoController.groupByCreatedAt(sortedData) };
};

export const useViewModelV2 = () => {
  return {
    ...useTodosByCreatedAt()
  };
};
