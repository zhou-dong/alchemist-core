import { IQueueWithDeleteLast } from "../queue";
import { createHTMLTable } from "../../commons/helpers/htmlHelper"

export default class <T extends any> implements IQueueWithDeleteLast<T> {
    private readonly table: HTMLTableElement;

    constructor(parent: HTMLElement, id?: string) {
        this.table = createHTMLTable(parent, id)
    }

    offer(payload: T): void {
        this.table.insertRow(this.size()).insertCell(0).innerHTML = payload.toString();
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
            this.table.deleteRow(0);
            return result;
        }
    }

    size(): number {
        return this.table.rows.length;
    }

    isEmpty(): boolean {
        return this.table.rows.length === 0;
    }

    deleteLast(): any {
        if (this.isEmpty()) {
            throw new Error("queue is empty");
        } else {
            const lastRowIndex = this.size() - 1;
            const result = this.table.rows[lastRowIndex].cells[0].innerHTML;
            this.table.deleteRow(lastRowIndex);
            return result;
        }
    }
}
