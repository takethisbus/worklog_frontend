import { useDeleteNote } from "@/entities/notes/models/notes";

export type ViewModel = {
  id: string;
  model: ReturnType<typeof useViewModel>;
};

export const useViewModel = () => {
  const { mutate: noteMutate } = useDeleteNote();
  return {
    removeTodo: (id: string) => {
      noteMutate(id);
    }
  };
};
