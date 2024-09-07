function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value === "") {
      alert("Please enter a task.");
      return;
    }

    var taskDiv = document.createElement("div");
    taskDiv.classList.add("task-container");

    // Checkbox
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("form-check-input");

    // Task text
    var taskSpan = document.createElement("span");
    taskSpan.textContent = taskInput.value;

    // Event to mark task as done
    checkbox.onchange = function () {
      if (checkbox.checked) {
        taskDiv.classList.add("done");
        setTimeout(() => {
          taskDiv.remove();
        }, 500); // Delay of 0.5 seconds before removal
      }
    };

    // Delete Icon
    var deleteIcon = document.createElement("i");
    deleteIcon.classList.add("fas", "fa-trash-alt", "delete-icon");
    deleteIcon.onclick = function () {
      taskDiv.remove();
    };

    taskDiv.appendChild(checkbox);
    taskDiv.appendChild(taskSpan);
    taskDiv.appendChild(deleteIcon);
    taskList.appendChild(taskDiv);

    taskInput.value = ""; // Reset input field
  }