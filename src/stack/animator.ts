import { IStack } from "./stack";

export default class <T> implements IStack<T> {

    private table: HTMLTableElement;

    constructor(public speed?: number) {
        this.table = document.createElement("table");
    }

    push(item: T): T {
        const row: HTMLTableRowElement = this.table.insertRow(0);
        const cell: HTMLTableCellElement = row.insertCell(0);
        cell.innerHTML = item + "";
        return item;
    }

    peek(): T | undefined {
        if (this.table.firstChild) {
            // TODO update styles 
        }
        return undefined;
    }

    pop(): T | undefined {
        if (this.table.firstChild) {
            this.table.deleteRow(0);
        }
        return undefined;
    }

    size(): number {
        throw new Error("Method not implemented.");
    }

    isEmpty(): boolean {
        throw new Error("Method not implemented.");
    }

    get element() {
        return this.table;
    }
}
