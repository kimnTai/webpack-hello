import renderTodo from "./renderTodo";

/**刪除 & 切換 checked 狀態 */
export default function removeAndCheckbox(todoData: ITodoData[]): void {
  const list = document.querySelector(".cart_content > .list") as HTMLElement;
  list.addEventListener("click", (event) => {
    const target = event.target as HTMLElement;
    const id = parseInt(target.closest("li")?.dataset.id as string);
    const clickClass = target.classList.value;
    // 刪除
    if (clickClass == "delete") {
      const index = todoData.findIndex((item) => item.id == id);
      todoData.splice(index, 1);
    } else {
      // 修改 checkbox
      changeCheckbox(todoData, id);
    }
    renderTodo(todoData);
  });
}

/**切換 checked 狀態  */
function changeCheckbox(todoData: ITodoData[], id: number): void {
  todoData.forEach((item, index) => {
    if (item.id == id) {
      if (todoData[index].checked == "checked") {
        todoData[index].checked = "";
      } else {
        todoData[index].checked = "checked";
      }
    }
  });
}
