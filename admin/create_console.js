function create_console() {
    Console_body = document.createElement("div");
    Console_body.id = "Console_body";
    Console_style = document.createElement("link");
    Console_style.ref = "stylesheet";
    Console_style.href = "https://raw.githubusercontent.com/geppp41/thing/main/console.css";
    document.body.appendChild(Console_body);
    document.head.appendChild(Console_style);
}