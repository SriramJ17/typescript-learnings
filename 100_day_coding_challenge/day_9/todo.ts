class Todo {
    title: string;
    isCompleted: boolean=false;

    constructor(title:string) {
        this.title=title
    }

    complete(): void {
        this.isCompleted = true;
    }

    getStatus(): string {
        return this.isCompleted ? "Completed" : "Pending";
    }
}

const todo = new Todo("Learn TypeScript");

console.log(todo.getStatus()); 
todo.complete();
console.log(todo.getStatus());