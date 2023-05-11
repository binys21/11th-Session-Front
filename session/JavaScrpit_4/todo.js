const form = document.querySelector(".todo-form");

const btn=document.querySelector(".popup-button");

const init = () => {
    form.addEventListener("submit", addTodoItem);
    btn.addEventListener("click",displayForm);
}; 

const displayForm = () => {
    form.style.display==="none"
    ? (form.style.display="block")
    : (form.style.display="none");
};

const addTodoItem=()=>{
    event.preventDefault();
    const todoContent=document.querySelector(".todo-input").value;
    if (todoContent) printTodoItem(todoContent);
};

const printTodoItem=(text)=>{
    const todoItem=document.createElement("li");
    const todoText=document.createElement("span");
    const todoDel=document.createElement("button");

    //todo 내용
    todoText.innerText=text;
    todoText.className="todo-item-ftext";
    todoText.addEventListener("click",toggleTodoToDone);

    //todo 삭제 버튼
    todoDel.innerText="삭제";
    todoDel.className="todo-delete-button";
    todoDel.addEventListener("click",deleteTodoItem);

    //li에 item (span, button) 추가
    todoItem.className="todo-list-item";
    todoItem.appendChild(todoText);
    todoItem.appendChild(todoDel);
    //ul에 li를 자식으로 추가 
    document.querySelector(".todo-list").appendChild(todoItem);

    //할일 추가 후 입력창 초기화 
    document.querySelector(".todo-input").value="";
};

//할일 삭제 함수
const deleteTodoItem=(e)=>{
    const target=e.target.parentNode; //삭제버튼의 부모 요소 li 
    document.querySelector(".todo-list").removeChild(target);
};

const toggleTodoToDone=(e)=>{ //할일에 있는 값을 지우고 done으로 이동
    deleteTodoItem(e);
    printDoneItem(e.target.innerText);
};

const printDoneItem=(text)=>{
    const doneItem=document.createElement("li");
    const doneText=document.createElement("span");
    const doneDel=document.createElement("button");

    doneText.innerText=text;
    doneText.className="done-item-text";
    doneText.addEventListener("click",toggleDoneToDo);

    doneDel.innerText="삭제";
    doneDel.className="done-delete-button";
    doneDel.addEventListener("click",deleteDoneItem);
    
    //li에 item (span, button) 추가
    doneItem.className="done-list-item";
    doneItem.appendChild(doneText);
    doneItem.appendChild(doneDel);

    //ul에 li를 자식으로 추가 
    document.querySelector(".done-list").appendChild(doneItem);
};

const deleteDoneItem=(e)=>{
    const target=e.target.parentNode; //삭제버튼의 부모 요소 li 
    document.querySelector(".done-list").removeChild(target);
};

const toggleDoneToDo=(e)=>{ //끝낸 일에 있는 일을 다시 할 일로 
    deleteDoneItem(e);
    printTodoItem(e.target.innerText);
};

//시작 함수
init();

