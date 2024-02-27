div = document.createElement("Button")
div.id = "div"
div.innerHTML = "hello There"
document.body.appendChild(div)
script = document.createElement("script")
script.src = `
d = document.getElementById("div")
d.addEventListener("click", => {
  alert("hello")
});
