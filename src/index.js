document.getElementById("create-task-form").addEventListener("submit", function(event) {
  event.preventDefault();
  const ul = document.getElementById("list");
  const li = document.createElement("li");
  let newTask = document.getElementById("new-task-description").value;
  li.appendChild(document.createTextNode(newTask));
  ul.appendChild(li);
})