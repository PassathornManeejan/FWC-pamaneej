$("#calculator").on("submit", function (event) {
    event.preventDefault();

    const leftText = $("#left").val().trim();
    const rightText = $("#right").val().trim();
    const operator = $("#operator").val();

    if (!/^\d+$/.test(leftText) || !/^\d+$/.test(rightText)) {
        alert("Error :(");
        return;
    }

    const left = Number(leftText);
    const right = Number(rightText);

    if ((operator === "/" || operator === "%") && right === 0) {
        alert("It's over 9000!");
        console.log("It's over 9000!");
        return;
    }

    let result;
    if (operator === "+") result = left + right;
    else if (operator === "-") result = left - right;
    else if (operator === "*") result = left * right;
    else if (operator === "/") result = left / right;
    else result = left % right;

    alert(result);
    console.log(result);
});

setInterval(function () {
    alert("Please, use me...");
}, 30000);
