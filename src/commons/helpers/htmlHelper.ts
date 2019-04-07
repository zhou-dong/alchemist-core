export const createHTMLTable = (parent: HTMLElement, id?: string): HTMLTableElement => {
    const table = document.createElement("TABLE") as HTMLTableElement;
    if (id) {
        table.setAttribute("id", id);
    }
    parent.appendChild(table);
    return table;
}
