let addTodoButton = document.querySelector(".add-todo");
let toDoInput = document.querySelector(".todo-input");
let todolist = document.querySelector(".todo-list-container");
toDoInput.addEventListener("keypress", function(e){

    if(e.key=="Enter")
    {
        addtodo();
    }

});

addTodoButton.addEventListener("click", function(){
    addtodo();
});




function addtodo() {

    let todoInputValue = toDoInput.value;
    if (todoInputValue) {

        appendToDo(todoInputValue);
        toDoInput.value = "";

    }

}


function appendToDo(todo){

    let todoitemdiv= document.createElement("div");
    todoitemdiv.classList.add("todo-item");

    let pTag = document.createElement("p");
    pTag.classList.add("todo");
    pTag.textContent=todo;

    let deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-todo");
    deleteButton.textContent="Delete";
    deleteButton.addEventListener("click", deleteTodo);

    todoitemdiv.append(pTag);
    todoitemdiv.append(deleteButton);
    todolist.append(todoitemdiv);


}

function deleteTodo(e){
e.target.parentNode.remove();
}