let newtaskForm = document.getElementById("newtaskform");
let newtaskName = document.getElementById("newtaskname");
let exButton = document.getElementById("ex");
let noTask = document.getElementById("notask");
let taskList = document.getElementById("tasklist");
let check = document.getElementById("check");

// let value = "close";
// createNoteButton.addEventListener("click", displayOverlay);
// overlay.addEventListener("click", closeModalOverlay);
// noteForm.addEventListener("click", displayOverlay);

let tasks = [];
printTasks();

newtaskForm.addEventListener("submit", addnewTask);

// colorer();

function addnewTask(event) {
	console.log(tasks);
	event.preventDefault();
	let taskName = newtaskName.value;
	if (newtaskName.value.trim() == "") {
		newtaskName.style.borderColor = "red";
	} else {
		newtaskName.style.borderColor = "grey";

		let tasksObject = {
			tasksObjectName: taskName,
			// tasknumber: n+1
		};
		tasks.push(tasksObject);
		// localStorage.setItem("tasks", JSON.stringify(tasks));
	}
	// fetchLocalStorage();
	newtaskForm.reset();
	printTasks();
}

function printTasks() {
	taskList.textContent = "";
	if (tasks.length === 0) {
		noTask.style.display = "block";
	} else {
		noTask.style.display = "none";
	}
	tasks.forEach((task, i) => {
		// reasigning variables after extracting from task array
		let printName = task.tasksObjectName;
		let printIndex = i;

		// taskitself
		let createdtask = document.createElement("li");
		createdtask.classList.add("task");

		let checkTask = document.createElement("i");
		checkTask.setAttribute("class", "fas fa-check-square");

		let numOfTask = document.createElement("h3");
		numOfTask.setAttribute("class", "tasknum");
		numOfTask.textContent = `${printIndex + 1}.   `;

		// to create the html display
		let nameOfTask = document.createElement("h3");
		nameOfTask.setAttribute("class", "taskname");
		nameOfTask.textContent = printName;

		// create the delete icon
		let delTask = document.createElement("h3");
		delTask.setAttribute("class", "ex");
		delTask.setAttribute("onclick", `delFunction(${printIndex})`);
		delTask.textContent = "X";
		// delTask.setAttribute(onclick, delFunction(i));

		createdtask.append(checkTask, numOfTask, nameOfTask, delTask);
		taskList.append(createdtask);

		console.log([numOfTask, nameOfTask]);
		createdtask.onclick = () => {
			console.log("clicked");
			// if (checkTask.style.display == "none") {
			// 	checkTask.style.display = "block";
			// } else {
			// 	checkTask.style.display = "none";
			// }
			if (checkTask.style.opacity == "0.2") {
				checkTask.style.opacity = "1";
			} else {
				checkTask.style.opacity = "0.2";
			}
		};
	});
}
function delFunction(printIndex) {
	tasks = tasks.filter((task, index) => {
		return index !== printIndex;
	});
	printTasks();
	console.log(printIndex, index);
	console.log(tasks);
}
