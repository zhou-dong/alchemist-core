import { IStack } from "../stack";
import { createHTMLTable } from "../../commons/helpers/htmlHelper"

export default class <T extends any> implements IStack<T> {
    private readonly table: HTMLTableElement;
    private readonly capacity: number;
    private _size: number;

    constructor(parent: HTMLElement, capacity: number, id?: string) {
        if (capacity < 1) {
            throw new Error("capacity must > 0 at fixed size stack");
        }
        this.table = createHTMLTable(parent, id)
        this.capacity = capacity;
        this._size = 0;
        for (let i = 0; i < capacity; i++) {
            this.table.insertRow(0).insertCell(0).innerHTML = "";
        }
    }

    push(payload: T): void {
        if (this._size === this.capacity) {
            throw new Error("stack is full");
        }
        this.table.deleteRow(this.capacity - 1);
        this.table.insertRow(0).insertCell(0).innerHTML = payload.toString();
        this._size++;
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
        this.table.insertRow(this.capacity).insertCell(0).innerHTML = "";
        this.table.deleteRow(0);
        this._size--;
        return result;
    }

    size(): number {
        return this._size;
    }

    isEmpty(): boolean {
        return this._size === 0;
    }
}
