import IStack from "./stack.interface";

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
            const content = this.table.firstChild.firstChild
            console.log(content);
        }
        return undefined;
    }

    pop(): T | undefined {
        if (this.table.firstChild) {
            console.log("before", this.table.childElementCount)
            this.table.deleteRow(0);
            console.log("after", this.table.childElementCount)
        }
        return undefined;
    }

    size(): number {
        return this.table.childElementCount;
    }

    isEmpty(): boolean {
        return this.table.childElementCount === 0
    }

    get element() {
        return this.table;
    }
}
