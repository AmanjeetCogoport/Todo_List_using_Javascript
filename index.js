// will start with javascript.

let todoArray = [];
let idCount = 0;
let countTodo = 1;



// get data from local storage.
let getDataFromLocalStorage = () => {
    let data = localStorage.getItem("todoArray");
    todoArray = JSON.parse(data);
    return todoArray;
}


// set data to local storage.
let setDataToLocalStorage = (taskArray) => {
    let stringifyData = JSON.stringify(taskArray);
    console.log(stringifyData);
    localStorage.setItem("todoArray",stringifyData);
}

// add todo list to local storage and array.
let addTodoList = () => {

    todoArray = getDataFromLocalStorage("todoArray");

    let currentListData = document.getElementById("todoText").value;
    // alert("ramji")
    // alert(currentListData)

    document.getElementById("todoText").value = "";
    // alert(currentListData);

    // alert(todoList);

    todoArray.push(
        {
            id: ++idCount,
            status: 0,
            list: currentListData
        }
    )
    
    setDataToLocalStorage(todoArray)
    showTodoList();
    // console.log(todoArray);
    return false;

}


// show todo list code.
let showTodoList = () =>{
    
    // alert("refreshed page.")
    if(getDataFromLocalStorage("todoArray")){
        todoArray = getDataFromLocalStorage("todoArray");
    }
    else{
        setDataToLocalStorage("todoArray", [])
    }

    let numberofTodo = 1;

    let todoListContainer = document.getElementById("todoListContainer");

    todoListContainer.innerHTML = "";

    todoArray.forEach( todolist =>{
        if(todolist.status === 0){
            todoListContainer.innerHTML += `
            <div class="card m-3 p-2" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">Todo ${numberofTodo++}</h5>
              <p class="card-text" id="${todolist.id}" >${todolist.list}</p>
        
              <a href="#" onclick="editList(${todolist.id}"  class="btn btn-success ">Done</a>
              <a href="#" onclick="editList(${todolist.id}" class="btn btn-primary">Edit</a>
              <a href="#" class="btn btn-danger" onclick="deleteList(${todolist.id})">Delete</a>
              
              
            </div>
        </div>
            `
        }
        else{
            todoListContainer.innerHTML += `
            <div class="card m-3 p-2" style="width: 18rem;">
            <div class="card-body">
              <del>
              <h5 class="card-title">Todo ${countTodo++}</h5>
              <p class="card-text">${currentListData}</p>
              </del>
        
              <a href="#" onclick="editList(${todolist.id}"  class="btn btn-success ">Done</a>
              <a href="#" onclick="editList(${todolist.id}" class="btn btn-primary">Edit</a>
              <a href="#" class="btn btn-danger" onclick="deleteList(${todolist.id})">Delete</a>
              
              
            </div>
        </div>
            `
        }
    })
    

    
}


// functionality for delete todo list.

let deleteList = (id) => {
    let newTodoList = [];
    todoArray.forEach( (list) => {
        if(id !== list.id ) newTodoList.push(list);
    });
    setDataToLocalStorage(newTodoList);
    console.log(newTodoList);
    showTodoList();
}


// reset todoList
function resetTodoList(){
    todoArray = [];
    setDataToLocalStorage(todoArray);
    showTodoList();
    idCount = 1;
}









showTodoList();