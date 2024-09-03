class Todo {
    id: number;
    text: string;

    constructor(todoText: string){
        this.text = todoText;
        this.id = Math.random()*10;
    }
}

export default Todo;