const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";
let toDos = []; //newTodo array

/** save toDos in localstorage */
function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

/** delete todo li */
function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

/** text-decoration */
function doneToDo(){
    document.querySelector("#todo-list li").style.textDecorationLine = "line-through";
}

/**make todo li & delete btn*/
function paintToDo(newTodo){
    //li
    const li = document.createElement("li");
    li.id = newTodo.id;
    li.classList.add("text-dark","border-dark","list-group-item","bg-light","bg-opacity-50","fs-4");
    //li.addEventListener("click",doneToDo); 
    //span
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    //button
    const button = document.createElement("button");
    button.innerText = "❌";
    button.classList.add("btn");
    button.addEventListener("click", deleteToDo);
    
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

/** handle submit & toDos */
function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";

    const newTodoObj = {
        text:newTodo,
        id:Date.now(),
    }

    toDos.push(newTodoObj); //make array
    paintToDo(newTodoObj); //read
    saveToDos(); //save array
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

/** toDos parsing & read */
if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}