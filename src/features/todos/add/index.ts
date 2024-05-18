import { useViewModelForm } from "./model";
import { TodoForm as Component } from "./ui/form";

export const TodoForm = () => Component(useViewModelForm());
