class Console {
    e = document.getElementById("Console_body");
    log(text) {
        output = document.createElement("div");
        output.innerHTML = text;
        document.appendChild(output);
    }
}