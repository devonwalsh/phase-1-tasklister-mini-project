function addNewItem () {
  event.preventDefault();
  const ul = document.getElementById("list");
  const li = document.createElement("li");
  const span = document.createElement("span");
  const deleteButton = document.createElement("button");

  let newTask = document.getElementById("new-task-description").value;
  let newUser = document.getElementById("new-task-user").value;

  li.id = Date.now();
  span.contentEditable = true;
  deleteButton.innerHTML = "X";
  deleteButton.onclick = deleteItem;
  
  li.appendChild(span);
  li.appendChild(deleteButton);
  span.appendChild(document.createTextNode(`${newTask} \(${newUser}\)`));
  ul.appendChild(li);
}

function deleteItem () {
  let itemId = this.parentNode.id;
  document.getElementById(itemId).remove();
}

document.getElementById("create-task-form").addEventListener("submit", addNewItem);