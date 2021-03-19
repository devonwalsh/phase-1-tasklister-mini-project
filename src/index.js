function addNewItem () {
  event.preventDefault();
  const ul = document.getElementById("list");
  const li = document.createElement("li");
  const deleteButton = document.createElement("button");
  let newTask = document.getElementById("new-task-description").value;
  li.id = Date.now();
  deleteButton.innerHTML = "X";
  li.appendChild(document.createTextNode(newTask));
  li.appendChild(deleteButton);
  ul.appendChild(li);
}

function deleteItem () {
  
}

document.getElementById("create-task-form").addEventListener("submit", addNewItem)