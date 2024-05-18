import { TodoList as Component } from "./ui";
import { useViewModel } from "./model";

export const TodoList = () => Component(useViewModel());
