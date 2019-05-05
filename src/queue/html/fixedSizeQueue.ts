import { IQueueWithDeleteLast } from "../queue";
import { createHTMLTable } from "../../commons/helpers/htmlHelper"

export default class <T extends any> implements IQueue<T> {
    private readonly table: HTMLTableElement;
    private readonly capacity: number;
    private _size: number;

    constructor(parent: HTMLElement, capacity: number, id?: string) {
        if (capacity < 1) {
            throw new Error("capacity must > 0 at fixed size queue");
        }
        this.table = createHTMLTable(parent, id)
        this.capacity = capacity;
        this._size = 0;
        for (let i = 0; i < capacity; i++) {
            this.table.insertRow(0).insertCell(0).innerHTML = "";
        }
    }

    offer(payload: T): void {
        if (this._size === this.capacity) {
            throw new Error("queue is full");
        }
        this.table.deleteRow(this.capacity - 1);
        this.table.insertRow(this._size++).insertCell(0).innerHTML = payload.toString();
    }

    peek(): any {
        if (this.isEmpty()) {
            throw new Error("queue is empty");
        } else {
            return this.table.rows[0].cells[0].innerHTML;
        }
    }

    poll(): any {
        if (this.isEmpty()) {
            throw new Error("queue is empty");
        } else {
            const result = this.peek();
            this.table.insertRow(this.capacity).insertCell(0).innerHTML = "";
            this.table.deleteRow(0);
            this._size--;
            return result;
        }
    }

    size(): number {
        return this._size;
    }

    isEmpty(): boolean {
        return this._size === 0;
    }

    deleteLast(): any {
        if (this.isEmpty()) {
            throw new Error("queue is empty");
        } else {
            const lastRowIndex = this.size() - 1;
            const result = this.table.rows[lastRowIndex].cells[0].innerHTML;
            this.table.rows[lastRowIndex].cells[0].innerHTML = "";
            return result;
        }
    }
}
