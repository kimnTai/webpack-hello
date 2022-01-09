import renderTodo from "./renderTodo";

/**新增 */
export default function addTodo(todoData: ITodoData[]): void {
  const input = document.querySelector(".card input") as HTMLInputElement;
  const addButton = document.querySelector(".btn_add") as HTMLButtonElement;
  addButton.addEventListener("click", () => {
    addEvent(todoData, input);
  });
  input.addEventListener("keyup", (event) => {
    if (event.key == "Enter") {
      addEvent(todoData, input);
    }
  });
}

function addEvent(todoData: ITodoData[], input: HTMLInputElement): void {
  if (input.value.trim() != "") {
    const newTodoData: ITodoData = {
      id: new Date().getTime(),
      text: input.value,
      checked: "",
    };
    todoData.push(newTodoData);
    renderTodo(todoData);
    input.value = "";
  }
}
