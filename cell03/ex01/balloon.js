const balloon = document.getElementById("balloon");
const colors = ["red", "green", "blue"];

let size = 200;
let colorIndex = 0;

function render() {
    balloon.style.width = `${size}px`;
    balloon.style.height = `${size}px`;
    balloon.style.backgroundColor = colors[colorIndex];
}

balloon.addEventListener("click", () => {
    size += 10;
    colorIndex = (colorIndex + 1) % colors.length;

    // Above 420px the balloon "explodes" back to its initial size.
    if (size > 420) {
        size = 200;
    }
    render();
});

balloon.addEventListener("mouseleave", () => {
    size = Math.max(200, size - 5);
    colorIndex = (colorIndex - 1 + colors.length) % colors.length;
    render();
});
