import renderTodo from "./renderTodo";

/**清除已完成 */
export default function removeAll(todoData: ITodoData[]): void {
  const button = document.querySelector(".list_footer") as HTMLElement;
  button.addEventListener("click", () => {
    const filter = todoData.filter((item) => {
      if (item.checked == "") {
        return item;
      }
    });
    todoData.splice(0);
    filter.forEach((item) => {
      todoData.push(item);
    });
    renderTodo(todoData);
  });
}
