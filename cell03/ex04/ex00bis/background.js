$("#change").on("click", function () {
    // jQuery changes the CSS property directly.
    const color = "#" + Math.floor(Math.random() * 0x1000000)
        .toString(16)
        .padStart(6, "0");
    $("body").css("background-color", color);
});
