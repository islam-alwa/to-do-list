let h2 = document.querySelector("#text_error");
h2.style.display = "none";
const h1 = document.querySelector("#page-title");
const input = document.querySelector("#new-task");
const addButton = document.querySelector("#add-button");
const taskList = document.getElementById("task-list");
try {
const today = new Date();
const options = [  today.getFullYear(), today.getMonth() + 1,  today.getDate() ];
const [year, month, day] = options;
const now = `${year}/${month}/${day}`
   
addButton.addEventListener("click", function() {
    const new_item  = document.createElement("li");
    new_item.textContent =input.value+ " " +now ;
    const taskList = document.querySelector("#task-list");
    taskList.appendChild(new_item);
    input.value = "";

    new_item.addEventListener("mouseover", function() {
    new_item.style.color = "red";
 })
    new_item.addEventListener("mouseout", function() {
    new_item.style.color = "black";
 })
    new_item.addEventListener("click", function() {
        new_item.remove();
 })
 })
  } catch (error) {
    h2.style.display = "block";
    h2.textContent = "Error getting date:" + error.message;
  }
