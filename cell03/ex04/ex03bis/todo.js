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

function saveTodos() {
    const todos = $("#ft_list > div").map(function () {
        return $(this).text();
    }).get();

    document.cookie =
        `${COOKIE_NAME}=${encodeURIComponent(JSON.stringify(todos))}; max-age=31536000; path=/`;
}

function makeTodo(text) {
    return $("<div>").text(text).on("click", function () {
        if (!confirm("Do you want to remove this TO DO?")) return;
        $(this).remove();
        saveTodos();
    });
}

$("#new").on("click", function () {
    const text = prompt("New TO DO:");
    if (text === null || text.trim() === "") return;

    $("#ft_list").prepend(makeTodo(text.trim())); // newest item first
    saveTodos();
});

getTodos().forEach(function (text) {
    $("#ft_list").append(makeTodo(text));
});
