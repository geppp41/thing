//javascript:fetch(`https://raw.githubusercontent.com/geppp41/thing/main/mtest.js`).then(data=>{data.text().then(text=>{eval(text)})});
div = document.createElement("Button")
div.id = "div"
div.innerHTML = "hello There"
document.body.appendChild(div)
script = document.createElement("script")
script.src = "https://raw.githubusercontent.com/geppp41/thing/main/mtest2.js"
document.body.appendChild(script)
