import { IQueue } from "./queue";

export default class <T extends any> implements IQueue<T> {
    private readonly table: HTMLTableElement;

    constructor(parent: HTMLElement, id?: string) {
        this.table = document.createElement("TABLE") as HTMLTableElement;
        if (id) {
            this.table.setAttribute("id", id);
        }
        parent.appendChild(this.table);
    }

    offer(payload: T): void {
        this.table.insertRow(this.size()).insertCell(0).innerHTML = payload.toString();
    }

    peek(): any {
        return this.table.rows[0].cells[0].innerHTML;
    }

    poll(): any {
        const result = this.peek();
        this.table.deleteRow(0);
        return result;
    }

    size(): number {
        return this.table.rows.length;
    }

    isEmpty(): boolean {
        return this.table.rows.length === 0;
    }
}
