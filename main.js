let taskNameInput = document.getElementById("task-name");
let taskDescInput = document.getElementById("task-desc");
let taskDateInput = document.getElementById("task-date");
let taskList = document.getElementById("task-list");
let searchBox = document.getElementById("search-box");
let filterStatus = document.getElementById("filter-status");




function addTask() {
    let taskName = taskNameInput.value;
    let taskDesc = taskDescInput.value;
    let taskDate = taskDateInput.value;

    if (taskName === "" || taskDesc === "" || taskDate === "") {
        alert("Please fill in all fields");
    
    }


    let li = document.createElement("li");
    li.innerText = taskNameInput.value;
    taskList.appendChild(li);

    li.innerHTML = `
        <div>
            <h1>${taskName}</h1>
            <p>${taskDesc}</p>
            <p>${taskDate}</p>
        </div>

         <div>
         <button class ="com">Complete</button>
         <button class="edit">Edit</button>
            <button onclick="removeTask(this)" class ="del">Delete</button>
                        
        </div>`;

    
      taskNameInput.value = "";
      taskDescInput.value = "";
      taskDateInput.value = "";
}

function removeTask(spanElement) {

     let li = spanElement.closest("li");
    taskList.removeChild(li);
   
}
function complete(){

let li = document.createElement("li");
li.innerText = taskNameInput.value;
taskList.appendChild(li);
}


function filterTasks() {
    let filter = filterStatus.value;
    let searchText = searchBox.value;

     Array.from(taskList.children).forEach((task) => {
         let matchesSearch = task.innerText.toLowerCase().includes(searchText);
      let matchesFilter = filter === "all" || task.getAttribute("data-status") === filter;

        if (matchesSearch && matchesFilter) {
            task.style.display = "";
        } else {
            task.style.display = "none";
       }
    })
  };


 searchBox.addEventListener("input", filterTasks);
filterStatus.addEventListener("change", filterTasks);
