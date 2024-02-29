/// Schoology_qol.js
window.addEventListener("keyup", event => {
  if (event.which === 17 && event.which === 192) {
      eval(prompt("Eval:"));
  }
})
function run(){
Console_body = document.createElement("div");
Console_body.id = "Console_body";
Console_style = document.createElement("link");
Console_style.ref = "stylesheet";
Console_style.href = "https://raw.githubusercontent.com/geppp41/thing/main/console.css";
document.body.appendChild(Console_body);
document.head.appendChild(Console_style);
class Console {
  e = document.getElementById("Console_body");
  log(text) {
      output = document.createElement("div");
      output.innerHTML = text;
      document.appendChild(output);
  }
}
}
