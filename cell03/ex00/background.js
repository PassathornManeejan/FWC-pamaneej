const button = document.getElementById("change");

button.addEventListener("click", () => {
    // Build a random 6-digit hexadecimal color.
    const color = "#" + Math.floor(Math.random() * 0x1000000)
        .toString(16)
        .padStart(6, "0");
    document.body.style.backgroundColor = color;
});
