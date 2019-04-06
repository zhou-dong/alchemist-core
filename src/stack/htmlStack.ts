import { IStack } from "./stack";
import SimpleTable from "../commons/simpleTable";

export default class <T extends any> extends SimpleTable implements IStack<T> {
    constructor(parent: HTMLElement, id?: string) {
        super(parent, id)
    }

    push(payload: T): void {
        this.table.insertRow(0).insertCell(0).innerHTML = payload.toString();
    }

    peek(): any {
        return this.table.rows[0].cells[0].innerHTML;
    }

    pop(): any {
        const result = this.peek();
        this.table.deleteRow(0);
        return result;
    }
}
