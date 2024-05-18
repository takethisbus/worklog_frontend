import { useDeleteTodo } from "@/entities/todos/models/todos";

export type ViewModel = {
  id: string;
  model: ReturnType<typeof useViewModel>;
};

export const useViewModel = () => {
  const { mutate } = useDeleteTodo();
  return {
    removeTodo: (id: string) => mutate(id)
  };
};
