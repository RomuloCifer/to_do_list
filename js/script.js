
const form = document.querySelector(".task-form");
const input = document.querySelector(".task-input");
const list = document.querySelector(".task-list");

const tasks =[];

form.addEventListener("submit", function (event) {
    event.preventDefault(); // ñ recarregar a página

    const typedText = input.value.trim();
    if (typedText === "") {
        return;
    }

    const newTask = {
        id: Date.now(),
        title: typedText,
        completed: false,
    }
    tasks.push(newTask);
    input.value = "";
    console.log(tasks);
})

