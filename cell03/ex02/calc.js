const form = document.getElementById("calculator");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const leftText = document.getElementById("left").value.trim();
    const rightText = document.getElementById("right").value.trim();
    const operator = document.getElementById("operator").value;

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

setInterval(() => {
    alert("Please, use me...");
}, 30000);
