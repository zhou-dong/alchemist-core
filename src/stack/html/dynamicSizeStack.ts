import { IStack } from "../stack";
import { createHTMLTable } from "../../commons/helpers/htmlHelper"

export default class <T extends any> implements IStack<T> {
    private readonly table: HTMLTableElement;

    constructor(parent: HTMLElement, id?: string) {
        this.table = createHTMLTable(parent, id)
    }

    push(payload: T): void {
        this.table.insertRow(0).insertCell(0).innerHTML = payload.toString();
    }

    peek(): any {
        if (this.isEmpty()) {
            throw new Error("stack is empty");
        }
        return this.table.rows[0].cells[0].innerHTML;
    }

    pop(): any {
        if (this.isEmpty()) {
            throw new Error("stack is empty");
        }
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
