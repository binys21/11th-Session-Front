//초기화 함수
const form = document.querySelector(".todo-form"); //입력폼을 선택자로 선택

const btn = document.querySelector(".show-input");

const init = () => {
  form.addEventListener("submit", addTodoItem);
  btn.addEventListener("click", displayForm);
};

//버튼 클릭하면 <로 바뀌는 함수
const changeBtnName = () => {
  btn.innerText = ">";
};

const returnBtnName = () => {
  btn.innerText = "<";
};

//인풋 보여주는 함수
const displayForm = () => {
  if (form.style.display === "none" || form.style.display === "") {
    form.style.display = "block";
    btn.addEventListener("click", changeBtnName);
  } else {
    form.style.display = "none";
    btn.addEventListener("click", returnBtnName);
  }
};

//할 일 추가 addTodoItem함수
const addTodoItem = () => {
  event.preventDefault(); //submit 시 새로고침 방지
  const todoContent = document.querySelector(".todo-input").value; //인풋폼의 값을 선택자로 가져옴
  if (todoContent) printTodoItem(todoContent);
}; //todo-input의 value를 todoContent에 대입

const printTodoItem = (text) => {
  const todoItem = document.createElement("li");
  const todoText = document.createElement("span"); //새로운 할 일은 span태그
  const todoDel = document.createElement("button");
  //todo내용
  todoText.innerText = text;
  todoText.id = "todo-item-text";
  todoText.addEventListener("click", toggleToDone);

  //todo 삭제 버튼
  todoDel.innerHTML =
    '<i class="fa-solid fa-trash" style="color: #939495;"></i>';
  todoDel.className = "todo-delete-button";
  todoDel.addEventListener("click", deleteTodoItem);

  //li에 item 추가
  todoItem.className = "todo-list-item";
  todoItem.appendChild(todoText); //내용을 li 태그 자식으로 삽입
  todoItem.appendChild(todoDel); //버튼을 li 태그 자식으로 삽입
  document.querySelector(".todo-list").appendChild(todoItem); //li태그는 todo-list의 자식 요소로 삽입

  document.querySelector(".todo-input").value = "";
  //할일 추가 후 입력창 초기화
};

const toggleToDone = (e) => {
  deleteTodoItem(e); //한 일 삭제
  printDoneItem(e.target.innerText); //끝낸 일에 다시 출력
};

//끝낸 일 출력
const printDoneItem = (text) => {
  const doneItem = document.createElement("li");
  const doneText = document.createElement("span");
  const doneDel = document.createElement("button");
  const callback = document.createElement("button");

  //li태그에 id추가
  doneItem.setAttribute("id", "done");

  doneText.innerText = text;
  doneText.id = "done-text";

  doneDel.innerHTML =
    '<i class="fa-solid fa-trash" style="color: #939495;"></i>';
  doneDel.className = "done-delete-button";
  doneDel.addEventListener("click", deleteDoneItem);

  callback.innerHTML =
    '<i class="fa-solid fa-rotate" style="color: #808080"></i>';
  callback.className = "back";
  callback.addEventListener("click", toggleDoneToDo);

  //li에 item (span, button) 추가
  doneItem.className = "done-list-item";
  doneItem.appendChild(doneText);
  doneItem.appendChild(doneDel);
  doneItem.appendChild(callback);

  //ul에 li를 자식으로 추가
  document.querySelector(".done-list").appendChild(doneItem);
};

const toggleDoneToDo = (e) => {
  //끝낸일을 다시 할 일로
  const target = document.getElementById("done-text").innerText;
  deleteDoneItem(e);
  printTodoItem(target);
};

//끝낸 일 삭제
const deleteDoneItem = (e) => {
  const target = e.target.parentNode; //삭제버튼의 부모 요소 li
  document.querySelector(".done-list").removeChild(target);
};

const deleteTodoItem = (e) => {
  const target = e.target.parentNode; //삭제 버튼의 부모 요소까지 삭제해야함
  document.querySelector(".todo-list").removeChild(target);
};

//시작 함수
init();
