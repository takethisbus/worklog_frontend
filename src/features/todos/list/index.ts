import { TodoList as Component } from "./ui/v1";
import { TodoByDate as ComponentDate } from "./ui/v2";
import { useViewModelV1 } from "./model/viewModel_v1";
import { useViewModelV2 } from "./model/viewModel_v2";

export const TodoList = () => Component(useViewModelV1());
export const TodoByDate = () => ComponentDate(useViewModelV2());
