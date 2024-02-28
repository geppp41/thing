Mpath = "https://raw.githubusercontent.com/geppp41/thing/main/";
Spaths = ["admin.js", "admin/console.js", "admin/create_console.js"]
for (i = 0; i < length(Spaths); i++) {
    script = document.createElement("script");
    script.src = Mpath + Spaths[i];
    document.body.createElement(script)
}