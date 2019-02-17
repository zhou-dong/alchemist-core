import { IStack } from "./stack";

export default class <P extends any> implements IStack<P> {
    private table: HTMLTableElement;

    constructor(parent: HTMLElement) {
        this.table = document.createElement("TABLE") as HTMLTableElement;
        parent.appendChild(this.table);
    }

    push(payload: P): void {
        this.table.insertRow(0).insertCell(0).innerHTML = payload.toString();
    }

    peek(): P {
        return JSON.parse(this.table.rows[0].cells[0].innerHTML);
    }

    pop(): P {
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
