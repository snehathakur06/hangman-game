let tasks = []; // Global array
let taskId = 1; // To assign unique IDs

// Add task
function addTask(name) {
    tasks.push({ id: taskId++, name: name, status: "pending" });
    printTasks();
}

// Delete task by name
function deleteTask(name) {
    tasks = tasks.filter(task => task.name !== name);
    printTasks();
}

// Update task status
function updateTask(name, status) {
    let found = false;
    tasks.forEach(task => {
        if (task.name === name) {
            task.status = status.toLowerCase();
            found = true;
        }
    });
    if (!found) console.log(`Task "${name}" not found.`);
    printTasks();
}

// Print current tasks
function printTasks() {
    console.log("Current Tasks:");
    if (tasks.length === 0) {
        console.log("No tasks available.");
    } else {
        tasks.forEach(task => {
            console.log(`ID: ${task.id}, Name: ${task.name}, Status: ${task.status}`);
        });
    }
    console.log("--------------");
}

// Example driver function with switch-case
function manageTasks(choice, name, status = "") {
    switch (choice) {
        case "add":
            addTask(name);
            break;
        case "delete":
            deleteTask(name);
            break;
        case "update":
            updateTask(name, status);
            break;
        default:
            console.log("Invalid option.");
    }
}

// Example usage
manageTasks("add", "Buy milk");
manageTasks("add", "Study");
manageTasks("update", "Buy milk", "completed");
manageTasks("delete", "Study");