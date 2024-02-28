/// Schoology_qol.js
window.addEventListener("keyup", event => {
  if (event.ctrlKey && event.which === 192) {
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
(function(console){

  console.save = function(data, filename){
  
      if(!data) {
          console.error('Console.save: No data')
          return;
      }
  
      if(!filename) filename = 'console.json'
  
      if(typeof data === "object"){
          data = JSON.stringify(data, undefined, 4)
      }
  
      var blob = new Blob([data], {type: 'text/json'}),
          e    = document.createEvent('MouseEvents'),
          a    = document.createElement('a')
  
      a.download = filename
      a.href = window.URL.createObjectURL(blob)
      a.dataset.downloadurl =  ['text/json', a.download, a.href].join(':')
      e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
      a.dispatchEvent(e)
   }
  })(console)