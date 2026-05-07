let h2 = document.querySelector("#text_error");
h2.style.display = "none";
const h1 = document.querySelector("#page-title");
const input = document.querySelector("#new-task");
const addButton = document.querySelector("#add-button");
const taskList = document.getElementById("task-list");
const h2_tasks = document.querySelector("#tasks_text");

function updateTaskCount() {
    if (taskList.children.length === 0) {
        h2_tasks.textContent = "No tasks";
        return;
    }
    const count = taskList.children.length; 
    h2_tasks.textContent = `Tasks : ${count}`;
}
const today = new Date();
const options = [  today.getFullYear(), today.getMonth() + 1,  today.getDate() ];
const [year, month, day] = options;
const now = `${year}/${month}/${day}`

   try {
    addButton.addEventListener("click", function() {

    if (input.value === "") return; 
    const new_item  = document.createElement("li");
    const check = document.createElement("input");
    const label = document.createElement("label");
    check.type = "checkbox";
    const button = document.createElement("button");
    button.textContent = "Delete";
    button.style.direction = "rtl";

    button.addEventListener("click", function() {
        taskList.removeChild(new_item);
        updateTaskCount();
    });
    
    check.addEventListener("change", function() {
     
        if (check.checked) {
            label.style.textDecoration = "line-through";
             label.style.color = "gray";

        } else {
            label.style.textDecoration = "none";
            label.style.color = "black";
    }
      
    });
    
    label.textContent = " " + input.value + " " + now;
    taskList.appendChild(new_item);
    new_item.appendChild(check);
    new_item.appendChild(label);
    new_item.appendChild(button);
    input.value = "";
    updateTaskCount();
    new_item.addEventListener("mouseover", function() {
    new_item.style.color = "red";
 })
    new_item.addEventListener("mouseout", function() {
    new_item.style.color = "black";
 })
    check.addEventListener("click", function() {
                check.checked = !check.checked;
    })
    new_item.addEventListener("click", function() {
        check.checked = !check.checked;
        if (check.checked) {
            label.style.textDecoration = "line-through";
             label.style.color = "gray";

        } else {
            label.style.textDecoration = "none";
            label.style.color = "black";

        }
 })
 })
  } catch (error) {
    h2.style.display = "block";
    h2.textContent = "Error getting date:" + error.message;
  }
