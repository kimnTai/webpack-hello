import removeAndCheckbox from "./components/removeAndCheckbox";
import removeCompleted from "./components/removeCompleted";
import changeTab from "./components/changeTab";
import addTodo from "./components/addTodo";
import "./style.scss";

function init(): void {
  const todoData: ITodoData[] = [];
  addTodo(todoData);
  changeTab(todoData);
  removeCompleted(todoData);
  removeAndCheckbox(todoData);
}
init();
