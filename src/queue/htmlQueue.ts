import { IQueue } from "./queue";
import SimpleTable from "../commons/simpleTable";

export default class <T extends any> extends SimpleTable implements IQueue<T> {
    constructor(parent: HTMLElement, id?: string) {
        super(parent, id)
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
}
