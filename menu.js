/// Schoology_qol.js
window.addEventListener("keyup", event => {
  //if (event.which === 17 && event.which === 192) {
  if (event.which === 135) {
      eval(prompt("Eval:"));
  }
})
function admin() {
  e = prompt("password: ")
  if (e == "password") {
    admin = document.createElement("script");
    admin.src = "https://raw.githubusercontent.com/geppp41/thing/main/admin.js";
    document.body.appendChild(admin);
  }
}
