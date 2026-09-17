const list = document.getElementById("ft_list");
const newButton = document.getElementById("new");
const COOKIE_NAME = "ft_list";

function getTodos() {
    const prefix = `${COOKIE_NAME}=`;
    const part = document.cookie
        .split("; ")
        .find((item) => item.startsWith(prefix));

    if (!part) return [];

    try {
        return JSON.parse(decodeURIComponent(part.substring(prefix.length)));
    } catch {
        return [];
    }
}

function saveTodos(todos) {
    // Save the list in a cookie for later visits.
    const value = encodeURIComponent(JSON.stringify(todos));
    document.cookie = `${COOKIE_NAME}=${value}; max-age=31536000; path=/`;
}

function createTodoElement(text) {
    const item = document.createElement("div");
    item.textContent = text;

    item.addEventListener("click", () => {
        if (!confirm("Do you want to remove this TO DO?")) return;

        item.remove(); 
        const todos = [...list.children].map((child) => child.textContent);
        saveTodos(todos);
    });

    return item;
}

function render(todos) {
    list.innerHTML = "";
    todos.forEach((text) => list.appendChild(createTodoElement(text)));
}

newButton.addEventListener("click", () => {
    const text = prompt("New TO DO:");
    if (text === null || text.trim() === "") return;

    const item = createTodoElement(text.trim());
    list.prepend(item); 

    const todos = [...list.children].map((child) => child.textContent);
    saveTodos(todos);
});

render(getTodos());
