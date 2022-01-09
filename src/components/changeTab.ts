import renderTodo from "./renderTodo";

/**Tab 改變狀態 */
export default function changeTab(todoData: ITodoData[]): void {
  const tab = document.querySelector(".card_list > .tab") as HTMLElement;
  tab.addEventListener("click", (event) => {
    const target = event.target as HTMLElement;
    const tabData = target.dataset.tab as string;
    // 清除所有 active
    for (let i = 0; i < tab.children.length; i++) {
      const item = tab.children.item(i) as HTMLElement;
      item.classList.remove("active");
    }
    // 根據點擊新增 active
    target.classList.add("active");
    switch (tabData) {
      case "全部":
        renderTodo(todoData);
        break;
      case "待完成":
        const undone = todoData.filter((item) => item.checked != "checked");
        renderTodo(undone);
        break;
      case "已完成":
        const completed = todoData.filter((item) => item.checked == "checked");
        renderTodo(completed, "已完成");
        break;
    }
  });
}
