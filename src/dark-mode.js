var icon = document.getElementById("icon");
var currentMode = localStorage.getItem("mode");

if (currentMode === "light") {
  document.body.classList.add("light-mode");
  icon.src = "resources/moon.png";
} else {
  document.body.classList.remove("light-mode");
  icon.src = "resources/sun.png";
}

icon.onclick = function () {
  document.body.classList.toggle("light-mode");

  if (document.body.classList.contains("light-mode")) {
    icon.src = "resources/moon.png";
    localStorage.setItem("mode", "light");
  } else {
    icon.src = "resources/sun.png";
    localStorage.removeItem("mode");
  }
};
