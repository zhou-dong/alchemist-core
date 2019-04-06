export default class {
    protected readonly table: HTMLTableElement;

    constructor(parent: HTMLElement, id?: string) {
        this.table = document.createElement("TABLE") as HTMLTableElement;
        if (id) {
            this.table.setAttribute("id", id);
        }
        parent.appendChild(this.table);
    }

    size(): number {
        return this.table.rows.length;
    }

    isEmpty(): boolean {
        return this.table.rows.length === 0;
    }
}
