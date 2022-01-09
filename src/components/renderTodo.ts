/**渲染 */
export default function renderTodo(
  todoData: ITodoData[],
  completed?: string
): void {
  const list = document.querySelector(".cart_content > .list") as HTMLElement;
  let str = "";
  todoData.forEach((item) => {
    str += todoView(item);
  });
  list.innerHTML = str;
  todoLength(todoData, completed);
}

function todoView({ id, text, checked }: ITodoData): string {
  return `<li data-id="${id}">
     <label class="checkbox" for="">
        <input type="checkbox" ${checked}/>
        <span>${text}</span>
     </label>
     <a href="#" class="delete"></a>
  </li>`;
}

function todoLength(todoData: ITodoData[], completed?: string): void {
  const footer = document.querySelector(".list_footer > p") as HTMLElement;
  if (completed) {
    // 如果是已完成數量
    const filter = todoData.filter((item) => item.checked == "checked");
    footer.innerHTML = `${filter.length} 個已完成項目`;
  } else {
    // 待完成數量
    const filter = todoData.filter((item) => item.checked != "checked");
    footer.innerHTML = `${filter.length} 個待完成項目`;
  }
}
