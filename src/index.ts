import removeAndCheckbox from "./components/removeAndCheckbox";
import removeCompleted from "./components/removeCompleted";
import changeTab from "./components/changeTab";
import addTodo from "./components/addTodo";
import "./style.scss";
import axios from "axios";

function init(): void {
  const todoData: ITodoData[] = [];
  addTodo(todoData);
  changeTab(todoData);
  removeCompleted(todoData);
  removeAndCheckbox(todoData);
}
init();
axios.get("https://hexschool.github.io/ajaxHomework/data.json").then((res) => {
  console.log("🚀 ~ file: index.ts ~ line 17 ~ axios.get ~ res", res);
  console.log(res.data);
});
