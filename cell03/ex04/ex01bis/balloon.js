const colors = ["red", "green", "blue"];
let size = 200;
let colorIndex = 0;

function render() {
    $("#balloon").css({
        width: `${size}px`,
        height: `${size}px`,
        "background-color": colors[colorIndex]
    });
}

$("#balloon").on("click", function () {
    size += 10;
    colorIndex = (colorIndex + 1) % colors.length;
    if (size > 420) size = 200;
    render();
});

$("#balloon").on("mouseleave", function () {
    size = Math.max(200, size - 5);
    colorIndex = (colorIndex - 1 + colors.length) % colors.length;
    render();
});
